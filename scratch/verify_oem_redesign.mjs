import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function verifyOemPage() {
  console.log("Starting Chrome for OEM Partners page verification...");
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9290',
    '--window-size=1440,1080',
    'http://localhost:5173/oem-partners?skipLoader=true'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch('http://127.0.0.1:9290/json/list');
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

    console.log("Navigating to /oem-partners...");
    await send('Page.navigate', { url: 'http://localhost:5173/oem-partners?skipLoader=true' });
    await new Promise(r => setTimeout(r, 2500));

    // Disable smooth scrolling and hide loader if any
    await send('Runtime.evaluate', {
      expression: `
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        const loader = document.getElementById('wingmanx-loader');
        if (loader) loader.style.display = 'none';
      `
    });

    const getTop = async (selector) => {
      const res = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const el = document.getElementById('${selector}') || document.querySelector('.${selector}');
            return el ? Math.max(0, el.getBoundingClientRect().top + window.scrollY - 80) : 0;
          })()
        `,
        returnByValue: true
      });
      return res.result.value || 0;
    };

    // 1. Desktop Hero
    console.log("Capturing Desktop 1: Hero...");
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: 0, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    let snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_desktop_01_hero.png', Buffer.from(snap.data, 'base64'));

    // 2. Desktop Ownership & Community
    console.log("Capturing Desktop 2: From Ownership to Community...");
    const top2 = await getTop('ownership-community');
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: ${top2}, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_desktop_02_ownership.png', Buffer.from(snap.data, 'base64'));

    // 3. Desktop Solving Post Purchase Engagement Gaps
    console.log("Capturing Desktop 3: Solving Post Purchase Engagement Gaps...");
    const top3 = await getTop('engagement-gaps');
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: ${top3}, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_desktop_03_gaps.png', Buffer.from(snap.data, 'base64'));

    // 4. Desktop Flexible Programs
    console.log("Capturing Desktop 4: Flexible Programs...");
    const top4 = await getTop('flexible-programs');
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: ${top4}, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_desktop_04_programs.png', Buffer.from(snap.data, 'base64'));

    // 5. Desktop Real Experiences, Real Insights
    console.log("Capturing Desktop 5: Real Experiences, Real Insights...");
    const top5 = await getTop('real-insights');
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: ${top5}, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_desktop_05_insights.png', Buffer.from(snap.data, 'base64'));

    // 6. Desktop Sustainable Growth Banner
    console.log("Capturing Desktop 6: Built for Sustainable Community Growth...");
    const top6 = await getTop('sustainable-growth');
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: ${top6}, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_desktop_06_sustainable.png', Buffer.from(snap.data, 'base64'));

    // 7. Desktop Telematics Hub & TFT Cockpit HUD
    console.log("Capturing Desktop 7: Telematics Hub & TFT Cockpit HUD...");
    const top7 = await getTop('oem-telematics-hub');
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: ${top7}, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_desktop_07_telematics.png', Buffer.from(snap.data, 'base64'));

    // 8. Desktop 3 Architecture Phases & Form
    console.log("Capturing Desktop 8: Phases & Form...");
    const top8 = await getTop('oem-partner-form-section');
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: ${top8}, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_desktop_08_phases_form.png', Buffer.from(snap.data, 'base64'));

    // --- Mobile Verification ---
    console.log("Switching to Mobile Viewport (390 x 844)...");
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 800));

    // Mobile Hero
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: 0, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_mobile_01_hero.png', Buffer.from(snap.data, 'base64'));

    // Mobile Flexible Programs
    const mobTop4 = await getTop('flexible-programs');
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: ${mobTop4}, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_mobile_02_programs.png', Buffer.from(snap.data, 'base64'));

    // Mobile Telematics
    const mobTop7 = await getTop('oem-telematics-hub');
    await send('Runtime.evaluate', { expression: `window.scrollTo({ top: ${mobTop7}, behavior: 'instant' });` });
    await new Promise(r => setTimeout(r, 500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/oem_mobile_03_telematics.png', Buffer.from(snap.data, 'base64'));

    console.log("All OEM screenshots captured successfully!");
    ws.close();
  } catch (err) {
    console.error("Verification failed:", err);
  } finally {
    child.kill();
  }
}

verifyOemPage();
