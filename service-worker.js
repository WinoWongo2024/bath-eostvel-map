const cacheName = 'bath-map-cache-v1';
const staticAssets = [
  './',
  './index.html',
  './script.js',
  './style.css',
  './roads.geojson', // Make sure this is included if you're using it
  './icon.png' // Include the icon
];

self.addEventListener('install', async () => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req);
}
