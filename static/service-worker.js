//importScripts(
 // "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js"
//);
importScripts(
  "/workbox-sw.js"
);



//importScripts('/workbox-sw.prod.v2.1.3.js');


//workbox.precache(['./']);

//workbox.precaching.precache(['./']);

// cache HTML
 workbox.routing.registerRoute(
   new RegExp('./$'),
   workbox.strategies.staleWhileRevalidate({
    cacheName: "html-content"
   })
  );

  // cache bundles
  workbox.routing.registerRoute(
    new RegExp("/_next/(.*)"),
    workbox.strategies.staleWhileRevalidate({
      cacheName: "bundled-content"
    })
  );


  workbox.routing.registerRoute('https://www.easy-mock.com/(.*)',  workbox.strategies.networkFirst());
  
  // cache images
  workbox.routing.registerRoute(
    new RegExp("/static/(.*)"),
    workbox.strategies.cacheFirst({
      cacheName: "images",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
        })
      ]
    })
  );
  
  // offline analytics
  workbox.googleAnalytics.initialize();


