import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function run() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9297',
    '--window-size=1440,1100',
    'http://localhost:5173/blogs?skipLoader=true'
  ]);

  try {
    await new Promise(r => setTimeout(r, 2500));
    const listRes = await fetch('http://127.0.0.1:9297/json/list');
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
      height: 1000,
      deviceScaleFactor: 1,
      mobile: false
    });

    await new Promise(r => setTimeout(r, 1200));

    // 1. Capture /blogs listing
    console.log('Capturing blogs listing...');
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0)` });
    await new Promise(r => setTimeout(r, 300));
    const shotTop = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/showcase_blogs_hero.png', Buffer.from(shotTop.data, 'base64'));

    // Scroll to 6-card grid
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.journal-grid-section')?.scrollIntoView({ behavior: 'instant' })`
    });
    await new Promise(r => setTimeout(r, 400));
    const shotGrid = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/showcase_blogs_cards_grid.png', Buffer.from(shotGrid.data, 'base64'));

    // Helper for article captures
    const captureArticle = async (route, name) => {
      console.log(`Capturing ${name} (${route})...`);
      await send('Runtime.evaluate', {
        expression: `window.appRouter.navigate('${route}')`
      });
      await new Promise(r => setTimeout(r, 700));

      // Scroll top
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0)` });
      await new Promise(r => setTimeout(r, 300));
      const shotHero = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`scratch/showcase_${name}_top.png`, Buffer.from(shotHero.data, 'base64'));

      // Scroll to body & sections
      await send('Runtime.evaluate', {
        expression: `document.querySelector('.accessory-sections-list')?.scrollIntoView({ behavior: 'instant' })`
      });
      await new Promise(r => setTimeout(r, 400));
      const shotBody = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`scratch/showcase_${name}_body.png`, Buffer.from(shotBody.data, 'base64'));

      // Scroll to conclusion & related
      await send('Runtime.evaluate', {
        expression: `document.querySelector('.article-conclusion-block')?.scrollIntoView({ behavior: 'instant' })`
      });
      await new Promise(r => setTimeout(r, 400));
      const shotBottom = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`scratch/showcase_${name}_bottom.png`, Buffer.from(shotBottom.data, 'base64'));
    };

    // 2. Story 1: The Ride We Almost Didn't Take
    await captureArticle('/blogs/the-ride-we-almost-didnt-take', 'ride_almost_didnt_take');

    // 3. Story 2: Somewhere Between Home and the Mountains
    await captureArticle('/blogs/somewhere-between-home-and-the-mountains', 'between_home_mountains');

    // 4. Story 3: The Last Rider in the Pack
    await captureArticle('/blogs/the-last-rider-in-the-pack', 'last_rider_pack');

    // 5. Mobile screenshot
    console.log('Capturing mobile...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', {
      expression: `window.appRouter.navigate('/blogs')`
    });
    await new Promise(r => setTimeout(r, 700));
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.journal-grid-section')?.scrollIntoView({ behavior: 'instant' })`
    });
    await new Promise(r => setTimeout(r, 400));
    const shotMobGrid = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/showcase_mobile_grid.png', Buffer.from(shotMobGrid.data, 'base64'));

    console.log('All showcase captures complete!');
    ws.close();
  } catch (err) {
    console.error('Showcase capture error:', err);
  } finally {
    child.kill();
  }
}

run();
