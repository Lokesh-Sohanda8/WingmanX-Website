import { spawn } from 'child_process';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function testToggle() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9292',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const tabs = await (await fetch('http://127.0.0.1:9292/json/list')).json();
    const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
    await new Promise(res => ws.onopen = res);

    let id = 1;
    const send = (method, params = {}) => new Promise((res, rej) => {
      const msgId = id++;
      const handler = evt => {
        const d = JSON.parse(evt.data);
        if (d.id === msgId) {
          ws.removeEventListener('message', handler);
          if (d.error) rej(d.error); else res(d.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

    await send('Page.enable');
    await send('Runtime.enable');
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

    // Scroll to video
    await send('Runtime.evaluate', {
      expression: `
        document.getElementById('ecosystem-showcase-video')?.scrollIntoView();
      `
    });
    await new Promise(r => setTimeout(r, 800));

    const check = async (label) => {
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const v = document.getElementById('ecosystem-showcase-video');
          const b = document.getElementById('ecosystem-video-mute-btn');
          return {
            muted: v?.muted,
            paused: v?.paused,
            btnText: b?.innerText?.replace(/\\s+/g, ' ').trim(),
            hasAudioTrack: !!(v?.webkitAudioDecodedByteCount > 0 || (v?.audioTracks && v?.audioTracks?.length) || v?.src)
          };
        })()`,
        returnByValue: true
      });
      console.log(label, res.result.value);
    };

    await check('Initial state:');

    // Click toggle button
    await send('Runtime.evaluate', {
      expression: `document.getElementById('ecosystem-video-mute-btn')?.click();`
    });
    await new Promise(r => setTimeout(r, 500));
    await check('After click 1:');

    // Click toggle button again
    await send('Runtime.evaluate', {
      expression: `document.getElementById('ecosystem-video-mute-btn')?.click();`
    });
    await new Promise(r => setTimeout(r, 500));
    await check('After click 2:');

    ws.close();
  } finally {
    child.kill();
  }
}

testToggle();
