import { spawn } from 'child_process';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function test() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9288',
    '--window-size=1440,1080',
    'http://localhost:5173/oem-partners?skipLoader=true'
  ]);
  await new Promise(r => setTimeout(r, 2000));
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
  await new Promise(r => setTimeout(r, 1500));
  
  const evalRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const sections = ['oem-hero-section', 'ownership-community', 'engagement-gaps', 'flexible-programs', 'real-insights', 'sustainable-growth', 'oem-telematics-hub', 'oem-partner-form-section'];
        return sections.map(s => {
          const el = document.getElementById(s) || document.querySelector('.' + s);
          return { id: s, found: !!el, top: el ? el.offsetTop : null, height: el ? el.offsetHeight : null };
        });
      })()
    `,
    returnByValue: true
  });
  console.log(JSON.stringify(evalRes.result.value, null, 2));
  ws.close();
  child.kill();
}
test();
