/* ═══════════════════════════════════════════════════════════
   KGS Home Décors — Shared Page Init (About, Contact, etc.)
   Requires config.js + store.js loaded before this file.
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {
  // Cart & wishlist badges
  if (typeof updateCartBadge === 'function')    updateCartBadge();
  if (typeof updateWishlistBadge === 'function') updateWishlistBadge();

  // Fix WhatsApp float link
  const wa = KGS_CONFIG && KGS_CONFIG.store ? KGS_CONFIG.store.whatsapp : '919789182921';
  document.querySelectorAll('.wa-float').forEach(function (el) {
    el.href = 'https://wa.me/' + wa;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  // Fix any remaining WhatsApp card links on contact page
  document.querySelectorAll('[data-wa-link]').forEach(function (el) {
    el.href = 'https://wa.me/' + wa;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  // Hide WA float when user is typing in inputs (mobile keyboard overlap fix)
  var waFloat = document.querySelector('.wa-float');
  if (waFloat) {
    document.querySelectorAll('input, textarea').forEach(function (el) {
      el.addEventListener('focus', function () { waFloat.classList.add('wa-float-hidden'); });
      el.addEventListener('blur',  function () { waFloat.classList.remove('wa-float-hidden'); });
    });
  }

  // Newsletter form — show toast on submit instead of navigating away
  document.querySelectorAll('.newsletter-form').forEach(function (form) {
    var btn = form.querySelector('button');
    var inp = form.querySelector('input[type="email"]');
    if (!btn || !inp) return;
    btn.addEventListener('click', function () {
      if (!inp.value || !inp.value.includes('@')) {
        inp.style.borderColor = '#C0392B';
        inp.focus();
        return;
      }
      inp.style.borderColor = '';
      btn.textContent = '✓ Subscribed!';
      btn.disabled = true;
      inp.value = '';
      setTimeout(function () {
        btn.textContent = 'Subscribe';
        btn.disabled = false;
      }, 3000);
    });
  });
});
