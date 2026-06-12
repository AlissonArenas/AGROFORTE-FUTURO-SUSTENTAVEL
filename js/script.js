// Navbar scroll state
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 80) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const delay = parseInt(e.target.dataset.delay || '0', 10);
      setTimeout(() => e.target.classList.add('is-visible'), delay);
      io.unobserve(e.target);
      const counter = e.target.querySelector('.stat-num');
      if (counter && !counter.dataset.started) {
        counter.dataset.started = '1';
        animateCounter(counter);
      }
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
revealEls.forEach((el) => io.observe(el));

// Animated counter
function animateCounter(el) {
  const to = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Parallax (disabled on small screens and for reduced-motion users)
function parallax(el, speed) {
  if (!el || window.matchMedia('(max-width: 767px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let raf = 0;
  const update = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.1)`;
    });
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}
parallax(document.getElementById('heroImg'), 0.25);
parallax(document.getElementById('wheatImg'), 0.2);

/* ============================================
   ACCESSIBILITY WIDGET
   - "+" toggle button (bottom-right)
   - Light/Dark mode switch
   - Font size A− / A+ (16px min, 22px max)
   - Preferences saved to localStorage
   ============================================ */
(function () {
  const root = document.documentElement;
  const a11y = document.getElementById('a11y');
  const panel = document.getElementById('a11yPanel');
  const fab = document.getElementById('a11yFab');
  const themeToggle = document.getElementById('themeToggle');
  const fsDown = document.getElementById('fsDown');
  const fsUp = document.getElementById('fsUp');
  const fsVal = document.getElementById('fsVal');

  const FS_MIN = 16, FS_MAX = 22, FS_STEP = 1;

  // Restore preferences
  const savedTheme = localStorage.getItem('af-theme'); // 'dark' | 'light'
  if (savedTheme === 'dark') {
    root.classList.add('dark');
    themeToggle.setAttribute('aria-checked', 'false');
  } else {
    themeToggle.setAttribute('aria-checked', 'true');
  }

  let fs = parseInt(localStorage.getItem('af-fs') || FS_MIN, 10);
  if (isNaN(fs) || fs < FS_MIN || fs > FS_MAX) fs = FS_MIN;
  applyFontSize(fs);

  function applyFontSize(v) {
    fs = Math.max(FS_MIN, Math.min(FS_MAX, v));
    root.style.fontSize = fs + 'px';
    fsVal.textContent = fs + 'px';
    fsDown.disabled = fs <= FS_MIN;
    fsUp.disabled = fs >= FS_MAX;
    localStorage.setItem('af-fs', String(fs));
  }

  function openPanel() {
    a11y.classList.add('open');
    fab.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
  }
  function closePanel() {
    a11y.classList.remove('open');
    a11y.classList.add('closing');
    fab.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
    setTimeout(() => a11y.classList.remove('closing'), 250);
  }

  // Open/close panel with animation
  fab.addEventListener('click', () => {
    if (a11y.classList.contains('open')) closePanel();
    else openPanel();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!a11y.contains(e.target) && a11y.classList.contains('open')) {
      closePanel();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && a11y.classList.contains('open')) closePanel();
  });

  // Theme toggle (checked = light)
  themeToggle.addEventListener('click', () => {
    const isLight = themeToggle.getAttribute('aria-checked') === 'true';
    if (isLight) {
      root.classList.add('dark');
      themeToggle.setAttribute('aria-checked', 'false');
      localStorage.setItem('af-theme', 'dark');
    } else {
      root.classList.remove('dark');
      themeToggle.setAttribute('aria-checked', 'true');
      localStorage.setItem('af-theme', 'light');
    }
  });

  fsDown.addEventListener('click', () => applyFontSize(fs - FS_STEP));
  fsUp.addEventListener('click', () => applyFontSize(fs + FS_STEP));
})();
