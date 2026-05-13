/* ═══════════════════════════════════════════════════════════
   KGS Home Décors — Service Worker v2
   Minimal pass-through. No caching to prevent stale content.
═══════════════════════════════════════════════════════════ */

const CACHE_NAME = 'kgs-v17';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  // Clear ALL old caches, then claim clients (NO page reload)
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Pure network — no caching at all. Prevents any stale content issues.
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
