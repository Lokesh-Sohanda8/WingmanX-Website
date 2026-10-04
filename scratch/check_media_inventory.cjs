const fs = require('fs');
const path = require('path');

const pubDir = path.resolve('public');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

// 1. Gather all files
const awardsAll = getFiles(path.join(pubDir, 'images/awards'));
const millsAll = getFiles(path.join(pubDir, 'images/the_mills'));
const oemAll = getFiles(path.join(pubDir, 'images/oem'));
const videosAll = getFiles(path.join(pubDir, 'videos'));

// Existing gallery items (the 9 original cards)
const existingImages = [
  {
    src: '/images/DefaultRideImage.jpg',
    tag: 'ON THE TARMAC',
    loc: 'WESTERN GHATS • CONVOY FORMATION',
    alt: 'Western Ghats Convoy Run'
  },
  {
    src: '/images/SVL00520.jpg',
    tag: 'ANNUAL GALA',
    loc: 'AWARDS GALA 2026 • RIDER REGISTRATION',
    alt: 'Annual Awards Gala Registration'
  },
  {
    src: '/images/Banner_2482026145513_12739.jpg',
    tag: 'ON THE TARMAC',
    loc: 'MONSOON EXPEDITION • SAHYADRI CORRIDOR',
    alt: 'Monsoon Highway Tour'
  },
  {
    src: '/images/SVL01153.jpg',
    tag: 'ANNUAL GALA',
    loc: 'ROAD CAPTAIN MILESTONE ADDRESS',
    alt: 'Road Captain Milestone Keynote'
  },
  {
    src: '/images/1771572471_69980cf780d1d.jpg',
    tag: 'ON THE TARMAC',
    loc: 'WET WEATHER RECON • TAMHINI SWITCHBACKS',
    alt: 'Wet Weather Reconnaissance'
  },
  {
    src: '/images/VJP04722.jpg',
    tag: 'ANNUAL GALA',
    loc: 'COMMUNITY HONORS & RECOGNITION',
    alt: 'Community Recognition Stage'
  },
  {
    src: '/images/1771498769_6996ed1197973.jpg',
    tag: 'ON THE TARMAC',
    loc: 'DAWN STAGING • PRE-RIDE MACHINE RECON',
    alt: 'Machine Staging and Inspection'
  },
  {
    src: '/images/SVL00582.jpg',
    tag: 'ANNUAL GALA',
    loc: 'AWARDS GALA • BROTHERHOOD & FELLOWSHIP',
    alt: 'Community Fellowship'
  },
  {
    src: '/images/1771583990_699839f614e82.jpg',
    tag: 'ON THE TARMAC',
    loc: 'ESSENTIAL GEAR FLATLAY • CERTIFIED ARMOR',
    alt: 'Touring Gear Flatlay'
  }
];

// Separate images and videos from awards folder
const awardsImages = [];
const awardsVideos = [];
awardsAll.forEach(f => {
  const rel = '/' + path.relative(pubDir, f).replace(/\\/g, '/');
  if (f.endsWith('.mp4')) {
    awardsVideos.push(rel);
  } else {
    awardsImages.push(rel);
  }
});

// The Mills images
const millsImages = millsAll.map(f => '/' + path.relative(pubDir, f).replace(/\\/g, '/'));

// OEM images
const oemImages = oemAll.map(f => '/' + path.relative(pubDir, f).replace(/\\/g, '/'));

// All video files
const allVideos = [...awardsVideos];
videosAll.forEach(f => {
  if (f.endsWith('.mp4')) {
    allVideos.push('/' + path.relative(pubDir, f).replace(/\\/g, '/'));
  }
});

console.log('Total Awards Images:', awardsImages.length);
console.log('Total Mills Images:', millsImages.length);
console.log('Total OEM Images:', oemImages.length);
console.log('Total Existing Images:', existingImages.length);
console.log('Total Videos:', allVideos.length);
