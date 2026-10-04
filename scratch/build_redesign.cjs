const fs = require('fs');
const path = require('path');

const pubDir = path.resolve('public');

function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
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

// ---------------------------------------------------------------------------
// 1. COLLECT ALL ASSETS PROGRAMMATICALLY
// ---------------------------------------------------------------------------
const awardsFiles = getFiles(path.join(pubDir, 'images/awards'));
const millsFiles = getFiles(path.join(pubDir, 'images/the_mills'));
const oemFiles = getFiles(path.join(pubDir, 'images/oem'));
const videoFiles = getFiles(path.join(pubDir, 'videos'));

// Existing gallery 9 images
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

// Build Image List
const imageItems = [];

// Add existing images first
existingImages.forEach(img => {
  imageItems.push({
    src: img.src,
    tag: img.tag,
    loc: img.loc,
    alt: img.alt
  });
});

// Add all files from public/images/awards (except videos)
awardsFiles.forEach(f => {
  if (f.endsWith('.mp4')) return;
  const rel = '/' + path.relative(pubDir, f).replace(/\\/g, '/');
  const base = path.basename(f);
  let loc = 'ANNUAL AWARDS GALA • PUNE';
  let alt = `WingmanX Annual Awards Gala — ${base}`;
  let tag = 'AWARDS GALA';
  if (base === 'WMX.png') {
    loc = 'WINGMANX AWARDS OFFICIAL INSIGNIA';
    alt = 'WingmanX Awards Emblem';
  }
  imageItems.push({ src: rel, tag, loc, alt });
});

// Add all files from public/images/the_mills
millsFiles.forEach(f => {
  const rel = '/' + path.relative(pubDir, f).replace(/\\/g, '/');
  const base = path.basename(f);
  imageItems.push({
    src: rel,
    tag: 'COMMUNITY MEET',
    loc: 'THE MILLS • PUNE',
    alt: `WingmanX Community Meet — ${base}`
  });
});

// Add all files from public/images/oem
oemFiles.forEach(f => {
  const rel = '/' + path.relative(pubDir, f).replace(/\\/g, '/');
  const base = path.basename(f);
  let loc = 'OEM PROVING GROUND • FIELD TELEMETRY';
  let alt = `WingmanX OEM Telemetry Test — ${base}`;
  if (base.includes('hero_rider')) {
    loc = 'PROVING RUN • TELEMETRY TRACK';
    alt = 'OEM Field Rider Telemetry Calibration';
  } else if (base.includes('ktm_action')) {
    loc = 'HIGHWAY CORNERING & BRAKE CALIBRATION';
    alt = 'OEM Cornering Dynamics Test';
  } else if (base.includes('mountain_banner')) {
    loc = 'SAHYADRI CORRIDOR EXPEDITION';
    alt = 'Sahyadri Corridor Mountain Expedition';
  } else if (base.includes('racing_dirt')) {
    loc = 'TERRAIN & TRACTION SENSING';
    alt = 'Off-Road Traction Testing';
  } else if (base.includes('real_experiences')) {
    loc = 'REAL RIDING EXPERIENCES';
    alt = 'Real Riding Experiences Field Run';
  } else if (base.includes('sunset')) {
    loc = 'SUNSET CONVOY EXPEDITION';
    alt = 'Sunset Convoy Expedition';
  } else if (base.includes('rain_taillight')) {
    loc = 'MONSOON VISIBILITY RECON';
    alt = 'Monsoon Taillight Visibility Recon';
  }
  imageItems.push({
    src: rel,
    tag: 'OEM & FIELD RUNS',
    loc,
    alt
  });
});

// Build Video List
const videoItems = [];

// 1. WMX Award Nomination from images/awards
awardsFiles.forEach(f => {
  if (f.endsWith('.mp4')) {
    const rel = '/' + path.relative(pubDir, f).replace(/\\/g, '/');
    videoItems.push({
      src: rel,
      tag: 'AWARDS GALA',
      loc: 'ANNUAL AWARDS NOMINATIONS REEL',
      alt: 'WingmanX Annual Awards Gala Nomination Reel'
    });
  }
});

// 2. All videos from public/videos
const videoMetadataMap = {
  'speedometer_telemetry.mp4': {
    tag: 'TELEMETRICS',
    loc: 'SPEEDOMETER & ENGINE TELEMETRY CALIBRATION',
    alt: 'Speedometer & Engine Telemetry Calibration'
  },
  'wheels_asphalt.mp4': {
    tag: 'ON THE TARMAC',
    loc: 'ASPHALT TRACTION & WHEEL DYNAMICS',
    alt: 'Asphalt Traction & Wheel Dynamics'
  },
  'wingman_hero_video.mp4': {
    tag: 'CONVOY EXPEDITIONS',
    loc: 'THE BROTHERHOOD HIGHWAY RUN',
    alt: 'The Brotherhood Highway Run'
  },
  'helmet_cinematic_web.mp4': {
    tag: 'SAFETY & TELEMETRY',
    loc: 'CONNECTED HELMET SENSOR PROTOCOL',
    alt: 'Connected Helmet Sensor Protocol'
  },
  'our-ecosystem-hero-video.mp4': {
    tag: 'ECOSYSTEM',
    loc: 'WINGMANX CONNECTED RIDER NETWORK',
    alt: 'WingmanX Connected Rider Network'
  },
  'erasio_Helmet_clip_1080p_20260930125932.mp4': {
    tag: 'TELEMETRICS',
    loc: 'HELMET HEAD-UP TELEMETRY STREAM',
    alt: 'Helmet Head-Up Telemetry Stream'
  },
  'erasio_Helmet_clip_with_glove_20260930131406.mp4': {
    tag: 'COCKPIT ERGONOMICS',
    loc: 'HANDLEBAR RADAR & GLOVE CONTROLS',
    alt: 'Handlebar Radar & Glove Controls'
  },
  'erasio_Hero_Clip_1_1080p_20260930120745.mp4': {
    tag: 'ON THE TARMAC',
    loc: 'HIGHWAY DESCENT • CORRIDOR PASS 01',
    alt: 'Highway Descent Corridor Pass 01'
  },
  'erasio_Hero_Clip_2_1080p_20260930120848.mp4': {
    tag: 'ON THE TARMAC',
    loc: 'SAHYADRI SWITCHBACK CORNERING • PASS 02',
    alt: 'Sahyadri Switchback Cornering Pass 02'
  },
  'erasio_Hero_Clip_3_1080p_20260930120955.mp4': {
    tag: 'ON THE TARMAC',
    loc: 'HIGH-ALTITUDE ENDURANCE PROVING • PASS 03',
    alt: 'High-Altitude Endurance Proving Pass 03'
  },
  'erasio_Hero_Clip_4_1080p_20260930121139.mp4': {
    tag: 'CONVOY EXPEDITIONS',
    loc: 'INTERSTATE FORMATION PACING • PASS 04',
    alt: 'Interstate Formation Pacing Pass 04'
  },
  'erasio_Hero_Clip_5_1080p_20260930120750.mp4': {
    tag: 'ON THE TARMAC',
    loc: 'DAWN DEPARTURE ACCELERATION • PASS 05',
    alt: 'Dawn Departure Acceleration Pass 05'
  },
  'wingman_hero_video_web.mp4': {
    tag: 'CONVOY EXPEDITIONS',
    loc: 'EXPEDITION FIELD PROVING RUN',
    alt: 'Expedition Field Proving Run'
  }
};

videoFiles.forEach(f => {
  if (!f.endsWith('.mp4')) return;
  const rel = '/' + path.relative(pubDir, f).replace(/\\/g, '/');
  const base = path.basename(f);
  const meta = videoMetadataMap[base] || {
    tag: 'VIDEO ARCHIVE',
    loc: 'COMMUNITY RIDE ARCHIVE',
    alt: `WingmanX Community Video — ${base}`
  };
  videoItems.push({
    src: rel,
    tag: meta.tag,
    loc: meta.loc,
    alt: meta.alt
  });
});

console.log(`Generated ${imageItems.length} images and ${videoItems.length} videos.`);

// ---------------------------------------------------------------------------
// 2. GENERATE GALLERIES PAGE HTML
// ---------------------------------------------------------------------------
const imageCardsHtml = imageItems.map(item => `
            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: ${item.alt} in lightbox" data-category="images" data-lightbox="${item.src}" data-lightbox-type="image">
              <img src="${item.src}" alt="${item.alt}" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">${item.tag}</span>
                  <span class="m-loc">${item.loc}</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>`).join('\n');

const videoCardsHtml = videoItems.map(item => `
            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: ${item.alt} in lightbox" data-category="videos" data-lightbox="${item.src}" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="${item.src}" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">${item.tag}</span>
                  <span class="m-loc">${item.loc}</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>`).join('\n');

const galleriesTemplate = `  // =========================================================================
  // 8. OUR GALLERIES = THE MEMORIES ARCHIVE
  // Composition: Editorial memory wall respecting natural aspect ratios, 2 filters (IMAGES & VIDEOS), lightbox
  // =========================================================================
  galleries: () => \`
    <div class="gallery-page-layout">
      <!-- Gallery Hero -->
      <section class="gallery-hero">
        <div class="container text-center">
          <div class="telemetry-tag mx-auto mb-3"><i class="fa-solid fa-camera"></i> VISUAL ARCHIVE</div>
          <h1 class="display-title">THE ROAD, THROUGH OUR LENSES.</h1>
          <p class="lead-editorial mx-auto" style="max-width: 740px;">
            An unedited chronicle of community rides across Indian highways, high-altitude passes, and brotherhood celebrated at the WingmanX Annual Awards Gala.
          </p>

          <!-- Gallery Filter Controls (ONLY 2 FILTERS: IMAGES & VIDEOS) -->
          <div class="gallery-filter-bar mt-4">
            <button class="gallery-filter-btn active" data-gallery-filter="images"><i class="fa-regular fa-image"></i> IMAGES</button>
            <button class="gallery-filter-btn" data-gallery-filter="videos"><i class="fa-solid fa-film"></i> VIDEOS</button>
          </div>
        </div>
      </section>

      <!-- Masonry Memory Wall Section -->
      <section class="gallery-archive-section">
        <div class="container">
          <div class="gallery-dynamic-masonry">
${imageCardsHtml}
${videoCardsHtml}
          </div>
        </div>
      </section>
    </div>
  \`,`;

// ---------------------------------------------------------------------------
// 3. GENERATE AWARDS PAGE HTML (CHRONOLOGICAL ROAD JOURNEY 2024 -> 2026)
// ---------------------------------------------------------------------------
const awardsTemplate = `  // =========================================================================
  // 9. AWARDS & MILESTONES = THE MILESTONES
  // Composition: Chronological highway timeline journey through WingmanX milestones (2024 -> 2026)
  // =========================================================================
  awards: () => \`
    <div class="awards-page-layout">
      <!-- Awards Hero -->
      <section class="awards-hero">
        <div class="container text-center">
          <div class="telemetry-tag mx-auto mb-3"><i class="fa-solid fa-trophy"></i> VERIFIED MILESTONES & HONORS</div>
          <h1 class="display-title">THE ROAD TO EXCELLENCE.</h1>
          <p class="lead-editorial mx-auto" style="max-width: 740px;">
            A chronological timeline of verified platform milestones, real-world highway testing, and community honors celebrated at the WingmanX Annual Awards Gala.
          </p>
        </div>
      </section>

      <!-- Highway Milestone Timeline Journey -->
      <section class="awards-timeline-section">
        <div class="container">
          <div class="awards-highway-timeline">
            <!-- Road Start Point -->
            <div class="endpoint-start-wrap">
              <div class="timeline-road-endpoint">
                <i class="fa-solid fa-play"></i> MILE 00 • 2024 THE ORIGIN
              </div>
            </div>

            <!-- Highway Road Spine -->
            <div class="timeline-highway-spine"></div>

            <!-- Milestone 1 (2024 - Origin): Left Block -->
            <div class="milestone-block left-block">
              <div class="milestone-node-circle">2024</div>
              <div class="milestone-connector-line"></div>
              <div class="milestone-content-card glass-card">
                <div class="milestone-icon-badge">
                  <i class="fa-solid fa-flag-checkered text-orange"></i>
                </div>
                <div class="milestone-text-area">
                  <span class="milestone-year-tag"><i class="fa-solid fa-flag"></i> COMPANY FOUNDING • PUNE 2024</span>
                  <h3>WingmanX MOBILITY LABS INCORPORATION</h3>
                  <p>Founded in Pune, Maharashtra by riders and systems engineers with a singular mission: to eliminate group touring friction and build India's premier connected motorcycle companion.</p>
                </div>
              </div>
            </div>

            <!-- Milestone 2 (2025 - Engineering): Right Block -->
            <div class="milestone-block right-block">
              <div class="milestone-node-circle">2025</div>
              <div class="milestone-connector-line"></div>
              <div class="milestone-content-card glass-card">
                <div class="milestone-icon-badge">
                  <i class="fa-solid fa-shield-halved text-orange"></i>
                </div>
                <div class="milestone-text-area">
                  <span class="milestone-year-tag"><i class="fa-solid fa-shield-halved"></i> SAFETY ENGINEERING MILESTONE • 2025</span>
                  <h3>SUB-SECOND CRASH DETECTION PROTOCOL</h3>
                  <p>Calibrated multi-axis accelerometer and gyro thresholds on diverse Indian road surfaces, successfully eliminating false pothole triggers while achieving sub-second emergency broadcast dispatch.</p>
                </div>
              </div>
            </div>

            <!-- Milestone 3 (2025 - Beta Pilot): Left Block -->
            <div class="milestone-block left-block">
              <div class="milestone-node-circle">2025</div>
              <div class="milestone-connector-line"></div>
              <div class="milestone-content-card glass-card">
                <div class="milestone-photo-badge" role="button" tabindex="0" data-lightbox="/images/SVL00582.jpg" data-lightbox-type="image" aria-label="View photo: Community Milestone Fellowship in lightbox">
                  <img src="/images/SVL00582.jpg" alt="Community Milestone Fellowship" loading="lazy">
                </div>
                <div class="milestone-text-area">
                  <span class="milestone-year-tag"><i class="fa-solid fa-mountain-sun"></i> COMMUNITY PILOT • 2025</span>
                  <h3>WESTERN GHATS BETA PILOT RUNS</h3>
                  <p>Over 24,000 KM of real-world tarmac testing completed alongside Pune Coastal Riders and regional touring clubs, validating offline topo caching across Tamhini Ghat and Sahyadri dead-zones.</p>
                </div>
              </div>
            </div>

            <!-- Milestone 4 (2026 - Long Haul Legends): Right Block -->
            <div class="milestone-block right-block">
              <div class="milestone-node-circle">2026</div>
              <div class="milestone-connector-line"></div>
              <div class="milestone-content-card glass-card">
                <div class="milestone-photo-badge" role="button" tabindex="0" data-lightbox="/images/VJP04722.jpg" data-lightbox-type="image" aria-label="View photo: Long Haul Legends Award Ceremony in lightbox">
                  <img src="/images/VJP04722.jpg" alt="Long Haul Legends Award Ceremony" loading="lazy">
                </div>
                <div class="milestone-text-area">
                  <span class="milestone-year-tag"><i class="fa-solid fa-trophy"></i> ANNUAL AWARDS GALA • PUNE 2026</span>
                  <h3>LONG HAUL LEGENDS AWARD</h3>
                  <p>Conferred upon veteran endurance tourer Baljeet Singh Kochhar for logging verified multi-thousand kilometer interstate expeditions with flawless pack discipline.</p>
                </div>
              </div>
            </div>

            <!-- Milestone 5 (2026 - Ultimate Wingman): Left Block -->
            <div class="milestone-block left-block">
              <div class="milestone-node-circle">2026</div>
              <div class="milestone-connector-line"></div>
              <div class="milestone-content-card glass-card">
                <div class="milestone-photo-badge" role="button" tabindex="0" data-lightbox="/images/SVL01153.jpg" data-lightbox-type="image" aria-label="View photo: WingmanX Annual Awards Gala 2026 in lightbox">
                  <img src="/images/SVL01153.jpg" alt="WingmanX Annual Awards Gala 2026" loading="lazy">
                </div>
                <div class="milestone-text-area">
                  <span class="milestone-year-tag"><i class="fa-solid fa-award"></i> ANNUAL AWARDS GALA • PUNE 2026</span>
                  <h3>THE ULTIMATE WINGMAN AWARD</h3>
                  <p>Presented to Shreeyash Wagh for extraordinary road captain leadership, unwavering sweep rider vigilance, and fostering motorcycle brotherhood across Maharashtra routes.</p>
                </div>
              </div>
            </div>

            <!-- Road Finish Point -->
            <div class="endpoint-finish-wrap">
              <div class="timeline-road-endpoint">
                <i class="fa-solid fa-flag-checkered"></i> MILE 26 • 2026 EXCELLENCE SUMMIT
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  \`,`;

// ---------------------------------------------------------------------------
// 4. UPDATE public/js/pages.js
// ---------------------------------------------------------------------------
const pagesRaw = fs.readFileSync('public/js/pages.js', 'utf8');
const isCrlf = pagesRaw.includes('\r\n');
const pagesLines = pagesRaw.split(/\r?\n/);

let galleriesStart = -1;
let awardsEnd = -1;

for (let i = 0; i < pagesLines.length; i++) {
  if (pagesLines[i].includes('// 8. OUR GALLERIES = THE MEMORIES')) {
    galleriesStart = i - 1; // include previous comment or whitespace
  }
  if (pagesLines[i].includes('// 10. COMMUNITY CONTRIBUTORS = THE COMMUNITY')) {
    awardsEnd = i - 2; // right before 10
    break;
  }
}

if (galleriesStart !== -1 && awardsEnd !== -1) {
  console.log(`Found galleries & awards in pages.js from line ${galleriesStart + 1} to line ${awardsEnd + 1}`);
  const combined = galleriesTemplate + '\n\n' + awardsTemplate;
  const replacementLines = combined.split('\n');
  pagesLines.splice(galleriesStart, awardsEnd - galleriesStart + 1, ...replacementLines);

  const newline = isCrlf ? '\r\n' : '\n';
  fs.writeFileSync('public/js/pages.js', pagesLines.join(newline), 'utf8');
  console.log('Successfully updated galleries & awards in public/js/pages.js!');
} else {
  console.error('Could not find line boundaries in pages.js!');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 5. UPDATE public/css/main.css
// ---------------------------------------------------------------------------
const cssRaw = fs.readFileSync('public/css/main.css', 'utf8');
const cssIsCrlf = cssRaw.includes('\r\n');
const cssLines = cssRaw.split(/\r?\n/);

// Find Section 8 & 9 around line 3370-3560
let cssSection8Start = -1;
let cssSection8End = -1;

for (let i = 0; i < cssLines.length; i++) {
  if (cssLines[i].includes('.gallery-filter-btn {') && cssSection8Start === -1) {
    // Look back for .gallery-filter-bar
    cssSection8Start = i - 8;
  }
  if (cssLines[i].includes('/* --------------------------------------------------------------------------') &&
      cssLines[i+1] && cssLines[i+1].includes('10. COMMUNITY CONTRIBUTORS')) {
    cssSection8End = i - 1;
    break;
  }
}

console.log(`CSS Gallery/Awards section 1: lines ${cssSection8Start + 1} to ${cssSection8End + 1}`);

// Also find later duplicate .milestone-block around line 8490-8609
let cssDupStart = -1;
let cssDupEnd = -1;

for (let i = cssSection8End + 10; i < cssLines.length; i++) {
  if (cssLines[i].includes('.awards-highway-timeline {') && cssDupStart === -1) {
    cssDupStart = i;
  }
  if (cssDupStart !== -1 && cssLines[i].includes('/* --------------------------------------------------------------------------') &&
      cssLines[i+1] && cssLines[i+1].includes('10. COMMUNITY CONTRIBUTORS')) {
    cssDupEnd = i - 1;
    break;
  }
}

console.log(`CSS Duplicate section 2: lines ${cssDupStart + 1} to ${cssDupEnd + 1}`);

const newCss = `/* ==========================================================================
   OUR GALLERIES — MEMORY ARCHIVE & MEDIA VIEWER
   ========================================================================== */
.gallery-hero {
  padding: calc(var(--header-height) + 4rem) 0 3rem;
  background: radial-gradient(circle at 50% 10%, rgba(250, 121, 7, 0.12) 0%, transparent 60%), #060709;
}
.gallery-filter-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2.25rem;
}
.gallery-filter-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-pill);
  cursor: pointer;
  letter-spacing: 0.08em;
  transition: all var(--transition-fast);
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}
.gallery-filter-btn:hover, .gallery-filter-btn.active {
  background: var(--wmx-orange);
  border-color: var(--wmx-orange);
  color: #000;
  box-shadow: 0 0 24px rgba(250, 121, 7, 0.45);
}
.gallery-archive-section {
  padding: 2.5rem 0 7rem;
  background: #060709;
}
.gallery-dynamic-masonry {
  column-count: 3;
  column-gap: 1.75rem;
}
@media (max-width: 992px) {
  .gallery-dynamic-masonry { column-count: 2; column-gap: 1.25rem; }
}
@media (max-width: 600px) {
  .gallery-dynamic-masonry { column-count: 1; }
}
.masonry-card {
  break-inside: avoid;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1.75rem;
  cursor: pointer;
  background: #0c1017;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.35s ease;
}
.masonry-card:hover {
  transform: translateY(-5px);
  border-color: rgba(250, 121, 7, 0.45);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.65), 0 0 25px rgba(250, 121, 7, 0.15);
}
.masonry-card img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.masonry-card:hover img {
  transform: scale(1.035);
}

/* Video Card Affordances */
.masonry-video-card {
  background: #080a0f;
}
.video-card-inner {
  position: relative;
  width: 100%;
  background: #000;
  overflow: hidden;
}
.video-card-inner video {
  width: 100%;
  height: auto;
  max-height: 520px;
  display: block;
  object-fit: cover;
  transition: transform 0.45s ease;
}
.masonry-video-card:hover .video-card-inner video {
  transform: scale(1.03);
}
.video-card-affordance {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.25);
  transition: background 0.3s ease;
}
.masonry-video-card:hover .video-card-affordance {
  background: rgba(0, 0, 0, 0.1);
}
.video-play-btn-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(250, 121, 7, 0.9);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  padding-left: 4px;
  box-shadow: 0 0 30px rgba(250, 121, 7, 0.6);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
}
.masonry-video-card:hover .video-play-btn-circle {
  transform: scale(1.15);
  background: #fa7907;
  box-shadow: 0 0 40px rgba(250, 121, 7, 0.85);
}
.video-pill-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #fff;
  background: rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(250, 121, 7, 0.4);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-pill);
  backdrop-filter: blur(8px);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.video-pill-badge i {
  color: var(--wmx-orange);
}

.masonry-info-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(6, 7, 9, 0.95) 0%, rgba(6, 7, 9, 0.45) 45%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.masonry-card:hover .masonry-info-overlay {
  opacity: 1;
}
.m-cat-tag {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--wmx-orange);
  letter-spacing: 0.1em;
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}
.m-loc {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
}
.m-zoom {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--wmx-orange);
  margin-top: 0.6rem;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  letter-spacing: 0.05em;
}

/* ==========================================================================
   AWARDS & MILESTONES — CHRONOLOGICAL HIGHWAY ROAD TIMELINE
   ========================================================================== */
.awards-hero {
  padding: calc(var(--header-height) + 4rem) 0 3.5rem;
  background: radial-gradient(circle at 50% 10%, rgba(250, 121, 7, 0.14) 0%, transparent 65%), #060709;
}
.awards-timeline-section {
  padding: 2rem 0 8rem;
  background: #060709;
  position: relative;
  overflow: hidden;
}
.awards-highway-timeline {
  position: relative;
  max-width: 1080px;
  margin: 2rem auto 4rem;
  padding: 2rem 0;
}

/* Continuous asphalt road spine with orange dashed center markings */
.timeline-highway-spine {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  background: #090c12;
  border-left: 2px solid rgba(255, 255, 255, 0.12);
  border-right: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.85);
  z-index: 1;
}
.timeline-highway-spine::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  background: repeating-linear-gradient(to bottom, #fa7907 0px, #fa7907 20px, transparent 20px, transparent 36px);
  box-shadow: 0 0 10px rgba(250, 121, 7, 0.5);
}

/* Highway road markers at top and bottom */
.timeline-road-endpoint {
  position: relative;
  z-index: 3;
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #080b10;
  border: 1px solid var(--wmx-orange);
  color: var(--wmx-orange);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.6rem 1.4rem;
  border-radius: var(--radius-pill);
  box-shadow: 0 0 25px rgba(250, 121, 7, 0.35);
}
.endpoint-start-wrap {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 4;
}
.endpoint-finish-wrap {
  text-align: center;
  margin-top: 4rem;
  position: relative;
  z-index: 4;
}

/* Milestone block row along the highway */
.milestone-block {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5.5rem;
  z-index: 2;
}
.milestone-block:last-child {
  margin-bottom: 2rem;
}

/* Central glowing year node on the road */
.milestone-node-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #07090e;
  border: 2px solid var(--wmx-orange);
  color: var(--wmx-orange);
  font-family: var(--font-mono);
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 28px rgba(250, 121, 7, 0.5), inset 0 0 12px rgba(250, 121, 7, 0.2);
  z-index: 5;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.milestone-block:hover .milestone-node-circle {
  transform: translate(-50%, -50%) scale(1.1);
  box-shadow: 0 0 35px rgba(250, 121, 7, 0.75), inset 0 0 16px rgba(250, 121, 7, 0.3);
}

/* Horizontal road branch connector */
.milestone-connector-line {
  position: absolute;
  top: 50%;
  height: 2px;
  background: linear-gradient(to right, rgba(250, 121, 7, 0.6), rgba(250, 121, 7, 0.15));
  z-index: 2;
  pointer-events: none;
}
.left-block .milestone-connector-line {
  right: 50%;
  left: calc(50% - 40px);
  transform: scaleX(-1);
  transform-origin: right center;
}
.right-block .milestone-connector-line {
  left: 50%;
  width: 40px;
}

/* Card placement alternating sides */
.milestone-block.left-block .milestone-content-card {
  margin-right: auto;
  margin-left: 0;
}
.milestone-block.right-block .milestone-content-card {
  margin-left: auto;
  margin-right: 0;
}

/* Broad, readable milestone content card */
.milestone-content-card {
  width: calc(50% - 54px);
  max-width: 480px;
  padding: 2rem 2.25rem;
  background: rgba(13, 17, 24, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  backdrop-filter: blur(16px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
  text-align: left;
  position: relative;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.35s ease;
}
.milestone-content-card:hover {
  transform: translateY(-4px);
  border-color: rgba(250, 121, 7, 0.4);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(250, 121, 7, 0.15);
}

.milestone-photo-badge {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.35rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  cursor: pointer;
}
.milestone-photo-badge img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}
.milestone-content-card:hover .milestone-photo-badge img {
  transform: scale(1.04);
}
.milestone-photo-badge::after {
  content: 'EXPAND PHOTO';
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  color: #fff;
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(250, 121, 7, 0.5);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  backdrop-filter: blur(6px);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.milestone-photo-badge:hover::after {
  opacity: 1;
}

.milestone-icon-badge {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgba(250, 121, 7, 0.12);
  border: 1px solid rgba(250, 121, 7, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-bottom: 1.35rem;
  box-shadow: 0 0 20px rgba(250, 121, 7, 0.15);
}

.milestone-year-tag {
  font-family: var(--font-mono);
  font-size: 0.725rem;
  color: var(--wmx-orange);
  font-weight: 800;
  letter-spacing: 0.08em;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}
.milestone-content-card h3 {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  margin: 0.25rem 0 0.85rem 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
}
.milestone-content-card p {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.65;
  color: #94a3b8;
  margin: 0;
}

/* Mobile responsive collapse into a clean vertical highway */
@media (max-width: 768px) {
  .awards-highway-timeline {
    padding: 1.5rem 0;
  }
  .timeline-highway-spine {
    left: 28px;
    width: 8px;
  }
  .endpoint-start-wrap, .endpoint-finish-wrap {
    text-align: left;
    padding-left: 10px;
  }
  .milestone-block {
    display: block;
    margin-bottom: 3.5rem;
  }
  .milestone-node-circle {
    top: 28px;
    left: 28px;
    transform: translateX(-50%);
    width: 46px;
    height: 46px;
    font-size: 0.8rem;
  }
  .milestone-block:hover .milestone-node-circle {
    transform: translateX(-50%) scale(1.05);
  }
  .milestone-connector-line {
    display: none;
  }
  .milestone-content-card {
    width: calc(100% - 62px) !important;
    max-width: 100% !important;
    margin-left: 62px !important;
    margin-right: 0 !important;
    padding: 1.5rem;
  }
  .milestone-photo-badge {
    height: 180px;
  }
}`;

// Replace duplicate section first if present
if (cssDupStart !== -1 && cssDupEnd !== -1) {
  cssLines.splice(cssDupStart, cssDupEnd - cssDupStart + 1);
  console.log('Removed duplicate awards rules at bottom of CSS.');
}

// Replace section 1 with newCss
cssLines.splice(cssSection8Start, cssSection8End - cssSection8Start + 1, ...newCss.split('\n'));

const cssNewline = cssIsCrlf ? '\r\n' : '\n';
fs.writeFileSync('public/css/main.css', cssLines.join(cssNewline), 'utf8');
console.log('Successfully updated gallery & awards styles in public/css/main.css!');
