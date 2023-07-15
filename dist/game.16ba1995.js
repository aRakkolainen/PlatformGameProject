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
})({"8FDfE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c89dfcca16ba1995";
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

},{}],"fNmku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _phaser = require("phaser");
var _phaserDefault = parcelHelpers.interopDefault(_phaser);
let totalPoints;
let data;
let gameConfig;
let gameOptions;
let gameWidth;
let gameHeight;
let gameScore;
class LevelScene2 extends (0, _phaserDefault.default).Scene {
    constructor(){
        super("LevelScene2");
        this.score = 0;
        this.enemyMoving = false;
    }
    preload() {
        // Loading the player
        this.load.image("mountainplatform", "./assets/mountainplatform.png");
        this.load.image("mountainsmallPlatform", "./assets/small_mountainplatform.png");
        this.load.image("mountainsmallSkeletonPlatform", "./assets/smallSkeletonplatform.png");
        this.load.image("fireball", "./assets/fireball.png");
        this.load.image("arrows", "./assets/arrows.png");
        this.load.image("spaceBar", "./assets/spaceBar.png");
        this.load.image("shootkeys", "./assets/shootkeys.png");
        this.load.image("topaz", "./assets/topaz.png");
        this.load.image("emerald", "./assets/emerald.png");
        this.load.image("bluestone", "./assets/bluestone.png");
        this.load.image("coal", "./assets/coal.png");
        this.load.image("diamond", "./assets/diamond.png");
        this.load.image("stonemonster", "./assets/stonemonster.png");
        this.load.image("finish_line", "./assets/finish.png");
        this.load.spritesheet("player", "./assets/player.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    }
    create(gameData) {
        this.data = gameData;
        gameConfig = gameData.config;
        gameWidth = gameConfig.scale.width;
        gameHeight = gameConfig.scale.height;
        gameOptions = gameData.options;
        gameScore = gameData.totalScore;
        //This is based on this website: https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
        let div = document.getElementById("gameContainer");
        div.style.background = div.style.background = "linear-gradient(#113388, #114488, #247899)";
        //Things to collect info + scores
        this.text = this.add.text(gameWidth - 775, gameHeight - 995, "SCORE: ", {
            fontSize: "25px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const coal = this.physics.add.image(30, 60, "coal");
        this.add.text(45, 50, "1 point ", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        this.add.text(45, 90, "3 points", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const emerald = this.physics.add.image(30, 100, "emerald");
        this.add.text(45, 140, "5 points", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const topaz = this.physics.add.image(30, 140, "topaz");
        this.blueText = this.add.text(45, 190, "10 points", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const blueStone = this.physics.add.image(30, 200, "bluestone");
        this.add.text(45, 240, "15 points", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const diamond = this.physics.add.image(30, 240, "diamond");
        this.scoreText = this.add.text(115, 5, "0", {
            fontSize: "25px",
            fill: "#0000000",
            fontStyle: "bold"
        });
        //How to play instructions: 
        //How to play instructions: 
        this.keys = this.add.text(195, 5, "KEYS: ", {
            fontSize: "25px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        this.add.image(230, 55, "arrows");
        this.move = this.add.text(275, 55, "Move", {
            fontSize: "18px",
            fill: "#ffffff"
        });
        this.spaceBar = this.add.image(230, 100, "spaceBar");
        this.jump = this.add.text(275, 90, "Jump higher", {
            fontSize: "18px",
            fill: "#ffffff"
        });
        this.add.text(275, 130, "Shoot", {
            fontSize: "18px",
            fill: "#ffffff"
        });
        this.shoot = this.add.image(230, 140, "shootkeys");
        this.info = this.add.text(gameWidth - 420, 5, "Collect at least 100 points to pass the level!", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        // Platforms: 
        this.platformGroup = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        //Smaller platforms
        this.smallPlatformGroup = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        this.skeletonPlatformGroup = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        //Fire balls: 
        this.fireBalls = this.physics.add.group({
            defaultKey: "fireball",
            maxSize: 50
        });
        //Monsters
        this.stonemonsterGroup = this.physics.add.group({
            immovable: false,
            allowGravity: false
        });
        // Collectibles: 
        this.topazGroup = this.physics.add.group({});
        this.emeraldGroup = this.physics.add.group({});
        this.coalGroup = this.physics.add.group({});
        this.bluestoneGroup = this.physics.add.group({});
        this.diamondGroup = this.physics.add.group({});
        let coalNum = (0, _phaserDefault.default).Math.Between(9, 18);
        let emeraldNum = (0, _phaserDefault.default).Math.Between(2, 4);
        let topazNum = (0, _phaserDefault.default).Math.Between(5, 10);
        let bluestoneNum = (0, _phaserDefault.default).Math.Between(3, 6);
        let diamondNum = (0, _phaserDefault.default).Math.Between(2, 4);
        for(let i = 0; i < coalNum; i++)this.coalGroup.create((0, _phaserDefault.default).Math.Between(30, gameWidth), (0, _phaserDefault.default).Math.Between(210, gameHeight), "coal");
        for(let i = 0; i < emeraldNum; i++)this.emeraldGroup.create((0, _phaserDefault.default).Math.Between(30, gameWidth), (0, _phaserDefault.default).Math.Between(210, gameHeight), "emerald");
        for(let i = 0; i < topazNum; i++)this.topazGroup.create((0, _phaserDefault.default).Math.Between(30, gameWidth), (0, _phaserDefault.default).Math.Between(210, gameHeight), "topaz");
        for(let i = 0; i < bluestoneNum; i++)this.bluestoneGroup.create((0, _phaserDefault.default).Math.Between(30, gameWidth), (0, _phaserDefault.default).Math.Between(210, gameHeight), "bluestone");
        for(let i = 0; i < diamondNum; i++)this.diamondGroup.create((0, _phaserDefault.default).Math.Between(30, gameWidth), (0, _phaserDefault.default).Math.Between(210, gameHeight), "diamond");
        this.startPlatform = this.physics.add.staticSprite(gameWidth / 5.5, gameHeight / (1 / 0.88), "mountainplatform");
        this.endPlatform = this.physics.add.staticSprite(gameWidth - 100, gameHeight - 850, "mountainplatform");
        this.finish = this.physics.add.staticSprite(gameWidth - 75, gameHeight - 885, "finish_line");
        let platformNum = (0, _phaserDefault.default).Math.Between(3, 10);
        let smallPlatformNum = (0, _phaserDefault.default).Math.Between(2, 15);
        let skeletonPlatformNum = (0, _phaserDefault.default).Math.Between(3, 15);
        let stonemonsterNum = (0, _phaserDefault.default).Math.Between(5, 10);
        for(let i = 0; i < platformNum; i++){
            this.platformGroup.create((0, _phaserDefault.default).Math.Between(30, gameWidth), (0, _phaserDefault.default).Math.Between(210, gameHeight), "mountainplatform");
            this.stonemonsterGroup.create((0, _phaserDefault.default).Math.Between(30, gameWidth), (0, _phaserDefault.default).Math.Between(210, gameHeight), "stonemonster");
        }
        for(let i = 0; i < stonemonsterNum; i++)this.stonemonsterGroup.create((0, _phaserDefault.default).Math.Between(30, gameWidth), (0, _phaserDefault.default).Math.Between(210, gameHeight), "stonemonster");
        for(let i = 0; i < smallPlatformNum; i++)this.smallPlatformGroup.create((0, _phaserDefault.default).Math.Between(210, gameWidth), (0, _phaserDefault.default).Math.Between(180, gameHeight), "mountainsmallPlatform");
        for(let i = 0; i < skeletonPlatformNum; i++)this.skeletonPlatformGroup.create((0, _phaserDefault.default).Math.Between(210, gameWidth), (0, _phaserDefault.default).Math.Between(180, gameHeight), "mountainsmallSkeletonPlatform");
        this.player = this.physics.add.sprite(gameWidth / 5.5, gameHeight / 1.25, "player");
        this.player.body.gravity.y = gameOptions.playerGravity;
        // Colliders for the player: 
        this.physics.add.collider(this.player, this.platformGroup);
        this.physics.add.collider(this.player, this.smallPlatformGroup);
        this.physics.add.collider(this.player, this.skeletonPlatformGroup, this.movePlatform, null, this);
        this.physics.add.collider(this.player, this.startPlatform);
        this.physics.add.overlap(this.player, this.stonemonsterGroup, this.enemyAttack, null, this);
        this.physics.add.overlap(this.player, this.coalGroup, this.collectCoal, null, this);
        this.physics.add.overlap(this.player, this.emeraldGroup, this.collectEmerald, null, this);
        this.physics.add.overlap(this.player, this.topazGroup, this.collectTopaz, null, this);
        this.physics.add.overlap(this.player, this.bluestoneGroup, this.collectBlueStone, null, this);
        this.physics.add.overlap(this.player, this.diamondGroup, this.collectDiamond, null, this);
        this.physics.add.overlap(this.player, this.stonemonsterGroup, this.moveStone, null, this);
        this.physics.add.collider(this.player, this.finish, this.finishLevel, null, this);
        this.physics.add.collider(this.player, this.endPlatform);
        // Fireballs 
        this.physics.add.collider(this.fireBalls, this.platformGroup, this.disappear, null, this);
        this.physics.add.collider(this.fireBalls, this.smallPlatformGroup, this.disappear, null, this);
        this.physics.add.collider(this.fireBalls, this.skeletonPlatformGroup, this.disappear, null, this);
        this.physics.add.overlap(this.fireBalls, this.stonemonsterGroup, this.enemyKill, null, this);
        // Stone monsters (enemy of this level) 
        this.physics.add.collider(this.stonemonsterGroup, this.platformGroup, this.stopEnemy, null, this);
        this.physics.add.collider(this.stonemonsterGroup, this.smallPlatformGroup, this.stopEnemy, null, this);
        this.physics.add.collider(this.stonemonsterGroup, this.skeletonPlatformGroup, this.stopEnemy, null, this);
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    stopEnemy(start) {
        if (this.enemyMoving == true && start.body.touching.down || this.enemyMoving == true && start.body.x > gameWidth) start.body.velocity.y = 0;
    }
    collectCoal(player, start) {
        start.disableBody(true, true);
        this.score += 1;
        this.scoreText.setText(this.score);
    }
    collectEmerald(player, start) {
        start.disableBody(true, true);
        this.score += 3;
        this.scoreText.setText(this.score);
    }
    collectTopaz(player, start) {
        start.disableBody(true, true);
        this.score += 5;
        this.scoreText.setText(this.score);
    }
    collectBlueStone(player, start) {
        start.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText(this.score);
    }
    collectDiamond(player, start) {
        start.disableBody(true, true);
        this.score += 15;
        this.scoreText.setText(this.score);
    }
    //Based on this: https://phasergames.com/phaser-3-physics-beginners/ 
    shootLeft(player) {
        let fireBall = this.fireBalls.get(this.player.x, this.player.y);
        if (fireBall) {
            fireBall.setActive(true);
            fireBall.setVisible(true);
            fireBall.body.velocity.x = -200;
        }
    }
    shootRight(player) {
        let fireBall = this.fireBalls.get(this.player.x, this.player.y);
        if (fireBall) {
            fireBall.setActive(true);
            fireBall.setVisible(true);
            fireBall.body.velocity.x = 200;
        }
    }
    enemyKill(player, start) {
        start.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText(this.score);
    }
    movePlatform(player, start) {
        start.body.velocity.y = (0, _phaserDefault.default).Math.Between(50, 150);
    }
    enemyAttack(player, start) {
        if (this.score > 0) {
            this.score -= 10;
            this.scoreText.setText(this.score);
        }
        start.body.velocity.y = (0, _phaserDefault.default).Math.Between(50, 150);
        this.enemyMoving = true;
        this.player.x = gameWidth / 5.5;
        this.player.y = gameHeight / 1.25;
    }
    disappear(start) {
        start.disableBody(false, true);
    }
    finishLevel(player, start) {
        console.log(this.score);
        if (this.score < 100) this.info.setText("Collect more points");
        else if (this.score >= 100) {
            this.info.setText("You won!");
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
            gameScore[1].score = this.score;
            this.scene.start("LevelScene3", this.data);
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
        // Based on this website: https://phasergames.com/phaser-3-physics-beginners/
        this.fireBalls.children.each((function(b) {
            if (b.active) {
                b.setActive(true);
                if (b.x < 0 || b.x > gameWidth) b.setActive(false);
            }
        }).bind(this));
        if (this.cursors.up.isDown && this.player.body.touching.down) this.player.body.velocity.y = -gameOptions.playerGravity / 1.6;
        if (this.cursors.space.isDown) this.player.body.velocity.y = -gameOptions.playerGravity / 1.6;
        if (this.player.y > gameHeight) {
            this.scene.start("LevelScene2");
            this.score = 0;
        }
        //this.physics.add.overlap(this.player, this.finish, this.finishLevel, null, this)
        if (this.player.x > gameWidth || this.player.x < 0) {
            this.player.x = gameWidth / 5.5;
            this.player.y = gameHeight / 1.25;
        }
    }
}
exports.default = LevelScene2;

},{"phaser":"d1pJ3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8FDfE","fNmku"], "fNmku", "parcelRequirecd09")

//# sourceMappingURL=game.16ba1995.js.map
