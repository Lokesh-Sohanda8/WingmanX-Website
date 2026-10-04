import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function verifyBrandsPage() {
  console.log("Starting Chrome for full brands & sponsors verification...");
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9280',
    '--window-size=1440,1080',
    'http://localhost:5173/brands-sponsors?skipLoader=true'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch('http://127.0.0.1:9280/json/list');
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

    console.log("Navigating to /brands-sponsors...");
    await send('Page.navigate', { url: 'http://localhost:5173/brands-sponsors?skipLoader=true' });
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

    // 1. Desktop Hero
    console.log("Capturing Desktop 1: Hero...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.brands-hero-editorial')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sHero = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_desktop_01_hero.png', Buffer.from(sHero.data, 'base64'));

    // 2. Desktop Sponsors Wall
    console.log("Capturing Desktop 2: Sponsors Wall...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('#our-sponsors')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sWall = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_desktop_02_sponsors_wall.png', Buffer.from(sWall.data, 'base64'));

    // 3. Desktop Meaningful Engagement
    console.log("Capturing Desktop 3: Meaningful Engagement...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('#meaningful-engagement')?.scrollIntoView({ block: 'center' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sEngage = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_desktop_03_meaningful_engagement.png', Buffer.from(sEngage.data, 'base64'));

    // 4. Desktop Brands Belong
    console.log("Capturing Desktop 4: Brands Belong (5 Alignment Points)...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('#brands-belong')?.scrollIntoView({ block: 'center' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sBelong = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_desktop_04_brands_belong.png', Buffer.from(sBelong.data, 'base64'));

    // 5. Desktop Experience Led Participation
    console.log("Capturing Desktop 5: Experience Led Participation...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('#experience-participation')?.scrollIntoView({ block: 'center' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sExp = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_desktop_05_experience_led.png', Buffer.from(sExp.data, 'base64'));

    // 6. Desktop Transparency & Credibility
    console.log("Capturing Desktop 6: Transparency & Credibility...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('#trust-transparency')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sTrust = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_desktop_06_transparency_credibility.png', Buffer.from(sTrust.data, 'base64'));

    // 7. Desktop Flight Plan Form
    console.log("Capturing Desktop 7: Partner Flight Plan Form...");
    await send('Runtime.evaluate', {
      expression: `document.querySelector('#brand-partner-form-section')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sForm = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_desktop_07_partner_form.png', Buffer.from(sForm.data, 'base64'));

    // 8. Tablet Mode (820x1180)
    console.log("Setting Tablet Viewport (820x1180)...");
    await send('Emulation.setDeviceMetricsOverride', {
      width: 820,
      height: 1180,
      deviceScaleFactor: 2,
      mobile: false
    });
    await send('Runtime.evaluate', {
      expression: `document.querySelector('#our-sponsors')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sTabletWall = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_tablet_sponsors_wall.png', Buffer.from(sTabletWall.data, 'base64'));

    // 9. Mobile Mode (390x844, scale 3)
    console.log("Setting Mobile Viewport (390x844)...");
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true
    });
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.brands-hero-editorial')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sMobileHero = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_mobile_01_hero.png', Buffer.from(sMobileHero.data, 'base64'));

    await send('Runtime.evaluate', {
      expression: `document.querySelector('#our-sponsors')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sMobileWall = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_mobile_02_sponsors_wall.png', Buffer.from(sMobileWall.data, 'base64'));

    await send('Runtime.evaluate', {
      expression: `document.querySelector('#brands-belong')?.scrollIntoView({ block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 600));
    const sMobileBelong = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/brands_mobile_03_editorial.png', Buffer.from(sMobileBelong.data, 'base64'));

    console.log("All screenshots captured successfully!");
    ws.close();
  } catch (err) {
    console.error("Verification error:", err);
  } finally {
    child.kill();
  }
}

verifyBrandsPage();
