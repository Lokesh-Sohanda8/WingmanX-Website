/**
 * WingmanX — REFINED DISTINCT EDITORIAL PAGE TEMPLATES
 * "DON'T JUST PLAN THE RIDE. LIVE IT."
 * 
 * Each page has a distinct visual composition reflecting its specific purpose in the rider journey:
 * - HOME = THE RIDE (Cinematic hero, BMW S1000 tire engine, road ribbon, radar, app, helmet highlight)
 * - ABOUT = THE WHY (Founding story, road obstacles/friction points, milestone waypoints)
 * - ECOSYSTEM = THE NETWORK (Interactive canvas network with THE RIDER at the center, 4 orbiting pillars)
 * - BRANDS = THE CONNECTION (Milestone gear rewards, checkpoint beacons, partnership flight-plan form)
 * - OEM = THE TECHNOLOGY (Cockpit TFT cluster aesthetic, CAN-bus telemetry, 3 system phases)
 * - BLOG = THE KNOWLEDGE (The Rider Journal: featured magazine cover story, split secondary, expedition)
 * - TESTIMONIALS = THE PEOPLE (Large editorial panels where the quote dominates the visual hierarchy)
 * - GALLERY = THE MEMORIES (Editorial masonry respecting aspect ratios, filter tabs, lightbox)
 * - AWARDS = THE MILESTONES (Chronological highway timeline with year milestones)
 * - CONTRIBUTORS = THE COMMUNITY (The people who built the road: 11 verified riders with connection network)
 * - CAREERS = THE TEAM (Engineers Who Ride, Riders Who Build: technical briefing cards)
 * - CONTACT = THE NEXT RIDE (Command center: contact details, transmission form, route waypoints HUD)
 */

const Pages = {
  // =========================================================================
  // 1. HOME = THE RIDE (STRUCTURED & VIBRANT EDITORIAL EXPERIENCE)
  // =========================================================================
  home: () => `
    <!-- SECTION 01: HERO WITH AUTHENTIC RIDING FOOTAGE -->
    <section class="hero-section" id="home">
      <!-- Background Video with Clean Fallback Poster -->
      <div class="video-container">
        <video autoplay muted loop playsinline poster="/images/wingman_hero_poster.jpg" class="hero-video" id="wingmanHeroVideo">
          <source src="/videos/wingman_hero_video_web.mp4" type="video/mp4">
          <source src="/videos/wingman_hero_video.mp4" type="video/mp4">
        </video>
        <!-- Soft localized scrim: preserves bright riding footage across viewport -->
        <div class="hero-scrim-overlay"></div>
      </div>

      <!-- Controlled Hero Content (compact viewport footprint) -->
      <div class="container hero-container">
        <div class="hero-text-block">
          <h1 class="hero-display-title">
            DON'T JUST PLAN THE RIDE.<br>
            <span class="hero-highlight-orange">LIVE IT.</span>
          </h1>

          <p class="hero-lead-text">
            India's dedicated connected motorcycling platform. Form packs in seconds, track every rider on a live radar HUD, and conquer ghats and highways with zero lost turns.
          </p>

          <div class="hero-actions-group">
            <a href="/#app-download" class="btn btn-hero-primary" data-internal-route>
              <i class="fa-solid fa-bolt"></i> GET WingmanX APP
            </a>
            <a href="#manifesto" class="btn btn-hero-outline" data-internal-route>
              <i class="fa-solid fa-road"></i> THE ROAD MANIFESTO
            </a>
          </div>
        </div>
      </div>

      <!-- Natural Bottom Transition into Manifesto -->
      <div class="hero-bottom-transition"></div>
    </section>

    <!-- SECTION 02: THE MANIFESTO -->
    <section class="manifesto-section" id="manifesto">
      <div class="container">
        <div class="manifesto-grid">
          <!-- Left: Genuine Community Pack Visual -->
          <div class="manifesto-visual-col">
            <div class="manifesto-media-card">
              <img src="/images/DefaultRideImage.jpg" alt="Pack of motorcyclists riding together in formation on open highway" class="manifesto-img">
              <div class="manifesto-media-overlay"></div>
              <div class="manifesto-caption-badge">
                <i class="fa-solid fa-users"></i>
                <span>COMMUNITY IN FORMATION &bull; THE SHARED ROAD EXPERIENCE</span>
              </div>
            </div>
          </div>

          <!-- Right: Narrative & Editorial Comparison -->
          <div class="manifesto-narrative-col">
            <div class="tag-gold mb-3">
              <i class="fa-solid fa-sun"></i> THE MANIFESTO
            </div>
            <h2 class="section-title-large">
              THE ROAD IS BETTER<br>
              <span class="gradient-text-gold">TOGETHER.</span>
            </h2>
            <p class="section-description">
              Motorcycling was born for unfiltered freedom. Yet solitary rides only tell half the story. The truest moments on two wheels happen when you ride with a pack — sharing the dawn chill, leaning through mountain curves in sync, and pulling into the destination together.
            </p>
            <p class="manifesto-subtext">
              WingmanX connects riders into unified squads. Whether you lead the formation or sweep the tail, every rider stays aware, protected, and connected across every kilometer.
            </p>

            <!-- Contrast Comparison Grid -->
            <div class="manifesto-contrast-grid">
              <div class="contrast-card hazard-side">
                <div class="card-badge crimson-badge">
                  <i class="fa-solid fa-triangle-exclamation"></i> THE UNCOORDINATED RIDE
                </div>
                <h4>CHAOS & SEPARATION</h4>
                <p>Fragmented messaging threads, buried GPX files, roadside stops to check phones with gloves on, and panic when a rider drops out of sight.</p>
              </div>

              <div class="contrast-card wingman-side">
                <div class="card-badge emerald-badge">
                  <i class="fa-solid fa-circle-check"></i> THE WingmanX STANDARD
                </div>
                <h4>SYNCHRONIZED SQUAD</h4>
                <p>One-tap pack formation, live proximity radar HUD, automated regroup checkpoints, and peer-to-peer distress beacons that keep everyone united.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 03: REAL ROAD FRICTION & RESOLUTIONS -->
    <section class="hazards-section" id="road-friction">
      <div class="container">
        <div class="text-center section-header-centered">
          <div class="tag-orange mb-3">
            <i class="fa-solid fa-route"></i> REAL ROAD FRICTION
          </div>
          <h2 class="section-title-large">
            WHERE GROUP RIDES BREAK DOWN.<br>
            <span class="gradient-text-orange">AND HOW WE SOLVE IT.</span>
          </h2>
          <p class="section-description centered">
            Generic chat and car navigation apps were never built for motorcyclists traveling in packs. WingmanX was engineered specifically to solve the three moments where group rides fail.
          </p>
        </div>

        <!-- 3-Stage Rider Coordination Sequence -->
        <div class="friction-progression">
          <!-- Stage 01: Pre-Ride Route Sync -->
          <div class="friction-stage-card">
            <div class="friction-stage-header">
              <span class="stage-number">01</span>
              <div class="stage-meta">
                <span class="stage-phase">PRE-RIDE SETUP</span>
                <h3 class="stage-title">FRAGMENTED ROUTE FILES</h3>
              </div>
            </div>
            
            <div class="friction-stage-body">
              <div class="friction-problem-block">
                <div class="block-label tag-problem">
                  <i class="fa-solid fa-triangle-exclamation"></i> THE ROAD REALITY
                </div>
                <p class="block-text">
                  Every rider uses different navigation apps, incompatible GPX files, or outdated maps shared across messy chat threads.
                </p>
              </div>

              <div class="friction-consequence-block">
                <div class="block-label tag-consequence">
                  <i class="fa-solid fa-arrow-right-arrow-left"></i> THE CONSEQUENCE
                </div>
                <p class="block-text">
                  Delayed morning rollouts, conflicting waypoints, and riders splitting onto different highway bypasses in the first 20 kilometers.
                </p>
              </div>
            </div>

            <div class="friction-solution-block">
              <div class="solution-header">
                <i class="fa-solid fa-bolt"></i>
                <span>WingmanX RESOLUTION</span>
              </div>
              <p class="solution-text">
                <strong>Synchronized Route Lobby:</strong> One-tap pack join with identical waypoints, automated regroup stops, and uniform turn-by-turn guidance for every bike.
              </p>
            </div>
          </div>

          <!-- Stage 02: On-Road Separation -->
          <div class="friction-stage-card">
            <div class="friction-stage-header">
              <span class="stage-number">02</span>
              <div class="stage-meta">
                <span class="stage-phase">ON THE HIGHWAY & GHATS</span>
                <h3 class="stage-title">BLIND SEPARATION AT FORKS</h3>
              </div>
            </div>

            <div class="friction-stage-body">
              <div class="friction-problem-block">
                <div class="block-label tag-problem">
                  <i class="fa-solid fa-triangle-exclamation"></i> THE ROAD REALITY
                </div>
                <p class="block-text">
                  Riders travel at different comfortable paces. On winding mountain roads or heavy traffic corridors, visual contact is constantly lost.
                </p>
              </div>

              <div class="friction-consequence-block">
                <div class="block-label tag-consequence">
                  <i class="fa-solid fa-arrow-right-arrow-left"></i> THE CONSEQUENCE
                </div>
                <p class="block-text">
                  The sweep misses an unmarked fork while the lead continues miles ahead. Riders pull over on dangerous highway shoulders, take off gloves, and try to call.
                </p>
              </div>
            </div>

            <div class="friction-solution-block">
              <div class="solution-header">
                <i class="fa-solid fa-radar"></i>
                <span>WingmanX RESOLUTION</span>
              </div>
              <p class="solution-text">
                <strong>Live Proximity Radar HUD:</strong> Constant visual awareness of lead, mid-pack, and sweep distances. Instant vibration and audio cues if any rider drops out of pack range.
              </p>
            </div>
          </div>

          <!-- Stage 03: Remote Emergencies -->
          <div class="friction-stage-card">
            <div class="friction-stage-header">
              <span class="stage-number">03</span>
              <div class="stage-meta">
                <span class="stage-phase">REMOTE MOUNTAIN PASSES</span>
                <h3 class="stage-title">SILENT BREAKDOWNS & CRASHES</h3>
              </div>
            </div>

            <div class="friction-stage-body">
              <div class="friction-problem-block">
                <div class="block-label tag-problem">
                  <i class="fa-solid fa-triangle-exclamation"></i> THE ROAD REALITY
                </div>
                <p class="block-text">
                  A puncture, mechanical breakdown, or low-side slide on a blind curve in remote ghats with zero cellular coverage.
                </p>
              </div>

              <div class="friction-consequence-block">
                <div class="block-label tag-consequence">
                  <i class="fa-solid fa-arrow-right-arrow-left"></i> THE CONSEQUENCE
                </div>
                <p class="block-text">
                  The pack rides away unaware. The stranded rider is left alone on a remote route without communication, delaying roadside recovery or medical aid for hours.
                </p>
              </div>
            </div>

            <div class="friction-solution-block">
              <div class="solution-header">
                <i class="fa-solid fa-shield-halved"></i>
                <span>WingmanX RESOLUTION</span>
              </div>
              <p class="solution-text">
                <strong>Decentralized Impact Detection & SOS:</strong> Instant peer-to-peer distress broadcast alerting every pack member with GPS coordinates, triggering prompt turnaround and help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 04: THE SIGNATURE MOTION TIRE & ROAD ENGINE -->
    <section class="tire-section" id="tire-engine">
      <div class="container text-center section-header-centered">
        <div class="tag-orange mb-3">
          <i class="fa-solid fa-road-circle-check"></i> THE MOTION ENGINE
        </div>
        <h2 class="section-title-large">
          WHERE RUBBER MEETS <span class="gradient-text-orange">TARMAC.</span>
        </h2>
        <p class="section-description centered">
          Every ride begins with a single wheel touching asphalt. Scroll to roll the throttle, lay down the road, and watch a solitary ride evolve into the four stages of the connected WingmanX journey.
        </p>
      </div>

      <!-- 3-Column Interactive Cockpit Layout -->
      <div class="container tire-cockpit-layout">
        <!-- Left HUD: Interactive Ride Dynamics Simulator -->
        <div class="tire-telemetry-hud">
          <div class="hud-panel-title">
            <i class="fa-solid fa-microchip"></i> RIDE DYNAMICS
            <span class="sim-pill-badge">SIMULATION</span>
          </div>
          
          <div class="hud-gauge-card">
            <span class="gauge-lbl">VIRTUAL CRUISE SPEED</span>
            <span class="gauge-val cyan-val" id="sim-speed-val">0 <small>KM/H</small></span>
            <div class="gauge-bar"><div class="gauge-fill cyan-fill" id="sim-speed-bar" style="width: 0%;"></div></div>
            <span class="gauge-sub">DRIVEN BY SCROLL VELOCITY</span>
          </div>

          <div class="hud-gauge-card">
            <span class="gauge-lbl">DYNAMIC LEAN ANGLE</span>
            <span class="gauge-val orange-val" id="sim-lean-val">0&deg; <small>CENTER</small></span>
            <div class="gauge-bar"><div class="gauge-fill orange-fill" id="sim-lean-bar" style="width: 50%;"></div></div>
            <span class="gauge-sub">SIMULATED CHASSIS ROLL</span>
          </div>

          <div class="hud-gauge-card">
            <span class="gauge-lbl">PACK FORMATION LINK</span>
            <span class="gauge-val emerald-val" id="sim-pack-val">INITIALIZING</span>
            <div class="gauge-bar"><div class="gauge-fill emerald-fill" id="sim-pack-bar" style="width: 15%;"></div></div>
            <span class="gauge-sub">MESH PROXIMITY STATUS</span>
          </div>

          <div class="hud-gauge-card highlight-card">
            <span class="gauge-lbl">ROUTE PROGRESS</span>
            <span class="gauge-val gold-val" id="road-distance-counter">0 KM</span>
            <span class="gauge-sub">JOURNEY REEL TO RADAR</span>
          </div>
        </div>

        <!-- Center Stage: BMW S1000 Wheel, Sparks & Perspective Road -->
        <div class="tire-stage-center">
          <div class="tire-graphic-wrapper">
            <img src="/images/bmw_wheel_transparent.png" id="bmw-wheel" alt="BMW S1000 Carbon Wheel" class="bmw-wheel-img">
            <div class="wheel-shadow"></div>
          </div>
          <canvas id="spark-canvas" class="spark-canvas"></canvas>
          <canvas id="road-canvas" class="road-canvas"></canvas>
        </div>

        <!-- Right HUD: The 4 WingmanX Journey Milestones -->
        <div class="tire-waypoints-hud">
          <div class="hud-panel-title">
            <i class="fa-solid fa-route"></i> THE WingmanX JOURNEY
          </div>

          <div class="tire-waypoints">
            <div class="tire-waypoint wp-cyan" data-distance="150">
              <div class="wp-dot-ring"><div class="wp-dot"></div></div>
              <div class="wp-content">
                <span class="wp-step">STAGE 01 &bull; DISCOVERY</span>
                <h4>ROUTE DISCOVERY & SYNC</h4>
                <p>Select the route, verify GPS waypoints, and open the squad lobby.</p>
              </div>
            </div>

            <div class="tire-waypoint wp-orange" data-distance="400">
              <div class="wp-dot-ring"><div class="wp-dot"></div></div>
              <div class="wp-content">
                <span class="wp-step">STAGE 02 &bull; CONNECT</span>
                <h4>PACK RADAR & SQUAD LINK</h4>
                <p>Bikes lock onto the proximity HUD; lead marshal and sweep confirmed.</p>
              </div>
            </div>

            <div class="tire-waypoint wp-emerald" data-distance="700">
              <div class="wp-dot-ring"><div class="wp-dot"></div></div>
              <div class="wp-content">
                <span class="wp-step">STAGE 03 &bull; RIDE</span>
                <h4>LIVE FORMATION & TELEMETRY</h4>
                <p>Riding in synchronized formation with hazard cues and gap monitoring.</p>
              </div>
            </div>

            <div class="tire-waypoint wp-purple" data-distance="900">
              <div class="wp-dot-ring"><div class="wp-dot"></div></div>
              <div class="wp-content">
                <span class="wp-step">STAGE 04 &bull; REMEMBER</span>
                <h4>EXPEDITION LOG & SQUAD VAULT</h4>
                <p>Summit sealed into your digital passport; route logged into squad vault.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Meaningful Visual Bridge: Generated Road Transitions into Discovery Section -->
      <div class="container road-bridge-container">
        <div class="road-bridge-wrapper">
          <div class="road-bridge-pulse"></div>
          <a href="#pack-radar" class="road-bridge-anchor" data-internal-route>
            <span class="bridge-tag">
              <i class="fa-solid fa-users"></i> CONNECT WITH COMPATIBLE RIDERS
            </span>
            <span class="bridge-caption">
              DISCOVER RIDERS & ACTIVE EXPEDITIONS ON WingmanX DISCOVERY
              <i class="fa-solid fa-arrow-down"></i>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 05: RIDER & PACK DISCOVERY — FIND YOUR PEOPLE. FIND YOUR ROAD. -->
    <section class="discovery-section radar-section" id="pack-radar">
      <div class="container">
        <div class="text-center section-header-centered">
          <div class="tag-orange mb-3">
            <i class="fa-solid fa-users-viewfinder"></i> COMMUNITY & SQUAD MATCHING
          </div>
          <h2 class="section-title-large">
            FIND YOUR PEOPLE. <span class="gradient-text-orange">FIND YOUR ROAD.</span>
          </h2>
          <p class="section-description centered">
            Motorcycling is better when you ride with people who share your pace, route appetite, and road discipline. Select your preferences below to discover compatible riders and verified squad expeditions.
          </p>
          <div class="discovery-demo-disclaimer" role="note">
            <i class="fa-solid fa-circle-info"></i>
            <span>INTERACTIVE MATCHMAKING PREVIEW &bull; ILLUSTRATIVE COMMUNITY PROFILES</span>
          </div>
        </div>

        <!-- 4-Step Interactive Discovery Studio (Mounted by WingmanRadarSystem) -->
        <div class="discovery-studio-container radar-stage" role="region" aria-label="Rider and Squad Discovery Interactive Studio">
          
          <!-- STEP 1: PREFERENCES SELECTOR (Discipline & Pace) -->
          <div class="discovery-controls-header">
            <div class="step-indicator-badge">
              <span class="step-num">STEP 01</span>
              <span class="step-text">SET YOUR RIDER PREFERENCES</span>
            </div>
            <p class="step-prompt">Filter by your motorcycle archetype, favorite terrain, and squad formation pace:</p>
          </div>

          <div class="discovery-filters-row">
            <!-- Discipline Filter -->
            <div class="filter-cluster" role="tablist" aria-label="Filter by Riding Discipline">
              <span class="cluster-label"><i class="fa-solid fa-motorcycle"></i> DISCIPLINE:</span>
              <div class="pills-track">
                <button type="button" class="disc-pill active" data-disc="all" role="tab" aria-selected="true" tabindex="0">All Disciplines</button>
                <button type="button" class="disc-pill" data-disc="canyon" role="tab" aria-selected="false" tabindex="0">Weekend Twisties</button>
                <button type="button" class="disc-pill" data-disc="adv" role="tab" aria-selected="false" tabindex="0">ADV & Mountain</button>
                <button type="button" class="disc-pill" data-disc="highway" role="tab" aria-selected="false" tabindex="0">Highway Cruise</button>
                <button type="button" class="disc-pill" data-disc="trail" role="tab" aria-selected="false" tabindex="0">Off-Road Trail</button>
              </div>
            </div>

            <!-- Pace Filter -->
            <div class="filter-cluster" role="tablist" aria-label="Filter by Group Pace">
              <span class="cluster-label"><i class="fa-solid fa-gauge-high"></i> SQUAD PACE:</span>
              <div class="pills-track">
                <button type="button" class="pace-pill active" data-pace="all" role="tab" aria-selected="true" tabindex="0">Any Pace</button>
                <button type="button" class="pace-pill" data-pace="steady" role="tab" aria-selected="false" tabindex="0">Scenic & Steady (75-95)</button>
                <button type="button" class="pace-pill" data-pace="spirited" role="tab" aria-selected="false" tabindex="0">Spirited (95-115)</button>
                <button type="button" class="pace-pill" data-pace="endurance" role="tab" aria-selected="false" tabindex="0">Endurance (100-115)</button>
              </div>
            </div>
          </div>

          <!-- STEP 2 & STEP 3: DISCOVERY RESULTS & SQUAD INSPECTOR -->
          <div class="discovery-workspace-grid">
            
            <!-- Left Column: Matched Squad Cards (STEP 2: DISCOVERY) -->
            <div class="discovery-feed-col">
              <div class="col-step-header">
                <div class="step-indicator-badge mini">
                  <span class="step-num">STEP 02</span>
                  <span class="step-text">MATCHED RIDERS & SQUADS</span>
                </div>
                <span class="feed-count-tag" id="discovery-count" aria-live="polite">5 Squads Available</span>
              </div>

              <div class="matched-cards-container" id="discovery-cards-list" role="listbox" aria-label="Compatible Rider and Squad Matches">
                <!-- Injected dynamically by WingmanRadarSystem -->
              </div>
            </div>

            <!-- Right Column: Squad Profile & Route Deep-Dive (STEP 3 & 4) -->
            <div class="discovery-detail-col">
              <div class="col-step-header">
                <div class="step-indicator-badge mini">
                  <span class="step-num">STEP 03 &bull; 04</span>
                  <span class="step-text">ROUTE BLUEPRINT & CONNECTION</span>
                </div>
                <span class="active-squad-tag"><i class="fa-solid fa-circle-check text-orange"></i> SELECTED SQUAD</span>
              </div>

              <div class="squad-inspector-card" id="discovery-inspector" role="region" aria-live="polite" aria-label="Selected Squad and Route Blueprint">
                <!-- Injected dynamically by WingmanRadarSystem -->
              </div>
            </div>

          </div>

        </div>

        <!-- Curated Weekend Expeditions Section -->
        <div class="curated-rides-wrap">
          <div class="curated-rides-header">
            <div>
              <span class="sub-tag">SCHEDULED COMMUNITY RUNS</span>
              <h3 class="curated-title">CURATED WEEKEND EXPEDITIONS</h3>
            </div>
            <a href="/explore-rides" class="btn btn-outline-cyan btn-sm" data-internal-route>
              VIEW ALL RUNS <i class="fa-solid fa-arrow-right"></i>
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

    <!-- SECTION 06: APP SHOWCASE & ACTUAL RIDER JOURNEY -->
    <section class="app-showcase-section" id="app-showcase" aria-label="How WingmanX Fits Into Your Ride">
      <div class="container">
        <!-- Section Header -->
        <div class="text-center section-header-centered mb-5">
          <div class="tag-orange mb-3">
            <i class="fa-solid fa-mobile-screen-button"></i> HOW WingmanX FITS INTO YOUR RIDE
          </div>
          <h2 class="section-title-large">
            FROM THE FIRST PLAN <span class="gradient-text-orange">TO THE LAST MILE.</span>
          </h2>
          <p class="section-description centered">
            A purpose-built mobile riding companion accompanying you through the four real stages of every pack journey — from discovering the route to rolling out together.
          </p>
        </div>

        <!-- Cinematic Ecosystem Video Feature Block -->
        <div class="ecosystem-video-story-block">
          <div class="ecosystem-video-header text-center">
            <h3 class="ecosystem-video-title">THE RIDE STARTS BEFORE THE ENGINE DOES.</h3>
            <p class="ecosystem-video-subtitle">
              From finding your riders to joining the right ride, WingManX brings the entire journey together.
            </p>
          </div>
          <div class="ecosystem-video-frame">
            <video 
              id="ecosystem-showcase-video" 
              class="ecosystem-cinematic-video" 
              src="/videos/our-ecosystem-hero-video.mp4" 
              playsinline 
              loop 
              preload="metadata"
              aria-label="WingManX connected riding ecosystem cinematic journey"
            ></video>
            <!-- Sleek Mute / Unmute Control -->
            <button id="ecosystem-video-mute-btn" class="ecosystem-video-audio-toggle" type="button" aria-label="Toggle video audio">
              <i class="fa-solid fa-volume-xmark"></i>
              <span>UNMUTE</span>
            </button>
          </div>
        </div>

        <div class="app-showcase-grid">
          <!-- Left Column: Interactive Phone Mockup Studio -->
          <div class="app-phones-col">
            <div class="phone-mockup-wrapper">
              <div class="phone-glow-ambient"></div>
              
              <!-- Screen 1: Discover Upcoming Rides -->
              <div class="phone-screen-container phone-screen-img active" data-index="1" aria-label="WingmanX Upcoming Rides Discovery Screen">
                <img src="/images/ride_transparent.png" alt="WingmanX App Home Feed — Upcoming Rides Discovery" class="device-screen-asset">
                <div class="screen-feature-tag tag-cyan">
                  <i class="fa-solid fa-compass"></i> UPCOMING RIDES FEED &bull; PUNE &bull; MUMBAI
                </div>
              </div>

              <!-- Screen 2: Ride Details & Route Briefing -->
              <div class="phone-screen-container phone-screen-img" data-index="2" aria-label="WingmanX Ride Details and Checkpoint Briefing">
                <img src="/images/ride_transparent.png" alt="WingmanX App Ride Details — Checkpoints, Meeting Times, and Pack Rules" class="device-screen-asset">
                <div class="screen-feature-tag tag-orange">
                  <i class="fa-solid fa-clipboard-check"></i> DEPARTURE: 03:30 AM &bull; CHANDANI CHOWK
                </div>
              </div>

              <!-- Screen 3: Rider Passport & Machine Profile -->
              <div class="phone-screen-container phone-screen-img" data-index="3" aria-label="WingmanX Rider Passport and Motorcycle Profile">
                <img src="/images/create_profile_transparent.png" alt="WingmanX App Create Profile — Motorcycle Model, Riding Style, and Experience" class="device-screen-asset">
                <div class="screen-feature-tag tag-amber">
                  <i class="fa-solid fa-id-card"></i> VERIFIED RIDER PASSPORT &bull; BIKE PROFILE
                </div>
              </div>

              <!-- Screen 4: Onboarding & Account Creation -->
              <div class="phone-screen-container phone-screen-img" data-index="4" aria-label="WingmanX Rider Onboarding and City Selection">
                <img src="/images/download_app_transparent.png" alt="WingmanX App Onboarding — Account Creation and City Selection" class="device-screen-asset">
                <div class="screen-feature-tag tag-emerald">
                  <i class="fa-solid fa-circle-check"></i> RIDER ACCESS &bull; CITY HUBS
                </div>
              </div>

              <!-- Floating Real Capability Chips -->
              <div class="floating-chip chip-top" id="stageIndicatorChip">
                <span class="pulse-orange-dot"></span>
                <span class="chip-text">STAGE 01 &bull; DISCOVER RUNS</span>
              </div>
              <div class="floating-chip chip-bottom">
                <i class="fa-solid fa-users text-orange"></i>
                <span>VERIFIED COMMUNITY RUNS</span>
              </div>
            </div>
          </div>

          <!-- Right Column: 4 Real Journey Stages -->
          <div class="app-features-col">
            <div class="journey-track-wrapper">
              <div class="journey-road-line">
                <div class="journey-road-progress" id="journeyProgressIndicator"></div>
              </div>

              <div class="feature-item-list" role="tablist" aria-label="Rider Journey Milestones">
                
                <!-- Stage 01 -->
                <div class="feature-item active" data-mockup="1" role="tab" aria-selected="true" tabindex="0">
                  <div class="stage-milestone-indicator">
                    <span class="milestone-dot"></span>
                    <span class="milestone-step">01</span>
                  </div>
                  <div class="feat-info">
                    <div class="feat-badge-row">
                      <span class="feat-pill cyan">STAGE 01 &bull; DISCOVERY</span>
                      <span class="feat-screen-hint"><i class="fa-solid fa-mobile-screen"></i> APP HOME FEED</span>
                    </div>
                    <h4>DISCOVER CURATED SQUAD EXPEDITIONS</h4>
                    <p>
                      Browse upcoming weekend runs and multi-day tours across Maharashtra — from sunrise breakfast dashes to mountain pass circuits. Review ride dates, difficulty levels, and pack size caps so you always know where and when the community is rolling.
                    </p>
                    <div class="feat-app-proof">
                      <i class="fa-solid fa-check"></i>
                      <span>In-app: Upcoming runs list (Kaas Plateau, Varandha Ghat, Tamhini)</span>
                    </div>
                  </div>
                </div>

                <!-- Stage 02 -->
                <div class="feature-item" data-mockup="2" role="tab" aria-selected="false" tabindex="0">
                  <div class="stage-milestone-indicator">
                    <span class="milestone-dot"></span>
                    <span class="milestone-step">02</span>
                  </div>
                  <div class="feat-info">
                    <div class="feat-badge-row">
                      <span class="feat-pill orange">STAGE 02 &bull; PREPARATION</span>
                      <span class="feat-screen-hint"><i class="fa-solid fa-mobile-screen"></i> RIDE DETAILS</span>
                    </div>
                    <h4>ROUTE BRIEFING & SQUAD REQUIREMENTS</h4>
                    <p>
                      Inspect complete ride parameters before wheels roll: departure time (03:30 AM), meeting checkpoint (Chandani Chowk, Pune), displacement minimums (650+ CC), total distance (1,500 km), and verified road captains. Coordinate packing and fueling via dedicated pre-ride squad chat.
                    </p>
                    <div class="feat-app-proof">
                      <i class="fa-solid fa-check"></i>
                      <span>In-app: Ride Details with departure checkpoints, bike CC criteria & squad chat</span>
                    </div>
                  </div>
                </div>

                <!-- Stage 03 -->
                <div class="feature-item" data-mockup="3" role="tab" aria-selected="false" tabindex="0">
                  <div class="stage-milestone-indicator">
                    <span class="milestone-dot"></span>
                    <span class="milestone-step">03</span>
                  </div>
                  <div class="feat-info">
                    <div class="feat-badge-row">
                      <span class="feat-pill amber">STAGE 03 &bull; IDENTITY</span>
                      <span class="feat-screen-hint"><i class="fa-solid fa-mobile-screen"></i> RIDER PASSPORT</span>
                    </div>
                    <h4>YOUR MACHINE & EXPERIENCE PASSPORT</h4>
                    <p>
                      Set up your authentic riding identity: motorcycle model, riding discipline, years in the saddle, and personal bio. Squad captains review verified machine classes and experience levels before accepting join requests, ensuring disciplined pacelines and compatible road rhythm.
                    </p>
                    <div class="feat-app-proof">
                      <i class="fa-solid fa-check"></i>
                      <span>In-app: Profile setup with motorcycle model, riding style & saddle experience</span>
                    </div>
                  </div>
                </div>

                <!-- Stage 04 -->
                <div class="feature-item" data-mockup="4" role="tab" aria-selected="false" tabindex="0">
                  <div class="stage-milestone-indicator">
                    <span class="milestone-dot"></span>
                    <span class="milestone-step">04</span>
                  </div>
                  <div class="feat-info">
                    <div class="feat-badge-row">
                      <span class="feat-pill emerald">STAGE 04 &bull; ONBOARDING</span>
                      <span class="feat-screen-hint"><i class="fa-solid fa-mobile-screen"></i> ACCOUNT & ACCESS</span>
                    </div>
                    <h4>ONBOARDING & LOCAL NETWORK ACCESS</h4>
                    <p>
                      Fast, secure account creation with home base city selection (Pune, Mumbai, Bengaluru). Gain immediate access to local community circles, road captain invitations, and certified group expeditions on iOS and Android.
                    </p>
                    <div class="feat-app-proof">
                      <i class="fa-solid fa-check"></i>
                      <span>In-app: Rider registration with city hubs, verified access & official store downloads</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- App Store Download Badges -->
            <div class="store-download-card">
              <div class="store-download-text">
                <span class="download-heading">READY TO ROLL WITH THE PACK?</span>
                <span class="download-sub">Download the official WingmanX app and discover your next squad expedition.</span>
              </div>
              <div class="store-download-row">
                <a href="https://apps.apple.com/in/app/wingmanx/id6479581088" target="_blank" rel="noopener noreferrer" class="store-badge-btn" aria-label="Download WingmanX from the Apple App Store">
                  <img src="/images/app-store.jpg" alt="Download on the Apple App Store" height="40" style="height: 40px; width: auto; border-radius: 6px;">
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.wingmanx.mobile" target="_blank" rel="noopener noreferrer" class="store-badge-btn" aria-label="Download WingmanX from Google Play">
                  <img src="/images/google-play.svg" alt="Get it on Google Play" height="40" style="height: 40px; width: auto; border-radius: 6px;">
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 08: CINEMATIC INTERRUPTION — PREPARATION & RIDER IDENTITY -->
    <section class="helmet-cinema-section" id="helmet-cinema" aria-label="Rider Preparation and Gear Discipline">
      <div class="cinema-ambient-glow" aria-hidden="true"></div>

      <div class="container">
        <!-- Top Restrained Editorial Briefing -->
        <div class="cinema-header-box text-center">
          <div class="cinema-tag-badge">
            <span class="cinema-pulsing-dot"></span>
            <span>RIDER RITUAL &bull; GEAR &bull; IDENTITY</span>
          </div>
          <h2 class="cinema-headline">
            THE JOURNEY STARTS BEFORE<br>
            <span class="cinema-highlight-gold">THE ENGINE DOES.</span>
          </h2>
          <p class="cinema-lead-text">
            The ride doesn't start with the throttle. It begins in the deliberate ritual of preparation: chin strap clicked, visor wiped clean, gloves cinched, and the quiet mental transition of a rider locking into the road.
          </p>
        </div>

        <!-- Widescreen Cinematic Stage with Strong Visual Frame -->
        <div class="cinema-stage-wrapper">
          <div class="cinema-screen-frame">
            <div class="cinema-aspect-ratio-box">
              <video 
                id="helmetCinematicVideo"
                class="helmet-cinema-video"
                autoplay 
                muted 
                loop 
                playsinline 
                preload="metadata"
                poster="/images/helmet_cinematic_poster.jpg"
                aria-label="Cinematic motorcycle helmet and glove preparation footage"
              >
                <!-- Web-ready optimized H.264 + faststart asset -->
                <source src="/videos/helmet_cinematic_web.mp4" type="video/mp4">
                <!-- Verified project master asset: erasio_Helmet_clip_with_glove_20260930131406 -->
                <source src="/videos/erasio_Helmet_clip_with_glove_20260930131406.mp4" type="video/mp4">
                <!-- Verified project fallback asset -->
                <source src="/videos/erasio_Helmet_clip_1080p_20260930125932.mp4" type="video/mp4">
              </video>
              <!-- Edge-only soft lens vignette: preserves full center visibility of gear -->
              <div class="cinema-vignette-scrim" aria-hidden="true"></div>
            </div>
          </div>
        </div>

        <!-- Lower Restrained Creed Bar: The Brotherhood of the Road -->
        <div class="cinema-creed-bar">
          <div class="creed-icon-wrap">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <div class="creed-content">
            <blockquote class="creed-statement">
              “The road doesn't care what badge is stamped on your tank. It cares about your discipline, your respect for the curve, and the pack that watches your six.”
            </blockquote>
            <div class="creed-origin-meta">
              <strong>WingmanX RIDER DISCIPLINE</strong> &bull; <span>PUNE HQ &bull; WESTERN GHATS CHAPTER</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 09: RIDER COMMUNITY EXPERIENCE — REAL RIDERS, REAL STORIES -->
    <section class="community-experience-section" id="community-riders" aria-label="WingmanX Rider Community Experience">
      <div class="container">
        <!-- Section Header -->
        <div class="text-center section-header-centered mb-5">
          <div class="tag-orange mb-3">
            <i class="fa-solid fa-users-rays"></i> THE LIVING NETWORK &bull; WESTERN GHATS CHAPTER
          </div>
          <h2 class="section-title-large">
            THE PEOPLE WHO <span class="gradient-text-orange">MAKE THE ROAD.</span>
          </h2>
          <p class="section-description centered">
            WingmanX isn't an algorithm or an anonymous forum. It is lived by road captains leading 40-bike formations through mountain passes, solo tourers crossing Spiti dead-zones, and weekend riders meeting at 05:00 AM.
          </p>
        </div>

        <!-- 4 Genuine Rider Moments & Community Stories -->
        <div class="community-stories-grid">
          
          <!-- Story 1: Convoy Discipline & Pack Briefing -->
          <article class="rider-story-card" aria-label="Rider story: Aniket Deshpande">
            <div class="story-image-container">
              <img src="/images/DefaultRideImage.jpg" alt="Motorcycle pack riding in synchronized formation on open highway" class="story-photo" loading="lazy">
              <div class="story-image-gradient"></div>
              <div class="story-tag-pill">
                <i class="fa-solid fa-location-dot"></i> PUNE HQ &bull; CONVOY FORMATION
              </div>
            </div>
            <div class="story-card-body">
              <div class="story-rider-header">
                <div>
                  <h3 class="story-rider-name">Aniket Deshpande</h3>
                  <span class="story-rider-role">PRESIDENT, WESTERN RIDERS MC</span>
                </div>
                <span class="story-machine-badge">Triumph Tiger 900</span>
              </div>
              <blockquote class="story-quote">
                “Organizing 40 bikes used to mean 30 minutes of chaos at every toll plaza wondering who took the wrong exit. With WingmanX, lead and sweep hold the pack together seamlessly.”
              </blockquote>
              <div class="story-card-footer">
                <span class="story-moment-detail"><i class="fa-solid fa-road"></i> 40-Bike Pack Regroup</span>
                <span class="story-verified-check"><i class="fa-solid fa-circle-check"></i> Verified Road Captain</span>
              </div>
            </div>
          </article>

          <!-- Story 2: High Altitude Autonomy & Solo Tours -->
          <article class="rider-story-card" aria-label="Rider story: Divya Nambiar">
            <div class="story-image-container">
              <img src="/images/1771572471_69980cf780d1d.jpg" alt="Rider carving open highway sweeping turns in full protective gear" class="story-photo" loading="lazy">
              <div class="story-image-gradient"></div>
              <div class="story-tag-pill">
                <i class="fa-solid fa-location-dot"></i> SPITI PASSES &bull; HIGH ALTITUDE
              </div>
            </div>
            <div class="story-card-body">
              <div class="story-rider-header">
                <div>
                  <h3 class="story-rider-name">Divya Nambiar</h3>
                  <span class="story-rider-role">SOLO EXPLORER & SPITI FINISHER</span>
                </div>
                <span class="story-machine-badge">BMW G 310 GS</span>
              </div>
              <blockquote class="story-quote">
                “Heading into remote valleys where cell signals drop for days requires total trust in your navigation. The offline coordinate beacon gave my family and fellow riders complete confidence.”
              </blockquote>
              <div class="story-card-footer">
                <span class="story-moment-detail"><i class="fa-solid fa-mountain"></i> Spiti Expedition Finisher</span>
                <span class="story-verified-check"><i class="fa-solid fa-circle-check"></i> Solo Woman Tourer</span>
              </div>
            </div>
          </article>

          <!-- Story 3: Sweep Safety & Mountain Pack Coordination -->
          <article class="rider-story-card" aria-label="Rider story: Nikhil Deshmukh">
            <div class="story-image-container">
              <img src="/images/Banner_2482026145513_12739.jpg" alt="Midnight Mile Riders pack navigating mountain pass in safety gear" class="story-photo story-photo-m2r" loading="lazy">
              <div class="story-image-gradient"></div>
              <div class="story-tag-pill">
                <i class="fa-solid fa-location-dot"></i> MIDNIGHT MILE RIDERS &bull; GHAT EXPEDITION
              </div>
            </div>
            <div class="story-card-body">
              <div class="story-rider-header">
                <div>
                  <h3 class="story-rider-name">Nikhil Deshmukh</h3>
                  <span class="story-rider-role">FOUNDER, PUNE COASTAL RIDERS</span>
                </div>
                <span class="story-machine-badge">Kawasaki Versys 650</span>
              </div>
              <blockquote class="story-quote">
                “A pack is only as fast as its trailing bike. Our sweep-alert workflow ensures that if a rider takes a fuel pause or gravel drift, the marshals know in seconds.”
              </blockquote>
              <div class="story-card-footer">
                <span class="story-moment-detail"><i class="fa-solid fa-shield"></i> Sweep Marshal Protocol</span>
                <span class="story-verified-check"><i class="fa-solid fa-circle-check"></i> Safety Advocate</span>
              </div>
            </div>
          </article>

          <!-- Story 4: Route Scouting & Tarmac Beta Testing -->
          <article class="rider-story-card" aria-label="Rider story: Sanyam Verma">
            <div class="story-image-container">
              <img src="/images/1771498769_6996ed1197973.jpg" alt="Rider in protective riding leather and helmet ready for departure" class="story-photo" loading="lazy">
              <div class="story-image-gradient"></div>
              <div class="story-tag-pill">
                <i class="fa-solid fa-location-dot"></i> TAMHINI GHAT &bull; ROUTE SCOUT
              </div>
            </div>
            <div class="story-card-body">
              <div class="story-rider-header">
                <div>
                  <h3 class="story-rider-name">Sanyam Verma</h3>
                  <span class="story-rider-role">LEAD BETA TESTER & ROUTE SCOUT</span>
                </div>
                <span class="story-machine-badge">Bajaj Pulsar RS 200</span>
              </div>
              <blockquote class="story-quote">
                “Logged over 24,000 KM through Western Ghat twisties testing radar beacon reliability in deep valleys so the community rides with rock-solid coordinates.”
              </blockquote>
              <div class="story-card-footer">
                <span class="story-moment-detail"><i class="fa-solid fa-compass"></i> 24,000+ KM Scouted</span>
                <span class="story-verified-check"><i class="fa-solid fa-circle-check"></i> Foundation Contributor</span>
              </div>
            </div>
          </article>

        </div>

        <!-- Community Hub Navigation Bar -->
        <div class="community-hub-footer">
          <div class="hub-context-badges">
            <span class="hub-pill"><i class="fa-solid fa-city"></i> Pune &bull; Mumbai &bull; Bengaluru</span>
            <span class="hub-pill"><i class="fa-solid fa-mountain-sun"></i> Western Ghats &bull; Spiti Circuits</span>
            <span class="hub-pill"><i class="fa-solid fa-certificate text-orange"></i> 100% Real Rider Community</span>
          </div>

          <div class="hub-action-links">
            <a href="/community-contributors" class="btn btn-outline-colored" data-internal-route>
              <i class="fa-solid fa-users"></i> MEET ALL 11 COMMUNITY CONTRIBUTORS
            </a>
            <a href="/our-testimonials" class="btn btn-outline-white btn-sm" data-internal-route>
              <i class="fa-solid fa-comment-dots"></i> READ RIDER FIELD REPORTS
            </a>
            <a href="/our-galleries" class="btn btn-outline-white btn-sm" data-internal-route>
              <i class="fa-solid fa-camera"></i> EXPLORE VISUAL ARCHIVE
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 10: DEDICATED APP DOWNLOAD SECTION -->
    <section class="final-cta-section app-download-section" id="app-download" aria-label="Download WingmanX Mobile App">
      <div class="final-cta-glow"></div>
      <div class="container text-center">
        <div class="tag-gold mb-3">
          <i class="fa-solid fa-mobile-screen"></i> OFFICIAL APPS
        </div>
        <h2 class="final-cta-title">
          DOWNLOAD <span class="gradient-text-orange">WingmanX</span>
        </h2>
        <p class="final-cta-subtitle">
          Download the official WingmanX motorcycle companion today on iOS and Android. Discover unmapped ghat trails, organize squad convoys, and ride with verified telemetry.
        </p>
        <div class="app-download-badges-wrap">
          <a href="https://apps.apple.com/in/app/wingmanx/id6479581088" target="_blank" rel="noopener noreferrer" class="app-store-badge-link" aria-label="Download WingmanX from the Apple App Store">
            <img src="/images/app-store.jpg" alt="Download on the Apple App Store" class="store-badge-img">
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.wingmanx.mobile" target="_blank" rel="noopener noreferrer" class="app-store-badge-link" aria-label="Download WingmanX from Google Play">
            <img src="/images/google-play.svg" alt="Get it on Google Play" class="store-badge-img">
          </a>
        </div>
      </div>
    </section>
  `,
about: () => `
    <div class="about-page-layout">
      
      <!-- 1. Opening Introduction -->
      <section class="about-hero-cinematic text-center">
        <div class="about-hero-bg">
          <img src="/images/DefaultRideImage.jpg" alt="WingManX Convoy on Highway" class="about-hero-img">
          <div class="about-hero-overlay"></div>
        </div>
        <div class="container about-hero-container">
          <div class="telemetry-tag mb-3 mx-auto"><i class="fa-solid fa-compass"></i> WHY WingManX EXISTS</div>
          <h1 class="display-title mx-auto">BUILDING INDIA'S RIDER COMMUNITY.</h1>
          <p class="lead-editorial mx-auto" style="max-width: 800px;">
            We started WingManX to solve a simple but very real rider problem. Finding the right people to ride with.
          </p>
        </div>
      </section>

      <!-- 2. Origin Story: Why We Started WingManX -->
      <section class="about-founding-story" style="padding: 80px 0;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
          <div class="row g-4 g-lg-5 align-items-center justify-content-center">
            <!-- Left: Two riders beside motorcycles looking at phones -->
            <div class="col-lg-6">
              <div class="glass-card p-0 overflow-hidden h-100 d-flex align-items-center justify-content-center" style="border-radius: 16px; border: 1px solid rgba(250, 121, 7, 0.25); box-shadow: 0 16px 36px rgba(0,0,0,0.5); background: #06080c;">
                <img src="/images/35970.jpg" alt="Why We Started WingManX - Riders on Motorcycles" class="w-100" style="object-fit: cover; aspect-ratio: 3/2; width: 100%; display: block;">
              </div>
            </div>
            <!-- Right: Exact Story Content -->
            <div class="col-lg-6">
              <div class="glass-card p-4 p-md-5 h-100 d-flex flex-column justify-content-center text-start" style="border-radius: 16px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08); border-left: 4px solid var(--wmx-orange); box-shadow: 0 16px 36px rgba(0,0,0,0.4);">
                <div class="telemetry-tag mb-3"><i class="fa-solid fa-map-pin"></i> 01 • THE ORIGIN STORY</div>
                <h2 class="display-sm mb-4" style="font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff;">Why We Started WingManX</h2>
                <div class="d-flex flex-column gap-3">
                  <p class="lead-editorial mb-0" style="font-size: 1.1rem; line-height: 1.6; color: #fff; font-weight: 600;">We started WingManX to solve a simple but very real rider problem. Finding the right people to ride with.</p>
                  <p class="text-muted mb-0" style="font-size: 1rem; line-height: 1.7; color: rgba(240, 244, 250, 0.85); font-family: 'Manrope', sans-serif;">For many of us, the hardest part of riding was never the route or the bike. It was finding dependable riding partners who shared the same pace, mindset, and respect for safety.</p>
                  <p class="text-muted mb-0" style="font-size: 1rem; line-height: 1.7; color: rgba(240, 244, 250, 0.85); font-family: 'Manrope', sans-serif;">What began as a question we asked ourselves before every ride quickly revealed a wider gap. Group rides were often unstructured, unpredictable, or organized through random messages with little clarity or accountability.</p>
                  <p class="text-muted mb-0" style="font-size: 1rem; line-height: 1.7; color: rgba(240, 244, 250, 0.85); font-family: 'Manrope', sans-serif;">We built WingManX to change that by bringing structure, trust, and responsibility into group riding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. What We Stand For: Visual Values System -->
      <section class="about-hazards-section" style="padding: 80px 0; background: rgba(250,121,7,0.03);">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
          <!-- Centered Heading & Intro -->
          <div class="text-center mb-5 mx-auto" style="max-width: 800px;">
            <div class="telemetry-tag mx-auto mb-3"><i class="fa-solid fa-shield-halved"></i> 02 • WHAT WE STAND FOR</div>
            <h2 class="display-sm mb-4">OUR CORE RIDER VALUES.</h2>
            <p class="section-subtitle mx-auto" style="line-height: 1.8;">Everything we build at WingManX is rooted in a strong set of core rider values, principles that shape how we design, how we ride, and how we grow as a responsible, connected community.</p>
          </div>
          
          <!-- Editorial Composition: Helmet Image + 5 Value Items -->
          <div class="row g-4 align-items-stretch">
            <div class="col-lg-5">
              <div class="glass-card p-0 h-100 d-flex align-items-center justify-content-center overflow-hidden" style="border-radius: 16px; border: 1px solid rgba(250, 121, 7, 0.25); box-shadow: 0 16px 36px rgba(0,0,0,0.4); background: #06080c; min-height: 440px;">
                <img src="/images/helmet.jpg" alt="Rider Helmet - Core Values" class="w-100 h-100" style="object-fit: cover; object-position: center; display: block;">
              </div>
            </div>
            <div class="col-lg-7">
              <div class="about-values-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; height: 100%;">
                <!-- Value 1 -->
                <div class="glass-card p-4 d-flex flex-column justify-content-between" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08); border-top: 3px solid var(--wmx-orange);">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <span class="telemetry-tag" style="font-size: 0.7rem; padding: 0.2rem 0.5rem;">VALUE 01</span>
                    <div style="font-size: 1.35rem; color: var(--wmx-orange);"><i class="fa-solid fa-helmet-safety"></i></div>
                  </div>
                  <div>
                    <h3 class="mb-2" style="font-size: 1.15rem; font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff;">SAFETY FIRST</h3>
                    <p class="mb-0 text-muted" style="font-size: 0.925rem; line-height: 1.5; font-family: 'Manrope', sans-serif;">Every ride should end the same way it starts. Safely.</p>
                  </div>
                </div>
                <!-- Value 2 -->
                <div class="glass-card p-4 d-flex flex-column justify-content-between" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08); border-top: 3px solid rgba(250, 121, 7, 0.4);">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <span class="telemetry-tag" style="font-size: 0.7rem; padding: 0.2rem 0.5rem;">VALUE 02</span>
                    <div style="font-size: 1.35rem; color: var(--wmx-orange);"><i class="fa-solid fa-handshake"></i></div>
                  </div>
                  <div>
                    <h3 class="mb-2" style="font-size: 1.15rem; font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff;">RESPONSIBILITY</h3>
                    <p class="mb-0 text-muted" style="font-size: 0.925rem; line-height: 1.5; font-family: 'Manrope', sans-serif;">We respect the road, the group, and each other.</p>
                  </div>
                </div>
                <!-- Value 3 -->
                <div class="glass-card p-4 d-flex flex-column justify-content-between" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08); border-top: 3px solid rgba(250, 121, 7, 0.4);">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <span class="telemetry-tag" style="font-size: 0.7rem; padding: 0.2rem 0.5rem;">VALUE 03</span>
                    <div style="font-size: 1.35rem; color: var(--wmx-orange);"><i class="fa-solid fa-link"></i></div>
                  </div>
                  <div>
                    <h3 class="mb-2" style="font-size: 1.15rem; font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff;">TRUST AND TRANSPARENCY</h3>
                    <p class="mb-0 text-muted" style="font-size: 0.925rem; line-height: 1.5; font-family: 'Manrope', sans-serif;">We ride with people we can rely on, not guess.</p>
                  </div>
                </div>
                <!-- Value 4 -->
                <div class="glass-card p-4 d-flex flex-column justify-content-between" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08); border-top: 3px solid rgba(250, 121, 7, 0.4);">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <span class="telemetry-tag" style="font-size: 0.7rem; padding: 0.2rem 0.5rem;">VALUE 04</span>
                    <div style="font-size: 1.35rem; color: var(--wmx-orange);"><i class="fa-solid fa-people-group"></i></div>
                  </div>
                  <div>
                    <h3 class="mb-2" style="font-size: 1.15rem; font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff;">COMMUNITY OVER EGO</h3>
                    <p class="mb-0 text-muted" style="font-size: 0.925rem; line-height: 1.5; font-family: 'Manrope', sans-serif;">Riding is better when the group comes before the throttle.</p>
                  </div>
                </div>
                <!-- Value 5 -->
                <div class="glass-card p-4 d-flex align-items-center gap-4" style="grid-column: span 2; border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08); border-left: 3px solid var(--wmx-orange);">
                  <div style="font-size: 1.75rem; color: var(--wmx-orange); flex-shrink: 0;"><i class="fa-solid fa-motorcycle"></i></div>
                  <div>
                    <div class="d-flex align-items-center gap-2 mb-1">
                      <span class="telemetry-tag" style="font-size: 0.65rem; padding: 0.15rem 0.4rem;">VALUE 05</span>
                      <h3 class="mb-0" style="font-size: 1.15rem; font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff;">INCLUSIVITY</h3>
                    </div>
                    <p class="mb-0 text-muted" style="font-size: 0.925rem; line-height: 1.5; font-family: 'Manrope', sans-serif;">It does not matter what you ride, only how you ride.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. The Principles Behind Every Ride (Mission & Vision) -->
      <section class="about-milestones-section text-center" style="padding: 70px 0;">
        <div class="container" style="max-width: 1000px; margin: 0 auto;">
          <!-- Section Heading -->
          <div class="telemetry-tag mx-auto mb-3"><i class="fa-solid fa-signs-post"></i> 03 • THE PRINCIPLES BEHIND EVERY RIDE</div>
          <h2 class="display-sm mb-3">WHAT WE AIM FOR.</h2>
          <p class="lead-editorial mx-auto mb-4" style="max-width: 700px; font-size: 1.05rem;">
            Our roadmap is defined by a singular focus: elevating the motorcycle touring experience in India.
          </p>
          
          <!-- Manifesto Visual -->
          <div class="glass-card mx-auto mb-4 p-0" style="max-width: 960px; border-radius: 14px; overflow: hidden; border: 1px solid rgba(250, 121, 7, 0.25); box-shadow: 0 16px 36px rgba(0,0,0,0.45);">
            <img src="/images/hero_poster.jpg" alt="WingManX Brand Manifesto" class="img-fluid w-100" style="object-fit: cover; max-height: 260px; opacity: 0.88;">
          </div>
          
          <!-- Manifesto Blocks -->
          <div class="row g-4 justify-content-center text-start">
            <!-- Mission -->
            <div class="col-md-6">
              <div class="glass-card p-4 p-lg-5 h-100 d-flex flex-column justify-content-between" style="border-radius: 14px; background: linear-gradient(145deg, rgba(18,22,30,0.85) 0%, rgba(10,13,18,0.7) 100%); border: 1px solid rgba(255,255,255,0.08); border-top: 3px solid var(--wmx-orange); box-shadow: 0 12px 28px rgba(0,0,0,0.35);">
                <div>
                  <div class="d-flex align-items-center gap-3 mb-3">
                    <div style="font-size: 1.4rem; color: var(--wmx-orange);"><i class="fa-solid fa-bullseye"></i></div>
                    <h3 class="mb-0" style="font-size: 1.3rem; font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff; letter-spacing: 0.02em;">OUR MISSION</h3>
                  </div>
                  <p class="text-muted mb-3" style="line-height: 1.7; font-size: 1rem; color: rgba(240, 244, 250, 0.88); font-family: 'Manrope', sans-serif;">Our mission is to make group riding safer, more structured, and more enjoyable by helping riders find the right people to ride with.</p>
                  <p class="text-muted mb-0" style="line-height: 1.7; font-size: 1rem; color: rgba(240, 244, 250, 0.88); font-family: 'Manrope', sans-serif;">WingManX exists to remove uncertainty from riding so riders can focus on confidence, camaraderie, and the joy of the open road.</p>
                </div>
              </div>
            </div>
            <!-- Vision -->
            <div class="col-md-6">
              <div class="glass-card p-4 p-lg-5 h-100 d-flex flex-column justify-content-between" style="border-radius: 14px; background: linear-gradient(145deg, rgba(18,22,30,0.85) 0%, rgba(10,13,18,0.7) 100%); border: 1px solid rgba(255,255,255,0.08); border-top: 3px solid var(--wmx-orange); box-shadow: 0 12px 28px rgba(0,0,0,0.35);">
                <div>
                  <div class="d-flex align-items-center gap-3 mb-3">
                    <div style="font-size: 1.4rem; color: var(--wmx-orange);"><i class="fa-solid fa-eye"></i></div>
                    <h3 class="mb-0" style="font-size: 1.3rem; font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff; letter-spacing: 0.02em;">OUR VISION</h3>
                  </div>
                  <p class="text-muted mb-0" style="line-height: 1.7; font-size: 1rem; color: rgba(240, 244, 250, 0.88); font-family: 'Manrope', sans-serif;">Our vision is to build India’s most trusted motorcycle rider ecosystem. We see a future where riders have access to verified and responsible riding communities, where group rides are well planned, disciplined, and welcoming, and where technology supports better riding behaviour instead of creating chaos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. What Makes WingManX Different -->
      <section class="about-hazards-section" style="padding: 80px 0; background: rgba(250, 121, 7, 0.03);">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
          <!-- Centered Header -->
          <div class="text-center mb-5 mx-auto" style="max-width: 800px;">
            <div class="telemetry-tag mx-auto mb-3"><i class="fa-solid fa-code-compare"></i> 04 • RIDE SMARTER, RIDE TOGETHER</div>
            <h2 class="display-sm mb-4">WHAT MAKES WingManX DIFFERENT.</h2>
            <p class="section-subtitle mx-auto" style="line-height: 1.8;">A platform built natively for motorcycling, where community respect and telemetry-backed safety take priority over reckless freedom.</p>
          </div>
          
          <!-- Balanced Centered Editorial Composition: 3 on left, centered rider image, 3 on right -->
          <div class="row g-4 align-items-center justify-content-center">
            <!-- Left Side: 3 Differentiators -->
            <div class="col-lg-4 d-flex flex-column gap-3">
              <div class="glass-card p-3 p-lg-4 text-start d-flex align-items-start gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08);">
                <div style="color: var(--wmx-orange); font-size: 1.35rem; flex-shrink: 0; margin-top: 2px;"><i class="fa-solid fa-mobile-screen"></i></div>
                <p class="mb-0 fw-bold" style="font-size: 0.975rem; font-family: 'Space Grotesk', sans-serif; color: #fff; line-height: 1.45;">A rider first platform designed only for motorcyclists</p>
              </div>
              <div class="glass-card p-3 p-lg-4 text-start d-flex align-items-start gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08);">
                <div style="color: var(--wmx-orange); font-size: 1.35rem; flex-shrink: 0; margin-top: 2px;"><i class="fa-solid fa-user-check"></i></div>
                <p class="mb-0 fw-bold" style="font-size: 0.975rem; font-family: 'Space Grotesk', sans-serif; color: #fff; line-height: 1.45;">Verified riders and structured group rides</p>
              </div>
              <div class="glass-card p-3 p-lg-4 text-start d-flex align-items-start gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08);">
                <div style="color: var(--wmx-orange); font-size: 1.35rem; flex-shrink: 0; margin-top: 2px;"><i class="fa-solid fa-id-card"></i></div>
                <p class="mb-0 fw-bold" style="font-size: 0.975rem; font-family: 'Space Grotesk', sans-serif; color: #fff; line-height: 1.45;">Rider profiles built on ride history and kilometres ridden</p>
              </div>
            </div>

            <!-- Center: Rider Image Fully Visible, Centered and Contained -->
            <div class="col-lg-4">
              <div class="glass-card p-0 mx-auto overflow-hidden d-flex align-items-center justify-content-center" style="max-width: 360px; border-radius: 16px; border: 1px solid rgba(250, 121, 7, 0.25); box-shadow: 0 16px 36px rgba(0,0,0,0.5); background: #06080c;">
                <img src="/images/rider.jpg" alt="WingManX Verified Rider" class="img-fluid" style="width: 100%; height: auto; max-height: 480px; object-fit: contain; display: block;">
              </div>
            </div>
            
            <!-- Right Side: 3 Differentiators -->
            <div class="col-lg-4 d-flex flex-column gap-3">
              <div class="glass-card p-3 p-lg-4 text-start d-flex align-items-start gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08);">
                <div style="color: var(--wmx-orange); font-size: 1.35rem; flex-shrink: 0; margin-top: 2px;"><i class="fa-solid fa-handshake-angle"></i></div>
                <p class="mb-0 fw-bold" style="font-size: 0.975rem; font-family: 'Space Grotesk', sans-serif; color: #fff; line-height: 1.45;">Compatibility based riding instead of random group joins</p>
              </div>
              <div class="glass-card p-3 p-lg-4 text-start d-flex align-items-start gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08);">
                <div style="color: var(--wmx-orange); font-size: 1.35rem; flex-shrink: 0; margin-top: 2px;"><i class="fa-solid fa-shield"></i></div>
                <p class="mb-0 fw-bold" style="font-size: 0.975rem; font-family: 'Space Grotesk', sans-serif; color: #fff; line-height: 1.45;">Safety and discipline built into the experience</p>
              </div>
              <div class="glass-card p-3 p-lg-4 text-start d-flex align-items-start gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65); border: 1px solid rgba(255, 255, 255, 0.08);">
                <div style="color: var(--wmx-orange); font-size: 1.35rem; flex-shrink: 0; margin-top: 2px;"><i class="fa-solid fa-users"></i></div>
                <p class="mb-0 fw-bold" style="font-size: 0.975rem; font-family: 'Space Grotesk', sans-serif; color: #fff; line-height: 1.45;">A community culture that values respect over recklessness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. The Road Ahead -->
      <section class="about-founding-story" style="padding: 80px 0;">
        <div class="container text-center" style="max-width: 1000px; margin: 0 auto;">
          <div class="telemetry-tag mx-auto mb-3"><i class="fa-solid fa-route"></i> 05 • THE ROAD AHEAD</div>
          <h2 class="display-sm mb-3">THE FUTURE DIRECTION OF THE ECOSYSTEM.</h2>
          <p class="lead-editorial mx-auto mb-4" style="max-width: 700px; font-size: 1.05rem;">
            As WingManX evolves, we will support riders through:
          </p>

          <!-- Relevant Project Image -->
          <div class="glass-card mx-auto mb-4 p-0" style="max-width: 900px; border-radius: 14px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 12px 28px rgba(0,0,0,0.4);">
            <img src="/images/Banner_278202610510_12749.jpg" alt="Future of Connected Riding Ecosystem" class="img-fluid w-100" style="object-fit: cover; max-height: 260px; opacity: 0.9;">
          </div>
          
          <div class="row g-3 justify-content-center text-start mb-4">
            <div class="col-md-6">
              <div class="glass-card p-3 p-lg-4 h-100 d-flex align-items-center gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65);">
                <div style="font-size: 1.75rem; color: var(--wmx-orange);"><i class="fa-solid fa-users-gear"></i></div>
                <div>
                  <h4 class="fw-bold mb-1" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; color: #fff;">Communities & Clubs</h4>
                  <p class="text-muted mb-0" style="font-size: 0.9rem;">Built around shared values</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="glass-card p-3 p-lg-4 h-100 d-flex align-items-center gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65);">
                <div style="font-size: 1.75rem; color: var(--wmx-orange);"><i class="fa-solid fa-graduation-cap"></i></div>
                <div>
                  <h4 class="fw-bold mb-1" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; color: #fff;">Training & Workshops</h4>
                  <p class="text-muted mb-0" style="font-size: 0.9rem;">Skill building sessions</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="glass-card p-3 p-lg-4 h-100 d-flex align-items-center gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65);">
                <div style="font-size: 1.75rem; color: var(--wmx-orange);"><i class="fa-solid fa-tent"></i></div>
                <div>
                  <h4 class="fw-bold mb-1" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; color: #fff;">Events & Experiences</h4>
                  <p class="text-muted mb-0" style="font-size: 0.9rem;">On and off the road</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="glass-card p-3 p-lg-4 h-100 d-flex align-items-center gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65);">
                <div style="font-size: 1.75rem; color: var(--wmx-orange);"><i class="fa-solid fa-heart-pulse"></i></div>
                <div>
                  <h4 class="fw-bold mb-1" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; color: #fff;">Safety Initiatives</h4>
                  <p class="text-muted mb-0" style="font-size: 0.9rem;">Safety first initiatives and responsible riding programs</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="glass-card p-3 p-lg-4 d-flex align-items-center justify-content-center gap-3" style="border-radius: 12px; background: rgba(14, 18, 25, 0.65);">
                <div style="font-size: 1.75rem; color: var(--wmx-orange);"><i class="fa-solid fa-handshake"></i></div>
                <div>
                  <h4 class="fw-bold mb-1" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; color: #fff;">Meaningful Partnerships</h4>
                  <p class="text-muted mb-0" style="font-size: 0.9rem;">With brands, trainers, and experts</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-4 text-center glass-card mx-auto" style="border-top: 3px solid var(--wmx-orange); max-width: 800px; background: rgba(14, 18, 25, 0.8); border-radius: 12px;">
             <p class="mb-0 fw-bold fs-5 text-white" style="line-height: 1.6; font-family: 'Space Grotesk', sans-serif;">Our goal is to build a complete rider ecosystem. Not just an app for planning rides, but a trusted home for everything related to motorcycling.</p>
          </div>
        </div>
      </section>

      <!-- 7. Our Team -->
      <section class="about-team-section text-center" style="padding: 80px 0; background: rgba(255,255,255,0.015);">
        <div class="container" style="max-width: 1080px; margin: 0 auto; padding: 0 1.5rem;">
          <div class="d-flex justify-content-center mb-3">
            <span class="team-badge-pill">OUR TEAM</span>
          </div>
          <h2 class="display-sm mb-5" style="font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff; letter-spacing: -0.01em; text-transform: none;">Meet Our Team</h2>
          
          <div class="team-cards-stack d-flex flex-column text-start">
            <!-- Team Member 1: Nilesh Sane -->
            <div class="team-horizontal-card">
              <div class="team-card-left">
                <div class="team-img-frame">
                  <img src="https://wingmanx.in/assets/img/icon/team/nilesh.webp" alt="Nilesh Sane" class="team-member-photo">
                </div>
                <div class="team-social-links">
                  <a href="https://www.facebook.com/nileshsane" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Nilesh Sane on Facebook" title="Facebook">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/nileshsane/" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Nilesh Sane on LinkedIn" title="LinkedIn">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/riding4india/" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Nilesh Sane on Instagram" title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="team-card-right">
                <h3 class="team-member-name">Nilesh Sane</h3>
                <div class="team-member-bio">
                  <p class="bio-para">Nilesh, the CEO of ReWise and a seasoned petrol head with over 25 years of IT wizardry under his belt. Picture this: a CEO who doesn't just excel in the boardroom but also dominates the asphalt, seamlessly blending technical prowess, marketing finesse, and business acumen.</p>
                  <p class="bio-para">But here's where the story gets exciting—Nilesh isn't just a tech guru; he's a bonafide bike enthusiast who's been riding the waves of the open road since the Hero Honda CBZ craze took the nation by storm in 2000. Clocking over 1,75,000 kms on his trusty CBZ, Nilesh has explored every nook and cranny of his city, making the streets his playground.</p>
                  <div class="team-bio-more" style="display: none;">
                    <p class="bio-para">Fast forward to today, and Nilesh is proudly revving up a Kawasaki Versys 1000, unable to contain his excitement or the urge to hit the road. For him, riding isn't just a pastime; it's his meditation, a way to express himself, and an avenue to connect with the thrill-seekers of the community.</p>
                  </div>
                </div>
                <button type="button" class="team-show-more-btn" onclick="const m=this.closest('.team-card-right').querySelector('.team-bio-more'); if(!m)return; const isOpen=m.style.display==='block'; m.style.display=isOpen?'none':'block'; this.textContent=isOpen?'Show More':'Show Less';">Show More</button>
              </div>
            </div>

            <!-- Team Member 2: Dr. Sahil Trimbake -->
            <div class="team-horizontal-card">
              <div class="team-card-left">
                <div class="team-img-frame">
                  <img src="https://wingmanx.in/assets/img/icon/team/sahil.webp" alt="Dr. Sahil Trimbake" class="team-member-photo">
                </div>
                <div class="team-social-links">
                  <a href="https://www.facebook.com/sahil.trimbake" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Dr. Sahil Trimbake on Facebook" title="Facebook">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/sahil-trimbake-9b622793/" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Dr. Sahil Trimbake on LinkedIn" title="LinkedIn">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/sahiltrimbake/" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Dr. Sahil Trimbake on Instagram" title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="team-card-right">
                <h3 class="team-member-name">Dr. Sahil Trimbake</h3>
                <div class="team-member-bio">
                  <p class="bio-para">Dr. Sahil Trimbake — a maestro in the surgical world and an absolute petrol head with a penchant for the symphony of inline 4 supersport motorcycles. As the director at Novacare Dental Pune, Dr. Sahil isn't just making precision moves in the operating room; he's also making waves on the asphalt.</p>
                  <p class="bio-para">Certified in head and neck surgical oncology and a specialist in craniofacial trauma, Dr. Sahil's expertise extends beyond the surgical table. His love affair with motorcycles began with the humble Bajaj Discover during his college days, navigating the vibrant streets of Pune.</p>
                  <div class="team-bio-more" style="display: none;">
                    <p class="bio-para">But the story doesn't stop there. Driven by the thrill of the ride, he took the plunge into the world of long-distance touring with his first big bike—a Triumph Bonneville. And when dreams materialized, he proudly rolled onto the asphalt on a Kawasaki Ninja 1000SX, embracing the raw power and exhilaration of the inline 4 engine.</p>
                    <p class="bio-para">Beyond the surgical suite, Dr. Sahil, along with Nilesh Sane, birthed the concept of WingManX, fueled by their firsthand experiences and a shared passion for the open road. In his dual role as a surgeon and a community developer for WingManX, Dr. Sahil is seamlessly blending his love for precision in surgery with the thrill of the ride.</p>
                    <p class="bio-para">So, whether he's wielding a scalpel or cruising on his Kawasaki, Dr. Sahil Trimbake is the epitome of a petrol head living life in the fast lane. Strap in for a journey that transcends the operating room and hits the open road with a surgeon who's as adept at carving turns as he is at saving lives!</p>
                  </div>
                </div>
                <button type="button" class="team-show-more-btn" onclick="const m=this.closest('.team-card-right').querySelector('.team-bio-more'); if(!m)return; const isOpen=m.style.display==='block'; m.style.display=isOpen?'none':'block'; this.textContent=isOpen?'Show More':'Show Less';">Show More</button>
              </div>
            </div>

            <!-- Team Member 3: Krithika Sane -->
            <div class="team-horizontal-card">
              <div class="team-card-left">
                <div class="team-img-frame">
                  <img src="https://wingmanx.in/assets/img/icon/team/kritika.webp" alt="Krithika Sane" class="team-member-photo">
                </div>
                <div class="team-social-links">
                  <a href="https://www.linkedin.com/in/krithika-sane-b06614112/" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Krithika Sane on LinkedIn" title="LinkedIn">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/krithikasane/" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Krithika Sane on Instagram" title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="team-card-right">
                <h3 class="team-member-name">Krithika Sane</h3>
                <div class="team-member-bio">
                  <p class="bio-para">Krithika is not just your typical finance whiz; she's the adrenaline-fueled powerhouse behind ReWise's global operations. With a track record spanning over two decades, she's got the financial finesse and operational prowess to steer our team to new heights.</p>
                  <p class="bio-para">As the Global Operations Head, Krithika isn't just crunching numbers—she's revving up the gears for ReWise's worldwide expansion. And when she's not balancing the books, she's conquering the wild terrains of Maharashtra, scaling iconic forts with the spirit of a true adventurer.</p>
                  <div class="team-bio-more" style="display: none;">
                    <p class="bio-para">But here's the twist: Krithika isn't just a numbers guru and adventure seeker; she's also a petrol head's dream. Her infectious enthusiasm extends beyond the boardroom, making her the driving force behind WingManX, a brainchild that's as thrilling as a high-speed race.</p>
                    <p class="bio-para">And guess what? Krithika isn't just the Global Operations Head—she's also the first WingManX to our founder Nilesh. So, buckle up and join us on this exhilarating ride with Krithika at the wheel, as we navigate the twists and turns of finance, operations, and global expansion. It's not just business; it's a wild adventure with a seasoned petrol head leading the way!</p>
                  </div>
                </div>
                <button type="button" class="team-show-more-btn" onclick="const m=this.closest('.team-card-right').querySelector('.team-bio-more'); if(!m)return; const isOpen=m.style.display==='block'; m.style.display=isOpen?'none':'block'; this.textContent=isOpen?'Show More':'Show Less';">Show More</button>
              </div>
            </div>

            <!-- Team Member 4: Urvashi Patole -->
            <div class="team-horizontal-card">
              <div class="team-card-left">
                <div class="team-img-frame">
                  <img src="https://wingmanx.in/assets/img/icon/team/urvashi.webp" alt="Urvashi Patole" class="team-member-photo">
                </div>
                <div class="team-social-links">
                  <a href="https://www.facebook.com/urvashipatole" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Urvashi Patole on Facebook" title="Facebook">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/urvashipatole/" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Urvashi Patole on LinkedIn" title="LinkedIn">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/thealphabikerni/" target="_blank" rel="noopener noreferrer" class="team-social-link-item" aria-label="Urvashi Patole on Instagram" title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="team-card-right">
                <h3 class="team-member-name">Urvashi Patole</h3>
                <div class="team-member-bio">
                  <p class="bio-para">Urvashi Patole is a motorcyclist and community strategist who has been a key figure in shaping the motorcycling community in India, especially for women riders.</p>
                  <p class="bio-para">As the co-founder of The Bikerni, one of India's first all-women motorcycle associations, she has actively championed community building and rider empowerment. Urvashi has also led motorcycle tours for renowned brands like Royal Enfield, Jawa Motorcycles and KTM India, bringing riders together through shared experiences.</p>
                  <div class="team-bio-more" style="display: none;">
                    <p class="bio-para">Her professional journey includes roles with leading automotive brands such as KTM India, Bosch India, and Classic Legends Pvt. Ltd., where she developed strategic brand collaborations, ride programs and community building initiatives.</p>
                    <p class="bio-para">At WingManX, Urvashi leverages her experience to build partnerships with motorcycle brands, riding clubs, and related industries, driving growth and community engagement.</p>
                  </div>
                </div>
                <button type="button" class="team-show-more-btn" onclick="const m=this.closest('.team-card-right').querySelector('.team-bio-more'); if(!m)return; const isOpen=m.style.display==='block'; m.style.display=isOpen?'none':'block'; this.textContent=isOpen?'Show More':'Show Less';">Show More</button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  `,
  ecosystem: () => `
    <div class="ecosystem-page-layout">
      <!-- 1. B2C-First Hero Section (Matching Reference Image 3) -->
      <section class="ecosystem-hero-b2c">
        <div class="container ecosystem-hero-container">
          <div class="ecosystem-hero-media-wrapper">
            <img src="/images/sunset-motorcycle-rider.jpg" alt="Motorcycle rider fully geared ready to ride at sunset" class="ecosystem-hero-img">
          </div>
          <h1 class="ecosystem-hero-statement">
            A CONNECTED RIDING ECOSYSTEM BUILT AROUND <span class="text-orange">PEOPLE, TRUST, AND REAL RIDING</span>
          </h1>
        </div>
      </section>

      <!-- 2. One Platform for Riders, Communities, and Partners (Matching Reference Image 2) -->
      <section class="ecosystem-platform-section">
        <div class="container ecosystem-section-container">
          <div class="ecosystem-header-center">
            <span class="ecosystem-badge-pill">BUILT AROUND REAL RIDERS</span>
            <h2 class="ecosystem-section-title">One Platform for Riders, Communities, and Partners</h2>
          </div>

          <div class="ecosystem-editorial-grid">
            <!-- Left: Authentic Highway Riding Imagery -->
            <div class="editorial-media-col">
              <div class="editorial-img-frame">
                <img src="/images/DefaultRideImage.jpg" alt="Riders traveling together on highway towards mountains" class="editorial-img">
              </div>
            </div>

            <!-- Right: Content & Bullet Points -->
            <div class="editorial-content-col">
              <p class="editorial-lead-p">
                WingManX brings the riding community together with the brands and manufacturers who build for them.
              </p>
              <p class="editorial-lead-p" style="margin-bottom: 2rem;">
                Think organized rides, genuine connections, and transparency across the board. Riders get more value from their experiences. Brands get credible access and real feedback from the people using their products.
              </p>

              <h3 class="ecosystem-subheading">Riding communities can engage to:</h3>
              <ul class="ecosystem-tick-list">
                <li>
                  <svg class="eco-tick-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2ed573" stroke-width="2" fill="rgba(46, 213, 115, 0.1)"/>
                    <path d="M7 12.5L10.5 16L17 9" stroke="#2ed573" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Plan structured rides and events with clarity</span>
                </li>
                <li>
                  <svg class="eco-tick-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2ed573" stroke-width="2" fill="rgba(46, 213, 115, 0.1)"/>
                    <path d="M7 12.5L10.5 16L17 9" stroke="#2ed573" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Onboard riders who match their values and culture</span>
                </li>
                <li>
                  <svg class="eco-tick-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2ed573" stroke-width="2" fill="rgba(46, 213, 115, 0.1)"/>
                    <path d="M7 12.5L10.5 16L17 9" stroke="#2ed573" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Maintain consistency and ride discipline</span>
                </li>
                <li>
                  <svg class="eco-tick-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2ed573" stroke-width="2" fill="rgba(46, 213, 115, 0.1)"/>
                    <path d="M7 12.5L10.5 16L17 9" stroke="#2ed573" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Move beyond chat groups to an organised platform</span>
                </li>
                <li>
                  <svg class="eco-tick-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2ed573" stroke-width="2" fill="rgba(46, 213, 115, 0.1)"/>
                    <path d="M7 12.5L10.5 16L17 9" stroke="#2ed573" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Build long term community engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. A Trusted Industry Partner Section (Matching Reference Image 1) -->
      <section class="ecosystem-trusted-section">
        <div class="container ecosystem-section-container">
          <div class="ecosystem-header-center">
            <span class="ecosystem-badge-pill">TRUSTED ACROSS THE RIDING COMMUNITY</span>
            <h2 class="ecosystem-section-title">A Trusted Industry Partner</h2>
          </div>

          <div class="ecosystem-trusted-grid">
            <!-- Left Column: Story -->
            <div class="ecosystem-trusted-text-col">
              <p class="editorial-lead-p">
                Brands and OEMs are an important part of the WingManX ecosystem. Every collaboration is designed to support meaningful rider engagement through real riding experiences.
              </p>
              <p class="editorial-lead-p">
                Partnerships are built around responsibility, relevance, and long term value. Brands and manufacturers engage with a community that values safety, discipline, and performance.
              </p>
              <p class="editorial-lead-p" style="margin-bottom: 0;">
                As partnerships grow, the ecosystem becomes stronger, more credible, and more impactful for everyone involved.
              </p>
            </div>

            <!-- Right Column: Bullets -->
            <div class="ecosystem-trusted-bullets-col">
              <h3 class="ecosystem-subheading">Brands and OEMs engage by:</h3>
              <ul class="ecosystem-tick-list">
                <li>
                  <svg class="eco-tick-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2ed573" stroke-width="2" fill="rgba(46, 213, 115, 0.1)"/>
                    <path d="M7 12.5L10.5 16L17 9" stroke="#2ed573" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Supporting structured rides and curated riding experiences</span>
                </li>
                <li>
                  <svg class="eco-tick-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2ed573" stroke-width="2" fill="rgba(46, 213, 115, 0.1)"/>
                    <path d="M7 12.5L10.5 16L17 9" stroke="#2ed573" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Enabling training sessions, workshops, and skill development initiatives</span>
                </li>
                <li>
                  <svg class="eco-tick-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2ed573" stroke-width="2" fill="rgba(46, 213, 115, 0.1)"/>
                    <path d="M7 12.5L10.5 16L17 9" stroke="#2ed573" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Showcasing products in real world riding environments</span>
                </li>
                <li>
                  <svg class="eco-tick-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2ed573" stroke-width="2" fill="rgba(46, 213, 115, 0.1)"/>
                    <path d="M7 12.5L10.5 16L17 9" stroke="#2ed573" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Building long term engagement with responsible rider communities</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Real Community Riding Images Gallery (Matching Reference Image 1) -->
          <div class="ecosystem-photo-gallery-grid">
            <div class="ecosystem-community-photo-card">
              <img src="/images/35970.jpg" alt="Riders connecting and sharing moments on motorcycles" class="community-photo">
            </div>
            <div class="ecosystem-community-photo-card">
              <img src="/images/the_mills/DSC02126.jpg.jpeg" alt="Pack of riders in structured group ride formation" class="community-photo">
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Retained Architectural Deep Dive Sections Below -->
      <section class="ecosystem-architecture-wrap" style="padding-top: 5rem; border-top: 1px solid rgba(255, 255, 255, 0.08);">
        <!-- Retained Ecosystem Architecture Header -->
        <div class="container text-center mb-4">
          <div class="telemetry-tag mx-auto mb-3"><i class="fa-solid fa-network-wired"></i> THE CONNECTED ARCHITECTURE</div>
          <h2 class="display-sm mb-3" style="font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff;">THE WingManX ARCHITECTURE</h2>
          <p class="lead-editorial mx-auto" style="max-width: 780px;">
            A unified multi-sided network built around one central, uncompromised priority: <strong>THE RIDER</strong>. Inspect the reciprocal value flow between riders, communities, brands, and motorcycle OEMs.
          </p>
        </div>
      </section>

      <!-- Interactive Central Network Visualization & Dynamic Relationship Inspector -->
      <section class="ecosystem-interactive-section">
        <div class="container">
          <div class="ecosystem-interactive-stage glass-card">
            <!-- Canvas for glowing connection streams -->
            <canvas id="eco-network-canvas" class="eco-network-canvas"></canvas>

            <!-- Center Node: The Rider -->
            <div class="eco-center-rider">
              <div class="center-rider-halo"></div>
              <div class="center-rider-core">
                <i class="fa-solid fa-user-ninja"></i>
                <span>THE RIDER</span>
                <small>B2C CORE</small>
              </div>
            </div>

            <!-- Orbiting Pillar 1: Communities -->
            <div class="eco-orbit-node node-clubs active" data-pillar="clubs" tabindex="0" role="button" aria-label="Inspect Riding Clubs relationship">
              <div class="node-icon"><i class="fa-solid fa-users"></i></div>
              <div class="node-label">
                <strong>RIDING CLUBS</strong>
                <span>Convoy & Safety Admin</span>
              </div>
            </div>

            <!-- Orbiting Pillar 2: Brands -->
            <div class="eco-orbit-node node-brands" data-pillar="brands" tabindex="0" role="button" aria-label="Inspect Brands and Sponsors relationship">
              <div class="node-icon"><i class="fa-solid fa-tags"></i></div>
              <div class="node-label">
                <strong>BRANDS & SPONSORS</strong>
                <span>Milestone Rewards</span>
              </div>
            </div>

            <!-- Orbiting Pillar 3: OEMs -->
            <div class="eco-orbit-node node-oem" data-pillar="oem" tabindex="0" role="button" aria-label="Inspect Motorcycle OEMs relationship">
              <div class="node-icon"><i class="fa-solid fa-motorcycle"></i></div>
              <div class="node-label">
                <strong>MOTORCYCLE OEMS</strong>
                <span>TFT Cluster Telematics</span>
              </div>
            </div>

            <!-- Orbiting Pillar 4: WingmanX Intelligence -->
            <div class="eco-orbit-node node-wmx" data-pillar="wmx" tabindex="0" role="button" aria-label="Inspect WingmanX Core Intelligence relationship">
              <div class="node-icon"><i class="fa-solid fa-microchip"></i></div>
              <div class="node-label">
                <strong>WingmanX CORE</strong>
                <span>Geospatial AI & Beacon</span>
              </div>
            </div>
          </div>

          <!-- Dynamic Relationship Inspector: Makes network visual truly meaningful -->
          <div class="eco-relationship-inspector glass-card mt-4" id="eco-relationship-card">
            <div class="inspector-header">
              <div class="inspector-title-area">
                <span class="telemetry-tag"><i class="fa-solid fa-arrows-left-right"></i> ACTIVE RECIPROCAL VALUE EXCHANGE</span>
                <h3 id="inspector-pillar-title" class="text-white mt-1">RIDING CLUBS ⟷ THE RIDER</h3>
              </div>
              <span id="inspector-pillar-role" class="inspector-badge">COMMUNITY CONVOY DISCIPLINE</span>
            </div>

            <div class="inspector-exchange-grid">
              <div class="exchange-col">
                <div class="exchange-tag rider-gives"><i class="fa-solid fa-arrow-right"></i> WHAT THE RIDER CONTRIBUTES</div>
                <ul id="inspector-rider-gives" class="exchange-list">
                  <li>Active GPS pack beacon presence during weekend club touring</li>
                  <li>Real-time crowd hazard flagging (gravel, oil slicks, water crossings)</li>
                  <li>Adherence to group formation, designated pace, and road captain signals</li>
                </ul>
              </div>
              <div class="exchange-col">
                <div class="exchange-tag pillar-returns"><i class="fa-solid fa-arrow-left"></i> WHAT CLUBS DELIVER TO THE RIDER</div>
                <ul id="inspector-pillar-returns" class="exchange-list">
                  <li>Organized sweep & lead protection eliminating lost-rider anxiety</li>
                  <li>Pre-scouted route waypoints, verified GPX files, and medical waivers</li>
                  <li>In-person brotherhood, recovery toolkits, and roadside mechanical support</li>
                </ul>
              </div>
            </div>

            <div class="inspector-footer">
              <span class="inspector-note"><i class="fa-solid fa-circle-nodes"></i> Click or tap any orbit node above to inspect another relationship in real time.</span>
              <a href="/contact-us?subject=Club+/+Pack+Partnership" class="btn btn-outline-orange btn-sm" data-internal-route id="inspector-cta-link">
                <span>CONNECT WITH OUR CLUB NETWORK</span>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Deep Dive Pillar Details -->
      <section class="ecosystem-deep-panels" id="ecosystem-deep-panels">
        <div class="container ecosystem-panels-container">
          <!-- Pillar 1 Deep Panel: The Rider -->
          <div class="eco-pillar-showcase glass-card" id="pillar-rider-details">
            <div class="pillar-header-block">
              <div class="pillar-badge-row">
                <span class="telemetry-tag"><i class="fa-solid fa-circle-dot text-orange"></i> B2C CENTER OF GRAVITY</span>
              </div>
              <h2 class="pillar-heading">
                <span class="pillar-num-prefix">01 /</span> THE RIDER EXPERIENCE
              </h2>
              <p class="pillar-lead-desc">
                The rider is the heart and soul of WingmanX. Every platform decision is evaluated through one uncompromising lens: does this make the rider's journey safer, simpler, and more connected?
              </p>
            </div>
            
            <div class="pillar-capabilities-grid rider-grid-3-1">
              <div class="cap-box">
                <div class="cap-icon-wrap"><i class="fa-solid fa-compass text-orange"></i></div>
                <h4>Smart Buddy Pairing</h4>
                <p>Scans nearby radius matching riders by machine displacement, cruising velocity, and preferred terrain.</p>
              </div>
              <div class="cap-box">
                <div class="cap-icon-wrap"><i class="fa-solid fa-location-dot text-orange"></i></div>
                <h4>Live Convoy Telemetry</h4>
                <p>Real-time group member positions visible on offline-cached topographic maps with zero latency.</p>
              </div>
              <div class="cap-box">
                <div class="cap-icon-wrap"><i class="fa-solid fa-shield-halved text-orange"></i></div>
                <h4>Automated Crash Detection</h4>
                <p>Proprietary sensor thresholds recognize sudden impacts, immediately broadcasting SOS coordinates to the sweep rider.</p>
              </div>
              <div class="cap-box">
                <div class="cap-icon-wrap"><i class="fa-solid fa-warehouse text-orange"></i></div>
                <h4>Digital Bike Garage</h4>
                <p>Log tire compound wear, chain maintenance intervals, and earned club achievement patches in one place.</p>
              </div>
            </div>
          </div>

          <!-- Pillar 2 Deep Panel: Clubs -->
          <div class="eco-pillar-showcase glass-card" id="pillar-clubs-details">
            <div class="pillar-header-block">
              <div class="pillar-badge-row">
                <span class="telemetry-tag"><i class="fa-solid fa-users text-orange"></i> COMMUNITY GOVERNANCE</span>
              </div>
              <h2 class="pillar-heading">
                <span class="pillar-num-prefix">02 /</span> RIDING CLUBS & PACK CAPTAINS
              </h2>
              <p class="pillar-lead-desc">
                We empower motorcycle club presidents and road captains with high-grade convoy coordination tooling that transforms chaotic group rides into disciplined formations.
              </p>
            </div>
            
            <div class="pillar-capabilities-grid clubs-grid-2">
              <div class="cap-box">
                <div class="cap-icon-wrap"><i class="fa-solid fa-list-check text-orange"></i></div>
                <h4>Automated Roster & Waivers</h4>
                <p>Digital check-in with digital ride liability acknowledgment, emergency contact logging, and blood group verification.</p>
              </div>
              <div class="cap-box">
                <div class="cap-icon-wrap"><i class="fa-solid fa-arrows-split-up-and-left text-orange"></i></div>
                <h4>Lead & Sweep Sync</h4>
                <p>Ride captains receive real-time gap warnings when trailing pack members drop behind due to traffic or tolls.</p>
              </div>
            </div>
          </div>

          <!-- Pillar 3 & 4 Grid: Brands & OEMs -->
          <div class="row-two-col">
            <div class="eco-pillar-card-compact glass-card" id="pillar-brands-details">
              <div class="pillar-badge-row">
                <span class="telemetry-tag"><i class="fa-solid fa-tags text-orange"></i> COMMERCIAL SYNERGY</span>
              </div>
              <h3 class="pillar-heading-sm">
                <span class="pillar-num-prefix">03 /</span> BRANDS & SPONSORS
              </h3>
              <p class="pillar-card-desc">
                Direct authentic engagement with a passionate motorcycling demographic through distance-based milestone gear rewards.
              </p>
              <a href="/brands-sponsors" class="link-orange mt-auto" data-internal-route>EXPLORE BRAND PARTNERSHIPS →</a>
            </div>

            <div class="eco-pillar-card-compact glass-card" id="pillar-oem-details">
              <div class="pillar-badge-row">
                <span class="telemetry-tag"><i class="fa-solid fa-motorcycle text-orange"></i> VEHICLE TELEMATICS</span>
              </div>
              <h3 class="pillar-heading-sm">
                <span class="pillar-num-prefix">04 /</span> OEM PARTNERS
              </h3>
              <p class="pillar-card-desc">
                Embedded instrument cluster navigation SDKs, CAN-bus vehicle telemetry, and factory owner club portals.
              </p>
              <a href="/oem-partners" class="link-orange mt-auto" data-internal-route>EXPLORE OEM SOLUTIONS →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 4. BRANDS & SPONSORS = THE CONNECTION
  // Composition: Premium cinematic hero -> "OUR SPONSORS" Wall -> Meaningful Engagement ->
  // Brands That Belong -> Experience Led Participation -> Transparency -> Credibility -> Flight Plan Form
  // =========================================================================
  brands: () => `
    <div class="brands-page-layout">
      <!-- 1. HERO: Partner With Riders Where It Matters Most -->
      <section class="brands-hero-editorial">
        <div class="brands-hero-backdrop">
          <img src="/images/coastal_rider_hero.jpg" alt="Motorcyclist riding on scenic coastal highway route" class="brands-hero-bg-img">
          <div class="brands-hero-gradient-overlay"></div>
        </div>
        <div class="container brands-hero-container">
          <div class="brands-hero-inner">
            <div class="telemetry-tag mb-3">
              <i class="fa-solid fa-handshake text-orange"></i> INDUSTRY PARTNERSHIPS
            </div>
            <h1 class="brands-hero-title">
              PARTNER WITH RIDERS<br>WHERE <span class="gradient-text-orange">IT MATTERS MOST.</span>
            </h1>
            <p class="brands-hero-lead">
              WingManX connects brands with a responsible motorcycle community through structured rides, real experiences, and long term engagement.
            </p>
            <div class="brands-hero-actions">
              <a href="#brand-partner-form-section" class="btn btn-primary" data-internal-route>
                <i class="fa-solid fa-paper-plane"></i> START A PARTNERSHIP
              </a>
              <a href="#our-sponsors" class="btn btn-outline-white" data-internal-route>
                <i class="fa-solid fa-award"></i> MEET OUR SPONSORS
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. "OUR SPONSORS" LOGO SHOWCASE WALL -->
      <section class="brands-sponsors-wall-section" id="our-sponsors">
        <div class="container">
          <div class="sponsor-wall-container">
            <div class="sponsor-wall-header text-center">
              <div class="tag-orange mb-3">
                <i class="fa-solid fa-shield-halved"></i> TRUSTED BY INDUSTRY LEADERS
              </div>
              <h2 class="section-title-large">OUR SPONSORS</h2>
              <p class="section-description centered">
                Pioneering manufacturers, safety specialists, performance brands, and travel leaders collaborating with WingManX to elevate the Indian motorcycling community.
              </p>
            </div>

            <!-- 3x3 Layout:
                 First 3 blocks: 3 brands (DVA | Vredestein Tyres | DSC)
                 Second 3 blocks: 2 brands on the side & middle "Our Sponsors" orange badge (UKIYO | Our Sponsors | WildFit)
                 Third 3 blocks: 3 brands (100KMPH | Ashok Travel World | bluarmor) -->
            <div class="sponsor-wall-grid">
              <!-- First 3 blocks: 3 brands -->
              <div class="sponsor-tile tile-white" title="DVA — Dare*Dream*Dazzle">
                <img src="/images/04-01.png" alt="DVA — Dare*Dream*Dazzle" loading="lazy">
              </div>
              <div class="sponsor-tile tile-white" title="Vredestein Tyres">
                <img src="/images/07-01.png" alt="Vredestein Tyres" loading="lazy">
              </div>
              <div class="sponsor-tile tile-white" title="DSG — For Rider-Safety">
                <img src="/images/05-01.png" alt="DSG — For Rider-Safety" loading="lazy">
              </div>

              <!-- Second 3 blocks: 2 brands on the side & middle "Our Sponsors" orange badge -->
              <div class="sponsor-tile tile-white" title="UKIYO">
                <img src="/images/06-01.png" alt="UKIYO" loading="lazy">
              </div>
              <div class="sponsor-tile tile-orange" title="Our Sponsors">
                <img src="/images/09-01.png" alt="Our Sponsors" loading="lazy">
              </div>
              <div class="sponsor-tile tile-white" title="WildFit — Health | Fitness | Performance">
                <img src="/images/08-01.png" alt="WildFit — Health | Fitness | Performance" loading="lazy">
              </div>

              <!-- Third 3 blocks: 3 brands -->
              <div class="sponsor-tile tile-white" title="100KMPH">
                <img src="/images/01-01.png" alt="100KMPH" loading="lazy">
              </div>
              <div class="sponsor-tile tile-white" title="Ashok Travel World">
                <img src="/images/02-01.png" alt="Ashok Travel World" loading="lazy">
              </div>
              <div class="sponsor-tile tile-white" title="bluarmor">
                <img src="/images/03-01.png" alt="bluarmor" loading="lazy">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. MEANINGFUL ENGAGEMENT, NOT JUST VISIBILITY -->
      <section class="brands-editorial-section" id="meaningful-engagement">
        <div class="container">
          <div class="editorial-story-row">
            <div class="editorial-text-col">
              <span class="telemetry-tag mb-3"><i class="fa-solid fa-bullseye text-orange"></i> WHY PARTNER WITH WINGMANX</span>
              <h2 class="editorial-heading">
                MEANINGFUL ENGAGEMENT,<br><span class="gradient-text-orange">NOT JUST VISIBILITY.</span>
              </h2>
              <p class="editorial-lead-statement">
                Engage riders through participation, not interruptions.
              </p>
              <p class="editorial-body-para">
                WingManX offers brands direct access to an engaged motorcycle community that values safety, performance, and discipline. Our riders are not passive audiences. They actively participate in rides, learning sessions, and community events.
              </p>
              <p class="editorial-body-para">
                Partnerships on WingManX are rooted in usefulness and contribution. Brands engage riders during real-world experiences where credibility is built naturally.
              </p>
            </div>
            <div class="editorial-visual-col">
              <div class="editorial-media-card">
                <img src="/images/brand_1174.jpg" alt="Motorcyclist in riding gear with machine" class="editorial-main-img" loading="lazy">
                <div class="editorial-media-badge">
                  <i class="fa-solid fa-motorcycle text-orange"></i> REAL RIDING EXPERIENCES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. BRANDS THAT BELONG IN THE RIDING ECOSYSTEM -->
      <section class="brands-editorial-section bg-pitch-dark" id="brands-belong">
        <div class="container">
          <div class="editorial-story-row reversed">
            <div class="editorial-visual-col">
              <div class="editorial-media-card">
                <img src="/images/1771572471_69980cf780d1d.jpg" alt="Rider riding classic motorcycle on tarmac" class="editorial-main-img" loading="lazy">
                <div class="editorial-media-badge">
                  <i class="fa-solid fa-road text-orange"></i> THE RIGHT FIT
                </div>
              </div>
            </div>
            <div class="editorial-text-col">
              <span class="telemetry-tag mb-3"><i class="fa-solid fa-cubes text-orange"></i> THE RIGHT FIT</span>
              <h2 class="editorial-heading">
                BRANDS THAT BELONG IN THE<br><span class="gradient-text-orange">RIDING ECOSYSTEM.</span>
              </h2>
              <p class="editorial-body-para">
                We collaborate with organisations that enhance the riding journey. WingManX is best suited for brands that respect riding culture and add genuine value to riders.
              </p>
              <h4 class="alignment-subtitle">Strong alignment includes:</h4>
              <div class="brand-alignment-list">
                <div class="alignment-item">
                  <span class="alignment-icon-badge">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8.5 15L16 5.5" stroke="#fa7907" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div class="alignment-item-content">
                    <span class="alignment-num">01.</span>
                    <span class="alignment-title">Motorcycle gear and safety equipment brands</span>
                  </div>
                </div>
                <div class="alignment-item">
                  <span class="alignment-icon-badge">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8.5 15L16 5.5" stroke="#fa7907" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div class="alignment-item-content">
                    <span class="alignment-num">02.</span>
                    <span class="alignment-title">Performance and accessory manufacturers</span>
                  </div>
                </div>
                <div class="alignment-item">
                  <span class="alignment-icon-badge">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8.5 15L16 5.5" stroke="#fa7907" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div class="alignment-item-content">
                    <span class="alignment-num">03.</span>
                    <span class="alignment-title">Tyre, maintenance, and riding technology providers</span>
                  </div>
                </div>
                <div class="alignment-item">
                  <span class="alignment-icon-badge">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8.5 15L16 5.5" stroke="#fa7907" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div class="alignment-item-content">
                    <span class="alignment-num">04.</span>
                    <span class="alignment-title">Riding schools, touring partners, and skill development institutions</span>
                  </div>
                </div>
                <div class="alignment-item">
                  <span class="alignment-icon-badge">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8.5 15L16 5.5" stroke="#fa7907" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div class="alignment-item-content">
                    <span class="alignment-num">05.</span>
                    <span class="alignment-title">Travel, fitness, and lifestyle brands aligned with the rider mindset</span>
                  </div>
                </div>
              </div>
              <p class="editorial-closing-note mt-4">
                If your brand contributes to safety, performance, learning, or experience, it fits naturally within the ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. EXPERIENCE LED PARTICIPATION -->
      <section class="brands-editorial-section" id="experience-participation">
        <div class="container">
          <div class="editorial-story-row">
            <div class="editorial-text-col">
              <span class="telemetry-tag mb-3"><i class="fa-solid fa-flag-checkered text-orange"></i> HOW BRANDS ENGAGE</span>
              <h2 class="editorial-heading">
                EXPERIENCE LED<br><span class="gradient-text-orange">PARTICIPATION.</span>
              </h2>
              <p class="editorial-body-para">
                Brands become part of the ride, not just part of the message. WingManX enables brands to engage through structured, community-driven experiences.
              </p>
              <h4 class="alignment-subtitle">Engagement opportunities include:</h4>
              <ul class="experience-checklist">
                <li>
                  <span class="alignment-icon-badge">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8.5 15L16 5.5" stroke="#fa7907" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span>Supporting curated rides and destination experiences</span>
                </li>
                <li>
                  <span class="alignment-icon-badge">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8.5 15L16 5.5" stroke="#fa7907" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span>Participating in track days and learning sessions</span>
                </li>
                <li>
                  <span class="alignment-icon-badge">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8.5 15L16 5.5" stroke="#fa7907" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span>Enabling product trials in real riding environments</span>
                </li>
                <li>
                  <span class="alignment-icon-badge">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8.5 15L16 5.5" stroke="#fa7907" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span>Contributing to responsible riding and safety campaigns</span>
                </li>
                <li>
                  <span class="alignment-icon-badge">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8.5 15L16 5.5" stroke="#fa7907" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span>Building long-term community associations instead of one-time campaigns</span>
                </li>
              </ul>
            </div>
            <div class="editorial-visual-col">
              <div class="experience-media-dual">
                <div class="exp-img-frame top-frame">
                  <img src="/images/brand_3277.jpg" alt="Rider with motorcycle in street environment" class="exp-img" loading="lazy">
                </div>
                <div class="exp-img-frame bottom-frame">
                  <img src="/images/brand_21839.jpg" alt="Rider in riding gear apparel hub" class="exp-img" loading="lazy">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. TRUST BUILT THROUGH TRANSPARENCY -->
      <section class="brands-transparency-banner" id="trust-transparency">
        <div class="transparency-banner-bg">
          <img src="/images/brand_2148875783.jpg" alt="Rider holding helmet with ADV motorcycle on road" class="transparency-bg-img" loading="lazy">
          <div class="transparency-gradient-scrim"></div>
        </div>
        <div class="container transparency-inner text-center">
          <span class="telemetry-tag mb-3 mx-auto"><i class="fa-solid fa-handshake-simple text-orange"></i> COMMUNITY FIRST</span>
          <h2 class="transparency-title">TRUST BUILT THROUGH TRANSPARENCY</h2>
          <div class="transparency-content-wrap mx-auto">
            <p class="transparency-lead">
              Brand involvement is contextual, voluntary, and clearly positioned.<br>
              Riders on WingManX choose who they ride with. That same philosophy shapes brand partnerships.
            </p>
            <p class="transparency-body">
              Participation is transparent. Riders understand when a brand supports an experience. There is no forced exposure or intrusive presence. When brands add value, trust grows organically.
            </p>
          </div>
        </div>
      </section>

      <!-- 7. CREDIBILITY THAT LASTS -->
      <section class="brands-editorial-section bg-pitch-dark" id="credibility-lasts">
        <div class="container">
          <div class="editorial-story-row reversed">
            <div class="editorial-visual-col">
              <div class="editorial-media-card">
                <img src="/images/brand_3164.jpg" alt="Rider standing proudly beside track motorcycle" class="editorial-main-img" loading="lazy">
                <div class="editorial-media-badge">
                  <i class="fa-solid fa-award text-orange"></i> QUALITY OVER SCALE
                </div>
              </div>
            </div>
            <div class="editorial-text-col">
              <span class="telemetry-tag mb-3"><i class="fa-solid fa-medal text-orange"></i> QUALITY OVER SCALE</span>
              <h2 class="editorial-heading">
                CREDIBILITY THAT <span class="gradient-text-orange">LASTS.</span>
              </h2>
              <p class="editorial-lead-statement">
                We prioritise relevance and long term relationships over mass reach.
              </p>
              <p class="editorial-body-para">
                WingManX focuses on contextual visibility within a disciplined riding culture. We believe credibility within the right community matters more than broad, untargeted exposure.
              </p>
              <p class="editorial-body-para">
                For brands that care about riders as a community rather than just customers, WingManX offers a responsible platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. PARTNERSHIP BRIEF TRANSMISSION FORM -->
      <section class="brands-form-section" id="brand-partner-form-section">
        <div class="container">
          <div class="brands-flight-plan-box glass-card">
            <div class="flight-plan-header text-center">
              <div class="telemetry-tag mb-3 mx-auto"><i class="fa-solid fa-paper-plane text-orange"></i> DIRECT TRANSMISSION</div>
              <h2 class="display-sm">START A BRAND PARTNERSHIP ROUTE.</h2>
              <p class="text-muted mx-auto" style="max-width: 600px;">Tell us about your brand. Our collaborations team in Pune will design a custom engagement route for our community.</p>
            </div>

            <form id="brand-partner-form" class="brands-partner-form mt-4">
              <div class="form-row-2">
                <div class="form-group mb-3">
                  <label class="form-label" for="brand-company">Brand / Company Name <span class="req">*</span></label>
                  <input type="text" id="brand-company" class="form-control" name="company" required placeholder="e.g. Alpinestars, Vredestein, Sena">
                </div>
                <div class="form-group mb-3">
                  <label class="form-label" for="brand-name">Contact Person & Title <span class="req">*</span></label>
                  <input type="text" id="brand-name" class="form-control" name="name" required placeholder="e.g. Rajiv Sharma, Marketing Lead">
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group mb-3">
                  <label class="form-label" for="brand-email">Official Work Email <span class="req">*</span></label>
                  <input type="email" id="brand-email" class="form-control" name="email" required placeholder="name@company.com">
                </div>
                <div class="form-group mb-3">
                  <label class="form-label" for="brand-interest">Partnership Focus</label>
                  <select class="form-control" id="brand-interest" name="interest">
                    <option value="Curated Rides & Destination Experiences">Curated Rides & Destination Experiences</option>
                    <option value="Track Days & Learning Sessions">Track Days & Learning Sessions</option>
                    <option value="Real-World Product Trials">Real-World Product Trials</option>
                    <option value="Safety & Responsible Riding Campaigns">Safety & Responsible Riding Campaigns</option>
                    <option value="Long-Term Community Association">Long-Term Community Association</option>
                  </select>
                </div>
              </div>

              <div class="form-group mb-4">
                <label class="form-label" for="brand-message">Campaign Scope & Objectives</label>
                <textarea class="form-control" id="brand-message" name="message" rows="4" placeholder="Briefly describe your products, target motorcycle categories, or specific activation goals..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg w-100">
                <span>TRANSMIT PARTNERSHIP BRIEF</span>
                <i class="fa-solid fa-paper-plane"></i>
              </button>
              <div class="form-status mt-3" id="brand-form-status"></div>
            </form>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
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
  oem: () => `
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
  `,

  // =========================================================================
  // 6. BLOGS = THE KNOWLEDGE / THE RIDER JOURNAL
  // Composition: Magazine cover featured story -> 6-card secondary editorial grid
  // =========================================================================
  blogs: () => `
    <div class="journal-page-layout">
      <!-- Magazine Hero Header -->
      <section class="journal-hero-header">
        <div class="container">
          <div class="telemetry-tag mb-3"><i class="fa-solid fa-newspaper"></i> DISPATCH & FIELD KNOWLEDGE</div>
          <h1 class="display-title">THE RIDER JOURNAL.</h1>
          <p class="lead-editorial">
            Unfiltered touring advice, Western Ghat monsoon survival guides, mechanical roadside triage, and pack safety philosophy written by riders who live on two wheels.
          </p>
        </div>
      </section>

      <!-- Featured Cover Story -->
      <section class="journal-cover-story-section">
        <div class="container">
          <article class="journal-cover-story glass-card">
            <div class="cover-story-bg">
              <img src="/images/Banner_2482026145513_12739.jpg" alt="Wet Tarmac in Western Ghats" class="cover-story-img">
              <div class="cover-story-gradient"></div>
            </div>
            <div class="cover-story-content">
              <span class="cover-badge">FEATURED COVER STORY • SAFETY & TECHNIQUE</span>
              <h2 class="cover-title">
                MASTERING THE MONSOON GHATS: 7 ESSENTIAL RULES FOR WET TARMAC
              </h2>
              <p class="cover-excerpt">
                From reading subtle variations in painted white road stripes when soaked to calculating downhill rear-brake trail into mossy apexes: the definitive guide to riding Western Ghat rains safely.
              </p>
              <div class="cover-meta-bar">
                <div class="cover-meta">
                  <span><i class="fa-solid fa-user-pen"></i> BY WingmanX SCOUT CREW</span>
                  <span>•</span>
                  <span><i class="fa-solid fa-clock"></i> 7 MIN READ</span>
                  <span>•</span>
                  <span>PUNE, SEPTEMBER 2026</span>
                </div>
                <a href="/blogs/mastering-the-monsoon-ghats" class="btn btn-primary btn-sm mt-3" data-internal-route>
                  <span>READ FULL DISPATCH</span>
                  <i class="fa-solid fa-book-open"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Secondary Asymmetric Stories Grid (6 Stories) -->
      <section class="journal-grid-section">
        <div class="container">
          <div class="journal-editorial-grid">
            <!-- Story 1: Convoy Sweep -->
            <article class="journal-card-editorial glass-card">
              <div class="j-media-frame">
                <img src="/images/DefaultRideImage.jpg" alt="Rear Sweep Rider in Action" loading="lazy">
                <span class="j-cat-tag">COMMUNITY & PACK</span>
              </div>
              <div class="j-card-body">
                <h3>THE ART OF THE SWEEP: WHY THE REAR RIDER IS THE TRUE HERO OF THE PACK</h3>
                <p>The lead sets the pace, but the sweep rider protects the soul of the group. A deep dive into convoy safety protocols, recovery toolkits, and trailing communication.</p>
                <div class="j-card-footer">
                  <span><i class="fa-solid fa-clock"></i> 5 MIN READ</span>
                  <a href="/blogs/the-art-of-the-sweep" class="btn btn-outline-orange btn-sm" data-internal-route>
                    <span>READ ARTICLE</span> <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>

            <!-- Story 2: Top 10 Must-Have Accessories for Every Rider -->
            <article class="journal-card-editorial glass-card">
              <div class="j-media-frame">
                <img src="/images/1771583990_699839f614e82.jpg" alt="Top 10 Must-Have Accessories for Every Rider" loading="lazy">
                <span class="j-cat-tag">GEAR & SAFETY GUIDE</span>
              </div>
              <div class="j-card-body">
                <h3>TOP 10 MUST-HAVE ACCESSORIES FOR EVERY RIDER</h3>
                <p>From certified full-face helmets and armored gloves to Bluetooth intercoms and roadside triage kits: the ten non-negotiable essentials for everyday commuters and long-distance tourers.</p>
                <div class="j-card-footer">
                  <span><i class="fa-solid fa-clock"></i> 8 MIN READ • 10 FEB 2026</span>
                  <a href="/blogs/top-10-must-have-accessories-for-every-rider" class="btn btn-outline-orange btn-sm" data-internal-route>
                    <span>READ ARTICLE</span> <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>

            <!-- Story 3: Spiti Valley Altitude -->
            <article class="journal-card-editorial glass-card">
              <div class="j-media-frame">
                <img src="/images/1771498769_6996ed1197973.jpg" alt="Machine Preparation for Expedition" loading="lazy">
                <span class="j-cat-tag">EXPEDITIONS & ALTITUDE</span>
              </div>
              <div class="j-card-body">
                <h3>SPITI VALLEY UNFILTERED: PREPARING YOUR MACHINE FOR EXTREME ALTITUDE</h3>
                <p>Air-fuel mixtures, spark plug heat ranges, suspension preload adjustments for rocky washouts, and emergency fuel filtration at 14,000 feet above sea level.</p>
                <div class="j-card-footer">
                  <span><i class="fa-solid fa-clock"></i> 10 MIN READ</span>
                  <a href="/blogs/spiti-valley-unfiltered" class="btn btn-outline-orange btn-sm" data-internal-route>
                    <span>READ ARTICLE</span> <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>

            <!-- Story 4 (NEW): The Ride We Almost Didn't Take -->
            <article class="journal-card-editorial glass-card">
              <div class="j-media-frame">
                <img src="/images/35970.jpg" alt="The Ride We Almost Didn't Take" loading="lazy">
                <span class="j-cat-tag">RIDER STORIES & BROTHERHOOD</span>
              </div>
              <div class="j-card-body">
                <h3>THE RIDE WE ALMOST DIDN’T TAKE</h3>
                <p>At 4:18 AM the rain lashed the windowpanes and the group chat was one ping away from mutual surrender. We thumbed the starters anyway.</p>
                <div class="j-card-footer">
                  <span><i class="fa-solid fa-clock"></i> 4 MIN READ • 14 MAR 2026</span>
                  <a href="/blogs/the-ride-we-almost-didnt-take" class="btn btn-outline-orange btn-sm" data-internal-route>
                    <span>READ ARTICLE</span> <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>

            <!-- Story 5 (NEW): Somewhere Between Home and the Mountains -->
            <article class="journal-card-editorial glass-card">
              <div class="j-media-frame">
                <img src="/images/sunset-motorcycle-rider.jpg" alt="Somewhere Between Home and the Mountains" loading="lazy">
                <span class="j-cat-tag">SOLO REFLECTIONS</span>
              </div>
              <div class="j-card-body">
                <h3>SOMEWHERE BETWEEN HOME AND THE MOUNTAINS</h3>
                <p>The white noise inside the visor strips away everything you thought was urgent. You leave familiar streets not to escape, but to remember who you were.</p>
                <div class="j-card-footer">
                  <span><i class="fa-solid fa-clock"></i> 4 MIN READ • 02 APR 2026</span>
                  <a href="/blogs/somewhere-between-home-and-the-mountains" class="btn btn-outline-orange btn-sm" data-internal-route>
                    <span>READ ARTICLE</span> <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>

            <!-- Story 6 (NEW): The Last Rider in the Pack -->
            <article class="journal-card-editorial glass-card">
              <div class="j-media-frame">
                <img src="/images/oem/oem_rider_rain_taillight.jpg" alt="The Last Rider in the Pack" loading="lazy">
                <span class="j-cat-tag">PACK BROTHERHOOD</span>
              </div>
              <div class="j-card-body">
                <h3>THE LAST RIDER IN THE PACK</h3>
                <p>You don't watch the scenery from the back of the line; you watch six red taillights cutting through the fog, carrying the silent promise that everyone reaches home.</p>
                <div class="j-card-footer">
                  <span><i class="fa-solid fa-clock"></i> 4 MIN READ • 18 MAY 2026</span>
                  <a href="/blogs/the-last-rider-in-the-pack" class="btn btn-outline-orange btn-sm" data-internal-route>
                    <span>READ ARTICLE</span> <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 6A. DEDICATED BLOG ARTICLE — MASTERING THE MONSOON GHATS
  // =========================================================================
  blogMonsoonGhats: () => `
    <div class="journal-article-layout">
      <!-- Breadcrumb & Back Navigation -->
      <nav class="article-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container article-container">
          <a href="/blogs" class="back-to-journal-link" data-internal-route>
            <i class="fa-solid fa-arrow-left"></i> BACK TO THE RIDER JOURNAL
          </a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">MASTERING THE MONSOON GHATS</span>
        </div>
      </nav>

      <!-- Article Header & Hero Image -->
      <header class="article-header-section">
        <div class="container article-container">
          <div class="article-category-badge">
            <i class="fa-solid fa-cloud-showers-heavy"></i> SAFETY & TECHNIQUE
          </div>
          <h1 class="article-main-title">
            Mastering the Monsoon Ghats: 7 Essential Rules for Wet Tarmac
          </h1>
          <div class="article-meta-row">
            <div class="meta-item author">
              <span class="meta-icon"><i class="fa-solid fa-user-pen"></i></span>
              <span class="meta-val">By WingmanX Scout Crew</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item date">
              <span class="meta-icon"><i class="fa-solid fa-calendar-days"></i></span>
              <span class="meta-val">Pune, September 2026</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item read-time">
              <span class="meta-icon"><i class="fa-solid fa-clock"></i></span>
              <span class="meta-val">7 Min Read</span>
            </div>
          </div>

          <!-- Featured High-Resolution Article Banner -->
          <div class="article-hero-media">
            <img src="/images/Banner_2482026145513_12739.jpg" alt="Wet Tarmac in Western Ghats during Southwest Monsoon" class="article-hero-img">
            <div class="article-media-caption">
              Dense mist, cascading waterfalls, and slick basalt switchbacks along the Tamhini Ghat corridor.
            </div>
          </div>
        </div>
      </header>

      <!-- Article Editorial Body -->
      <main class="article-body-section">
        <div class="container article-container">
          <div class="article-lead-paragraphs">
            <p class="article-lead-p">
              The Sahyadri mountain range during the Indian southwest monsoon transforms into one of the most sublime yet unforgiving motorcycle proving grounds on earth. When waterfalls cascade directly onto the tarmac and dense clouds reduce visibility to fifteen meters on Tamhini Ghat, standard riding habits become lethal.
            </p>
            <p class="article-body-p">
              Over twenty-four thousand kilometers of monsoon touring and telemetry logging, our scout crew has tested the limits of tire adhesion, brake bias, and pack discipline under torrential rains. Here are the seven non-negotiable rules forged on drenched asphalt.
            </p>
          </div>

          <!-- 7 Structured Rule Sections -->
          <div class="accessory-sections-list">
            
            <section class="accessory-item-card">
              <div class="accessory-num-badge">01</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Danger of Painted White Stripes</h2>
                <div class="accessory-tag"><i class="fa-solid fa-road"></i> FRICTION LOSS: THERMOPLASTIC HAZARD</div>
                <p class="accessory-desc">
                  Thermoplastic road paint has almost zero porosity. When soaked, it exhibits a friction coefficient similar to black ice. Never trail-brake across painted lane dividers, pedestrian crossings, or directional arrows. Always complete your braking adjustments on bare asphalt before crossing stripes perpendicularly.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">02</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Moss Zone at Inside Apexes</h2>
                <div class="accessory-tag"><i class="fa-solid fa-triangle-exclamation"></i> CORNERING: SILT & ALGAE ACCUMULATION</div>
                <p class="accessory-desc">
                  On steep mountain switchbacks, water runoff carries fine mountain silt and green algae into the inside gutters. The textbook tight apex is frequently a trap in the monsoon. Ride a wider, squared-off line that keeps your tire contact patch on coarse, rain-washed crown tarmac.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">03</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Progressive Trail-Braking Stability</h2>
                <div class="accessory-tag"><i class="fa-solid fa-circle-stop"></i> CHASSIS DYNAMICS: WEIGHT DISTRIBUTION</div>
                <p class="accessory-desc">
                  Sudden front-brake grab on wet tarmac violently unweights the rear suspension and risks instant front-end wash. Instead, initiate braking with a touch of rear brake to squat the chassis, then smoothly squeeze the front lever. Maintain light trailing pressure right up to turn-in.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">04</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Pinlock Visor & Hydrophobic Coatings</h2>
                <div class="accessory-tag"><i class="fa-solid fa-shield"></i> OPTICS: FOG & BEADING MANAGEMENT</div>
                <p class="accessory-desc">
                  Cracking your visor in torrential rain drenches your face; keeping it shut causes instant breath fogging. A properly seated Pinlock 70 or 120 insert is indispensable. Complement it with a hydrophobic silicone wipe on the exterior lens to sheet rainwater away with wind velocity.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">05</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Waterfall Crossing Protocol</h2>
                <div class="accessory-tag"><i class="fa-solid fa-water"></i> HYDRAULICS: IRISH BRIDGE RECON</div>
                <p class="accessory-desc">
                  Never plunge into running brown waterfall water across low-lying Irish bridges without scouting. If water height exceeds wheel axle center, or if the current pushes rocks against your boot, halt the pack. Cross individually in steady second gear with continuous throttle to prevent backpressure in the exhaust.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">06</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Tire Pressures & Compound Warm-Up</h2>
                <div class="accessory-tag"><i class="fa-solid fa-gauge"></i> CONTACT PATCH: TREAD GROOVE EVACUATION</div>
                <p class="accessory-desc">
                  Dropping cold tire pressures by 2 PSI in wet conditions increases the rubber footprint slightly, aiding rain-groove water evacuation on touring compounds. Remember that wet road spray continuously robs tires of operating heat; avoid sudden aggressive lean transitions even after 30 minutes of riding.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">07</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Pack Spacing & Convoy Radar</h2>
                <div class="accessory-tag"><i class="fa-solid fa-satellite-dish"></i> FORMATION: 4-SECOND BUFFER INTERVAL</div>
                <p class="accessory-desc">
                  Braking distances double on drenched highways. Increase pack interval from the standard 2-second staggered spacing to a minimum of 4 seconds. Use WingmanX convoy radar to monitor the trailing sweep rider through dense cloud cover without turning your head away from the road.
                </p>
              </div>
            </section>

          </div>

          <!-- Editorial Highlight Break -->
          <div class="article-callout-panel">
            <div class="callout-inner">
              <div class="callout-icon"><i class="fa-solid fa-cloud-showers-water"></i></div>
              <div>
                <h3 class="callout-heading">Respect the Sahyadri Monsoons</h3>
                <p class="callout-text">
                  The Ghats in the rain will punish arrogance, but they reward respect. When you ride with smooth hands, conservative lines, and mutual vigilance, monsoon touring becomes pure poetry.
                </p>
              </div>
            </div>
          </div>

          <!-- Conclusion Section -->
          <div class="article-conclusion-block">
            <h3 class="conclusion-heading">Conclusion: The Rhythm of Wet Asphalt</h3>
            <p class="article-body-p">
              Riding in the rain is not about conquering the weather; it is about harmonizing with it. When the visor beads up, the road turns silver, and the scent of crushed ferns fills your helmet, tension dissolves into deep, meditative rhythm.
            </p>
            <p class="article-body-p">
              Equip your machine properly, check your tread depths before setting off, and ride with the calm awareness that every corner is an invitation to master the road.
            </p>
          </div>

          <!-- Article Share / Back Footer -->
          <div class="article-footer-nav">
            <a href="/blogs" class="btn btn-outline-white" data-internal-route>
              <i class="fa-solid fa-arrow-left"></i> ALL DISPATCHES
            </a>
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-mobile-screen-button"></i> GET WingmanX APP
            </a>
          </div>

        </div>
      </main>

      <!-- Related Dispatches Strip -->
      <section class="related-dispatches-section">
        <div class="container article-container">
          <div class="related-header">
            <span class="sub-tag">MORE FROM THE RIDER JOURNAL</span>
            <h3 class="related-title">CONTINUE READING</h3>
          </div>
          <div class="related-articles-grid">
            <a href="/blogs/top-10-must-have-accessories-for-every-rider" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/1771583990_699839f614e82.jpg" alt="Top 10 Accessories for Every Rider">
              </div>
              <div class="related-body">
                <span class="related-badge">GEAR & SAFETY</span>
                <h4>Top 10 Must-Have Accessories for Every Rider</h4>
                <span class="read-more-link">READ DISPATCH <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
            <a href="/blogs/the-ride-we-almost-didnt-take" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/35970.jpg" alt="The Ride We Almost Didnt Take">
              </div>
              <div class="related-body">
                <span class="related-badge">RIDER STORIES</span>
                <h4>The Ride We Almost Didn't Take</h4>
                <span class="read-more-link">READ STORY <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- App Download Final CTA -->
      <section class="article-download-cta">
        <div class="container text-center">
          <h3 class="cta-title">TAKE WingmanX ON YOUR NEXT RUN.</h3>
          <p class="cta-desc">Live formation tracking, checkpoint alerts, and offline topo maps built for motorcyclists.</p>
          <div class="cta-actions">
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-download"></i> DOWNLOAD FREE ON IOS & ANDROID
            </a>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 6B. DEDICATED BLOG ARTICLE — TOP 10 MUST-HAVE ACCESSORIES FOR EVERY RIDER
  // Structure: Article Hero -> Category -> Title -> Published Date -> Intro -> 10 Accessories -> Callout -> Conclusion -> Related -> CTA
  // =========================================================================
  blogAccessories: () => `
    <div class="journal-article-layout">
      <!-- Breadcrumb & Back Navigation -->
      <nav class="article-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container article-container">
          <a href="/blogs" class="back-to-journal-link" data-internal-route>
            <i class="fa-solid fa-arrow-left"></i> BACK TO THE RIDER JOURNAL
          </a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">TOP 10 MUST-HAVE ACCESSORIES</span>
        </div>
      </nav>

      <!-- Article Header & Hero Image -->
      <header class="article-header-section">
        <div class="container article-container">
          <div class="article-category-badge">
            <i class="fa-solid fa-shield-halved"></i> GEAR & SAFETY GUIDE
          </div>
          <h1 class="article-main-title">
            Top 10 Must-Have Accessories for Every Rider
          </h1>
          <div class="article-meta-row">
            <div class="meta-item author">
              <span class="meta-icon"><i class="fa-solid fa-user-pen"></i></span>
              <span class="meta-val">By WingmanX Scout Crew</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item date">
              <span class="meta-icon"><i class="fa-solid fa-calendar-days"></i></span>
              <span class="meta-val">10 Feb, 2026</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item read-time">
              <span class="meta-icon"><i class="fa-solid fa-clock"></i></span>
              <span class="meta-val">8 Min Read</span>
            </div>
          </div>

          <!-- Featured High-Resolution Article Banner -->
          <div class="article-hero-media">
            <img src="/images/1771583990_699839f614e82.jpg" alt="Essential motorcycle touring gear, tools, and accessories flatlay" class="article-hero-img">
            <div class="article-media-caption">
              Essential motorcycle safety accessories, roadside tools, and navigation telemetry ready for tarmac deployment.
            </div>
          </div>
        </div>
      </header>

      <!-- Article Editorial Body (Centered 680-820px Reading Width) -->
      <main class="article-body-section">
        <div class="container article-container">
          <div class="article-lead-paragraphs">
            <p class="article-lead-p">
              Whether you ride to work every day, take weekend breakfast runs, or plan long highway tours, motorcycling demands more than just skill and passion. Riding exposes you directly to the environment—traffic, weather, road conditions, and the unexpected.
            </p>
            <p class="article-body-p">
              That’s why the right gear is not an accessory; it’s a responsibility. The difference between a casual rider and a prepared one often comes down to foresight. The following ten essentials go beyond comfort—they enhance safety, control, and confidence every time you swing a leg over the saddle.
            </p>
          </div>

          <!-- 10 Structured Accessory Sections -->
          <div class="accessory-sections-list">
            
            <!-- 1. Helmet -->
            <section class="accessory-item-card">
              <div class="accessory-num-badge">01</div>
              <div class="accessory-details">
                <h2 class="accessory-title">High-Quality Full-Face Helmet</h2>
                <div class="accessory-tag"><i class="fa-solid fa-certificate"></i> CERTIFICATION: ECE 22.06 / SNELL</div>
                <p class="accessory-desc">
                  Your most critical piece of gear. Look for ECE 22.06 or Snell certifications. A good helmet should offer superior ventilation and an anti-fog pin-lock visor to maintain clear visibility in all weather conditions.
                </p>
              </div>
            </section>

            <!-- 2. Armored Riding Gloves -->
            <section class="accessory-item-card">
              <div class="accessory-num-badge">02</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Armored Riding Gloves</h2>
                <div class="accessory-tag"><i class="fa-solid fa-mitten"></i> PROTECTION: HARD KNUCKLE & PALM SLIDERS</div>
                <p class="accessory-desc">
                  In any fall, your hands are instinctively the first things to hit the ground. Invest in leather or high-abrasion textile gloves with hard knuckle protection and palm sliders.
                </p>
              </div>
            </section>

            <!-- 3. All-Weather Riding Jacket -->
            <section class="accessory-item-card">
              <div class="accessory-num-badge">03</div>
              <div class="accessory-details">
                <h2 class="accessory-title">All-Weather Riding Jacket</h2>
                <div class="accessory-tag"><i class="fa-solid fa-vest"></i> ARMOR: CE-RATED BACK, ELBOW & SHOULDER</div>
                <p class="accessory-desc">
                  A versatile jacket with a removable thermal liner and CE-rated armor in the elbows, shoulders, and back is a game-changer. Look for "Hi-Viz" accents, like a yellow safety vest, to ensure you are seen by drivers at night.
                </p>
              </div>
            </section>

            <!-- 4. Dedicated GPS or Rugged Mount -->
            <section class="accessory-item-card">
              <div class="accessory-num-badge">04</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Dedicated Motorcycle GPS or Rugged Mount</h2>
                <div class="accessory-tag"><i class="fa-solid fa-location-crosshairs"></i> MOUNT: VIBRATION DAMPENING</div>
                <p class="accessory-desc">
                  While smartphones are convenient, a dedicated GPS is waterproof and glove-friendly. If you prefer your phone, use a vibration-dampening mount to protect your phone's sensitive camera sensors from engine buzz.
                </p>
              </div>
            </section>

            <!-- 5. Tire Inflator & Repair Kit -->
            <section class="accessory-item-card">
              <div class="accessory-num-badge">05</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Portable Tire Inflator & Repair Kit</h2>
                <div class="accessory-tag"><i class="fa-solid fa-circle-notch"></i> ROADSIDE: 15-MINUTE PLUG KIT</div>
                <p class="accessory-desc">
                  Punctures happen. A compact CO2 or battery-powered inflator and a plug kit can be the difference between a 15-minute fix and a multi-hour wait for a tow truck.
                </p>
              </div>
            </section>

            <!-- 6. Action Camera / Dashcam -->
            <section class="accessory-item-card">
              <div class="accessory-num-badge">06</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Action Camera (Dashcam)</h2>
                <div class="accessory-tag"><i class="fa-solid fa-video"></i> TELEMETRY: INCIDENT BLACK BOX</div>
                <p class="accessory-desc">
                  Beyond capturing scenic views, an action camera serves as a vital "black box" in case of incidents. Mounting one to your helmet or handlebars provides an objective record of your journey.
                </p>
              </div>
            </section>

            <!-- 7. Comprehensive First-Aid Kit -->
            <section class="accessory-item-card">
              <div class="accessory-num-badge">07</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Comprehensive First-Aid Kit</h2>
                <div class="accessory-tag"><i class="fa-solid fa-kit-medical"></i> MEDICAL: TRAUMA GAUZE & ANTISEPTICS</div>
                <p class="accessory-desc">
                  A rider-specific kit should be compact but stocked with trauma supplies, including hemostatic gauze, bandages, and antiseptic wipes. Knowledge of how to use it is just as important as carrying it.
                </p>
              </div>
            </section>

            <!-- 8. Disc Lock with Reminder Cable -->
            <section class="accessory-item-card">
              <div class="accessory-num-badge">08</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Disc Lock with Reminder Cable</h2>
                <div class="accessory-tag"><i class="fa-solid fa-lock"></i> SECURITY: ANTI-THEFT PROTECTION</div>
                <p class="accessory-desc">
                  Protect your investment. A sturdy disc lock prevents roll-away theft. Always use a bright reminder cable looped to your handlebar so you don't try to ride off with the lock still attached.
                </p>
              </div>
            </section>

            <!-- 9. Multi-Tool Kit -->
            <section class="accessory-item-card">
              <div class="accessory-num-badge">09</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Multi-Tool Kit</h2>
                <div class="accessory-tag"><i class="fa-solid fa-wrench"></i> TRIAGE: MIRRORS, LEVERS & BOLTS</div>
                <p class="accessory-desc">
                  A compact tool designed for motorcycles allows you to tighten loose mirrors, adjust levers, or perform basic roadside maintenance on the fly.
                </p>
              </div>
            </section>

            <!-- 10. Bluetooth Intercom System -->
            <section class="accessory-item-card">
              <div class="accessory-num-badge">10</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Bluetooth Intercom System</h2>
                <div class="accessory-tag"><i class="fa-solid fa-headset"></i> COMM: HANDS-FREE PACK SYNC</div>
                <p class="accessory-desc">
                  Stay connected without taking your hands off the bars. Modern systems allow for turn-by-turn navigation prompts, hands-free calls, and music, all while keeping your focus on the road.
                </p>
              </div>
            </section>

          </div>

          <!-- Editorial Highlight Break: Gear Up and Ride Safe -->
          <div class="article-callout-panel">
            <div class="callout-inner">
              <div class="callout-icon"><i class="fa-solid fa-road"></i></div>
              <div>
                <h3 class="callout-heading">Gear Up and Ride Safe</h3>
                <p class="callout-text">
                  Preparation is the key to enjoying the open road. At WingmanX, we believe in a "rider-first" approach, ensuring you have the knowledge and tools to stay safe and stylish.
                </p>
              </div>
            </div>
          </div>

          <!-- Conclusion Section -->
          <div class="article-conclusion-block">
            <h3 class="conclusion-heading">Conclusion: Prepared Riders Ride Longer</h3>
            <p class="article-body-p">
              Motorcycling is freedom—but it’s also exposure. The road is unpredictable, and preparation is what turns uncertainty into control. These ten essentials are not about overpacking; they’re about riding responsibly.
            </p>
            <p class="article-body-p">
              The right gear protects your body, safeguards your bike, and supports smarter decision-making on the road. Invest once, ride confidently, and make preparedness a habit—not an afterthought.
            </p>
          </div>

          <!-- Article Share / Back Footer -->
          <div class="article-footer-nav">
            <a href="/blogs" class="btn btn-outline-white" data-internal-route>
              <i class="fa-solid fa-arrow-left"></i> ALL DISPATCHES
            </a>
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-mobile-screen-button"></i> GET WingmanX APP
            </a>
          </div>

        </div>
      </main>

      <!-- Related Dispatches Strip -->
      <section class="related-dispatches-section">
        <div class="container article-container">
          <div class="related-header">
            <span class="sub-tag">MORE FROM THE RIDER JOURNAL</span>
            <h3 class="related-title">CONTINUE READING</h3>
          </div>
          <div class="related-articles-grid">
            <a href="/blogs" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/Banner_2482026145513_12739.jpg" alt="Wet Tarmac in Western Ghats">
              </div>
              <div class="related-body">
                <span class="related-badge">SAFETY & TECHNIQUE</span>
                <h4>Mastering the Monsoon Ghats: 7 Essential Rules for Wet Tarmac</h4>
                <span class="read-more-link">READ DISPATCH <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
            <a href="/blogs" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/DefaultRideImage.jpg" alt="Rear Sweep Rider in Action">
              </div>
              <div class="related-body">
                <span class="related-badge">COMMUNITY & PACK</span>
                <h4>The Art of the Sweep: Why the Rear Rider is the Pack's Hero</h4>
                <span class="read-more-link">READ DISPATCH <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- App Download Final CTA -->
      <section class="article-download-cta">
        <div class="container text-center">
          <h3 class="cta-title">TAKE WingmanX ON YOUR NEXT RUN.</h3>
          <p class="cta-desc">Live formation tracking, checkpoint alerts, and offline topo maps built for motorcyclists.</p>
          <div class="cta-actions">
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-download"></i> DOWNLOAD FREE ON IOS & ANDROID
            </a>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 6C. DEDICATED BLOG ARTICLE — THE ART OF THE SWEEP
  // =========================================================================
  blogArtOfSweep: () => `
    <div class="journal-article-layout">
      <!-- Breadcrumb & Back Navigation -->
      <nav class="article-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container article-container">
          <a href="/blogs" class="back-to-journal-link" data-internal-route>
            <i class="fa-solid fa-arrow-left"></i> BACK TO THE RIDER JOURNAL
          </a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">THE ART OF THE SWEEP</span>
        </div>
      </nav>

      <!-- Article Header & Hero Image -->
      <header class="article-header-section">
        <div class="container article-container">
          <div class="article-category-badge">
            <i class="fa-solid fa-flag-checkered"></i> COMMUNITY & PACK DISCIPLINE
          </div>
          <h1 class="article-main-title">
            The Art of the Sweep: Why the Rear Rider is the True Hero of the Pack
          </h1>
          <div class="article-meta-row">
            <div class="meta-item author">
              <span class="meta-icon"><i class="fa-solid fa-user-pen"></i></span>
              <span class="meta-val">By Nikhil Deshmukh • Founder, Pune Coastal Riders</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item date">
              <span class="meta-icon"><i class="fa-solid fa-calendar-days"></i></span>
              <span class="meta-val">04 Jan, 2026</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item read-time">
              <span class="meta-icon"><i class="fa-solid fa-clock"></i></span>
              <span class="meta-val">5 Min Read</span>
            </div>
          </div>

          <!-- Featured High-Resolution Article Banner -->
          <div class="article-hero-media">
            <img src="/images/DefaultRideImage.jpg" alt="Rear Sweep Rider in Action" class="article-hero-img">
            <div class="article-media-caption">
              The rear sweep maintaining pack cohesion and lane discipline along the interstate corridor.
            </div>
          </div>
        </div>
      </header>

      <!-- Article Editorial Body -->
      <main class="article-body-section">
        <div class="container article-container">
          <div class="article-lead-paragraphs">
            <p class="article-lead-p">
              In motorcycling folklore, everyone wants to ride at the front. The lead rider gets unobstructed clean air, glorious GoPro framing, and the thrill of setting the pace. But ask any veteran road captain who truly determines whether forty motorcycles return home safely, and they will point without hesitation to the very back of the formation: the Sweep Rider.
            </p>
            <p class="article-body-p">
              The sweep rider is not simply the slowest rider; they are usually one of the most mechanically skilled and patient riders in the club. While the lead navigates ahead, the sweep protects the tail from aggressive highway trucks, monitors pack cohesion, and handles mechanical emergencies.
            </p>
          </div>

          <div class="accessory-sections-list">
            <section class="accessory-item-card">
              <div class="accessory-num-badge">01</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Heavy-Duty Tow Strap & Soft Loops</h2>
                <div class="accessory-tag"><i class="fa-solid fa-link"></i> ROADSIDE RECOVERY: EMERGENCY TOWING</div>
                <p class="accessory-desc">
                  Essential for towing immobilized machines out of hazardous blind curves to safe shoulder ground. A sweep never leaves a fallen machine in a traffic lane.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">02</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Mushroom Plug Kit & 12V Mini Inflator</h2>
                <div class="accessory-tag"><i class="fa-solid fa-wrench"></i> TRIAGE: 10-MINUTE PUNCTURE FIX</div>
                <p class="accessory-desc">
                  Fixing tubeless punctures within ten minutes without waiting for roadside assistance, ensuring the entire pack stays on schedule through remote mountain stretches.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">03</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Lithium Jump Starter Pack</h2>
                <div class="accessory-tag"><i class="fa-solid fa-bolt"></i> ELECTRICAL: BATTERY RESCUE</div>
                <p class="accessory-desc">
                  Bringing dead batteries back to life in remote areas after accidental accessory drain or auxiliary light shorts on cold mountain mornings.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">04</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Comprehensive Wilderness Trauma Kit</h2>
                <div class="accessory-tag"><i class="fa-solid fa-kit-medical"></i> FIRST AID: TOURNIQUETS & PRESSURE DRESSINGS</div>
                <p class="accessory-desc">
                  Equipped with tourniquets, hemostatic gauze, pressure bandages, and burn dressings. The sweep rider is trained to respond calmly when incidents occur.
                </p>
              </div>
            </section>
          </div>

          <!-- Editorial Highlight Break -->
          <div class="article-callout-panel">
            <div class="callout-inner">
              <div class="callout-icon"><i class="fa-solid fa-people-group"></i></div>
              <div>
                <h3 class="callout-heading">Taming Toll Plaza Chaos</h3>
                <p class="callout-text">
                  When a convoy passes through highway toll plazas, slower riders inevitably get separated by barriers. A disciplined sweep rider holds station, rounds up separated riders into a regroup pocket, and signals the lead that the formation is whole again.
                </p>
              </div>
            </div>
          </div>

          <!-- Conclusion Section -->
          <div class="article-conclusion-block">
            <h3 class="conclusion-heading">The Weight of Bringing Everyone Home</h3>
            <p class="article-body-p">
              The glamour of speed fades quickly on a cold highway; what remains is the brotherhood of knowing that no rider is left behind. When the final engine clicks off in the destination driveway, the sweep rider's quiet nod carries more honor than any trophy on a mantle.
            </p>
          </div>

          <!-- Article Share / Back Footer -->
          <div class="article-footer-nav">
            <a href="/blogs" class="btn btn-outline-white" data-internal-route>
              <i class="fa-solid fa-arrow-left"></i> ALL DISPATCHES
            </a>
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-mobile-screen-button"></i> GET WingmanX APP
            </a>
          </div>
        </div>
      </main>

      <!-- Related Dispatches Strip -->
      <section class="related-dispatches-section">
        <div class="container article-container">
          <div class="related-header">
            <span class="sub-tag">MORE FROM THE RIDER JOURNAL</span>
            <h3 class="related-title">CONTINUE READING</h3>
          </div>
          <div class="related-articles-grid">
            <a href="/blogs/the-last-rider-in-the-pack" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/oem/oem_rider_rain_taillight.jpg" alt="The Last Rider in the Pack">
              </div>
              <div class="related-body">
                <span class="related-badge">RIDER STORIES</span>
                <h4>The Last Rider in the Pack</h4>
                <span class="read-more-link">READ STORY <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
            <a href="/blogs/mastering-the-monsoon-ghats" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/Banner_2482026145513_12739.jpg" alt="Mastering the Monsoon Ghats">
              </div>
              <div class="related-body">
                <span class="related-badge">SAFETY & TECHNIQUE</span>
                <h4>Mastering the Monsoon Ghats: 7 Rules</h4>
                <span class="read-more-link">READ DISPATCH <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- App Download Final CTA -->
      <section class="article-download-cta">
        <div class="container text-center">
          <h3 class="cta-title">TAKE WingmanX ON YOUR NEXT RUN.</h3>
          <p class="cta-desc">Live formation tracking, checkpoint alerts, and offline topo maps built for motorcyclists.</p>
          <div class="cta-actions">
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-download"></i> DOWNLOAD FREE ON IOS & ANDROID
            </a>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 6D. DEDICATED BLOG ARTICLE — SPITI VALLEY UNFILTERED
  // =========================================================================
  blogSpitiValley: () => `
    <div class="journal-article-layout">
      <!-- Breadcrumb & Back Navigation -->
      <nav class="article-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container article-container">
          <a href="/blogs" class="back-to-journal-link" data-internal-route>
            <i class="fa-solid fa-arrow-left"></i> BACK TO THE RIDER JOURNAL
          </a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">SPITI VALLEY UNFILTERED</span>
        </div>
      </nav>

      <!-- Article Header & Hero Image -->
      <header class="article-header-section">
        <div class="container article-container">
          <div class="article-category-badge">
            <i class="fa-solid fa-mountain"></i> EXPEDITIONS & HIGH ALTITUDE
          </div>
          <h1 class="article-main-title">
            Spiti Valley Unfiltered: Preparing Your Machine for Extreme Altitude
          </h1>
          <div class="article-meta-row">
            <div class="meta-item author">
              <span class="meta-icon"><i class="fa-solid fa-user-pen"></i></span>
              <span class="meta-val">By Amit Patil • High Altitude Route Consultant</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item date">
              <span class="meta-icon"><i class="fa-solid fa-calendar-days"></i></span>
              <span class="meta-val">22 Jan, 2026</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item read-time">
              <span class="meta-icon"><i class="fa-solid fa-clock"></i></span>
              <span class="meta-val">10 Min Read</span>
            </div>
          </div>

          <!-- Featured High-Resolution Article Banner -->
          <div class="article-hero-media">
            <img src="/images/1771498769_6996ed1197973.jpg" alt="Machine Preparation for High Altitude Expedition" class="article-hero-img">
            <div class="article-media-caption">
              Pre-ride telemetry check and mechanical inspection before ascending Kunzum La pass.
            </div>
          </div>
        </div>
      </header>

      <!-- Article Editorial Body -->
      <main class="article-body-section">
        <div class="container article-container">
          <div class="article-lead-paragraphs">
            <p class="article-lead-p">
              Spiti Valley sits at an average altitude exceeding 12,000 feet, climbing to over 15,000 feet at Kunzum La. The thin air, glacial river washouts, sub-zero morning temperatures, and zero-connectivity gorges demand meticulous mechanical and psychological preparation.
            </p>
            <p class="article-body-p">
              A breakdown in the trans-Himalayas is not a simple inconvenience; it is a serious logistical emergency. Here is the operational checklist forged across multiple high-altitude expeditions.
            </p>
          </div>

          <div class="accessory-sections-list">
            <section class="accessory-item-card">
              <div class="accessory-num-badge">01</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Thin Air Reality: Oxygen Deprivation</h2>
                <div class="accessory-tag"><i class="fa-solid fa-wind"></i> 40% LESS OXYGEN AT KUNZUM LA</div>
                <p class="accessory-desc">
                  Atmospheric density drops by roughly 3% per 1,000 feet. At Kunzum La, your engine breathes roughly 40% less oxygen than at sea level. Modern fuel-injected motorcycles adjust via MAP and O2 sensors, but a dirty air filter severely chokes performance. Clean or replace your air filter immediately before entering the valley from Shimla or Manali.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">02</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Suspension & Preload Calibration</h2>
                <div class="accessory-tag"><i class="fa-solid fa-sliders"></i> DAMPING: 2-CLICK PRELOAD INCREASE</div>
                <p class="accessory-desc">
                  The road from Kaza through Losar to Gramphu features jagged slate scree and deep water crossings (nallahs) like Malling and Chhota Dara. Increase rear suspension preload by 2 clicks to prevent bottoming out against submerged boulders when carrying loaded panniers.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">03</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Offline Topographic Caching</h2>
                <div class="accessory-tag"><i class="fa-solid fa-map-location-dot"></i> NAVIGATION: CELLULAR DEAD-ZONE READY</div>
                <p class="accessory-desc">
                  From Pooh through Tabo, Kaza, and Losar, commercial cellular towers drop to absolute zero. Caching full vector topographic maps into WingmanX before departure ensures your GPS track, waypoint elevation, and pass apex distances remain available without mobile internet.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">04</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Sub-Zero Battery & Cold-Start Protocol</h2>
                <div class="accessory-tag"><i class="fa-solid fa-snowflake"></i> ELECTRICAL: CRANKING AMPS PRESERVATION</div>
                <p class="accessory-desc">
                  At minus eight degrees Celsius in Kaza, engine oil thickens into syrup and chemical battery output plunges by 40%. Disconnect your battery terminal overnight or use a lithium jump-starter pack kept inside your sleeping bag to guarantee ignition at dawn.
                </p>
              </div>
            </section>
          </div>

          <!-- Editorial Highlight Break -->
          <div class="article-callout-panel">
            <div class="callout-inner">
              <div class="callout-icon"><i class="fa-solid fa-mountain-sun"></i></div>
              <div>
                <h3 class="callout-heading">Altitude Respects Only Preparation</h3>
                <p class="callout-text">
                  The mountains do not compromise. When you carry spare throttle cables, clean air filters, and disciplined throttle hands, Spiti turns from an ordeal into the ride of your life.
                </p>
              </div>
            </div>
          </div>

          <!-- Conclusion Section -->
          <div class="article-conclusion-block">
            <h3 class="conclusion-heading">Conquering the High Desert</h3>
            <p class="article-body-p">
              Standing on the wind-whipped crest of Kunzum La surrounded by prayer flags, with the Spiti River shimmering thousands of feet below like a ribbon of quicksilver, you understand why we endure the cold and the dust. Preparation gives you the privilege of standing where few ever travel.
            </p>
          </div>

          <!-- Article Share / Back Footer -->
          <div class="article-footer-nav">
            <a href="/blogs" class="btn btn-outline-white" data-internal-route>
              <i class="fa-solid fa-arrow-left"></i> ALL DISPATCHES
            </a>
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-mobile-screen-button"></i> GET WingmanX APP
            </a>
          </div>
        </div>
      </main>

      <!-- Related Dispatches Strip -->
      <section class="related-dispatches-section">
        <div class="container article-container">
          <div class="related-header">
            <span class="sub-tag">MORE FROM THE RIDER JOURNAL</span>
            <h3 class="related-title">CONTINUE READING</h3>
          </div>
          <div class="related-articles-grid">
            <a href="/blogs/top-10-must-have-accessories-for-every-rider" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/1771583990_699839f614e82.jpg" alt="Top 10 Accessories for Every Rider">
              </div>
              <div class="related-body">
                <span class="related-badge">GEAR & SAFETY</span>
                <h4>Top 10 Must-Have Accessories for Every Rider</h4>
                <span class="read-more-link">READ DISPATCH <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
            <a href="/blogs/somewhere-between-home-and-the-mountains" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/sunset-motorcycle-rider.jpg" alt="Somewhere Between Home and the Mountains">
              </div>
              <div class="related-body">
                <span class="related-badge">SOLO REFLECTIONS</span>
                <h4>Somewhere Between Home & Mountains</h4>
                <span class="read-more-link">READ STORY <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- App Download Final CTA -->
      <section class="article-download-cta">
        <div class="container text-center">
          <h3 class="cta-title">TAKE WingmanX ON YOUR NEXT RUN.</h3>
          <p class="cta-desc">Live formation tracking, checkpoint alerts, and offline topo maps built for motorcyclists.</p>
          <div class="cta-actions">
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-download"></i> DOWNLOAD FREE ON IOS & ANDROID
            </a>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 6E. DEDICATED BLOG ARTICLE — THE RIDE WE ALMOST DIDN'T TAKE
  // =========================================================================
  blogRideAlmostDidntTake: () => `
    <div class="journal-article-layout">
      <!-- Breadcrumb & Back Navigation -->
      <nav class="article-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container article-container">
          <a href="/blogs" class="back-to-journal-link" data-internal-route>
            <i class="fa-solid fa-arrow-left"></i> BACK TO THE RIDER JOURNAL
          </a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">THE RIDE WE ALMOST DIDN'T TAKE</span>
        </div>
      </nav>

      <!-- Article Header & Hero Image -->
      <header class="article-header-section">
        <div class="container article-container">
          <div class="article-category-badge">
            <i class="fa-solid fa-hand-holding-heart"></i> RIDER STORIES & BROTHERHOOD
          </div>
          <h1 class="article-main-title">
            The Ride We Almost Didn’t Take
          </h1>
          <div class="article-meta-row">
            <div class="meta-item author">
              <span class="meta-icon"><i class="fa-solid fa-user-pen"></i></span>
              <span class="meta-val">By Kabir Mehta • Tourer & Contributor</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item date">
              <span class="meta-icon"><i class="fa-solid fa-calendar-days"></i></span>
              <span class="meta-val">14 Mar, 2026</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item read-time">
              <span class="meta-icon"><i class="fa-solid fa-clock"></i></span>
              <span class="meta-val">4 Min Read</span>
            </div>
          </div>

          <!-- Featured High-Resolution Article Banner -->
          <div class="article-hero-media">
            <img src="/images/35970.jpg" alt="The Ride We Almost Didn't Take" class="article-hero-img">
            <div class="article-media-caption">
              Roadside camaraderie and shared laughter after pushing through mountain rain and mechanical triage.
            </div>
          </div>
        </div>
      </header>

      <!-- Article Editorial Body -->
      <main class="article-body-section">
        <div class="container article-container">
          <div class="article-lead-paragraphs">
            <p class="article-lead-p">
              At 4:18 AM, the group chat was an inch from flatlining. Rain was hammering the window air-conditioner in violent, rattling sheets, the weather radar on the phone was glowing angry crimson across the Western Ghats, and the first message had already landed on screen: <em>“Guys, honestly… look at the sky. Should we push this to next weekend?”</em>
            </p>
            <p class="article-body-p">
              Five minutes passed without a response. That heavy, familiar silence when everyone secretly hopes someone else will pull the plug. Outside, the streetlights reflected in murky puddles across the driveway. Your riding boots are already on, your base layer feels warm against the pre-dawn chill, and your tank bag is packed with spare dry socks, a torque wrench, and waterproof camera housing. Yet the bed behind you still feels warm, and common sense whispers that sleeping in is the only rational choice.
            </p>
          </div>

          <div class="accessory-sections-list">
            <section class="accessory-item-card">
              <div class="accessory-num-badge">01</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Fuel Pump Standoff</h2>
                <div class="accessory-tag"><i class="fa-solid fa-gas-pump"></i> 05:15 AM • HIGHWAY MILE 00</div>
                <p class="accessory-desc">
                  It took a single, curt message from Dev to break the deadlock: <em>“I’m at the highway fuel pump. Engine’s idling. If nobody shows by five-thirty, I’m riding solo.”</em> That was all it took. Twenty minutes later, three motorcycles stood under the flickering fluorescent canopy of the HP petrol bunk on the outskirts of Pune. Water dripped steadily from our rain jackets onto the greasy forecourt concrete. We stared at the black sky ahead, steaming paper cups of cutting chai burning through damp gloves. Nobody spoke about the forecast. We just pulled our helmet straps tight, clicked visors shut, and thumbed the starter buttons.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">02</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Into the Sahyadri Storm</h2>
                <div class="accessory-tag"><i class="fa-solid fa-cloud-showers-heavy"></i> 06:45 AM • THE ASCENT</div>
                <p class="accessory-desc">
                  The first sixty kilometers were pure grit. Spray from heavy container trucks blurred the dark highway into an oil-slicked haze. Water worked its way past collar seams and pooled inside boot linings. Sid was riding sweep on his street twin, his yellow auxiliary light carving through the spray behind me like a reassuring lighthouse. On the climb toward Varandha Ghat, the storm peaked. Waterfalls burst directly across the tarmac, tumbling down black basalt walls and washing river sand into the switchbacks. Every apex demanded total concentration—smooth throttle, feather-light inputs, and blind trust in the tire compound beneath us. There was no scenery, no photography, just the rhythmic sweep of headlights against dense fog.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">03</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Sputter and the Wrench</h2>
                <div class="accessory-tag"><i class="fa-solid fa-wrench"></i> 08:20 AM • MOUNTAIN PASS TRIAGE</div>
                <p class="accessory-desc">
                  Just past the pass summit, Sid’s motorcycle choked, backfired, and rolled to a silent halt beside a ruined stone watchtower. Water had seeped into an unshielded spark plug boot. An hour earlier, on a warm bed, this breakdown would have been the ultimate ‘I told you so.’ But here, shivering under a leaking tin awning while rain drummed like artillery on the corrugated roof, something else took over. Dev whipped out a pocket multi-tool; I passed the contact cleaner and a dry microfiber cloth. We took turns shielding the open engine with an unfolded emergency tarp while laughing at how utterly ridiculous we looked—three grown men soaked to the bone, elbow-deep in grease on a deserted mountain pass.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">04</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Break in the Clouds</h2>
                <div class="accessory-tag"><i class="fa-solid fa-sun"></i> 09:10 AM • THE TURNING POINT</div>
                <p class="accessory-desc">
                  When the twin fired back to life with a deep, throaty growl, something miraculous happened. The wind dropped. The dense wall of grey fog that had smothered the valley began to tear apart. Within ten minutes, great spears of golden morning sunlight pierced the cloud bank, illuminating emerald green terrace fields five thousand feet below us. Steam rose off our hot exhaust headers in curling white plumes. The smell of wet earth, crushed eucalyptus, and hot two-stroke oil filled the air. We stood on the edge of the parapet in stunned, reverent silence. Had we stayed in bed, that entire mountain would have existed without us.
                </p>
              </div>
            </section>
          </div>

          <!-- Editorial Highlight Break -->
          <div class="article-callout-panel">
            <div class="callout-inner">
              <div class="callout-icon"><i class="fa-solid fa-quote-left"></i></div>
              <div>
                <h3 class="callout-heading">The Unspoken Rider Code</h3>
                <p class="callout-text">
                  The weather app tells you what the sky is doing; it will never tell you what the road can give you. When riders push through hesitation together, convenience dies and genuine brotherhood begins.
                </p>
              </div>
            </div>
          </div>

          <!-- Conclusion Section -->
          <div class="article-conclusion-block">
            <h3 class="conclusion-heading">The Road Remembers What Comfort Forgets</h3>
            <p class="article-body-p">
              By late afternoon, we were sitting on plastic chairs outside a tiny coastal fish stall in Dapoli, our jackets drying over wooden fence rails in the salt breeze. The tires were speckled with mountain mud, our faces were streaked with road grime, and our muscles ached with that delicious, deep-seated fatigue known only to riders who have wrestled the elements and won.
            </p>
            <p class="article-body-p">
              Years from now, none of us will remember the Saturdays we spent comfortably asleep under dry blankets. We will never talk about the chores we finished or the clean socks we kept dry. But we will talk about the morning we almost cancelled—the cold fuel pump at five AM, the spark plug triage in the rain, and the golden sunlight bursting through the clouds when we dared to roll the throttle anyway. The rides you almost don't take will always be the ones you can never forget.
            </p>
          </div>

          <!-- Article Share / Back Footer -->
          <div class="article-footer-nav">
            <a href="/blogs" class="btn btn-outline-white" data-internal-route>
              <i class="fa-solid fa-arrow-left"></i> ALL DISPATCHES
            </a>
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-mobile-screen-button"></i> GET WingmanX APP
            </a>
          </div>
        </div>
      </main>

      <!-- Related Dispatches Strip -->
      <section class="related-dispatches-section">
        <div class="container article-container">
          <div class="related-header">
            <span class="sub-tag">MORE FROM THE RIDER JOURNAL</span>
            <h3 class="related-title">CONTINUE READING</h3>
          </div>
          <div class="related-articles-grid">
            <a href="/blogs/somewhere-between-home-and-the-mountains" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/sunset-motorcycle-rider.jpg" alt="Somewhere Between Home and the Mountains">
              </div>
              <div class="related-body">
                <span class="related-badge">SOLO REFLECTIONS</span>
                <h4>Somewhere Between Home & Mountains</h4>
                <span class="read-more-link">READ STORY <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
            <a href="/blogs/the-last-rider-in-the-pack" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/oem/oem_rider_rain_taillight.jpg" alt="The Last Rider in the Pack">
              </div>
              <div class="related-body">
                <span class="related-badge">PACK BROTHERHOOD</span>
                <h4>The Last Rider in the Pack</h4>
                <span class="read-more-link">READ STORY <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- App Download Final CTA -->
      <section class="article-download-cta">
        <div class="container text-center">
          <h3 class="cta-title">TAKE WingmanX ON YOUR NEXT RUN.</h3>
          <p class="cta-desc">Live formation tracking, checkpoint alerts, and offline topo maps built for motorcyclists.</p>
          <div class="cta-actions">
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-download"></i> DOWNLOAD FREE ON IOS & ANDROID
            </a>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 6F. DEDICATED BLOG ARTICLE — SOMEWHERE BETWEEN HOME AND THE MOUNTAINS
  // =========================================================================
  blogSomewhereBetweenHomeAndMountains: () => `
    <div class="journal-article-layout">
      <!-- Breadcrumb & Back Navigation -->
      <nav class="article-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container article-container">
          <a href="/blogs" class="back-to-journal-link" data-internal-route>
            <i class="fa-solid fa-arrow-left"></i> BACK TO THE RIDER JOURNAL
          </a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">SOMEWHERE BETWEEN HOME AND MOUNTAINS</span>
        </div>
      </nav>

      <!-- Article Header & Hero Image -->
      <header class="article-header-section">
        <div class="container article-container">
          <div class="article-category-badge">
            <i class="fa-solid fa-compass"></i> SOLO JOURNEYS & INTROSPECTION
          </div>
          <h1 class="article-main-title">
            Somewhere Between Home and the Mountains
          </h1>
          <div class="article-meta-row">
            <div class="meta-item author">
              <span class="meta-icon"><i class="fa-solid fa-user-pen"></i></span>
              <span class="meta-val">By Ananya Sen • Long-Distance Tourer</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item date">
              <span class="meta-icon"><i class="fa-solid fa-calendar-days"></i></span>
              <span class="meta-val">02 Apr, 2026</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item read-time">
              <span class="meta-icon"><i class="fa-solid fa-clock"></i></span>
              <span class="meta-val">4 Min Read</span>
            </div>
          </div>

          <!-- Featured High-Resolution Article Banner -->
          <div class="article-hero-media">
            <img src="/images/sunset-motorcycle-rider.jpg" alt="Somewhere Between Home and the Mountains" class="article-hero-img">
            <div class="article-media-caption">
              A solo rider pauses on a quiet Sahyadri ridge as dusk turns the highway into gold.
            </div>
          </div>
        </div>
      </header>

      <!-- Article Editorial Body -->
      <main class="article-body-section">
        <div class="container article-container">
          <div class="article-lead-paragraphs">
            <p class="article-lead-p">
              There is a strange, invisible boundary line that every long-distance motorcyclist crosses, usually somewhere around the three-hundredth kilometer. You are no longer leaving home, but you are still nowhere near the mountains. You are simply suspended in the vast, roaring middle—an anonymous silhouette cruising at ninety kilometers per hour through a landscape that does not know your name.
            </p>
            <p class="article-body-p">
              Leaving a city on two wheels is always chaotic. You fight through the morning ring road traffic, dodge impatient cabs, and check your mirrors compulsively. Inside your helmet, your mind is still crowded with yesterday's noise: unresolved arguments, pending project deadlines, unpaid invoices, and the domestic rhythm you abruptly left behind at dawn. But as the highway stretches outward and the apartment complexes yield to open scrubland, a quiet alchemy begins to take place.
            </p>
          </div>

          <div class="accessory-sections-list">
            <section class="accessory-item-card">
              <div class="accessory-num-badge">01</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Meditation of Steady Velocity</h2>
                <div class="accessory-tag"><i class="fa-solid fa-gauge-high"></i> KM 180 • THE SHIFTING MIND</div>
                <p class="accessory-desc">
                  Motorcycling is often romanticized as an adrenaline rush, but touring is actually an act of deep contemplation. At highway speeds, the constant rush of wind across your helmet visor acts like white noise, drowning out the shallow anxieties of urban life. The repetitive physical rhythm—the gentle roll of the wrist, the counter-steer into long sweeping bends, the periodic glance at engine temperatures—demands just enough focus to quiet your internal monologue. You stop thinking about where you need to be and start existing purely where you are.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">02</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Tea Stall Under the Banyan Tree</h2>
                <div class="accessory-tag"><i class="fa-solid fa-mug-hot"></i> KM 340 • UNEXPECTED ENCOUNTERS</div>
                <p class="accessory-desc">
                  Somewhere past Satara, taking an unplanned diversion onto an old state highway to escape truck traffic, I pulled up under the sprawling canopy of an ancient banyan tree. An old man in a faded kurta was boiling tea in a blackened brass vessel over tamarind charcoal. He didn’t ask where I was coming from or how much the motorcycle cost. He simply handed me a glass of scalding chai, took a slow drag from a bidi, and pointed toward the blue ridgelines shimmering on the northern horizon. <em>“Wind will pick up after noon near the river,”</em> he said softly. <em>“Keep your eyes on the trees.”</em> That was it. A three-minute exchange with a complete stranger that carried more grounded human warmth than a month of sterile office emails.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">03</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Changing Texture of the Air</h2>
                <div class="accessory-tag"><i class="fa-solid fa-wind"></i> KM 480 • SENSORY AWAKENING</div>
                <p class="accessory-desc">
                  In a car, travel is insulated; you view the world through tinted double-glazed windows at a regulated twenty-two degrees Celsius. On a motorcycle, you drink the geography directly through your pores. You know the exact moment you leave the dry Deccan plateau because the air cools by five degrees within the space of half a kilometer. The scent shifts abruptly from baked red soil and diesel exhaust to the sharp, wet fragrance of pine resin and crushed ferns. Your fingers adjust on the grips, your visor cracks open a notch to welcome the mountain chill, and your chest expands with a sensation that feels dangerously close to total freedom.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">04</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Foothill Sunset</h2>
                <div class="accessory-tag"><i class="fa-solid fa-mountain"></i> KM 590 • THE GATEWAY</div>
                <p class="accessory-desc">
                  By late afternoon, the first real foothills loomed out of the haze. The low sun cast long, dramatic shadows across the asphalt, turning the yellow centerline into a strip of burning gold. I pulled the bike onto a gravel overlook, cut the ignition, and listened to the satisfying metallic ticking of cooling exhaust pipes in the silence. The valley below was blanketed in violet dusk; the high peaks ahead were still crowned in pink light. In that quiet moment, standing alone beside a machine that had carried me six hundred kilometers without a complaint, the weight I had been carrying for six months simply evaporated into the thin mountain air.
                </p>
              </div>
            </section>
          </div>

          <!-- Editorial Highlight Break -->
          <div class="article-callout-panel">
            <div class="callout-inner">
              <div class="callout-icon"><i class="fa-solid fa-compass"></i></div>
              <div>
                <h3 class="callout-heading">The Real Purpose of the Journey</h3>
                <p class="callout-text">
                  We tell ourselves we ride to reach the destination—the high pass, the remote lake, the mountain peak. But the truth is simpler: the transformation happens in the quiet miles in between, where the road strips away everything artificial.
                </p>
              </div>
            </div>
          </div>

          <!-- Conclusion Section -->
          <div class="article-conclusion-block">
            <h3 class="conclusion-heading">The Silence Inside the Helmet</h3>
            <p class="article-body-p">
              People who don’t ride often ask how we tolerate the exhaustion, the rain, the sore muscles, and the hours of solitary isolation. They imagine a motorcycle journey as an endurance test to be survived. What they cannot comprehend is that the isolation is not a drawback; it is the entire medicine.
            </p>
            <p class="article-body-p">
              Somewhere out there on that lonely ribbon of asphalt, halfway between the home you left and the mountains you seek, the clutter of modern life recedes until only the essential remains: your breath, the machine, the road, and the sky. You don't ride to escape who you are; you ride to remember who you were before the world told you who to be.
            </p>
          </div>

          <!-- Article Share / Back Footer -->
          <div class="article-footer-nav">
            <a href="/blogs" class="btn btn-outline-white" data-internal-route>
              <i class="fa-solid fa-arrow-left"></i> ALL DISPATCHES
            </a>
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-mobile-screen-button"></i> GET WingmanX APP
            </a>
          </div>
        </div>
      </main>

      <!-- Related Dispatches Strip -->
      <section class="related-dispatches-section">
        <div class="container article-container">
          <div class="related-header">
            <span class="sub-tag">MORE FROM THE RIDER JOURNAL</span>
            <h3 class="related-title">CONTINUE READING</h3>
          </div>
          <div class="related-articles-grid">
            <a href="/blogs/the-ride-we-almost-didnt-take" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/35970.jpg" alt="The Ride We Almost Didnt Take">
              </div>
              <div class="related-body">
                <span class="related-badge">RIDER STORIES</span>
                <h4>The Ride We Almost Didn't Take</h4>
                <span class="read-more-link">READ STORY <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
            <a href="/blogs/the-last-rider-in-the-pack" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/oem/oem_rider_rain_taillight.jpg" alt="The Last Rider in the Pack">
              </div>
              <div class="related-body">
                <span class="related-badge">PACK BROTHERHOOD</span>
                <h4>The Last Rider in the Pack</h4>
                <span class="read-more-link">READ STORY <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- App Download Final CTA -->
      <section class="article-download-cta">
        <div class="container text-center">
          <h3 class="cta-title">TAKE WingmanX ON YOUR NEXT RUN.</h3>
          <p class="cta-desc">Live formation tracking, checkpoint alerts, and offline topo maps built for motorcyclists.</p>
          <div class="cta-actions">
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-download"></i> DOWNLOAD FREE ON IOS & ANDROID
            </a>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 6G. DEDICATED BLOG ARTICLE — THE LAST RIDER IN THE PACK
  // =========================================================================
  blogLastRiderInPack: () => `
    <div class="journal-article-layout">
      <!-- Breadcrumb & Back Navigation -->
      <nav class="article-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container article-container">
          <a href="/blogs" class="back-to-journal-link" data-internal-route>
            <i class="fa-solid fa-arrow-left"></i> BACK TO THE RIDER JOURNAL
          </a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">THE LAST RIDER IN THE PACK</span>
        </div>
      </nav>

      <!-- Article Header & Hero Image -->
      <header class="article-header-section">
        <div class="container article-container">
          <div class="article-category-badge">
            <i class="fa-solid fa-shield-halved"></i> PACK BROTHERHOOD & CONVOY DISCIPLINE
          </div>
          <h1 class="article-main-title">
            The Last Rider in the Pack
          </h1>
          <div class="article-meta-row">
            <div class="meta-item author">
              <span class="meta-icon"><i class="fa-solid fa-user-pen"></i></span>
              <span class="meta-val">By Vikramaditya Joshi • Road Captain</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item date">
              <span class="meta-icon"><i class="fa-solid fa-calendar-days"></i></span>
              <span class="meta-val">18 May, 2026</span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item read-time">
              <span class="meta-icon"><i class="fa-solid fa-clock"></i></span>
              <span class="meta-val">4 Min Read</span>
            </div>
          </div>

          <!-- Featured High-Resolution Article Banner -->
          <div class="article-hero-media">
            <img src="/images/oem/oem_rider_rain_taillight.jpg" alt="The Last Rider in the Pack" class="article-hero-img">
            <div class="article-media-caption">
              A sweep rider holds the trailing buffer through mist and rain, guarding the tail of the pack.
            </div>
          </div>
        </div>
      </header>

      <!-- Article Editorial Body -->
      <main class="article-body-section">
        <div class="container article-container">
          <div class="article-lead-paragraphs">
            <p class="article-lead-p">
              If you want to feel fast, ride up front right behind the road captain. If you want to understand the true weight of brotherhood on two wheels, drop your speed, let the formation rumble past, and take your station at the very back of the pack.
            </p>
            <p class="article-body-p">
              The sweep rider—the tail gunner, the rear marshal, the guardian of the convoy—holds the most thankless and vital job on any motorcycle expedition. In motorcycle photography and social media reels, nobody looks at the sweep. There are no dramatic action shots of the tail; the GoPro cameras are all pointed forward at the shiny chrome and roaring exhausts of the lead group. But ask any veteran road captain who truly carries the safety of forty lives over eight hundred kilometers of unforgiving highway, and they will point without hesitation to the lone rider bringing up the rear.
            </p>
          </div>

          <div class="accessory-sections-list">
            <section class="accessory-item-card">
              <div class="accessory-num-badge">01</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Weight on the Rear Fender</h2>
                <div class="accessory-tag"><i class="fa-solid fa-shield-halved"></i> THE SWEEP PHILOSOPHY</div>
                <p class="accessory-desc">
                  Riding sweep is not about riding slow; it requires being one of the fastest, most mechanically competent, and emotionally patient riders in the pack. When a reckless truck cuts into the convoy formation, the sweep must move outward to hold the lane and shield younger riders. When the pack accelerates out of a toll barrier, the sweep must ride hard to close the accordion gap without panicking the tail. Strapped to the sweep’s tail rack is not weekend clothing, but the heavy artillery of survival: a twelve-volt tire inflator, mushroom plug kits, a lithium jump-starter, heavy-duty tow straps, and a comprehensive wilderness trauma kit.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">02</div>
              <div class="accessory-details">
                <h2 class="accessory-title">Reading the Dance of Taillights</h2>
                <div class="accessory-tag"><i class="fa-solid fa-eye"></i> PACK TELEMETRY & INTUITION</div>
                <p class="accessory-desc">
                  From the back, the convoy is an organic, breathing organism. You learn to read the subconscious body language of every rider fifty meters ahead. You spot the subtle stiffness in the shoulders of the novice tourer who is gripping the handlebars too tightly in the wet; you notice the loose luggage strap fluttering dangerously near the rear sprocket of bike number seven; you detect the faint wobble in line choice that signals rider fatigue long before the rider himself realizes he needs to pull over. The sweep watches over them like a shepherd, matching their rhythm and holding a steady safety envelope behind them.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">03</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Breakdown in the Dark</h2>
                <div class="accessory-tag"><i class="fa-solid fa-wrench"></i> 09:40 PM • STATE HIGHWAY 66</div>
                <p class="accessory-desc">
                  Last winter, descending through an unlit forest corridor outside Chiplun, a jagged shard of scrap steel tore through the rear tire of a young rider named Rohan on his first long-distance tour. His bike fishtailed violently before he managed to muscle it onto the gravel shoulder. The main convoy, eager for dinner at the valley hotel, vanished around the dark mountain shoulder. In the pitch black, with dense fog rolling through the teak trees and heavy trucks roaring past inches away, Rohan was trembling with panic and mortification. <em>‘I ruined the ride for everyone,’</em> he stammered, his hands shaking so hard he couldn’t take his helmet off.
                </p>
              </div>
            </section>

            <section class="accessory-item-card">
              <div class="accessory-num-badge">04</div>
              <div class="accessory-details">
                <h2 class="accessory-title">The Unbreakable Promise</h2>
                <div class="accessory-tag"><i class="fa-solid fa-handshake"></i> ROADSIDE RESCUE</div>
                <p class="accessory-desc">
                  I killed my engine, clicked on my amber hazard beacon, and put a firm hand on his shoulder. <em>“Take a breath, kid. Nobody gets left behind on this road. That’s why I’m here. Hold the flashlight.”</em> Eight minutes later, the tire was plugged, the portable inflator had hissed thirty-four PSI back into the carcass, and we were back on the road. We didn't rush. We rode in close staggered formation through the dark, my headlight illuminating the asphalt directly ahead of his front tire, guiding him through every pothole and hairpin bend down to the valley floor.
                </p>
              </div>
            </section>
          </div>

          <!-- Editorial Highlight Break -->
          <div class="article-callout-panel">
            <div class="callout-inner">
              <div class="callout-icon"><i class="fa-solid fa-heart-pulse"></i></div>
              <div>
                <h3 class="callout-heading">The Silent Pact of the Pack</h3>
                <p class="callout-text">
                  Every rider who leaves home makes an unspoken promise to the people waiting for them: that they will return. The sweep rider is the person who ensures that promise is kept, no matter how cold the night or how broken the tarmac.
                </p>
              </div>
            </div>
          </div>

          <!-- Conclusion Section -->
          <div class="article-conclusion-block">
            <h3 class="conclusion-heading">The Purest Feeling in Motorcycling</h3>
            <p class="article-body-p">
              When we finally rolled into the hotel courtyard at ten-thirty, the lead group was waiting by the porch. As Rohan parked his motorcycle and was enveloped by high-fives and steaming bowls of dal, the road captain walked over to my bike. He didn’t offer a lengthy speech. He just handed me a glass of hot tea, slapped my shoulder, and gave that single, slow nod that means everything in this community.
            </p>
            <p class="article-body-p">
              The world will always celebrate the riders who lead the pack and cross the pass first. But the soul of motorcycling will forever belong to the rear, where the exhaust fumes are thickest, the hours are longest, and the responsibility never rests. Because when the ride is over and your engine finally ticks cool under the stars, the greatest feeling in the world isn’t that you rode fast—it’s knowing that every single brother who set off with you is safely home.
            </p>
          </div>

          <!-- Article Share / Back Footer -->
          <div class="article-footer-nav">
            <a href="/blogs" class="btn btn-outline-white" data-internal-route>
              <i class="fa-solid fa-arrow-left"></i> ALL DISPATCHES
            </a>
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-mobile-screen-button"></i> GET WingmanX APP
            </a>
          </div>
        </div>
      </main>

      <!-- Related Dispatches Strip -->
      <section class="related-dispatches-section">
        <div class="container article-container">
          <div class="related-header">
            <span class="sub-tag">MORE FROM THE RIDER JOURNAL</span>
            <h3 class="related-title">CONTINUE READING</h3>
          </div>
          <div class="related-articles-grid">
            <a href="/blogs/the-art-of-the-sweep" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/DefaultRideImage.jpg" alt="The Art of the Sweep">
              </div>
              <div class="related-body">
                <span class="related-badge">COMMUNITY & PACK</span>
                <h4>The Art of the Sweep</h4>
                <span class="read-more-link">READ DISPATCH <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
            <a href="/blogs/the-ride-we-almost-didnt-take" class="related-card glass-card" data-internal-route>
              <div class="related-img-frame">
                <img src="/images/35970.jpg" alt="The Ride We Almost Didnt Take">
              </div>
              <div class="related-body">
                <span class="related-badge">RIDER STORIES</span>
                <h4>The Ride We Almost Didn't Take</h4>
                <span class="read-more-link">READ STORY <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- App Download Final CTA -->
      <section class="article-download-cta">
        <div class="container text-center">
          <h3 class="cta-title">TAKE WingmanX ON YOUR NEXT RUN.</h3>
          <p class="cta-desc">Live formation tracking, checkpoint alerts, and offline topo maps built for motorcyclists.</p>
          <div class="cta-actions">
            <a href="/#app-download" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-download"></i> DOWNLOAD FREE ON IOS & ANDROID
            </a>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 7. OUR TESTIMONIALS = THE PEOPLE
  // Composition: Quotes dominate the visual hierarchy in large horizontal/stacked editorial panels
  // =========================================================================
  testimonials: () => `
    <div class="testimonials-page-layout">
      <!-- Testimonials Hero -->
      <section class="testimonials-hero">
        <div class="container text-center">
          <div class="telemetry-tag mx-auto mb-3"><i class="fa-solid fa-users"></i> VERIFIED RIDER FIELD STORIES</div>
          <h1 class="display-title">WORDS FROM THE TARMAC.</h1>
          <p class="lead-editorial mx-auto" style="max-width: 740px;">
            Authentic experiences from motorcycle club presidents, high-altitude solo tourers, and weekend road captains who rely on WingmanX whenever they flick the side stand up.
          </p>
        </div>
      </section>

      <!-- Large Editorial Testimonial Panels (Quote Dominates) -->
      <section class="testimonials-panels-section">
        <div class="container">
          <!-- Story 1: Club President -->
          <div class="editorial-testimonial-panel glass-card mb-5">
            <div class="quote-sign">“</div>
            <div class="panel-quote-content">
              <div class="panel-rating">★★★★★ <span class="story-terrain-badge">HIGHWAY & TOLL BOTTLENECKS</span></div>
              <blockquote class="panel-quote-text">
                “WingmanX is the single greatest thing to happen to club riding in India. Organizing 40 bikes used to mean 30 minutes of chaos at every toll plaza wondering who took the wrong exit. With WingmanX live beacon radar, the pack glides together like clockwork.”
              </blockquote>
              <div class="panel-rider-signature">
                <div class="rider-sig-avatar">AD</div>
                <div class="rider-sig-meta">
                  <h4>Aniket Deshpande</h4>
                  <span>PRESIDENT, WESTERN RIDERS MC • PUNE</span>
                  <span class="rider-sig-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Triumph Tiger 900 Rally Pro</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Story 2: Incident Response -->
          <div class="editorial-testimonial-panel glass-card mb-5">
            <div class="quote-sign">“</div>
            <div class="panel-quote-content">
              <div class="panel-rating">★★★★★ <span class="story-terrain-badge">GHAT DESCENT & CRASH DETECTION</span></div>
              <blockquote class="panel-quote-text">
                “When I took a spill on loose wet gravel near Lavasa, the automatic crash alert notified the sweep rider behind me within 4 seconds. That speed of response and accurate GPS coordinates is literally life-saving.”
              </blockquote>
              <div class="panel-rider-signature">
                <div class="rider-sig-avatar">GS</div>
                <div class="rider-sig-meta">
                  <h4>Gaurav Sen</h4>
                  <span>WESTERN GHATS TOURER • MUMBAI</span>
                  <span class="rider-sig-bike text-orange"><i class="fa-solid fa-motorcycle"></i> KTM Duke 390</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Story 3: Solo Explorer -->
          <div class="editorial-testimonial-panel glass-card mb-5">
            <div class="quote-sign">“</div>
            <div class="panel-quote-content">
              <div class="panel-rating">★★★★★ <span class="story-terrain-badge">SOLO TOURING & BUDDY DISCOVERY</span></div>
              <blockquote class="panel-quote-text">
                “As a solo woman tourer, the live tracking beacon gives my family complete peace of mind whenever I head into Spiti or Ladakh. And the discovery radar helped me connect with two regular weekend riding buddies in my own neighbourhood who share my cruising velocity.”
              </blockquote>
              <div class="panel-rider-signature">
                <div class="rider-sig-avatar">DN</div>
                <div class="rider-sig-meta">
                  <h4>Divya Nambiar</h4>
                  <span>HIGH ALTITUDE EXPLORER • PUNE</span>
                  <span class="rider-sig-bike text-orange"><i class="fa-solid fa-motorcycle"></i> BMW G 310 GS</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Story 4: High Altitude Dead-Zones -->
          <div class="editorial-testimonial-panel glass-card mb-5">
            <div class="quote-sign">“</div>
            <div class="panel-quote-content">
              <div class="panel-rating">★★★★★ <span class="story-terrain-badge">ZERO CELLULAR COVERAGE CORRIDORS</span></div>
              <blockquote class="panel-quote-text">
                “The offline topo maps worked with zero glitches in Spiti when our cell networks had zero bars for three continuous days. WingmanX is now non-negotiable touring equipment just like my DOT helmet.”
              </blockquote>
              <div class="panel-rider-signature">
                <div class="rider-sig-avatar">MR</div>
                <div class="rider-sig-meta">
                  <h4>Manish Rawat</h4>
                  <span>HIMALAYAN MOTORCYCLE CLUB • DELHI</span>
                  <span class="rider-sig-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Royal Enfield Himalayan 450</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Story 5: Long Haul Legend -->
          <div class="editorial-testimonial-panel glass-card">
            <div class="quote-sign">“</div>
            <div class="panel-quote-content">
              <div class="panel-rating">★★★★★ <span class="story-terrain-badge">INTERSTATE ENDURANCE TOUR</span></div>
              <blockquote class="panel-quote-text">
                “Cross-country touring demands rock-solid telemetry and zero battery drain. During our 4,000 KM national rally, WingmanX delivered uninterrupted pack tracking through every monsoon rainstorm and highway junction without a single hitch.”
              </blockquote>
              <div class="panel-rider-signature">
                <div class="rider-sig-avatar">BK</div>
                <div class="rider-sig-meta">
                  <h4>Baljeet Singh Kochhar</h4>
                  <span>LONG HAUL LEGENDS AWARDEE • ANNUAL AWARDS GALA 2026</span>
                  <span class="rider-sig-bike text-orange"><i class="fa-solid fa-motorcycle"></i> BMW R 1250 GS Adventure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 8. OUR GALLERIES = THE MEMORIES ARCHIVE
  // Composition: Editorial memory wall respecting natural aspect ratios, 2 filters (IMAGES & VIDEOS), lightbox
  // =========================================================================
  galleries: () => `
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

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Western Ghats Convoy Run in lightbox" data-category="images" data-lightbox="/images/DefaultRideImage.jpg" data-lightbox-type="image">
              <img src="/images/DefaultRideImage.jpg" alt="Western Ghats Convoy Run" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ON THE TARMAC</span>
                  <span class="m-loc">WESTERN GHATS • CONVOY FORMATION</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Annual Awards Gala Registration in lightbox" data-category="images" data-lightbox="/images/SVL00520.jpg" data-lightbox-type="image">
              <img src="/images/SVL00520.jpg" alt="Annual Awards Gala Registration" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ANNUAL GALA</span>
                  <span class="m-loc">AWARDS GALA 2026 • RIDER REGISTRATION</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Monsoon Highway Tour in lightbox" data-category="images" data-lightbox="/images/Banner_2482026145513_12739.jpg" data-lightbox-type="image">
              <img src="/images/Banner_2482026145513_12739.jpg" alt="Monsoon Highway Tour" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ON THE TARMAC</span>
                  <span class="m-loc">MONSOON EXPEDITION • SAHYADRI CORRIDOR</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Road Captain Milestone Keynote in lightbox" data-category="images" data-lightbox="/images/SVL01153.jpg" data-lightbox-type="image">
              <img src="/images/SVL01153.jpg" alt="Road Captain Milestone Keynote" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ANNUAL GALA</span>
                  <span class="m-loc">ROAD CAPTAIN MILESTONE ADDRESS</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Wet Weather Reconnaissance in lightbox" data-category="images" data-lightbox="/images/1771572471_69980cf780d1d.jpg" data-lightbox-type="image">
              <img src="/images/1771572471_69980cf780d1d.jpg" alt="Wet Weather Reconnaissance" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ON THE TARMAC</span>
                  <span class="m-loc">WET WEATHER RECON • TAMHINI SWITCHBACKS</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Community Recognition Stage in lightbox" data-category="images" data-lightbox="/images/VJP04722.jpg" data-lightbox-type="image">
              <img src="/images/VJP04722.jpg" alt="Community Recognition Stage" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ANNUAL GALA</span>
                  <span class="m-loc">COMMUNITY HONORS & RECOGNITION</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Machine Staging and Inspection in lightbox" data-category="images" data-lightbox="/images/1771498769_6996ed1197973.jpg" data-lightbox-type="image">
              <img src="/images/1771498769_6996ed1197973.jpg" alt="Machine Staging and Inspection" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ON THE TARMAC</span>
                  <span class="m-loc">DAWN STAGING • PRE-RIDE MACHINE RECON</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Community Fellowship in lightbox" data-category="images" data-lightbox="/images/SVL00582.jpg" data-lightbox-type="image">
              <img src="/images/SVL00582.jpg" alt="Community Fellowship" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ANNUAL GALA</span>
                  <span class="m-loc">AWARDS GALA • BROTHERHOOD & FELLOWSHIP</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Touring Gear Flatlay in lightbox" data-category="images" data-lightbox="/images/1771583990_699839f614e82.jpg" data-lightbox-type="image">
              <img src="/images/1771583990_699839f614e82.jpg" alt="Touring Gear Flatlay" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ON THE TARMAC</span>
                  <span class="m-loc">ESSENTIAL GEAR FLATLAY • CERTIFIED ARMOR</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — SVL00332.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/SVL00332.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/SVL00332.jpg.jpeg" alt="WingmanX Annual Awards Gala — SVL00332.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — SVL00338.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/SVL00338.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/SVL00338.jpg.jpeg" alt="WingmanX Annual Awards Gala — SVL00338.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — SVL00387.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/SVL00387.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/SVL00387.jpg.jpeg" alt="WingmanX Annual Awards Gala — SVL00387.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — SVL00388.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/SVL00388.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/SVL00388.jpg.jpeg" alt="WingmanX Annual Awards Gala — SVL00388.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — SVL00566.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/SVL00566.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/SVL00566.jpg.jpeg" alt="WingmanX Annual Awards Gala — SVL00566.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — SVL00582.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/SVL00582.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/SVL00582.jpg.jpeg" alt="WingmanX Annual Awards Gala — SVL00582.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — SVL00742.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/SVL00742.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/SVL00742.jpg.jpeg" alt="WingmanX Annual Awards Gala — SVL00742.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — SVL01253.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/SVL01253.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/SVL01253.jpg.jpeg" alt="WingmanX Annual Awards Gala — SVL01253.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — SVL01255.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/SVL01255.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/SVL01255.jpg.jpeg" alt="WingmanX Annual Awards Gala — SVL01255.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04580.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04580.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04580.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04580.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04631.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04631.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04631.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04631.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04638.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04638.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04638.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04638.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04675.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04675.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04675.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04675.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04722.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04722.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04722.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04722.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04753.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04753.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04753.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04753.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04769.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04769.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04769.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04769.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04784.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04784.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04784.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04784.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04785.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04785.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04785.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04785.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04848.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04848.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04848.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04848.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP04923.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP04923.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP04923.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP04923.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP05126.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP05126.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP05126.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP05126.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP05151.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP05151.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP05151.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP05151.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP05162.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP05162.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP05162.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP05162.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP05186.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP05186.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP05186.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP05186.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP05208.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP05208.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP05208.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP05208.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP05238.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP05238.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP05238.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP05238.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP05330.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP05330.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP05330.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP05330.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Annual Awards Gala — VJP05345.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/awards/VJP05345.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/awards/VJP05345.jpg.jpeg" alt="WingmanX Annual Awards Gala — VJP05345.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS GALA • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Awards Emblem in lightbox" data-category="images" data-lightbox="/images/awards/WMX.png" data-lightbox-type="image">
              <img src="/images/awards/WMX.png" alt="WingmanX Awards Emblem" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">WINGMANX AWARDS OFFICIAL INSIGNIA</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Community Meet — DSC02126.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/the_mills/DSC02126.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/the_mills/DSC02126.jpg.jpeg" alt="WingmanX Community Meet — DSC02126.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">COMMUNITY MEET</span>
                  <span class="m-loc">THE MILLS • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: WingmanX Community Meet — DSC02185.jpg.jpeg in lightbox" data-category="images" data-lightbox="/images/the_mills/DSC02185.jpg.jpeg" data-lightbox-type="image">
              <img src="/images/the_mills/DSC02185.jpg.jpeg" alt="WingmanX Community Meet — DSC02185.jpg.jpeg" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">COMMUNITY MEET</span>
                  <span class="m-loc">THE MILLS • PUNE</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: OEM Field Rider Telemetry Calibration in lightbox" data-category="images" data-lightbox="/images/oem/oem_hero_rider.jpg" data-lightbox-type="image">
              <img src="/images/oem/oem_hero_rider.jpg" alt="OEM Field Rider Telemetry Calibration" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">OEM & FIELD RUNS</span>
                  <span class="m-loc">PROVING RUN • TELEMETRY TRACK</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: OEM Cornering Dynamics Test in lightbox" data-category="images" data-lightbox="/images/oem/oem_ktm_action.jpg" data-lightbox-type="image">
              <img src="/images/oem/oem_ktm_action.jpg" alt="OEM Cornering Dynamics Test" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">OEM & FIELD RUNS</span>
                  <span class="m-loc">HIGHWAY CORNERING & BRAKE CALIBRATION</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Sahyadri Corridor Mountain Expedition in lightbox" data-category="images" data-lightbox="/images/oem/oem_mountain_banner.jpg" data-lightbox-type="image">
              <img src="/images/oem/oem_mountain_banner.jpg" alt="Sahyadri Corridor Mountain Expedition" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">OEM & FIELD RUNS</span>
                  <span class="m-loc">SAHYADRI CORRIDOR EXPEDITION</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Off-Road Traction Testing in lightbox" data-category="images" data-lightbox="/images/oem/oem_racing_dirt.jpg" data-lightbox-type="image">
              <img src="/images/oem/oem_racing_dirt.jpg" alt="Off-Road Traction Testing" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">OEM & FIELD RUNS</span>
                  <span class="m-loc">TERRAIN & TRACTION SENSING</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Real Riding Experiences Field Run in lightbox" data-category="images" data-lightbox="/images/oem/oem_real_experiences_rider.jpg" data-lightbox-type="image">
              <img src="/images/oem/oem_real_experiences_rider.jpg" alt="Real Riding Experiences Field Run" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">OEM & FIELD RUNS</span>
                  <span class="m-loc">REAL RIDING EXPERIENCES</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Sunset Convoy Expedition in lightbox" data-category="images" data-lightbox="/images/oem/oem_riders_sunset.jpg" data-lightbox-type="image">
              <img src="/images/oem/oem_riders_sunset.jpg" alt="Sunset Convoy Expedition" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">OEM & FIELD RUNS</span>
                  <span class="m-loc">SUNSET CONVOY EXPEDITION</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card" role="button" tabindex="0" aria-label="View photo: Monsoon Taillight Visibility Recon in lightbox" data-category="images" data-lightbox="/images/oem/oem_rider_rain_taillight.jpg" data-lightbox-type="image">
              <img src="/images/oem/oem_rider_rain_taillight.jpg" alt="Monsoon Taillight Visibility Recon" loading="lazy">
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">OEM & FIELD RUNS</span>
                  <span class="m-loc">MONSOON VISIBILITY RECON</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> EXPAND</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: WingmanX Annual Awards Gala Nomination Reel in lightbox" data-category="videos" data-lightbox="/images/awards/WMX Award Nomination.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/images/awards/WMX Award Nomination.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">AWARDS GALA</span>
                  <span class="m-loc">ANNUAL AWARDS NOMINATIONS REEL</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: Helmet Head-Up Telemetry Stream in lightbox" data-category="videos" data-lightbox="/videos/erasio_Helmet_clip_1080p_20260930125932.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/erasio_Helmet_clip_1080p_20260930125932.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">TELEMETRICS</span>
                  <span class="m-loc">HELMET HEAD-UP TELEMETRY STREAM</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: Handlebar Radar & Glove Controls in lightbox" data-category="videos" data-lightbox="/videos/erasio_Helmet_clip_with_glove_20260930131406.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/erasio_Helmet_clip_with_glove_20260930131406.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">COCKPIT ERGONOMICS</span>
                  <span class="m-loc">HANDLEBAR RADAR & GLOVE CONTROLS</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: Highway Descent Corridor Pass 01 in lightbox" data-category="videos" data-lightbox="/videos/erasio_Hero_Clip_1_1080p_20260930120745.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/erasio_Hero_Clip_1_1080p_20260930120745.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ON THE TARMAC</span>
                  <span class="m-loc">HIGHWAY DESCENT • CORRIDOR PASS 01</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: Sahyadri Switchback Cornering Pass 02 in lightbox" data-category="videos" data-lightbox="/videos/erasio_Hero_Clip_2_1080p_20260930120848.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/erasio_Hero_Clip_2_1080p_20260930120848.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ON THE TARMAC</span>
                  <span class="m-loc">SAHYADRI SWITCHBACK CORNERING • PASS 02</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: High-Altitude Endurance Proving Pass 03 in lightbox" data-category="videos" data-lightbox="/videos/erasio_Hero_Clip_3_1080p_20260930120955.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/erasio_Hero_Clip_3_1080p_20260930120955.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ON THE TARMAC</span>
                  <span class="m-loc">HIGH-ALTITUDE ENDURANCE PROVING • PASS 03</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: Interstate Formation Pacing Pass 04 in lightbox" data-category="videos" data-lightbox="/videos/erasio_Hero_Clip_4_1080p_20260930121139.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/erasio_Hero_Clip_4_1080p_20260930121139.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">CONVOY EXPEDITIONS</span>
                  <span class="m-loc">INTERSTATE FORMATION PACING • PASS 04</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: Dawn Departure Acceleration Pass 05 in lightbox" data-category="videos" data-lightbox="/videos/erasio_Hero_Clip_5_1080p_20260930120750.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/erasio_Hero_Clip_5_1080p_20260930120750.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ON THE TARMAC</span>
                  <span class="m-loc">DAWN DEPARTURE ACCELERATION • PASS 05</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: Connected Helmet Sensor Protocol in lightbox" data-category="videos" data-lightbox="/videos/helmet_cinematic_web.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/helmet_cinematic_web.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">SAFETY & TELEMETRY</span>
                  <span class="m-loc">CONNECTED HELMET SENSOR PROTOCOL</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: Speedometer & Engine Telemetry Calibration in lightbox" data-category="videos" data-lightbox="/videos/oem/speedometer_telemetry.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/oem/speedometer_telemetry.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">TELEMETRICS</span>
                  <span class="m-loc">SPEEDOMETER & ENGINE TELEMETRY CALIBRATION</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: Asphalt Traction & Wheel Dynamics in lightbox" data-category="videos" data-lightbox="/videos/oem/wheels_asphalt.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/oem/wheels_asphalt.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ON THE TARMAC</span>
                  <span class="m-loc">ASPHALT TRACTION & WHEEL DYNAMICS</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: WingmanX Connected Rider Network in lightbox" data-category="videos" data-lightbox="/videos/our-ecosystem-hero-video.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/our-ecosystem-hero-video.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">ECOSYSTEM</span>
                  <span class="m-loc">WINGMANX CONNECTED RIDER NETWORK</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: The Brotherhood Highway Run in lightbox" data-category="videos" data-lightbox="/videos/wingman_hero_video.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/wingman_hero_video.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">CONVOY EXPEDITIONS</span>
                  <span class="m-loc">THE BROTHERHOOD HIGHWAY RUN</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>

            <div class="masonry-card masonry-video-card" role="button" tabindex="0" aria-label="Play video: Expedition Field Proving Run in lightbox" data-category="videos" data-lightbox="/videos/wingman_hero_video_web.mp4" data-lightbox-type="video" style="display: none;">
              <div class="video-card-inner">
                <video src="/videos/wingman_hero_video_web.mp4" preload="metadata" muted playsinline loop></video>
                <div class="video-card-affordance">
                  <div class="video-play-btn-circle">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <span class="video-pill-badge"><i class="fa-solid fa-film"></i> VIDEO ARCHIVE</span>
                </div>
              </div>
              <div class="masonry-info-overlay">
                <div>
                  <span class="m-cat-tag">CONVOY EXPEDITIONS</span>
                  <span class="m-loc">EXPEDITION FIELD PROVING RUN</span>
                </div>
                <span class="m-zoom"><i class="fa-solid fa-expand"></i> PLAY FULL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 9. AWARDS & MILESTONES = THE MILESTONES
  // Composition: Chronological highway timeline journey through WingmanX milestones (2024 -> 2026)
  // =========================================================================
  awards: () => `
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
  `,
  // =========================================================================
  // 10. COMMUNITY CONTRIBUTORS = THE COMMUNITY
  // Composition: Editorial community wall with varied sizing and network connection aesthetics
  // =========================================================================
  contributors: () => `
    <div class="contributors-page-layout">
      <!-- Contributors Hero -->
      <section class="contributors-hero">
        <div class="container text-center">
          <div class="telemetry-tag mx-auto mb-3"><i class="fa-solid fa-hands-holding-circle"></i> THE ARCHITECTS OF THE ROAD</div>
          <h1 class="display-title">FORGED BY REAL RIDERS.</h1>
          <p class="lead-editorial mx-auto" style="max-width: 780px;">
            WingmanX was not designed in an isolated corporate tower. It was forged on Indian tarmac with the guidance, telemetry testing, and passion of veteran road captains and daily tourers.
          </p>
        </div>
      </section>

      <!-- Asymmetric Editorial Community Mosaic Wall -->
      <section class="contributors-wall-section">
        <div class="container">
          <div class="community-mosaic-wall">
            <!-- 1. Sanyam Verma - Large Spotlight Hero Card -->
            <div class="c-wall-card c-spotlight-card glass-card">
              <div class="spotlight-header-strip">
                <span class="c-badge-pill pill-orange"><i class="fa-solid fa-shield-halved"></i> LEAD BETA SCOUT</span>
                <span class="spotlight-metric">24,000+ KM FIELD TESTED</span>
              </div>
              <div class="spotlight-main">
                <div class="c-wall-avatar avatar-lg">SV</div>
                <div class="c-wall-body">
                  <h3>Sanyam Verma</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Bajaj Pulsar RS 200 • Pune</span>
                  <p class="spotlight-summary">
                    Logged over 24,000 KM field-testing live beacon reliability in Western Ghat cellular dead-zones. Instrumental in calibrating group radar ergonomics for high-vibration motorcycle mounts.
                  </p>
                  <blockquote class="c-wall-quote">
                    “If an app requires taking your eyes off the apex for more than half a second, it has no business being on a motorcycle handlebar.”
                  </blockquote>
                </div>
              </div>
            </div>

            <!-- 2. Nikhil Deshmukh - Chapter Road Captain -->
            <div class="c-wall-card c-captain-card glass-card">
              <div class="c-card-top-tag">
                <span class="c-badge-pill pill-blue"><i class="fa-solid fa-flag-checkered"></i> ROAD CAPTAIN</span>
                <span class="c-chapter-tag">PUNE COASTAL RIDERS</span>
              </div>
              <div class="c-card-content">
                <div class="c-wall-avatar">ND</div>
                <div class="c-wall-body">
                  <h3>Nikhil Deshmukh</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Kawasaki Versys 650 • Pune</span>
                  <p>Founder of Pune Coastal Riders. Pioneered the sweep-alert workflow to prevent trailing pack members from falling behind at confusing highway forks.</p>
                </div>
              </div>
            </div>

            <!-- 3. Kavita Joshi - Emergency Response Advisor -->
            <div class="c-wall-card c-captain-card glass-card">
              <div class="c-card-top-tag">
                <span class="c-badge-pill pill-red"><i class="fa-solid fa-heart-pulse"></i> EMERGENCY MEDICAL</span>
                <span class="c-chapter-tag">TRIAGE PROTOCOL</span>
              </div>
              <div class="c-card-content">
                <div class="c-wall-avatar">KJ</div>
                <div class="c-wall-body">
                  <h3>Kavita Joshi</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Harley-Davidson Street 750 • Mumbai</span>
                  <p>Emergency medical responder who guided the SOS alert workflow and emergency contact notification protocols for high-speed highway incidents.</p>
                </div>
              </div>
            </div>

            <!-- 4. Amit Patil - High Altitude Consultant -->
            <div class="c-wall-card glass-card">
              <div class="c-card-top-tag">
                <span class="c-badge-pill"><i class="fa-solid fa-mountain"></i> HIGH ALTITUDE RECON</span>
              </div>
              <div class="c-card-content">
                <div class="c-wall-avatar">AP</div>
                <div class="c-wall-body">
                  <h3>Amit Patil</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Royal Enfield Himalayan • Mumbai</span>
                  <p>Veteran Spiti & Ladakh explorer. Advised on offline topographic caching and emergency coordinate broadcasting above 14,000 feet.</p>
                </div>
              </div>
            </div>

            <!-- 5. Priya Merchant - Women Riders Ambassador -->
            <div class="c-wall-card glass-card">
              <div class="c-card-top-tag">
                <span class="c-badge-pill"><i class="fa-solid fa-user-shield"></i> SOLO TOURING ADVOCATE</span>
              </div>
              <div class="c-card-content">
                <div class="c-wall-avatar">PM</div>
                <div class="c-wall-body">
                  <h3>Priya Merchant</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> KTM 390 Adventure • Pune</span>
                  <p>Championed verified rider verification badges and safety-first pack matching algorithms for solo women tourers.</p>
                </div>
              </div>
            </div>

            <!-- 6. Tanmay Chitre - Endurance Tourer -->
            <div class="c-wall-card glass-card">
              <div class="c-card-top-tag">
                <span class="c-badge-pill"><i class="fa-solid fa-compass"></i> ENDURANCE TOURER</span>
              </div>
              <div class="c-card-content">
                <div class="c-wall-avatar">TC</div>
                <div class="c-wall-body">
                  <h3>Tanmay Chitre</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> BMW R 1250 GS • Pune</span>
                  <p>Iron Butt finisher who helped optimize high-speed battery conservation and sunlight high-contrast TFT cluster visibility themes.</p>
                </div>
              </div>
            </div>

            <!-- 7. Rohan Kulkarni - Mechanical Specialist -->
            <div class="c-wall-card glass-card">
              <div class="c-card-top-tag">
                <span class="c-badge-pill"><i class="fa-solid fa-wrench"></i> MECHANICAL SPECIALIST</span>
              </div>
              <div class="c-card-content">
                <div class="c-wall-avatar">RK</div>
                <div class="c-wall-body">
                  <h3>Rohan Kulkarni</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Triumph Street Triple • Pune</span>
                  <p>Curated motorcycle maintenance checkpoints and tire compound safety ratings within the digital bike garage.</p>
                </div>
              </div>
            </div>

            <!-- 8. Varun Shinde - Track Lead -->
            <div class="c-wall-card glass-card">
              <div class="c-card-top-tag">
                <span class="c-badge-pill"><i class="fa-solid fa-gauge-high"></i> TRACK & TELEMETRY</span>
              </div>
              <div class="c-card-content">
                <div class="c-wall-avatar">VS</div>
                <div class="c-wall-body">
                  <h3>Varun Shinde</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Yamaha YZF-R3 • Kolhapur</span>
                  <p>Assisted in developing cornering lean angle algorithms and track day telemetry logging for precision riding feedback.</p>
                </div>
              </div>
            </div>

            <!-- 9. Aditya Sengupta - Bengaluru Lead -->
            <div class="c-wall-card glass-card">
              <div class="c-card-top-tag">
                <span class="c-badge-pill"><i class="fa-solid fa-location-crosshairs"></i> BENGALURU CHAPTER</span>
              </div>
              <div class="c-card-content">
                <div class="c-wall-avatar">AS</div>
                <div class="c-wall-body">
                  <h3>Aditya Sengupta</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Honda CB500X • Bengaluru</span>
                  <p>Coordinated over 40 breakfast rides across South India testing multi-club collaboration and waypoint regrouping features.</p>
                </div>
              </div>
            </div>

            <!-- 10. Manish Gokhale - Vintage Custodian -->
            <div class="c-wall-card glass-card">
              <div class="c-card-top-tag">
                <span class="c-badge-pill"><i class="fa-solid fa-clock-rotate-left"></i> CLASSIC CUSTODIAN</span>
              </div>
              <div class="c-card-content">
                <div class="c-wall-avatar">MG</div>
                <div class="c-wall-body">
                  <h3>Manish Gokhale</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Royal Enfield Bullet 500 (1984) • Pune</span>
                  <p>Ensured the platform remains intuitive for classic thumpers, relaxed cruisers, and modern superbikes alike.</p>
                </div>
              </div>
            </div>

            <!-- 11. Sameer Rane - Visual Archival -->
            <div class="c-wall-card glass-card">
              <div class="c-card-top-tag">
                <span class="c-badge-pill"><i class="fa-solid fa-camera-retro"></i> VISUAL ARCHIVAL</span>
              </div>
              <div class="c-card-content">
                <div class="c-wall-avatar">SR</div>
                <div class="c-wall-body">
                  <h3>Sameer Rane</h3>
                  <span class="c-wall-bike text-orange"><i class="fa-solid fa-motorcycle"></i> Ducati Multistrada 950 • Pune</span>
                  <p>Motorcycle photojournalist whose high-resolution action photography captures the authentic soul of Indian community rides.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 11. CAREERS = THE TEAM
  // Composition: Engineers Who Ride, Riders Who Build - technical engineering briefing panels
  // =========================================================================
  careers: () => `
    <div class="careers-page-layout">
      <!-- Careers Hero -->
      <section class="careers-hero">
        <div class="container">
          <div class="telemetry-tag mb-3"><i class="fa-solid fa-code-fork"></i> JOIN THE SQUAD</div>
          <h1 class="display-title">ENGINEERS WHO RIDE.<br><span class="text-gradient-orange">RIDERS WHO BUILD.</span></h1>
          <p class="lead-editorial">
            We don't build generic SaaS dashboards. We build mission-critical, low-latency mobile and vehicle systems that protect motorcyclists in the wild.
          </p>
        </div>
      </section>

      <!-- Rider DNA Perks -->
      <section class="careers-perks-section">
        <div class="container">
          <div class="perks-grid">
            <div class="perk-box glass-card">
              <i class="fa-solid fa-helmet-safety text-orange"></i>
              <h4>Gear Stipend</h4>
              <p>Annual certified helmet, jacket, and tire allowance for every engineering crew member.</p>
            </div>
            <div class="perk-box glass-card">
              <i class="fa-solid fa-flag-checkered text-orange"></i>
              <h4>Track Day Clinics</h4>
              <p>Sponsored riding technique clinics and track day coaching sessions with professional instructors.</p>
            </div>
            <div class="perk-box glass-card">
              <i class="fa-solid fa-laptop-code text-orange"></i>
              <h4>Hybrid Pune HQ</h4>
              <p>Work from our Pune lab overlooking the ghats, or code remotely when out on long scouting tours.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Engineering Briefing Job Panels -->
      <section class="careers-jobs-section">
        <div class="container">
          <div class="section-header">
            <div class="telemetry-tag"><i class="fa-solid fa-briefcase"></i> OPEN SPECIFICATIONS</div>
            <h2 class="section-heading">CURRENT OPPORTUNITIES.</h2>
            <p class="section-subtitle">Select a position to transmit your credentials directly into our engineering pipeline.</p>
          </div>

          <div class="jobs-briefings-stack">
            <!-- Job 1 -->
            <div class="job-briefing-panel glass-card">
              <div class="briefing-top">
                <span class="briefing-id">SPEC-ENG-01 • MOBILE</span>
                <span class="briefing-loc"><i class="fa-solid fa-location-dot"></i> PUNE HQ (HYBRID) • FULL-TIME</span>
              </div>
              <div class="briefing-body">
                <h3>SENIOR MOBILE ENGINEER (FLUTTER / REACT NATIVE)</h3>
                <p>Architect our high-performance offline telemetry cache, Bluetooth cluster protocols, and real-time canvas radar mapping engines with sub-60fps smoothness on high-vibration mounts.</p>
              </div>
              <div class="briefing-footer">
                <div class="briefing-tags">
                  <span>FLUTTER</span>
                  <span>OFFLINE TOPO GPS</span>
                  <span>BLUETOOTH LE</span>
                </div>
                <a href="/contact-us?subject=Careers:+Senior+Mobile+Engineer&role=SPEC-ENG-01" class="btn btn-primary btn-sm" data-internal-route>
                  <span>APPLY FOR SPEC-ENG-01</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <!-- Job 2 -->
            <div class="job-briefing-panel glass-card">
              <div class="briefing-top">
                <span class="briefing-id">SPEC-ENG-02 • BACKEND</span>
                <span class="briefing-loc"><i class="fa-solid fa-location-dot"></i> PUNE HQ (HYBRID) • FULL-TIME</span>
              </div>
              <div class="briefing-body">
                <h3>HIGH-SCALE DISTRIBUTED SYSTEMS ARCHITECT (GO / NODE)</h3>
                <p>Handle millions of concurrent GPS coordinate packets per second with ultra-low latency WebSocket clusters, geospatial sharding, and real-time crash notification broadcast pipelines.</p>
              </div>
              <div class="briefing-footer">
                <div class="briefing-tags">
                  <span>GO</span>
                  <span>WEBSOCKETS</span>
                  <span>GEOSPATIAL / POSTGIS</span>
                </div>
                <a href="/contact-us?subject=Careers:+Distributed+Systems+Architect&role=SPEC-ENG-02" class="btn btn-primary btn-sm" data-internal-route>
                  <span>APPLY FOR SPEC-ENG-02</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <!-- Job 3 -->
            <div class="job-briefing-panel glass-card">
              <div class="briefing-top">
                <span class="briefing-id">SPEC-OPS-03 • COMMUNITY</span>
                <span class="briefing-loc"><i class="fa-solid fa-location-dot"></i> PUNE HQ • FULL-TIME</span>
              </div>
              <div class="briefing-body">
                <h3>HEAD OF MOTORCYCLE COMMUNITY & EXPEDITIONS</h3>
                <p>Lead our nationwide community ambassadors, organize official flagship state-crossing expeditions, and cultivate partnerships with verified motorcycle clubs across India.</p>
              </div>
              <div class="briefing-footer">
                <div class="briefing-tags">
                  <span>EXPEDITION PLANNING</span>
                  <span>CLUB RELATIONS</span>
                  <span>ROAD CAPTAIN CERTIFIED</span>
                </div>
                <a href="/contact-us?subject=Careers:+Head+of+Community+Expeditions&role=SPEC-OPS-03" class="btn btn-primary btn-sm" data-internal-route>
                  <span>APPLY FOR SPEC-OPS-03</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 12. CONTACT US = THE NEXT RIDE
  // Composition: Command center layout: Left info, Right working form, Below: Live Route Waypoint HUD & Map (No empty space!)
  // =========================================================================
  contact: () => `
    <div class="contact-page-layout">
      <!-- Contact Hero -->
      <section class="contact-hero">
        <div class="container">
          <div class="telemetry-tag mb-3"><i class="fa-solid fa-headset"></i> PUNE COMMAND CENTER</div>
          <h1 class="display-title">YOUR NEXT RIDE<br><span class="text-gradient-orange">STARTS HERE.</span></h1>
          <p class="lead-editorial">
            Have an inquiry about the app, partnership routes, technical cluster integrations, or career opportunities? Transmit a dispatch directly to our headquarters in Pune.
          </p>
        </div>
      </section>

      <!-- Command Center Split (Contact Info + Live Transmission Form) -->
      <section class="contact-command-section">
        <div class="container">
          <div class="command-center-grid">
            <!-- Left: Headquarters Intel -->
            <div class="hq-intel-col glass-card">
              <div class="telemetry-tag mb-4"><i class="fa-solid fa-satellite"></i> PUNE HQ TELEMETRY</div>
              <h2 class="hq-name">WingManX Adventure Technologies Pvt. Ltd.</h2>
              
              <div class="hq-info-block">
                <div class="hq-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div class="hq-text">
                  <strong>HEADQUARTERS COORDINATES</strong>
                  <p>WingManX Adventure Technologies Pvt. Ltd.<br>Pune, Maharashtra 411045, India</p>
                </div>
              </div>

              <div class="hq-info-block">
                <div class="hq-icon"><i class="fa-solid fa-envelope"></i></div>
                <div class="hq-text">
                  <strong>OFFICIAL DISPATCH CHANNELS</strong>
                  <p><a href="mailto:support@wingmanx.in">support@wingmanx.in</a> (Riders & Club Leads)<br><a href="mailto:partners@wingmanx.in">partners@wingmanx.in</a> (Brands & OEM Partners)</p>
                </div>
              </div>

              <div class="hq-info-block">
                <div class="hq-icon"><i class="fa-solid fa-phone-volume"></i></div>
                <div class="hq-text">
                  <strong>DIRECT LINE & WHATSAPP</strong>
                  <p><a href="tel:+919763706633">+91 97637 06633</a></p>
                </div>
              </div>

              <div class="hq-info-block">
                <div class="hq-icon"><i class="fa-solid fa-shield-halved"></i></div>
                <div class="hq-text">
                  <strong>EMERGENCY SOS BEACON DISPATCH</strong>
                  <p>24/7 Automated Crash & Incident Coordinates Relay Active</p>
                </div>
              </div>
            </div>

            <!-- Right: Send a Transmission Form -->
            <div class="transmission-form-col glass-card" id="contact-transmission-card">
              <div class="transmission-form-header">
                <h3>SEND A TRANSMISSION</h3>
                <p class="text-muted" id="transmission-hint-text">Fill in your coordinates and inquiry details. Our crew responds within 24 hours.</p>
              </div>

              <form id="contact-inquiry-form" class="main-transmission-form mt-4">
                <div class="form-row-2">
                  <div class="form-group mb-3">
                    <label class="form-label" for="contact-name">Full Name <span class="req">*</span></label>
                    <input type="text" id="contact-name" class="form-control" name="name" required placeholder="e.g. Vikramaditya Deshmukh">
                  </div>
                  <div class="form-group mb-3">
                    <label class="form-label" for="contact-email">Email Address <span class="req">*</span></label>
                    <input type="email" id="contact-email" class="form-control" name="email" required placeholder="rider@domain.com">
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group mb-3">
                    <label class="form-label" for="contact-phone">Phone Number <span class="req">*</span></label>
                    <input type="tel" id="contact-phone" class="form-control" name="phone" required placeholder="+91 98765 43210">
                  </div>
                  <div class="form-group mb-3">
                    <label class="form-label" for="contact-subject-select">Transmission Subject</label>
                    <select class="form-control" name="subject" id="contact-subject-select">
                      <option value="General Rider Support">General Rider Support</option>
                      <option value="Host a Community Ride">Host a Community Ride</option>
                      <option value="Club / Pack Partnership">Club / Pack Partnership</option>
                      <option value="Brand / Sponsorship Route">Brand / Sponsorship Route</option>
                      <option value="OEM / Automotive Telematics">OEM / Automotive Telematics</option>
                      <option value="Careers / Join Crew">Careers / Join Crew</option>
                    </select>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label class="form-label" for="contact-message-input">Message / Coordinates <span class="req">*</span></label>
                  <textarea class="form-control" name="message" id="contact-message-input" rows="4" required placeholder="How can WingmanX assist your motorcycling journey?"></textarea>
                </div>

                <div class="form-check mb-4">
                  <input type="checkbox" id="contact-privacy-check" required checked>
                  <label for="contact-privacy-check">I consent to WingmanX processing my contact details according to the <a href="/privacy-policy" data-internal-route class="text-orange">Privacy Policy</a>.</label>
                </div>

                <button type="submit" class="btn btn-primary btn-lg w-100">
                  <span>TRANSMIT MESSAGE</span>
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
                <div class="form-status mt-3" id="contact-form-status"></div>
              </form>
            </div>
          </div>

          <!-- Bottom: Live Route Waypoints HUD & Resilient Map (No empty space!) -->
          <div class="contact-route-hud-box glass-card mt-5">
            <div class="route-hud-header">
              <div>
                <span class="hud-badge"><i class="fa-solid fa-compass"></i> LIVE WAYPOINT RADAR</span>
                <h3>PUNE HEADQUARTERS & ACTIVE EXPEDITION CORRIDORS</h3>
              </div>
              <div class="hud-coords">18.5204° N, 73.8567° E • ELEVATION 560M • SAHYADRI RANGE</div>
            </div>

            <!-- Route Corridors Bar -->
            <div class="corridors-bar">
              <div class="corridor-chip">
                <span class="c-dot"></span>
                <span>CORRIDOR 01: PUNE ➔ LONAVALA TIGER POINT (68 KM)</span>
              </div>
              <div class="corridor-chip">
                <span class="c-dot"></span>
                <span>CORRIDOR 02: PUNE ➔ TAMHINI GHAT APEX (92 KM)</span>
              </div>
              <div class="corridor-chip">
                <span class="c-dot"></span>
                <span>CORRIDOR 03: PUNE ➔ MAHABALESHWAR RIDGE (120 KM)</span>
              </div>
            </div>

            <!-- Resilient Map Wrapper with Direct Navigation Fallback -->
            <div class="contact-map-wrapper">
              <div class="contact-map-fallback">
                <div class="fallback-intel">
                  <div class="fallback-tele-icon"><i class="fa-solid fa-map-location-dot"></i></div>
                  <div class="fallback-text">
                    <strong>PUNE HEADQUARTERS COORDINATES</strong>
                    <p class="mb-1">18°31'13.4"N 73°51'24.1"E • Maharashtra 411045</p>
                    <small class="text-muted">Transit: 14 KM from PNQ Airport • 8 KM from Pune Junction Railway Station</small>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/jhzeWW3wHnPKdwob9" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white btn-sm">
                  <span>OPEN IN GOOGLE MAPS</span>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0471115609!2d73.78056545199659!3d18.52459859950232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="340" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="WingmanX Pune Headquarters Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // LEGAL PAGES
  // =========================================================================
  privacy: () => `
    <div class="subpage-wrapper">
      <section class="subpage-hero">
        <div class="container">
          <div class="telemetry-tag"><i class="fa-solid fa-lock"></i> LEGAL TRANSPARENCY</div>
          <h1 class="display-title">PRIVACY POLICY.</h1>
          <p class="lead">Last Updated: September 2026 • WingmanX Mobility Labs Pvt. Ltd.</p>
        </div>
      </section>
      <section class="subpage-content">
        <div class="container legal-content glass-card p-5">
          <h2>1. Commitment to Rider Privacy</h2>
          <p>WingmanX ("we", "us", or "our") is dedicated to safeguarding the privacy and location safety of our riders. This Privacy Policy details how we collect, handle, and protect your information across our website and mobile application.</p>
          
          <h2>2. Location & Telemetry Data</h2>
          <p>Motorcycle group rides require precise GPS location data to calculate pack proximity, alert sweeps of stopped riders, and trigger emergency crash alerts. We only collect real-time location data when you explicitly initiate a ride or enable background beacon tracking. You can disable location tracking at any time in app settings.</p>

          <h2>3. Information We Collect</h2>
          <ul class="styled-list">
            <li><strong>Account Profile:</strong> Name, email address, phone number, motorcycle model, and profile photo.</li>
            <li><strong>Ride Telemetry:</strong> Distance, speed averages, route GPX waypoints, elevation change, and timestamps.</li>
            <li><strong>Emergency SOS:</strong> Emergency contact names and phone numbers used strictly for crash alert notifications.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>All location telemetry transmitted between your device and WingmanX servers is encrypted in transit using industry-standard TLS 1.3 encryption. We never sell your personal contact or ride route data to third-party advertising networks.</p>

          <h2>5. Contact Us</h2>
          <p>For questions or data deletion requests, contact our Data Protection Officer at <a href="mailto:privacy@wingmanx.in" class="text-orange">privacy@wingmanx.in</a>.</p>
        </div>
      </section>
    </div>
  `,

  terms: () => `
    <div class="subpage-wrapper">
      <section class="subpage-hero">
        <div class="container">
          <div class="telemetry-tag"><i class="fa-solid fa-file-contract"></i> TERMS</div>
          <h1 class="display-title">TERMS OF SERVICE.</h1>
          <p class="lead">Last Updated: September 2026 • WingmanX Mobility Labs Pvt. Ltd.</p>
        </div>
      </section>
      <section class="subpage-content">
        <div class="container legal-content glass-card p-5">
          <h2>1. Agreement to Terms</h2>
          <p>By downloading the WingmanX app or accessing our website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

          <h2>2. Rider Responsibility & Safety Warning</h2>
          <p><strong>Motorcycling is an inherently hazardous activity.</strong> WingmanX provides routing and telematics tools, but you are solely responsible for operating your motorcycle safely, observing all local traffic laws and speed regulations, wearing certified protective gear (DOT/ECE helmet, jacket, gloves, boots), and maintaining focus on the road at all times. Do not interact with screen displays while in motion.</p>

          <h2>3. Community Conduct</h2>
          <p>WingmanX is built on brotherhood and mutual respect. We do not tolerate reckless endangerment, illegal street racing coordination, harassment, or abusive conduct within ride clubs or forums.</p>

          <h2>4. Intellectual Property</h2>
          <p>All trademarks, graphics, logo assets, UI designs, and proprietary code are the exclusive property of WingmanX Mobility Labs Pvt. Ltd.</p>
        </div>
      </section>
    </div>
  `,

  refund: () => `
    <div class="subpage-wrapper">
      <section class="subpage-hero">
        <div class="container">
          <div class="telemetry-tag"><i class="fa-solid fa-arrow-rotate-left"></i> REFUNDS</div>
          <h1 class="display-title">CANCELLATION & REFUND POLICY.</h1>
          <p class="lead">Last Updated: September 2026 • WingmanX Mobility Labs Pvt. Ltd.</p>
        </div>
      </section>
      <section class="subpage-content">
        <div class="container legal-content glass-card p-5">
          <h2>1. Paid Expeditions & Event Registrations</h2>
          <p>When you register for official WingmanX curated expeditions or certified multi-day tours, the following cancellation policy applies:</p>
          <ul class="styled-list">
            <li><strong>Cancellation > 15 days before ride start:</strong> 90% refund of registration fee (10% processing fee).</li>
            <li><strong>Cancellation 7–14 days before ride start:</strong> 50% refund.</li>
            <li><strong>Cancellation < 7 days before ride start:</strong> Non-refundable due to advance hotel, logistics, and emergency backup bookings.</li>
          </ul>

          <h2>2. Digital Services & Subscriptions</h2>
          <p>Premium club tier subscriptions may be cancelled at any time via your Google Play or Apple App Store account settings. Cancellation takes effect at the end of the current billing cycle.</p>

          <h2>3. Refund Processing</h2>
          <p>Approved refunds are processed to the original payment method within 5–7 business days. For refund inquiries, email <a href="mailto:support@wingmanx.in" class="text-orange">support@wingmanx.in</a>.</p>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 16. NOT FOUND = 404 DELIBERATE OFF-ROUTE VIEW
  // =========================================================================
  notFound: () => `
    <div class="subpage-wrapper">
      <section class="subpage-hero" style="min-height: 70vh; display: flex; align-items: center; justify-content: center; text-align: center;">
        <div class="container">
          <div class="telemetry-tag mb-3" style="display: inline-flex;"><i class="fa-solid fa-triangle-exclamation"></i> 404 ROUTE NOT FOUND</div>
          <h1 class="display-title" style="font-size: 3.5rem; margin-bottom: 1rem;">OFF-ROUTE COORDINATE.</h1>
          <p class="lead" style="max-width: 600px; margin: 0 auto 2rem auto; color: var(--wmx-text-dim, #8f9cae);">
            The waypoint or route you requested does not exist on the WingmanX platform. Rejoin the pack on the main highway.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="/" class="btn btn-primary" data-internal-route>
              <i class="fa-solid fa-house"></i> RETURN TO HOME
            </a>
            <a href="/contact-us" class="btn btn-outline" data-internal-route>
              <i class="fa-solid fa-headset"></i> CONTACT SUPPORT
            </a>
          </div>
        </div>
      </section>
    </div>
  `
};

window.Pages = Pages;
