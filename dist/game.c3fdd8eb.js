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
})({"b999R":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "48d4a72fc3fdd8eb";
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

},{}],"g9e9u":[function(require,module,exports) {
//Sources: Fixing shader error: https://github.com/parcel-bundler/parcel/issues/928
// Fixing error: https://stackoverflow.com/questions/71279498/phaser-3-images-not-showing
// Fixing other errro: https://stackoverflow.com/questions/71225698/phaser-3-spritesheet-doesnt-load-correctly
// Background color during runtime: https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
// Shooting fire balls as bullets: https://phasergames.com/phaser-3-physics-beginners/
// + Phaser 3 Documentation: https://photonstorm.github.io/phaser3-docs/index.html
// + Course material
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cactusWithPlatformPng = require("./assets/cactusWithPlatform.png");
var _cactusWithPlatformPngDefault = parcelHelpers.interopDefault(_cactusWithPlatformPng);
var _stylesCss = require("./styles.css");
let game;
const gameOptions = {
    playerGravity: 800,
    playerSpeed: 300
};
window.onload = function() {
    let gameConfig = {
        type: Phaser.AUTO,
        //background: "#454545",
        //background: "linear-gradient(#0d1554, #5ba4ff)",
        scale: {
            mode: Phaser.Scale.Fit,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 800,
            height: 1000
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
        scene: PlayGame
    };
    game = new Phaser.Game(gameConfig);
    window.focus();
};
class PlayGame extends Phaser.Scene {
    constructor(){
        super("PlayGame");
        this.score = 0;
    }
    preload() {
        //this.load.background("background", "assets/background.png");
        this.load.image("platform", "./assets/sandplatform.png");
        this.load.image("small_platform", "./assets/smallsand_platform.png");
        this.load.image("popsicle1", "./assets/popsicle1.png");
        this.load.image("popsicle2", "./assets/popsicle2.png");
        this.load.image("popsicle3", "./assets/popsicle3.png");
        this.load.image("popsicle4", "./assets/popsicle4.png");
        this.load.image("finish_line", "./assets/finish.png");
        this.load.image("cactus", "./assets/cactus.png");
        this.load.image("fireball", "./assets/fireball.png");
        this.load.image("cactusPlatform", (0, _cactusWithPlatformPngDefault.default));
        this.load.image("arrows", "./assets/arrows.png");
        this.load.image("spaceBar", "./assets/spaceBar.png");
        this.load.image("shoot", "./assets/shoot.png");
        this.load.image("shootStill", "./assets/shootStill.png");
        this.load.spritesheet("player", "./assets/player.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    }
    create() {
        //The platform: 
        this.platformGroup = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        //Smaller platforms
        this.smallPlatformGroup = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        //Cactus group
        this.cactusGroup = this.physics.add.group({
            immovable: false,
            allowGravity: false
        });
        this.cactusPlatformGroup = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        //Fire balls: 
        this.fireBalls = this.physics.add.group({
            defaultKey: "fireball",
            maxSize: 10
        });
        this.startplatform = this.physics.add.staticSprite(game.config.width / 2, game.config.height / (1 / 0.87), "platform");
        this.endPlatform = this.physics.add.staticSprite(game.config.width - 100, game.config.height - 850, "platform");
        this.finish = this.physics.add.staticSprite(game.config.width - 75, game.config.height - 910, "finish_line");
        let platformNum = Phaser.Math.Between(3, 15);
        let smallPlatformNum = Phaser.Math.Between(3, 20);
        for(let i = 0; i < platformNum; i++)this.platformGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "platform");
        //this.cactus.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "cactus")
        let cactusPlatformNum = Phaser.Math.Between(0, 15);
        let cactusNum = Phaser.Math.Between(0, 10);
        for(let i = 0; i < cactusPlatformNum; i++)this.cactusPlatformGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "cactusPlatform");
        for(let i = 0; i < cactusNum; i++)this.cactusGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "cactus");
        for(let i = 0; i < smallPlatformNum; i++)this.smallPlatformGroup.create(Phaser.Math.Between(210, game.config.width), Phaser.Math.Between(180, game.config.height), "small_platform");
        //this.physics.add.overlap(this.startplatform, this.platformGroup)
        this.player = this.physics.add.sprite(game.config.width / 2, game.config.height / 1.25, "player");
        this.player.body.gravity.y = gameOptions.playerGravity;
        this.physics.add.collider(this.player, this.platformGroup);
        this.physics.add.collider(this.player, this.smallPlatformGroup);
        this.physics.add.collider(this.cactusGroup, this.platformGroup);
        this.physics.add.collider(this.cactusGroup, this.smallPlatformGroup);
        this.physics.add.collider(this.player, this.startplatform);
        //this.physics.add.collider(this.player, this.cactusPlatformGroup);
        this.physics.add.collider(this.player, this.endPlatform);
        this.yellowPopsicleGroup = this.physics.add.group({});
        this.pinkPopsicleGroup = this.physics.add.group({});
        this.whitePopsicleGroup = this.physics.add.group({});
        this.bluePopsicleGroup = this.physics.add.group({});
        this.physics.add.collider(this.yellowPopsicleGroup, this.platformGroup);
        this.physics.add.collider(this.yellowPopsicleGroup, this.smallPlatformGroup);
        this.physics.add.collider(this.pinkPopsicleGroup, this.platformGroup);
        this.physics.add.collider(this.pinkPopsicleGroup, this.smallPlatformGroup);
        this.physics.add.collider(this.whitePopsicleGroup, this.platformGroup);
        this.physics.add.collider(this.whitePopsicleGroup, this.smallPlatformGroup);
        this.physics.add.collider(this.bluePopsicleGroup, this.platformGroup);
        this.physics.add.collider(this.bluePopsicleGroup, this.smallPlatformGroup);
        for(let i = 0; i < 15; i++)this.yellowPopsicleGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "popsicle1");
        for(let i = 0; i < 10; i++)this.pinkPopsicleGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "popsicle2");
        for(let i = 0; i < 5; i++)this.whitePopsicleGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "popsicle3");
        for(let i = 0; i < 3; i++)this.bluePopsicleGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "popsicle4");
        //Adding the score board and points
        this.text = this.add.text(25, 5, "SCORE: ", {
            fontSize: "25px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const yellowPopsicle = this.physics.add.image(30, 60, "popsicle1");
        this.yellowText = this.add.text(45, 50, "1 point ", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        this.pinkText = this.add.text(45, 100, "3 points", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const pinkPopsicle = this.physics.add.image(30, 110, "popsicle2");
        this.whiteText = this.add.text(45, 150, "5 points", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const whitePopsicle = this.physics.add.image(30, 160, "popsicle3");
        this.blueText = this.add.text(45, 200, "10 points", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        const bluePopsicle = this.physics.add.image(30, 210, "popsicle4");
        this.scoreText = this.add.text(115, 5, "0", {
            fontSize: "25px",
            fill: "#0000000",
            fontStyle: "bold"
        });
        //How to play instructions: 
        this.keys = this.add.text(150, 5, "KEYS: ", {
            fontSize: "25px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        this.add.image(180, 55, "arrows");
        this.move = this.add.text(220, 55, "Move", {
            fontSize: "18px",
            fill: "#ffffff"
        });
        this.spaceBar = this.add.image(180, 100, "spaceBar");
        this.jump = this.add.text(220, 90, "Jump higher", {
            fontSize: "18px",
            fill: "#ffffff"
        });
        this.shoot = this.add.image(170, 130, "shoot");
        this.add.text(220, 120, "Shoot", {
            fontSize: "18px",
            fill: "#ffffff"
        });
        this.add.text(220, 160, "Shoot at still", {
            fontSize: "18px",
            fill: "#ffffff"
        });
        this.shootStill = this.add.image(183, 170, "shootStill");
        this.info = this.add.text(game.config.width - 420, 5, "Collect at least 50 points to win!", {
            fontSize: "20px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        this.physics.add.overlap(this.player, this.yellowPopsicleGroup, this.collectYellowPopsicle, null, this);
        this.physics.add.overlap(this.player, this.pinkPopsicleGroup, this.collectPinkPopsicle, null, this);
        this.physics.add.overlap(this.player, this.whitePopsicleGroup, this.collectWhitePopsicle, null, this);
        this.physics.add.overlap(this.player, this.bluePopsicleGroup, this.collectBluePopsicle, null, this);
        this.physics.add.overlap(this.player, this.finish, this.finishLevel, null, this);
        this.physics.add.overlap(this.player, this.cactusGroup, this.cactusAttack, null, this);
        this.physics.add.overlap(this.fireBalls, this.cactusGroup, this.cactusKill, null, this);
        this.physics.add.overlap(this.player, this.cactusPlatformGroup, this.movePlatform, null, this);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "turn",
            frames: [
                {
                    key: "player",
                    frame: 4
                }
            ],
            frameRate: 10
        });
        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("player", {
                start: 5,
                end: 9
            }),
            frameRate: 10
        });
        this.anims.create({
            key: "shootLeft",
            //frames: [{key: "player", frame: 0}],
            frames: this.anims.generateFrameNumbers("player", {
                start: 3,
                end: 0
            }),
            frameRate: 10
        });
        this.anims.create({
            key: "shootRight",
            frames: this.anims.generateFrameNumbers("player", {
                start: 8,
                end: 5
            }),
            frameRate: 10
        });
    }
    collectYellowPopsicle(player, start) {
        start.disableBody(true, true);
        this.score += 1;
        this.scoreText.setText(this.score);
    }
    collectPinkPopsicle(player, start) {
        start.disableBody(true, true);
        this.score += 3;
        this.scoreText.setText(this.score);
    }
    collectWhitePopsicle(player, start) {
        start.disableBody(true, true);
        this.score += 5;
        this.scoreText.setText(this.score);
    }
    collectBluePopsicle(player, start) {
        start.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText(this.score);
    }
    cactusAttack(player, start) {
        if (this.score > 0) {
            this.score -= 5;
            this.scoreText.setText(this.score);
        }
        this.player.x = this.startplatform.x;
        this.player.y = this.startplatform.y;
    }
    cactusKill(player, start) {
        start.disableBody(true, true);
        this.score += 5;
        this.scoreText.setText(this.score);
    }
    finishLevel(player, start) {
        if (this.score < 50) this.info.setText("Collect more points");
        else if (this.score >= 50) {
            this.info.setText("You won!");
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
            setTimeout(()=>{
                this.scene.start("PlayGame"), this.score = 0;
            }, 60);
        }
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
    movePlatform(player, start) {
        start.body.velocity.x = Phaser.Math.Between(-150, 150);
        start.body.velocity.y = Phaser.Math.Between(-150, 150);
    }
    update() {
        if (this.cactusPlatformGroup.x > game.config.width || this.cactusPlatformGroup.x < 0) this.cactusPlatformGroup.x = game.config.width / 2;
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
        if (this.cursors.left.isDown) {
            this.shootLeft();
            this.player.anims.play("shootLeft", true);
        }
        if (this.cursors.right.isDown) {
            this.shootRight();
            this.player.anims.play("shootRight", true);
        }
        // When shift is pressed while shooting, player stays at one position
        if (this.cursors.left.isDown && this.cursors.shift.isDown) {
            this.player.body.velocity.y = 0;
            this.player.body.velocity.x = 0;
            this.shootLeft();
            this.player.anims.play("shootLeft", true);
        }
        if (this.cursors.right.isDown && this.cursors.shift.isDown) {
            this.player.body.velocity.y = 0;
            this.player.body.velocity.x = 0;
            this.shootRight();
            this.player.anims.play("shootRight", true);
        }
        // Based on this website: https://phasergames.com/phaser-3-physics-beginners/
        this.fireBalls.children.each((function(b) {
            if (b.active) {
                if (b.x < 0 || b.x > game.config.width) b.setActive(false);
            }
        }).bind(this));
        if (this.cursors.up.isDown && this.player.body.touching.down) this.player.body.velocity.y = -gameOptions.playerGravity / 1.6;
        if (this.cursors.space.isDown) this.player.body.velocity.y = -gameOptions.playerGravity / 1.6;
        if (this.player.y > game.config.height) {
            this.scene.start("PlayGame");
            this.score = 0;
        }
        if (this.player.x > game.config.width || this.player.x < 0) {
            this.player.x = this.startplatform.x;
            this.player.y = this.startplatform.y;
        }
        if (this.score >= 100) {
            this.info.setText = "YOU GOT OVER 100 POINTS!";
            setTimeout(()=>{
                this.scene.start("PlayGame"), this.score = 0;
            }, 10);
        }
    }
}

},{"./assets/cactusWithPlatform.png":"d2vs6","./styles.css":"lW6qc","@parcel/transformer-js/src/esmodule-helpers.js":"vqBy5"}],"d2vs6":[function(require,module,exports) {
module.exports = require("b5b1ad523e9f8222").getBundleURL("6fFUs") + "cactusWithPlatform.03666076.png" + "?" + Date.now();

},{"b5b1ad523e9f8222":"iKlFJ"}],"iKlFJ":[function(require,module,exports) {
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

},{}],"lW6qc":[function() {},{}],"vqBy5":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["b999R","g9e9u"], "g9e9u", "parcelRequirecd09")

//# sourceMappingURL=game.c3fdd8eb.js.map
