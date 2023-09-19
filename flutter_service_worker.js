'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "debb4f18b534202b36a092300ce015cd",
"assets/AssetManifest.json": "68a8e5e79fad41324b7356a2769ec05e",
"assets/assets/images/cashier_rep.png": "c693811870c161da847d7a9f99cedbdd",
"assets/assets/images/close.png": "3b9c1e608bebfefa0b9bf99488b0dcf0",
"assets/assets/images/credit_rep.png": "7dfbe06df6320bd29d528e9d2355c872",
"assets/assets/images/favicon.png": "48c8f3afbde6503e402de1e93671acf5",
"assets/assets/images/floor.png": "05b7bf0abdab83aeb6b99d2aac68e5f5",
"assets/assets/images/invoice_rep.png": "648d4ac64ce31373c4287c8eeea9db81",
"assets/assets/images/kitchen_orders.png": "3e81bd8278306dfb55662c3c5ad8d754",
"assets/assets/images/leaf.png": "0b715173a7d60743a983dc655b1a6534",
"assets/assets/images/Logo.png": "20ab88a10933abc2064394dde85cab33",
"assets/assets/images/product_rep.png": "44a877d52144d685ef0c83d304a37135",
"assets/assets/images/reports.png": "62402278960c4658d3efd8990c7e09c7",
"assets/assets/images/store_rep.png": "0251c1d12e7bcc23aebb464b870b2d21",
"assets/assets/images/st_1.png": "595ef6861aa39c5d3731d5eaeb1ee013",
"assets/assets/images/st_2.png": "df0d5a62c905ac500ba44357a1fe2a8c",
"assets/assets/images/st_3.png": "e40f417a702d7c990bb7795d64eb033a",
"assets/assets/images/st_4.png": "e3d09345816fe156307adcb9c72dae7d",
"assets/assets/images/tiles.png": "f77caaa1ad3cbe9bf61e980bba68c7dd",
"assets/assets/images/warehouse_rep.png": "b1cafc6bf387569922ee6e745b4b24a3",
"assets/assets/jsons/sales.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/avatar.png": "cbaa5da26cd145ac672eaf6a7f6095df",
"assets/assets/svgs/easypaisa.svg": "48fa27619dde2545ffaa2a605c9eb009",
"assets/assets/svgs/jazzcash.svg": "a7eee61de80f2311db0f3e049866273b",
"assets/assets/svgs/mastercard.svg": "815f4c6e1984f9364a0fc52e898e3dd5",
"assets/assets/svgs/paypal.svg": "e35be82f315f068b4b68eededf733268",
"assets/assets/svgs/poslogo.png": "2cda0e40c036af66c43f1ed047ac3e00",
"assets/assets/svgs/pro1.png": "48ad2cb1606a5b2c335b402208b59f94",
"assets/assets/svgs/productImg.png": "356c86a9775464881ecaf9d53ceda728",
"assets/assets/svgs/signin.svg": "c8df2644e398d79a478b7dad8a9841b4",
"assets/assets/svgs/stripe.svg": "f1677e0a87a0d97a59c97d8a3a5ca631",
"assets/assets/svgs/visa.svg": "e8a301219d95b81b6f4262e1dcd9e564",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "9d92a568e8743dcbb398a4395a2ad014",
"assets/NOTICES": "3f0cd5542d656cd483e0524882f9a9b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "48c8f3afbde6503e402de1e93671acf5",
"firebase-messaging-sw.js": "6c1d4242920da4ced13ff31ce7352594",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "788bc81f51c1ed30181d22d53cce27af",
"/": "788bc81f51c1ed30181d22d53cce27af",
"main.dart.js": "9ad92f8da50560f7902b40df40b78dfd",
"manifest.json": "f31a2f32de8407a35165968495a3170b",
"version.json": "676b337d4bf68480d419dafc1bf095eb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
