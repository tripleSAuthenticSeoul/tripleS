// sw.js

const cacheName = 'my-cache-v1';
const cacheAssets = [
    '/',
    '/index.html',
    '/tripleS/styles.css',
    '/tripleS/script.js',
    '/tripleS/generation.png',
    '/tripleS/rising.png',
    '/tripleS/cherry-talk.png',
    '/tripleS/touch.png',
    '/tripleS/girls-capitalism.png',
    '/tripleS/invincible.png',
    '/tripleS/just-do-it.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(cacheAssets);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
