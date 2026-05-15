// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// ── SIMULATION BAR ANIMATION ──
function animateBars() {
  const congestedValues = [73, 18, 5, 3, 1];
  const balancedValues  = [28, 24, 22, 15, 11];
  const letters = ['a', 'b', 'c', 'd', 'e'];

  function fluctuate(base, range) {
    return Math.max(1, Math.min(99, base + (Math.random() - 0.5) * range)).toFixed(0);
  }

  setInterval(() => {
    letters.forEach((l, i) => {
      const cv = fluctuate(congestedValues[i], i === 0 ? 6 : 3);
      const bv = fluctuate(balancedValues[i], 4);

      document.getElementById(`c-${l}`).textContent       = cv + '%';
      document.getElementById(`c-${l}-bar`).style.width   = cv + '%';
      document.getElementById(`b-${l}`).textContent       = bv + '%';
      document.getElementById(`b-${l}-bar`).style.width   = bv + '%';
    });
  }, 2200);
}

animateBars();

// ── SCROLL TO TOP ──
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── TOAST NOTIFICATION ──
const toast = document.getElementById('toast');
setTimeout(() => {
  toast.classList.add('toast-show');
  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    toast.classList.remove('toast-show');
  }, 5000);
}, 1200);
