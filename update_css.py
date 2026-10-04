with open('public/css/main.css', 'r', encoding='utf-8') as f:
    css_code = f.read()

target_marker = "/* --- GRILL-ME REFINEMENT CSS --- */"
target_idx = css_code.find(target_marker)

if target_idx == -1:
    print("Target marker not found in main.css!")
    exit(1)

new_homepage_css = """/* ==========================================================================
   HOMEPAGE MASTERCLASS: STRUCTURED & VIBRANT EDITORIAL EXPERIENCE
   "DON'T JUST PLAN THE RIDE. LIVE IT."
   ========================================================================== */

/* Universal Utilities for Color Gradients & Tags */
.gradient-text-orange {
  background: linear-gradient(135deg, #FF5500 0%, #FFA800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient-text-gold {
  background: linear-gradient(135deg, #FFB800 0%, #FFE066 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient-text-cyan {
  background: linear-gradient(135deg, #00D2FF 0%, #0088FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient-text-emerald {
  background: linear-gradient(135deg, #00F59B 0%, #00C853 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient-text-white {
  background: linear-gradient(135deg, #FFFFFF 0%, #A0A5B5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Section Header Utilities */
.section-header-centered {
  max-width: 820px;
  margin: 0 auto 4rem auto;
}
.section-title-large {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 1.25rem;
}
.section-description {
  font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  color: #94A3B8;
  line-height: 1.6;
}
.section-description.centered {
  margin-left: auto;
  margin-right: auto;
}

/* Vibrant Tags */
.tag-gold, .tag-purple, .tag-orange, .tag-cyan, .tag-emerald {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.35rem 0.9rem;
  border-radius: var(--radius-pill);
}
.tag-gold {
  background: rgba(255, 184, 0, 0.12);
  border: 1px solid rgba(255, 184, 0, 0.4);
  color: #FFB800;
}
.tag-purple {
  background: rgba(165, 94, 234, 0.12);
  border: 1px solid rgba(165, 94, 234, 0.4);
  color: #A55EEA;
}
.tag-orange {
  background: rgba(255, 85, 0, 0.12);
  border: 1px solid rgba(255, 85, 0, 0.4);
  color: #FF6A00;
}
.tag-cyan {
  background: rgba(0, 210, 255, 0.12);
  border: 1px solid rgba(0, 210, 255, 0.4);
  color: #00D2FF;
}
.tag-emerald {
  background: rgba(0, 245, 155, 0.12);
  border: 1px solid rgba(0, 245, 155, 0.4);
  color: #00F59B;
}

/* ==========================================================================
   1. HERO SECTION
   ========================================================================== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0 60px 0;
  overflow: hidden;
  background: #040507;
}
.hero-letterbox {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50px;
  background: #040507;
  z-index: 5;
}
.hero-letterbox.top { top: 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
.hero-letterbox.bottom { bottom: 0; border-top: 1px solid rgba(255, 255, 255, 0.05); }

.video-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.1) brightness(0.65) saturate(1.15);
}
.hero-cinema-grading {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(4, 5, 7, 0.2) 0%, rgba(4, 5, 7, 0.85) 75%, #040507 100%);
  pointer-events: none;
}
.hero-ambient-flare {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 25%, rgba(255, 85, 0, 0.22) 0%, transparent 55%),
              radial-gradient(circle at 20% 75%, rgba(0, 210, 255, 0.16) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 1180px;
  text-align: center;
  margin: 0 auto;
}
.hero-telemetry-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: rgba(14, 19, 28, 0.85);
  border: 1px solid rgba(0, 245, 155, 0.35);
  padding: 0.45rem 1.15rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.785rem;
  color: #E2E8F0;
  letter-spacing: 0.08em;
  margin-bottom: 1.75rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 0 20px rgba(0, 245, 155, 0.15);
}
.beacon-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00F59B;
  box-shadow: 0 0 10px #00F59B;
  animation: pulseDot 2s infinite ease-in-out;
}
@keyframes pulseDot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.6; }
}

.hero-display-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 7vw, 6.2rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1.5rem;
  text-shadow: 0 15px 40px rgba(0, 0, 0, 0.8);
}
.hero-highlight-orange {
  background: linear-gradient(135deg, #FF5500 20%, #FFA800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.hero-highlight-white {
  color: #ffffff;
  display: inline-block;
}

.hero-lead-text {
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
  color: #CBD5E1;
  max-width: 760px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
}

.hero-actions-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}
.btn-hero-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: linear-gradient(135deg, #FF5500 0%, #FF8800 100%);
  color: #000;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.04em;
  padding: 1rem 2.2rem;
  border-radius: var(--radius-pill);
  box-shadow: 0 10px 25px rgba(255, 85, 0, 0.4);
  transition: all var(--transition-fast);
}
.btn-hero-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 14px 35px rgba(255, 85, 0, 0.6);
  color: #000;
}
.btn-hero-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 184, 0, 0.4);
  color: #FFB800;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.04em;
  padding: 1rem 2rem;
  border-radius: var(--radius-pill);
  backdrop-filter: blur(10px);
  transition: all var(--transition-fast);
}
.btn-hero-outline:hover {
  background: rgba(255, 184, 0, 0.15);
  border-color: #FFB800;
  color: #FFF;
  transform: translateY(-3px);
}

/* Hero Bottom Metrics Strip */
.hero-telemetry-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  max-width: 1140px;
  margin: 0 auto;
}
@media (max-width: 900px) {
  .hero-telemetry-strip {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .hero-telemetry-strip {
    grid-template-columns: 1fr;
  }
}
.tele-metric-card {
  background: rgba(14, 18, 26, 0.75);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.4rem;
  backdrop-filter: blur(16px);
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: transform var(--transition-fast);
}
.tele-metric-card:hover {
  transform: translateY(-4px);
}
.tele-metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
}
.tele-metric-card.cyan-theme { border: 1px solid rgba(0, 210, 255, 0.2); }
.tele-metric-card.cyan-theme::before { background: linear-gradient(90deg, #00D2FF, #0088FF); }
.tele-metric-card.cyan-theme .metric-val { color: #00D2FF; }

.tele-metric-card.emerald-theme { border: 1px solid rgba(0, 245, 155, 0.2); }
.tele-metric-card.emerald-theme::before { background: linear-gradient(90deg, #00F59B, #00C853); }
.tele-metric-card.emerald-theme .metric-val { color: #00F59B; }

.tele-metric-card.amber-theme { border: 1px solid rgba(255, 184, 0, 0.2); }
.tele-metric-card.amber-theme::before { background: linear-gradient(90deg, #FFB800, #FFA000); }
.tele-metric-card.amber-theme .metric-val { color: #FFB800; }

.tele-metric-card.coral-theme { border: 1px solid rgba(255, 71, 87, 0.2); }
.tele-metric-card.coral-theme::before { background: linear-gradient(90deg, #FF4757, #FF6B81); }
.tele-metric-card.coral-theme .metric-val { color: #FF4757; }

.metric-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}
.metric-top i {
  font-size: 1.1rem;
  opacity: 0.85;
}
.metric-chip {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  color: #94A3B8;
}
.metric-val {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 0.25rem;
}
.metric-desc {
  font-size: 0.825rem;
  color: #94A3B8;
  line-height: 1.35;
}

/* ==========================================================================
   2. THE MANIFESTO SECTION
   ========================================================================== */
.manifesto-section {
  position: relative;
  padding: clamp(5rem, 8vw, 9rem) 0;
  background: radial-gradient(circle at 85% 20%, rgba(255, 140, 0, 0.12) 0%, transparent 60%),
              linear-gradient(180deg, #040507 0%, #0d1322 50%, #06080F 100%);
  overflow: hidden;
}
.manifesto-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;
}
@media (max-width: 992px) {
  .manifesto-grid {
    grid-template-columns: 1fr;
  }
}
.manifesto-media-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(255, 184, 0, 0.3);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 140, 0, 0.15);
}
.manifesto-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s ease;
}
.manifesto-media-card:hover .manifesto-img {
  transform: scale(1.03);
}
.media-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(6, 8, 15, 0.85) 100%);
  pointer-events: none;
}
.media-hud-tag {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(10, 14, 22, 0.9);
  border: 1px solid rgba(0, 245, 155, 0.4);
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #E2E8F0;
  backdrop-filter: blur(8px);
}
.pulse-green-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00F59B;
  box-shadow: 0 0 8px #00F59B;
}
.media-corner {
  position: absolute;
  width: 16px;
  height: 16px;
  border-color: #FFB800;
  border-style: solid;
  pointer-events: none;
}
.corner-tl { top: 12px; left: 12px; border-width: 2px 0 0 2px; }
.corner-br { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; }

.manifesto-contrast-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 2rem;
}
@media (max-width: 580px) {
  .manifesto-contrast-grid {
    grid-template-columns: 1fr;
  }
}
.contrast-card {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  background: rgba(15, 20, 30, 0.85);
  backdrop-filter: blur(12px);
  position: relative;
}
.contrast-card.hazard-side {
  border: 1px solid rgba(255, 71, 87, 0.35);
  border-left: 3px solid #FF4757;
}
.contrast-card.wingman-side {
  border: 1px solid rgba(0, 245, 155, 0.35);
  border-left: 3px solid #00F59B;
}
.card-badge {
  font-family: var(--font-mono);
  font-size: 0.725rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.crimson-badge { color: #FF4757; }
.emerald-badge { color: #00F59B; }
.contrast-card h4 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #FFF;
  margin-bottom: 0.5rem;
}
.contrast-card p {
  font-size: 0.9rem;
  color: #94A3B8;
  line-height: 1.5;
}

/* ==========================================================================
   3. ROAD HAZARDS SECTION (3 COLOR CARDS)
   ========================================================================== */
.hazards-section {
  position: relative;
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: #060910;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.hazards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}
@media (max-width: 900px) {
  .hazards-grid {
    grid-template-columns: 1fr;
  }
}
.hazard-card {
  position: relative;
  background: rgba(14, 18, 28, 0.75);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2rem;
  backdrop-filter: blur(16px);
  overflow: hidden;
  transition: all var(--transition-medium);
  display: flex;
  flex-direction: column;
}
.hazard-card:hover {
  transform: translateY(-8px);
}
.hazard-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}
.hazard-card.crimson-card {
  border: 1px solid rgba(255, 59, 48, 0.25);
}
.hazard-card.crimson-card::before {
  background: linear-gradient(90deg, #FF3B30, #FF6B81);
}
.hazard-card.crimson-card:hover {
  box-shadow: 0 20px 45px rgba(255, 59, 48, 0.2);
  border-color: rgba(255, 59, 48, 0.5);
}

.hazard-card.amber-card {
  border: 1px solid rgba(255, 170, 0, 0.25);
}
.hazard-card.amber-card::before {
  background: linear-gradient(90deg, #FFAA00, #FFD166);
}
.hazard-card.amber-card:hover {
  box-shadow: 0 20px 45px rgba(255, 170, 0, 0.2);
  border-color: rgba(255, 170, 0, 0.5);
}

.hazard-card.cyan-card {
  border: 1px solid rgba(0, 210, 255, 0.25);
}
.hazard-card.cyan-card::before {
  background: linear-gradient(90deg, #00D2FF, #0088FF);
}
.hazard-card.cyan-card:hover {
  box-shadow: 0 20px 45px rgba(0, 210, 255, 0.2);
  border-color: rgba(0, 210, 255, 0.5);
}

.hazard-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}
.hazard-icon-box {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}
.red-icon { background: rgba(255, 59, 48, 0.15); color: #FF3B30; border: 1px solid rgba(255, 59, 48, 0.3); }
.amber-icon { background: rgba(255, 170, 0, 0.15); color: #FFAA00; border: 1px solid rgba(255, 170, 0, 0.3); }
.cyan-icon { background: rgba(0, 210, 255, 0.15); color: #00D2FF; border: 1px solid rgba(0, 210, 255, 0.3); }

.hazard-status-pill {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-pill);
}
.red-status { background: rgba(255, 59, 48, 0.12); color: #FF3B30; border: 1px solid rgba(255, 59, 48, 0.3); }
.amber-status { background: rgba(255, 170, 0, 0.12); color: #FFAA00; border: 1px solid rgba(255, 170, 0, 0.3); }
.cyan-status { background: rgba(0, 210, 255, 0.12); color: #00D2FF; border: 1px solid rgba(0, 210, 255, 0.3); }

.hazard-title {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 800;
  color: #FFF;
  margin-bottom: 0.85rem;
  line-height: 1.3;
}
.hazard-body {
  font-size: 0.95rem;
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 1.75rem;
  flex-grow: 1;
}

.hazard-solution-tag {
  padding: 0.85rem 1rem;
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.red-sol { background: rgba(255, 59, 48, 0.08); border-left: 3px solid #FF3B30; }
.red-sol .sol-lbl { color: #FF3B30; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; }
.red-sol .sol-val { color: #E2E8F0; font-size: 0.85rem; font-weight: 500; }

.amber-sol { background: rgba(255, 170, 0, 0.08); border-left: 3px solid #FFAA00; }
.amber-sol .sol-lbl { color: #FFAA00; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; }
.amber-sol .sol-val { color: #E2E8F0; font-size: 0.85rem; font-weight: 500; }

.cyan-sol { background: rgba(0, 210, 255, 0.08); border-left: 3px solid #00D2FF; }
.cyan-sol .sol-lbl { color: #00D2FF; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; }
.cyan-sol .sol-val { color: #E2E8F0; font-size: 0.85rem; font-weight: 500; }

/* ==========================================================================
   4. SIGNATURE MOTION TIRE & ROAD COCKPIT
   ========================================================================== */
.tire-section {
  position: relative;
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: radial-gradient(ellipse at 50% 30%, rgba(255, 85, 0, 0.12) 0%, transparent 70%),
              linear-gradient(180deg, #060910 0%, #0d121c 50%, #07090E 100%);
  overflow: hidden;
}
.tire-cockpit-layout {
  display: grid;
  grid-template-columns: 280px 1fr 320px;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-top: 2rem;
}
@media (max-width: 1080px) {
  .tire-cockpit-layout {
    grid-template-columns: 1fr;
  }
}

/* Left Telemetry HUD */
.tire-telemetry-hud {
  background: rgba(14, 18, 26, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}
.hud-panel-title {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 800;
  color: #FF6A00;
  letter-spacing: 0.1em;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.hud-gauge-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  padding: 0.85rem 1rem;
}
.hud-gauge-card.highlight-card {
  background: rgba(255, 184, 0, 0.08);
  border-color: rgba(255, 184, 0, 0.35);
}
.gauge-lbl {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: #94A3B8;
  letter-spacing: 0.06em;
  display: block;
  margin-bottom: 0.2rem;
}
.gauge-val {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  display: block;
}
.gauge-val small { font-size: 0.85rem; opacity: 0.8; }
.cyan-val { color: #00D2FF; }
.orange-val { color: #FF6A00; }
.emerald-val { color: #00F59B; font-size: 1.05rem; }
.gold-val { color: #FFB800; font-size: 1.6rem; }
.gauge-sub { font-family: var(--font-mono); font-size: 0.68rem; color: #94A3B8; display: block; margin-top: 0.2rem; }

.gauge-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 0.4rem;
  overflow: hidden;
}
.gauge-fill { height: 100%; border-radius: 2px; }
.cyan-fill { background: #00D2FF; }
.orange-fill { background: #FF6A00; }
.emerald-fill { background: #00F59B; }

/* Center Stage: Wheel & Canvases */
.tire-stage-center {
  position: relative;
  min-height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: visible;
}
.tire-graphic-wrapper {
  position: relative;
  z-index: 4;
}
.bmw-wheel-img {
  width: clamp(220px, 28vw, 320px);
  height: auto;
  filter: drop-shadow(0 25px 35px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 20px rgba(255, 85, 0, 0.3));
  will-change: transform;
}
.spark-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
}
.road-canvas {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  pointer-events: none;
  z-index: 2;
}

/* Right HUD: Journey Waypoints */
.tire-waypoints-hud {
  background: rgba(14, 18, 26, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  backdrop-filter: blur(16px);
}
.tire-waypoints {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
.tire-waypoint {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.75rem 0.85rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0.45;
  transition: all 0.3s ease;
}
.tire-waypoint.active {
  opacity: 1;
  background: rgba(255, 255, 255, 0.06);
  transform: translateX(-4px);
}
.wp-cyan.active { border-color: rgba(0, 210, 255, 0.4); box-shadow: 0 0 15px rgba(0, 210, 255, 0.15); }
.wp-orange.active { border-color: rgba(255, 106, 0, 0.4); box-shadow: 0 0 15px rgba(255, 106, 0, 0.15); }
.wp-emerald.active { border-color: rgba(0, 245, 155, 0.4); box-shadow: 0 0 15px rgba(0, 245, 155, 0.15); }
.wp-purple.active { border-color: rgba(165, 94, 234, 0.4); box-shadow: 0 0 15px rgba(165, 94, 234, 0.15); }

.wp-dot-ring {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}
.wp-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #FFF;
}
.wp-cyan.active .wp-dot { background: #00D2FF; box-shadow: 0 0 8px #00D2FF; }
.wp-orange.active .wp-dot { background: #FF6A00; box-shadow: 0 0 8px #FF6A00; }
.wp-emerald.active .wp-dot { background: #00F59B; box-shadow: 0 0 8px #00F59B; }
.wp-purple.active .wp-dot { background: #A55EEA; box-shadow: 0 0 8px #A55EEA; }

.wp-step {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  color: #94A3B8;
  letter-spacing: 0.08em;
  display: block;
}
.tire-waypoint h4 {
  font-size: 0.95rem;
  font-weight: 800;
  color: #FFF;
  margin: 0.15rem 0;
}
.tire-waypoint p {
  font-size: 0.8rem;
  color: #94A3B8;
  line-height: 1.35;
}

/* ==========================================================================
   5. PACK RADAR DISCOVERY & CURATED RIDES
   ========================================================================== */
.radar-section {
  position: relative;
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: linear-gradient(180deg, #070A14 0%, #0d1527 50%, #070A14 100%);
  overflow: hidden;
}
.radar-showcase-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2rem;
  align-items: stretch;
  margin-bottom: 4rem;
}
@media (max-width: 992px) {
  .radar-showcase-grid {
    grid-template-columns: 1fr;
  }
}

.radar-stage {
  position: relative;
  width: 100%;
  height: 520px;
  background: radial-gradient(circle at center, rgba(16, 26, 46, 0.8) 0%, rgba(7, 10, 20, 0.95) 75%);
  border: 1px solid rgba(0, 210, 255, 0.25);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), inset 0 0 40px rgba(0, 210, 255, 0.08);
}
#radar-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.radar-center-hub {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00D2FF 0%, #0077FF 100%);
  box-shadow: 0 0 25px rgba(0, 210, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: 800;
  font-size: 0.72rem;
  pointer-events: none;
  z-index: 10;
}
.radar-center-hub i { font-size: 1.1rem; }
.radar-scan-status {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(10, 14, 24, 0.9);
  border: 1px solid rgba(0, 210, 255, 0.3);
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #CBD5E1;
  pointer-events: none;
}
.pulse-cyan-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00D2FF;
  box-shadow: 0 0 8px #00D2FF;
  animation: pulseDot 1.8s infinite;
}

/* Radar Rider Card */
.radar-rider-card {
  height: 100%;
  background: rgba(14, 20, 32, 0.85);
  border: 1px solid rgba(0, 210, 255, 0.25);
  border-radius: var(--radius-lg);
  padding: 2rem;
  backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
}
.rider-card-inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.rider-card-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.rider-avatar-badge {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1C2436 0%, #0F1626 100%);
  border: 2px solid #00D2FF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 900;
  color: #00D2FF;
  box-shadow: 0 0 20px rgba(0, 210, 255, 0.3);
}
.compat-indicator {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 800;
  background: #00F59B;
  color: #000;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}
.rider-dist-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #00D2FF;
  display: inline-block;
  margin-bottom: 0.25rem;
}
.rider-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: #FFF;
  margin-bottom: 0.15rem;
}
.rider-bike {
  font-size: 0.95rem;
  color: #94A3B8;
}

.rider-card-telemetry {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1.25rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.telemetry-box {
  display: flex;
  flex-direction: column;
}
.tele-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: #94A3B8;
  letter-spacing: 0.06em;
  margin-bottom: 0.2rem;
}
.tele-val {
  font-size: 0.95rem;
  font-weight: 700;
  color: #FFF;
}
.tele-val.highlight { color: #FFB800; }

/* Curated Weekend Rides Strip */
.curated-rides-wrap {
  margin-top: 2rem;
}
.curated-rides-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1.75rem;
}
.sub-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #00D2FF;
  letter-spacing: 0.1em;
  font-weight: 700;
  display: block;
  margin-bottom: 0.25rem;
}
.curated-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #FFF;
}
.btn-outline-cyan {
  border: 1px solid rgba(0, 210, 255, 0.4);
  color: #00D2FF;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-pill);
  transition: all var(--transition-fast);
}
.btn-outline-cyan:hover {
  background: rgba(0, 210, 255, 0.15);
  border-color: #00D2FF;
  color: #FFF;
}

.weekend-rides-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
@media (max-width: 900px) {
  .weekend-rides-grid {
    grid-template-columns: 1fr;
  }
}
.weekend-ride-card {
  background: rgba(14, 19, 30, 0.85);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  backdrop-filter: blur(14px);
  position: relative;
  transition: all var(--transition-fast);
  display: flex;
  flex-direction: column;
}
.weekend-ride-card:hover {
  transform: translateY(-6px);
}
.weekend-ride-card.orange-edge { border: 1px solid rgba(255, 106, 0, 0.3); border-top: 3px solid #FF6A00; }
.weekend-ride-card.blue-edge { border: 1px solid rgba(0, 119, 255, 0.3); border-top: 3px solid #0077FF; }
.weekend-ride-card.emerald-edge { border: 1px solid rgba(0, 245, 155, 0.3); border-top: 3px solid #00F59B; }

.ride-card-badge {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 0.85rem;
}
.orange-badge { background: rgba(255, 106, 0, 0.15); color: #FF6A00; }
.blue-badge { background: rgba(0, 119, 255, 0.15); color: #388BFD; }
.emerald-badge { background: rgba(0, 245, 155, 0.15); color: #00F59B; }

.ride-card-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: #FFF;
  margin-bottom: 0.5rem;
}
.ride-card-desc {
  font-size: 0.9rem;
  color: #94A3B8;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}
.ride-meta-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.785rem;
  color: #CBD5E1;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 1.25rem;
}
.btn-card-orange {
  background: rgba(255, 106, 0, 0.15);
  border: 1px solid #FF6A00;
  color: #FF6A00;
  font-weight: 800;
  text-align: center;
  border-radius: var(--radius-sm);
  padding: 0.6rem;
}
.btn-card-orange:hover { background: #FF6A00; color: #000; }
.btn-card-blue {
  background: rgba(0, 119, 255, 0.15);
  border: 1px solid #0077FF;
  color: #388BFD;
  font-weight: 800;
  text-align: center;
  border-radius: var(--radius-sm);
  padding: 0.6rem;
}
.btn-card-blue:hover { background: #0077FF; color: #FFF; }
.btn-card-emerald {
  background: rgba(0, 245, 155, 0.15);
  border: 1px solid #00F59B;
  color: #00F59B;
  font-weight: 800;
  text-align: center;
  border-radius: var(--radius-sm);
  padding: 0.6rem;
}
.btn-card-emerald:hover { background: #00F59B; color: #000; }

/* ==========================================================================
   6. THE RIDER JOURNEY SECTION (GARAGE TO SUMMIT)
   ========================================================================== */
.journey-section {
  position: relative;
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: #080C16;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.journey-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
@media (max-width: 992px) {
  .journey-grid {
    grid-template-columns: 1fr;
  }
}
.journey-step-card {
  position: relative;
  background: rgba(14, 19, 30, 0.85);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2rem;
  backdrop-filter: blur(16px);
  overflow: hidden;
  transition: all var(--transition-medium);
  display: flex;
  flex-direction: column;
}
.journey-step-card:hover {
  transform: translateY(-8px);
}
.journey-step-card.cyan-journey { border: 1px solid rgba(0, 210, 255, 0.3); border-top: 4px solid #00D2FF; }
.journey-step-card.cyan-journey:hover { box-shadow: 0 20px 45px rgba(0, 210, 255, 0.2); }
.journey-step-card.orange-journey { border: 1px solid rgba(255, 106, 0, 0.3); border-top: 4px solid #FF6A00; }
.journey-step-card.orange-journey:hover { box-shadow: 0 20px 45px rgba(255, 106, 0, 0.2); }
.journey-step-card.emerald-journey { border: 1px solid rgba(0, 245, 155, 0.3); border-top: 4px solid #00F59B; }
.journey-step-card.emerald-journey:hover { box-shadow: 0 20px 45px rgba(0, 245, 155, 0.2); }

.step-top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.step-number {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 900;
  line-height: 1;
}
.cyan-num { color: #00D2FF; }
.orange-num { color: #FF6A00; }
.emerald-num { color: #00F59B; }

.step-phase {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #94A3B8;
  background: rgba(255, 255, 255, 0.06);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-pill);
}
.step-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #FFF;
  margin-bottom: 0.85rem;
  line-height: 1.3;
}
.step-body {
  font-size: 0.95rem;
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}
.step-screen-wrap {
  width: 100%;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #000;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
}
.step-app-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}
.journey-step-card:hover .step-app-img {
  transform: scale(1.05);
}

/* ==========================================================================
   7. THE APP IN YOUR POCKET
   ========================================================================== */
.app-showcase-section {
  position: relative;
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: linear-gradient(180deg, #080C16 0%, #0d121f 50%, #060910 100%);
  overflow: hidden;
}
.app-showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;
}
@media (max-width: 992px) {
  .app-showcase-grid {
    grid-template-columns: 1fr;
  }
}
.phone-mockup-wrapper {
  position: relative;
  max-width: 360px;
  margin: 0 auto;
}
.phone-glow-ambient {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 450px;
  background: radial-gradient(circle, rgba(255, 85, 0, 0.25) 0%, rgba(0, 210, 255, 0.15) 50%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
}
.phone-screen-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 36px;
  border: 8px solid #1E2536;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 85, 0, 0.2);
}
.floating-chip {
  position: absolute;
  background: rgba(12, 17, 26, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.6rem 1rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #FFF;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.chip-top { top: 12%; right: -25px; border-color: rgba(0, 210, 255, 0.4); }
.chip-bottom { bottom: 14%; left: -25px; border-color: rgba(0, 245, 155, 0.4); }

.feature-item-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  background: rgba(14, 19, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: 1.15rem 1.4rem;
  backdrop-filter: blur(10px);
  transition: all var(--transition-fast);
  cursor: pointer;
}
.feature-item:hover, .feature-item.active {
  background: rgba(22, 28, 44, 0.9);
  border-color: rgba(255, 106, 0, 0.4);
  transform: translateX(8px);
}
.feat-icon-box {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}
.coral-icon { background: rgba(255, 71, 87, 0.15); color: #FF4757; border: 1px solid rgba(255, 71, 87, 0.3); }

.feat-info h4 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #FFF;
  margin-bottom: 0.25rem;
}
.feat-info p {
  font-size: 0.9rem;
  color: #94A3B8;
  line-height: 1.45;
}

.store-download-row {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.store-badge-btn {
  display: inline-block;
  transition: transform var(--transition-fast);
}
.store-badge-btn:hover {
  transform: translateY(-3px);
}

/* ==========================================================================
   8. CINEMATIC HELMET SECTION
   ========================================================================== */
.helmet-quote-section {
  position: relative;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #000;
}
.helmet-bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.15) brightness(0.65) saturate(1.2);
}
.helmet-overlay-cinema {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(6, 8, 12, 0.3) 0%, rgba(6, 8, 12, 0.85) 80%, #000 100%);
  pointer-events: none;
}
.helmet-quote-container {
  position: relative;
  z-index: 5;
  max-width: 860px;
}
.quote-editorial-box {
  background: rgba(10, 14, 22, 0.8);
  border: 1px solid rgba(255, 184, 0, 0.35);
  border-radius: var(--radius-lg);
  padding: clamp(2rem, 4vw, 3.5rem);
  backdrop-filter: blur(20px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 184, 0, 0.15);
  text-align: center;
}
.quote-headline {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 900;
  text-transform: uppercase;
  color: #FFF;
  margin-bottom: 1.25rem;
  line-height: 1.1;
}
.quote-text {
  font-size: clamp(1.1rem, 1.5vw, 1.35rem);
  font-style: italic;
  color: #E2E8F0;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.quote-author-meta {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 1.25rem;
}
.seal-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 184, 0, 0.15);
  border: 1px solid #FFB800;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFB800;
  font-size: 1.2rem;
}
.quote-author-meta strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  color: #FFF;
}
.quote-author-meta span {
  font-family: var(--font-mono);
  font-size: 0.725rem;
  color: #94A3B8;
  letter-spacing: 0.08em;
}

/* ==========================================================================
   9. COMMUNITY SQUAD SECTION
   ========================================================================== */
.community-section {
  position: relative;
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: #06080F;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.community-riders-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
@media (max-width: 992px) {
  .community-riders-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .community-riders-grid {
    grid-template-columns: 1fr;
  }
}
.community-rider-card {
  background: rgba(14, 19, 30, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  backdrop-filter: blur(14px);
  transition: all var(--transition-fast);
}
.community-rider-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 106, 0, 0.4);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
}
.rider-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.rider-avatar-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #151A26;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 800;
}
.cyan-ring { border: 2px solid #00D2FF; color: #00D2FF; }
.orange-ring { border: 2px solid #FF6A00; color: #FF6A00; }
.purple-ring { border: 2px solid #A55EEA; color: #A55EEA; }
.emerald-ring { border: 2px solid #00F59B; color: #00F59B; }

.rider-role-badge {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}
.cyan-badge { background: rgba(0, 210, 255, 0.12); color: #00D2FF; }
.orange-badge { background: rgba(255, 106, 0, 0.12); color: #FF6A00; }
.purple-badge { background: rgba(165, 94, 234, 0.12); color: #A55EEA; }
.emerald-badge { background: rgba(0, 245, 155, 0.12); color: #00F59B; }

.rider-fullname {
  font-size: 1.25rem;
  font-weight: 800;
  color: #FFF;
  margin-bottom: 0.25rem;
}
.rider-machine {
  font-size: 0.9rem;
  color: #94A3B8;
  margin-bottom: 1rem;
}
.rider-stat-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #CBD5E1;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.btn-outline-colored {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 106, 0, 0.4);
  color: #FF6A00;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.85rem 1.85rem;
  border-radius: var(--radius-pill);
  transition: all var(--transition-fast);
}
.btn-outline-colored:hover {
  background: #FF6A00;
  color: #000;
  transform: translateY(-2px);
}

/* ==========================================================================
   10. FINAL HIGH-IMPACT CTA SECTION
   ========================================================================== */
.final-cta-section {
  position: relative;
  padding: clamp(6rem, 10vw, 9rem) 0;
  background: radial-gradient(ellipse at center, rgba(255, 85, 0, 0.2) 0%, rgba(0, 210, 255, 0.1) 45%, #05070B 90%);
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.final-cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 85, 0, 0.25) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
}
.final-cta-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5.5vw, 4.8rem);
  font-weight: 900;
  text-transform: uppercase;
  color: #FFF;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}
.final-cta-subtitle {
  font-size: clamp(1.1rem, 1.6vw, 1.35rem);
  color: #CBD5E1;
  max-width: 680px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.6;
}
.final-cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}
.btn-outline-white {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #FFF;
  font-family: var(--font-heading);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: var(--radius-pill);
  transition: all var(--transition-fast);
}
.btn-outline-white:hover {
  background: #FFF;
  color: #000;
}
"""

new_css_code = css_code[:target_idx] + new_homepage_css

with open('public/css/main.css', 'w', encoding='utf-8') as f:
    f.write(new_css_code)

print("Updated public/css/main.css successfully!")
