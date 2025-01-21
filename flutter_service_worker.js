'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "63e4cf318333792906b7ac6f5fa96ddb",
".git/config": "028932f155a0544922ea3d8bb74a37bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e0f90a1840e703739c509e68d97c83c9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "40be8dd9150af3c9e0b3e9fcdf32cbb1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5363db1a5a63c56dba51ca5a2f106eb3",
".git/logs/refs/heads/main": "5363db1a5a63c56dba51ca5a2f106eb3",
".git/logs/refs/remotes/origin/main": "f7abd293b526ff51a1143670bb13ae21",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/4586c27f3b12e822dc368ae63ed7c6774b985b": "8f2105ef749fa55c67bfb0a9611b775d",
".git/objects/0a/61141b97f4c97ade77b5550d7563d4dcd005c5": "2d22b1994deb105b3001335f871a42ad",
".git/objects/0f/2768edb1dd7727bef129c85985ab0507c09c80": "23cf0a6d481a0e81c4a5d25e84d63cd3",
".git/objects/13/9833953a8d3b344aed51c206bdab68e7a1a123": "377b5d6555c272cd52eb4ca1c3c29a73",
".git/objects/14/e1105139d528a990f26ce44800bd0830113556": "b72bf9d1fc4a25e0ac88625f5ac6e8d8",
".git/objects/18/6eb222f73c79c4bdbf1af6215363387ec3c9c2": "84164c0bb9107c10a2e1c5cd7820a93c",
".git/objects/1a/23b5940fdb2bfdf25295e129645bc780dbfd51": "f30ad6d937a0dbd296b112096456b16f",
".git/objects/1b/e36696b7471cfbb08c9e9f63802824b08e13e5": "d854f1fdf8cbe4caef32a7400ab230ca",
".git/objects/1c/a48028e72d97c1f923fd40e556c0560566e22e": "5c9a7595e7ca906c0fe7f3a484ee9d76",
".git/objects/1c/ea43aa6d1f416427a6667dcf7ad3a580d59b81": "1d3d83d96a6f8b0cc1edaee1301389c1",
".git/objects/1d/4f6e9ba5a61ea5c42b78316d80be5ed3112e93": "df81196a2525c71963d28ec9fea031f3",
".git/objects/1e/8a718a0dda24ddaab85503ff941b0cbc7e209f": "56e93a671276f4a8a45b6d15e79905c0",
".git/objects/1e/c9018b9818ccf713f971cb10231ad03d6694b7": "9d182a81e46d85e0468b90aab4f87306",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/805ab738e44a48890d752a1a1540b40d0e0fba": "0368a6c65a8208ef0fd9df984035238b",
".git/objects/35/e7c8a4b5c27b4d1dbdd30622cb815f11742ffc": "4ae66f75d4c5438c102a460fd96d4624",
".git/objects/39/b7344aa8f0db14bc07e1037d6590b8e6b3d8a2": "0c2a4e129ed98ad56c1fc32a45d19e85",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/03f5a2780e2729ca5891b4d646068a6b7f13bc": "73bf82809ad420b96cf4eede3baa6ac3",
".git/objects/3f/c0215ffad8c3eca1ae410a071de1ee596a309b": "5e2f724e452f0e3911ce501169b545c3",
".git/objects/3f/fd4ebfee8c65b2e08fe93295819fda75ff4184": "866ff9fe6dfce1aa636d26c3946e1da4",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ec43b36578d008aac056d2078683ce9312899d": "26c2caafef6fd94249955e2f3c4a8fce",
".git/objects/48/7bcceedb1fd36d7a1ab85eb4c29a3dc79ba840": "84a8769aed452b5f7751aee97578bb15",
".git/objects/49/e58c741a9aa2a6a05950be3c49b5056a9a84ed": "b104d6681c6d90647dd7973d81db4755",
".git/objects/4f/aa35df2c3b64c6c2b5ac83f835c4bfa035ddae": "3207133c70afaae0f3b1563347d13c1e",
".git/objects/4f/c7704f9db3100dc0cb694ac45b2826154d5a9c": "4c0c0df995dbf63107a6f7506924c957",
".git/objects/54/b419e3eed0dd139825ea234c48296fd5ef630e": "439db1f62243975c4083d8d450109f61",
".git/objects/56/e42e6fed303465827846b0e828c5b303689ca2": "6dc0b6a81eb54dae4c9bd747c6f451dc",
".git/objects/5a/b360820eb796659fcf5e1236fac9a2d31c7c56": "8e02f875cea20d2b45c4293165e904de",
".git/objects/5b/1d451210bbc3af95dfbc13d873628d143eafef": "0484cc20982e9ec0038d0a2b7a0ac173",
".git/objects/5e/f09a654dde7d3b3080838768cc8d83e813ef51": "0f0efd4a15ce4b1090d4ce5e63306290",
".git/objects/60/9b1fa6d3b8b05fd8484e508710ce69e40b3f55": "e48bf9f5fc45ec39ba2e5aaaa8a6bb90",
".git/objects/61/60c440768d07acb40f9c5362b965372a91a996": "ad8893fb7b587a31043d3e19b74ea8de",
".git/objects/61/640409de8dbef1b07ce00cfa03026256335001": "b5f2e8e68a31412645e15c6f66484dcd",
".git/objects/68/b0777537708158c4f5aa3e9919728ac39d86cf": "e57437aed710f24a9bc801b5d9a02946",
".git/objects/6a/34b42e1d922b113476619b17de083fcf01c643": "f38bd34aa7e9cf1d5790c2a66d799625",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/70/a462341d2b81d83e3eb658fe7f6a76a5819f21": "dc94cc84e37653d4ae75c017e3d6ca43",
".git/objects/72/3b5b42e04ca4d2749eaae2a05e4a87f8d4d2ee": "219142c02d1eccc6f75cea6356916a2e",
".git/objects/74/0b7ef6231483c021955e26538d358454014343": "091278d6ee6c1052877ab2381f42b30c",
".git/objects/74/2d6f8e76598ec648c6de927d05cdc4d1b1579e": "617bc117065c4fc738fc5b7a4243b697",
".git/objects/74/8c81e04a006102cef432d68b8aeed31fc023a9": "f2d179f250f926d63133b5231b20bc15",
".git/objects/75/f5d08aea478a02211b1a927470f270dfae6d4a": "e0ff110cca2bc69d1850230f08b3d41e",
".git/objects/76/923195597d762d3de6d49cd2ca5b0489096aa8": "13e507e1ee3c28d6f26c5467ffb34c0f",
".git/objects/7c/c9c337ac333a6910ba596bb09c7211f1f73577": "e1303a58961e9ac09685088c87d01bbf",
".git/objects/7d/42d3d083d07130eb6eb4436b7c43ccf0d5f2ec": "4c0f93ef8e062c5da2ff75f8fa51fbe4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/3868c70d4746fc3fa5dc4c938aff058851c2e9": "4b24a6be02e68bf7d3fa5b016a85b6a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/4b6461a7d269d0db4cf604e14e3d29ed660402": "75a9fc627577edc8bda9b24cd4cd7736",
".git/objects/8c/6848355ddd3f7b68cb09c4cfa6c14df04e3add": "49f24855e89c8bb38ac699abb7043ed5",
".git/objects/8c/e3095540d306e2b847004b44931a4e7c06109f": "32e56c22d3163fb67363f96357d94c9a",
".git/objects/8e/2a708ab12e8cde86e70dc22726925cf2c71869": "2ee7c14438efb6893518ef413bf186ba",
".git/objects/8e/5a21fadc3542cdc01dbe3df197a20163d9416f": "7f6cdf507ec17f77ece2959c07dfb0ac",
".git/objects/8e/d4540727b02cf8dfe58c96e435b7df2e13a248": "f10521a321e1329120a3ad05768b9464",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/865df74e4fa72b8357c9457506efb9f4590340": "fcad34ddc8c969034b33697a7ae5541d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/edca333083a4fb672148edbbc5dcd759969d3d": "648dbf7a97052c8834ecea77f3831b8b",
".git/objects/9c/1b8e47c5a49df51614a544aea0c1bb5e17c399": "9b4326e976047979d31d752976c41b4c",
".git/objects/9c/2e3b228d5681daf4db3c961acb569e2e63dbad": "b7a1287e3d2de1ade070a1df2bb367b2",
".git/objects/9e/36eecca21fb8281ff3983b3ef79d934bd63dc7": "dea5b5794d846ca3689ff7991de7e602",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/3245dc88f577d6c589d1705271e7a769501491": "789af2e8b532c17491e3bc9b7ff3a1d9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1b08432d9a07a6e2361f4b4cfde5c914620000": "c7531ea3d910b4eaa544be1c86bd1fd9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ab784faf0b8ceb6dc7094b7edcf56a14ed0e1e": "04a3b7427d097c8381a9dcfe6d8714d0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/f98feabda985e535a847043abd340d61bb49f6": "ea5c64ffcf957c89ac51c2181176129a",
".git/objects/c3/3c39533019acc8583fa45f19af73dc0aba665f": "9b2219ef69ca69b8a76d27b077b2832c",
".git/objects/cb/44fd6bf64f7d1d80004f64e2b7694a50c53702": "d60087b8a42942b3e0324c4923a208f3",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b4b111f0858f2aa7634df788c875519e0751c8": "7c02d27710b1fc8416dc31986068fb9b",
".git/objects/d4/ee3ac4c224cc74b10f533d7054d6e4c4457a83": "da21ced6b141e034ed190e705ad1bbcc",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/b634fad8f05f390930953a04442fb1b9e73aaa": "9c4dfbc6ccb86c24c71e173ce2295e17",
".git/objects/da/c2874bed952b83437de355fc0a6d4ac122c38d": "d101898338196e9f2052bbba56502bd7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/d296e19b2ba555fd6d527eb9be7b5ffa09982a": "9babde8af4681ff6acaff31213878dc3",
".git/objects/e2/58368a06d4e4e89a4df00b25dfddd15ec83041": "8f61a12288ab477909a378d2996480e4",
".git/objects/e3/567df5f68fa9d8953d5ae2b39c19b23c065758": "dc706a5c849508f7941bf4ced2392b81",
".git/objects/e9/edd048093f43ec715220cc5c7af67feb5bd1ab": "298b9ad24b644923d68f58b6f68eb75a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/ba7d3cad0d61e4e29060ec3f28d554c6319887": "a64e99f6547c4a88a1091cc935d7aace",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/1289272decee8001e69ab95a3ca719843eefc2": "f955103b1d006743bb4c7de27648d6a3",
".git/objects/f5/d256aa79a0a3ae5bf1531b52d9ce5e8e4a3535": "39c54227d04cdb399c04172e0d9708de",
".git/objects/f7/13c13d4ae6d58dcb1add180815a1c026a8004d": "6ed3225acb9177a46bc44b617ae90d0a",
".git/objects/fa/97c27d320ab7760e2f93437578c33537a0993c": "c00ecd0a2476e0872dfc0a6ba46df368",
".git/objects/fe/7d342817624eaaf70a03389e5fba71055c0908": "d0b4d6ff4f91f1c397331ca4eb46217c",
".git/objects/fe/dfbbe77febedee0ecaeb764420ad59fd7107f6": "5bb70f7c8df3244fd98eda541e4d6c23",
".git/refs/heads/main": "da832f4df7cef427f404284c7aa93d46",
".git/refs/remotes/origin/main": "da832f4df7cef427f404284c7aa93d46",
"assets/AssetManifest.bin": "3f63f6f49eba1937f07e72267c339e3c",
"assets/AssetManifest.bin.json": "ed862384547bd9c90c87aaa643cc2c86",
"assets/AssetManifest.json": "582aaf9b53ccebe23022e01a0b7c1a6a",
"assets/assets/images/admin_background.jpg": "c8839bae2ed66d2fd16da02e9ad50aef",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7db82774d751ae90026e1a4139b0f86b",
"assets/NOTICES": "30096dc2cf530ef6e44e05c778ce3b6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "efc521a864356310a853d6fa26e0b05d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "85f89ee4278d38285d96e9f65e1413c1",
"/": "85f89ee4278d38285d96e9f65e1413c1",
"main.dart.js": "649cfb38080c7c3c248950434d1196fa",
"manifest.json": "c3eabe9f380a3e51ad1715bd5fa8b8ee",
"version.json": "455b66ce106231a832d1decff5787188"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
