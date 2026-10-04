const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// 1. DEDICATED BLOG ARTICLES
// ---------------------------------------------------------------------------

// 1. Mastering the Monsoon Ghats
const blogMonsoonGhatsHtml = `  // =========================================================================
  // 6A. DEDICATED BLOG ARTICLE — MASTERING THE MONSOON GHATS
  // =========================================================================
  blogMonsoonGhats: () => \`
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
                <img src="/images/Banner_1882026112427_12718.jpg" alt="The Ride We Almost Didnt Take">
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
  \`,`;

// 2. The Art of the Sweep
const blogArtOfSweepHtml = `  // =========================================================================
  // 6C. DEDICATED BLOG ARTICLE — THE ART OF THE SWEEP
  // =========================================================================
  blogArtOfSweep: () => \`
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
  \`,`;

// 3. Spiti Valley Unfiltered
const blogSpitiValleyHtml = `  // =========================================================================
  // 6D. DEDICATED BLOG ARTICLE — SPITI VALLEY UNFILTERED
  // =========================================================================
  blogSpitiValley: () => \`
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
  \`,`;

// 4. The Ride We Almost Didn't Take
const blogRideAlmostDidntTakeHtml = `  // =========================================================================
  // 6E. DEDICATED BLOG ARTICLE — THE RIDE WE ALMOST DIDN'T TAKE
  // =========================================================================
  blogRideAlmostDidntTake: () => \`
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
            <img src="/images/Banner_1882026112427_12718.jpg" alt="The Ride We Almost Didn't Take" class="article-hero-img">
            <div class="article-media-caption">
              Pre-dawn staging at the highway fuel pump as morning mist breaks over the Western Ghats.
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
  \`,`;

// 5. Somewhere Between Home and the Mountains
const blogSomewhereBetweenHomeAndMountainsHtml = `  // =========================================================================
  // 6F. DEDICATED BLOG ARTICLE — SOMEWHERE BETWEEN HOME AND THE MOUNTAINS
  // =========================================================================
  blogSomewhereBetweenHomeAndMountains: () => \`
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
                <img src="/images/Banner_1882026112427_12718.jpg" alt="The Ride We Almost Didnt Take">
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
  \`,`;

// 6. The Last Rider in the Pack
const blogLastRiderInPackHtml = `  // =========================================================================
  // 6G. DEDICATED BLOG ARTICLE — THE LAST RIDER IN THE PACK
  // =========================================================================
  blogLastRiderInPack: () => \`
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
                <img src="/images/Banner_1882026112427_12718.jpg" alt="The Ride We Almost Didnt Take">
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
  \`,`;

// ---------------------------------------------------------------------------
// 2. UPDATED BLOGS LISTING TEMPLATE (Featured Cover + 6 Secondary Cards)
// ---------------------------------------------------------------------------
const blogsListingHtml = `  // =========================================================================
  // 6. BLOGS = THE KNOWLEDGE / THE RIDER JOURNAL
  // Composition: Magazine cover featured story -> 6-card secondary editorial grid
  // =========================================================================
  blogs: () => \`
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
                <img src="/images/Banner_1882026112427_12718.jpg" alt="The Ride We Almost Didn't Take" loading="lazy">
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
  \`,`;

// ---------------------------------------------------------------------------
// 3. APPLY TO public/js/pages.js
// ---------------------------------------------------------------------------
const pagesRaw = fs.readFileSync('public/js/pages.js', 'utf8');
const isCrlf = pagesRaw.includes('\r\n');
const pagesLines = pagesRaw.split(/\r?\n/);

let bStart = -1;
let bEnd = -1;

for (let i = 0; i < pagesLines.length; i++) {
  if (pagesLines[i].includes('// 6. BLOGS = THE KNOWLEDGE / THE RIDER JOURNAL')) {
    bStart = i - 1;
  }
  // We keep blogAccessories intact! Look for the line where blogAccessories ends:
  // right before 7. OUR TESTIMONIALS
  if (pagesLines[i].includes('// 7. OUR TESTIMONIALS = THE PEOPLE')) {
    bEnd = i - 3;
    break;
  }
}

console.log(`Pages.js blogs block spans line ${bStart + 1} to line ${bEnd + 1}`);

// Now find where blogAccessories begins in pagesLines
let accStart = -1;
for (let i = bStart; i <= bEnd; i++) {
  if (pagesLines[i].includes('blogAccessories: () => `')) {
    // Look back for comment
    accStart = i - 4;
    break;
  }
}
console.log(`blogAccessories starts around line ${accStart + 1}`);

// Extract original blogAccessories code exactly as it is!
const originalAccessoriesCode = pagesLines.slice(accStart, bEnd + 1).join('\n');

// Combine:
// 1. blogsListingHtml
// 2. blogMonsoonGhatsHtml
// 3. originalAccessoriesCode (preserved 100%!)
// 4. blogArtOfSweepHtml
// 5. blogSpitiValleyHtml
// 6. blogRideAlmostDidntTakeHtml
// 7. blogSomewhereBetweenHomeAndMountainsHtml
// 8. blogLastRiderInPackHtml

const fullReplacement = [
  blogsListingHtml,
  blogMonsoonGhatsHtml,
  originalAccessoriesCode,
  blogArtOfSweepHtml,
  blogSpitiValleyHtml,
  blogRideAlmostDidntTakeHtml,
  blogSomewhereBetweenHomeAndMountainsHtml,
  blogLastRiderInPackHtml
].join('\n\n');

pagesLines.splice(bStart, bEnd - bStart + 1, ...fullReplacement.split('\n'));

const newline = isCrlf ? '\r\n' : '\n';
fs.writeFileSync('public/js/pages.js', pagesLines.join(newline), 'utf8');
console.log('Successfully updated blogs and dedicated article pages in public/js/pages.js!');

// ---------------------------------------------------------------------------
// 4. UPDATE public/js/router.js
// ---------------------------------------------------------------------------
const routerRaw = fs.readFileSync('public/js/router.js', 'utf8');
const routerIsCrlf = routerRaw.includes('\r\n');
let routerLines = routerRaw.split(/\r?\n/);

let targetRouteLine = -1;
for (let i = 0; i < routerLines.length; i++) {
  if (routerLines[i].includes("'/blogs/top-10-must-have-accessories-for-every-rider': {")) {
    targetRouteLine = i;
    break;
  }
}

if (targetRouteLine !== -1) {
  // Find closing bracket for this route
  let targetRouteEnd = -1;
  for (let i = targetRouteLine; i < routerLines.length; i++) {
    if (routerLines[i].trim() === '},') {
      targetRouteEnd = i;
      break;
    }
  }

  const newRoutes = `      '/blogs/mastering-the-monsoon-ghats': {
        render: window.Pages.blogMonsoonGhats,
        title: "Mastering the Monsoon Ghats: 7 Essential Rules for Wet Tarmac — WingmanX",
        metaDesc: "From reading subtle variations in painted white road stripes when soaked to calculating downhill rear-brake trail into mossy apexes."
      },
      '/blogs/the-art-of-the-sweep': {
        render: window.Pages.blogArtOfSweep,
        title: "The Art of the Sweep: Why the Rear Rider is the True Hero of the Pack — WingmanX",
        metaDesc: "The lead sets the pace, but the sweep rider protects the soul of the group. Convoy safety protocols, recovery toolkits, and trailing communication."
      },
      '/blogs/top-10-must-have-accessories-for-every-rider': {
        render: window.Pages.blogAccessories,
        title: "Top 10 Must-Have Accessories for Every Rider — WingmanX Rider Journal",
        metaDesc: "Essential motorcycle gear and safety accessories for every rider. Full-face helmets, armored gloves, all-weather jackets, GPS mounts, and emergency kits."
      },
      '/blogs/spiti-valley-unfiltered': {
        render: window.Pages.blogSpitiValley,
        title: "Spiti Valley Unfiltered: Preparing Your Machine for Extreme Altitude — WingmanX",
        metaDesc: "Air-fuel mixtures, spark plug heat ranges, suspension preload adjustments for rocky washouts, and emergency fuel filtration at 14,000 feet."
      },
      '/blogs/the-ride-we-almost-didnt-take': {
        render: window.Pages.blogRideAlmostDidntTake,
        title: "The Ride We Almost Didn't Take — WingmanX Rider Journal",
        metaDesc: "At 4:18 AM the rain lashed the windowpanes and the group chat was one ping away from mutual surrender. An unforgettable journey of friendship."
      },
      '/blogs/somewhere-between-home-and-the-mountains': {
        render: window.Pages.blogSomewhereBetweenHomeAndMountains,
        title: "Somewhere Between Home and the Mountains — WingmanX Rider Journal",
        metaDesc: "An introspective journey about why riders leave familiar roads, the silence of long-distance riding, and finding meaning on the road."
      },
      '/blogs/the-last-rider-in-the-pack': {
        render: window.Pages.blogLastRiderInPack,
        title: "The Last Rider in the Pack — WingmanX Rider Journal",
        metaDesc: "You don't watch the scenery from the back of the line; you watch six red taillights cutting through the fog, carrying the silent promise that everyone reaches home."
      },`;

  routerLines.splice(targetRouteLine, targetRouteEnd - targetRouteLine + 1, ...newRoutes.split('\n'));
  fs.writeFileSync('public/js/router.js', routerLines.join(routerIsCrlf ? '\r\n' : '\n'), 'utf8');
  console.log('Successfully registered all blog routes in public/js/router.js!');
} else {
  console.error('Could not find route target in router.js');
}

// ---------------------------------------------------------------------------
// 5. UPDATE server.cjs VALID_SPA_ROUTES
// ---------------------------------------------------------------------------
const serverRaw = fs.readFileSync('server.cjs', 'utf8');
let serverLines = serverRaw.split(/\r?\n/);

let sRouteStart = -1;
for (let i = 0; i < serverLines.length; i++) {
  if (serverLines[i].includes("'/blogs/top-10-must-have-accessories-for-every-rider'")) {
    sRouteStart = i;
    break;
  }
}

if (sRouteStart !== -1) {
  const extraServerRoutes = [
    "  '/blogs/top-10-must-have-accessories-for-every-rider',",
    "  '/blogs/mastering-the-monsoon-ghats',",
    "  '/blogs/the-art-of-the-sweep',",
    "  '/blogs/spiti-valley-unfiltered',",
    "  '/blogs/the-ride-we-almost-didnt-take',",
    "  '/blogs/somewhere-between-home-and-the-mountains',",
    "  '/blogs/the-last-rider-in-the-pack',"
  ];
  serverLines.splice(sRouteStart, 1, ...extraServerRoutes);
  fs.writeFileSync('server.cjs', serverLines.join('\n'), 'utf8');
  console.log('Successfully updated server.cjs with all blog SPA routes!');
}
