// Boka prov wrapper: Edge only offers "Installera Boka prov som app" on a page with a service worker in scope
// (TASK-EDUOS-10-07-07 D50). The work is passed straight to the network: nothing is cached, because the frame
// loads the Power App and a cached copy would be stale or a second copy of an app the user is already signed in to.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => event.respondWith(fetch(event.request)));
