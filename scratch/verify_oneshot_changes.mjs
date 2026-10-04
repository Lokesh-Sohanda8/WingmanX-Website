import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function runVerification() {
  console.log("Launching headless Chrome for verification...");
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9288',
    '--window-size=1440,1080',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch('http://127.0.0.1:9288/json/list');
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

    // -------------------------------------------------------------
    // PART 1: HOME PAGE - SECTION 06 APP SHOWCASE & VIDEO
    // -------------------------------------------------------------
    console.log("Navigating to Home Page...");
    await send('Page.navigate', { url: 'http://localhost:5173/?skipLoader=true' });
    await new Promise(r => setTimeout(r, 2500));

    await send('Runtime.evaluate', {
      expression: `
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        const loader = document.getElementById('wingmanx-loader');
        if (loader) loader.style.display = 'none';
      `
    });

    // Scroll to #app-showcase
    console.log("Scrolling to #app-showcase on Desktop...");
    await send('Runtime.evaluate', {
      expression: `
        const section = document.getElementById('app-showcase');
        if (section) section.scrollIntoView({ block: 'start' });
      `
    });
    await new Promise(r => setTimeout(r, 1000));

    // Capture Home Section 06 Video Block
    const sHomeVideo = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/home_section06_video_desktop.png', Buffer.from(sHomeVideo.data, 'base64'));
    console.log("Saved scratch/home_section06_video_desktop.png");

    // Scroll down slightly to capture video + app showcase screenshots together
    await send('Runtime.evaluate', {
      expression: `window.scrollBy(0, 600);`
    });
    await new Promise(r => setTimeout(r, 800));
    const sHomeAppScreens = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/home_section06_screenshots_desktop.png', Buffer.from(sHomeAppScreens.data, 'base64'));
    console.log("Saved scratch/home_section06_screenshots_desktop.png");

    // Test video mute toggle interaction
    const videoStateBefore = await send('Runtime.evaluate', {
      expression: `
        const v = document.getElementById('ecosystem-showcase-video');
        const b = document.getElementById('ecosystem-video-mute-btn');
        ({
          exists: !!v,
          src: v?.currentSrc || v?.src,
          muted: v?.muted,
          btnText: b?.innerText?.trim()
        })
      `,
      returnByValue: true
    });
    console.log("Video state before toggle:", videoStateBefore.result.value);

    // Click mute button
    await send('Runtime.evaluate', {
      expression: `
        const b = document.getElementById('ecosystem-video-mute-btn');
        if (b) b.click();
      `
    });
    await new Promise(r => setTimeout(r, 300));

    const videoStateAfter = await send('Runtime.evaluate', {
      expression: `
        const v = document.getElementById('ecosystem-showcase-video');
        const b = document.getElementById('ecosystem-video-mute-btn');
        ({
          muted: v?.muted,
          btnText: b?.innerText?.trim()
        })
      `,
      returnByValue: true
    });
    console.log("Video state after toggle:", videoStateAfter.result.value);

    // Mobile Home Section 06
    console.log("Checking Home Section 06 on Mobile (390x844)...");
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', {
      expression: `
        const section = document.getElementById('app-showcase');
        if (section) section.scrollIntoView({ block: 'start' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
    const sHomeMobile = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/home_section06_mobile.png', Buffer.from(sHomeMobile.data, 'base64'));
    console.log("Saved scratch/home_section06_mobile.png");

    // Reset emulation to desktop
    await send('Emulation.clearDeviceMetricsOverride');

    // -------------------------------------------------------------
    // PART 2: OUR ECOSYSTEM PAGE - SECTION 01 RIDER EXPERIENCE & DEEP PANELS
    // -------------------------------------------------------------
    console.log("Navigating to /wingmanx-ecosystem...");
    await send('Page.navigate', { url: 'http://localhost:5173/wingmanx-ecosystem?skipLoader=true' });
    await new Promise(r => setTimeout(r, 2500));

    await send('Runtime.evaluate', {
      expression: `
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        const loader = document.getElementById('wingmanx-loader');
        if (loader) loader.style.display = 'none';
      `
    });

    // Scroll to #ecosystem-deep-panels
    console.log("Scrolling to #pillar-rider-details on Desktop...");
    await send('Runtime.evaluate', {
      expression: `
        const p1 = document.getElementById('pillar-rider-details');
        if (p1) p1.scrollIntoView({ block: 'start' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
    const sEcoRiderDesktop = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_rider_desktop.png', Buffer.from(sEcoRiderDesktop.data, 'base64'));
    console.log("Saved scratch/eco_rider_desktop.png");

    // Check positions and grid styles of the 4 cards
    const riderCardMetrics = await send('Runtime.evaluate', {
      expression: `
        const grid = document.querySelector('.rider-grid-3-1');
        const cards = Array.from(grid ? grid.querySelectorAll('.cap-box') : []);
        cards.map((c, i) => {
          const rect = c.getBoundingClientRect();
          const comp = window.getComputedStyle(c);
          return {
            index: i + 1,
            title: c.querySelector('h4')?.innerText,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            gridColumn: comp.gridColumn
          };
        });
      `,
      returnByValue: true
    });
    console.log("Rider 4 cards metrics on Desktop:", JSON.stringify(riderCardMetrics.result.value, null, 2));

    // Scroll to Pillar 2, 3, 4
    await send('Runtime.evaluate', {
      expression: `
        const p2 = document.getElementById('pillar-clubs-details');
        if (p2) p2.scrollIntoView({ block: 'start' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
    const sEcoClubsDesktop = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_clubs_brands_oem_desktop.png', Buffer.from(sEcoClubsDesktop.data, 'base64'));
    console.log("Saved scratch/eco_clubs_brands_oem_desktop.png");

    // Tablet Viewport (820 x 1180)
    console.log("Checking Tablet Viewport (820x1180)...");
    await send('Emulation.setDeviceMetricsOverride', {
      width: 820,
      height: 1180,
      deviceScaleFactor: 2,
      mobile: false
    });
    await send('Runtime.evaluate', {
      expression: `
        const p1 = document.getElementById('pillar-rider-details');
        if (p1) p1.scrollIntoView({ block: 'start' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
    const sEcoTablet = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_rider_tablet.png', Buffer.from(sEcoTablet.data, 'base64'));
    console.log("Saved scratch/eco_rider_tablet.png");

    // Mobile Viewport (390 x 844)
    console.log("Checking Mobile Viewport (390x844)...");
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', {
      expression: `
        const p1 = document.getElementById('pillar-rider-details');
        if (p1) p1.scrollIntoView({ block: 'start' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
    const sEcoMobile = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/eco_rider_mobile.png', Buffer.from(sEcoMobile.data, 'base64'));
    console.log("Saved scratch/eco_rider_mobile.png");

    console.log("Verification finished successfully!");
    ws.close();
  } catch (err) {
    console.error("Verification error:", err);
  } finally {
    child.kill();
  }
}

runVerification();
