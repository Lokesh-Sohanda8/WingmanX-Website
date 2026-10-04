import fs from 'fs';

const cssPath = 'public/css/main.css';
let content = fs.readFileSync(cssPath, 'utf8');

const startMarker = `/* --------------------------------------------------------------------------
   5. OEM PARTNERS = STRENGTHEN RIDER RELATIONSHIPS BEYOND THE SALE
   -------------------------------------------------------------------------- */`;

const endMarker = `.oem-request-box {
  padding: clamp(2rem, 5vw, 4rem);
  max-width: 900px;
  margin: 0 auto;
}`;

const oemCssBlock = `/* --------------------------------------------------------------------------
   5. OEM PARTNERS = STRENGTHEN RIDER RELATIONSHIPS BEYOND THE SALE
   -------------------------------------------------------------------------- */

/* Global OEM Badge Pill */
.oem-badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(250, 121, 7, 0.12);
  color: #fa7907;
  border: 1px solid rgba(250, 121, 7, 0.35);
  font-family: 'Space Grotesk', var(--font-heading, sans-serif);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 18px;
  border-radius: 9999px;
  box-shadow: 0 4px 14px rgba(250, 121, 7, 0.15);
}

/* 1. HERO SECTION: Strengthen Rider Relationships Beyond the Sale */
.oem-hero-section {
  position: relative;
  padding: calc(var(--header-height, 80px) + 3.5rem) 0 5rem;
  background: radial-gradient(circle at 75% 30%, rgba(250, 121, 7, 0.12) 0%, transparent 60%), #060709;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.oem-hero-ambient-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  right: 5%;
  top: 10%;
  background: radial-gradient(circle, rgba(250, 121, 7, 0.15) 0%, transparent 70%);
  pointer-events: none;
  filter: blur(60px);
}

.oem-hero-container {
  position: relative;
  z-index: 2;
}

.oem-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

.oem-hero-title {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: clamp(2.3rem, 4vw, 3.8rem);
  font-weight: 800;
  line-height: 1.12;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.oem-hero-lead {
  font-family: var(--font-body, 'Manrope', sans-serif);
  font-size: clamp(1.05rem, 1.6vw, 1.22rem);
  font-weight: 500;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1rem;
  max-width: 620px;
}

.oem-hero-lead-sub {
  font-family: var(--font-body, 'Manrope', sans-serif);
  font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  font-weight: 400;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 2.25rem;
  max-width: 580px;
}

.oem-hero-actions {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-wrap: wrap;
}

.oem-hero-thumb-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.oem-hero-halo-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(250, 121, 7, 0.22) 0%, transparent 70%);
  filter: blur(35px);
  pointer-events: none;
}

.oem-hero-visual-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(250, 121, 7, 0.35);
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.9), 0 0 50px rgba(250, 121, 7, 0.25);
  background: #080a0e;
  max-width: 440px;
  width: 100%;
  aspect-ratio: 4 / 5;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
}

.oem-hero-visual-card:hover {
  transform: translateY(-4px) scale(1.015);
  box-shadow: 0 30px 75px rgba(0, 0, 0, 0.95), 0 0 60px rgba(250, 121, 7, 0.35);
  border-color: rgba(250, 121, 7, 0.6);
}

.oem-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.oem-hero-img-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background: rgba(8, 10, 14, 0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 10px 16px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}

/* 2. FROM OWNERSHIP TO COMMUNITY */
.oem-ownership-section {
  padding: 5.5rem 0 6.5rem;
  background: #080a0e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.oem-section-header-centered {
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
}

.oem-section-title {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.015em;
  line-height: 1.18;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}

.oem-section-lead-bold {
  font-family: var(--font-body, 'Manrope', sans-serif);
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.oem-section-lead-body {
  font-family: var(--font-body, 'Manrope', sans-serif);
  font-size: 1.05rem;
  font-weight: 400;
  color: rgba(240, 244, 250, 0.85);
  line-height: 1.7;
  margin: 0 auto;
}

.oem-panoramic-video-frame {
  position: relative;
  max-width: 1140px;
  margin: 3.5rem auto 0;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.85), 0 0 35px rgba(250, 121, 7, 0.15);
  aspect-ratio: 21 / 9;
  max-height: 480px;
  background: #06080c;
}

.oem-panoramic-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.oem-video-overlay-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 7, 9, 0.1) 0%, transparent 60%, rgba(6, 7, 9, 0.85) 100%);
  pointer-events: none;
}

.oem-video-caption-bar {
  position: absolute;
  bottom: 18px;
  left: 24px;
  right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.9);
  flex-wrap: wrap;
  gap: 0.75rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
}

/* 3. SOLVING POST PURCHASE ENGAGEMENT GAPS */
.oem-gaps-section {
  padding: 5.5rem 0;
  background: #060709;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.oem-gaps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

.oem-challenges-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.oem-challenge-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: rgba(14, 18, 25, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 3px solid #fa7907;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.oem-challenge-card:hover {
  transform: translateX(4px);
  background: rgba(22, 28, 38, 0.9);
  border-color: rgba(250, 121, 7, 0.4);
  border-left-color: #fa7907;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(250, 121, 7, 0.15);
}

.oem-chevron-indicator {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  color: #fa7907;
  line-height: 1;
  margin-top: 1px;
  flex-shrink: 0;
}

.oem-challenge-text h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.35rem 0;
  line-height: 1.35;
}

.oem-challenge-text p {
  font-family: 'Manrope', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.72);
  margin: 0;
  line-height: 1.5;
}

.oem-dual-visual-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  justify-content: center;
}

.oem-visual-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
  background: #080a0e;
  aspect-ratio: 16 / 10;
  transition: transform 0.4s ease, border-color 0.4s ease;
}

.oem-visual-card:hover {
  transform: translateY(-4px);
  border-color: rgba(250, 121, 7, 0.4);
}

.oem-stack-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.oem-visual-tag {
  position: absolute;
  bottom: 12px;
  left: 14px;
  background: rgba(6, 8, 12, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 5px 12px;
  border-radius: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  letter-spacing: 0.06em;
}

/* 4. FLEXIBLE PROGRAMS ALIGNED WITH BRAND OBJECTIVES */
.oem-programs-section {
  padding: 5.5rem 0;
  background: #090c12;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.oem-programs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

.oem-programs-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 3.4vw, 2.9rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  letter-spacing: -0.015em;
}

.oem-programs-lead {
  font-family: 'Manrope', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #fa7907;
  margin-bottom: 0.75rem;
}

.oem-models-subtitle {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.oem-models-list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.oem-model-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1.25rem;
  background: rgba(14, 18, 25, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  transition: all 0.25s ease;
}

.oem-model-item:hover {
  background: rgba(250, 121, 7, 0.08);
  border-color: rgba(250, 121, 7, 0.35);
  transform: translateX(4px);
}

.oem-model-label {
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
}

.oem-action-media-stack {
  position: relative;
  width: 100%;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.oem-action-main-frame {
  position: relative;
  width: 88%;
  aspect-ratio: 16 / 11;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
  background: #06080c;
  z-index: 1;
}

.oem-action-main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.oem-racing-checkered-strip {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 18px;
  background: repeating-linear-gradient(45deg, #fa7907 0, #fa7907 9px, #111 9px, #111 18px);
  opacity: 0.85;
  z-index: 2;
}

.oem-speedometer-inset {
  position: absolute;
  top: -15px;
  left: -10px;
  width: 220px;
  aspect-ratio: 16 / 10;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(250, 121, 7, 0.45);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.9), 0 0 30px rgba(250, 121, 7, 0.25);
  background: #06080c;
  z-index: 3;
}

.oem-speedo-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.speedo-badge {
  position: absolute;
  bottom: 6px;
  left: 8px;
  background: rgba(0, 0, 0, 0.85);
  padding: 3px 8px;
  border-radius: 4px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.06em;
}

.oem-racing-inset {
  position: absolute;
  bottom: -20px;
  left: 20px;
  width: 62%;
  aspect-ratio: 16 / 10;
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85);
  background: #06080c;
  z-index: 3;
}

.oem-racing-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 5. REAL EXPERIENCES, REAL INSIGHTS */
.oem-insights-section {
  padding: 5.5rem 0;
  background: #060709;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.oem-insights-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

.oem-insights-visual-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.oem-watermark-vertical {
  position: absolute;
  left: -45px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 6.5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 0.1em;
  pointer-events: none;
  z-index: 0;
  user-select: none;
}

.oem-insights-img-box {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 4 / 5;
  border-radius: 18px;
  overflow: hidden;
  border-left: 10px solid #fa7907;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.85), -12px 0 35px rgba(250, 121, 7, 0.2);
  background: #080a0e;
}

.oem-insights-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.oem-insights-lead {
  font-family: 'Manrope', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.5;
}

.oem-insights-body {
  font-family: 'Manrope', sans-serif;
  font-size: 1.05rem;
  font-weight: 400;
  color: rgba(240, 244, 250, 0.85);
  line-height: 1.7;
}

/* 6. BUILT FOR SUSTAINABLE COMMUNITY GROWTH */
.oem-sustainable-banner {
  position: relative;
  padding: 6.5rem 1.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 440px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.oem-sustainable-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.oem-mountain-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  display: block;
  filter: brightness(0.65) contrast(1.1);
}

.oem-mountain-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 7, 9, 0.92) 0%, rgba(6, 7, 9, 0.55) 50%, rgba(6, 7, 9, 0.95) 100%);
}

.oem-sustainable-inner {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.oem-sustainable-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 3.8vw, 3.4rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  letter-spacing: -0.015em;
}

.oem-sustainable-desc {
  font-family: 'Manrope', sans-serif;
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.7;
  max-width: 820px;
}

/* 7. RETAINED: COCKPIT TFT HUD & VEHICLE TELEMATICS */
.oem-hero-cockpit {
  padding: 5.5rem 0 4.5rem;
  background: radial-gradient(circle at 50% 30%, rgba(0, 119, 255, 0.12) 0%, transparent 65%), #05070a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.oem-tft-cluster-mockup {
  border-color: rgba(0, 119, 255, 0.35);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.95), 0 0 45px rgba(0, 119, 255, 0.15);
  background: #080b11;
  padding: 2rem;
  border-radius: var(--radius-lg);
}

.cluster-sim-watermark {
  background: rgba(0, 119, 255, 0.12);
  border: 1px solid rgba(0, 119, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 0.725rem;
  color: #70b4ff;
  letter-spacing: 0.06em;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cluster-top-bar {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.cluster-main-display {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  align-items: center;
  padding: 2.5rem 0 1rem;
}

@media (max-width: 768px) {
  .cluster-main-display {
    grid-template-columns: 1fr;
  }
}

.cluster-gauge {
  text-align: center;
}

.speed-readout {
  font-family: var(--font-display);
  font-size: clamp(4rem, 8vw, 6.5rem);
  font-weight: 900;
  line-height: 0.9;
  color: #fff;
  display: block;
}

.speed-unit {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--wmx-orange);
  letter-spacing: 0.1em;
}

.gauge-sub {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.5rem;
}

.cluster-bus-stream {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.cluster-bus-stream .bus-lbl {
  font-family: var(--font-mono);
  font-size: 0.675rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.08em;
}

.cluster-bus-stream .bus-code {
  font-family: var(--font-mono);
  font-size: 0.775rem;
  color: #38ef7d;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border-left: 2px solid #38ef7d;
  overflow-x: auto;
}

.cluster-route-hud {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.route-tele-box {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-sm);
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
}

.route-tele-box .r-lbl {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
}

.route-tele-box .r-val {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-top: 0.25rem;
}

/* 8. RETAINED: THREE ARCHITECTURE PHASES */
.oem-systems-section {
  padding: 5.5rem 0;
  background: #07090d;
}

.oem-phases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3.5rem;
}

@media (max-width: 992px) {
  .oem-phases-grid {
    grid-template-columns: 1fr;
  }
}

.oem-phase-card {
  display: flex;
  flex-direction: column;
}

.phase-indicator {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--accent-blue);
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
}

.phase-icon {
  font-size: 2.2rem;
  color: var(--accent-blue);
  margin-bottom: 1.25rem;
}

.oem-phase-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.phase-specs {
  list-style: none;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 0.875rem;
}

/* 9. RETAINED: OEM REQUEST BOX & FORM */
.oem-request-box {
  padding: clamp(2rem, 5vw, 4rem);
  max-width: 900px;
  margin: 0 auto;
}

/* Responsive Overrides for OEM Partners */
@media (max-width: 992px) {
  .oem-hero-section {
    padding-top: calc(var(--header-height, 80px) + 2rem);
  }
  .oem-hero-grid,
  .oem-gaps-grid,
  .oem-programs-grid,
  .oem-insights-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .oem-hero-title {
    text-align: center;
  }
  .oem-hero-lead, .oem-hero-lead-sub {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .oem-hero-actions {
    justify-content: center;
  }
  .oem-action-media-stack {
    min-height: 380px;
    margin-top: 1.5rem;
  }
  .oem-action-main-frame {
    width: 95%;
  }
  .oem-speedometer-inset {
    width: 170px;
    top: -10px;
    left: 0;
  }
  .oem-racing-inset {
    width: 75%;
    bottom: -15px;
    left: 10px;
  }
  .oem-watermark-vertical {
    display: none;
  }
}

@media (max-width: 576px) {
  .oem-panoramic-video-frame {
    aspect-ratio: 16 / 10;
  }
  .oem-hero-visual-card {
    max-width: 320px;
  }
  .oem-speedometer-inset {
    width: 140px;
  }
  .oem-racing-inset {
    width: 85%;
  }
}`;

const isCRLF = content.includes('\r\n');
const sMarker = isCRLF ? startMarker.replace(/\n/g, '\r\n') : startMarker;
const eMarker = isCRLF ? endMarker.replace(/\n/g, '\r\n') : endMarker;

const startIdx = content.indexOf(sMarker);
const endIdx = content.indexOf(eMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('CSS Markers not found! startIdx:', startIdx, 'endIdx:', endIdx);
  process.exit(1);
}

const before = content.slice(0, startIdx);
const after = content.slice(endIdx + eMarker.length);

const newContent = before + (isCRLF ? oemCssBlock.replace(/\n/g, '\r\n') : oemCssBlock) + after;

fs.writeFileSync(cssPath, newContent, 'utf8');
console.log('Successfully updated OEM styles in', cssPath);
