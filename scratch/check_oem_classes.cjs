const fs = require('fs');

const pages = fs.readFileSync('public/js/pages.js', 'utf8');
const oemStart = pages.indexOf('oem: () =>');
const oemEnd = pages.indexOf('blogs: () =>');
const oemHtml = pages.slice(oemStart, oemEnd);

const classRegex = /class=["']([^"']+)["']/g;
let match;
const classes = new Set();
while ((match = classRegex.exec(oemHtml)) !== null) {
  match[1].split(/\s+/).forEach(c => {
    if (c.trim()) classes.add(c.trim());
  });
}

const updateMjs = fs.readFileSync('scratch/update_oem_css.mjs', 'utf8');
const cssStart = updateMjs.indexOf('const oemCssBlock = `');
const cssEnd = updateMjs.lastIndexOf('`;');
const cssBlock = updateMjs.slice(cssStart, cssEnd);

console.log('Total classes in OEM page HTML:', classes.size);
const missing = [];
const found = [];

classes.forEach(c => {
  // Check if class exists in cssBlock or in main.css
  if (cssBlock.includes('.' + c)) {
    found.push(c);
  } else {
    missing.push(c);
  }
});

console.log('Found in oemCssBlock:', found.length);
console.log('Missing in oemCssBlock:', missing);
