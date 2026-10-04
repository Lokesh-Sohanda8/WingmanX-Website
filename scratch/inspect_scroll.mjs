import { spawn } from 'child_process';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function run() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9275',
    'http://localhost:5173/wingmanx-ecosystem?skipLoader=true'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch('http://127.0.0.1:9275/json/list');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
    await new Promise(res => ws.onopen = res);

    const evalCode = (expr) => new Promise(res => {
      ws.onmessage = e => res(JSON.parse(e.data).result.result.value);
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression: expr, returnByValue: true }
      }));
    });

    const info = await evalCode(`
      JSON.stringify({
        docScrollHeight: document.documentElement.scrollHeight,
        bodyScrollHeight: document.body.scrollHeight,
        winInnerHeight: window.innerHeight,
        platformOffsetTop: document.querySelector('.ecosystem-platform-section')?.offsetTop,
        trustedOffsetTop: document.querySelector('.ecosystem-trusted-section')?.offsetTop,
        overflowHtml: getComputedStyle(document.documentElement).overflow,
        overflowBody: getComputedStyle(document.body).overflow,
        loaderDisplay: document.getElementById('wingmanx-loader')?.style.display,
        loaderClasses: document.getElementById('wingmanx-loader')?.className
      })
    `);
    console.log("INFO:", info);

    ws.close();
  } finally {
    child.kill();
  }
}

run();
