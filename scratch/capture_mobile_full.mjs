import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function captureMobile() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9302',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch('http://127.0.0.1:9302/json/list');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);

    let id = 1;
    const send = (m, p = {}) => new Promise((res, rej) => {
      const i = id++;
      const h = e => {
        const d = JSON.parse(e.data);
        if (d.id === i) {
          ws.removeEventListener('message', h);
          if (d.error) rej(d.error); else res(d.result);
        }
      };
      ws.addEventListener('message', h);
      ws.send(JSON.stringify({ id: i, method: m, params: p }));
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await send('DOM.enable');

    // 1. Mobile Home Section 06
    console.log("Navigating to Home on Mobile...");
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });

    await send('Page.navigate', { url: 'http://localhost:5173/?skipLoader=true' });
    await new Promise(r => setTimeout(r, 2500));

    await send('Runtime.evaluate', {
      expression: `
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        const loader = document.getElementById('wingmanx-loader');
        if (loader) loader.style.display = 'none';
        const vidBlock = document.querySelector('.ecosystem-video-story-block');
        if (vidBlock) {
          const top = vidBlock.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo(0, top);
        }
      `
    });
    await new Promise(r => setTimeout(r, 800));

    const sHomeMobileVid = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/home_section06_mobile_video.png', Buffer.from(sHomeMobileVid.data, 'base64'));
    console.log("Saved scratch/home_section06_mobile_video.png");

    // Scroll down on mobile to see app screens
    await send('Runtime.evaluate', { expression: `window.scrollBy(0, 500);` });
    await new Promise(r => setTimeout(r, 800));
    const sHomeMobileApps = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/home_section06_mobile_apps.png', Buffer.from(sHomeMobileApps.data, 'base64'));
    console.log("Saved scratch/home_section06_mobile_apps.png");

    // 2. Mobile Ecosystem Section 01
    console.log("Navigating to Ecosystem on Mobile...");
    await send('Page.navigate', { url: 'http://localhost:5173/wingmanx-ecosystem?skipLoader=true' });
    await new Promise(r => setTimeout(r, 2500));

    await send('Runtime.evaluate', {
      expression: `
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        const loader = document.getElementById('wingmanx-loader');
        if (loader) loader.style.display = 'none';
        const p1 = document.getElementById('pillar-rider-details');
        if (p1) {
          const top = p1.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo(0, top);
        }
      `
    });
    await new Promise(r => setTimeout(r, 800));

    const sEcoMobileHeader = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_rider_mobile_header.png', Buffer.from(sEcoMobileHeader.data, 'base64'));
    console.log("Saved scratch/eco_rider_mobile_header.png");

    // Scroll to cards
    await send('Runtime.evaluate', { expression: `window.scrollBy(0, 380);` });
    await new Promise(r => setTimeout(r, 800));
    const sEcoMobileCards = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_rider_mobile_cards.png', Buffer.from(sEcoMobileCards.data, 'base64'));
    console.log("Saved scratch/eco_rider_mobile_cards.png");

    ws.close();
  } finally {
    child.kill();
  }
}

captureMobile();
