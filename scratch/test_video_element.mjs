import { spawn } from 'child_process';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function run() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9298',
    'http://localhost:5173/?skipLoader=true'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const tabs = await (await fetch('http://127.0.0.1:9298/json/list')).json();
    const pageTab = tabs.find(t => t.type === 'page' && t.url.includes('5173')) || tabs.find(t => t.type === 'page');
    console.log("Connected to tab:", pageTab.url);
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

    // Wait 2 seconds for SPA Router to complete initial render
    await new Promise(r => setTimeout(r, 2000));

    const pageInfo = await send('Runtime.evaluate', {
      expression: `
        (() => {
          return {
            href: window.location.href,
            pathname: window.location.pathname,
            hasMainContent: !!document.getElementById('main-content'),
            mainContentLength: document.getElementById('main-content')?.innerHTML?.length || 0,
            hasAppShowcase: !!document.getElementById('app-showcase'),
            bodyHTMLStart: document.body.innerHTML.slice(0, 300)
          };
        })()
      `,
      returnByValue: true
    });
    console.log("Page Debug Info:", pageInfo.result.value);

    // Evaluate video element existence and state
    const res = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const v = document.getElementById('ecosystem-showcase-video');
          const b = document.getElementById('ecosystem-video-mute-btn');
          return {
            videoFound: !!v,
            videoSrc: v ? v.src : null,
            videoMuted: v ? v.muted : null,
            videoPaused: v ? v.paused : null,
            btnFound: !!b,
            btnText: b ? b.innerText.replace(/\\s+/g, ' ').trim() : null
          };
        })()
      `,
      returnByValue: true
    });
    console.log("Initial Video & Button State:", res.result.value);

    // Click mute button to unmute/mute
    const click1 = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const b = document.getElementById('ecosystem-video-mute-btn');
          const v = document.getElementById('ecosystem-showcase-video');
          if (b) b.click();
          return {
            videoMuted: v ? v.muted : null,
            btnText: b ? b.innerText.replace(/\\s+/g, ' ').trim() : null
          };
        })()
      `,
      returnByValue: true
    });
    console.log("After Click 1:", click1.result.value);

    const click2 = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const b = document.getElementById('ecosystem-video-mute-btn');
          const v = document.getElementById('ecosystem-showcase-video');
          if (b) b.click();
          return {
            videoMuted: v ? v.muted : null,
            btnText: b ? b.innerText.replace(/\\s+/g, ' ').trim() : null
          };
        })()
      `,
      returnByValue: true
    });
    console.log("After Click 2:", click2.result.value);

    ws.close();
  } catch (e) {
    console.error("Error:", e);
  } finally {
    child.kill();
  }
}

run();
