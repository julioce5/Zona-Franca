const C='ct-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','ct-manifest.json','ct-192.png','ct-512.png'])));});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const u=new URL(e.request.url);if(u.origin===location.origin){const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));}return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));});
