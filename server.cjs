const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

const PORT = process.env.PORT || 3030;
const ROOT = path.resolve(__dirname);
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const DATA_DIR = path.resolve(__dirname, 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json');

// Ensure local persistence data directory exists
if (!fs.existsSync(DATA_DIR)) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch (err) {
    console.error('Warning: Could not create data directory:', err.message);
  }
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const VALID_SPA_ROUTES = new Set([
  '/',
  '/about-us',
  '/wingmanx-ecosystem',
  '/brands-sponsors',
  '/oem-partners',
  '/community-contributors',
  '/awards',
  '/blogs',
  '/blogs/top-10-must-have-accessories-for-every-rider',
  '/blogs/mastering-the-monsoon-ghats',
  '/blogs/the-art-of-the-sweep',
  '/blogs/spiti-valley-unfiltered',
  '/blogs/the-ride-we-almost-didnt-take',
  '/blogs/somewhere-between-home-and-the-mountains',
  '/blogs/the-last-rider-in-the-pack',
  '/our-galleries',
  '/our-testimonials',
  '/careers',
  '/contact-us',
  '/privacy-policy',
  '/terms-of-service',
  '/cancellation-refund-policy',
  '/explore-rides'
]);

const FORBIDDEN_FILES = new Set([
  'server.cjs',
  'package.json',
  'package-lock.json',
  '.env',
  '.gitignore'
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_PAYLOAD_BYTES = 131072; // 128 KB max body size

function appendSubmission(record) {
  try {
    let records = [];
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      const raw = fs.readFileSync(SUBMISSIONS_FILE, 'utf8');
      records = JSON.parse(raw);
    }
    records.push(record);
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(records, null, 2), 'utf8');
  } catch (err) {
    console.error('Persistence error:', err.message);
  }
}

function setSecurityAndCorsHeaders(req, res) {
  // Hardened CORS: allow localhost, 127.0.0.1, or official wingmanx domains only
  const origin = req.headers.origin;
  if (origin) {
    const isAllowed = 
      origin.includes('localhost') || 
      origin.includes('127.0.0.1') || 
      origin.endsWith('.wingmanx.in') || 
      origin === 'https://wingmanx.in';
    
    if (isAllowed) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader('Vary', 'Origin');
    }
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Range');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
}

const server = http.createServer((req, res) => {
  setSecurityAndCorsHeaders(req, res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost:3030'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname || '/');

  // =========================================================================
  // 1. HARDENED POST HANDLER (STOPS UNQUALIFIED SUCCESS, VALIDATES BODIES)
  // =========================================================================
  if (req.method === 'POST') {
    let body = '';
    let bytesReceived = 0;
    let exceeded = false;

    req.on('data', chunk => {
      bytesReceived += chunk.length;
      if (bytesReceived > MAX_PAYLOAD_BYTES) {
        if (!exceeded) {
          exceeded = true;
          req.pause();
          res.writeHead(413, { 
            'Content-Type': 'application/json',
            'Connection': 'close'
          });
          res.end(JSON.stringify({ success: false, error: 'Payload size exceeds 128KB limit.' }));
        }
        return;
      }
      body += chunk.toString();
    });

    req.on('end', () => {
      if (exceeded) return;

      // Unsupported endpoints: Strictly reject with 404
      const supportedEndpoints = new Set([
        '/enquiry-store',
        '/brand-enquiry',
        '/oem-enquiry',
        '/newsletter-subscribe'
      ]);

      if (!supportedEndpoints.has(pathname)) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: `Unsupported POST endpoint: ${pathname}` }));
        return;
      }

      // Safely parse JSON or Form-Urlencoded
      let payload = {};
      try {
        if (body.trim().startsWith('{')) {
          payload = JSON.parse(body);
        } else {
          payload = querystring.parse(body);
        }
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Malformed JSON payload.' }));
        return;
      }

      const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
      const timestamp = new Date().toISOString();
      const submissionId = `WMX-REC-${Date.now().toString(36).toUpperCase()}`;

      // Endpoint-Specific Validation
      if (pathname === '/enquiry-store') {
        const { name, email, message, subject, phone } = payload;
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Please provide a valid full name (minimum 2 characters).' }));
        }
        if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Please provide a valid email address.' }));
        }
        if (!message || typeof message !== 'string' || message.trim().length < 5) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Please provide a descriptive inquiry or coordinate message.' }));
        }

        appendSubmission({
          id: submissionId,
          type: 'enquiry',
          name: name.trim(),
          email: email.trim(),
          phone: phone ? phone.trim() : null,
          subject: subject || 'General Rider Support',
          message: message.trim(),
          clientIp,
          timestamp
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          success: true,
          submissionId,
          message: 'Transmission received! Our ride operations crew in Pune will respond within 24 hours.',
          adapter: 'local-persistence'
        }));
      }

      if (pathname === '/brand-enquiry') {
        const { company, name, email, interest, message } = payload;
        if (!company || typeof company !== 'string' || company.trim().length < 2) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Please provide a brand or company name.' }));
        }
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Please provide a contact person and title.' }));
        }
        if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Please provide a valid corporate work email.' }));
        }

        appendSubmission({
          id: submissionId,
          type: 'brand-partnership',
          company: company.trim(),
          name: name.trim(),
          email: email.trim(),
          interest: interest || 'Milestone Gear Rewards',
          message: message ? message.trim() : '',
          clientIp,
          timestamp
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          success: true,
          submissionId,
          message: 'Brand partnership brief logged! Our collaborations team will connect with your brand.',
          adapter: 'local-persistence'
        }));
      }

      if (pathname === '/oem-enquiry') {
        const { company, name, email, department, message } = payload;
        if (!company || typeof company !== 'string' || company.trim().length < 2) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Please provide an OEM or manufacturer name.' }));
        }
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Please provide a lead engineer or representative name.' }));
        }
        if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Please provide a valid corporate email.' }));
        }

        appendSubmission({
          id: submissionId,
          type: 'oem-integration',
          company: company.trim(),
          name: name.trim(),
          email: email.trim(),
          department: department ? department.trim() : '',
          message: message ? message.trim() : '',
          clientIp,
          timestamp
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          success: true,
          submissionId,
          message: 'OEM engineering brief registered! Our automotive telematics team will transmit protocol documents.',
          adapter: 'local-persistence'
        }));
      }

      if (pathname === '/newsletter-subscribe') {
        const { email } = payload;
        if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Please enter a valid email address.' }));
        }

        appendSubmission({
          id: submissionId,
          type: 'newsletter',
          email: email.trim(),
          clientIp,
          timestamp
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          success: true,
          submissionId,
          message: 'Welcome to the pack! You are now subscribed to the WingManX rider dispatch.',
          adapter: 'local-persistence'
        }));
      }
    });
    return;
  }

  // =========================================================================
  // 2. HARDENED FILESYSTEM RESOLUTION (PATH TRAVERSAL PREVENTED)
  // =========================================================================
  // Sanitize requested path: strip leading slashes and null bytes
  const sanitizedRelPath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '').replace(/\0/g, '');
  
  // Guard against direct requests for private files
  const baseName = path.basename(sanitizedRelPath);
  if (FORBIDDEN_FILES.has(baseName) || baseName.startsWith('.')) {
    res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end('<h1>403 Forbidden</h1><p>Access to system configuration files is denied.</p>');
  }

  // Check if file lives inside public/ or root
  let targetFile = path.resolve(PUBLIC_DIR, '.' + sanitizedRelPath);
  
  // Allow root index.html, robots.txt, sitemap.xml
  if (sanitizedRelPath === '/' || sanitizedRelPath === '\\') {
    targetFile = path.resolve(ROOT, 'index.html');
  } else if (!fs.existsSync(targetFile)) {
    // Check if directly in ROOT (e.g. index.html)
    const directRoot = path.resolve(ROOT, '.' + sanitizedRelPath);
    if (fs.existsSync(directRoot) && !fs.statSync(directRoot).isDirectory()) {
      targetFile = directRoot;
    }
  }

  // Ensure target file stays strictly within repository root
  if (!targetFile.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end('<h1>403 Forbidden</h1><p>Path traversal is blocked.</p>');
  }

  // Stat check
  fs.stat(targetFile, (err, stats) => {
    if (err || stats.isDirectory()) {
      // Check if folder contains index.html
      if (!err && stats.isDirectory()) {
        const folderIndex = path.join(targetFile, 'index.html');
        if (fs.existsSync(folderIndex)) {
          return serveStaticFile(folderIndex, req, res);
        }
      }

      // Check clean SPA route
      let cleanPath = pathname;
      if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
      }

      if (VALID_SPA_ROUTES.has(cleanPath) || cleanPath.startsWith('/blogs/')) {
        const spaIndex = path.resolve(ROOT, 'index.html');
        if (fs.existsSync(spaIndex)) {
          return serveStaticFile(spaIndex, req, res);
        }
      }

      // Deliberate 404 for missing static assets or unmapped routes
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>404 — Route Not Found | WingManX</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body style="background:#060709; color:#f0f4f8; font-family:'Manrope',sans-serif; display:flex; align-items:center; justify-content:center; min-height:100vh; margin:0; text-align:center;">
  <div style="max-width:560px; padding:2rem;">
    <div style="color:#fa7907; font-family:'Space Grotesk',sans-serif; font-size:0.9rem; margin-bottom:1rem; letter-spacing:0.1em; font-weight:600;">
      [404 ERROR &bull; ROUTE NOT FOUND]
    </div>
    <h1 style="font-size:3rem; margin:0 0 1rem 0; font-family:'Space Grotesk',sans-serif; font-weight:700;">OFF-ROUTE COORDINATE.</h1>
    <p style="color:#8f9cae; line-height:1.6; margin-bottom:2rem; font-family:'Manrope',sans-serif;">
      The requested road coordinate does not exist on the WingManX platform.
    </p>
    <a href="/" style="display:inline-block; background:#fa7907; color:#fff; text-decoration:none; padding:12px 28px; border-radius:6px; font-weight:600; font-size:0.95rem; font-family:'Manrope',sans-serif;">
      RETURN TO BASE
    </a>
  </div>
</body>
</html>`);
    }

    serveStaticFile(targetFile, req, res, stats);
  });
});

function getCacheControlHeader(ext) {
  switch (ext) {
    case '.html':
      return 'no-cache, must-revalidate';
    case '.woff2':
    case '.woff':
    case '.ttf':
      return 'public, max-age=31536000, immutable';
    case '.png':
    case '.jpg':
    case '.jpeg':
    case '.webp':
    case '.svg':
    case '.ico':
      return 'public, max-age=604800, stale-while-revalidate=86400';
    case '.mp4':
    case '.webm':
      return 'public, max-age=604800';
    case '.css':
    case '.js':
    case '.mjs':
      return 'public, max-age=86400, must-revalidate';
    default:
      return 'public, max-age=3600';
  }
}

function serveStaticFile(filePath, req, res, existingStats) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const stat = existingStats || fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  // Generate strong ETag based on mtime and size
  const etag = `W/"${stat.size.toString(16)}-${Math.floor(stat.mtimeMs).toString(16)}"`;
  const cacheControl = getCacheControlHeader(ext);

  res.setHeader('ETag', etag);
  res.setHeader('Last-Modified', stat.mtime.toUTCString());
  res.setHeader('Cache-Control', cacheControl);

  // Check conditional request (If-None-Match)
  if (req.headers['if-none-match'] === etag) {
    res.writeHead(304);
    return res.end();
  }

  // Video Streaming Support (HTTP 206 Partial Content)
  if (range && (ext === '.mp4' || ext === '.webm')) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (start >= fileSize) {
      res.writeHead(416, {
        'Content-Range': `bytes */${fileSize}`
      });
      return res.end();
    }

    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(filePath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': contentType,
    };
    res.writeHead(206, head);
    file.pipe(res);
    return;
  }

  // Standard File Stream
  res.writeHead(200, {
    'Content-Length': fileSize,
    'Content-Type': contentType,
    'Accept-Ranges': 'bytes'
  });
  fs.createReadStream(filePath).pipe(res);
}

server.listen(PORT, () => {
  console.log(`WingManX Production Server running at http://localhost:${PORT}`);
});
