/**
 * WingmanX — ROAD MOTION & BMW S1000 TIRE ENGINE
 * 
 * Implements:
 * 1. Scroll-driven BMW S1000 wheel rotation, perspective translation, and chassis lean
 * 2. Realistic ground-contact spark and friction particle physics
 * 3. 3D perspective road ribbon with animated lane markings and dynamic curves
 * 4. Interactive Ride Dynamics Simulator (virtual speed, lean angle, formation link)
 * 5. 4-Stage WingmanX Ride Milestones (Discovery -> Radar Lock -> Formation -> Passport)
 * 6. Clean lifecycle: removes all event listeners and cancels RAF on destroy()
 */

class RoadMotionSystem {
  constructor() {
    this.section = document.querySelector('.tire-section');
    this.canvas = document.getElementById('road-canvas');
    this.wheelElem = document.getElementById('bmw-wheel');
    this.sparkCanvas = document.getElementById('spark-canvas');
    
    if (!this.section || !this.wheelElem) return;

    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.sCtx = this.sparkCanvas ? this.sparkCanvas.getContext('2d') : null;

    this.scrollProgress = 0;
    this.targetProgress = 0;
    this.currentRotation = 0;
    this.wheelSwayX = 0;
    this.wheelSwayY = 0;
    this.speed = 0;
    this.virtualSpeed = 0;
    this.targetVirtualSpeed = 0;
    this.lastScrollY = window.scrollY;
    this.lastScrollTime = performance.now();
    this.isVisible = false;
    this.sparks = [];
    this.rafId = null;

    // Cache elements for telemetry
    this.speedValEl = document.getElementById('sim-speed-val');
    this.speedBarEl = document.getElementById('sim-speed-bar');
    this.leanValEl = document.getElementById('sim-lean-val');
    this.leanBarEl = document.getElementById('sim-lean-bar');
    this.packValEl = document.getElementById('sim-pack-val');
    this.packBarEl = document.getElementById('sim-pack-bar');
    this.distValEl = document.getElementById('road-distance-counter');
    this.waypoints = document.querySelectorAll('.tire-waypoint');

    // Bound listeners for clean destruction
    this.boundScroll = () => this.onScroll();
    this.boundResize = () => this.resize();

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', this.boundResize, { passive: true });
    window.addEventListener('scroll', this.boundScroll, { passive: true });

    // Visibility observer to pause RAF loop when offscreen
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible) {
          this.lastScrollY = window.scrollY;
          this.lastScrollTime = performance.now();
          if (!this.rafId) {
            this.animate();
          }
        } else {
          if (this.rafId) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
          }
        }
      });
    }, { threshold: 0.05 });

    this.observer.observe(this.section);
    this.onScroll();
  }

  resize() {
    if (!this.section) return;
    const centerStage = this.section.querySelector('.tire-stage-center');
    if (centerStage) {
      this.width = centerStage.clientWidth;
      this.height = centerStage.clientHeight || 460;
    } else {
      this.width = window.innerWidth;
      this.height = 460;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    if (this.canvas) {
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      if (this.ctx) {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.scale(dpr, dpr);
      }
    }

    if (this.sparkCanvas) {
      this.sparkCanvas.width = this.width * dpr;
      this.sparkCanvas.height = this.height * dpr;
      if (this.sCtx) {
        this.sCtx.setTransform(1, 0, 0, 1, 0, 0);
        this.sCtx.scale(dpr, dpr);
      }
    }
  }

  onScroll() {
    if (!this.section) return;
    const rect = this.section.getBoundingClientRect();
    const windowH = window.innerHeight;
    
    // Progress spans from entering bottom to leaving top
    const totalDist = rect.height + windowH;
    const currentDist = windowH - rect.top;
    const rawProgress = currentDist / totalDist;
    this.targetProgress = Math.max(0, Math.min(1, rawProgress));

    const now = performance.now();
    const dt = Math.max(16, now - this.lastScrollTime);
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - this.lastScrollY);

    // Compute instantaneous scroll velocity
    this.speed = (scrollDelta / dt) * 16;
    this.lastScrollY = currentScrollY;
    this.lastScrollTime = now;

    // Target virtual speed: 30 km/h baseline cruise on active scroll, scaling with scroll intensity up to 118 km/h
    if (this.speed > 0.5) {
      this.targetVirtualSpeed = Math.min(118, 38 + this.speed * 8);
    } else {
      this.targetVirtualSpeed = 0;
    }

    // Emit sparks on active scroll when wheel is engaged on tarmac (progress 0.15 - 0.85)
    if (this.speed > 2 && this.scrollProgress > 0.12 && this.scrollProgress < 0.9) {
      this.addSparks(Math.min(6, Math.floor(this.speed * 1.5)));
    }
  }

  addSparks(count) {
    if (!this.sparkCanvas) return;
    const groundX = this.width * 0.5 + (this.wheelSwayX || 0);
    const groundY = this.height * 0.76;

    for (let i = 0; i < count; i++) {
      this.sparks.push({
        x: groundX + (Math.random() - 0.5) * 44,
        y: groundY + (Math.random() - 0.5) * 8,
        vx: (Math.random() - 0.5) * 7,
        vy: -(Math.random() * 4.5 + 1.2),
        life: 1.0,
        decay: Math.random() * 0.045 + 0.025,
        size: Math.random() * 3 + 1.5,
        color: Math.random() > 0.35 ? '#FA7907' : '#FFFFFF'
      });
    }
  }

  animate() {
    if (!this.isVisible) {
      this.rafId = null;
      return;
    }

    // Smooth lerp for scroll progress
    this.scrollProgress += (this.targetProgress - this.scrollProgress) * 0.085;

    // Smooth lerp for virtual velocity
    this.virtualSpeed += (this.targetVirtualSpeed - this.virtualSpeed) * 0.1;
    this.targetVirtualSpeed *= 0.94; // natural deceleration when scroll pauses

    // Road curve sway (horizontal sinusoidal curve reaction)
    this.wheelSwayX = Math.sin(this.scrollProgress * Math.PI * 2.2) * 26;
    
    // Chassis suspension breathing & road contact (vertical damping)
    const suspension = Math.sin(this.scrollProgress * Math.PI * 6) * 4.5;
    this.wheelSwayY = suspension;

    // Wheel rotation: smoothly synchronized with scroll distance (8 complete revolutions over the section)
    this.currentRotation = this.scrollProgress * 2880;

    // Realistic chassis lean into corners: rolls left/right with curve offset
    const leanAngle = Math.sin(this.scrollProgress * Math.PI * 2.2) * 14;

    // Perspective scale: starts slightly compact (0.90) and settles into 1.0 as road engages
    const perspectiveScale = 0.90 + (this.scrollProgress * 0.10);

    if (this.wheelElem) {
      this.wheelElem.style.transform = `
        translate3d(${this.wheelSwayX.toFixed(2)}px, ${this.wheelSwayY.toFixed(2)}px, 0)
        scale(${perspectiveScale.toFixed(3)})
        rotateZ(${this.currentRotation.toFixed(1)}deg)
        rotateY(${leanAngle.toFixed(1)}deg)
      `;
    }

    // Update dynamic telemetry
    this.updateTelemetry(leanAngle);

    // Render 3D Perspective Road Canvas
    this.drawRoad();

    // Render Sparks
    this.drawSparks();

    this.rafId = requestAnimationFrame(() => this.animate());
  }

  updateTelemetry(leanAngle) {
    // 1. Virtual Velocity
    const displaySpeed = Math.round(this.virtualSpeed);
    if (this.speedValEl) {
      this.speedValEl.innerHTML = `${displaySpeed} <small>KM/H</small>`;
    }
    if (this.speedBarEl) {
      const pct = Math.min(100, Math.round((displaySpeed / 120) * 100));
      this.speedBarEl.style.width = `${pct}%`;
    }

    // 2. Dynamic Lean Angle
    const absLean = Math.abs(Math.round(leanAngle));
    const leanDir = leanAngle > 1.5 ? 'RIGHT' : leanAngle < -1.5 ? 'LEFT' : 'CENTER';
    if (this.leanValEl) {
      this.leanValEl.innerHTML = `${absLean}&deg; <small>${leanDir}</small>`;
    }
    if (this.leanBarEl) {
      const leanPct = 50 + (leanAngle / 14) * 45;
      this.leanBarEl.style.width = `${Math.min(100, Math.max(0, leanPct))}%`;
    }

    // 3. Pack Formation Link & Journey Milestones
    const p = this.scrollProgress;
    let formationText = 'INITIALIZING';
    let formationPct = 15;

    if (p < 0.25) {
      formationText = 'STAGE 01: SQUAD LOBBY';
      formationPct = 25;
    } else if (p < 0.55) {
      formationText = 'STAGE 02: RADAR LOCK (5 BIKES)';
      formationPct = 55;
    } else if (p < 0.85) {
      formationText = 'STAGE 03: FORMATION SYNC';
      formationPct = 82;
    } else {
      formationText = 'STAGE 04: SUMMIT LOGGED';
      formationPct = 100;
    }

    if (this.packValEl) {
      this.packValEl.textContent = formationText;
    }
    if (this.packBarEl) {
      this.packBarEl.style.width = `${formationPct}%`;
    }

    // 4. Distance Counter
    const kmCovered = Math.floor(p * 180);
    if (this.distValEl) {
      this.distValEl.textContent = `${kmCovered} KM`;
    }

    // 5. Waypoints Activation
    if (this.waypoints) {
      this.waypoints.forEach(wp => {
        const threshold = parseFloat(wp.getAttribute('data-distance') || '0');
        if (p * 1000 >= threshold) {
          wp.classList.add('active');
        } else {
          wp.classList.remove('active');
        }
      });
    }
  }

  drawRoad() {
    if (!this.ctx || !this.width) return;
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    ctx.clearRect(0, 0, w, h);

    // Horizon and ground contact geometry
    const horizonY = h * 0.12;
    const bottomY = h * 0.99;

    // Smooth horizontal road curvature driven by scroll progress
    const curveOffset = Math.sin(this.scrollProgress * Math.PI * 2.2) * (w * 0.14);

    // Perspective vanishing geometry
    const topWidth = Math.max(48, w * 0.14);
    const bottomWidth = Math.max(280, w * 0.86);
    const centerX = w * 0.5 + curveOffset;

    const roadTopL = centerX - topWidth * 0.5;
    const roadTopR = centerX + topWidth * 0.5;
    const roadBotL = (w * 0.5) - bottomWidth * 0.5;
    const roadBotR = (w * 0.5) + bottomWidth * 0.5;

    // Road Surface: Dark asphalt gradient with high contrast
    const roadGrad = ctx.createLinearGradient(0, horizonY, 0, bottomY);
    roadGrad.addColorStop(0, 'rgba(10, 14, 22, 0.35)');
    roadGrad.addColorStop(0.45, 'rgba(14, 18, 26, 0.85)');
    roadGrad.addColorStop(0.85, 'rgba(9, 12, 18, 0.95)');
    roadGrad.addColorStop(1, 'rgba(5, 7, 13, 1.0)');

    ctx.beginPath();
    ctx.moveTo(roadTopL, horizonY);
    ctx.lineTo(roadTopR, horizonY);
    ctx.lineTo(roadBotR, bottomY);
    ctx.lineTo(roadBotL, bottomY);
    ctx.closePath();
    ctx.fillStyle = roadGrad;
    ctx.fill();

    // Road Edge Curbs (WingmanX Safety Orange Neon Curbs)
    ctx.lineWidth = 3.5;
    ctx.strokeStyle = 'rgba(250, 121, 7, 0.7)';
    ctx.shadowColor = 'rgba(250, 121, 7, 0.85)';
    ctx.shadowBlur = 14;

    // Left Curb
    ctx.beginPath();
    ctx.moveTo(roadTopL, horizonY);
    ctx.lineTo(roadBotL, bottomY);
    ctx.stroke();

    // Right Curb
    ctx.beginPath();
    ctx.moveTo(roadTopR, horizonY);
    ctx.lineTo(roadBotR, bottomY);
    ctx.stroke();

    ctx.shadowBlur = 0; // reset shadow for dashes

    // Animated Perspective Center Lane Dashes
    // Speed of lane dash motion linked to scroll velocity & progress
    const time = (performance.now() * 0.0018) + (this.scrollProgress * 16);
    const numDashes = 12;

    for (let i = 0; i < numDashes; i++) {
      let t1 = (i + (time % 1)) / numDashes;
      let t2 = t1 + 0.045;
      if (t2 > 1) continue;

      // Exponential perspective progression from vanishing point to foreground
      const p1 = Math.pow(t1, 2.5);
      const p2 = Math.pow(t2, 2.5);

      const y1 = horizonY + (bottomY - horizonY) * p1;
      const y2 = horizonY + (bottomY - horizonY) * p2;

      const currentCenterX1 = (roadTopL + roadTopR) * 0.5 * (1 - p1) + (roadBotL + roadBotR) * 0.5 * p1;
      const currentCenterX2 = (roadTopL + roadTopR) * 0.5 * (1 - p2) + (roadBotL + roadBotR) * 0.5 * p2;

      ctx.beginPath();
      ctx.moveTo(currentCenterX1, y1);
      ctx.lineTo(currentCenterX2, y2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 + p1 * 0.88})`;
      ctx.lineWidth = 2 + p1 * 6.5;
      ctx.stroke();
    }

    // Subtle Wheel Contact Shadow on Asphalt
    const groundX = w * 0.5 + (this.wheelSwayX || 0);
    const groundY = h * 0.76;
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(groundX, groundY + 12, 55, 12, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
    ctx.filter = 'blur(6px)';
    ctx.fill();
    ctx.restore();
  }

  drawSparks() {
    if (!this.sCtx || !this.sparks.length) return;
    const ctx = this.sCtx;
    ctx.clearRect(0, 0, this.width, this.height);

    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const s = this.sparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.life -= s.decay;

      if (s.life <= 0) {
        this.sparks.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, s.life);
      ctx.fillStyle = s.color;
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    window.removeEventListener('resize', this.boundResize);
    window.removeEventListener('scroll', this.boundScroll);

    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    this.isVisible = false;
    this.sparks = [];
    if (this.ctx && this.width) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
    if (this.sCtx && this.width) {
      this.sCtx.clearRect(0, 0, this.width, this.height);
    }
  }
}

// Export as global for router lifecycle integration
window.RoadMotionSystem = RoadMotionSystem;
