/**
 * WingmanX — CLIENT-SIDE SPA ROUTER
 * Preserves 100% of application-relative routing without full-page reloads
 * Ensures instant navigation, proper history states, SEO metadata, and active link highlights.
 */

/**
 * WingmanX — APP JOURNEY & MOCKUP CONTROLLER
 * Drives Section 06: How WingmanX Fits Into Your Ride
 * Synchronizes stage milestones with real app screen mockups, scroll observation, and keyboard controls.
 */
class AppJourneySystem {
  constructor() {
    this.section = document.getElementById('app-showcase');
    if (!this.section) return;

    this.featureItems = Array.from(this.section.querySelectorAll('.feature-item'));
    this.phoneImgs = Array.from(this.section.querySelectorAll('.phone-screen-img'));
    this.chip = document.getElementById('stageIndicatorChip');
    this.progress = document.getElementById('journeyProgressIndicator');
    this.listeners = [];
    this.sectionObserver = null;
    this.stageObserver = null;
    this.isSectionVisible = false;

    this.stageLabels = {
      '1': 'STAGE 01 \u2022 DISCOVER RUNS',
      '2': 'STAGE 02 \u2022 ROUTE BRIEFING',
      '3': 'STAGE 03 \u2022 RIDER PASSPORT',
      '4': 'STAGE 04 \u2022 GET THE APP'
    };

    this.init();
  }

  addListener(el, evt, fn) {
    if (!el) return;
    el.addEventListener(evt, fn);
    this.listeners.push({ el, evt, fn });
  }

  init() {
    // 1. Click, Hover, and Keyboard navigation on feature items
    this.featureItems.forEach((item, idx) => {
      const mockupIndex = item.getAttribute('data-mockup');

      const onSelect = () => this.switchScreen(mockupIndex);
      this.addListener(item, 'mouseenter', onSelect);
      this.addListener(item, 'click', onSelect);

      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.switchScreen(mockupIndex);
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          const next = this.featureItems[(idx + 1) % this.featureItems.length];
          if (next) { next.focus(); this.switchScreen(next.getAttribute('data-mockup')); }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = this.featureItems[(idx - 1 + this.featureItems.length) % this.featureItems.length];
          if (prev) { prev.focus(); this.switchScreen(prev.getAttribute('data-mockup')); }
        }
      };
      this.addListener(item, 'keydown', onKey);
    });

    // 2. Section Visibility Observer (pauses animations when offscreen)
    if ('IntersectionObserver' in window) {
      this.sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          this.isSectionVisible = entry.isIntersecting;
        });
      }, { threshold: 0.1 });
      this.sectionObserver.observe(this.section);

      // 3. Scroll-triggered Stage Observer (only triggers when section is in view)
      this.stageObserver = new IntersectionObserver((entries) => {
        if (!this.isSectionVisible) return;
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const mockupIndex = entry.target.getAttribute('data-mockup');
            if (mockupIndex) this.switchScreen(mockupIndex);
          }
        });
      }, { threshold: 0.5 });

      this.featureItems.forEach(item => this.stageObserver.observe(item));
    }

    // Initialize initial state
    this.switchScreen('1');
  }

  switchScreen(mockupIndex) {
    if (!mockupIndex) return;

    this.featureItems.forEach(fi => {
      const active = fi.getAttribute('data-mockup') === mockupIndex;
      fi.classList.toggle('active', active);
      fi.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    this.phoneImgs.forEach((img, idx) => {
      const imgIndex = img.getAttribute('data-index') || (idx + 1).toString();
      img.classList.toggle('active', imgIndex === mockupIndex);
    });

    if (this.chip && this.stageLabels[mockupIndex]) {
      const textSpan = this.chip.querySelector('.chip-text');
      if (textSpan) textSpan.textContent = this.stageLabels[mockupIndex];
    }

    if (this.progress && this.featureItems.length > 1) {
      const num = parseInt(mockupIndex, 10) || 1;
      const pct = ((num - 1) / (this.featureItems.length - 1)) * 100;
      this.progress.style.height = `${pct}%`;
    }
  }

  destroy() {
    this.listeners.forEach(({ el, evt, fn }) => {
      if (el && typeof el.removeEventListener === 'function') {
        el.removeEventListener(evt, fn);
      }
    });
    this.listeners = [];
    if (this.sectionObserver) this.sectionObserver.disconnect();
    if (this.stageObserver) this.stageObserver.disconnect();
  }
}
window.AppJourneySystem = AppJourneySystem;

class Router {
  constructor() {
    this.appView = document.getElementById('app-view');
    this.currentPath = window.location.pathname;
    this.activeSystems = [];

    // Route Table mapping clean application-relative URLs
    this.routes = {
      '/': {
        render: window.Pages.home,
        title: "WingmanX — Don't Just Plan The Ride. Live It.",
        metaDesc: "WingmanX is the premier connected rider platform connecting motorcycle riders, communities, brands, and OEM partners across India."
      },
      '/about-us': {
        render: window.Pages.about,
        title: "About Us — WingmanX Mobility Labs",
        metaDesc: "Learn why WingmanX was built by riders, for riders. Our mission, values, and community commitment."
      },
      '/wingmanx-ecosystem': {
        render: window.Pages.ecosystem,
        title: "Our Ecosystem — WingmanX Connected Platform",
        metaDesc: "Explore the 4 interconnected pillars of the WingmanX ecosystem: Riders, Clubs, Brands, and Motorcycle OEMs."
      },
      '/brands-sponsors': {
        render: window.Pages.brands,
        title: "Brands & Sponsors — WingmanX Partnerships",
        metaDesc: "Partner with WingmanX to engage passionate, verified motorcyclists with authentic milestone rewards and event sponsorships."
      },
      '/oem-partners': {
        render: window.Pages.oem,
        title: "OEM Partners — WingmanX Connected Telematics",
        metaDesc: "Integrated motorcycle cluster telematics, embedded safety SDKs, and factory brand rider clubs for vehicle manufacturers."
      },
      '/community-contributors': {
        render: window.Pages.contributors,
        title: "Community Contributors — The People Who Built The Road",
        metaDesc: "Honoring the veteran riders, road captains, and safety advocates who helped shape the WingmanX platform."
      },
      '/awards': {
        render: window.Pages.awards,
        title: "Awards & Recognition — WingmanX Milestones",
        metaDesc: "Discover national mobility awards and accolades won by WingmanX for motorcycle telematics and rider safety innovation."
      },
      '/blogs': {
        render: window.Pages.blogs,
        title: "Rider Journal & Blogs — WingmanX",
        metaDesc: "Essential motorcycle touring guides, Western Ghat monsoon riding tips, toolkit essentials, and pack safety philosophy."
      },
      '/blogs/mastering-the-monsoon-ghats': {
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
      },
      '/our-galleries': {
        render: window.Pages.galleries,
        title: "Our Galleries — WingmanX Visual Archive",
        metaDesc: "High-resolution photo and video chronicle of community motorcycle expeditions across India."
      },
      '/our-testimonials': {
        render: window.Pages.testimonials,
        title: "Rider Stories & Testimonials — WingmanX",
        metaDesc: "Real feedback from motorcycle club presidents, solo tourers, and weekend riders across India."
      },
      '/careers': {
        render: window.Pages.careers,
        title: "Careers — Join The WingmanX Crew",
        metaDesc: "Work with passionate motorcyclists and engineers. Open roles in mobile engineering, backend architecture, and community lead."
      },
      '/contact-us': {
        render: window.Pages.contact,
        title: "Contact Us — WingmanX Headquarters",
        metaDesc: "Reach WingmanX Mobility Labs in Pune, Maharashtra. Support, ride hosting inquiries, and partnership requests."
      },
      '/privacy-policy': {
        render: window.Pages.privacy,
        title: "Privacy Policy — WingmanX",
        metaDesc: "WingmanX data protection, rider privacy, and location telemetry handling policies."
      },
      '/terms-of-service': {
        render: window.Pages.terms,
        title: "Terms of Service — WingmanX",
        metaDesc: "Terms and conditions for using WingmanX digital services, community guidelines, and rider safety declarations."
      },
      '/cancellation-refund-policy': {
        render: window.Pages.refund,
        title: "Cancellation & Refund Policy — WingmanX",
        metaDesc: "Refund policies for WingmanX curated motorcycle expeditions and digital service subscriptions."
      },
      '/explore-rides': {
        render: window.Pages.home,
        title: "Explore Community Expeditions & Runs — WingmanX",
        metaDesc: "Discover upcoming weekend runs, mountain pass circuits, and squad rides across Maharashtra."
      }
    };

    this.init();
  }

  init() {
    // Intercept clicks on application-relative links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Special handler for Global GET THE APP (#app-download or /#app-download, with #app-showcase fallback)
      if (href === '#app-download' || href === '/#app-download' || href === '#app-showcase' || href === '/#app-showcase') {
        e.preventDefault();
        const drawer = document.getElementById('mobile-drawer');
        if (drawer) {
          drawer.classList.remove('active');
          drawer.classList.remove('open');
          drawer.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('no-scroll');
          const overlay = document.getElementById('drawer-overlay');
          if (overlay) overlay.classList.remove('active');
          const toggle = document.getElementById('mobile-nav-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }

        const scrollToTarget = () => {
          const target = document.getElementById('app-download') || document.getElementById('app-showcase');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        };

        if (window.location.pathname !== '/') {
          this.navigate('/');
          setTimeout(() => {
            scrollToTarget();
            history.pushState(null, '', '#app-download');
          }, 150);
        } else {
          scrollToTarget();
          history.pushState(null, '', '#app-download');
        }
        return;
      }

      // Handle anchor jumps on the same page
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, '', href);
        }
        return;
      }

      // Handle external links, mailto, tel
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return; // Allow default browser navigation
      }

      // Application-relative internal route
      e.preventDefault();
      this.navigate(href);
    });

    // Handle browser forward/back buttons
    window.addEventListener('popstate', () => {
      this.resolveRoute(window.location.pathname, false);
    });

    // Initial load
    this.resolveRoute(window.location.pathname, false);
  }

  navigate(path) {
    if (window.location.pathname === path && !path.includes('#')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    history.pushState(null, '', path);
    this.resolveRoute(path, true);
  }

  resolveRoute(rawPath, shouldScrollTop = true) {
    // Separate pathname from query parameters and hash
    const currentRaw = rawPath || window.location.pathname;
    let cleanPath = currentRaw.split('?')[0].split('#')[0];
    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }

    const route = this.routes[cleanPath];

    // Destroy existing active systems to prevent memory leaks
    this.destroyActiveSystems();

    if (!route) {
      // Deliberate 404 handler - NEVER silently render homepage
      if (this.appView && window.Pages && window.Pages.notFound) {
        this.appView.innerHTML = window.Pages.notFound();
        document.title = "404 — Route Not Found | WingmanX";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', "The requested road coordinate was not found on WingManX.");
      }
      if (shouldScrollTop) {
        window.scrollTo(0, 0);
      }
      this.updateActiveNavLinks('');
      const drawer = document.getElementById('mobile-drawer');
      if (drawer && drawer.classList.contains('active')) {
        drawer.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
      return;
    }

    // Render View Template
    if (this.appView && route.render) {
      this.appView.innerHTML = route.render();
      document.title = route.title;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', route.metaDesc);
    }

    // Scroll handling
    if (shouldScrollTop) {
      window.scrollTo(0, 0);
    }

    // Handle hash scrolling if present
    if (window.location.hash) {
      setTimeout(() => {
        const hashTarget = document.querySelector(window.location.hash);
        if (hashTarget) {
          hashTarget.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    // Update active state in navbars
    this.updateActiveNavLinks(cleanPath);

    // Close mobile drawer if open
    const drawer = document.getElementById('mobile-drawer');
    if (drawer && drawer.classList.contains('active')) {
      drawer.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }

    // Initialize page-specific behaviors
    this.postRenderHook(cleanPath);
  }

  updateActiveNavLinks(cleanPath) {
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link, .dropdown-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === cleanPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  destroyActiveSystems() {
    this.activeSystems.forEach(sys => {
      if (sys && typeof sys.destroy === 'function') {
        sys.destroy();
      }
    });
    this.activeSystems = [];
  }

  postRenderHook(path) {
    // 1. Homepage Dynamic Engines
    if (path === '/' || path === '/explore-rides') {
      // Mount Road & Tire Animation Engine
      if (window.RoadMotionSystem && document.querySelector('.tire-section')) {
        const roadSys = new window.RoadMotionSystem();
        this.activeSystems.push(roadSys);
      }

      // Mount Find Your Wingman Radar Engine
      if (window.WingmanRadarSystem && document.querySelector('.radar-stage')) {
        const radarSys = new window.WingmanRadarSystem();
        this.activeSystems.push(radarSys);
      }

      // Mount App Journey & Mockup Switcher Engine
      if (document.querySelector('#app-showcase')) {
        const appJourneySys = new AppJourneySystem();
        this.activeSystems.push(appJourneySys);
      }

      // Mount Ecosystem Showcase Cinematic Video
      this.initEcosystemVideo();

      // Video Intersection Observer (pause videos when offscreen to preserve 60 FPS)
      const videos = document.querySelectorAll('video');
      if ('IntersectionObserver' in window && videos.length > 0) {
        const videoObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
              if (video.paused) {
                video.play().catch(() => {
                  // Autoplay policy prevented playback until user interaction
                });
              }
            } else {
              if (!video.paused) {
                video.pause();
              }
            }
          });
        }, { threshold: 0.15 });

        videos.forEach(v => videoObserver.observe(v));
        this.activeSystems.push({
          destroy: () => videoObserver.disconnect()
        });
      }

      if (path === '/explore-rides') {
        setTimeout(() => {
          const target = document.getElementById('rider-discovery') || document.querySelector('.radar-stage');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      }
    }

    // 2. Lightbox Binding (Galleries, Awards & Home)
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    if (lightboxModal && (lightboxImg || lightboxVideo)) {
      let currentIdx = 0;

      const getActiveItems = () => {
        const allItems = Array.from(document.querySelectorAll('[data-lightbox]'));
        const visible = allItems.filter(el => {
          return el.offsetParent !== null && window.getComputedStyle(el).display !== 'none';
        });
        return visible.length ? visible : allItems;
      };

      const showIndex = (idx) => {
        const items = getActiveItems();
        if (!items.length) return;
        if (idx < 0) idx = items.length - 1;
        if (idx >= items.length) idx = 0;
        currentIdx = idx;
        const target = items[idx];
        const src = target.getAttribute('data-lightbox');
        const type = target.getAttribute('data-lightbox-type') || (src && src.match(/\.(mp4|webm|ogg)$/i) ? 'video' : 'image');
        const alt = target.querySelector('img')?.getAttribute('alt') || target.getAttribute('aria-label') || 'WingmanX Visual Archive';

        if (src) {
          if (type === 'video') {
            if (lightboxImg) {
              lightboxImg.style.display = 'none';
              lightboxImg.src = '';
            }
            if (lightboxVideo) {
              lightboxVideo.style.display = 'block';
              lightboxVideo.src = src;
              lightboxVideo.play().catch(() => {});
            }
          } else {
            if (lightboxVideo) {
              lightboxVideo.pause();
              lightboxVideo.style.display = 'none';
              lightboxVideo.src = '';
            }
            if (lightboxImg) {
              lightboxImg.style.display = 'block';
              lightboxImg.src = src;
              lightboxImg.alt = alt;
            }
          }

          if (lightboxCaption) {
            lightboxCaption.textContent = alt.replace(/^View photo:\s*|^Play video:\s*/i, '').replace(/\s*in lightbox$/i, '');
          }
          lightboxModal.classList.add('active');
          lightboxModal.setAttribute('aria-hidden', 'false');
          const closeBtn = document.getElementById('lightbox-close-btn');
          if (closeBtn) closeBtn.focus();
        }
      };

      const allItems = Array.from(document.querySelectorAll('[data-lightbox]'));
      allItems.forEach((item) => {
        item.addEventListener('click', () => {
          const visible = getActiveItems();
          const i = visible.indexOf(item);
          showIndex(i !== -1 ? i : 0);
        });
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const visible = getActiveItems();
            const i = visible.indexOf(item);
            showIndex(i !== -1 ? i : 0);
          }
        });
      });

      if (prevBtn) {
        prevBtn.onclick = (e) => {
          e.stopPropagation();
          showIndex(currentIdx - 1);
        };
      }
      if (nextBtn) {
        nextBtn.onclick = (e) => {
          e.stopPropagation();
          showIndex(currentIdx + 1);
        };
      }

      const closeLightbox = () => {
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
        if (lightboxVideo) {
          lightboxVideo.pause();
          lightboxVideo.src = '';
          lightboxVideo.style.display = 'none';
        }
        if (lightboxImg) {
          lightboxImg.src = '';
        }
      };

      const keyHandler = (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          showIndex(currentIdx - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          showIndex(currentIdx + 1);
        } else if (e.key === 'Escape') {
          closeLightbox();
        }
      };
      window.addEventListener('keydown', keyHandler);
      this.activeSystems.push({
        destroy: () => window.removeEventListener('keydown', keyHandler)
      });
    }

    // 3. Ecosystem Canvas Network Animation & Dynamic Inspector
    if (path === '/wingmanx-ecosystem') {
      this.initEcosystemCanvas();
    }

    // 4. OEM Cockpit Telemetry Simulation
    if (path === '/oem-partners') {
      this.initOemCockpit();
    }

    // 5. Galleries Category Filters
    if (path === '/our-galleries') {
      this.initGalleryFilters();
    }

    // 6. Blogs Journal Reader Modal & Dispatches
    if (path === '/blogs') {
      this.initJournalReader();
    }

    // 7. Contact Us Query Params Prefill (Careers context, etc.)
    if (path === '/contact-us') {
      this.initContactPrefill();
    }

    // 8. Dynamic Form Handlers (Contact, Brand, OEM forms)
    this.bindFormHandlers();
  }

  initEcosystemVideo() {
    const video = document.getElementById('ecosystem-showcase-video');
    const muteBtn = document.getElementById('ecosystem-video-mute-btn');
    if (!video || !muteBtn) return;

    const updateBtn = () => {
      if (video.muted) {
        muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> <span>UNMUTE</span>';
        muteBtn.setAttribute('aria-label', 'Unmute video audio');
        muteBtn.classList.add('is-muted');
      } else {
        muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> <span>MUTE</span>';
        muteBtn.setAttribute('aria-label', 'Mute video audio');
        muteBtn.classList.remove('is-muted');
      }
    };

    let attemptedUnmutedPlay = false;

    const attemptPlay = () => {
      if (!attemptedUnmutedPlay) {
        attemptedUnmutedPlay = true;
        video.muted = false;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            updateBtn();
          }).catch(() => {
            // Autoplay with sound blocked: fallback to muted autoplay
            video.muted = true;
            video.play().catch(() => {});
            updateBtn();
          });
        } else {
          updateBtn();
        }
      } else if (video.paused) {
        video.play().catch(() => {});
      }
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            attemptPlay();
          } else {
            if (!video.paused) {
              video.pause();
            }
          }
        });
      }, { threshold: 0.15, rootMargin: '100px' });
      observer.observe(video);
    } else {
      attemptPlay();
    }

    muteBtn.onclick = (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      if (!video.muted && video.paused) {
        video.play().catch(() => {});
      }
      updateBtn();
    };

    updateBtn();
  }

  initEcosystemCanvas() {
    const canvas = document.getElementById('eco-network-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    let animId;
    let isAlive = true;

    const resize = () => {
      canvas.width = parent.clientWidth * (window.devicePixelRatio || 1);
      canvas.height = parent.clientHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const center = { x: parent.clientWidth * 0.5, y: parent.clientHeight * 0.5 };
    const nodes = document.querySelectorAll('.eco-orbit-node');

    const ecosystemData = {
      clubs: {
        title: "RIDING CLUBS ⟷ THE RIDER",
        role: "COMMUNITY CONVOY DISCIPLINE",
        riderGives: [
          "Active GPS pack beacon presence during weekend club touring",
          "Real-time crowd hazard flagging (gravel, oil slicks, water crossings)",
          "Adherence to group formation, designated pace, and road captain signals"
        ],
        pillarReturns: [
          "Organized sweep & lead protection eliminating lost-rider anxiety",
          "Pre-scouted route waypoints, verified GPX files, and medical waivers",
          "In-person brotherhood, recovery toolkits, and roadside mechanical support"
        ],
        ctaText: "CONNECT WITH OUR CLUB NETWORK",
        ctaHref: "/contact-us?subject=Club+/+Pack+Partnership"
      },
      brands: {
        title: "BRANDS & SPONSORS ⟷ THE RIDER",
        role: "CONTEXTUAL VALUE & MILESTONE REWARDS",
        riderGives: [
          "Verified touring kilometers and mountain pass milestone check-ins",
          "Long-term real-world durability feedback on protective gear and tires",
          "High-intent attention focused only during route staging and recovery stops"
        ],
        pillarReturns: [
          "Milestone gear discounts and pass-completion patches",
          "Physical highway checkpoint hospitality, refreshments, and hydration",
          "Certified replacement parts and gear testing allocations"
        ],
        ctaText: "EXPLORE BRAND PARTNERSHIPS",
        ctaHref: "/brands-sponsors"
      },
      oem: {
        title: "MOTORCYCLE OEMS ⟷ THE RIDER",
        role: "INSTRUMENT CLUSTER COCKPIT TELEMATICS",
        riderGives: [
          "Anonymized chassis stress, lean angle, and duty cycle telemetry",
          "Real-world suspension feedback over varied Indian road topographies",
          "Active participation in official factory owner club rallies"
        ],
        pillarReturns: [
          "Embedded TFT cluster navigation with turn arrows on bike display",
          "Direct CAN-bus motorcycle diagnostics and stator health alerts",
          "Exclusive factory owner rallies, certified badges, and track clinics"
        ],
        ctaText: "EXPLORE OEM SOLUTIONS",
        ctaHref: "/oem-partners"
      },
      wmx: {
        title: "WingmanX CORE ⟷ THE RIDER",
        role: "GEOSPATIAL AI & DECENTRALIZED BEACON",
        riderGives: [
          "Rider pace preferences, bike displacement, and touring style profile",
          "Sensor accelerometer data feeding real-time crash impact recognition",
          "Continuous battery-conscious beacon pings to sync the convoy radar"
        ],
        pillarReturns: [
          "Zero-latency pack radar displaying lead, pack, and sweep simultaneously",
          "Offline topographic caching that operates in zero-reception valleys",
          "Sub-second automated SOS crash distress beacon broadcasting"
        ],
        ctaText: "EXPLORE APP CAPABILITIES",
        ctaHref: "/#app-showcase"
      }
    };

    const updateInspector = (pillarKey) => {
      const data = ecosystemData[pillarKey];
      if (!data) return;
      const titleElem = document.getElementById('inspector-pillar-title');
      const roleElem = document.getElementById('inspector-pillar-role');
      const givesElem = document.getElementById('inspector-rider-gives');
      const returnsElem = document.getElementById('inspector-pillar-returns');
      const ctaElem = document.getElementById('inspector-cta-link');

      if (titleElem) titleElem.textContent = data.title;
      if (roleElem) roleElem.textContent = data.role;
      if (givesElem) {
        givesElem.innerHTML = data.riderGives.map(item => `<li>${item}</li>`).join('');
      }
      if (returnsElem) {
        returnsElem.innerHTML = data.pillarReturns.map(item => `<li>${item}</li>`).join('');
      }
      if (ctaElem) {
        ctaElem.setAttribute('href', data.ctaHref);
        const span = ctaElem.querySelector('span');
        if (span) span.textContent = data.ctaText;
      }
    };

    const draw = () => {
      if (!isAlive) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const time = performance.now() * 0.002;
      center.x = w * 0.5;
      center.y = h * 0.5;

      nodes.forEach((node, idx) => {
        const rect = node.getBoundingClientRect();
        const pRect = parent.getBoundingClientRect();
        const nodeCenter = {
          x: rect.left - pRect.left + rect.width * 0.5,
          y: rect.top - pRect.top + rect.height * 0.5
        };

        // Draw animated curved route line
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        const cpX = (center.x + nodeCenter.x) * 0.5 + Math.sin(time + idx) * 20;
        const cpY = (center.y + nodeCenter.y) * 0.5 - Math.cos(time + idx) * 20;
        ctx.quadraticCurveTo(cpX, cpY, nodeCenter.x, nodeCenter.y);

        const isActive = node.classList.contains('active');
        ctx.strokeStyle = isActive ? '#fa7907' : 'rgba(250, 121, 7, 0.25)';
        ctx.lineWidth = isActive ? 2.5 : 1.2;
        if (isActive) {
          ctx.shadowColor = '#fa7907';
          ctx.shadowBlur = 10;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.stroke();

        // Pulsing energy particle along line
        const t = (time * 0.5 + idx * 0.25) % 1;
        const pX = Math.pow(1 - t, 2) * center.x + 2 * (1 - t) * t * cpX + Math.pow(t, 2) * nodeCenter.x;
        const pY = Math.pow(1 - t, 2) * center.y + 2 * (1 - t) * t * cpY + Math.pow(t, 2) * nodeCenter.y;

        ctx.beginPath();
        ctx.arc(pX, pY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fa7907';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    nodes.forEach(node => {
      const handleSelect = () => {
        nodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        const pillarKey = node.getAttribute('data-pillar');
        if (pillarKey) updateInspector(pillarKey);
      };

      node.addEventListener('click', handleSelect);
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect();
        }
      });
    });

    this.activeSystems.push({
      destroy: () => {
        isAlive = false;
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', resize);
      }
    });
  }

  initOemCockpit() {
    const speedElem = document.querySelector('.speed-readout');
    if (!speedElem) return;

    let baseSpeed = 108;
    let timer = setInterval(() => {
      const delta = (Math.random() - 0.5) * 4;
      const current = Math.round(baseSpeed + delta);
      speedElem.textContent = current;
    }, 1800);

    this.activeSystems.push({
      destroy: () => clearInterval(timer)
    });
  }

  initGalleryFilters() {
    const filterBtns = document.querySelectorAll('[data-gallery-filter]');
    const cards = document.querySelectorAll('.masonry-card[data-category]');
    if (!filterBtns.length || !cards.length) return;

    const setFilter = (filter) => {
      filterBtns.forEach(b => {
        if (b.getAttribute('data-gallery-filter') === filter) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    };

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-gallery-filter');
        setFilter(filter);
      });
    });

    // Default to 'images' as specified in requirements
    setFilter('images');

    // Video hover preview for living memory cards
    const videoCards = document.querySelectorAll('.masonry-video-card');
    videoCards.forEach(card => {
      const vid = card.querySelector('video');
      if (vid) {
        card.addEventListener('mouseenter', () => {
          vid.play().catch(() => {});
        });
        card.addEventListener('mouseleave', () => {
          vid.pause();
        });
      }
    });
  }

  initJournalReader() {
    const readerModal = document.getElementById('journal-reader-modal');
    if (!readerModal) return;

    const dispatches = {
      'monsoon-ghats': {
        title: "MASTERING THE MONSOON GHATS: 7 ESSENTIAL RULES FOR WET TARMAC",
        category: "TECHNIQUE & MONSOON SAFETY",
        readTime: "7 MIN READ",
        byline: "BY WingmanX SCOUT CREW • PUNE HQ",
        content: `
          <p class="lead-drop">The Sahyadri range during the Indian southwest monsoon transforms into one of the most sublime yet unforgiving motorcycle proving grounds on earth. When waterfalls cascade directly onto the tarmac and dense clouds reduce visibility to 15 meters on Tamhini Ghat, standard riding habits become lethal. Here are the 7 non-negotiable rules forged by our test scouts over 24,000 kilometers of monsoon touring.</p>
          
          <h3>1. THE DANGER OF PAINTED WHITE STRIPES</h3>
          <p>Thermoplastic road paint has almost zero porosity. When soaked, it exhibits a friction coefficient similar to black ice. Never trail-brake across painted lane dividers or pedestrian crossings; always complete braking adjustments on bare asphalt before crossing stripes perpendicularly.</p>
          
          <h3>2. THE MOSS ZONE AT INSIDE APEXES</h3>
          <p>On steep mountain switchbacks, water runoff carries fine mountain silt and green algae into the inside gutters. The textbook tight apex is frequently a trap in the monsoon. Ride a wider, squared-off line that keeps your contact patch on coarse, washed crown tarmac.</p>
          
          <h3>3. PROGRESSIVE TRAIL-BRAKING STABILITY</h3>
          <p>Sudden front-brake grab on wet tarmac violently unweights the rear suspension and risks instant front-end wash. Instead, initiate braking with a touch of rear brake to squat the chassis, then smoothly squeeze the front lever. Maintain light trailing pressure right up to turn-in.</p>
          
          <h3>4. PINLOCK VISOR & HYDROPHOBIC COATINGS</h3>
          <p>Cracking your visor in torrential rain drenches your face; keeping it shut causes instant breath fogging. A properly seated Pinlock 70 or 120 insert is indispensable. Complement it with a hydrophobic silicone wipe on the exterior lens to sheet rainwater away with wind velocity.</p>
          
          <h3>5. WATERFALL CROSSING PROTOCOL</h3>
          <p>Never plunge into running brown waterfall water across low-lying Irish bridges without scouting. If water height exceeds wheel axle center, or if the current pushes rocks against your boot, halt the pack. Cross individually in steady second gear with continuous throttle to prevent backpressure in the exhaust.</p>
          
          <h3>6. TIRE PRESSURES & COMPOUND WARM-UP</h3>
          <p>Dropping cold tire pressures by 2 PSI in wet conditions increases the rubber footprint slightly, aiding rain-groove evacuation on touring compounds. Remember that wet road spray continuously robs tires of operating heat; avoid sudden aggressive lean transitions even after 30 minutes of highway riding.</p>
          
          <h3>7. PACK SPACING & CONVOY RADAR</h3>
          <p>Braking distances double on drenched highways. Increase pack interval from the standard 2-second staggered spacing to a minimum of 4 seconds. Use WingmanX convoy radar to monitor the trailing sweep rider through dense cloud cover without turning your head away from the road.</p>
        `
      },
      'art-of-sweep': {
        title: "THE ART OF THE SWEEP: WHY THE REAR RIDER IS THE TRUE HERO OF THE PACK",
        category: "COMMUNITY & CONVOY DISCIPLINE",
        readTime: "5 MIN READ",
        byline: "BY NIKHIL DESHMUKH • FOUNDER, PUNE COASTAL RIDERS",
        content: `
          <p class="lead-drop">In motorcycling folklore, everyone wants to ride at the front. The lead rider gets unobstructed clean air, glorious GoPro framing, and the thrill of setting the pace. But ask any veteran road captain who truly determines whether 40 motorcycles return home safely, and they will point without hesitation to the very back of the formation: the Sweep Rider.</p>
          
          <h3>THE GUARDIAN OF THE REAR</h3>
          <p>The sweep rider is not simply the slowest rider; they are usually one of the most mechanically skilled and patient riders in the club. While the lead navigates ahead, the sweep protects the tail from aggressive highway trucks, monitors pack cohesion, and handles mechanical emergencies.</p>
          
          <h3>THE FIVE NON-NEGOTIABLES IN A SWEEP TOOLKIT</h3>
          <ul>
            <li><strong>Heavy-Duty Tow Strap & Soft Loops:</strong> For towing immobilized machines out of hazardous blind curves to safe shoulder ground.</li>
            <li><strong>Mushroom Plug Kit & 12V Mini Inflator:</strong> Fixing tubeless punctures within 10 minutes without waiting for roadside recovery.</li>
            <li><strong>Lithium Jump Starter Pack:</strong> Bringing dead batteries back to life in remote areas after accidental accessory drain.</li>
            <li><strong>Comprehensive Wilderness Trauma Kit:</strong> Tourniquets, pressure bandages, antiseptic, and burn dressings.</li>
            <li><strong>Direct Comms & WingmanX Beacon:</strong> Keeping real-time telemetry linked with the lead rider at the front of the convoy.</li>
          </ul>
          
          <h3>TAMING TOLL PLAZA CHAOS</h3>
          <p>When a convoy passes through highway toll plazas or city ring road exits, slower riders inevitably get separated by barriers and trucks. A disciplined sweep rider holds station, rounds up separated riders into a regroup pocket, and signals the lead via WingmanX that the formation is whole again.</p>
        `
      },
      'motorcycle-toolkit': {
        title: "THE COMPACT MOTORCYCLE TOOLKIT THAT CAN SAVE ANY HIGHWAY BREAKDOWN",
        category: "MAINTENANCE & ROADSIDE TRIAGE",
        readTime: "8 MIN READ",
        byline: "BY ROHAN KULKARNI • MECHANICAL SPECIALIST, WingmanX",
        content: `
          <p class="lead-drop">Factory under-seat toolkits are notorious for containing cheap stamped sheet-metal wrenches that round off bolt heads on the first turn. When you are 80 kilometers from the nearest town on a Sahyadri ridge at dusk, quality tools make the difference between sleeping by the roadside and riding home in triumph.</p>
          
          <h3>THE GOLDEN WRENCH STANDARDS</h3>
          <p>Japanese and European motorcycles are held together predominantly by 8mm, 10mm, 12mm, and 14mm hex bolts. A compact sliding T-handle with matching hardened chrome-vanadium sockets provides far better leverage and prevents stripping soft aluminum engine case threads than generic adjustable wrenches.</p>
          
          <h3>TUBELESS PUNCTURE RECOVERY</h3>
          <p>Carry a spiral reamer, insertion needle, and vulcanizing rope or mushroom plugs. Paired with a compact 12V inflator running off your SAE battery tender port, you can seal and repressurize a rear tire in under twelve minutes without removing the wheel.</p>
          
          <h3>DRIVE CHAIN EMERGENCY PACK</h3>
          <p>A master link matching your chain pitch (typically 520 or 525 for Indian tourers) along with a pocket chain press tool can save a ride when a stone fractures a roller. Never set off on a multi-day tour without safety wire and stainless steel zip-ties—they can temporarily secure a snapped shift lever or broken luggage rack.</p>
        `
      },
      'spiti-valley': {
        title: "SPITI VALLEY UNFILTERED: PREPARING YOUR MACHINE FOR EXTREME ALTITUDE",
        category: "EXPEDITIONS & HIGH ALTITUDE",
        readTime: "10 MIN READ",
        byline: "BY AMIT PATIL • HIGH ALTITUDE ROUTE CONSULTANT",
        content: `
          <p class="lead-drop">Spiti Valley sits at an average altitude exceeding 12,000 feet, climbing to over 15,000 feet at Kunzum La. The thin air, glacial river washouts, sub-zero morning temperatures, and zero-connectivity gorges demand meticulous mechanical and psychological preparation.</p>
          
          <h3>THE THIN AIR REALITY</h3>
          <p>Atmospheric density drops by roughly 3% per 1,000 feet. At Kunzum La, your engine breathes roughly 40% less oxygen than at sea level. Modern fuel-injected motorcycles adjust via MAP and O2 sensors, but a dirty air filter severely chokes performance. Clean or replace your air filter immediately before entering the valley from Shimla or Manali.</p>
          
          <h3>SUSPENSION & TIRE DISCIPLINE</h3>
          <p>The road from Kaza through Losar to Gramphu features jagged slate scree and deep water crossings (nallahs) like Malling and Chhota Dara. Increase rear suspension preload by 2 clicks to prevent bottoming out against submerged boulders when carrying loaded panniers.</p>
          
          <h3>OFFLINE TOPOGRAPHIC CACHING</h3>
          <p>From Pooh through Tabo, Kaza, and Losar, commercial cellular towers drop to absolute zero. Caching full vector topographic maps into WingmanX before departure ensures your GPS track, waypoint elevation, and pass apex distances remain available without mobile internet.</p>
        `
      }
    };

    const categoryElem = document.getElementById('reader-category');
    const readTimeElem = document.getElementById('reader-read-time');
    const titleElem = document.getElementById('reader-title');
    const bylineElem = document.getElementById('reader-byline');
    const contentElem = document.getElementById('reader-content-body');
    const closeBtn = document.getElementById('reader-close-btn');
    const backdrop = readerModal.querySelector('.reader-modal-backdrop');

    const openDispatch = (id) => {
      const data = dispatches[id];
      if (!data) return;

      if (categoryElem) categoryElem.textContent = data.category;
      if (readTimeElem) readTimeElem.textContent = data.readTime;
      if (titleElem) titleElem.textContent = data.title;
      if (bylineElem) bylineElem.textContent = data.byline;
      if (contentElem) contentElem.innerHTML = data.content;

      readerModal.classList.add('active');
      readerModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');

      const scrollable = readerModal.querySelector('.reader-modal-scrollable');
      if (scrollable) scrollable.scrollTop = 0;
    };

    const closeDispatch = () => {
      readerModal.classList.remove('active');
      readerModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    };

    document.querySelectorAll('.open-dispatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-dispatch-id');
        if (id) openDispatch(id);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeDispatch);
    if (backdrop) backdrop.addEventListener('click', closeDispatch);

    const escHandler = (e) => {
      if (e.key === 'Escape' && readerModal.classList.contains('active')) {
        closeDispatch();
      }
    };
    window.addEventListener('keydown', escHandler);

    this.activeSystems.push({
      destroy: () => {
        window.removeEventListener('keydown', escHandler);
        document.body.classList.remove('no-scroll');
      }
    });
  }

  initContactPrefill() {
    const params = new URLSearchParams(window.location.search);
    const subjectParam = params.get('subject');
    const roleParam = params.get('role') || params.get('jobId');

    if (subjectParam) {
      const subjectSelect = document.getElementById('contact-subject-select');
      if (subjectSelect) {
        let matched = false;
        for (let i = 0; i < subjectSelect.options.length; i++) {
          if (subjectSelect.options[i].value.toLowerCase() === subjectParam.toLowerCase()) {
            subjectSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched) {
          const newOpt = document.createElement('option');
          newOpt.value = subjectParam;
          newOpt.text = subjectParam;
          newOpt.selected = true;
          subjectSelect.appendChild(newOpt);
        }
      }
    }

    if (roleParam) {
      const msgInput = document.getElementById('contact-message-input');
      const hintElem = document.getElementById('transmission-hint-text');
      if (msgInput) {
        msgInput.value = `Application for Position [${roleParam}].\r\n\r\nSummary of technical experience, engineering accomplishments, and motorcycling background:\r\n`;
      }
      if (hintElem) {
        hintElem.innerHTML = `<span class="text-orange"><i class="fa-solid fa-briefcase"></i> Transmitting application for role ${roleParam}.</span>`;
      }
      const card = document.getElementById('contact-transmission-card');
      if (card) {
        card.classList.add('highlight-form');
      }
    }
  }

  bindFormHandlers() {
    // 1. Contact Form
    const contactForm = document.getElementById('contact-inquiry-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const statusElem = document.getElementById('contact-form-status');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> TRANSMITTING...';

        try {
          const res = await fetch('/enquiry-store', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: contactForm.name.value,
              email: contactForm.email.value,
              phone: contactForm.phone.value,
              subject: contactForm.subject.value,
              message: contactForm.message.value
            })
          });

          const data = await res.json().catch(() => ({}));
          if (res.ok && data.success) {
            statusElem.className = 'form-status success';
            statusElem.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${data.message || 'Transmission received! Our ride crew will reach out within 24 hours.'}`;
            contactForm.reset();
          } else {
            statusElem.className = 'form-status error';
            statusElem.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${data.error || 'Transmission failed. Please check your inputs and try again.'}`;
          }
        } catch (err) {
          statusElem.className = 'form-status error';
          statusElem.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Unable to connect to WingmanX dispatch server. Please verify your connection.`;
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>TRANSMIT MESSAGE</span> <i class="fa-solid fa-paper-plane"></i>';
        }
      });
    }

    // 2. Brand Partner Form
    const brandForm = document.getElementById('brand-partner-form');
    if (brandForm) {
      brandForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const statusElem = document.getElementById('brand-form-status');
        const submitBtn = brandForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> TRANSMITTING...';

        try {
          const res = await fetch('/brand-enquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              company: brandForm.company.value,
              name: brandForm.name.value,
              email: brandForm.email.value,
              interest: brandForm.interest.value,
              message: brandForm.message.value
            })
          });

          const data = await res.json().catch(() => ({}));
          if (res.ok && data.success) {
            statusElem.className = 'form-status success';
            statusElem.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${data.message || 'Brand brief registered!'}`;
            brandForm.reset();
          } else {
            statusElem.className = 'form-status error';
            statusElem.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${data.error || 'Brief registration failed.'}`;
          }
        } catch (err) {
          statusElem.className = 'form-status error';
          statusElem.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Gateway unreachable. Please check your network and try again.`;
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>TRANSMIT PARTNERSHIP BRIEF</span> <i class="fa-solid fa-paper-plane"></i>';
        }
      });
    }

    // 3. OEM Form
    const oemForm = document.getElementById('oem-partner-form');
    if (oemForm) {
      oemForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const statusElem = document.getElementById('oem-form-status');
        const submitBtn = oemForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> TRANSMITTING...';

        try {
          const res = await fetch('/oem-enquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              company: oemForm.company.value,
              department: oemForm.department.value,
              name: oemForm.name.value,
              email: oemForm.email.value,
              message: oemForm.message.value
            })
          });

          const data = await res.json().catch(() => ({}));
          if (res.ok && data.success) {
            statusElem.className = 'form-status success';
            statusElem.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${data.message || 'OEM brief registered!'}`;
            oemForm.reset();
          } else {
            statusElem.className = 'form-status error';
            statusElem.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${data.error || 'OEM request failed.'}`;
          }
        } catch (err) {
          statusElem.className = 'form-status error';
          statusElem.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Gateway unreachable. Please check your network and try again.`;
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>REQUEST AUTOMOTIVE BRIEF</span> <i class="fa-solid fa-microchip"></i>';
        }
      });
    }
  }
}

window.Router = Router;
