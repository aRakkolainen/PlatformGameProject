// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fjhts":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f1da0e86905f6534";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5JiMD":[function(require,module,exports) {
//Source for this was course material and Leevi Lautanen gave hint for using BootScene and starting new Scene with parameters
// Including the form for asking player to insert username: https://www.thepolyglotdeveloper.com/2020/09/accept-text-input-user-phaser-game/
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _startScene = require("./src/startScene");
var _startSceneDefault = parcelHelpers.interopDefault(_startScene);
var _levelScene1 = require("./src/levelScene1");
var _levelScene1Default = parcelHelpers.interopDefault(_levelScene1);
var _levelScene2 = require("./src/levelScene2");
var _levelScene2Default = parcelHelpers.interopDefault(_levelScene2);
var _levelScene3 = require("./src/levelScene3");
var _levelScene3Default = parcelHelpers.interopDefault(_levelScene3);
var _finishScene = require("./src/finishScene");
var _finishSceneDefault = parcelHelpers.interopDefault(_finishScene);
var _stylesCss = require("./src/styles.css");
var _phaser = require("phaser");
var _phaserDefault = parcelHelpers.interopDefault(_phaser);
let game;
let phaserConfig;
window.onload = ()=>{
    phaserConfig = {
        type: (0, _phaserDefault.default).AUTO,
        scale: {
            mode: (0, _phaserDefault.default).Scale.Fit,
            autoCenter: (0, _phaserDefault.default).Scale.CENTER_BOTH,
            width: 800,
            height: 1000
        },
        dom: {
            createContainer: true
        },
        parent: "gameContainer",
        transparent: true,
        pixelArt: true,
        physics: {
            default: "arcade",
            debug: false,
            arcade: {
                gravity: {
                    y: 0
                }
            }
        },
        scene: [
            BootScene,
            (0, _startSceneDefault.default),
            (0, _levelScene1Default.default),
            (0, _levelScene2Default.default),
            (0, _levelScene3Default.default),
            (0, _finishSceneDefault.default)
        ]
    };
    game = new (0, _phaserDefault.default).Game(phaserConfig);
    window.focus();
};
const gameOptions = {
    playerGravity: 800,
    playerSpeed: 300
};
class BootScene extends (0, _phaserDefault.default).Scene {
    constructor(){
        super("BootScene");
    }
    create() {
        this.data = {
            config: phaserConfig,
            options: gameOptions,
            playerData: {
                name: "player",
                totalScore: [],
                enemiesKilled: []
            }
        };
        this.scene.start("StartScene", this.data);
    }
}

},{"./src/startScene":"loePq","./src/levelScene1":"4cF2E","./src/levelScene2":"fNmku","./src/levelScene3":"ccm34","./src/finishScene":"5rk9W","./src/styles.css":"lW6qc","phaser":"d1pJ3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccm34":[function(require,module,exports) {
//Sources: Course material + same sources as in previous levels
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _phaser = require("phaser");
var _phaserDefault = parcelHelpers.interopDefault(_phaser);
var _moonplatformPng = require("./assets/moonplatform.png");
var _moonplatformPngDefault = parcelHelpers.interopDefault(_moonplatformPng);
var _smallmoonPlatformPng = require("./assets/smallmoon_platform.png");
var _smallmoonPlatformPngDefault = parcelHelpers.interopDefault(_smallmoonPlatformPng);
let playerData;
let data;
let enemiesKillScore;
let gameConfig;
let gameOptions;
let gameWidth;
let gameHeight;
let gameScore;
let gunShot;
let blingSound;
let backgroundMusic;
class LevelScene3 extends (0, _phaserDefault.default).Scene {
    constructor(){
        super("LevelScene3");
        this.score = 0;
        this.enemiesKilledScore = 0;
        this.info;
    }
    preload() {
        this.load.image("moonplatform", (0, _moonplatformPngDefault.default));
        this.load.image("smallmoonPlatform", (0, _smallmoonPlatformPngDefault.default));
        this.load.image("moonplatform2", "./assets/moonplatform2.png");
        this.load.image("fireball", "./assets/fireball.png");
        this.load.image("arrows", "./assets/arrows.png");
        this.load.image("spaceBar", "./assets/spaceBar.png");
        this.load.image("blackhole", "./assets/blackhole.png");
        this.load.image("finish", "./assets/finish.png");
        this.load.image("alien", "./assets/alien.png");
        this.load.image("star1", "./assets/star1.png");
        this.load.image("star2", "./assets/star2.png");
        this.load.image("star3", "./assets/star3.png");
        this.load.image("star4", "./assets/star4.png");
        //Sound effects and music are downloaded from here: https://freesfx.co.uk/Default.aspx 
        this.load.audio("gunShot", "./assets/gunShot.mp3");
        this.load.audio("bling", "./assets/bling.mp3");
        this.load.audio("background3", "./assets/background3.mp3");
        this.load.image("shootkeys", "./assets/shootkeys.png");
        // Loading the player
        this.load.spritesheet("player", "./assets/player.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    }
    create(gameData) {
        this.data = gameData;
        data = gameData;
        playerData = gameData.playerData;
        gameScore = playerData.totalScore;
        enemiesKillScore = playerData.enemiesKilled;
        gameConfig = gameData.config;
        gameWidth = gameConfig.scale.width;
        gameHeight = gameConfig.scale.height;
        gameOptions = gameData.options;
        gameScore = gameData.totalScore;
        //Sound effect are added based on this website: https://www.thepolyglotdeveloper.com/2020/09/add-music-sounds-other-audio-phaser-game/ 
        blingSound = this.sound.add("bling", {
            loop: false
        });
        gunShot = this.sound.add("gunShot", {
            loop: false
        });
        backgroundMusic = this.sound.add("background3", {
            loop: true
        });
        backgroundMusic.play();
        //This is based on this website: https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
        let div = document.getElementById("gameContainer");
        div.style.background = "linear-gradient(#0a0529, #180a5f, #170766, #450181,  #410377, #2b0050, #160129)";
        // Things to collet information: 
        this.text = this.add.text(gameWidth - 775, gameHeight - 995, "SCORE: ", {
            fontSize: "25px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const star1 = this.physics.add.image(gameWidth - 770, gameHeight - 940, "star1");
        this.add.text(gameWidth - 755, gameHeight - 950, "3 points ", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        this.add.text(gameWidth - 755, gameHeight - 910, "5 points", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const star2 = this.physics.add.image(gameWidth - 770, gameHeight - 100, "star2");
        this.add.text(gameWidth - 755, gameHeight - 860, "10 points", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const star3 = this.physics.add.image(gameWidth - 770, gameHeight - 860, "star3");
        this.add.text(gameWidth - 755, gameHeight - 810, "20 points", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const star4 = this.physics.add.image(gameWidth - 770, gameHeight - 800, "star4");
        this.scoreText = this.add.text(gameWidth - 685, gameHeight - 995, "0", {
            fontSize: "25px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        //How to play instructions: 
        this.keys = this.add.text(gameWidth - 605, gameHeight - 995, "KEYS: ", {
            fontSize: "25px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        this.add.image(gameWidth - 570, gameHeight - 945, "arrows");
        this.move = this.add.text(gameWidth - 525, gameHeight - 945, "Move", {
            fontSize: "18px",
            fill: "#ffffff"
        });
        this.spaceBar = this.add.image(gameWidth - 570, gameHeight - 900, "spaceBar");
        this.jump = this.add.text(gameWidth - 525, gameHeight - 910, "Jump higher", {
            fontSize: "18px",
            fill: "#ffffff"
        });
        this.add.text(gameWidth - 525, gameHeight - 870, "Shoot", {
            fontSize: "18px",
            fill: "#ffffff"
        });
        this.shoot = this.add.image(gameWidth - 570, gameHeight - 860, "shootkeys");
        this.info = this.add.text(gameWidth - 450, gameHeight * 0.005, "Collect at least 150 points to succeed!", {
            fontSize: "15px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        // Platforms: 
        this.platformGroup = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        this.moonplatformGroup = this.physics.add.group({
            immovable: false,
            allowGravity: true
        });
        //Smaller platforms
        this.smallPlatformGroup = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        this.alienGroup = this.physics.add.group({
            defaultKey: "alien",
            maxSize: 25,
            allowGravity: true
        });
        //Fire balls: (based on the source: https://phasergames.com/phaser-3-physics-beginners/)
        this.fireBalls = this.physics.add.group({
            defaultKey: "fireball",
            maxSize: 50
        });
        this.startplatform = this.physics.add.staticSprite(gameWidth / 5.5, gameHeight / (1 / 0.87), "moonplatform");
        this.endPlatform = this.physics.add.staticSprite(gameWidth - 100, gameHeight - 850, "moonplatform");
        this.finishLine = this.physics.add.staticSprite(gameWidth - 75, gameHeight - 885, "finish_line");
        let platformNum = (0, _phaserDefault.default).Math.Between(0, 12);
        let smallPlatformNum = (0, _phaserDefault.default).Math.Between(5, 10);
        for(let i = 0; i < platformNum; i++)this.platformGroup.create((0, _phaserDefault.default).Math.Between(0, gameWidth), (0, _phaserDefault.default).Math.Between(gameHeight - 800, gameHeight), "moonplatform");
        for(let i = 0; i < smallPlatformNum; i++)this.smallPlatformGroup.create((0, _phaserDefault.default).Math.Between(0, gameWidth), (0, _phaserDefault.default).Math.Between(gameHeight - 800, gameHeight), "smallmoonPlatform");
        for(let i = 0; i < smallPlatformNum; i++)this.moonplatformGroup.create((0, _phaserDefault.default).Math.Between(0, gameWidth), (0, _phaserDefault.default).Math.Between(gameHeight - 800, gameHeight), "smallmoonPlatform");
        for(let i = 0; i < smallPlatformNum; i++)this.moonplatformGroup.create((0, _phaserDefault.default).Math.Between(0, gameWidth), (0, _phaserDefault.default).Math.Between(gameHeight - 800, gameHeight), "smallmoonPlatform");
        this.player = this.physics.add.sprite(gameWidth / 5.5, gameHeight / 1.25, "player");
        this.player.body.gravity.y = gameOptions.playerGravity;
        this.physics.add.collider(this.player, this.startplatform);
        this.physics.add.collider(this.player, this.platformGroup);
        this.physics.add.collider(this.player, this.smallPlatformGroup);
        this.physics.add.collider(this.player, this.moonplatformGroup, this.movePlatform, null, this);
        this.physics.add.collider(this.player, this.finishLine, this.finishLevel, null, this);
        this.physics.add.collider(this.player, this.endPlatform);
        this.physics.add.overlap(this.player, this.alienGroup, this.enemyAttack, null, this);
        // Fireballs 
        this.physics.add.collider(this.fireBalls, this.platformGroup, this.disappear, null, this);
        this.physics.add.collider(this.fireBalls, this.smallPlatformGroup, this.disappear, null, this);
        this.physics.add.collider(this.fireBalls, this.moonplatformGroup, this.disappear, null, this);
        this.physics.add.overlap(this.fireBalls, this.alienGroup, this.enemyKill, null, this);
        // Things to collect: 
        let starNum = (0, _phaserDefault.default).Math.Between(5, 10);
        let starNum2 = (0, _phaserDefault.default).Math.Between(7, 14);
        let starNum3 = (0, _phaserDefault.default).Math.Between(4, 8);
        let starNum4 = (0, _phaserDefault.default).Math.Between(2, 4);
        this.starGroup1 = this.physics.add.group({});
        this.starGroup2 = this.physics.add.group({});
        this.starGroup3 = this.physics.add.group({});
        this.starGroup4 = this.physics.add.group({});
        //Setting the collectable items to random places
        for(let i = 0; i < starNum; i++)this.starGroup1.create((0, _phaserDefault.default).Math.Between(0, gameWidth), (0, _phaserDefault.default).Math.Between(gameHeight - 800, gameHeight), "star1");
        for(let i = 0; i < starNum2; i++)this.starGroup2.create((0, _phaserDefault.default).Math.Between(0, gameWidth), (0, _phaserDefault.default).Math.Between(gameHeight - 800, gameHeight), "star2");
        for(let i = 0; i < starNum3; i++)this.starGroup3.create((0, _phaserDefault.default).Math.Between(0, gameWidth), (0, _phaserDefault.default).Math.Between(gameHeight - 800, gameHeight), "star3");
        for(let i = 0; i < starNum4; i++)this.starGroup4.create((0, _phaserDefault.default).Math.Between(0, gameWidth), (0, _phaserDefault.default).Math.Between(gameHeight - 800, gameHeight), "star4");
        this.physics.add.overlap(this.player, this.starGroup1, this.collectStar1, null, this);
        this.physics.add.overlap(this.player, this.starGroup2, this.collectStar2, null, this);
        this.physics.add.overlap(this.player, this.starGroup3, this.collectStar3, null, this);
        this.physics.add.overlap(this.player, this.starGroup4, this.collectStar4, null, this);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.timeTrigger = this.time.addEvent({
            callback: this.makeEnemies,
            callbackScope: this,
            delay: 750,
            loop: true
        });
    }
    makeEnemies(player, start) {
        let alien = this.alienGroup.get((0, _phaserDefault.default).Math.Between(30, gameWidth), (0, _phaserDefault.default).Math.Between(210, gameHeight));
        if (alien) {
            alien.setActive(true);
            alien.setVelocityX((0, _phaserDefault.default).Math.Between(-50, 50));
            alien.setVelocityY((0, _phaserDefault.default).Math.Between(-50, 50));
        }
    }
    collectStar1(player, start) {
        blingSound.play();
        start.disableBody(true, true);
        this.score += 3;
        this.scoreText.setText(this.score);
    }
    collectStar2(player, start) {
        blingSound.play();
        start.disableBody(true, true);
        this.score += 5;
        this.scoreText.setText(this.score);
    }
    collectStar3(player, start) {
        blingSound.play();
        start.disableBody(true, true);
        this.score += 15;
        this.scoreText.setText(this.score);
    }
    collectStar4(player, start) {
        blingSound.play();
        start.disableBody(true, true);
        this.score += 20;
        this.scoreText.setText(this.score);
    }
    //Shooting functions are based on this: https://phasergames.com/phaser-3-physics-beginners/ 
    shootLeft(player) {
        let fireBall = this.fireBalls.get(this.player.x, this.player.y);
        if (fireBall) {
            gunShot.play();
            fireBall.setActive(true);
            fireBall.setVisible(true);
            fireBall.body.velocity.x = -200;
        }
    }
    shootRight(player) {
        let fireBall = this.fireBalls.get(this.player.x, this.player.y);
        if (fireBall) {
            gunShot.play();
            fireBall.setActive(true);
            fireBall.setVisible(true);
            fireBall.body.velocity.x = 200;
        }
    }
    enemyAttack(player, start) {
        if (this.score > 0) {
            this.score -= 15;
            this.scoreText.setText(this.score);
        }
        start.body.velocity.y = (0, _phaserDefault.default).Math.Between(-100, 100);
        start.body.velocity.x = (0, _phaserDefault.default).Math.Between(-100, 100);
        this.enemyMoving = true;
        this.player.x = gameWidth / 5.5;
        this.player.y = gameHeight / 1.25;
    }
    enemyKill(player, start) {
        start.disableBody(true, true);
        this.score += 15;
        this.enemiesKilledScore += 1;
        this.scoreText.setText(this.score);
    }
    disappear(start) {
        start.disableBody(false, true);
    }
    finishLevel(player, start, data) {
        if (this.score < 150) this.info.setText("Collect more points");
        else if (this.score >= 150) {
            this.info.setText("You won!");
            blingSound.play();
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
            this.total = {
                name: "Level3",
                score: this.score
            };
            this.enemyKills = {
                name: "alien",
                number: this.enemiesKilledScore
            };
            enemiesKillScore.push(this.enemyKills);
            this.data.playerData.totalScore.push(this.total);
            backgroundMusic.stop();
            this.score = 0;
            this.scene.start("FinishScene", this.data);
        }
    }
    update() {
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -gameOptions.playerSpeed;
            this.player.anims.play("left", true);
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = gameOptions.playerSpeed;
            this.player.anims.play("right", true);
        } else {
            this.player.body.velocity.x = 0;
            this.player.anims.play("turn", true);
        }
        //Shooting options (First two are shooting while player is moving)
        if (this.cursors.left.isDown && this.cursors.shift.isDown) {
            this.shootLeft();
            this.player.anims.play("shootLeft", true);
        }
        if (this.cursors.right.isDown && this.cursors.shift.isDown) {
            this.shootRight();
            this.player.anims.play("shootRight", true);
        }
        // When shift is pressed while shooting and player is on platform, player stays at one position
        if (this.cursors.left.isDown && this.cursors.shift.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = 0;
            this.player.body.velocity.x = 0;
            this.shootLeft();
            this.player.anims.play("shootLeft", true);
        }
        if (this.cursors.right.isDown && this.cursors.shift.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = 0;
            this.player.body.velocity.x = 0;
            this.shootRight();
            this.player.anims.play("shootRight", true);
        }
        // Reloading the fireballs is based on this website: https://phasergames.com/phaser-3-physics-beginners/
        this.fireBalls.children.each((function(b) {
            if (b.active) {
                b.setActive(true);
                if (b.x < 0 || b.x > gameWidth) b.setActive(false);
            }
        }).bind(this));
        if (this.cursors.up.isDown && this.player.body.touching.down) this.player.body.velocity.y = -gameOptions.playerGravity / 1.6;
        if (this.cursors.space.isDown) this.player.body.velocity.y = -gameOptions.playerGravity / 1.6;
        if (this.player.y > gameHeight) {
            backgroundMusic.stop();
            this.scene.start("LevelScene3");
            this.score = 0;
        }
        if (this.player.x > gameWidth || this.player.x < 0) {
            this.player.x = gameWidth / 5.5;
            this.player.y = gameHeight / 1.25;
        }
        if (this.score >= 150) {
            this.info.setText("You have 30 seconds to collect extra points!");
            this.timeTrigger = this.time.addEvent({
                callback: this.finishLevel,
                callbackScope: this,
                delay: 30000,
                loop: true
            });
        }
    }
}
exports.default = LevelScene3;

},{"phaser":"d1pJ3","./assets/moonplatform.png":"fwrSy","./assets/smallmoon_platform.png":"8LWmS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fwrSy":[function(require,module,exports) {
module.exports = require("183e614ac695e4ea").getBundleURL("kLn1y") + "moonplatform.9aa2a664.png" + "?" + Date.now();

},{"183e614ac695e4ea":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"8LWmS":[function(require,module,exports) {
module.exports = require("7d3eee754efad779").getBundleURL("kLn1y") + "smallmoon_platform.ccf4245b.png" + "?" + Date.now();

},{"7d3eee754efad779":"lgJ39"}],"lW6qc":[function() {},{}]},["fjhts","5JiMD"], "5JiMD", "parcelRequireddc7")

//# sourceMappingURL=game.905f6534.js.map
