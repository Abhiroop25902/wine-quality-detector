'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1833a83a24c4edb27833ef45eb7be8eb",
".git/config": "bb8be5051949ca230a42f3493da625cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dd4a16b03ec0f9432e9a3cca267b60c5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f9aa92c9cc93c7c0dbed8602283067e4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e4d8cce012a78d6e6a13fb431f56892",
".git/logs/refs/heads/main": "95c0dd0ee8784bf4366ccbda8b0acaa0",
".git/logs/refs/remotes/origin/main": "b0023f5d9c08c3291f58b06fb19bad74",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/7c3816fd4292ea7b93c3be5c6338bd6e4cf68b": "f994d64a307bd04f18a197c6f3e0eb12",
".git/objects/19/87ce56bb508a1f558dcd71a03b3eaebd3e2ed8": "4adc92e41820efa99743ae5c5a3bfb45",
".git/objects/20/fe893a33721e0273080aa0035cc1657ff8646f": "0b9e414e2513ad35f8430a036175c208",
".git/objects/21/6b9c0e2b04149325b1d628250fe27376d87de7": "573272306d46f36982f34601785ccf66",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/a15eec43cf6a5b6cc16a845c96e0ac56813ee1": "913d371bdd989e3517a46af687ab11a4",
".git/objects/34/35c89286ddd00403c1e9f3ad4f8167be332945": "6be4be9e596d6a58a1496828991f8fd5",
".git/objects/39/434a783e5c98f5f6adfdd2f42086182ad7d006": "0ded91865b934044429a2b3f73ee9cca",
".git/objects/3a/e390bf1bccc6ef91a5f53f51cd9caf3eda0f6d": "1e3849bf959d9b1f68e4c915339931c3",
".git/objects/41/cc27ce3a282e2d602db7dd8ec93680de88dfe7": "fe5a83cc589ef2ba08097dfeee8ca46a",
".git/objects/43/fdb0d2a76bd9ddcecf26a08c6c3758e46167cc": "51b4fa7e31ac76f34f27931b3acd9f9d",
".git/objects/44/798fc773259ad57f73903c8e81d53ddf36b853": "93f039204c938ba954c0d2278ff06787",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/389ac02a79509e166043d92269233f934f22f5": "25e1493529ecd4e0b365553edf92a5ee",
".git/objects/4c/2ed70ae4f4e80b2423fb15040c3fd1545ec6ad": "8fcdf7fc9c40930ce2e5aea44149982b",
".git/objects/4d/310269c4cb2e402d847255f21c447ed6ddc600": "29c242ff10eeae697057702793f93b61",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/25f38d04d940768a4b55e91ada19e699d2b5c2": "96bd148ee5b0178688db54c5825868ac",
".git/objects/56/0b981d610194aec3ee30b382810c0736cb677d": "b548207d413edce95f2a83364dcd8ba9",
".git/objects/59/3ee17de95c7c75ef3b6a0bbb21d04a8df02bb5": "23eb209ae27f83e748827e5917c6aa6f",
".git/objects/61/233f1ed56b0d70bf7c5b086da8cff2c7a06f6b": "9fdc294b8d87a361f73e8270df31983e",
".git/objects/6d/bc47360ff3026e01b39291de82cdb4912344c7": "d4ae0f090f9b709de619a30230bba541",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/05f8d859c6da52f20c1b731c9090bdaad4c1ce": "d623aa65741b86f786583a37ace9a650",
".git/objects/82/06bc1cb52124b004eba704295f958ec4f3885b": "c468d3ce7d7168ea1e93710119e69464",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/872b9b7ae68d1d84edb2464f95c973e676b68e": "b357bd0a6ac9d2a2562b80b367b14bc9",
".git/objects/92/5f3e8996bd99cbf1bfc791d5558be9e80f5c7b": "47a9b573560496676bac0bbba52b2e68",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/2a2e7ba0826f1aa50257d4e45e52d51e52d6a1": "07301bc12040b2aa81c000ca9b5f583f",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/4acb42aa7bd51f7039bf7a4c83ab6756b05a74": "bb2db59049797483daf28901842d8d9e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/dbf33f85a10328da0b4438549eb6f9e65f7330": "8a4995113daebce77a1337cb50e96016",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/472626dd0973b1a75041d88c533cdc482f78d7": "0080d5de418e48dbc0f36823a041380e",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ce/51db72f43f3f1dfc6e832759a3704aa4305e29": "c92813049268cbfa73ff8adb10f2ae5b",
".git/objects/d2/e4ab29ed8e2194bb5585a540f0629835af0504": "392fea1158ba47408ea01f0fd2c587d9",
".git/objects/d6/853d46050c7fde37ae9c66d13eefffde218dba": "58454fd13cb07194556c4fb21f178555",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/3af6dacc90d84e956c300992441a70a208c1ff": "cacb75f7e451c2368560399033ed31a4",
".git/objects/e0/e7727fa2eb4fa43d07f4e488afb17deb6ace1f": "89e7611408df84f3c307db1605207606",
".git/objects/e3/1a68c2c4d4c72f700d55db2702a16149405eb4": "0dce395ee32ef6decc386362af0915dc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/9ff9c3da1f8f910e1ea1aa68d7659d7f9912ef": "9e21f4affacac3975978b5dc5c2e1ca4",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/7454cfaa27d62cd8321e058176a92f69857ae0": "5f53cfadca25bf2eedd892a3d6074f64",
".git/objects/eb/7f239fe2cfdea862b7145b5ce13bf2f609cef9": "cfa315dc14101d487a8acc07bc01ca15",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/e1ddb5706728365865c08e12017a0b2000ce48": "9f592be3b60a15f84c649238276dfb3a",
".git/objects/fc/ebd6561e9609a1c622d5b5a1d6caa805c437a1": "c2b2238aabd4c692328cc340d288f27b",
".git/objects/fd/3baaef21bf26acbc753fc6a63a50c9adebe59c": "5c5734568168e62f18756af251e00e56",
".git/ORIG_HEAD": "6307aa6df789b51412d312712d582afc",
".git/refs/heads/main": "ec260ac109cc28972597cbcf5c781e6a",
".git/refs/remotes/origin/main": "ec260ac109cc28972597cbcf5c781e6a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "fa74b0628554ae65aef19b8e9e406fb7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "b00170799c25d964b4e8930158ffacf5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "179869ef66cda7e7484670536eea3fbc",
"/": "179869ef66cda7e7484670536eea3fbc",
"main.dart.js": "0e26fc03dc2f90835425331cea4a7a67",
"manifest.json": "9ecf83299541ba7ecc4d0d7a299088e7",
"README.md": "15c53a794d82ddad169e93a0cef9304f",
"version.json": "7be289d982175b4cdb75a8f5a24d1a2e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
