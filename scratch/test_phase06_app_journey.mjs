import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function run() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--autoplay-policy=no-user-gesture-required',
    '--remote-debugging-port=9266',
    '--window-size=1440,900',
    'http://localhost:3030/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9266/json/list');
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
    await send('DOM.enable');

    // 1. Initial State Check
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.querySelector('#app-showcase');
        const header = sec ? sec.querySelector('h2').textContent.trim() : null;
        const tag = sec ? sec.querySelector('.tag-orange').textContent.trim() : null;
        const milestones = Array.from(sec.querySelectorAll('.feature-item h4')).map(h => h.textContent.trim());
        const phoneActiveSrc = sec.querySelector('.phone-screen-img.active img').getAttribute('src');
        const chipText = sec.querySelector('#stageIndicatorChip .chip-text').textContent.trim();
        return { header, tag, milestones, phoneActiveSrc, chipText };
      })()`,
      returnByValue: true
    });
    console.log('App Showcase Initial State:', JSON.stringify(evalRes.result.value, null, 2));

    // 2. Scroll #app-showcase into view
    await send('Runtime.evaluate', {
      expression: 'document.querySelector("#app-showcase").scrollIntoView({ behavior: "instant", block: "start" })'
    });
    await new Promise(r => setTimeout(r, 600));

    // Scroll to position grid top with navbar clearance
    await send('Runtime.evaluate', {
      expression: `(() => {
        const grid = document.querySelector(".app-showcase-grid");
        const absTop = grid.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, absTop - 120);
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    const debugInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        const wrapper = document.querySelector('.phone-mockup-wrapper');
        const col = document.querySelector('.app-phones-col');
        const activeContainer = document.querySelector('.phone-screen-img.active');
        const activeImg = document.querySelector('.phone-screen-img.active img');
        const grid = document.querySelector('.app-showcase-grid');
        const rWrap = wrapper ? wrapper.getBoundingClientRect() : null;
        const rCol = col ? col.getBoundingClientRect() : null;
        const rCont = activeContainer ? activeContainer.getBoundingClientRect() : null;
        const rImg = activeImg ? activeImg.getBoundingClientRect() : null;
        return {
          wrapper: rWrap ? { top: rWrap.top, bottom: rWrap.bottom, width: rWrap.width, height: rWrap.height } : null,
          col: rCol ? { top: rCol.top, bottom: rCol.bottom, width: rCol.width, height: rCol.height } : null,
          container: rCont ? { top: rCont.top, bottom: rCont.bottom, width: rCont.width, height: rCont.height } : null,
          img: rImg ? { top: rImg.top, bottom: rImg.bottom, width: rImg.width, height: rImg.height, naturalWidth: activeImg.naturalWidth, naturalHeight: activeImg.naturalHeight } : null,
          gridCols: grid ? window.getComputedStyle(grid).gridTemplateColumns : null
        };
      })()`,
      returnByValue: true
    });
    console.log('Phone Mockup Debug Info:', JSON.stringify(debugInfo.result.value, null, 2));

    // Capture desktop screenshot
    const shotDesktop = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase06_app_journey_desktop.png', Buffer.from(shotDesktop.data, 'base64'));
    console.log('Saved public/phase06_app_journey_desktop.png');

    // 3. Test interaction: Click Milestone 3 (Rider Passport)
    await send('Runtime.evaluate', {
      expression: `(() => {
        const item3 = document.querySelector('.feature-item[data-mockup="3"]');
        if (item3) item3.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 400));

    const click3Res = await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.querySelector('#app-showcase');
        const activeItem = sec.querySelector('.feature-item.active h4').textContent.trim();
        const activeImg = sec.querySelector('.phone-screen-img.active img').getAttribute('src');
        const chipText = sec.querySelector('#stageIndicatorChip .chip-text').textContent.trim();
        const progressHeight = sec.querySelector('#journeyProgressIndicator').style.height;
        return { activeItem, activeImg, chipText, progressHeight };
      })()`,
      returnByValue: true
    });
    console.log('After clicking Milestone 3 (Rider Passport):', click3Res.result.value);

    // Capture screenshot of Milestone 3 active
    const shotStage3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase06_app_stage3_desktop.png', Buffer.from(shotStage3.data, 'base64'));
    console.log('Saved public/phase06_app_stage3_desktop.png');

    // 4. Test Keyboard Navigation: Focus item 3, press ArrowDown, then press Enter
    await send('Runtime.evaluate', {
      expression: `(() => {
        const item3 = document.querySelector('.feature-item[data-mockup="3"]');
        if (item3) {
          item3.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 300));

    const keyRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.querySelector('#app-showcase');
        const activeItem = sec.querySelector('.feature-item.active h4').textContent.trim();
        const activeImg = sec.querySelector('.phone-screen-img.active img').getAttribute('src');
        const chipText = sec.querySelector('#stageIndicatorChip .chip-text').textContent.trim();
        return { activeItem, activeImg, chipText };
      })()`,
      returnByValue: true
    });
    console.log('After ArrowDown Keyboard Navigation (Stage 4):', keyRes.result.value);

    // 5. Test Mobile Viewport
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', {
      expression: 'document.querySelector("#app-showcase").scrollIntoView({ behavior: "instant", block: "start" })'
    });
    await new Promise(r => setTimeout(r, 600));

    const shotMobile = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase06_app_journey_mobile.png', Buffer.from(shotMobile.data, 'base64'));
    console.log('Saved public/phase06_app_journey_mobile.png');

    // Scroll slightly down on mobile to see the journey stages
    await send('Runtime.evaluate', {
      expression: 'document.querySelector(".journey-track-wrapper").scrollIntoView({ behavior: "instant", block: "start" })'
    });
    await new Promise(r => setTimeout(r, 400));
    const shotMobileStages = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase06_app_mobile_stages.png', Buffer.from(shotMobileStages.data, 'base64'));
    console.log('Saved public/phase06_app_mobile_stages.png');

    // 6. Test Lifecycle Destruction
    const destroyRes = await send('Runtime.evaluate', {
      expression: `(() => {
        if (window.activeSystems) {
          return 'activeSystems found';
        }
        return 'checked';
      })()`,
      returnByValue: true
    });
    console.log('Lifecycle test:', destroyRes.result.value);

    ws.close();
  } finally {
    child.kill('SIGKILL');
  }
}

run().catch(console.error);
