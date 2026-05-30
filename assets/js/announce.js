(function () {
  'use strict';

  var MSGS = [
    { icon: 'local_shipping', html: '<b>Free delivery</b> across Tamil Nadu — every order, no minimum.' },
    { icon: 'star',           html: '<b>★ 5.0 on Google.</b> 240 families trust us. Come see why.' },
    { icon: 'storefront',     html: 'Showroom on <b>Junction Road</b> open daily · 10 AM–​10 PM' },
    { icon: 'verified',       html: '<b>Every piece hand-checked</b> at our showroom before it ships.' },
    { icon: 'chat',           html: 'WhatsApp us — a real person replies within <b>10 minutes.</b>' }
  ];

  var INTERVAL = 4500;
  var cur = 0;
  var timer = null;
  var paused = false;

  /* ── IST clock ── */
  function tickClock() {
    var el = document.getElementById('store-time');
    if (!el) return;
    var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    var h = now.getHours(), m = now.getMinutes();
    var hh = (h % 12) || 12, mm = String(m).padStart(2, '0'), ampm = h >= 12 ? 'PM' : 'AM';
    var open = h >= 10 && h < 22;
    el.textContent = (open ? 'Open now' : 'Opens 10 AM') + ' · ' + hh + ':' + mm + ' ' + ampm;
  }

  /* ── Build announce HTML ── */
  function buildAnnounce() {
    var bar = document.querySelector('.announce-bar');
    if (!bar) return;

    /* Center column */
    var center = bar.querySelector('.announce-center');
    if (!center) {
      center = document.createElement('span');
      center.className = 'announce-center';
      bar.insertBefore(center, bar.children[1] || null);
    }

    /* Inject dots container before center if not present */
    if (!bar.querySelector('.announce-dots')) {
      var rightSide = bar.querySelector('.announce-side--right');
      var dots = document.createElement('span');
      dots.className = 'announce-dots';
      for (var d = 0; d < MSGS.length; d++) {
        var dot = document.createElement('span');
        dot.className = 'announce-dot' + (d === 0 ? ' active' : '');
        dot.setAttribute('data-idx', d);
        dots.appendChild(dot);
      }
      if (rightSide) {
        bar.insertBefore(dots, rightSide);
      } else {
        bar.appendChild(dots);
      }
    }

    /* Build message elements */
    center.innerHTML = '';
    for (var i = 0; i < MSGS.length; i++) {
      var span = document.createElement('span');
      span.className = 'announce-msg' + (i === 0 ? ' in' : ' out-down');
      span.setAttribute('data-idx', i);
      span.innerHTML = '<span class="material-symbols-outlined">' + MSGS[i].icon + '</span>' + MSGS[i].html;
      center.appendChild(span);
    }
  }

  /* ── Navigate to message n ── */
  function goTo(n) {
    var msgs = document.querySelectorAll('.announce-msg');
    var dots = document.querySelectorAll('.announce-dot');
    if (!msgs.length) return;

    var prev = cur;
    cur = (n + MSGS.length) % MSGS.length;
    if (prev === cur) return;

    var forward = cur > prev || (prev === MSGS.length - 1 && cur === 0);

    msgs[prev].className = 'announce-msg ' + (forward ? 'out-up' : 'out-down');
    msgs[cur].className  = 'announce-msg ' + (forward ? 'out-down' : 'out-up');

    /* Force reflow so the starting position is painted before transition */
    void msgs[cur].offsetWidth;

    msgs[cur].className = 'announce-msg in';

    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === cur);
    });
  }

  /* ── Auto-rotation ── */
  function startTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
      if (!paused) goTo(cur + 1);
    }, INTERVAL);
  }

  /* ── Init ── */
  function init() {
    buildAnnounce();

    var bar = document.querySelector('.announce');
    if (bar) {
      bar.addEventListener('mouseenter', function () { paused = true; });
      bar.addEventListener('mouseleave', function () { paused = false; });
    }

    /* Dot click navigation */
    document.addEventListener('click', function (e) {
      var dot = e.target.closest('.announce-dot');
      if (!dot) return;
      var idx = parseInt(dot.getAttribute('data-idx'), 10);
      if (!isNaN(idx)) { goTo(idx); startTimer(); }
    });

    tickClock();
    setInterval(tickClock, 30000);
    startTimer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
