// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"modules/gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gallery = gallery;

function gallery(data, parent) {
  data.forEach(function (d) {
    var t = createElement("img");
    t.src = "imgs/" + d.i;
    parent.appendChild(t);
  });
}

function createElement(type) {
  return document.createElement("img");
}
},{}],"modules/portfolio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log(init);
  document.querySelector("html").classList.add("noscroll");
  document.querySelector("#welcometxt").classList.add("fade-in");
  document.querySelector(".welcomename").classList.add("fade-in-slow");
  document.querySelector("#welcomescreen > div > p").classList.add("animated", "fadeIn");
  document.querySelector("#welcomescreen > div > p").classList.remove("animated", "fadeIn");
  document.querySelector(".continuetoportfolio").classList.add("animated", "flip");
  document.querySelector("#welcomescreen > div > p").addEventListener("click", removeWelcome);
}

function removeWelcome() {
  document.querySelector(".continuetoportfolio").classList.remove("animated", "flip");
  document.querySelector(".continuetoportfolio").classList.add("animated", "flipOutY");
  document.querySelector(".hero").classList.add("fade-out");
  setTimeout(removeWelcomeScreen, 980);
}

function removeWelcomeScreen() {
  document.querySelector("#welcomescreen").classList.add("hide");
  document.querySelector(".hero").style.zIndex = "-8";
  document.querySelector("html").classList.remove("noscroll");
  skewRotate();
}

function skewRotate() {
  var overlay = document.querySelector("#phoneoverlay");
  var iphone = document.querySelector("body > main > section.section-1 > div:nth-child(4) > div.col-7.phone-img > img");
  iphone.classList.add("skew");
  overlay.classList.add("skew");
}
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _gallery = require("./modules/gallery");

var _portfolio = require("./modules/portfolio");

"use strict";
/* const data = [
  {
    i: ""
  }
]; */

/** burgermenu **/


var toggler = document.querySelector(".menu__toggler");
var menu = document.querySelector(".mobile-menu-dropdown");
var atags = document.querySelector(".atags-mobile-menu");
var mobilelogo = document.querySelector(".mobile-logo");
var body = document.querySelector("body");
var mAtags = document.querySelectorAll(".atags-mobile-menu > li > a");
toggler.addEventListener("click", function () {
  toggler.classList.toggle("active");
  atags.classList.toggle("fade-in-left");
  mobilelogo.classList.toggle("rotateAnimation");
  menu.classList.toggle("active");
});
mAtags.forEach(function (a) {
  a.addEventListener("click", function () {
    atags.classList.toggle("fade-in-left");
    toggler.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();
  a = s.createElement(o), m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");

ga("create", "UA-46156385-1", "cssscript.com");
ga("send", "pageview");
/** portfolio script **/

var items = document.querySelectorAll(".item");
var detailItem = document.querySelector(".detail");
var detailScene = document.querySelector(".scene.-detail");
var titel = document.querySelector(".title");
var tekst = document.querySelector(".description");
var clickLink = document.querySelector(".description2");
var link = document.querySelector("#section-box-grid > div > div.scene.-detail > div > div > a");
detailScene.style.display = "none";
items.forEach(function (item) {
  item.addEventListener("click", function () {
    var itemImage = item.querySelector("img");
    detailItem.setAttribute("data-image", item.getAttribute("data-key"));
    console.log(detailItem);

    if (detailItem.dataset.image == "owl") {
      console.log("animation");
      titel.textContent = "ANIMATION";
      tekst.textContent = "This project was an assignment from the Danish Musuem of Science & Technology. They wanted an intuitive infographic solution, that would enlighten the user about the impacts of the invention of the light bulb";
      link.href = "https://lisabianca.dk/kea/11-frontend/light_bulb/";
    }

    if (detailItem.dataset.image == "deer") {
      console.log("koga");
      titel.textContent = "KOGA";
      tekst.textContent = "Koga is a Dutch bicycle manufacturer based in Heerenveen, Netherlands. The company is well known for its long time partnership with Japanese frame manufacturer Miyata, producing bicycles and sponsoring racing teams under the brand name Koga Miyata.";
      link.href = "http://www.mostvalue.dk/Koga/";
    }

    if (detailItem.dataset.image == "hipster") {
      console.log("kiteai");
      titel.textContent = "KITEAI";
      tekst.textContent = "KiteAI is a company that gathers information leads for big companys so their sales team doesn't have to. This way, the company can focus on selling their product, instead of harvesting sales leads. They needed a simple onepager to visualize their identity.";
      link.href = "http://www.cauliflower.dk/kea/3-semester/afleveringer/wiseflow/KiteAI-Code/";
    }

    if (detailItem.dataset.image == "ram") {
      console.log("luibh");
      titel.textContent = "LUIBH";
      tekst.textContent = "Luibh skincare is one of the most advanced websites I have build. Luibh is naturistic skincare company based in Ireland. Their mission is to stand up to the big cosmetics companies, all products are naturally made out of herbs, with no added chemicals or parabenes. (still in progress)";
      link.href = "https://drive.google.com/file/d/1W1OqP20QBZAcKwgc0GJwAGgBpHjfuuMM/view?usp=sharing";
    }

    if (detailItem.dataset.image == "dog") {
      console.log("statumanu");
      titel.textContent = "STATUMANU";
      tekst.textContent = "Statumanu is developing Vessle track, for the healthcare industry. They wanted an application that could provide information about ICP, Internal Cranium Pressure, in a simple visualization for doctors, and nurses. I decided to make a dashboard that would contain all the information with simple navigation, this is made in colaboration with bootstrap & Creative Tim";
      link.href = "http://www.cauliflower.dk/kea/3-semester/afleveringer/wiseflow/black-dashboard-master/examples/dashboard.html";
    }

    if (detailItem.dataset.image == "ram-side") {
      console.log("euroman");
      titel.textContent = "EUROMAN";
      tekst.textContent = "Euroman did a commercial for their product and asked if I could provide with a music production that would enhance and support the digital content shown in a 2-3 min videographic. This is what we came up with";
      link.href = "https://www.youtube.com/watch?v=ot845DQy6gM&feature=youtu.be&fbclid=IwAR35doR1qF-WFRwyWgU-xKfbhnesXOnCVDmToI40nrzreYDxAujDGy7l6Pc";
    }

    detailItem.querySelector("img").setAttribute("src", itemImage.getAttribute("src"));
    detailScene.style.display = "block";
    detailItem.classList.add("scene");
    item.style.opacity = 0;
    body.classList.add("noscroll");
    var firstRect = itemImage.getBoundingClientRect();
    var lastRect = detailItem.getBoundingClientRect();
    detailItem.animate([{
      transform: "\n          translateX(".concat(firstRect.left - lastRect.left, "px)\n          translateY(").concat(firstRect.top - lastRect.top, "px)\n          scale(").concat(firstRect.width / lastRect.width, ")\n        ")
    }, {
      transform: "\n          translateX(0)\n          translateY(0)\n          scale(1)\n         "
    }], {
      duration: 600,
      easing: "cubic-bezier(0.2, 0, 0.2, 1)"
    });
  });
});
detailItem.addEventListener("click", function () {
  var itemImage = document.querySelector("[data-key=\"".concat(detailItem.getAttribute("data-image"), "\"]"));
  var itemImageRect = itemImage.getBoundingClientRect();
  var detailItemRect = detailItem.getBoundingClientRect();
  detailScene.style.display = "none";
  detailItem.classList.remove("scene");
  itemImage.style.opacity = 1;
  body.classList.remove("noscroll");
  itemImage.animate([{
    zIndex: 2,
    transform: "\n          translateX(".concat(detailItemRect.left - itemImageRect.left, "px)\n          translateY(").concat(detailItemRect.top - itemImageRect.top, "px)\n  scale(").concat(detailItemRect.width / itemImageRect.width, ")\n        ")
  }, {
    zIndex: 2,
    transform: "\n          translateX(0)\n          translateY(0)\n          scale(1)\n         "
  }], {
    duration: 600,
    easing: "cubic-bezier(0.2, 0, 0.2, 1)"
  });
});
},{"./modules/gallery":"modules/gallery.js","./modules/portfolio":"modules/portfolio.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51666" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map