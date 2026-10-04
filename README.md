# 🏍️ WingmanX — The Connected Rider Platform

> **"Don't Just Plan The Ride. Live It."**  
> WingmanX is India's dedicated motorcycle companion and connected telematics platform connecting riders, riding clubs, automotive brands, and motorcycle OEMs into an integrated adventure and safety network.

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Key Features & Innovations](#-key-features--innovations)
- [Site Map & Route Architecture](#-site-map--route-architecture)
- [The Rider Journal & Articles](#-the-rider-journal--articles)
- [Design System & Aesthetics](#-design-system--aesthetics)
- [Technology Stack](#-technology-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Backend Server & API Endpoints](#-backend-server--api-endpoints)
- [Data Persistence & Security](#-data-persistence--security)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Testing & Quality Assurance](#-testing--quality-assurance)
- [Production Deployment](#-production-deployment)
- [Company & Contact Details](#-company--contact-details)

---

## 🌟 Overview

The **WingmanX Website** is a high-performance, dark-themed Single Page Application (SPA) engineered to deliver a visceral, cinematic first impression for motorcyclists and automotive partners alike. Built without bloated frontend frameworks, it combines bespoke vanilla JavaScript components, modular CSS design tokens, and a resilient zero-dependency Node.js backend.

### The Four Pillars of the WingmanX Ecosystem:
1. **Riders**: Real-time road telemetry, pack radar, crash alerts, route discovery, and community runs across India.
2. **Riding Clubs**: Automated convoy management, sweep protocols, formation discipline, and emergency roll-calls.
3. **Brands & Sponsors**: Authentic, milestone-driven rider engagement and non-intrusive partnership activations.
4. **Motorcycle OEMs**: Connected vehicle cluster telematics, embedded safety SDKs, and factory brand rider clubs.

---

## 🚀 Key Features & Innovations

### 1. 8-Second Cinematic Canvas Road Loader
- **Procedural 3D Highway Perspective**: Rendered via HTML5 Canvas with curved lane geometry, accelerating road dash markers, and dynamic vehicle headlights.
- **Atmospheric Sahyadri Horizon**: Deep night sky with an amber dawn horizon flare that pulses with engine RPM sound simulation.
- **HUD Telemetry Overlay**: Displays active GPS state, coordinate locks, and the philosophical launch statement: *"Let’s start our journey, make it count, and live the ride."*
- **Seamless Escape Hatch**: Accessible skip button and `Esc` key listener to immediately enter the site.

### 2. Custom Single Page Application (SPA) Router
- **Native History API Routing**: Intercepts internal links (`data-internal-route` or relative `href`s) to dynamically swap page views without full browser refreshes.
- **Clean URLs & Direct Deep Linking**: Every route (including dedicated blog articles) is directly accessible via address bar or browser bookmarks.
- **Dynamic SEO Head Management**: Automatically syncs `document.title` and meta descriptions on every route transition.
- **Scroll Memory & Back-To-Top**: Smoothly resets viewport to the top of new pages while retaining seamless forward/backward history traversal.

### 3. Interactive Cockpit & Squad Radar Simulation
- **Dynamic Telematics HUD**: Visualizes live motorcycle telemetry—speed, lean angle degrees, tire friction coefficients, and engine oil temperature.
- **Convoy Formation Radar**: Interactive radar simulation illustrating lead captain, formation pack, and rear sweep buffers with proximity warning states.

### 4. 3-Stage Interactive App Journey
- An interactive mobile screen journey mirroring real motorcycle expeditions:
  - **Stage 1 (Pre-Ride)**: Route Recon, elevation heatmaps, and offline GPX caching.
  - **Stage 2 (In-Flight)**: Live formation HUD, weather radar, and proximity alerts.
  - **Stage 3 (Recovery)**: Roadside triage, SOS mesh beacons, and mechanical assistance.

### 5. Memory Archive & Media Lightbox (`/our-galleries`)
- **Dual-Mode Filtering**: Instant toggling between curated high-resolution **`IMAGES`** (47 authentic expedition photos) and **`VIDEOS`** (14 ride reels).
- **Responsive Media Lightbox**: Modal supporting full-screen image zoom and HTML5 video streaming with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`), touch gestures, and backdrop dismiss.

### 6. Interactive Partner & Lead Capture Portals
- **Brands & Sponsors Wall**: Symmetrical 3-3-3 brand partner showcase with centered orange badges and partner tier matrix.
- **OEM Telematics Briefing**: Automotive engineering portal detailing CAN-bus integration, RTOS/Linux cluster compatibility, and post-purchase customer engagement.
- **Multi-Category Contact Form**: Prefilled inquiry routing for general support, partnerships, and rider clubs.

---

## 🗺️ Site Map & Route Architecture

| Route | View Handler | Description |
| :--- | :--- | :--- |
| `/` | `window.Pages.home` | Homepage: Hero video, telemetry, manifesto, tech HUD, app showcase, and download CTA |
| `/about-us` | `window.Pages.about` | Origin story, core philosophy, Pune roots, leadership, and team profiles |
| `/wingmanx-ecosystem` | `window.Pages.ecosystem` | Deep dive into the 4 pillars: Riders, Riding Clubs, Brands, and OEMs |
| `/brands-sponsors` | `window.Pages.brands` | Brand showcase, 3-3-3 logo wall, sponsorship philosophy, and partnership inquiry |
| `/oem-partners` | `window.Pages.oem` | Automotive telematics, CAN-bus integration, engagement programs, and OEM brief request |
| `/community-contributors`| `window.Pages.contributors` | Wall of honor for veteran road captains, safety marshals, and community builders |
| `/awards` | `window.Pages.awards` | Chronological road journey (2024–2026) honoring national mobility & safety accolades |
| `/our-galleries` | `window.Pages.galleries` | High-res photo & video archive with dual filter (`IMAGES` / `VIDEOS`) and lightbox |
| `/blogs` | `window.Pages.blogs` | "The Rider Journal" featuring cover magazine dispatch + 6 editorial story cards |
| `/blogs/mastering-the-monsoon-ghats` | `window.Pages.blogMonsoonGhats` | 7 essential safety rules for riding soaked Western Ghat tarmac |
| `/blogs/top-10-must-have-accessories-for-every-rider` | `window.Pages.blogAccessories` | The 10 non-negotiable gear essentials for commuters and tourers |
| `/blogs/the-art-of-the-sweep` | `window.Pages.blogArtOfSweep` | Deep dive into convoy sweep protocols and rear-guard pack safety |
| `/blogs/spiti-valley-unfiltered` | `window.Pages.blogSpitiValley` | Machine prep, jetting, and suspension tuning for extreme 14,000 ft altitude |
| `/blogs/the-ride-we-almost-didnt-take` | `window.Pages.blogRideAlmostDidntTake` | Emotional story on camaraderie, 4 AM rain doubts, and roadside mechanical triage |
| `/blogs/somewhere-between-home-and-the-mountains` | `window.Pages.blogSomewhereBetweenHomeAndMountains`| Introspective essay on highway solitude, changing air, and highway tea stalls |
| `/blogs/the-last-rider-in-the-pack` | `window.Pages.blogLastRiderInPack` | Moving chronicle of the sweep rider’s invisible promise to bring everyone home |
| `/our-testimonials` | `window.Pages.testimonials` | Verified rider stories and field quotes from club presidents and solo tourers |
| `/careers` | `window.Pages.careers` | Open positions across software engineering, community management, and design |
| `/contact-us` | `window.Pages.contact` | Office coordinates, direct helpline, and validated contact submission form |
| `/privacy-policy` | `window.Pages.privacy` | User privacy, location tracking limits, and telematics data policies |
| `/terms-of-service` | `window.Pages.terms` | Platform rules, ride liability waivers, and account conditions |
| `/cancellation-refund-policy`| `window.Pages.refund` | Booking rules and refund terms for curated community expeditions |
| `/explore-rides` | `window.Pages.home` | Deep link route for upcoming squad expeditions and weekend runs |

---

## 📖 The Rider Journal & Articles

"THE RIDER JOURNAL." is an editorial motorcycle publication built into the website. Every article is written with grounded, realistic motorcycle detail—exhaust heat, cold dawn air, rain visors, roadside chai, and pack discipline—avoiding generic marketing filler.

### Editorial Architecture of Each Article:
1. **Interactive Breadcrumb**: `< BACK TO THE RIDER JOURNAL / [ARTICLE TITLE]` with instant router navigation.
2. **Category Badge**: Styled pill with FontAwesome icon (e.g., `SAFETY & TECHNIQUE`, `RIDER STORIES & BROTHERHOOD`).
3. **Display Headline**: Space Grotesk typography crafted for impact.
4. **Metadata Row**: Author byline, publication date, and verified read-time (e.g., `4 Min Read`).
5. **High-Res Hero Media**: Contextual photography with editorial photo caption.
6. **Lead Paragraphs**: Immersive narrative hook establishing setting, weather, and stakes.
7. **Structured Sections**: Numbered editorial cards (`01`, `02`, `03`...) detailing technique or story stages.
8. **Editorial Callout Box**: Glassmorphism highlight panel summarizing the core philosophical insight.
9. **Conclusion Block**: Grounded closing reflections on brotherhood, memory, and returning home.
10. **Action Nav Strip**: Return to `ALL DISPATCHES` and direct download link for the WingmanX mobile app.
11. **Related Dispatches**: Dual-card recommendation grid pointing to complementary journal entries.

---

## 🎨 Design System & Aesthetics

The design system adheres to a dark-mode first, high-contrast motorcycle aesthetic:

### Color Palette
- **Deep Void Background**: `#060709` / `#0a0c10` (pure dark backdrop eliminating glare)
- **Card Surface & Glassmorphism**: `rgba(18, 22, 32, 0.7)` with `backdrop-filter: blur(16px)` and subtle borders (`rgba(255, 255, 255, 0.08)`)
- **WingmanX Orange (Primary Accent)**: `#ff6a00` to `#ff8800` (energy, hazard recognition, ignition)
- **Telemetry Cyan (Secondary Accent)**: `#00f0ff` / `#38bdf8` (GPS signals, telemetry HUD, tech indicators)
- **High-Readability Text**: `#ffffff` (Headings) and `#cbd5e1` / `#94a3b8` (Body prose)

### Typography
- **Headings & Display**: `Space Grotesk` (Geometric, technical, bold, uppercase accents)
- **Body & Editorial Prose**: `Manrope` (Clean, legible, modern humanist sans-serif with comfortable line-height)
- **Monospace Telemetry**: `JetBrains Mono` / `SFMono-Regular` for coordinates, speedometers, and HUD stats

### Component Styling
- **Pills & Badges**: Fully rounded borders (`border-radius: 9999px`) with micro-icons.
- **Buttons**:
  - `.btn-primary`: High-visibility orange gradient with subtle glow box-shadow.
  - `.btn-outline-orange`: Sleek glass button with orange stroke that fills on hover.
  - `.btn-outline-white`: Subtle border for secondary navigation and utility actions.
- **Micro-Animations**: GPU-accelerated transforms (`translateY(-4px)`), smooth CSS transitions (`0.25s cubic-bezier(0.16, 1, 0.3, 1)`), and pulse indicators.

---

## 🛠️ Technology Stack

| Layer | Technologies Used | Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | HTML5, Vanilla JavaScript (ES6+), Vanilla CSS3 | Ultra-fast execution, zero framework lock-in, complete DOM control |
| **Styling** | Vanilla CSS with Custom Properties (Variables) | Maintainable design system tokens in [`public/css/main.css`](file:///c:/Users/Lokesh/Downloads/wingmanx-website/public/css/main.css) |
| **Icons & Fonts** | FontAwesome 6, Google Fonts (`Space Grotesk`, `Manrope`) | Scalable vector icons and bespoke typography |
| **Motion & Visuals** | HTML5 2D Canvas, Web Audio API, CSS Keyframes | Procedural highway generation, telemetry HUD, radar simulation |
| **SPA Engine** | Native History API (`pushState`, `popstate`), Custom Event Bus | Seamless instant client-side routing |
| **Backend Server** | Node.js native (`http`, `fs`, `path`, `url`, `querystring`) | Zero-dependency HTTP server in [`server.cjs`](file:///c:/Users/Lokesh/Downloads/wingmanx-website/server.cjs) |
| **Data Persistence** | Local JSON File Store (`data/submissions.json`) | Lightweight, self-contained record persistence |
| **Dev Environment** | Vite 5 | Rapid local development with Hot Module Replacement |

---

## 📁 Project Directory Structure

```text
wingmanx-website/
├── data/
│   └── submissions.json         # Local storage for contact, brand, and OEM submissions
├── public/
│   ├── css/
│   │   └── main.css             # Unified design system, tokens, layout & responsive styles
│   ├── js/
│   │   ├── app.js               # Application bootstrap, navbar, footer & modal systems
│   │   ├── pages.js             # View templates for all 20+ pages & dedicated articles
│   │   ├── router.js            # History-based SPA router & page transition manager
│   │   ├── road-motion.js       # Procedural 3D Canvas road simulation for the loader
│   │   └── network-radar.js     # Cockpit telematics HUD and squad radar animations
│   ├── images/
│   │   ├── awards/              # Award milestone ceremony & trophy photographs
│   │   ├── the_mills/           # Community rider meet & celebration imagery
│   │   ├── oem/                 # Connected motorcycle telematics & manufacturer assets
│   │   └── *.jpg, *.png, *.svg  # Brand logos, hero banners, app mockups, and icons
│   ├── videos/                  # MP4 & WebM high-octane community ride reels
│   └── index.html               # Main HTML entry shell with meta tags and loader markup
├── scratch/                     # Automated QA test scripts and CDP verification suites
├── index.html                   # Root index reference
├── package.json                 # Project dependencies, metadata, and scripts
├── server.cjs                   # Production Node.js server with SPA fallback & API endpoints
└── README.md                    # Comprehensive technical documentation (this file)
```

---

## 🔌 Backend Server & API Endpoints

The backend is implemented as a standalone Node.js server in [`server.cjs`](file:///c:/Users/Lokesh/Downloads/wingmanx-website/server.cjs) requiring **zero third-party npm runtime dependencies**.

### Form Submission Endpoints (POST)

All endpoints accept both `application/json` and `application/x-www-form-urlencoded`.

#### 1. General Contact / Club Inquiry
- **Endpoint**: `POST /enquiry-store`
- **Fields**:
  - `name` *(required, min 2 chars)*: Full name
  - `email` *(required, valid email)*: Contact email
  - `phone` *(optional)*: Phone number
  - `subject` *(optional)*: Inquiry topic
  - `message` *(required, min 10 chars)*: Inquiry details
- **Response**: `{ "success": true, "message": "Inquiry received...", "submissionId": "WMX-REC-..." }`

#### 2. Brand & Sponsor Partnership
- **Endpoint**: `POST /brand-enquiry`
- **Fields**:
  - `brandName` *(required)*: Company or brand name
  - `contactPerson` *(required)*: Representative name
  - `email` *(required)*: Corporate email
  - `phone` *(required)*: Contact number
  - `partnershipType` *(optional)*: Gear sponsor, milestone rewards, event partner
  - `message` *(optional)*: Scope of collaboration
- **Response**: `{ "success": true, "message": "Partnership inquiry recorded...", "submissionId": "WMX-REC-..." }`

#### 3. OEM Manufacturer Collaboration
- **Endpoint**: `POST /oem-enquiry`
- **Fields**:
  - `company` *(required)*: Automotive OEM name
  - `name` *(required)*: Lead engineer or representative
  - `email` *(required)*: Corporate engineering email
  - `phone` *(optional)*: Contact number
  - `message` *(optional)*: Telematics scope, CAN protocol, cluster OS
- **Response**: `{ "success": true, "message": "Automotive brief request logged...", "submissionId": "WMX-REC-..." }`

#### 4. Newsletter Subscription
- **Endpoint**: `POST /newsletter-subscribe`
- **Fields**:
  - `email` *(required, valid email)*: Subscriber email
- **Response**: `{ "success": true, "message": "Welcome to The Rider Dispatch." }`

---

## 🔒 Data Persistence & Security

### 1. Atomic Persistence
Submissions are appended to [`data/submissions.json`](file:///c:/Users/Lokesh/Downloads/wingmanx-website/data/submissions.json) with client IP, ISO timestamp, and unique receipt IDs (`WMX-REC-...`).

### 2. Request Throttling & Payload Caps
- Incoming POST payloads are capped at **128 KB** (`MAX_PAYLOAD_BYTES = 131072`). Excess requests are immediately aborted with `HTTP 413 Payload Too Large`.

### 3. Hardened Security Headers
Every HTTP response includes:
- `X-Content-Type-Options: nosniff` (Prevents MIME confusion)
- `X-Frame-Options: SAMEORIGIN` (Clickjacking mitigation)
- `Referrer-Policy: strict-origin-when-cross-origin`
- **Origin-Restricted CORS**: Dynamically allows `localhost`, `127.0.0.1`, and official `wingmanx.in` subdomains while rejecting arbitrary cross-origin requests.

### 4. HTTP Range Requests (Video Streaming)
The server supports `206 Partial Content` Range headers, enabling smooth scrubbing, low buffering, and instant playback for expedition videos.

---

## 💻 Getting Started & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (Version **18.x** or higher recommended)
- `npm` or `pnpm`

### Installation
Clone or open the repository folder, then install development dependencies:
```bash
npm install
# or if using pnpm:
pnpm install
```

### Running the Production Server (Full Features + APIs)
To start the native Node.js server with all SPA routes, video streaming, and form APIs enabled:
```bash
npm start
```
The server will start at:
👉 **`http://localhost:3030`** *(or the port defined by `PORT` env variable)*

### Running the Vite Development Server (Fast HMR)
For rapid frontend prototyping with Hot Module Replacement:
```bash
npm run dev
```
The dev server will boot at:
👉 **`http://localhost:5173`**

---

## 🧪 Testing & Quality Assurance

The codebase includes automated verification scripts using the **Chrome DevTools Protocol (CDP)** located in the [`scratch/`](file:///c:/Users/Lokesh/Downloads/wingmanx-website/scratch/) directory:

### Available Verification Scripts
1. **Blogs & Articles Verification**:
   ```bash
   node scratch/verify_blogs.mjs
   ```
   *Validates `/blogs` listing, 6-card secondary grid, SPA navigation across all 7 article routes, word counts, and back-button functionality.*

2. **Galleries & Lightbox Verification**:
   ```bash
   node scratch/verify_gallery_and_awards.mjs
   ```
   *Tests image/video filter toggling, media rendering, and full-screen video lightbox behavior.*

3. **OEM & Brand Layout Verification**:
   ```bash
   node scratch/verify_oem_redesign.mjs
   node scratch/verify_brands_redesign.mjs
   ```
   *Verifies partner grids, sponsor logo symmetry, and form submission states.*

### Syntax Validation
To verify JavaScript syntax across all core application files:
```bash
node -c public/js/pages.js
node -c public/js/router.js
node -c server.cjs
```

---

## 🚢 Production Deployment

### Running with PM2 (Recommended for Linux/VPS)
```bash
# Install PM2 globally
npm install -g pm2

# Start WingmanX with cluster/fork mode
pm2 start server.cjs --name "wingmanx-site" --env PORT=3030

# Save process list for auto-restart on system reboot
pm2 save
pm2 startup
```

### Sample Nginx Reverse Proxy Configuration
```nginx
server {
    listen 80;
    server_name wingmanx.in www.wingmanx.in;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name wingmanx.in www.wingmanx.in;

    ssl_certificate /etc/letsencrypt/live/wingmanx.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/wingmanx.in/privkey.pem;

    root /var/www/wingmanx-website/public;

    location / {
        proxy_pass http://127.0.0.1:3030;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🏢 Company & Contact Details

- **Company**: WingmanX Mobility Labs Pvt. Ltd.
- **Headquarters**: Pune, Maharashtra 411045, India
- **Support Email**: [support@wingmanx.in](mailto:support@wingmanx.in)
- **Direct Phone**: `+91 97637 02033`
- **Mobile Applications**:
  - [Google Play Store](https://play.google.com/store/apps/details?id=com.wingmanx.app)
  - [Apple App Store](https://apps.apple.com/in/app/wingmanx/id6479581088)
- **Social Channels**:
  - [Instagram](https://instagram.com/wingmanx.in)
  - [LinkedIn](https://linkedin.com/company/wingmanx)
  - [YouTube](https://youtube.com/@wingmanx)

---

*© 2026 WingmanX Mobility Labs Pvt. Ltd. All Rights Reserved.*
