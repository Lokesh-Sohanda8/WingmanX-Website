import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function run() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9308',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const tabs = await (await fetch('http://127.0.0.1:9308/json/list')).json();
    const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);

    let id = 1;
    const send = (m, p = {}) => new Promise(res => {
      const i = id++;
      const h = e => {
        const d = JSON.parse(e.data);
        if (d.id === i) {
          ws.removeEventListener('message', h);
          res(d.result);
        }
      };
      ws.addEventListener('message', h);
      ws.send(JSON.stringify({ id: i, method: m, params: p }));
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Page.navigate', { url: 'http://localhost:5173/?skipLoader=true' });
    await new Promise(r => setTimeout(r, 2000));

    await send('Runtime.evaluate', {
      expression: `
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        const loader = document.getElementById('wingmanx-loader');
        if (loader) loader.style.display = 'none';
        const el = document.querySelector('.ecosystem-video-story-block');
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 120;
          window.scrollTo(0, top);
        }
      `
    });
    await new Promise(r => setTimeout(r, 600));

    const s = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/home_video_centered_test.png', Buffer.from(s.data, 'base64'));
    console.log("Saved scratch/home_video_centered_test.png");

    ws.close();
  } finally {
    child.kill();
  }
}

run();
