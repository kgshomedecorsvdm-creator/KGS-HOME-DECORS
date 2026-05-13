/* ═══════════════════════════════════════════════════════════
   KGS Home Décors — Service Worker
   SELF-DESTRUCT: Unregisters and clears all caches to fix
   stale cache issues. Will be replaced with a proper SW later.
═══════════════════════════════════════════════════════════ */

// On install, skip waiting immediately
self.addEventListener('install', () => self.skipWaiting());

// On activate, clear ALL caches and unregister
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.registration.unregister())
      .then(() => {
        // Reload all open tabs to get fresh content
        self.clients.matchAll({ type: 'window' }).then(clients => {
          clients.forEach(client => client.navigate(client.url));
        });
      })
  );
});

// Pass through all fetch requests to network (no caching)
self.addEventListener('fetch', () => {});
