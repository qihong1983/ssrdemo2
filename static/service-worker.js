//importScripts(
 // "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js"
//);
importScripts(
  "/workbox-sw.js"
);




// workbox.precaching.precache(['./','./about/']);

//  workbox.routing.registerRoute(
//     new RegExp("/mock/5a2dca93e9ee5f7c09d8c6d7/(.*)"),
//    workbox.strategies.networkFirst()
// );

//  workbox.routing.registerRoute(
//    new RegExp('./$'),
//    workbox.strategies.staleWhileRevalidate({
//     cacheName: "html-content"
//    })
//   );

//   workbox.routing.registerRoute(
//     new RegExp("/_next/(.*)"),
//     workbox.strategies.staleWhileRevalidate({
//       cacheName: "bundled-content"
//     })
//   );



 
//   workbox.routing.registerRoute(
//     new RegExp("/static/(.*)"),
//     workbox.strategies.cacheFirst({
//       cacheName: "images",
//       plugins: [
//         new workbox.expiration.Plugin({
//           maxEntries: 60,
//           maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
//         })
//       ]
//     })
//   );
  
//   workbox.googleAnalytics.initialize();



const staticAssets = [
  './'
];


const wb = new WorkboxSW();

wb.precache(staticAssets);

wb.router.registerRoute('https://www.easy-mock.com/(.*)', wb.strategies.networkFirst());


  wb.router.registerRoute(
    new RegExp("/_next/(.*)"),
    wb.strategies.staleWhileRevalidate({
      cacheName: "bundled-content"
    })
  );

wb.router.registerRoute(/.*\.(png|jpg|jpeg|gif)/, wb.strategies.cacheFirst({
  cacheName: 'news-images',
  cacheExpiration: {
    maxEntries: 2,
    maxAgeSeconds: 7 * 24 * 60 * 60,
  },
  cacheableResponse: {
    statuses: [0, 200]
  },
}));
