// Service Worker file
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('ppl-cache-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        '/styles.css',
        '/script.js',
        '/assets/android-chrome-192x192.png',
        '/assets/android-chrome-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});