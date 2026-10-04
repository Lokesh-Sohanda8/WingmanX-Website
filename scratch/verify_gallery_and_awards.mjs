import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function runTest() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9299',
    '--window-size=1440,900',
    'http://localhost:5173/our-galleries?skipLoader=true'
  ]);

  await new Promise(r => setTimeout(r, 2500));
  const listRes = await fetch('http://127.0.0.1:9299/json/list');
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

  // 1. Check Gallery Page info
  const galleryEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const title = document.querySelector('.display-title')?.textContent?.trim();
        const filters = Array.from(document.querySelectorAll('.gallery-filter-btn')).map(b => ({
          text: b.textContent.trim(),
          filter: b.getAttribute('data-gallery-filter'),
          active: b.classList.contains('active')
        }));
        const totalCards = document.querySelectorAll('.masonry-card').length;
        const imageCards = document.querySelectorAll('.masonry-card[data-category="images"]').length;
        const videoCards = document.querySelectorAll('.masonry-card[data-category="videos"]').length;
        const visibleImages = Array.from(document.querySelectorAll('.masonry-card[data-category="images"]')).filter(c => c.style.display !== 'none').length;
        const visibleVideos = Array.from(document.querySelectorAll('.masonry-card[data-category="videos"]')).filter(c => c.style.display !== 'none').length;

        return {
          title,
          filters,
          totalCards,
          imageCards,
          videoCards,
          visibleImages,
          visibleVideos
        };
      })()
    `,
    returnByValue: true
  });
  console.log('=== GALLERY CHECK ===');
  console.log(JSON.stringify(galleryEval.result.value, null, 2));

  // Capture Desktop Screenshot: Gallery Images
  const snap1 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/gallery_desktop_images.png', Buffer.from(snap1.data, 'base64'));
  console.log('Captured scratch/gallery_desktop_images.png');

  // 2. Click VIDEOS filter button
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const vidBtn = document.querySelector('[data-gallery-filter="videos"]');
        if (vidBtn) vidBtn.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const videoFilterEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const visibleImages = Array.from(document.querySelectorAll('.masonry-card[data-category="images"]')).filter(c => c.style.display !== 'none').length;
        const visibleVideos = Array.from(document.querySelectorAll('.masonry-card[data-category="videos"]')).filter(c => c.style.display !== 'none').length;
        const activeFilter = document.querySelector('.gallery-filter-btn.active')?.textContent?.trim();
        return { activeFilter, visibleImages, visibleVideos };
      })()
    `,
    returnByValue: true
  });
  console.log('=== AFTER CLICKING VIDEOS FILTER ===');
  console.log(JSON.stringify(videoFilterEval.result.value, null, 2));

  // Capture Desktop Screenshot: Gallery Videos
  const snap2 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/gallery_desktop_videos.png', Buffer.from(snap2.data, 'base64'));
  console.log('Captured scratch/gallery_desktop_videos.png');

  // 3. Test Lightbox Open by clicking first visible video card
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const firstVid = document.querySelector('.masonry-card[data-category="videos"]');
        if (firstVid) firstVid.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const lightboxEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const modal = document.getElementById('lightbox-modal');
        const img = document.getElementById('lightbox-img');
        const video = document.getElementById('lightbox-video');
        const caption = document.getElementById('lightbox-caption');
        return {
          modalActive: modal?.classList.contains('active'),
          imgDisplay: img?.style.display,
          videoDisplay: video?.style.display,
          videoSrc: video?.src,
          caption: caption?.textContent
        };
      })()
    `,
    returnByValue: true
  });
  console.log('=== LIGHTBOX EXPANSION TEST ===');
  console.log(JSON.stringify(lightboxEval.result.value, null, 2));

  const snap3 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/gallery_video_lightbox.png', Buffer.from(snap3.data, 'base64'));
  console.log('Captured scratch/gallery_video_lightbox.png');

  // Close lightbox
  await send('Runtime.evaluate', {
    expression: `document.getElementById('lightbox-close-btn')?.click();`
  });
  await new Promise(r => setTimeout(r, 500));

  // 4. Test Mobile View of Gallery
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 600));

  // Switch back to images
  await send('Runtime.evaluate', {
    expression: `document.querySelector('[data-gallery-filter="images"]')?.click();`
  });
  await new Promise(r => setTimeout(r, 600));

  const snap4 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/gallery_mobile_images.png', Buffer.from(snap4.data, 'base64'));
  console.log('Captured scratch/gallery_mobile_images.png');

  // 5. Navigate to /awards
  await send('Page.navigate', { url: 'http://localhost:5173/awards?skipLoader=true' });
  await new Promise(r => setTimeout(r, 2000));

  // Reset to desktop viewport for Awards
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 1000));

  const awardsEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const title = document.querySelector('.display-title')?.textContent?.trim();
        const milestones = Array.from(document.querySelectorAll('.milestone-block')).map(b => {
          const year = b.querySelector('.milestone-node-circle')?.textContent?.trim();
          const card = b.querySelector('.milestone-content-card');
          const cardTitle = card?.querySelector('h3')?.textContent?.trim();
          const cardTag = card?.querySelector('.milestone-year-tag')?.textContent?.trim();
          const cardDesc = card?.querySelector('p')?.textContent?.trim();
          const hasPhoto = !!card?.querySelector('.milestone-photo-badge');
          const hasIcon = !!card?.querySelector('.milestone-icon-badge');
          const rect = card?.getBoundingClientRect();
          return {
            year,
            cardTitle,
            cardTag,
            cardDesc,
            hasPhoto,
            hasIcon,
            width: rect ? Math.round(rect.width) : 0,
            height: rect ? Math.round(rect.height) : 0
          };
        });
        return { title, milestoneCount: milestones.length, milestones };
      })()
    `,
    returnByValue: true
  });
  console.log('=== AWARDS CHECK ===');
  console.log(JSON.stringify(awardsEval.result.value, null, 2));

  // Capture full page screenshot of Awards desktop
  const fullPageRes = await send('Page.getLayoutMetrics');
  const contentHeight = Math.ceil(fullPageRes.contentSize.height);

  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: contentHeight,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 1000));

  const snap5 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/awards_desktop_full_road.png', Buffer.from(snap5.data, 'base64'));
  console.log('Captured scratch/awards_desktop_full_road.png');

  // Tablet View for Awards
  await send('Emulation.setDeviceMetricsOverride', {
    width: 768,
    height: 1024,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 800));
  const snap6 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/awards_tablet.png', Buffer.from(snap6.data, 'base64'));
  console.log('Captured scratch/awards_tablet.png');

  // Mobile View for Awards
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 800));

  const awardsMobileEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const milestones = Array.from(document.querySelectorAll('.milestone-block')).map(b => {
          const card = b.querySelector('.milestone-content-card');
          const rect = card?.getBoundingClientRect();
          return {
            title: card?.querySelector('h3')?.textContent?.trim(),
            width: rect ? Math.round(rect.width) : 0
          };
        });
        return milestones;
      })()
    `,
    returnByValue: true
  });
  console.log('=== AWARDS MOBILE CARD WIDTHS ===');
  console.log(JSON.stringify(awardsMobileEval.result.value, null, 2));

  const snap7 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/awards_mobile.png', Buffer.from(snap7.data, 'base64'));
  console.log('Captured scratch/awards_mobile.png');

  ws.close();
  child.kill();
  console.log('All tests completed successfully!');
}

runTest().catch(err => {
  console.error('Error during testing:', err);
  process.exit(1);
});
