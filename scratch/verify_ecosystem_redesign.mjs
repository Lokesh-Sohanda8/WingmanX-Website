import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function verifyAllSections() {
  console.log("Starting Chrome for full ecosystem verification...");
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9276',
    '--window-size=1440,1080',
    'http://localhost:5173/wingmanx-ecosystem?skipLoader=true'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch('http://127.0.0.1:9276/json/list');
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
    await send('DOM.enable');

    console.log("Navigating to ecosystem page...");
    await send('Page.navigate', { url: 'http://localhost:5173/wingmanx-ecosystem?skipLoader=true' });
    await new Promise(r => setTimeout(r, 2500));

    // Force instantaneous scrolling and dismiss loader
    await send('Runtime.evaluate', {
      expression: `
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        const loader = document.getElementById('wingmanx-loader');
        if (loader) loader.style.display = 'none';
      `
    });

    // Capture Desktop 1: Hero
    console.log("Capturing 1. Desktop Hero...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.ecosystem-hero-b2c')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const s1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_desktop_hero.png', Buffer.from(s1.data, 'base64'));

    // Capture Desktop 2: Platform Section
    console.log("Capturing 2. Desktop Platform...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.ecosystem-platform-section')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const s2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_desktop_platform.png', Buffer.from(s2.data, 'base64'));

    // Capture Desktop 3: Trusted Section
    console.log("Capturing 3. Desktop Trusted...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.ecosystem-trusted-section')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const s3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_desktop_trusted.png', Buffer.from(s3.data, 'base64'));

    // Capture Desktop 4: Retained Architecture Section
    console.log("Capturing 4. Desktop Retained Architecture...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.ecosystem-architecture-wrap')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const s4 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_desktop_retained.png', Buffer.from(s4.data, 'base64'));

    // Mobile Viewport (390 x 844)
    console.log("Switching to Mobile Viewport (390x844)...");
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });

    // Capture Mobile 1: Hero
    console.log("Capturing 5. Mobile Hero...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.ecosystem-hero-b2c')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const s5 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_mobile_hero.png', Buffer.from(s5.data, 'base64'));

    // Capture Mobile 2: Platform
    console.log("Capturing 6. Mobile Platform...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.ecosystem-platform-section')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const s6 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_mobile_platform.png', Buffer.from(s6.data, 'base64'));

    // Capture Mobile 3: Trusted
    console.log("Capturing 7. Mobile Trusted...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.ecosystem-trusted-section')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const s7 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_mobile_trusted.png', Buffer.from(s7.data, 'base64'));

    console.log("All 7 screenshots captured!");
    ws.close();
  } catch (err) {
    console.error("Test error:", err);
  } finally {
    child.kill();
    console.log("Completed verification run.");
  }
}

verifyAllSections();
