// ===== Hireginie — interactions =====

// Mobile nav toggle
function toggleNav() {
  document.querySelector('.nav-links')?.classList.toggle('open');
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Count-up for stat numbers (data-count="120" data-suffix="+")
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const dur = 1400;
  const start = performance.now();
  function frame(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.floor(eased * target);
    el.textContent = val.toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(frame);
    else el.textContent = target.toLocaleString() + suffix;
  }
  requestAnimationFrame(frame);
}
const countIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { countUp(e.target); countIO.unobserve(e.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));

// Animated vision bars: set heights
document.querySelectorAll('.bars i').forEach((bar, i) => {
  bar.style.height = (28 + i * 9) + '%';
  bar.style.animationDelay = (i * 0.06) + 's';
});

// Contact form (demo)
function submitContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  const orig = btn.textContent;
  btn.textContent = 'Sent ✓';
  btn.disabled = true;
  e.target.reset();
  setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 2500);
  return false;
}
