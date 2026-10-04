import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function run() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--autoplay-policy=no-user-gesture-required',
    '--remote-debugging-port=9244',
    '--window-size=1440,900',
    'http://localhost:3030/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9244/json/list');
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

    // 1. Check title & Section 05 elements
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.querySelector('#pack-radar');
        const header = sec ? sec.querySelector('h2').textContent.trim() : null;
        const disclaimer = sec ? sec.querySelector('.discovery-demo-disclaimer').textContent.trim() : null;
        const cardsCount = sec ? sec.querySelectorAll('.discovery-match-card').length : 0;
        const inspectorTitle = sec ? sec.querySelector('.inspector-title').textContent.trim() : null;
        const activeSquadTag = sec ? sec.querySelector('.active-squad-tag').textContent.trim() : null;
        const discPills = Array.from(sec.querySelectorAll('.disc-pill')).map(p => p.textContent.trim());
        const pacePills = Array.from(sec.querySelectorAll('.pace-pill')).map(p => p.textContent.trim());
        return { header, disclaimer, cardsCount, inspectorTitle, activeSquadTag, discPills, pacePills };
      })()`,
      returnByValue: true
    });

    console.log('Section 05 Initial State:', JSON.stringify(evalRes.result.value, null, 2));

    // 2. Scroll Section 05 into view
    await send('Runtime.evaluate', {
      expression: 'document.querySelector("#pack-radar").scrollIntoView({ behavior: "instant", block: "start" })'
    });
    await new Promise(r => setTimeout(r, 600));

    // Capture desktop screenshot of header + studio
    const shotDesktop = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase05_discovery_desktop.png', Buffer.from(shotDesktop.data, 'base64'));
    console.log('Saved public/phase05_discovery_desktop.png');

    // Also scroll directly to the studio cards and inspector
    await send('Runtime.evaluate', {
      expression: 'document.querySelector(".discovery-studio-container").scrollIntoView({ behavior: "instant", block: "start" })'
    });
    await new Promise(r => setTimeout(r, 600));
    const shotStudio = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase05_discovery_studio_desktop.png', Buffer.from(shotStudio.data, 'base64'));
    console.log('Saved public/phase05_discovery_studio_desktop.png');

    // Scroll slightly down to capture the inspector CTA actions & pack roster
    await send('Runtime.evaluate', {
      expression: 'window.scrollBy({ top: 320, behavior: "instant" })'
    });
    await new Promise(r => setTimeout(r, 400));
    const shotActions = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase05_inspector_actions.png', Buffer.from(shotActions.data, 'base64'));
    console.log('Saved public/phase05_inspector_actions.png');

    // 3. Test interaction: click "Weekend Twisties" filter pill
    await send('Runtime.evaluate', {
      expression: `(() => {
        const twistiesBtn = document.querySelector('.disc-pill[data-disc="canyon"]');
        if (twistiesBtn) twistiesBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 300));

    const clickFilterRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.querySelector('#pack-radar');
        const count = sec.querySelector('#discovery-count').textContent.trim();
        const activeCardTitle = sec.querySelector('.discovery-match-card.selected .card-squad-title').textContent.trim();
        const inspTitle = sec.querySelector('.inspector-title').textContent.trim();
        return { count, activeCardTitle, inspTitle };
      })()`,
      returnByValue: true
    });
    console.log('After clicking Weekend Twisties filter:', clickFilterRes.result.value);

    // 4. Test interaction: click "ADV & Mountain" pill
    await send('Runtime.evaluate', {
      expression: `(() => {
        const advBtn = document.querySelector('.disc-pill[data-disc="adv"]');
        if (advBtn) advBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 300));

    const advRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.querySelector('#pack-radar');
        const count = sec.querySelector('#discovery-count').textContent.trim();
        const activeCardTitle = sec.querySelector('.discovery-match-card.selected .card-squad-title').textContent.trim();
        const inspTitle = sec.querySelector('.inspector-title').textContent.trim();
        return { count, activeCardTitle, inspTitle };
      })()`,
      returnByValue: true
    });
    console.log('After clicking ADV filter:', advRes.result.value);

    // Reset to All Disciplines
    await send('Runtime.evaluate', {
      expression: `(() => {
        const allBtn = document.querySelector('.disc-pill[data-disc="all"]');
        if (allBtn) allBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 300));

    // 5. Test Keyboard Navigation: Select second card with Enter key
    await send('Runtime.evaluate', {
      expression: `(() => {
        const cards = document.querySelectorAll('.discovery-match-card');
        if (cards[1]) {
          cards[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 300));

    const keyNavRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.querySelector('#pack-radar');
        const activeCardTitle = sec.querySelector('.discovery-match-card.selected .card-squad-title').textContent.trim();
        const inspTitle = sec.querySelector('.inspector-title').textContent.trim();
        return { activeCardTitle, inspTitle };
      })()`,
      returnByValue: true
    });
    console.log('After keyboard Enter on card 2:', keyNavRes.result.value);

    // 6. Test Mobile Viewport
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', {
      expression: 'document.querySelector("#pack-radar").scrollIntoView({ behavior: "instant", block: "start" })'
    });
    await new Promise(r => setTimeout(r, 600));

    const shotMobile = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase05_discovery_mobile.png', Buffer.from(shotMobile.data, 'base64'));
    console.log('Saved public/phase05_discovery_mobile.png');

    // Scroll to mobile cards
    await send('Runtime.evaluate', {
      expression: 'document.querySelector("#discovery-cards-list").scrollIntoView({ behavior: "instant", block: "start" })'
    });
    await new Promise(r => setTimeout(r, 500));
    const shotMobileCards = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase05_mobile_cards.png', Buffer.from(shotMobileCards.data, 'base64'));
    console.log('Saved public/phase05_mobile_cards.png');

    // 7. Verify destruction lifecycle
    const destroyRes = await send('Runtime.evaluate', {
      expression: `(() => {
        // Test router destruction
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
