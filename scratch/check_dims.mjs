import { spawn } from 'child_process';

const c = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new', '--remote-debugging-port=9291', 'http://localhost:5173/brands-sponsors?skipLoader=true'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://127.0.0.1:9291/json/list');
    const tabs = await res.json();
    const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `JSON.stringify(Array.from(document.querySelectorAll('.brands-page-layout img')).map(i => ({
            name: i.src.split('/').pop(),
            naturalWidth: i.naturalWidth,
            naturalHeight: i.naturalHeight,
            ratio: (i.naturalWidth / i.naturalHeight).toFixed(2),
            offsetWidth: i.offsetWidth,
            offsetHeight: i.offsetHeight
          })))`
        }
      }));
    };
    ws.onmessage = (msg) => {
      const d = JSON.parse(msg.data);
      if (d.id === 1) {
        console.log(JSON.parse(d.result?.result?.value));
        c.kill();
        process.exit(0);
      }
    };
  } catch (e) {
    console.error(e);
    c.kill();
    process.exit(1);
  }
}, 2000);
