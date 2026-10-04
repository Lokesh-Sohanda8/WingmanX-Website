import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function testLoader() {
  console.log("Starting Chrome for cinematic loader test...");
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9246',
    '--window-size=1440,900',
    'http://localhost:3030/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9246/json/list');
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

    ws.addEventListener('message', (evt) => {
      const d = JSON.parse(evt.data);
      if (d.method === 'Runtime.consoleAPICalled') {
        console.log('[BROWSER CONSOLE]', d.params.type, d.params.args.map(a => a.value || a.description).join(' '));
      }
      if (d.method === 'Runtime.exceptionThrown') {
        console.error('[BROWSER EXCEPTION]', d.params.exceptionDetails);
      }
    });

    console.log('Navigating to http://localhost:3030/...');
    const loadPromise = new Promise((resolve) => {
      const loadHandler = (evt) => {
        const d = JSON.parse(evt.data);
        if (d.method === 'Page.loadEventFired') {
          ws.removeEventListener('message', loadHandler);
          resolve();
        }
      };
      ws.addEventListener('message', loadHandler);
    });

    await send('Page.navigate', { url: 'http://localhost:3030/' });
    await loadPromise;
    console.log('Page loaded successfully!');

    // Capture state at t ~ 1.0s
    await new Promise(r => setTimeout(r, 1000));
    const stateAt1s = await send('Runtime.evaluate', {
      expression: `(() => {
        const loader = document.getElementById('wingmanx-loader');
        const canvas = document.getElementById('loader-road-canvas');
        const speed = document.getElementById('loaderSpeedVal')?.textContent;
        const gear = document.getElementById('loaderGearVal')?.textContent;
        const stage = document.getElementById('loaderTimelineStage')?.textContent;
        const brandVisible = document.getElementById('loaderCenterBrand')?.classList.contains('visible');
        return {
          loaderDisplay: loader ? window.getComputedStyle(loader).display : null,
          loaderOpacity: loader ? window.getComputedStyle(loader).opacity : null,
          canvasWidth: canvas?.width,
          canvasHeight: canvas?.height,
          speed,
          gear,
          stage,
          brandVisible
        };
      })()`,
      returnByValue: true
    });
    console.log('--- Loader State at t=1.0s (Ignition Phase) ---');
    console.log(JSON.stringify(stateAt1s.result.value, null, 2));

    const shot1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/loader_t1s.png', Buffer.from(shot1.data, 'base64'));

    // Capture state at t ~ 3.0s (Acceleration Phase)
    await new Promise(r => setTimeout(r, 2000));
    const stateAt3s = await send('Runtime.evaluate', {
      expression: `(() => {
        const speed = document.getElementById('loaderSpeedVal')?.textContent;
        const gear = document.getElementById('loaderGearVal')?.textContent;
        const stage = document.getElementById('loaderTimelineStage')?.textContent;
        const brandVisible = document.getElementById('loaderCenterBrand')?.classList.contains('visible');
        const wp1 = document.getElementById('wp01')?.classList.contains('active');
        const wp2 = document.getElementById('wp02')?.classList.contains('active');
        return { speed, gear, stage, brandVisible, wp1, wp2 };
      })()`,
      returnByValue: true
    });
    console.log('--- Loader State at t=3.0s (Acceleration Phase) ---');
    console.log(JSON.stringify(stateAt3s.result.value, null, 2));

    const shot3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/loader_t3s.png', Buffer.from(shot3.data, 'base64'));

    // Capture state at t ~ 5.2s (Brand Emergence Phase)
    await new Promise(r => setTimeout(r, 2200));
    const stateAt5s = await send('Runtime.evaluate', {
      expression: `(() => {
        const speed = document.getElementById('loaderSpeedVal')?.textContent;
        const gear = document.getElementById('loaderGearVal')?.textContent;
        const stage = document.getElementById('loaderTimelineStage')?.textContent;
        const centerBrand = document.getElementById('loaderCenterBrand');
        const brandVisible = centerBrand?.classList.contains('visible');
        const headline = centerBrand?.querySelector('.loader-journey-headline')?.textContent.trim();
        const logoSrc = centerBrand?.querySelector('.loader-brand-logo')?.src;
        const wp3 = document.getElementById('wp03')?.classList.contains('active');
        return { speed, gear, stage, brandVisible, headline, logoSrc, wp3 };
      })()`,
      returnByValue: true
    });
    console.log('--- Loader State at t=5.2s (Brand Emergence Phase) ---');
    console.log(JSON.stringify(stateAt5s.result.value, null, 2));

    const shot5 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/loader_t5s.png', Buffer.from(shot5.data, 'base64'));

    // Capture state at t ~ 7.0s (Full Throttle Warp Phase)
    await new Promise(r => setTimeout(r, 1800));
    const stateAt7s = await send('Runtime.evaluate', {
      expression: `(() => {
        const speed = document.getElementById('loaderSpeedVal')?.textContent;
        const gear = document.getElementById('loaderGearVal')?.textContent;
        const stage = document.getElementById('loaderTimelineStage')?.textContent;
        const wp4 = document.getElementById('wp04')?.classList.contains('active');
        return { speed, gear, stage, wp4 };
      })()`,
      returnByValue: true
    });
    console.log('--- Loader State at t=7.0s (Full Throttle Phase) ---');
    console.log(JSON.stringify(stateAt7s.result.value, null, 2));

    const shot7 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/loader_t7s.png', Buffer.from(shot7.data, 'base64'));

    // Wait until t ~ 9.0s (After transition to live website)
    await new Promise(r => setTimeout(r, 2000));
    const stateAt9s = await send('Runtime.evaluate', {
      expression: `(() => {
        const loader = document.getElementById('wingmanx-loader');
        const heroTitle = document.querySelector('h1')?.textContent.trim();
        const header = document.querySelector('.site-header');
        return {
          loaderDisplay: loader ? window.getComputedStyle(loader).display : null,
          loaderOpacity: loader ? window.getComputedStyle(loader).opacity : null,
          heroTitle,
          headerVisible: header ? window.getComputedStyle(header).display : null
        };
      })()`,
      returnByValue: true
    });
    console.log('--- Loader State at t=9.0s (Seamless Website Reveal) ---');
    console.log(JSON.stringify(stateAt9s.result.value, null, 2));

    const shot9 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/loader_t9s_website.png', Buffer.from(shot9.data, 'base64'));

    // Now test Escape Key Bypass on fresh load
    console.log('--- Testing ESC Key Skip Journey Bypass ---');
    await send('Page.navigate', { url: 'http://localhost:3030/' });
    await new Promise(r => setTimeout(r, 1200));

    // Send Escape key
    await send('Input.dispatchKeyEvent', {
      type: 'keyDown',
      key: 'Escape',
      code: 'Escape'
    });
    await send('Input.dispatchKeyEvent', {
      type: 'keyUp',
      key: 'Escape',
      code: 'Escape'
    });

    await new Promise(r => setTimeout(r, 800));
    const escState = await send('Runtime.evaluate', {
      expression: `(() => {
        const loader = document.getElementById('wingmanx-loader');
        return {
          loaderDisplay: loader ? window.getComputedStyle(loader).display : null
        };
      })()`,
      returnByValue: true
    });
    // Now test Mobile viewport
    console.log('--- Testing Mobile Viewport (390x844) ---');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Page.navigate', { url: 'http://localhost:3030/' });
    await new Promise(r => setTimeout(r, 5000)); // wait for brand emergence
    const shotMobile = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/loader_mobile_t5s.png', Buffer.from(shotMobile.data, 'base64'));
    console.log('Mobile screenshot saved to scratch/loader_mobile_t5s.png');

    ws.close();
    child.kill();
    console.log('ALL CINEMATIC LOADER QA CHECKS COMPLETED!');
  } catch (err) {
    console.error('Test error:', err);
    child.kill();
    process.exit(1);
  }
}

testLoader();
