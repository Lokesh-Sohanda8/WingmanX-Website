import fs from 'fs';

const pagesPath = 'public/js/pages.js';
let content = fs.readFileSync(pagesPath, 'utf8');

const startMarker = "  // =========================================================================\r\n  // 5. OEM PARTNERS = STRENGTHEN RIDER RELATIONSHIPS BEYOND THE SALE";
const endMarker = "    </div>\r\n  `,\r\n\r\n  // =========================================================================\r\n  // 6. BLOGS = THE KNOWLEDGE / THE RIDER JOURNAL";

const startMarkerLF = "  // =========================================================================\n  // 5. OEM PARTNERS = STRENGTHEN RIDER RELATIONSHIPS BEYOND THE SALE";
const endMarkerLF = "    </div>\n  `,\n\n  // =========================================================================\n  // 6. BLOGS = THE KNOWLEDGE / THE RIDER JOURNAL";

const oemTemplate = `  // =========================================================================
  // 5. OEM PARTNERS = STRENGTHEN RIDER RELATIONSHIPS BEYOND THE SALE
  // Narrative Flow:
  // 1. Hero: Strengthen Rider Relationships Beyond the Sale
  // 2. From Ownership to Community (Cinematic Convoy Video)
  // 3. Solving Post Purchase Engagement Gaps (5 Challenges + Visuals)
  // 4. Flexible Programs Aligned With Brand Objectives (5 Models + Action Stack)
  // 5. Real Experiences, Real Insights (Authentic Rider Engagement)
  // 6. Built for Sustainable Community Growth (Panoramic Banner)
  // 7. Retained: Automotive Telematics Prototype (Interactive TFT Cockpit HUD)
  // 8. Retained: Three Phases of OEM Integration (SDK, Community, Telemetry)
  // 9. Retained: OEM Engineering Access Form (Request Integration Brief)
  // =========================================================================
  oem: () => \`
    <div class="oem-page-layout">

      <!-- 1. HERO SECTION: Strengthen Rider Relationships Beyond the Sale -->
      <section class="oem-hero-section">
        <div class="oem-hero-ambient-glow"></div>
        <div class="container oem-hero-container">
          <div class="oem-hero-grid">
            <div class="oem-hero-text">
              <span class="oem-badge-pill mb-3">
                <i class="fa-solid fa-industry"></i> MANUFACTURER PARTNERSHIPS
              </span>
              <h1 class="oem-hero-title">
                Strengthen Rider<br>
                <span class="gradient-text-orange">Relationships</span> Beyond<br>
                the Sale
              </h1>
              <p class="oem-hero-lead">
                WingManX helps OEMs build structured, long term engagement with riders through organised community experiences on real roads.
              </p>
              <p class="oem-hero-lead-sub">
                We enable manufacturers to move beyond the sale and build deeper, trust driven relationships with their rider communities.
              </p>
              <div class="oem-hero-actions">
                <a href="#oem-partner-form-section" class="btn btn-primary" data-internal-route>
                  <i class="fa-solid fa-paper-plane"></i> START OEM PARTNERSHIP
                </a>
                <a href="#oem-telematics-hub" class="btn btn-outline-white" data-internal-route>
                  <i class="fa-solid fa-microchip"></i> EXPLORE VEHICLE ARCHITECTURE
                </a>
              </div>
            </div>
            
            <div class="oem-hero-thumb-wrapper">
              <div class="oem-hero-halo-glow"></div>
              <div class="oem-hero-visual-card">
                <img src="/images/oem/oem_hero_rider.jpg" alt="Rider standing proudly beside motorcycle with orange spark aura" class="oem-hero-img" loading="eager">
                <div class="oem-hero-img-badge">
                  <i class="fa-solid fa-certificate text-orange"></i> OFFICIAL OEM PARTNER NETWORK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. FROM OWNERSHIP TO COMMUNITY -->
      <section class="oem-ownership-section" id="ownership-community">
        <div class="container text-center">
          <div class="oem-section-header-centered mx-auto">
            <span class="oem-badge-pill mb-3">
              <i class="fa-solid fa-users"></i> WHY OEMS WORK WITH WINGMANX
            </span>
            <h2 class="oem-section-title">FROM OWNERSHIP TO COMMUNITY</h2>
            <p class="oem-section-lead-bold">
              The rider journey continues long after purchase.
            </p>
            <p class="oem-section-lead-body">
              WingManX enables manufacturers to engage riders through organised community programs, structured ride initiatives, and learning driven experiences. Rather than relying on informal chat groups or fragmented city chapters, OEMs gain a structured ecosystem designed to support continuity and consistency.
            </p>
          </div>

          <!-- Cinematic Video Showcase Banner -->
          <div class="oem-panoramic-video-frame mt-5">
            <video autoplay loop muted playsinline poster="/images/oem/oem_riders_sunset.jpg" class="oem-panoramic-video">
              <source src="/videos/oem/wheels_asphalt.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <div class="oem-video-overlay-gradient"></div>
            <div class="oem-video-caption-bar">
              <span><i class="fa-solid fa-road text-orange"></i> STRUCTURED GROUP TOURING ON REAL ROADS</span>
              <span><i class="fa-solid fa-shield-check text-orange"></i> ZERO FRAGMENTATION</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. SOLVING POST PURCHASE ENGAGEMENT GAPS -->
      <section class="oem-gaps-section" id="engagement-gaps">
        <div class="container">
          <div class="oem-section-header-centered text-center mx-auto mb-5">
            <span class="oem-badge-pill mb-3">
              <i class="fa-solid fa-triangle-exclamation"></i> RIDER & COMMUNITY CHALLENGES
            </span>
            <h2 class="oem-section-title">SOLVING POST PURCHASE ENGAGEMENT GAPS</h2>
            <p class="oem-section-lead-body">
              Many OEM communities struggle with structure, safety, and sustained engagement.<br>
              <strong>WingManX helps address:</strong>
            </p>
          </div>

          <div class="oem-gaps-grid">
            <!-- Left Column: The 5 Core Challenges -->
            <div class="oem-challenges-list">
              <div class="oem-challenge-card">
                <div class="oem-chevron-indicator">»</div>
                <div class="oem-challenge-text">
                  <h4>Fragmented and unstructured rider groups</h4>
                  <p>Riders drift into unmoderated chat channels with inconsistent leadership and no safety accountability.</p>
                </div>
              </div>

              <div class="oem-challenge-card">
                <div class="oem-chevron-indicator">»</div>
                <div class="oem-challenge-text">
                  <h4>Inconsistent engagement beyond showroom events</h4>
                  <p>Post-delivery interaction drops sharply after initial showroom flags-off and delivery ceremonies.</p>
                </div>
              </div>

              <div class="oem-challenge-card">
                <div class="oem-chevron-indicator">»</div>
                <div class="oem-challenge-text">
                  <h4>Limited visibility into real riding behaviour</h4>
                  <p>Lack of verified data on how machines are actually toured, ridden, and maintained on highway routes.</p>
                </div>
              </div>

              <div class="oem-challenge-card">
                <div class="oem-chevron-indicator">»</div>
                <div class="oem-challenge-text">
                  <h4>Safety and skill gaps among growing rider bases</h4>
                  <p>New owners stepping into high-displacement machines often lack group discipline and technical trail skills.</p>
                </div>
              </div>

              <div class="oem-challenge-card">
                <div class="oem-chevron-indicator">»</div>
                <div class="oem-challenge-text">
                  <h4>Uneven brand experience across regions</h4>
                  <p>Disparate dealership-led rides create conflicting brand perceptions across different state chapters.</p>
                </div>
              </div>
            </div>

            <!-- Right Column: Visual Dual-Stack -->
            <div class="oem-dual-visual-stack">
              <div class="oem-visual-card top-visual">
                <img src="/images/oem/oem_riders_sunset.jpg" alt="Pack of riders riding together on highway towards sunset" class="oem-stack-img" loading="lazy">
                <div class="oem-visual-tag">
                  <i class="fa-solid fa-people-group text-orange"></i> COMMUNITY CONVOY
                </div>
              </div>
              <div class="oem-visual-card bottom-visual">
                <img src="/images/oem/oem_rider_rain_taillight.jpg" alt="Motorcycle tail light glowing on wet city tarmac" class="oem-stack-img" loading="lazy">
                <div class="oem-visual-tag">
                  <i class="fa-solid fa-shield-halved text-orange"></i> RIDER SAFETY & TELEMETRY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. FLEXIBLE PROGRAMS ALIGNED WITH BRAND OBJECTIVES -->
      <section class="oem-programs-section" id="flexible-programs">
        <div class="container">
          <div class="oem-programs-grid">
            <!-- Left Column: Collaboration Opportunities Content -->
            <div class="oem-programs-content">
              <span class="oem-badge-pill mb-3">
                <i class="fa-solid fa-cubes"></i> COLLABORATION OPPORTUNITIES
              </span>
              <h2 class="oem-programs-title">Flexible Programs Aligned With Brand Objectives</h2>
              <p class="oem-programs-lead">
                Partnerships are scalable and designed around rider value.
              </p>
              <h4 class="oem-models-subtitle">Collaboration models include:</h4>

              <div class="oem-models-list">
                <div class="oem-model-item">
                  <span class="oem-chevron-indicator">»</span>
                  <span class="oem-model-label">Owner community ride programs</span>
                </div>
                <div class="oem-model-item">
                  <span class="oem-chevron-indicator">»</span>
                  <span class="oem-model-label">Regional and destination ride initiatives</span>
                </div>
                <div class="oem-model-item">
                  <span class="oem-chevron-indicator">»</span>
                  <span class="oem-model-label">Training and advanced riding workshops</span>
                </div>
                <div class="oem-model-item">
                  <span class="oem-chevron-indicator">»</span>
                  <span class="oem-model-label">Demo experiences and new model showcases</span>
                </div>
                <div class="oem-model-item">
                  <span class="oem-chevron-indicator">»</span>
                  <span class="oem-model-label">Responsible riding and road safety campaigns</span>
                </div>
              </div>
            </div>

            <!-- Right Column: Layered Action Media Showcase -->
            <div class="oem-action-media-stack">
              <div class="oem-action-main-frame">
                <img src="/images/oem/oem_ktm_action.jpg" alt="Adventure motorcycle kicking up dirt on trail" class="oem-action-main-img" loading="lazy">
                <div class="oem-racing-checkered-strip"></div>
              </div>
              
              <!-- Speedometer Video Inset -->
              <div class="oem-speedometer-inset glass-card">
                <video autoplay loop muted playsinline class="oem-speedo-video">
                  <source src="/videos/oem/speedometer_telemetry.mp4" type="video/mp4">
                </video>
                <div class="speedo-badge">
                  <i class="fa-solid fa-gauge-high text-orange"></i> TELEMETRY
                </div>
              </div>

              <!-- Secondary Racing Dirt Inset -->
              <div class="oem-racing-inset">
                <img src="/images/oem/oem_racing_dirt.jpg" alt="Group of dual sport riders in dirt competition" class="oem-racing-img" loading="lazy">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. REAL EXPERIENCES, REAL INSIGHTS -->
      <section class="oem-insights-section" id="real-insights">
        <div class="container">
          <div class="oem-insights-grid">
            <!-- Left: Rider on Motorcycle in Woods with Orange Border & WINGMANX watermark -->
            <div class="oem-insights-visual-wrap">
              <div class="oem-watermark-vertical">WINGMANX</div>
              <div class="oem-insights-img-box">
                <img src="/images/oem/oem_real_experiences_rider.jpg" alt="Rider on classic motorcycle with glowing round headlight in nature" class="oem-insights-img" loading="lazy">
              </div>
            </div>

            <!-- Right: Content -->
            <div class="oem-insights-content">
              <span class="oem-badge-pill mb-3">
                <i class="fa-solid fa-shield-halved"></i> AUTHENTIC RIDER ENGAGEMENT
              </span>
              <h2 class="oem-section-title text-start mb-4">
                REAL EXPERIENCES,<br>
                <span class="gradient-text-orange">REAL INSIGHTS.</span>
              </h2>
              <p class="oem-insights-lead mb-3">
                Engage riders in the environments where motorcycles are truly used.
              </p>
              <p class="oem-insights-body mb-3">
                Through curated rides, training sessions, and experiential programs, OEMs gain behaviour driven insights rooted in actual riding participation.
              </p>
              <p class="oem-insights-body mb-0">
                This creates a direct and authentic link between manufacturers and riders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. BUILT FOR SUSTAINABLE COMMUNITY GROWTH -->
      <section class="oem-sustainable-banner" id="sustainable-growth">
        <div class="oem-sustainable-bg">
          <img src="/images/oem/oem_mountain_banner.jpg" alt="High mountain road panoramic highway landscape" class="oem-mountain-img" loading="lazy">
          <div class="oem-mountain-scrim"></div>
        </div>
        <div class="container oem-sustainable-inner text-center">
          <span class="oem-badge-pill mb-3 mx-auto">
            <i class="fa-solid fa-mountain"></i> A LONG TERM ECOSYSTEM
          </span>
          <h2 class="oem-sustainable-title">Built for Sustainable Community Growth</h2>
          <p class="oem-sustainable-desc mx-auto">
            WingManX is not a campaign platform. It is a structured rider ecosystem.<br>
            For manufacturers focused on responsible riding culture, consistent engagement, and meaningful rider relationships, WingManX offers a stable and scalable foundation.
          </p>
        </div>
      </section>

      <!-- 7. RETAINED TECHNICAL SECTION: AUTOMOTIVE TELEMATICS & TFT CLUSTER -->
      <section class="oem-hero-cockpit" id="oem-telematics-hub">
        <div class="container">
          <div class="telemetry-tag mb-3"><i class="fa-solid fa-microchip"></i> AUTOMOTIVE TELEMATICS • ARCHITECTURE PROTOTYPE</div>
          <h2 class="display-title">NEXT-GEN CONNECTED<br><span class="text-gradient-orange">MOTORCYCLE INTELLIGENCE.</span></h2>
          <p class="lead-editorial">
            Transform factory motorcycle instrument clusters into intelligent group navigation cockpits with WingmanX embedded vehicle software and cluster bridging protocols.
          </p>

          <!-- TFT Cockpit Simulated HUD (Explicitly Illustrative) -->
          <div class="oem-tft-cluster-mockup glass-card mt-5">
            <div class="cluster-sim-watermark">
              <i class="fa-solid fa-circle-info"></i> SIMULATED TFT CLUSTER TELEMETRY • ILLUSTRATIVE ARCHITECTURE BENCHMARK
            </div>
            <div class="cluster-top-bar">
              <span><i class="fa-solid fa-wifi"></i> CAN-BUS LINK ACTIVE</span>
              <span>GPS LOCK • 18°31'N 73°51'E</span>
              <span>WingmanX OS v4.2 PROTOTYPE</span>
            </div>
            <div class="cluster-main-display">
              <div class="cluster-gauge">
                <div class="gauge-dial">
                  <span class="speed-readout">108</span>
                  <span class="speed-unit">KM/H</span>
                </div>
                <div class="gauge-sub">LEAN: 38° R • GEAR: 5 • ABS: ACTIVE</div>
              </div>
              <div class="cluster-route-hud">
                <div class="route-tele-box">
                  <span class="r-lbl">NEXT WAYPOINT TARGET</span>
                  <span class="r-val">TAMHINI APEX • 4.2 KM</span>
                </div>
                <div class="route-tele-box">
                  <span class="r-lbl">CONVOY BEACON RADAR</span>
                  <span class="r-val text-orange">LEAD: +140M • SWEEP: -80M</span>
                </div>
              </div>
            </div>
            <div class="cluster-bus-stream">
              <span class="bus-lbl"><i class="fa-solid fa-terminal"></i> [ILLUSTRATIVE CAN-BUS PROTOCOL: SAE J1939 / ISO 11898]</span>
              <code class="bus-code">ID: 0x2F4 • DATA: [7F A1 0C 4B 00 1E 88 52] • THROTTLE: 64% • BRAKE_HYD: 18 BAR • STATOR_VOLTS: 14.2V</code>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. RETAINED: 3 Steps of a Connected Motorcycle System -->
      <section class="oem-systems-section">
        <div class="container">
          <div class="section-header">
            <div class="telemetry-tag"><i class="fa-solid fa-network-wired"></i> THREE ARCHITECTURE PHASES</div>
            <h2 class="section-heading">THREE PHASES OF OEM INTEGRATION.</h2>
            <p class="section-subtitle">A modular deployment path that protects vehicle warranties while delivering connected community features.</p>
          </div>

          <div class="oem-phases-grid">
            <!-- Phase 1 -->
            <div class="oem-phase-card glass-card">
              <div class="phase-indicator">PHASE 01 • FIRMWARE SDK</div>
              <div class="phase-icon"><i class="fa-solid fa-code"></i></div>
              <h3>WingmanX EMBEDDED SDK</h3>
              <p>Lightweight, automotive-grade C++ and Android Automotive SDKs optimized for low-latency Bluetooth LE and Wi-Fi bridging directly between motorcycle TFT screens and mobile processors.</p>
              <ul class="phase-specs">
                <li><i class="fa-solid fa-check text-orange"></i> Sub-16ms render response on embedded RTOS</li>
                <li><i class="fa-solid fa-check text-orange"></i> Native turn arrows & pack separation countdown</li>
                <li><i class="fa-solid fa-check text-orange"></i> Zero battery parasitic drain on bike stator</li>
              </ul>
            </div>

            <!-- Phase 2 -->
            <div class="oem-phase-card glass-card">
              <div class="phase-indicator">PHASE 02 • BRAND COMMUNITY</div>
              <div class="phase-icon"><i class="fa-solid fa-users-gear"></i></div>
              <h3>FACTORY OWNER RIDE CLUBS</h3>
              <p>Empower your dealership network with white-labeled, brand-customized portals to organize official factory rallies, track owner engagement, and certify loyal brand tourers.</p>
              <ul class="phase-specs">
                <li><i class="fa-solid fa-check text-orange"></i> Brand-exclusive verified owner badges</li>
                <li><i class="fa-solid fa-check text-orange"></i> National factory expedition leaderboards</li>
                <li><i class="fa-solid fa-check text-orange"></i> Dealership service check-in integrations</li>
              </ul>
            </div>

            <!-- Phase 3 -->
            <div class="oem-phase-card glass-card">
              <div class="phase-indicator">PHASE 03 • R&D TELEMETRY</div>
              <div class="phase-icon"><i class="fa-solid fa-chart-line"></i></div>
              <h3>ANONYMIZED R&D TELEMETRY</h3>
              <p>GDPR-compliant, anonymized aggregation of real-world riding patterns, throttle duty cycles, lean frequencies, and road surface shock telemetry to inform future motorcycle chassis development.</p>
              <ul class="phase-specs">
                <li><i class="fa-solid fa-check text-orange"></i> Real-world chassis stress analytics</li>
                <li><i class="fa-solid fa-check text-orange"></i> Braking heat and ABS actuation frequency cycles</li>
                <li><i class="fa-solid fa-check text-orange"></i> Terrain displacement preference modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. RETAINED: OEM Collaboration Form -->
      <section class="oem-form-section" id="oem-partner-form-section">
        <div class="container">
          <div class="oem-request-box glass-card">
            <div class="oem-form-header">
              <div class="telemetry-tag"><i class="fa-solid fa-industry"></i> ENGINEERING ACCESS</div>
              <h2 class="display-sm">REQUEST AN OEM SDK INTEGRATION BRIEF.</h2>
              <p class="text-muted">Connect directly with our automotive systems engineering team in Pune for cluster protocol documentation and hardware test benches.</p>
            </div>

            <form id="oem-partner-form" class="oem-partner-form mt-4">
              <div class="form-row-2">
                <div class="form-group mb-3">
                  <label class="form-label" for="oem-company">OEM / Manufacturer Name <span class="req">*</span></label>
                  <input type="text" id="oem-company" class="form-control" name="company" required placeholder="e.g. BMW Motorrad, Triumph, Hero">
                </div>
                <div class="form-group mb-3">
                  <label class="form-label" for="oem-department">Department / Division</label>
                  <input type="text" id="oem-department" class="form-control" name="department" placeholder="e.g. Connected Mobility / Electronics R&D">
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group mb-3">
                  <label class="form-label" for="oem-name">Lead Engineer / Representative <span class="req">*</span></label>
                  <input type="text" id="oem-name" class="form-control" name="name" required placeholder="e.g. Dr. Vikram Sen, Chief Systems Architect">
                </div>
                <div class="form-group mb-3">
                  <label class="form-label" for="oem-email">Corporate Email <span class="req">*</span></label>
                  <input type="email" id="oem-email" class="form-control" name="email" required placeholder="name@oem-domain.com">
                </div>
              </div>

              <div class="form-group mb-4">
                <label class="form-label" for="oem-message">Hardware Architecture & Collaboration Scope</label>
                <textarea class="form-control" id="oem-message" name="message" rows="4" placeholder="Briefly specify your cluster OS (Linux/RTOS/Android Automotive), CAN protocol, or factory rider club goals..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg w-100">
                <span>REQUEST AUTOMOTIVE BRIEF</span>
                <i class="fa-solid fa-microchip"></i>
              </button>
              <div class="form-status mt-3" id="oem-form-status"></div>
            </form>
          </div>
        </div>
      </section>
    </div>
  \``;

const isCRLF = content.includes('\r\n');
const sMarker = isCRLF ? startMarker : startMarkerLF;
const eMarker = isCRLF ? endMarker : endMarkerLF;

const startIdx = content.indexOf(sMarker);
const endIdx = content.indexOf(eMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('Markers not found! startIdx:', startIdx, 'endIdx:', endIdx);
  process.exit(1);
}

const before = content.slice(0, startIdx);
const after = content.slice(endIdx + (isCRLF ? "    </div>\r\n  `".length : "    </div>\n  `".length));

const newContent = before + (isCRLF ? oemTemplate.replace(/\n/g, '\r\n') : oemTemplate) + after;

fs.writeFileSync(pagesPath, newContent, 'utf8');
console.log('Successfully updated OEM grid layout in', pagesPath);
