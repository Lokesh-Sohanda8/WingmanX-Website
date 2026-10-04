import re

with open('public/js/pages.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new home string
new_home = '''home: () => \
    <!-- SECTION 01: CINEMATIC HERO -->
    <section class="hero-section" id="home">
      <!-- Letterboxing -->
      <div class="hero-letterbox top"></div>
      <div class="hero-letterbox bottom"></div>
      
      <div class="video-container">
        <video autoplay muted loop playsinline class="hero-video" id="wingmanHeroVideo">
          <source src="/video/wingman_hero_video.mp4" type="video/mp4">
        </video>
        <!-- Cinematic grading overlay instead of generic dark overlay -->
        <div class="hero-cinema-grading"></div>
        <div class="hero-text-gradient-overlay"></div>
      </div>
      
      <div class="container hero-content text-controlled">
        <h1 class="hero-title-controlled">
          DON'T JUST<br>
          <span class="text-gradient-orange">PLAN THE RIDE.</span><br>
          LIVE IT.
        </h1>
        <p class="hero-subtitle-controlled">
          WingmanX is the platform for riders to discover routes, connect with the pack, and ride together seamlessly.
        </p>
        <div class="hero-actions">
          <a href="/explore-rides" class="btn btn-primary" data-internal-route>
            EXPLORE RIDES <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#app-features" class="btn btn-outline" data-internal-route>
            <i class="fa-brands fa-google-play"></i> GET THE APP
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 02: THE MANIFESTO -->
    <section class="manifesto-section" style="padding: 100px 0; background: var(--wmx-bg-deep);">
      <div class="container">
        <div class="manifesto-narrative-grid">
          <div class="manifesto-media-col">
            <!-- Image depicting parked bikes at dawn / pack getting ready -->
            <img src="/images/Banner_1882026112427_12718.jpg" alt="Parked bikes at dawn" style="width:100%; border-radius:8px; border:1px solid var(--border-glass);">
          </div>
          <div class="manifesto-text-col">
            <div class="section-tag"><i class="fa-solid fa-road"></i> THE MANIFESTO</div>
            <h2 class="section-heading-controlled">THE ROAD IS BETTER<br>TOGETHER.</h2>
            <p style="color:var(--wmx-text-dim); margin-top:20px; font-size:1.1rem; max-width:500px;">
              Motorcycling is freedom, but uncoordinated planning, lost pack members, and disconnected tools turn pure joy into stressful coordination. WingmanX solves this at the core.
            </p>
            <div class="manifesto-consequences">
              <div class="consequence-item">
                <i class="fa-solid fa-users"></i>
                <div>
                  <h4>FIND PEOPLE YOU CONNECT WITH</h4>
                  <p>Discover riders matching your style, pace, and destination.</p>
                </div>
              </div>
              <div class="consequence-item">
                <i class="fa-solid fa-map-location-dot"></i>
                <div>
                  <h4>PLAN WITH LESS FRICTION</h4>
                  <p>Centralize GPX routes, waypoints, and meetup details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 03: CONVERGING PATHS ANIMATION (Replaces Radar) -->
    <section class="converging-map-section" style="padding: 100px 0; background: #060709;">
      <div class="container">
        <div class="text-center" style="margin-bottom:60px;">
          <div class="section-tag"><i class="fa-solid fa-code-merge"></i> FIND YOUR PEOPLE</div>
          <h2 class="section-heading-controlled">FIND YOUR ROAD.</h2>
          <p style="color:var(--wmx-text-dim); margin-top:20px; max-width:600px; margin-inline:auto;">
            Never ride alone unless you want to. WingmanX matches your riding style and routes, bringing isolated riders together into a synchronized pack.
          </p>
        </div>
        
        <div class="converging-animation-wrapper">
          <div class="map-grid-bg"></div>
          <div class="path-rider rider-1">
            <div class="rider-dot"></div>
            <div class="rider-trail"></div>
          </div>
          <div class="path-rider rider-2">
            <div class="rider-dot"></div>
            <div class="rider-trail"></div>
          </div>
          <div class="convergence-point">
            <i class="fa-solid fa-motorcycle"></i>
            <div class="ripple"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 04: TIRE ENGINE & WAYPOINTS -->
    <section class="tire-section" style="padding:100px 0; background:linear-gradient(to bottom, #060709, #0a0c10); position:relative; overflow:hidden;">
      <div class="container text-center" style="position:relative; z-index:2;">
        <div class="section-tag"><i class="fa-solid fa-gauge"></i> SIGNATURE MOTION ENGINE</div>
        <h2 class="section-heading-controlled">WHERE RUBBER MEETS TARMAC.</h2>
        <p style="color:var(--wmx-text-dim); margin-top:20px;">
          Scroll to generate the road and pass through the core waypoints of the WingmanX experience.
        </p>
      </div>
      
      <div class="tire-stage" style="height:80vh; position:relative; display:flex; flex-direction:column; align-items:center; justify-content:center;">
        <img src="/images/bmw_wheel_transparent.png" id="bmw-wheel" alt="BMW S1000 Wheel" style="width:300px; z-index:3; position:relative;">
        <canvas id="spark-canvas" class="spark-canvas" style="position:absolute; inset:0; pointer-events:none; z-index:2;"></canvas>
        
        <!-- Waypoints that generate on the road -->
        <div id="tire-waypoints" class="tire-waypoints">
          <div class="tire-waypoint" data-distance="100">
            <div class="wp-dot"></div>
            <span>DISCOVER</span>
          </div>
          <div class="tire-waypoint" data-distance="300">
            <div class="wp-dot"></div>
            <span>CONNECT</span>
          </div>
          <div class="tire-waypoint" data-distance="500">
            <div class="wp-dot"></div>
            <span>RIDE</span>
          </div>
          <div class="tire-waypoint" data-distance="700">
            <div class="wp-dot"></div>
            <span>TRACK</span>
          </div>
        </div>

        <canvas id="road-canvas" style="position:absolute; bottom:0; left:0; width:100%; height:50%; z-index:1;"></canvas>
      </div>
    </section>

    <!-- SECTION 05: THE JOURNEY (Replaces Lifecycle) -->
    <section class="journey-section" style="padding:100px 0; background:var(--wmx-bg-deep);">
      <div class="container text-center">
        <div class="section-tag"><i class="fa-solid fa-flag-checkered"></i> THE RIDER LIFECYCLE</div>
        <h2 class="section-heading-controlled" style="margin-bottom:60px;">THE JOURNEY: FROM GARAGE TO SUMMIT.</h2>
        
        <div class="journey-grid">
          <div class="journey-card">
            <div class="j-step-num">STEP 01</div>
            <h3>PLAN</h3>
            <p>Sync profile, check tire pressure checkpoints, review GPX.</p>
            <img src="/images/screenshot_130343.png" alt="App Plan" class="j-app-screen">
          </div>
          <div class="journey-card">
            <div class="j-step-num">STEP 02</div>
            <h3>RIDE</h3>
            <p>Live telemetry alignment. Lead and sweep tracking.</p>
            <img src="/images/screenshot_134015.png" alt="App Ride" class="j-app-screen">
          </div>
          <div class="journey-card">
            <div class="j-step-num">STEP 03</div>
            <h3>REVIEW</h3>
            <p>Ride summary, elevation stats, lean angles, group photos.</p>
            <img src="/images/screenshot_latest.png" alt="App Review" class="j-app-screen">
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 06: HELMET QUOTE -->
    <section class="helmet-section" style="position:relative; min-height:600px; display:flex; align-items:center;">
      <video autoplay muted loop playsinline class="helmet-video" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
        <source src="/video/erasio_Helmet_clip.mp4" type="video/mp4">
      </video>
      <div class="hero-cinema-grading"></div>
      <div class="container" style="position:relative; z-index:2; text-align:center;">
        <h2 class="section-heading-controlled">THE JOURNEY STARTS BEFORE<br>THE ENGINE DOES.</h2>
      </div>
    </section>

    <!-- SECTION 07: CTA -->
    <section class="cta-section text-center" style="padding: 100px 0; background: var(--wmx-bg-deep); border-top: 1px solid var(--border-glass);">
      <div class="container">
        <h2 class="section-heading-controlled" style="margin-bottom:40px;">JOIN THE RIDE.</h2>
        <a href="#app-features" class="btn btn-primary btn-lg" style="padding:20px 40px; font-size:1.2rem;">
          <i class="fa-brands fa-google-play"></i> DOWNLOAD WINGMANX
        </a>
      </div>
    </section>
  \,
'''

# Use string finding to replace from "home: () =>" to the end of the home block.
start_idx = content.find('home: () => ')
if start_idx == -1:
    print("Could not find home block start.")
else:
    # Find the next block which is about: () =>
    end_idx = content.find('  about: () => ', start_idx)
    if end_idx == -1:
        print("Could not find next block.")
    else:
        new_content = content[:start_idx] + new_home + '\n' + content[end_idx:]
        with open('public/js/pages.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Replaced home block successfully.")
