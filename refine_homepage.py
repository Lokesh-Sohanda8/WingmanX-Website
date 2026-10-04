# 1. Update public/js/pages.js
with open('public/js/pages.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Replace manifesto image with DefaultRideImage.jpg
js_content = js_content.replace(
    '<img src="/images/Banner_1882026112427_12718.jpg" alt="Motorcyclists parked at dawn" class="manifesto-img">',
    '<img src="/images/DefaultRideImage.jpg" alt="Motorcyclists riding together in pack formation" class="manifesto-img">'
)

js_content = js_content.replace(
    '<span>DAWN BRIEFING // 05:30 AM &bull; WESTERN GHATS</span>',
    '<span>COMMUNITY PACK FORMATION &bull; WESTERN GHATS CIRCUIT</span>'
)

# Replace app mockup image in Section 07 with dark UI screenshot
js_content = js_content.replace(
    '<img src="/images/download_app.png" alt="WingManX App Interface" class="phone-screen-img active" id="phoneMockupMain">',
    '<img src="/images/screenshot_134015.png" alt="WingManX Live Navigation HUD" class="phone-screen-img active" id="phoneMockupMain">'
)

with open('public/js/pages.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Updated public/js/pages.js successfully!")

# 2. Update public/css/main.css
with open('public/css/main.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# Replace hero typography and sizing
old_hero_styles = """.hero-section {
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
}"""

new_hero_styles = """.hero-section {
  position: relative;
  min-height: 94vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 95px 0 45px 0;
  overflow: hidden;
  background: #040507;
}
.hero-letterbox {
  position: absolute;
  left: 0;
  width: 100%;
  height: 32px;
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
  filter: contrast(1.1) brightness(0.82) saturate(1.2);
}
.hero-cinema-grading {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(4, 5, 7, 0.15) 0%, rgba(4, 5, 7, 0.72) 75%, #040507 100%);
  pointer-events: none;
}
.hero-ambient-flare {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 25%, rgba(255, 85, 0, 0.18) 0%, transparent 55%),
              radial-gradient(circle at 20% 75%, rgba(0, 210, 255, 0.14) 0%, transparent 50%);
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
  padding: 0.35rem 1rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #E2E8F0;
  letter-spacing: 0.08em;
  margin-bottom: 1.25rem;
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
  font-size: clamp(2.1rem, 3.8vw, 3.6rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1.15rem;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.9);
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
  font-size: clamp(0.98rem, 1.25vw, 1.15rem);
  color: #CBD5E1;
  max-width: 660px;
  margin: 0 auto 1.75rem auto;
  line-height: 1.55;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.hero-actions-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;
  margin-bottom: 2.25rem;
  flex-wrap: wrap;
}"""

css_content = css_content.replace(old_hero_styles, new_hero_styles)

# Update manifesto card height and object-fit
old_manifesto = """.manifesto-media-card {
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
}"""

new_manifesto = """.manifesto-media-card {
  position: relative;
  height: 440px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(255, 184, 0, 0.35);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 140, 0, 0.2);
}
.manifesto-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}"""

css_content = css_content.replace(old_manifesto, new_manifesto)

# Update phone mockup wrapper
old_phone = """.phone-screen-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 36px;
  border: 8px solid #1E2536;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 85, 0, 0.2);
}"""

new_phone = """.phone-screen-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 28px;
  border: 4px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 85, 0, 0.25);
  background: #000;
}"""

css_content = css_content.replace(old_phone, new_phone)

with open('public/css/main.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("Updated public/css/main.css successfully!")
