/**
 * WingmanX — GLOBAL APPLICATION RUNTIME & INTERACTIVITY
 * Manages site header states, mobile drawers, lightbox, footer newsletter, and boots the Router.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Site Header Scroll State
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close-btn');

  const toggleDrawer = (open) => {
    if (open) {
      mobileDrawer?.classList.add('active');
      mobileDrawer?.setAttribute('aria-hidden', 'false');
      mobileToggle?.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
      drawerClose?.focus();
    } else {
      mobileDrawer?.classList.remove('active');
      mobileDrawer?.setAttribute('aria-hidden', 'true');
      mobileToggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    }
  };

  mobileToggle?.addEventListener('click', () => toggleDrawer(true));
  drawerClose?.addEventListener('click', () => toggleDrawer(false));

  // Close drawer on clicking backdrop
  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      toggleDrawer(false);
    }
  });

  // Close drawer on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('active')) {
      toggleDrawer(false);
    }
  });

  // Mobile Resources Accordion Toggle
  const mobileDropdownToggles = document.querySelectorAll('.drawer-dropdown-toggle');
  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const parent = toggle.closest('.drawer-item');
      const isExpanded = parent?.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
  });

  // 3. Lightbox Modal Controls
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close-btn');

  const closeLightbox = () => {
    lightboxModal?.classList.remove('active');
    lightboxModal?.setAttribute('aria-hidden', 'true');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg) lightboxImg.src = '';
    const lightboxVideo = document.getElementById('lightbox-video');
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = '';
      lightboxVideo.style.display = 'none';
    }
  };

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // 4. Footer Newsletter Subscription Form
  const newsletterForm = document.getElementById('footer-newsletter-form');
  const newsletterStatus = document.getElementById('newsletter-status');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = newsletterForm.email.value;
      const btn = newsletterForm.querySelector('button');
      if (btn) btn.disabled = true;

      try {
        const res = await fetch('/newsletter-subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success) {
          if (newsletterStatus) {
            newsletterStatus.className = 'newsletter-feedback success';
            newsletterStatus.textContent = data.message || 'You are subscribed to the WingmanX rider dispatch!';
          }
          newsletterForm.reset();
        } else {
          if (newsletterStatus) {
            newsletterStatus.className = 'newsletter-feedback error';
            newsletterStatus.textContent = data.error || 'Subscription failed. Please check your email address.';
          }
        }
      } catch (err) {
        if (newsletterStatus) {
          newsletterStatus.className = 'newsletter-feedback error';
          newsletterStatus.textContent = 'Unable to connect to subscription service. Please try again.';
        }
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  }

  // 5. 8-Second Cinematic WingmanX Road Journey Loading Experience
  // "Let’s start our journey, make it count, and live the ride."
  const initWingmanLoader = () => {
    const loader = document.getElementById('wingmanx-loader');
    if (!loader) return;

    // Check if explicitly skipped via query parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('skipLoader')) {
      loader.style.display = 'none';
      return;
    }

    const canvas = document.getElementById('loader-road-canvas');
    if (!canvas) {
      loader.style.display = 'none';
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      loader.style.display = 'none';
      return;
    }

    // UI & Telemetry Element References
    const horizonGlow = document.getElementById('loaderHorizonGlow');
    const centerBrand = document.getElementById('loaderCenterBrand');
    const speedVal = document.getElementById('loaderSpeedVal');
    const speedBar = document.getElementById('loaderSpeedBar');
    const gearVal = document.getElementById('loaderGearVal');
    const gearBar = document.getElementById('loaderGearBar');
    const timelineStage = document.getElementById('loaderTimelineStage');
    const timelineProgress = document.getElementById('loaderTimelineProgress');
    const skipBtn = document.getElementById('loader-skip-btn');
    const wp01 = document.getElementById('wp01');
    const wp02 = document.getElementById('wp02');
    const wp03 = document.getElementById('wp03');
    const wp04 = document.getElementById('wp04');

    // Canvas Sizing with DPR (capped at 2 for optimal 60fps performance)
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // 3D Perspective Parameters
    const focalDist = 280; // Camera focal depth

    // Stars / Night Horizon Silhouettes
    const stars = [];
    for (let i = 0; i < 75; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random() * 0.44,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.3
      });
    }

    // 3D Atmospheric Particles / Speed Motes
    const particles = [];
    const NUM_PARTICLES = 85;
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1600,
        y: Math.random() * 320 - 40,
        z: Math.random() * 950 + 20,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.4
      });
    }

    // 8-Second Journey State
    const TOTAL_DURATION = 8000; // Exact 8.0 seconds
    let startTime = null;
    let animFrameId = null;
    let roadDistance = 0;
    let isTerminating = false;

    // Early Bypass (Escape key or Skip button)
    const finishJourney = (immediate = false) => {
      if (isTerminating) return;
      isTerminating = true;

      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', resizeCanvas);

      if (immediate) {
        loader.classList.add('fade-out');
        setTimeout(() => {
          if (animFrameId) cancelAnimationFrame(animFrameId);
          loader.style.display = 'none';
        }, 250);
      } else {
        if (horizonGlow) horizonGlow.classList.add('bloom');
        loader.classList.add('transition-bloom');
        setTimeout(() => {
          if (animFrameId) cancelAnimationFrame(animFrameId);
          loader.style.display = 'none';
        }, 650);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') finishJourney(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    skipBtn?.addEventListener('click', () => finishJourney(false));

    // Projection Helper: 3D (x, y, z) -> 2D Screen (sx, sy)
    const project = (x, y, z, vanX, vanY, camHeight) => {
      const scale = focalDist / (z + focalDist);
      const sx = vanX + x * scale;
      const sy = vanY + (camHeight - y) * scale;
      return { x: sx, y: sy, scale };
    };

    // Main 60FPS Render & Timeline Loop
    const render = (timestamp) => {
      if (isTerminating && !loader.parentElement) return;
      if (!startTime) startTime = timestamp;

      const elapsed = Math.min(timestamp - startTime, TOTAL_DURATION);
      const progress = elapsed / TOTAL_DURATION; // 0.0 to 1.0

      // =========================================================================
      // DYNAMIC TIMELINE & TELEMETRY CURVES (0s -> 8s)
      // =========================================================================
      let currentSpeed = 0;
      let currentGear = 'N';
      let gearProgress = 0;
      let formationStage = 'IGNITION • NIGHT RUN';

      if (progress < 0.18) {
        // Phase 1: 0.0s – 1.4s — Deep Darkness & Road Line Formation
        const p1 = progress / 0.18;
        currentSpeed = Math.round(p1 * 22);
        currentGear = p1 > 0.6 ? '1' : 'N';
        gearProgress = p1 > 0.6 ? 0.16 : 0;
        formationStage = 'IGNITION • SAHYADRI NIGHT PASS';
        if (horizonGlow && p1 > 0.3) horizonGlow.classList.add('ignited');
      } else if (progress < 0.52) {
        // Phase 2: 1.4s – 4.2s — Acceleration & Highway Perspective
        const p2 = (progress - 0.18) / 0.34;
        currentSpeed = Math.round(22 + p2 * 76); // 22 -> 98 KM/H
        if (p2 < 0.25) { currentGear = '1'; gearProgress = 0.2; }
        else if (p2 < 0.55) { currentGear = '2'; gearProgress = 0.38; }
        else if (p2 < 0.85) { currentGear = '3'; gearProgress = 0.55; }
        else { currentGear = '4'; gearProgress = 0.72; }
        formationStage = 'OPEN THROTTLE • NIGHT HIGHWAY ACCELERATION';
        if (wp01) wp01.classList.add('active');
        if (p2 > 0.5 && wp02) wp02.classList.add('active');
      } else if (progress < 0.78) {
        // Phase 3: 4.2s – 6.2s — WingmanX Logo Emerges from the Road
        const p3 = (progress - 0.52) / 0.26;
        currentSpeed = Math.round(98 + Math.sin(p3 * Math.PI * 0.5) * 12); // ~104 KM/H cruise
        currentGear = '5';
        gearProgress = 0.85;
        formationStage = 'WingmanX • LIVE THE RIDE';
        if (wp02) wp02.classList.add('active');
        if (wp03) wp03.classList.add('active');

        // Reveal brand emblem and emotional statement
        if (centerBrand && !centerBrand.classList.contains('visible')) {
          centerBrand.classList.add('visible');
        }
      } else {
        // Phase 4: 6.2s – 8.0s — Full Throttle Warp & Horizon Seamless Transition
        const p4 = (progress - 0.78) / 0.22;
        currentSpeed = Math.round(110 + p4 * 38); // 110 -> 148 KM/H
        currentGear = '6';
        gearProgress = 1.0;
        formationStage = 'FULL THROTTLE • EMBARKING';
        if (wp03) wp03.classList.add('active');
        if (wp04) wp04.classList.add('active');

        if (p4 > 0.65 && horizonGlow) {
          horizonGlow.classList.add('bloom');
        }
      }

      // Update Cockpit HUD Telemetry Elements
      if (speedVal) speedVal.textContent = String(currentSpeed).padStart(3, '0');
      if (speedBar) speedBar.style.width = `${Math.min((currentSpeed / 150) * 100, 100)}%`;
      if (gearVal) gearVal.textContent = currentGear;
      if (gearBar) gearBar.style.width = `${Math.round(gearProgress * 100)}%`;
      if (timelineStage) timelineStage.innerHTML = formationStage;
      if (timelineProgress) timelineProgress.style.width = `${Math.round(progress * 100)}%`;

      // Speed-dependent simulation advance
      const dt = 1 / 60;
      const speedUnitsPerSec = currentSpeed * 7.5;
      roadDistance += speedUnitsPerSec * dt;

      // Motorcycle Engine Vibration & Camera Sway
      const speedNorm = currentSpeed / 140;
      const camSway = Math.sin(elapsed * 0.0022) * 18 * speedNorm;
      const engineVibe = Math.sin(elapsed * 0.08) * 1.2 * speedNorm;

      const vanX = (width / 2) + camSway;
      const vanY = (height * 0.46) + engineVibe;
      // Dynamically compute camera height so road extends past bottom of screen
      const camHeight = (height - vanY) * 1.16;
      const roadHalfWidth = width * 0.62;

      // =========================================================================
      // CANVAS RENDERING
      // =========================================================================
      ctx.save();
      ctx.scale(dpr, dpr);

      // 1. Deep Space Night Sky
      const skyGrad = ctx.createLinearGradient(0, 0, 0, vanY);
      skyGrad.addColorStop(0, '#020306');
      skyGrad.addColorStop(0.7, '#05080e');
      skyGrad.addColorStop(1, '#0c101a');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, vanY + 2);

      // Starfield
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const sx = star.x * width;
        const sy = star.y * vanY;
        const twinkle = Math.sin(elapsed * 0.003 + i) * 0.25 + 0.75;
        ctx.globalAlpha = star.alpha * twinkle;
        ctx.fillRect(sx, sy, star.size, star.size);
      }
      ctx.globalAlpha = 1.0;

      // Distant Horizon Mountain Silhouettes
      ctx.beginPath();
      ctx.moveTo(0, vanY);
      ctx.lineTo(width * 0.12, vanY - 26);
      ctx.lineTo(width * 0.28, vanY - 14);
      ctx.lineTo(width * 0.44, vanY - 34);
      ctx.lineTo(width * 0.58, vanY - 18);
      ctx.lineTo(width * 0.74, vanY - 38);
      ctx.lineTo(width * 0.88, vanY - 22);
      ctx.lineTo(width, vanY);
      ctx.closePath();
      ctx.fillStyle = '#04060b';
      ctx.fill();

      // Atmospheric Horizon Soft Elliptical Glow
      ctx.save();
      ctx.scale(2.5, 0.7);
      const glowGrad = ctx.createRadialGradient(vanX / 2.5, vanY / 0.7, 0, vanX / 2.5, vanY / 0.7, 260);
      glowGrad.addColorStop(0, 'rgba(250, 121, 7, 0.55)');
      glowGrad.addColorStop(0.3, 'rgba(250, 121, 7, 0.22)');
      glowGrad.addColorStop(0.65, 'rgba(250, 121, 7, 0.05)');
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(vanX / 2.5, vanY / 0.7, 260, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2. Asphalt Road Bed (Extends completely through bottom of viewport and converges to horizon)
      const nearZ = 10;
      const farZ = 3200;
      const pNearLeft = project(-roadHalfWidth, 0, nearZ, vanX, vanY, camHeight);
      const pNearRight = project(roadHalfWidth, 0, nearZ, vanX, vanY, camHeight);
      const pFarLeft = project(-roadHalfWidth, 0, farZ, vanX, vanY, camHeight);
      const pFarRight = project(roadHalfWidth, 0, farZ, vanX, vanY, camHeight);

      // Road base polygon converges smoothly into the horizon point
      ctx.beginPath();
      ctx.moveTo(pNearLeft.x, pNearLeft.y);
      ctx.lineTo(pFarLeft.x, pFarLeft.y);
      ctx.lineTo(vanX, vanY);
      ctx.lineTo(pFarRight.x, pFarRight.y);
      ctx.lineTo(pNearRight.x, pNearRight.y);
      ctx.closePath();

      const roadGrad = ctx.createLinearGradient(0, vanY, 0, height);
      roadGrad.addColorStop(0, '#06080d');
      roadGrad.addColorStop(0.35, '#090d14');
      roadGrad.addColorStop(1, '#0e121a');
      ctx.fillStyle = roadGrad;
      ctx.fill();

      // Road shoulder ground
      ctx.fillStyle = '#030406';
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(0, vanY);
      ctx.lineTo(vanX, vanY);
      ctx.lineTo(pFarLeft.x, pFarLeft.y);
      ctx.lineTo(pNearLeft.x, pNearLeft.y);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(width, height);
      ctx.lineTo(width, vanY);
      ctx.lineTo(vanX, vanY);
      ctx.lineTo(pFarRight.x, pFarRight.y);
      ctx.lineTo(pNearRight.x, pNearRight.y);
      ctx.closePath();
      ctx.fill();

      // 3. Dual Tyre-Trail Textures (Motorcycle Friction & Heat)
      const trailOffsets = [-roadHalfWidth * 0.28, roadHalfWidth * 0.28];
      for (const tOffset of trailOffsets) {
        ctx.beginPath();
        const ptNear = project(tOffset, 0, nearZ, vanX, vanY, camHeight);
        const ptFar = project(tOffset, 0, farZ * 0.45, vanX, vanY, camHeight);
        ctx.moveTo(ptNear.x, ptNear.y);
        ctx.lineTo(ptFar.x, ptFar.y);
        ctx.lineWidth = 16 * ptNear.scale;
        ctx.strokeStyle = 'rgba(4, 5, 8, 0.78)';
        ctx.stroke();

        // Subtle orange heat core on tire contact patch
        if (currentSpeed > 25) {
          ctx.beginPath();
          ctx.moveTo(ptNear.x, ptNear.y);
          ctx.lineTo(ptFar.x, ptFar.y);
          ctx.lineWidth = 3 * ptNear.scale;
          ctx.strokeStyle = `rgba(250, 121, 7, ${0.14 * speedNorm})`;
          ctx.stroke();
        }
      }

      // 4. Glowing WingManX-Orange Road Edge Lines
      // During initial 0-1.4s, road line ignites and shoots forward toward the horizon
      let edgeZLimit = farZ;
      if (progress < 0.18) {
        const lineDrawEase = Math.min(progress / 0.16, 1);
        edgeZLimit = nearZ + (farZ - nearZ) * Math.pow(lineDrawEase, 1.4);
      }

      const drawGlowingLine = (startX, endX, zStart, zEnd, colorHex, glowHex, widthFactor) => {
        const p1 = project(startX, 0, zStart, vanX, vanY, camHeight);
        const p2 = project(endX, 0, zEnd, vanX, vanY, camHeight);

        // Outer Neon Bloom
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineWidth = (widthFactor * 3.8) * p1.scale;
        ctx.strokeStyle = glowHex;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Vibrant Core Line
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineWidth = (widthFactor * 1.5) * p1.scale;
        ctx.strokeStyle = colorHex;
        ctx.stroke();

        // White-Hot High-Intensity Center
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineWidth = (widthFactor * 0.6) * p1.scale;
        ctx.strokeStyle = '#fff7ed';
        ctx.stroke();
      };

      // Left & Right Road Boundary Lines
      drawGlowingLine(-roadHalfWidth, -roadHalfWidth, nearZ, edgeZLimit, '#fa7907', 'rgba(250, 121, 7, 0.45)', 7.0);
      drawGlowingLine(roadHalfWidth, roadHalfWidth, nearZ, edgeZLimit, '#fa7907', 'rgba(250, 121, 7, 0.45)', 7.0);

      // 5. Center Dashed Lane Markings with Motion Blur & Perspective
      const DASH_CYCLE = 115;
      const DASH_LEN = 38 + speedNorm * 38; // Dashes stretch with speed
      const numDashes = Math.ceil((farZ - nearZ) / DASH_CYCLE);

      for (let i = 0; i <= numDashes; i++) {
        const dashZ = nearZ + ((i * DASH_CYCLE - (roadDistance % DASH_CYCLE) + (farZ - nearZ)) % (farZ - nearZ));
        if (dashZ > edgeZLimit) continue;

        const dashFarZ = Math.min(dashZ + DASH_LEN, edgeZLimit);
        const pD1 = project(0, 0, dashZ, vanX, vanY, camHeight);
        const pD2 = project(0, 0, dashFarZ, vanX, vanY, camHeight);

        // Dashed center line glow
        ctx.beginPath();
        ctx.moveTo(pD1.x, pD1.y);
        ctx.lineTo(pD2.x, pD2.y);
        ctx.lineWidth = 11 * pD1.scale;
        ctx.strokeStyle = 'rgba(250, 121, 7, 0.35)';
        ctx.stroke();

        // Crisp luminous white core
        ctx.beginPath();
        ctx.moveTo(pD1.x, pD1.y);
        ctx.lineTo(pD2.x, pD2.y);
        ctx.lineWidth = 4.2 * pD1.scale;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
      }

      // 6. Passing Verge Light Beacons / Cat's Eye Highway Reflectors
      const BEACON_CYCLE = 190;
      const numBeacons = Math.ceil((farZ - nearZ) / BEACON_CYCLE);
      for (let i = 0; i < numBeacons; i++) {
        const bZ = nearZ + ((i * BEACON_CYCLE - (roadDistance % BEACON_CYCLE) + (farZ - nearZ)) % (farZ - nearZ));
        if (bZ < 45 || bZ > 680 || bZ > edgeZLimit) continue;

        // Left & Right verge beacons
        for (const side of [-1, 1]) {
          const bx = side * (roadHalfWidth + 38);
          const pb = project(bx, 14, bZ, vanX, vanY, camHeight);

          const beaconAlpha = Math.min((680 - bZ) / 220, 1) * Math.min((bZ - 45) / 60, 1);
          const beaconRadius = Math.max(1.8, 8 * pb.scale);

          ctx.fillStyle = `rgba(250, 121, 7, ${beaconAlpha * 0.9})`;
          ctx.beginPath();
          ctx.arc(pb.x, pb.y, beaconRadius, 0, Math.PI * 2);
          ctx.fill();

          // Motion streak as verge beacon rushes past close to camera
          if (bZ < 100 && currentSpeed > 40) {
            ctx.strokeStyle = `rgba(255, 170, 70, ${beaconAlpha * 0.75})`;
            ctx.lineWidth = beaconRadius * 0.8;
            ctx.beginPath();
            ctx.moveTo(pb.x, pb.y);
            ctx.lineTo(pb.x + side * (130 * (1 - bZ / 100)), pb.y + (70 * (1 - bZ / 100)));
            ctx.stroke();
          }
        }
      }

      // 7. Atmospheric Speed Motes & Flying Particles
      ctx.fillStyle = '#ffbe76';
      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];
        // Move particle towards rider
        pt.z -= (speedUnitsPerSec * 1.15) * dt;
        if (pt.z < nearZ) {
          pt.z = farZ;
          pt.x = (Math.random() - 0.5) * 1600;
          pt.y = Math.random() * 320 - 40;
        }

        const proj = project(pt.x, pt.y, pt.z, vanX, vanY, camHeight);
        if (proj.x < 0 || proj.x > width || proj.y < 0 || proj.y > height) continue;

        const streakLen = Math.max(2, (currentSpeed / 8) * proj.scale);
        const streakAlpha = Math.min(pt.alpha * (currentSpeed / 40), 0.9);

        ctx.strokeStyle = `rgba(255, 220, 180, ${streakAlpha})`;
        ctx.lineWidth = Math.max(1, pt.size * proj.scale * 1.5);
        ctx.beginPath();
        ctx.moveTo(proj.x, proj.y);
        ctx.lineTo(proj.x, proj.y + streakLen);
        ctx.stroke();
      }

      // 8. Single Luminous Shockwave Pulse on Brand Emergence (Phase 3 ~ 4.2s to 5.4s)
      if (progress >= 0.52 && progress <= 0.64) {
        const shockProgress = (progress - 0.52) / 0.12;
        const shockRadius = shockProgress * (Math.max(width, height) * 0.65);
        const shockAlpha = (1 - shockProgress) * 0.5;

        ctx.beginPath();
        ctx.arc(vanX, vanY, shockRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(250, 121, 7, ${shockAlpha})`;
        ctx.lineWidth = 12 * (1 - shockProgress);
        ctx.stroke();
      }

      ctx.restore();

      // Continue animation or complete seamlessly into website
      if (progress < 1.0 && !isTerminating) {
        animFrameId = requestAnimationFrame(render);
      } else {
        finishJourney(false);
      }
    };

    // Kick off animation loop
    animFrameId = requestAnimationFrame(render);
  };
  initWingmanLoader();

  // 6. IntersectionObserver for Efficient Video Offscreen Pausing
  const initVideoObserver = () => {
    if (!('IntersectionObserver' in window)) return;
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          if (video.paused) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('video').forEach(v => videoObserver.observe(v));
  };
  initVideoObserver();

  // 7. Boot the SPA Router
  if (window.Router) {
    window.appRouter = new window.Router();
    window.wingmanxRouter = window.appRouter;
  }
});
