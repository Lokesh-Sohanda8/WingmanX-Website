import { spawn } from 'child_process';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function test() {
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9296',
    '--window-size=1440,900',
    'http://localhost:5173/our-galleries?skipLoader=true'
  ]);
  await new Promise(r => setTimeout(r, 2000));
  const listRes = await fetch('http://127.0.0.1:9296/json/list');
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
  await new Promise(r => setTimeout(r, 1000));

  // Click first image card
  await send('Runtime.evaluate', {
    expression: "document.querySelector('.masonry-card[data-category=\"images\"]').click();"
  });
  await new Promise(r => setTimeout(r, 600));

  const imgLightbox = await send('Runtime.evaluate', {
    expression: "(() => { const modal = document.getElementById('lightbox-modal'); const img = document.getElementById('lightbox-img'); const vid = document.getElementById('lightbox-video'); return { active: modal.classList.contains('active'), imgSrc: img.src, imgDisplay: img.style.display, vidDisplay: vid.style.display }; })()",
    returnByValue: true
  });
  console.log('Image Lightbox Expansion:', imgLightbox.result.value);

  // Close lightbox
  await send('Runtime.evaluate', {
    expression: "document.getElementById('lightbox-close-btn').click();"
  });
  await new Promise(r => setTimeout(r, 400));

  // Navigate to awards and click award image
  await send('Page.navigate', { url: 'http://localhost:5173/awards?skipLoader=true' });
  await new Promise(r => setTimeout(r, 1500));

  await send('Runtime.evaluate', {
    expression: "document.querySelector('.milestone-photo-badge').click();"
  });
  await new Promise(r => setTimeout(r, 600));

  const awardLightbox = await send('Runtime.evaluate', {
    expression: "(() => { const modal = document.getElementById('lightbox-modal'); const img = document.getElementById('lightbox-img'); return { active: modal.classList.contains('active'), imgSrc: img.src }; })()",
    returnByValue: true
  });
  console.log('Award Image Lightbox Expansion:', awardLightbox.result.value);

  ws.close();
  child.kill();
}

test();
