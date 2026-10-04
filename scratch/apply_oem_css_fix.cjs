const fs = require('fs');

const cssPath = 'public/css/main.css';
const cssRaw = fs.readFileSync(cssPath, 'utf8');
const isCrlf = cssRaw.includes('\r\n');
const lines = cssRaw.split(/\r?\n/);

let startLine = -1;
let endLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('5. OEM PARTNERS = THE TECHNOLOGY') || lines[i].includes('5. OEM PARTNERS = STRENGTHEN RIDER RELATIONSHIPS')) {
    startLine = i - 1; // beginning comment border
  }
  if (lines[i].includes('6. BLOGS = THE KNOWLEDGE / THE RIDER JOURNAL')) {
    endLine = i - 2; // line before blogs comment border
    break;
  }
}

if (startLine === -1 || endLine === -1) {
  console.error('Could not find markers in main.css! startLine:', startLine, 'endLine:', endLine);
  process.exit(1);
}

console.log(`Found OEM block in main.css from line ${startLine + 1} to line ${endLine + 1}`);

// Read oemCssBlock from scratch/update_oem_css.mjs
const updateMjs = fs.readFileSync('scratch/update_oem_css.mjs', 'utf8');
const cssStart = updateMjs.indexOf('const oemCssBlock = `') + 'const oemCssBlock = `'.length;
const cssEnd = updateMjs.lastIndexOf('`;');
let oemCss = updateMjs.slice(cssStart, cssEnd);

// Add the extra layout classes to ensure full completeness
const extraLayoutClasses = `

/* Extra OEM Layout Container & Form Helpers */
.oem-page-layout {
  min-height: 100vh;
  background: #060709;
  color: #ffffff;
  overflow-x: hidden;
}

.oem-hero-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.oem-programs-content {
  display: flex;
  flex-direction: column;
}

.oem-insights-content {
  display: flex;
  flex-direction: column;
}

.oem-form-section {
  padding: 5.5rem 0 6.5rem;
  background: #060709;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.oem-form-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
}

.oem-partner-form {
  max-width: 780px;
  margin: 2rem auto 0;
}
`;

oemCss += extraLayoutClasses;

// Replace in lines
lines.splice(startLine, endLine - startLine + 1, ...oemCss.split('\n'));

const newline = isCrlf ? '\r\n' : '\n';
fs.writeFileSync(cssPath, lines.join(newline), 'utf8');

console.log('Successfully injected comprehensive OEM design system into public/css/main.css!');
