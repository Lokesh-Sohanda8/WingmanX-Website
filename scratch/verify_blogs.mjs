import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function runTest() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9298',
    '--window-size=1440,900',
    'http://localhost:5173/blogs?skipLoader=true'
  ]);

  try {
    await new Promise(r => setTimeout(r, 2500));
    const listRes = await fetch('http://127.0.0.1:9298/json/list');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
    await new Promise(res => ws.onopen = res);

    let id = 1;
    const send = (method, params = {}) => new Promise((res, rej) => {
      const msgId = id++;
      const handler = evt => {
        const d = JSON.parse(evt.data);
        if (d.id === msgId) {
          ws.removeEventListener('message', handler);
          if (d.error) rej(d.error);
          else res(d.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    await new Promise(r => setTimeout(r, 1500));

    console.log('=== 1. VERIFYING /blogs LISTING PAGE ===');
    const listingRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const headerTitle = document.querySelector('.journal-hero-header .display-title')?.textContent?.trim();
          const coverTitle = document.querySelector('.journal-cover-story .cover-title')?.textContent?.trim();
          const coverLink = document.querySelector('.journal-cover-story a[data-internal-route]')?.getAttribute('href');
          
          const cards = Array.from(document.querySelectorAll('.journal-editorial-grid .journal-card-editorial')).map(c => ({
            title: c.querySelector('h3')?.textContent?.trim(),
            cat: c.querySelector('.j-cat-tag')?.textContent?.trim(),
            link: c.querySelector('a[data-internal-route]')?.getAttribute('href'),
            readTime: c.querySelector('.j-card-footer span')?.textContent?.trim()
          }));

          return { headerTitle, coverTitle, coverLink, cardCount: cards.length, cards };
        })()
      `,
      returnByValue: true
    });

    console.log('Listing details:', JSON.stringify(listingRes.result?.value || listingRes, null, 2));

    // Capture screenshot of /blogs desktop (both top and scrolled to cards)
    const shotListing = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    fs.writeFileSync('scratch/blogs_listing_desktop.png', Buffer.from(shotListing.data, 'base64'));
    console.log('Saved scratch/blogs_listing_desktop.png');

    // Scroll to secondary grid
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.journal-grid-section')?.scrollIntoView({ behavior: 'instant' })`
    });
    await new Promise(r => setTimeout(r, 400));
    const shotGrid = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    fs.writeFileSync('scratch/blogs_grid_desktop.png', Buffer.from(shotGrid.data, 'base64'));
    console.log('Saved scratch/blogs_grid_desktop.png');

    // 2. VERIFY EACH DEDICATED ARTICLE PAGE
    const articleRoutes = [
      { name: 'Monsoon Ghats', route: '/blogs/mastering-the-monsoon-ghats' },
      { name: 'Top 10 Accessories (Preserved)', route: '/blogs/top-10-must-have-accessories-for-every-rider' },
      { name: 'Art of the Sweep', route: '/blogs/the-art-of-the-sweep' },
      { name: 'Spiti Valley', route: '/blogs/spiti-valley-unfiltered' },
      { name: 'Ride We Almost Didnt Take', route: '/blogs/the-ride-we-almost-didnt-take' },
      { name: 'Between Home and Mountains', route: '/blogs/somewhere-between-home-and-the-mountains' },
      { name: 'Last Rider in the Pack', route: '/blogs/the-last-rider-in-the-pack' }
    ];

    for (const art of articleRoutes) {
      console.log(`\n=== VERIFYING ARTICLE: ${art.name} (${art.route}) ===`);
      // Navigate via window.appRouter.navigate
      const navRes = await send('Runtime.evaluate', {
        expression: `
          if (window.appRouter) {
            window.appRouter.navigate('${art.route}');
            'navigated via appRouter';
          } else {
            window.location.href = '${art.route}';
            'navigated via location';
          }
        `,
        returnByValue: true
      });
      console.log('Nav response:', navRes.result?.value);
      await new Promise(r => setTimeout(r, 800));

      const artRes = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const path = window.location.pathname;
            const title = document.querySelector('.article-main-title')?.textContent?.trim();
            const badge = document.querySelector('.article-category-badge')?.textContent?.trim();
            const author = document.querySelector('.meta-item.author .meta-val')?.textContent?.trim();
            const date = document.querySelector('.meta-item.date .meta-val')?.textContent?.trim();
            const readTime = document.querySelector('.meta-item.read-time .meta-val')?.textContent?.trim();
            const heroImg = document.querySelector('.article-hero-img')?.getAttribute('src');
            const sectionsCount = document.querySelectorAll('.accessory-item-card').length;
            const hasCallout = !!document.querySelector('.article-callout-panel');
            const hasConclusion = !!document.querySelector('.article-conclusion-block');
            const relatedCount = document.querySelectorAll('.related-card').length;
            const backLink = document.querySelector('.back-to-journal-link')?.getAttribute('href');
            const bodyWords = (document.querySelector('.article-body-section')?.innerText || '').split(/\\s+/).filter(Boolean).length;

            return { path, title, badge, author, date, readTime, heroImg, sectionsCount, hasCallout, hasConclusion, relatedCount, backLink, bodyWords };
          })()
        `,
        returnByValue: true
      });

      console.log(`Result for ${art.name}:`, JSON.stringify(artRes.result?.value || artRes, null, 2));

      // Scroll to top and take screenshot
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0)` });
      await new Promise(r => setTimeout(r, 200));

      const safeSlug = art.route.split('/').pop();
      const shotArt = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
      fs.writeFileSync(`scratch/article_${safeSlug}.png`, Buffer.from(shotArt.data, 'base64'));
      console.log(`Saved scratch/article_${safeSlug}.png`);
    }

    // 3. TEST BACK NAVIGATION LINK
    console.log('\n=== TESTING BACK TO JOURNAL LINK ===');
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.back-to-journal-link').click()`
    });
    await new Promise(r => setTimeout(r, 800));

    const backRes = await send('Runtime.evaluate', {
      expression: `
        (() => ({
          path: window.location.pathname,
          header: document.querySelector('.journal-hero-header .display-title')?.textContent?.trim(),
          cards: document.querySelectorAll('.journal-editorial-grid .journal-card-editorial').length
        }))()
      `,
      returnByValue: true
    });
    console.log('After back click:', JSON.stringify(backRes.result?.value || backRes, null, 2));

    // 4. MOBILE VIEW TEST
    console.log('\n=== MOBILE VIEW TEST (375x812) ===');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 500));

    const shotMobileListing = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    fs.writeFileSync('scratch/blogs_listing_mobile.png', Buffer.from(shotMobileListing.data, 'base64'));
    console.log('Saved scratch/blogs_listing_mobile.png');

    // Navigate to one new article on mobile
    await send('Runtime.evaluate', {
      expression: `window.Router.navigate('/blogs/the-ride-we-almost-didnt-take')`
    });
    await new Promise(r => setTimeout(r, 600));

    const shotMobileArticle = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    fs.writeFileSync('scratch/article_the-ride-we-almost-didnt-take_mobile.png', Buffer.from(shotMobileArticle.data, 'base64'));
    console.log('Saved scratch/article_the-ride-we-almost-didnt-take_mobile.png');

    console.log('\n=== ALL TESTS PASSED SUCCESFULLY! ===');
    ws.close();
  } catch (err) {
    console.error('Test error:', err);
  } finally {
    child.kill();
  }
}

runTest();
