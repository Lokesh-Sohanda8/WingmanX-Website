import sys
import re

new_about_content = r'''  about: () => `
    <div class="about-page-layout">
      
      <!-- 1. Opening Introduction -->
      <section class="about-hero-cinematic">
        <div class="about-hero-bg">
          <img src="/images/DefaultRideImage.jpg" alt="WingManX Convoy on Highway" class="about-hero-img">
          <div class="about-hero-overlay"></div>
        </div>
        <div class="container about-hero-container">
          <div class="telemetry-tag mb-3"><i class="fa-solid fa-compass"></i> WHY WINGMANX EXISTS</div>
          <h1 class="display-title">BUILDING INDIA'S RIDER COMMUNITY.</h1>
          <p class="lead-editorial">
            We started WingManX to solve a simple but very real rider problem. Finding the right people to ride with.
          </p>
        </div>
      </section>

      <!-- 2. Origin Story: Why We Started WingManX -->
      <section class="about-founding-story">
        <div class="container">
          <div class="founding-editorial-panel">
            <div class="founding-quote-col">
              <span class="quote-watermark">“</span>
              <h2 class="founding-quote-text">
                “WHY WE STARTED WINGMANX”
              </h2>
              <p class="founding-quote-sub">
                For many of us, the hardest part of riding was never the route or the bike. It was finding dependable riding partners who shared the same pace, mindset, and respect for safety.
              </p>
            </div>
            <div class="founding-details-col">
              <div class="telemetry-tag mb-3"><i class="fa-solid fa-map-pin"></i> 01 • THE ORIGIN STORY</div>
              <h3>THE WIDER GAP IN GROUP RIDING</h3>
              <p>
                What began as a question we asked ourselves before every ride quickly revealed a wider gap. Group rides were often unstructured, unpredictable, or organised through random messages with little clarity or accountability.
              </p>
              <p>
                We built WingManX to change that by bringing structure, trust, and responsibility into group riding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. What We Stand For: Visual Values System -->
      <section class="about-hazards-section">
        <div class="container">
          <div class="section-header">
            <div class="telemetry-tag"><i class="fa-solid fa-shield-halved"></i> 02 • WHAT WE STAND FOR</div>
            <h2 class="section-heading">OUR CORE RIDER VALUES.</h2>
            <p class="section-subtitle">Everything we build at WingManX is rooted in a strong set of core rider values, principles that shape how we design, how we ride, and how we grow as a responsible, connected community.</p>
          </div>

          <div class="road-hazards-strip">
            <!-- Value 1 -->
            <div class="hazard-card glass-card">
              <div class="hazard-badge">VALUE 01</div>
              <div class="hazard-icon"><i class="fa-solid fa-helmet-safety"></i></div>
              <h3>SAFETY FIRST</h3>
              <p>Every ride should end the same way it starts. Safely.</p>
            </div>

            <!-- Value 2 -->
            <div class="hazard-card glass-card">
              <div class="hazard-badge">VALUE 02</div>
              <div class="hazard-icon"><i class="fa-solid fa-handshake"></i></div>
              <h3>RESPONSIBILITY</h3>
              <p>We respect the road, the group, and each other.</p>
            </div>

            <!-- Value 3 -->
            <div class="hazard-card glass-card">
              <div class="hazard-badge">VALUE 03</div>
              <div class="hazard-icon"><i class="fa-solid fa-link"></i></div>
              <h3>TRUST AND TRANSPARENCY</h3>
              <p>We ride with people we can rely on, not guess.</p>
            </div>

            <!-- Value 4 -->
            <div class="hazard-card glass-card">
              <div class="hazard-badge">VALUE 04</div>
              <div class="hazard-icon"><i class="fa-solid fa-people-group"></i></div>
              <h3>COMMUNITY OVER EGO</h3>
              <p>Riding is better when the group comes before the throttle.</p>
            </div>
            
            <!-- Value 5 -->
            <div class="hazard-card glass-card">
              <div class="hazard-badge">VALUE 05</div>
              <div class="hazard-icon"><i class="fa-solid fa-motorcycle"></i></div>
              <h3>INCLUSIVITY</h3>
              <p>It does not matter what you ride, only how you ride.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. The Principles Behind Every Ride (Mission & Vision) -->
      <section class="about-milestones-section">
        <div class="container">
          <div class="milestones-highway-box glass-card">
            <div class="highway-title-area">
              <div class="telemetry-tag"><i class="fa-solid fa-signs-post"></i> 03 • THE PRINCIPLES BEHIND EVERY RIDE</div>
              <h2 class="display-sm">WHAT WE AIM FOR.</h2>
            </div>

            <div class="waypoints-row" style="justify-content: center;">
              <!-- Mission -->
              <div class="waypoint-marker-card">
                <div class="waypoint-stone">
                  <span class="stone-dist">01</span>
                  <span class="stone-label">MISSION</span>
                </div>
                <div class="waypoint-info">
                  <h3>OUR MISSION</h3>
                  <p>Our mission is to make group riding safer, more structured, and more enjoyable by helping riders find the right people to ride with.</p>
                  <p>WingManX exists to remove uncertainty from riding so riders can focus on confidence, camaraderie, and the joy of the open road.</p>
                </div>
              </div>

              <!-- Vision -->
              <div class="waypoint-marker-card">
                <div class="waypoint-stone">
                  <span class="stone-dist">02</span>
                  <span class="stone-label">VISION</span>
                </div>
                <div class="waypoint-info">
                  <h3>OUR VISION</h3>
                  <p>Our vision is to build India’s most trusted motorcycle rider ecosystem. We see a future where riders have access to verified and responsible riding communities, where group rides are well planned, disciplined, and welcoming, and where technology supports better riding behaviour instead of creating chaos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. What Makes WingManX Different -->
      <section class="about-hazards-section">
        <div class="container">
          <div class="section-header">
            <div class="telemetry-tag"><i class="fa-solid fa-code-compare"></i> 04 • RIDE SMARTER, RIDE TOGETHER</div>
            <h2 class="section-heading">WHAT MAKES WINGMANX DIFFERENT.</h2>
          </div>

          <div class="road-hazards-strip flex-wrap justify-content-center">
            <div class="hazard-card glass-card" style="min-width: 300px; margin: 10px;">
              <div class="hazard-icon"><i class="fa-solid fa-mobile-screen"></i></div>
              <p class="mb-0 fw-bold">A rider first platform designed only for motorcyclists</p>
            </div>
            <div class="hazard-card glass-card" style="min-width: 300px; margin: 10px;">
              <div class="hazard-icon"><i class="fa-solid fa-user-check"></i></div>
              <p class="mb-0 fw-bold">Verified riders and structured group rides</p>
            </div>
            <div class="hazard-card glass-card" style="min-width: 300px; margin: 10px;">
              <div class="hazard-icon"><i class="fa-solid fa-id-card"></i></div>
              <p class="mb-0 fw-bold">Rider profiles built on ride history and kilometres ridden</p>
            </div>
            <div class="hazard-card glass-card" style="min-width: 300px; margin: 10px;">
              <div class="hazard-icon"><i class="fa-solid fa-handshake-angle"></i></div>
              <p class="mb-0 fw-bold">Compatibility based riding instead of random group joins</p>
            </div>
            <div class="hazard-card glass-card" style="min-width: 300px; margin: 10px;">
              <div class="hazard-icon"><i class="fa-solid fa-shield"></i></div>
              <p class="mb-0 fw-bold">Safety and discipline built into the experience</p>
            </div>
            <div class="hazard-card glass-card" style="min-width: 300px; margin: 10px;">
              <div class="hazard-icon"><i class="fa-solid fa-users"></i></div>
              <p class="mb-0 fw-bold">A community culture that values respect over recklessness</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 6. The Road Ahead -->
      <section class="about-founding-story">
        <div class="container">
          <div class="founding-editorial-panel">
            <div class="founding-details-col w-100 ps-0">
              <div class="telemetry-tag mb-3"><i class="fa-solid fa-route"></i> 05 • THE ROAD AHEAD</div>
              <h2 class="display-sm">THE FUTURE DIRECTION OF THE ECOSYSTEM.</h2>
              <p class="lead-editorial mb-4">
                As WingManX evolves, we will support riders through:
              </p>
              
              <div class="row g-4" style="margin-bottom: 2rem;">
                <div class="col-md-6">
                  <div class="glass-card p-4 h-100">
                    <h4 class="fw-bold mb-3"><i class="fa-solid fa-users-gear text-primary me-2"></i> Communities & Clubs</h4>
                    <p class="text-muted">Built around shared values</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="glass-card p-4 h-100">
                    <h4 class="fw-bold mb-3"><i class="fa-solid fa-graduation-cap text-primary me-2"></i> Training & Workshops</h4>
                    <p class="text-muted">Skill building sessions</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="glass-card p-4 h-100">
                    <h4 class="fw-bold mb-3"><i class="fa-solid fa-tent text-primary me-2"></i> Events & Experiences</h4>
                    <p class="text-muted">On and off the road</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="glass-card p-4 h-100">
                    <h4 class="fw-bold mb-3"><i class="fa-solid fa-heart-pulse text-primary me-2"></i> Safety Initiatives</h4>
                    <p class="text-muted">Safety first initiatives and responsible riding programs</p>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="glass-card p-4 h-100 text-center">
                    <h4 class="fw-bold mb-3"><i class="fa-solid fa-handshake text-primary me-2"></i> Meaningful Partnerships</h4>
                    <p class="text-muted">With brands, trainers, and experts</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-4 p-4 text-center glass-card border-primary">
                 <p class="mb-0 fw-bold fs-5">Our goal is to build a complete rider ecosystem. Not just an app for planning rides, but a trusted home for everything related to motorcycling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Our Team -->
      <section class="about-team-section" style="padding: 100px 0;">
        <div class="container">
          <div class="section-header text-center mb-5">
            <div class="telemetry-tag mx-auto"><i class="fa-solid fa-users"></i> 06 • OUR TEAM</div>
            <h2 class="section-heading">MEET OUR TEAM.</h2>
          </div>
          
          <div class="row g-5">
            <!-- Team Member 1 -->
            <div class="col-lg-6">
              <div class="team-member-card glass-card d-flex flex-column h-100 p-0 overflow-hidden" style="border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                <div class="team-member-img-wrapper" style="height: 350px; overflow: hidden;">
                    <img src="https://wingmanx.in/assets/img/icon/team/nilesh.webp" alt="Nilesh Sane" class="w-100 h-100 object-fit-cover" style="object-fit: cover; width: 100%; height: 100%;">
                </div>
                <div class="p-4 flex-grow-1" style="padding: 2rem;">
                    <h3 class="fw-bold mb-3" style="color: #fff; font-family: 'Space Grotesk', sans-serif;">Nilesh Sane</h3>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">Nilesh, the CEO of ReWise and a seasoned petrol head with over 25 years of IT wizardry under his belt. Picture this: a CEO who doesn't just excel in the boardroom but also dominates the asphalt, seamlessly blending technical prowess, marketing finesse, and business acumen.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">But here's where the story gets exciting—Nilesh isn't just a tech guru; he's a bonafide bike enthusiast who's been riding the waves of the open road since the Hero Honda CBZ craze took the nation by storm in 2000. Clocking over 1,75,000 kms on his trusty CBZ, Nilesh has explored every nook and cranny of his city, making the streets his playground.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">Fast forward to today, and Nilesh is proudly revving up a Kawasaki Versys 1000, unable to contain his excitement or the urge to hit the road. For him, riding isn't just a pastime; it's his meditation, a way to express himself, and an avenue to connect with the thrill-seekers of the community.</p>
                </div>
              </div>
            </div>
            
            <!-- Team Member 2 -->
            <div class="col-lg-6">
              <div class="team-member-card glass-card d-flex flex-column h-100 p-0 overflow-hidden" style="border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                <div class="team-member-img-wrapper" style="height: 350px; overflow: hidden;">
                    <img src="https://wingmanx.in/assets/img/icon/team/sahil.webp" alt="Dr. Sahil Trimbake" class="w-100 h-100 object-fit-cover" style="object-fit: cover; width: 100%; height: 100%;">
                </div>
                <div class="p-4 flex-grow-1" style="padding: 2rem;">
                    <h3 class="fw-bold mb-3" style="color: #fff; font-family: 'Space Grotesk', sans-serif;">Dr. Sahil Trimbake</h3>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">Dr. Sahil Trimbake — a maestro in the surgical world and an absolute petrol head with a penchant for the symphony of inline 4 supersport motorcycles. As the director at Novacare Dental Pune, Dr. Sahil isn't just making precision moves in the operating room; he's also making waves on the asphalt.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">Certified in head and neck surgical oncology and a specialist in craniofacial trauma, Dr. Sahil's expertise extends beyond the surgical table. His love affair with motorcycles began with the humble Bajaj Discover during his college days, navigating the vibrant streets of Pune.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">But the story doesn't stop there. Driven by the thrill of the ride, he took the plunge into the world of long-distance touring with his first big bike—a Triumph Bonneville. And when dreams materialized, he proudly rolled onto the asphalt on a Kawasaki Ninja 1000SX, embracing the raw power and exhilaration of the inline 4 engine.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">Beyond the surgical suite, Dr. Sahil, along with Nilesh Sane, birthed the concept of Wingman, fueled by their firsthand experiences and a shared passion for the open road. In his dual role as a surgeon and a community developer for Wingman, Dr. Sahil is seamlessly blending his love for precision in surgery with the thrill of the ride.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">So, whether he's wielding a scalpel or cruising on his Kawasaki, Dr. Sahil Trimbake is the epitome of a petrol head living life in the fast lane. Strap in for a journey that transcends the operating room and hits the open road with a surgeon who's as adept at carving turns as he is at saving lives!</p>
                </div>
              </div>
            </div>
            
            <!-- Team Member 3 -->
            <div class="col-lg-6">
              <div class="team-member-card glass-card d-flex flex-column h-100 p-0 overflow-hidden" style="border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                <div class="team-member-img-wrapper" style="height: 350px; overflow: hidden;">
                    <img src="https://wingmanx.in/assets/img/icon/team/kritika.webp" alt="Krithika Sane" class="w-100 h-100 object-fit-cover" style="object-fit: cover; width: 100%; height: 100%;">
                </div>
                <div class="p-4 flex-grow-1" style="padding: 2rem;">
                    <h3 class="fw-bold mb-3" style="color: #fff; font-family: 'Space Grotesk', sans-serif;">Krithika Sane</h3>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">Krithika is not just your typical finance whiz; she's the adrenaline-fueled powerhouse behind ReWise's global operations. With a track record spanning over two decades, she's got the financial finesse and operational prowess to steer our team to new heights.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">As the Global Operations Head, Krithika isn't just crunching numbers—she's revving up the gears for ReWise's worldwide expansion. And when she's not balancing the books, she's conquering the wild terrains of Maharashtra, scaling iconic forts with the spirit of a true adventurer.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">But here's the twist: Krithika isn't just a numbers guru and adventure seeker; she's also a petrol head's dream. Her infectious enthusiasm extends beyond the boardroom, making her the driving force behind WingManX, a brainchild that's as thrilling as a high-speed race.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">And guess what? Krithika isn't just the Global Operations Head—she's also the first WingMan to our founder Nilesh. So, buckle up and join us on this exhilarating ride with Krithika at the wheel, as we navigate the twists and turns of finance, operations, and global expansion. It's not just business; it's a wild adventure with a seasoned petrol head leading the way!</p>
                </div>
              </div>
            </div>
            
            <!-- Team Member 4 -->
            <div class="col-lg-6">
              <div class="team-member-card glass-card d-flex flex-column h-100 p-0 overflow-hidden" style="border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                <div class="team-member-img-wrapper" style="height: 350px; overflow: hidden;">
                    <img src="https://wingmanx.in/assets/img/icon/team/urvashi.webp" alt="Urvashi Patole" class="w-100 h-100 object-fit-cover" style="object-fit: cover; width: 100%; height: 100%;">
                </div>
                <div class="p-4 flex-grow-1" style="padding: 2rem;">
                    <h3 class="fw-bold mb-3" style="color: #fff; font-family: 'Space Grotesk', sans-serif;">Urvashi Patole</h3>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">Urvashi Patole is a motorcyclist and community strategist who has been a key figure in shaping the motorcycling community in India, especially for women riders.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">As the co-founder of The Bikerni, one of India's first all-women motorcycle associations, she has actively championed community building and rider empowerment. Urvashi has also led motorcycle tours for renowned brands like Royal Enfield, Jawa Motorcycles and KTM India, bringing riders together through shared experiences.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">Her professional journey includes roles with leading automotive brands such as KTM India, Bosch India, and Classic Legends Pvt. Ltd., where she developed strategic brand collaborations, ride programs and community building initiatives.</p>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; font-family: 'Manrope', sans-serif;">At WingManX, Urvashi leverages her experience to build partnerships with motorcycle brands, riding clubs, and related industries, driving growth and community engagement.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  `,
'''

with open(r'c:\Users\Lokesh\Downloads\wingmanx-website\public\js\pages.js', 'r', encoding='utf-8') as f:
    original = f.read()

# Replace the specific block
# Look for 'about: () => `...' and end at '  // 3. OUR ECOSYSTEM'
start_idx = original.find('  about: () => `')
end_idx = original.find('  // 3. OUR ECOSYSTEM', start_idx)
# We also need to get the comments before 3. OUR ECOSYSTEM:
#   // =========================================================================
#   // 3. OUR ECOSYSTEM
end_idx = original.find('  // =========================================================================\n  // 3. OUR ECOSYSTEM', start_idx)

if start_idx != -1 and end_idx != -1:
    new_text = original[:start_idx] + new_about_content + original[end_idx:]
    with open(r'c:\Users\Lokesh\Downloads\wingmanx-website\public\js\pages.js', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Successfully replaced.")
else:
    print("Could not find start or end index.")
    print(f"start: {start_idx}, end: {end_idx}")

