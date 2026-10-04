/**
 * WingmanX — RIDER & PACK DISCOVERY EXPERIENCE
 * Section 05: Preference-to-Ride Community Matchmaker
 *
 * Flow: RIDER PREFERENCES -> DISCOVERY -> MATCHED RIDERS / RIDES -> CONNECTION
 * Replaces abstract military radar with an intuitive, human-facing motorcycle discovery interface.
 * Clean lifecycle: all event listeners, timers, and observers are destroyed on unmount.
 */

(function () {
  'use strict';

  // Grounded, authentic motorcycle discovery datasets (Maharashtra riding corridor)
  // Clearly framed as illustrative community demonstration profiles
  const SQUADS_DATA = [
    {
      id: 'squad-1',
      discipline: 'canyon',
      disciplineName: 'Weekend Twisties',
      pace: 'spirited',
      paceName: 'Spirited (95-115 km/h)',
      name: 'Tamhini Dawn Patrol',
      leadRider: 'Pooja S.',
      leadRole: 'Certified Road Captain',
      leadInitial: 'PS',
      bike: 'Ducati Scrambler Desert Sled',
      bikeCategory: 'Canyon / Scrambler',
      routeTitle: 'Tamhini Ghat Canyon & Waterfall Loop',
      distance: '140 km roundtrip',
      elevation: '+1,120 m ascent',
      schedule: 'Saturday Dawn &bull; 05:45 AM Departure',
      meetingPoint: 'Chandani Chowk, Pune',
      compatibility: 98,
      matchReason: 'Matches your canyon cornering discipline & brisk weekend pace',
      confirmedRiders: [
        { name: 'Pooja S.', bike: 'Ducati Scrambler', role: 'Lead Captain' },
        { name: 'Karan M.', bike: 'KTM 390 Duke', role: 'Squad Rider' },
        { name: 'Sameer R.', bike: 'BMW G 310 GS', role: 'Squad Rider' },
        { name: 'Nikhil T.', bike: 'Yamaha MT-09', role: 'Sweep Captain' }
      ],
      formation: 'Staggered double-file on flats &bull; Single-file through Ghat apexes',
      disciplineRules: 'Full gear (ATGATT), intercom link active, certified first-aid on sweep',
      description: 'A disciplined, brisk weekend dawn run carving the winding switchbacks of Tamhini Ghat. Designed for riders who enjoy technical cornering flow without reckless racing.',
      waypoints: ['Chandani Chowk (Start)', 'Mulshi Lakeside Sweepers', 'Tamhini Crest Summit', 'Quick Chai Stop', 'Return Loop']
    },
    {
      id: 'squad-2',
      discipline: 'adv',
      disciplineName: 'ADV & Mountain',
      pace: 'steady',
      paceName: 'Scenic & Steady (75-95 km/h)',
      name: 'Sahyadri Ridge Explorers',
      leadRider: 'Aryan M.',
      leadRole: 'Expedition Navigator',
      leadInitial: 'AM',
      bike: 'BMW R 1250 GS Trophy',
      bikeCategory: 'Heavy ADV Tourer',
      routeTitle: 'Lonavala to Lavasa Escarpment Circuit',
      distance: '165 km mountain tour',
      elevation: '+1,480 m ascent',
      schedule: 'Sunday Morning &bull; 06:15 AM Departure',
      meetingPoint: 'Wakad Bridge Highway Junction',
      compatibility: 96,
      matchReason: 'Matches heavy ADV touring class & relaxed scenic cadence',
      confirmedRiders: [
        { name: 'Aryan M.', bike: 'BMW R 1250 GS', role: 'Lead Navigator' },
        { name: 'Tanvi D.', bike: 'RE Himalayan 450', role: 'Squad Rider' },
        { name: 'Rohan V.', bike: 'Triumph Tiger 850', role: 'Sweep Navigator' }
      ],
      formation: 'Extended 3-second spacing on descents &bull; Headlights on high-visibility',
      disciplineRules: 'ADV touring boots, rated back protector, offline GPX waypoints synced',
      description: 'Traversing scenic high-elevation ridge lines and backroads. Focused on steady group cruising, photography stops, and scenic breakfast at the plateau.',
      waypoints: ['Wakad Toll Gate', 'Dehu-Lonavala Old Highway', 'Tiger Point Overlook', 'Lavasa Ridge Descent', 'Return']
    },
    {
      id: 'squad-3',
      discipline: 'highway',
      disciplineName: 'Highway Cruise',
      pace: 'endurance',
      paceName: 'Endurance (100-115 km/h)',
      name: 'Deccan Grand Cruisers',
      leadRider: 'Vikram R.',
      leadRole: 'Endurance Route Planner',
      leadInitial: 'VR',
      bike: 'Triumph Tiger 900 Rally Pro',
      bikeCategory: 'Middleweight Adventure Tourer',
      routeTitle: 'Pune – Satara – Mahabaleshwar Grand Loop',
      distance: '235 km endurance loop',
      elevation: '+1,290 m ascent',
      schedule: 'Saturday Morning &bull; 05:30 AM Departure',
      meetingPoint: 'Navale Bridge, NH 48',
      compatibility: 95,
      matchReason: 'Matches long-distance highway comfort & disciplined paceline',
      confirmedRiders: [
        { name: 'Vikram R.', bike: 'Tiger 900 Rally', role: 'Lead Captain' },
        { name: 'Deepak S.', bike: 'Kawasaki Versys 650', role: 'Squad Rider' },
        { name: 'Aditi P.', bike: 'Honda CB500X', role: 'Squad Rider' },
        { name: 'Farhan K.', bike: 'Harley Pan America', role: 'Sweep Captain' }
      ],
      formation: 'Strict staggered highway diamond &bull; 140 km fuel cadence',
      disciplineRules: 'TPMS pre-check, touring windscreen, hydration pack recommended',
      description: 'A structured distance endurance loop combining 6-lane express stretches with scenic hill climb to Mahabaleshwar. Punctual stops and smooth highway etiquette.',
      waypoints: ['Navale Bridge', 'Shirwal Bypass', 'Khambatki Ghat Tunnel', 'Wai Ascent', 'Mahabaleshwar Tableland']
    },
    {
      id: 'squad-4',
      discipline: 'trail',
      disciplineName: 'Off-Road Trail',
      pace: 'steady',
      paceName: 'Technical Trail (45-70 km/h)',
      name: 'Panshet Trail Scouts',
      leadRider: 'Karan T.',
      leadRole: 'Trail Scout & First Responder',
      leadInitial: 'KT',
      bike: 'KTM 390 Adventure SW',
      bikeCategory: 'Dual-Sport / Lightweight ADV',
      routeTitle: 'Panshet Backcountry Dam & Forest Trails',
      distance: '95 km mixed backcountry',
      elevation: '+760 m technical',
      schedule: 'Sunday Morning &bull; 06:30 AM Departure',
      meetingPoint: 'Khadakwasla Dam Gate',
      compatibility: 93,
      matchReason: 'Matches unpaved trail appetite & nimble single-cylinder ADV',
      confirmedRiders: [
        { name: 'Karan T.', bike: 'KTM 390 ADV SW', role: 'Trail Scout' },
        { name: 'Amit G.', bike: 'Hero Xpulse 200 4V', role: 'Trail Rider' },
        { name: 'Siddharth N.', bike: 'RE Scram 411', role: 'Tail Guide' }
      ],
      formation: 'Loose single-file with wide dust intervals (50m gap)',
      disciplineRules: 'Knobby 50-50 dual-sport tires, aluminum barkbusters, tire repair kit',
      description: 'Navigating gravel switchbacks, forest trails, and shallow reservoir stream crossings. Focus on low-traction balance and technical throttle refinement.',
      waypoints: ['Khadakwasla Lake', 'Donje Trail Head', 'Panshet Rim Gravel Road', 'Stream Crossing', 'Sunset Point Trail']
    },
    {
      id: 'squad-5',
      discipline: 'adv',
      disciplineName: 'ADV & Mountain',
      pace: 'spirited',
      paceName: 'Spirited Tour (85-105 km/h)',
      name: 'Malshej Cloudline Squad',
      leadRider: 'Ananya K.',
      leadRole: 'High-Pass Expedition Lead',
      leadInitial: 'AK',
      bike: 'Royal Enfield Himalayan 450',
      bikeCategory: 'All-Road Himalayan ADV',
      routeTitle: 'Malshej Ghat Cloudline Ridge Run',
      distance: '185 km mountain run',
      elevation: '+1,380 m ascent',
      schedule: 'Saturday Morning &bull; 05:45 AM Departure',
      meetingPoint: 'Bhosari Highway Hub',
      compatibility: 94,
      matchReason: 'Matches mountain touring prep & high-elevation pass agility',
      confirmedRiders: [
        { name: 'Ananya K.', bike: 'Himalayan 450', role: 'Expedition Lead' },
        { name: 'Prashant L.', bike: 'KTM 250 ADV', role: 'Squad Rider' },
        { name: 'Meera B.', bike: 'BMW F 850 GS', role: 'Squad Rider' }
      ],
      formation: 'Dynamic mountain spacing with staggered highway approaches',
      disciplineRules: 'Weatherproof layer packed, fog lights operational, chain lube verified',
      description: 'Ascending through the mist-covered cliff passes of Malshej Ghat. Refined throttle control on damp asphalt, scenic waterfalls, and tight group rhythm.',
      waypoints: ['Bhosari Hub', 'Narayangaon Highway', 'Malshej Ascending Hairpins', 'Cloudline Tunnel', 'Ghat Plateau']
    }
  ];

  class WingmanRadarSystem {
    constructor() {
      // Container selector must match Section 05 (.discovery-studio-container or .radar-stage)
      this.container = document.querySelector('.discovery-studio-container') || document.querySelector('.radar-stage');
      if (!this.container) return;

      this.activeDiscipline = 'all';
      this.activePace = 'all';
      this.selectedSquadId = 'squad-1';

      this.cardsList = document.getElementById('discovery-cards-list');
      this.inspector = document.getElementById('discovery-inspector');
      this.countTag = document.getElementById('discovery-count');

      // Memory for all bound listeners for 100% clean destruction
      this.listeners = [];

      this.init();
    }

    addListener(element, event, handler, options) {
      if (!element) return;
      element.addEventListener(event, handler, options);
      this.listeners.push({ element, event, handler, options });
    }

    init() {
      // 1. Bind Discipline Pills (Filter by Riding Style)
      const discPills = this.container.querySelectorAll('.disc-pill');
      discPills.forEach(pill => {
        const clickHandler = () => {
          this.setDiscipline(pill.getAttribute('data-disc'), discPills);
        };
        const keyHandler = (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.setDiscipline(pill.getAttribute('data-disc'), discPills);
          }
        };
        this.addListener(pill, 'click', clickHandler);
        this.addListener(pill, 'keydown', keyHandler);
      });

      // 2. Bind Pace Pills (Filter by Group Pace)
      const pacePills = this.container.querySelectorAll('.pace-pill');
      pacePills.forEach(pill => {
        const clickHandler = () => {
          this.setPace(pill.getAttribute('data-pace'), pacePills);
        };
        const keyHandler = (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.setPace(pill.getAttribute('data-pace'), pacePills);
          }
        };
        this.addListener(pill, 'click', clickHandler);
        this.addListener(pill, 'keydown', keyHandler);
      });

      // 3. Initial rendering
      this.render();
    }

    setDiscipline(disc, pills) {
      this.activeDiscipline = disc || 'all';
      pills.forEach(p => {
        const match = p.getAttribute('data-disc') === this.activeDiscipline;
        p.classList.toggle('active', match);
        p.setAttribute('aria-selected', match ? 'true' : 'false');
      });
      this.onFilterChange();
    }

    setPace(pace, pills) {
      this.activePace = pace || 'all';
      pills.forEach(p => {
        const match = p.getAttribute('data-pace') === this.activePace;
        p.classList.toggle('active', match);
        p.setAttribute('aria-selected', match ? 'true' : 'false');
      });
      this.onFilterChange();
    }

    getFilteredSquads() {
      let filtered = SQUADS_DATA.filter(squad => {
        const discMatch = this.activeDiscipline === 'all' || squad.discipline === this.activeDiscipline;
        const paceMatch = this.activePace === 'all' || squad.pace === this.activePace;
        return discMatch && paceMatch;
      });

      // If user selected a tight filter with 0 items, fallback graciously to all
      if (filtered.length === 0) {
        return { items: SQUADS_DATA, isFallback: true };
      }
      return { items: filtered, isFallback: false };
    }

    onFilterChange() {
      const { items } = this.getFilteredSquads();
      // Keep selected squad if still in list, else pick first available
      const exists = items.some(s => s.id === this.selectedSquadId);
      if (!exists && items.length > 0) {
        this.selectedSquadId = items[0].id;
      }
      this.render();
    }

    selectSquad(id) {
      this.selectedSquadId = id;
      this.updateActiveCardStyles();
      this.renderInspector();
    }

    updateActiveCardStyles() {
      if (!this.cardsList) return;
      const cards = this.cardsList.querySelectorAll('.discovery-match-card');
      cards.forEach(card => {
        const isSelected = card.getAttribute('data-id') === this.selectedSquadId;
        card.classList.toggle('selected', isSelected);
        card.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      });
    }

    render() {
      this.renderFeed();
      this.renderInspector();
    }

    renderFeed() {
      if (!this.cardsList) return;

      const { items, isFallback } = this.getFilteredSquads();

      if (this.countTag) {
        this.countTag.textContent = isFallback
          ? `${items.length} Squads (Showing Closest Matches)`
          : `${items.length} Compatible ${items.length === 1 ? 'Squad' : 'Squads'} Found`;
      }

      let html = '';
      items.forEach(squad => {
        const isSelected = squad.id === this.selectedSquadId;
        html += `
          <div class="discovery-match-card ${isSelected ? 'selected' : ''}"
               data-id="${squad.id}"
               role="option"
               aria-selected="${isSelected ? 'true' : 'false'}"
               tabindex="0">
            <div class="card-head-row">
              <div class="card-lead-identity">
                <div class="lead-avatar">${squad.leadInitial}</div>
                <div>
                  <h4 class="card-squad-title">${squad.name}</h4>
                  <span class="card-lead-caption">Led by ${squad.leadRider} &bull; ${squad.bikeCategory}</span>
                </div>
              </div>
              <div class="card-match-badge" title="Illustrative Compatibility Score">
                ${squad.compatibility}% MATCH <span class="badge-sub">[DEMO]</span>
              </div>
            </div>

            <div class="card-route-info">
              <span class="route-tag"><i class="fa-solid fa-route"></i> ${squad.routeTitle}</span>
              <span class="route-meta-inline">
                <i class="fa-solid fa-road"></i> ${squad.distance} &bull; 
                <i class="fa-solid fa-gauge-high"></i> ${squad.paceName}
              </span>
            </div>

            <div class="card-footer-action">
              <span class="view-blueprint-label">
                ${isSelected ? '<i class="fa-solid fa-check"></i> VIEWING BLUEPRINT' : '<i class="fa-solid fa-arrow-right"></i> SELECT TO VIEW BLUEPRINT'}
              </span>
              <span class="rider-count-pill"><i class="fa-solid fa-users"></i> ${squad.confirmedRiders.length} in Pack</span>
            </div>
          </div>
        `;
      });

      this.cardsList.innerHTML = html;

      // Bind click and keyboard events on newly generated cards
      const cardNodes = this.cardsList.querySelectorAll('.discovery-match-card');
      cardNodes.forEach(card => {
        const id = card.getAttribute('data-id');
        const clickHandler = () => this.selectSquad(id);
        const keyHandler = (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.selectSquad(id);
          }
        };
        this.addListener(card, 'click', clickHandler);
        this.addListener(card, 'keydown', keyHandler);
      });
    }

    renderInspector() {
      if (!this.inspector) return;

      const current = SQUADS_DATA.find(s => s.id === this.selectedSquadId) || SQUADS_DATA[0];

      let waypointsHtml = current.waypoints.map((wp, idx) => `
        <div class="blueprint-waypoint-item">
          <span class="wp-step-num">${idx + 1}</span>
          <span class="wp-step-name">${wp}</span>
        </div>
      `).join('');

      let ridersHtml = current.confirmedRiders.map(r => `
        <div class="confirmed-pack-pill">
          <i class="fa-solid fa-motorcycle text-orange"></i>
          <span class="rider-name-tag">${r.name}</span>
          <span class="rider-bike-tag">(${r.bike})</span>
          <span class="rider-role-tag">${r.role}</span>
        </div>
      `).join('');

      this.inspector.innerHTML = `
        <div class="inspector-inner">
          
          <!-- Route Blueprint Header -->
          <div class="inspector-header">
            <div class="inspector-route-badge">
              <i class="fa-solid fa-mountain-sun"></i> ${current.disciplineName.toUpperCase()} &bull; ${current.schedule}
            </div>
            <h3 class="inspector-title">${current.routeTitle}</h3>
            <p class="inspector-desc">${current.description}</p>
          </div>

          <!-- Key Metrics Grid (Authentic Motorcycle Telemetry) -->
          <div class="inspector-metrics-grid">
            <div class="insp-metric-box">
              <span class="insp-metric-label"><i class="fa-solid fa-arrows-left-right"></i> TOTAL DISTANCE</span>
              <span class="insp-metric-value">${current.distance}</span>
            </div>
            <div class="insp-metric-box">
              <span class="insp-metric-label"><i class="fa-solid fa-chart-line"></i> ELEVATION GAIN</span>
              <span class="insp-metric-value">${current.elevation}</span>
            </div>
            <div class="insp-metric-box">
              <span class="insp-metric-label"><i class="fa-solid fa-gauge-high"></i> GROUP PACE</span>
              <span class="insp-metric-value highlight">${current.paceName}</span>
            </div>
            <div class="insp-metric-box">
              <span class="insp-metric-label"><i class="fa-solid fa-location-dot"></i> MEET POINT</span>
              <span class="insp-metric-value">${current.meetingPoint}</span>
            </div>
          </div>

          <!-- Waypoints Timeline -->
          <div class="inspector-section-block">
            <h4 class="block-title"><i class="fa-solid fa-signs-post"></i> ROUTE BLUEPRINT & CHECKPOINTS</h4>
            <div class="blueprint-waypoints-track">
              ${waypointsHtml}
            </div>
          </div>

          <!-- Formation & Safety Protocol -->
          <div class="inspector-section-block">
            <h4 class="block-title"><i class="fa-solid fa-shield-halved"></i> PACK FORMATION & SAFETY RULES</h4>
            <div class="safety-rules-box">
              <div class="rule-line">
                <span class="rule-tag">FORMATION:</span>
                <span>${current.formation}</span>
              </div>
              <div class="rule-line">
                <span class="rule-tag">DISCIPLINE:</span>
                <span>${current.disciplineRules}</span>
              </div>
            </div>
          </div>

          <!-- Confirmed Pack Members -->
          <div class="inspector-section-block">
            <h4 class="block-title"><i class="fa-solid fa-users"></i> CONFIRMED SQUAD MEMBERS (${current.confirmedRiders.length})</h4>
            <div class="confirmed-pack-roster">
              ${ridersHtml}
            </div>
          </div>

          <!-- STEP 04: ACTION & CONNECTION -->
          <div class="inspector-actions-bar">
            <div class="action-buttons-group">
              <a href="/contact-us" class="btn btn-primary btn-discovery-connect" data-internal-route>
                <i class="fa-solid fa-user-plus"></i> CONNECT & JOIN SQUAD
              </a>
              <a href="/contact-us" class="btn btn-outline-cyan btn-discovery-contact" data-internal-route>
                <i class="fa-solid fa-paper-plane"></i> MESSAGE ROAD CAPTAIN
              </a>
            </div>
            <div class="inspector-disclaimer-note">
              <i class="fa-solid fa-shield-cat text-orange"></i>
              <span>Demonstration Profile. Real WingmanX packs enforce full ATGATT & certified road discipline.</span>
            </div>
          </div>

        </div>
      `;
    }

    destroy() {
      // Clean up all attached event listeners
      if (this.listeners && this.listeners.length > 0) {
        this.listeners.forEach(({ element, event, handler, options }) => {
          if (element && typeof element.removeEventListener === 'function') {
            element.removeEventListener(event, handler, options);
          }
        });
        this.listeners = [];
      }
    }
  }

  // Export globally for router.js integration
  window.WingmanRadarSystem = WingmanRadarSystem;
})();
