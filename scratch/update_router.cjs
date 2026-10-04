const fs = require('fs');

let code = fs.readFileSync('public/js/router.js', 'utf8');

// Target 1: Lightbox Binding
const target1 = `    // 2. Lightbox Binding (Galleries & Home)
    const lightboxItems = Array.from(document.querySelectorAll('[data-lightbox]'));
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    if (lightboxModal && lightboxImg && lightboxItems.length) {
      let currentIdx = 0;

      const showIndex = (idx) => {
        if (idx < 0) idx = lightboxItems.length - 1;
        if (idx >= lightboxItems.length) idx = 0;
        currentIdx = idx;
        const target = lightboxItems[idx];
        const src = target.getAttribute('data-lightbox');
        const alt = target.querySelector('img')?.getAttribute('alt') || 'High resolution motorcycle photo';
        if (src) {
          lightboxImg.src = src;
          lightboxImg.alt = alt;
          if (lightboxCaption) {
            lightboxCaption.textContent = alt;
          }
          lightboxModal.classList.add('active');
          lightboxModal.setAttribute('aria-hidden', 'false');
          const closeBtn = document.getElementById('lightbox-close-btn');
          if (closeBtn) closeBtn.focus();
        }
      };

      lightboxItems.forEach((item, i) => {
        item.addEventListener('click', () => showIndex(i));
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showIndex(i);
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

      const keyHandler = (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          showIndex(currentIdx - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          showIndex(currentIdx + 1);
        }
      };
      window.addEventListener('keydown', keyHandler);
      this.activeSystems.push({
        destroy: () => window.removeEventListener('keydown', keyHandler)
      });
    }`;

const replacement1 = `    // 2. Lightbox Binding (Galleries, Awards & Home)
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
        const type = target.getAttribute('data-lightbox-type') || (src && src.match(/\\.(mp4|webm|ogg)$/i) ? 'video' : 'image');
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
            lightboxCaption.textContent = alt.replace(/^View photo:\\s*|^Play video:\\s*/i, '').replace(/\\s*in lightbox$/i, '');
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
    }`;

// Target 2: initGalleryFilters
const target2 = `  initGalleryFilters() {
    const filterBtns = document.querySelectorAll('[data-gallery-filter]');
    const cards = document.querySelectorAll('.masonry-card[data-category]');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-gallery-filter');
        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }`;

const replacement2 = `  initGalleryFilters() {
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
  }`;

function normalize(str) { return str.replace(/\\r\\n/g, '\\n'); }

let normCode = normalize(code);
if (normCode.includes(normalize(target1))) {
  normCode = normCode.replace(normalize(target1), normalize(replacement1));
  console.log('Target 1 replaced successfully.');
} else {
  console.log('Target 1 NOT found!');
}

if (normCode.includes(normalize(target2))) {
  normCode = normCode.replace(normalize(target2), normalize(replacement2));
  console.log('Target 2 replaced successfully.');
} else {
  console.log('Target 2 NOT found!');
}

const finalCode = normCode.replace(/\\n/g, '\\r\\n');
fs.writeFileSync('public/js/router.js', finalCode, 'utf8');
console.log('Saved public/js/router.js');
