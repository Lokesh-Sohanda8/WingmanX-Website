const fs = require('fs');

const raw = fs.readFileSync('public/js/router.js', 'utf8');
const isCrlf = raw.includes('\r\n');
const lines = raw.split(/\r?\n/);

const replacement1Lines = `    // 2. Lightbox Binding (Galleries, Awards & Home)
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
    }`.split('\n');

const replacement2Lines = `  initGalleryFilters() {
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
  }`.split('\n');

// Replace block 2 first (so block 1 indices don't change)
lines.splice(844, 865 - 844 + 1, ...replacement2Lines);

// Replace block 1
lines.splice(467, 535 - 467 + 1, ...replacement1Lines);

const newline = isCrlf ? '\r\n' : '\n';
fs.writeFileSync('public/js/router.js', lines.join(newline), 'utf8');
console.log('Successfully updated router.js with lightbox and gallery filter methods!');
