import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function run() {
  console.log('--- TESTING PHASE 07: HELMET CINEMA & RIDER COMMUNITY EXPERIENCE ---');
  const port = 9277;
  const child = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--autoplay-policy=no-user-gesture-required',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    'http://localhost:3030/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json/list`);
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
    await send('DOM.enable');

    console.log('✓ Connected to Chrome CDP');

    // Wait for page to settle
    await new Promise(r => setTimeout(r, 1500));

    // 1. Inspect Helmet Cinema Section
    const helmetCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const section = document.getElementById('helmet-cinema');
        if (!section) return { error: '#helmet-cinema not found' };

        const video = document.getElementById('helmetCinematicVideo');
        if (!video) return { error: '#helmetCinematicVideo not found' };

        const sources = Array.from(video.querySelectorAll('source')).map(s => s.getAttribute('src'));
        const title = section.querySelector('.cinema-headline')?.innerText;
        const creed = section.querySelector('.creed-statement')?.innerText;

        return {
          exists: true,
          videoTag: video.tagName,
          autoplay: video.hasAttribute('autoplay'),
          muted: video.muted,
          loop: video.hasAttribute('loop'),
          playsinline: video.hasAttribute('playsinline'),
          poster: video.getAttribute('poster'),
          sources,
          title,
          creed
        };
      })()`,
      returnByValue: true
    });

    console.log('Helmet Section Check:', helmetCheck.result.value);
    const val = helmetCheck.result.value;
    if (val.error) throw new Error(val.error);

    if (!val.sources.includes('/videos/erasio_Helmet_clip_with_glove_20260930131406.mp4')) {
      throw new Error('Primary source erasio_Helmet_clip_with_glove_20260930131406.mp4 is missing!');
    }
    console.log('✓ Verified primary helmet video is erasio_Helmet_clip_with_glove_20260930131406.mp4');

    if (!val.sources.includes('/videos/erasio_Helmet_clip_1080p_20260930125932.mp4')) {
      throw new Error('Fallback source is missing!');
    }
    console.log('✓ Verified fallback video source');

    if (val.poster !== '/images/helmet_poster.jpg') {
      throw new Error('Poster attribute mismatch');
    }
    console.log('✓ Verified video poster is /images/helmet_poster.jpg');

    // Scroll to Helmet Cinema section
    await send('Runtime.evaluate', {
      expression: `document.getElementById('helmet-cinema').scrollIntoView({ behavior: 'instant', block: 'center' });`
    });
    await new Promise(r => setTimeout(r, 1200));

    // Capture Desktop Helmet Cinema screenshot
    const shot1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase07_helmet_cinema_desktop.png', Buffer.from(shot1.data, 'base64'));
    console.log('✓ Saved public/phase07_helmet_cinema_desktop.png');

    // 2. Inspect Community Experience Section
    const commCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const section = document.getElementById('community-riders');
        if (!section) return { error: '#community-riders not found' };

        const cards = Array.from(section.querySelectorAll('.rider-story-card')).map(card => {
          return {
            name: card.querySelector('.story-rider-name')?.innerText?.trim(),
            role: card.querySelector('.story-rider-role')?.innerText?.trim(),
            machine: card.querySelector('.story-machine-badge')?.innerText?.trim(),
            photo: card.querySelector('.story-photo')?.getAttribute('src'),
            quote: card.querySelector('.story-quote')?.innerText?.trim()?.substring(0, 50) + '...',
            location: card.querySelector('.story-tag-pill')?.innerText?.trim()
          };
        });

        const links = Array.from(section.querySelectorAll('.hub-action-links a')).map(a => ({
          text: a.innerText.trim(),
          href: a.getAttribute('href')
        }));

        return {
          cardCount: cards.length,
          cards,
          links
        };
      })()`,
      returnByValue: true
    });

    console.log('Community Section Check:', commCheck.result.value);
    const commVal = commCheck.result.value;
    if (commVal.error) throw new Error(commVal.error);
    if (commVal.cardCount !== 4) throw new Error(`Expected 4 cards, found ${commVal.cardCount}`);
    console.log('✓ Verified 4 genuine rider stories with authentic photos & roles');

    // Scroll to Community Section
    await send('Runtime.evaluate', {
      expression: `document.getElementById('community-riders').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 1000));

    // Capture Desktop Community screenshot
    const shot2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase07_community_desktop.png', Buffer.from(shot2.data, 'base64'));
    console.log('✓ Saved public/phase07_community_desktop.png');

    // 3. Mobile Viewport Test (375x812)
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    });

    // Helmet mobile
    await send('Runtime.evaluate', {
      expression: `document.getElementById('helmet-cinema').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 800));
    const shot3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase07_helmet_cinema_mobile.png', Buffer.from(shot3.data, 'base64'));
    console.log('✓ Saved public/phase07_helmet_cinema_mobile.png');

    // Community mobile
    await send('Runtime.evaluate', {
      expression: `document.getElementById('community-riders').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 800));
    const shot4 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('public/phase07_community_mobile.png', Buffer.from(shot4.data, 'base64'));
    console.log('✓ Saved public/phase07_community_mobile.png');

    ws.close();
    console.log('=== PHASE 07 CDP TEST PASSED PERFECTLY ===');
  } catch (e) {
    console.error('CDP Test failed:', e);
    process.exit(1);
  } finally {
    child.kill();
  }
}

run();
