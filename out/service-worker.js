//importScripts(
 // "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js"
//);
importScripts(
  "/workbox-sw.js"
);



//importScripts('/workbox-sw.prod.v2.1.3.js');


//workbox.precache(['./']);

workbox.precaching.precache(['./','./about/']);

 workbox.routing.registerRoute(
    new RegExp("/mock/5a2dca93e9ee5f7c09d8c6d7/(.*)"),
   workbox.strategies.networkFirst()
);

// cache HTML
 workbox.routing.registerRoute(
   new RegExp('./(.*)'),
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

  // cache bundles
  // workbox.routing.registerRoute(
  //   new RegExp("https://www.easy-mock.com/(.*)"),
  //   workbox.strategies.staleWhileRevalidate({
  //     cacheName: "fetch-content"
  //   })
  // );

 

  // https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/nextDemoTables
  // workbox.routing.registerRoute('https://www.easy-mock.com/(.*)',  workbox.strategies.networkFirst());  
  
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


