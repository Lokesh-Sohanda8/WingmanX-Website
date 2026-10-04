import re

# Read current files
with open('public/js/pages.js', 'r', encoding='utf-8') as f:
    pages_code = f.read()

with open('public/css/main.css', 'r', encoding='utf-8') as f:
    css_code = f.read()

# Define the new home template
new_home_js = """  // =========================================================================
  // 1. HOME = THE RIDE (STRUCTURED & VIBRANT EDITORIAL EXPERIENCE)
  // =========================================================================
  home: () => `
    <!-- SECTION 01: CINEMATIC HERO -->
    <section class="hero-section" id="home">
      <!-- Top and Bottom Cinema Letterbox Bars -->
      <div class="hero-letterbox top"></div>
      <div class="hero-letterbox bottom"></div>

      <!-- Background Video with Dynamic Grading Overlay -->
      <div class="video-container">
        <video autoplay muted loop playsinline class="hero-video" id="wingmanHeroVideo">
          <source src="/videos/wingman_hero_video.mp4" type="video/mp4">
        </video>
        <div class="hero-cinema-grading"></div>
        <div class="hero-ambient-flare"></div>
      </div>

      <!-- Hero Main Content -->
      <div class="container hero-content">
        <!-- Live Command Center Telemetry Tag -->
        <div class="hero-telemetry-badge">
          <span class="beacon-pulse-dot"></span>
          <span class="badge-text">PUNE COMMAND CENTER &bull; LIVE SATELLITE BEACON SYNC</span>
        </div>

        <h1 class="hero-display-title">
          DON'T JUST<br>
          <span class="hero-highlight-orange">PLAN THE RIDE.</span><br>
          <span class="hero-highlight-white">LIVE IT.</span>
        </h1>

        <p class="hero-lead-text">
          India's dedicated connected motorcycling platform. Form packs in seconds, track every rider on a live radar HUD, and conquer ghats and highways with zero lost turns.
        </p>

        <div class="hero-actions-group">
          <a href="#app-showcase" class="btn btn-hero-primary" data-internal-route>
            <i class="fa-solid fa-bolt"></i> GET WINGMANX APP
          </a>
          <a href="#manifesto" class="btn btn-hero-outline" data-internal-route>
            <i class="fa-solid fa-road"></i> THE ROAD MANIFESTO
          </a>
        </div>

        <!-- Hero Bottom Telemetry Metrics Strip -->
        <div class="hero-telemetry-strip">
          <div class="tele-metric-card cyan-theme">
            <div class="metric-top">
              <i class="fa-solid fa-location-arrow"></i>
              <span class="metric-chip">GPS NETWORK</span>
            </div>
            <div class="metric-val">385,000+ KM</div>
            <div class="metric-desc">Mapped Indian Highways & Passes</div>
          </div>

          <div class="tele-metric-card emerald-theme">
            <div class="metric-top">
              <i class="fa-solid fa-users"></i>
              <span class="metric-chip">VERIFIED PACK</span>
            </div>
            <div class="metric-val">14,800+</div>
            <div class="metric-desc">Active Brotherhood Motorcyclists</div>
          </div>

          <div class="tele-metric-card amber-theme">
            <div class="metric-top">
              <i class="fa-solid fa-satellite-dish"></i>
              <span class="metric-chip">MESH RADAR</span>
            </div>
            <div class="metric-val">99.8%</div>
            <div class="metric-desc">Real-time Pack Beacon Uptime</div>
          </div>

          <div class="tele-metric-card coral-theme">
            <div class="metric-top">
              <i class="fa-solid fa-shield-halved"></i>
              <span class="metric-chip">OFFICIAL CLUBS</span>
            </div>
            <div class="metric-val">45+</div>
            <div class="metric-desc">Partner Touring & ADV Squads</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 02: THE MANIFESTO -->
    <section class="manifesto-section" id="manifesto">
      <div class="container">
        <div class="manifesto-grid">
          <!-- Left: Dawn Visual Card -->
          <div class="manifesto-visual-col">
            <div class="manifesto-media-card">
              <img src="/images/Banner_1882026112427_12718.jpg" alt="Motorcyclists parked at dawn" class="manifesto-img">
              <div class="media-card-overlay"></div>
              <div class="media-hud-tag">
                <span class="pulse-green-dot"></span>
                <span>DAWN BRIEFING // 05:30 AM &bull; WESTERN GHATS</span>
              </div>
              <div class="media-corner corner-tl"></div>
              <div class="media-corner corner-br"></div>
            </div>
          </div>

          <!-- Right: Narrative & Structured Solutions -->
          <div class="manifesto-narrative-col">
            <div class="tag-gold mb-3">
              <i class="fa-solid fa-sun"></i> THE MANIFESTO
            </div>
            <h2 class="section-title-large">
              THE ROAD IS BETTER<br>
              <span class="gradient-text-gold">TOGETHER.</span>
            </h2>
            <p class="section-description">
              Motorcycling was born for unfiltered freedom. Yet today, group riding is crippled by chaotic chat threads, lost sweep riders at highway forks, and fragmented GPS files. WingManX was engineered to fix this forever.
            </p>

            <!-- Contrast Comparison Grid -->
            <div class="manifesto-contrast-grid">
              <div class="contrast-card hazard-side">
                <div class="card-badge crimson-badge">
                  <i class="fa-solid fa-triangle-exclamation"></i> THE UNCOORDINATED RIDE
                </div>
                <h4>CHAOS & SEPARATION</h4>
                <p>15 disconnected WhatsApp groups, buried GPX files, and frantic panic when a rider drops behind out of cellular range.</p>
              </div>

              <div class="contrast-card wingman-side">
                <div class="card-badge emerald-badge">
                  <i class="fa-solid fa-circle-check"></i> THE WINGMANX STANDARD
                </div>
                <h4>SYNCHRONIZED SQUAD</h4>
                <p>One-tap pack formation, real-time proximity radar, automated regroup checkpoints, and peer-to-peer distress beacons.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 03: 3 CORE HAZARDS ELIMINATED -->
    <section class="hazards-section">
      <div class="container">
        <div class="text-center section-header-centered">
          <div class="tag-purple mb-3">
            <i class="fa-solid fa-shield-virus"></i> ROAD HAZARDS ELIMINATED
          </div>
          <h2 class="section-title-large">
            WHY RIDERS NEED A <span class="gradient-text-orange">BETTER WAY.</span>
          </h2>
          <p class="section-description centered">
            Every core capability in WingManX was forged to eliminate a dangerous, frustrating friction point on Indian highways and remote mountain passes.
          </p>
        </div>

        <div class="hazards-grid">
          <!-- Hazard 1: Isolation (Crimson) -->
          <div class="hazard-card crimson-card">
            <div class="hazard-card-glow"></div>
            <div class="hazard-top-bar">
              <div class="hazard-icon-box red-icon">
                <i class="fa-solid fa-heart-pulse"></i>
              </div>
              <span class="hazard-status-pill red-status">CRITICAL RISK</span>
            </div>
            <h3 class="hazard-title">ISOLATION ON REMOTE PASSES</h3>
            <p class="hazard-body">
              A mechanical failure, puncture, or low-side crash in remote ghats leaves a rider completely stranded without phone signal or pack awareness.
            </p>
            <div class="hazard-solution-tag red-sol">
              <span class="sol-lbl">WINGMANX FIX</span>
              <span class="sol-val">Decentralized crash detection & auto-SOS mesh beacons.</span>
            </div>
          </div>

          <!-- Hazard 2: Coordination (Amber) -->
          <div class="hazard-card amber-card">
            <div class="hazard-card-glow"></div>
            <div class="hazard-top-bar">
              <div class="hazard-icon-box amber-icon">
                <i class="fa-solid fa-comments"></i>
              </div>
              <span class="hazard-status-pill amber-status">TIME FRICTION</span>
            </div>
            <h3 class="hazard-title">ENDLESS CHAT DISCORD</h3>
            <p class="hazard-body">
              Missed highway exits, corrupt navigation files, and riders splitting into three different groups at every bypass because of uncoordinated messaging.
            </p>
            <div class="hazard-solution-tag amber-sol">
              <span class="sol-lbl">WINGMANX FIX</span>
              <span class="sol-val">Synchronized turn-by-turn route lobby & lead/sweep tracking.</span>
            </div>
          </div>

          <!-- Hazard 3: Disconnected Data (Cyan) -->
          <div class="hazard-card cyan-card">
            <div class="hazard-card-glow"></div>
            <div class="hazard-top-bar">
              <div class="hazard-icon-box cyan-icon">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <span class="hazard-status-pill cyan-status">DATA VOID</span>
            </div>
            <h3 class="hazard-title">DISCONNECTED MEMORIES</h3>
            <p class="hazard-body">
              Rich ride data fades away. Lean angles, speed logs, elevation profiles, and group photos end up fragmented across a dozen individual camera rolls.
            </p>
            <div class="hazard-solution-tag cyan-sol">
              <span class="sol-lbl">WINGMANX FIX</span>
              <span class="sol-val">Unified Digital Ride Passport with telemetry & squad albums.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 04: THE SIGNATURE MOTION TIRE ENGINE -->
    <section class="tire-section" id="tire-engine">
      <div class="container text-center section-header-centered">
        <div class="tag-orange mb-3">
          <i class="fa-solid fa-gauge-high"></i> SIGNATURE MOTION ENGINE
        </div>
        <h2 class="section-title-large">
          WHERE RUBBER MEETS <span class="gradient-text-orange">TARMAC.</span>
        </h2>
        <p class="section-description centered">
          Scroll down to spin the tire, lay down the road, and pass through the four core milestones of the WingManX digital ride lifecycle.
        </p>
      </div>

      <!-- 3-Column Interactive Cockpit Layout -->
      <div class="container tire-cockpit-layout">
        <!-- Left HUD: Live Telemetry Gauges -->
        <div class="tire-telemetry-hud">
          <div class="hud-panel-title">
            <i class="fa-solid fa-microchip"></i> LIVE TELEMETRY HUD
          </div>
          
          <div class="hud-gauge-card">
            <span class="gauge-lbl">VELOCITY</span>
            <span class="gauge-val cyan-val">185 <small>KM/H</small></span>
            <div class="gauge-bar"><div class="gauge-fill cyan-fill" style="width: 78%;"></div></div>
          </div>

          <div class="hud-gauge-card">
            <span class="gauge-lbl">CORNER LEAN ANGLE</span>
            <span class="gauge-val orange-val">48&deg; <small>LEFT</small></span>
            <div class="gauge-bar"><div class="gauge-fill orange-fill" style="width: 65%;"></div></div>
          </div>

          <div class="hud-gauge-card">
            <span class="gauge-lbl">ROAD SURFACE</span>
            <span class="gauge-val emerald-val">DRY MONSOON ASPHALT</span>
            <div class="gauge-bar"><div class="gauge-fill emerald-fill" style="width: 95%;"></div></div>
          </div>

          <div class="hud-gauge-card highlight-card">
            <span class="gauge-lbl">DISTANCE COVERED</span>
            <span class="gauge-val gold-val" id="road-distance-counter">0 KM</span>
            <span class="gauge-sub">SCROLL-LINKED DISTANCE</span>
          </div>
        </div>

        <!-- Center Stage: BMW Tire, Spark Canvas, & 3D Road Canvas -->
        <div class="tire-stage-center">
          <div class="tire-graphic-wrapper">
            <img src="/images/bmw_wheel_transparent.png" id="bmw-wheel" alt="BMW S1000 Wheel" class="bmw-wheel-img">
            <div class="wheel-shadow"></div>
          </div>
          <canvas id="spark-canvas" class="spark-canvas"></canvas>
          <canvas id="road-canvas" class="road-canvas"></canvas>
        </div>

        <!-- Right HUD: Interactive Journey Waypoints -->
        <div class="tire-waypoints-hud">
          <div class="hud-panel-title">
            <i class="fa-solid fa-flag-checkered"></i> RIDE WAYPOINTS
          </div>

          <div class="tire-waypoints">
            <div class="tire-waypoint wp-cyan" data-distance="80">
              <div class="wp-dot-ring"><div class="wp-dot"></div></div>
              <div class="wp-content">
                <span class="wp-step">STAGE 01</span>
                <h4>IGNITION & GPX SYNC</h4>
                <p>Route locked, tire check verified, pack briefed.</p>
              </div>
            </div>

            <div class="tire-waypoint wp-orange" data-distance="240">
              <div class="wp-dot-ring"><div class="wp-dot"></div></div>
              <div class="wp-content">
                <span class="wp-step">STAGE 02</span>
                <h4>PACK RADAR CONVERGENCE</h4>
                <p>Squad connects in 500m radius; lead/sweep live.</p>
              </div>
            </div>

            <div class="tire-waypoint wp-emerald" data-distance="480">
              <div class="wp-dot-ring"><div class="wp-dot"></div></div>
              <div class="wp-content">
                <span class="wp-step">STAGE 03</span>
                <h4>HIGHWAY FORMATION</h4>
                <p>Synchronized speeds, hazard alerts, gap monitoring.</p>
              </div>
            </div>

            <div class="tire-waypoint wp-purple" data-distance="720">
              <div class="wp-dot-ring"><div class="wp-dot"></div></div>
              <div class="wp-content">
                <span class="wp-step">STAGE 04</span>
                <h4>SUMMIT LOGBOOK</h4>
                <p>Ride passport sealed, elevation graphs, squad vault.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 05: FIND YOUR WINGMAN — PACK RADAR & DISCOVERY -->
    <section class="radar-section" id="pack-radar">
      <div class="container">
        <div class="text-center section-header-centered">
          <div class="tag-cyan mb-3">
            <i class="fa-solid fa-crosshairs"></i> PACK RADAR DISCOVERY
          </div>
          <h2 class="section-title-large">
            FIND THE RIDERS WHO <span class="gradient-text-cyan">RIDE LIKE YOU.</span>
          </h2>
          <p class="section-description centered">
            Match with motorcyclists based on bike archetype, preferred cruising velocity, and terrain style. Never ride alone unless you choose to.
          </p>
        </div>

        <!-- Radar 2-Col Showcase -->
        <div class="radar-showcase-grid">
          <!-- Left: Radar Display Screen -->
          <div class="radar-canvas-col">
            <div class="radar-stage">
              <canvas id="radar-canvas"></canvas>
              <!-- Center Hub Node -->
              <div class="radar-center-hub">
                <i class="fa-solid fa-motorcycle"></i>
                <span>YOU</span>
              </div>
              <!-- Radar sweep status badge -->
              <div class="radar-scan-status">
                <span class="pulse-cyan-dot"></span>
                <span>SCANNING 50 KM RADIUS &bull; PUNE HQ</span>
              </div>
            </div>
          </div>

          <!-- Right: Dynamic Compatibility Profile Card -->
          <div class="radar-card-col">
            <div id="radar-rider-card" class="radar-rider-card">
              <!-- Built interactively by WingmanRadarSystem -->
            </div>
          </div>
        </div>

        <!-- Curated Weekend Rides Grid -->
        <div class="curated-rides-wrap">
          <div class="curated-rides-header">
            <div>
              <span class="sub-tag">UPCOMING SQUAD RUNS</span>
              <h3 class="curated-title">CURATED WEEKEND EXPEDITIONS</h3>
            </div>
            <a href="/explore-rides" class="btn btn-outline-cyan btn-sm" data-internal-route>
              VIEW ALL RIDES <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div class="weekend-rides-grid">
            <!-- Ride 1 -->
            <div class="weekend-ride-card orange-edge">
              <div class="ride-card-badge orange-badge">WESTERN GHATS &bull; 140 KM</div>
              <h4 class="ride-card-name">Tamhini Ghat Monsoon Run</h4>
              <p class="ride-card-desc">Tight canyon sweepers, scenic waterfalls, and spirited pace with verified road captains.</p>
              <div class="ride-meta-bar">
                <span><i class="fa-solid fa-gauge-high"></i> 95-115 km/h</span>
                <span><i class="fa-solid fa-users"></i> 8/12 Joined</span>
              </div>
              <a href="/contact-us" class="btn btn-card-orange btn-sm" data-internal-route>JOIN PACK</a>
            </div>

            <!-- Ride 2 -->
            <div class="weekend-ride-card blue-edge">
              <div class="ride-card-badge blue-badge">HIGHWAY EXPRESS &bull; 95 KM</div>
              <h4 class="ride-card-name">Lonavala Dawn Circuit</h4>
              <p class="ride-card-desc">Smooth sunrise highway sweepers followed by mountain breakfast at tiger point.</p>
              <div class="ride-meta-bar">
                <span><i class="fa-solid fa-gauge-high"></i> 85-100 km/h</span>
                <span><i class="fa-solid fa-users"></i> 6/8 Joined</span>
              </div>
              <a href="/contact-us" class="btn btn-card-blue btn-sm" data-internal-route>JOIN PACK</a>
            </div>

            <!-- Ride 3 -->
            <div class="weekend-ride-card emerald-edge">
              <div class="ride-card-badge emerald-badge">DIRT & GRAVEL &bull; 110 KM</div>
              <h4 class="ride-card-name">Panshet Trail Exploration</h4>
              <p class="ride-card-desc">ADV trail riding, water crossings, and technical forest routes around the reservoir.</p>
              <div class="ride-meta-bar">
                <span><i class="fa-solid fa-gauge-high"></i> 60-80 km/h</span>
                <span><i class="fa-solid fa-users"></i> 5/10 Joined</span>
              </div>
              <a href="/contact-us" class="btn btn-card-emerald btn-sm" data-internal-route>JOIN PACK</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 06: THE RIDER JOURNEY (FROM GARAGE TO SUMMIT) -->
    <section class="journey-section">
      <div class="container">
        <div class="text-center section-header-centered">
          <div class="tag-emerald mb-3">
            <i class="fa-solid fa-route"></i> THE RIDER LIFECYCLE
          </div>
          <h2 class="section-title-large">
            THE JOURNEY: FROM <span class="gradient-text-emerald">GARAGE TO SUMMIT.</span>
          </h2>
          <p class="section-description centered">
            A cohesive three-stage ecosystem accompanying you through preparation, high-speed execution, and post-ride memories.
          </p>
        </div>

        <div class="journey-grid">
          <!-- Step 1: Pre-Ride (Cyan Glow) -->
          <div class="journey-step-card cyan-journey">
            <div class="step-card-glow"></div>
            <div class="step-top-header">
              <span class="step-number cyan-num">01</span>
              <span class="step-phase">PRE-RIDE &bull; PLAN</span>
            </div>
            <h3 class="step-title">ROUTE & PACK PREPARATION</h3>
            <p class="step-body">
              Sync GPX waypoints, check tire pressure checkpoints, review weather radar, and broadcast ride invites to your squad.
            </p>
            <div class="step-screen-wrap">
              <img src="/images/screenshot_130343.png" alt="App Plan View" class="step-app-img">
            </div>
          </div>

          <!-- Step 2: On-Ride (Orange Glow) -->
          <div class="journey-step-card orange-journey">
            <div class="step-card-glow"></div>
            <div class="step-top-header">
              <span class="step-number orange-num">02</span>
              <span class="step-phase">ON-RIDE &bull; LIVE</span>
            </div>
            <h3 class="step-title">REAL-TIME PACK TELEMETRY</h3>
            <p class="step-body">
              Live heads-up formation tracking. Lead and sweep proximity alerts, voice-free turn alerts, and emergency crash beacons.
            </p>
            <div class="step-screen-wrap">
              <img src="/images/screenshot_134015.png" alt="App Ride View" class="step-app-img">
            </div>
          </div>

          <!-- Step 3: Post-Ride (Emerald Glow) -->
          <div class="journey-step-card emerald-journey">
            <div class="step-card-glow"></div>
            <div class="step-top-header">
              <span class="step-number emerald-num">03</span>
              <span class="step-phase">POST-RIDE &bull; RELIVE</span>
            </div>
            <h3 class="step-title">SQUAD LOGBOOK & STATS</h3>
            <p class="step-body">
              Lean angle telemetry, elevation profiles, top speed analysis, shared squad photo albums, and digital tour trophies.
            </p>
            <div class="step-screen-wrap">
              <img src="/images/screenshot_latest.png" alt="App Review View" class="step-app-img">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 07: THE APP IN YOUR POCKET -->
    <section class="app-showcase-section" id="app-showcase">
      <div class="container">
        <div class="app-showcase-grid">
          <!-- Left: Phone Device Showcase -->
          <div class="app-phones-col">
            <div class="phone-mockup-wrapper">
              <div class="phone-glow-ambient"></div>
              <img src="/images/download_app.png" alt="WingManX App Interface" class="phone-screen-img active" id="phoneMockupMain">
              <!-- Floating Telemetry Chips -->
              <div class="floating-chip chip-top">
                <span class="pulse-cyan-dot"></span>
                <span>PACK RADAR: 8 ONLINE</span>
              </div>
              <div class="floating-chip chip-bottom">
                <i class="fa-solid fa-shield-halved text-emerald"></i>
                <span>SOS SATELLITE MESH READY</span>
              </div>
            </div>
          </div>

          <!-- Right: 4 Interactive Feature Highlights -->
          <div class="app-features-col">
            <div class="tag-orange mb-3">
              <i class="fa-solid fa-mobile-screen"></i> THE APP IN YOUR POCKET
            </div>
            <h2 class="section-title-large">
              BUILT FOR GLOVED HANDS & <span class="gradient-text-orange">OPEN ROADS.</span>
            </h2>
            <p class="section-description">
              Engineered with high-contrast day-night interfaces, massive tap targets for motorcycle gloves, and battery-efficient mesh radios.
            </p>

            <div class="feature-item-list">
              <div class="feature-item active" data-mockup="1">
                <div class="feat-icon-box cyan-icon">
                  <i class="fa-solid fa-satellite-dish"></i>
                </div>
                <div class="feat-info">
                  <h4>REAL-TIME PACK PROXIMITY</h4>
                  <p>See every rider's position, gap distance, and velocity on an intuitive heads-up display.</p>
                </div>
              </div>

              <div class="feature-item" data-mockup="2">
                <div class="feat-icon-box coral-icon">
                  <i class="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div class="feat-info">
                  <h4>DECENTRALIZED SOS DETECTION</h4>
                  <p>Gyroscopic impact algorithms trigger immediate emergency distress coordinates to the pack.</p>
                </div>
              </div>

              <div class="feature-item" data-mockup="3">
                <div class="feat-icon-box amber-icon">
                  <i class="fa-solid fa-headphones"></i>
                </div>
                <div class="feat-info">
                  <h4>HELMET AUDIO INTERCOM BRIDGE</h4>
                  <p>Non-intrusive voice cues for regroup waypoints, road hazards, and turn-by-turn directions.</p>
                </div>
              </div>

              <div class="feature-item" data-mockup="4">
                <div class="feat-icon-box emerald-icon">
                  <i class="fa-solid fa-mountain"></i>
                </div>
                <div class="feat-info">
                  <h4>OFFLINE TOPOGRAPHIC MAPS</h4>
                  <p>Full offline GPX navigation through high-altitude passes where cellular data vanishes.</p>
                </div>
              </div>
            </div>

            <!-- App Store Download Badges -->
            <div class="store-download-row">
              <a href="https://play.google.com/store/apps" target="_blank" rel="noopener" class="store-badge-btn">
                <img src="/images/google-play.svg" alt="Get it on Google Play" height="38">
              </a>
              <a href="https://apps.apple.com/" target="_blank" rel="noopener" class="store-badge-btn">
                <img src="/images/app-store.jpg" alt="Download on App Store" height="38">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 08: CINEMATIC HELMET / RIDER CREED -->
    <section class="helmet-quote-section">
      <video autoplay muted loop playsinline class="helmet-bg-video">
        <source src="/videos/erasio_Helmet_clip_1080p_20260930125932.mp4" type="video/mp4">
      </video>
      <div class="helmet-overlay-cinema"></div>

      <div class="container helmet-quote-container">
        <div class="quote-editorial-box">
          <div class="tag-gold mb-3">
            <i class="fa-solid fa-quote-left"></i> THE RIDER'S CREED
          </div>
          <h2 class="quote-headline">
            THE JOURNEY STARTS BEFORE<br>
            <span class="gradient-text-gold">THE ENGINE DOES.</span>
          </h2>
          <p class="quote-text">
            “The road doesn't care what badge is stamped on your tank. It cares about your discipline, your respect for the curve, and the pack that watches your six.”
          </p>
          <div class="quote-author-meta">
            <div class="seal-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <strong>WINGMANX MOBILITY LABS</strong>
              <span>PUNE HQ &bull; WESTERN GHATS CHAPTER</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 09: THE COMMUNITY SQUAD -->
    <section class="community-section">
      <div class="container">
        <div class="text-center section-header-centered">
          <div class="tag-orange mb-3">
            <i class="fa-solid fa-users"></i> VERIFIED COMMUNITY SQUAD
          </div>
          <h2 class="section-title-large">
            THE PEOPLE WHO <span class="gradient-text-orange">MAKE THE RIDE.</span>
          </h2>
          <p class="section-description centered">
            From veteran road captains leading 50-bike convoys to solo high-altitude explorers, meet the riders shaping the WingManX movement.
          </p>
        </div>

        <div class="community-riders-grid">
          <!-- Rider 1 -->
          <div class="community-rider-card">
            <div class="rider-card-top">
              <div class="rider-avatar-circle cyan-ring">
                <span>AM</span>
              </div>
              <span class="rider-role-badge cyan-badge">ROAD CAPTAIN</span>
            </div>
            <h4 class="rider-fullname">Aryan Mehta</h4>
            <div class="rider-machine">BMW R 1250 GS Trophy</div>
            <div class="rider-stat-line">
              <span><i class="fa-solid fa-road"></i> 42,000 KM</span>
              <span><i class="fa-solid fa-compass"></i> Western Ghats</span>
            </div>
          </div>

          <!-- Rider 2 -->
          <div class="community-rider-card">
            <div class="rider-card-top">
              <div class="rider-avatar-circle orange-ring">
                <span>PS</span>
              </div>
              <span class="rider-role-badge orange-badge">GHAT SPECIALIST</span>
            </div>
            <h4 class="rider-fullname">Pooja Sharma</h4>
            <div class="rider-machine">Ducati Scrambler 800</div>
            <div class="rider-stat-line">
              <span><i class="fa-solid fa-road"></i> 28,500 KM</span>
              <span><i class="fa-solid fa-compass"></i> Tamhini & Goa</span>
            </div>
          </div>

          <!-- Rider 3 -->
          <div class="community-rider-card">
            <div class="rider-card-top">
              <div class="rider-avatar-circle purple-ring">
                <span>VR</span>
              </div>
              <span class="rider-role-badge purple-badge">EXPEDITION LEAD</span>
            </div>
            <h4 class="rider-fullname">Vikram Rajput</h4>
            <div class="rider-machine">Triumph Tiger 900 Rally</div>
            <div class="rider-stat-line">
              <span><i class="fa-solid fa-road"></i> 36,800 KM</span>
              <span><i class="fa-solid fa-compass"></i> Ladakh & Spiti</span>
            </div>
          </div>

          <!-- Rider 4 -->
          <div class="community-rider-card">
            <div class="rider-card-top">
              <div class="rider-avatar-circle emerald-ring">
                <span>AK</span>
              </div>
              <span class="rider-role-badge emerald-badge">TRAIL SCOUT</span>
            </div>
            <h4 class="rider-fullname">Ananya Kulkarni</h4>
            <div class="rider-machine">RE Himalayan 450</div>
            <div class="rider-stat-line">
              <span><i class="fa-solid fa-road"></i> 31,200 KM</span>
              <span><i class="fa-solid fa-compass"></i> Konkan Coastal</span>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <a href="/community-contributors" class="btn btn-outline-colored" data-internal-route>
            MEET ALL 11 COMMUNITY CONTRIBUTORS <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 10: FINAL HIGH-IMPACT CTA -->
    <section class="final-cta-section">
      <div class="final-cta-glow"></div>
      <div class="container text-center">
        <div class="tag-gold mb-3">
          <i class="fa-solid fa-flag-checkered"></i> JOIN THE PACK
        </div>
        <h2 class="final-cta-title">
          READY TO LIVE THE <span class="gradient-text-orange">RIDE?</span>
        </h2>
        <p class="final-cta-subtitle">
          Download the WingManX mobile companion today. Discover unmapped ghat trails, connect with verified riders, and ride with complete confidence.
        </p>
        <div class="final-cta-buttons">
          <a href="https://play.google.com/store/apps" target="_blank" rel="noopener" class="btn btn-primary btn-lg">
            <i class="fa-brands fa-google-play"></i> GOOGLE PLAY
          </a>
          <a href="https://apps.apple.com/" target="_blank" rel="noopener" class="btn btn-outline-white btn-lg">
            <i class="fa-brands fa-apple"></i> APP STORE
          </a>
        </div>
      </div>
    </section>
  `,
"""

# Replace the home section in pages.js
start_marker = "  // ========================================================================="
end_marker = "  about: () => `"

start_pos = pages_code.find(start_marker)
end_pos = pages_code.find(end_marker)

if start_pos == -1 or end_pos == -1:
    print(f"Error: Markers not found! start_pos={start_pos}, end_pos={end_pos}")
    exit(1)

new_pages_code = pages_code[:start_pos] + new_home_js + pages_code[end_pos:]

with open('public/js/pages.js', 'w', encoding='utf-8') as f:
    f.write(new_pages_code)

print("Updated public/js/pages.js successfully!")
