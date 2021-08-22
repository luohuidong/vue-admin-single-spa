/* import-map-overrides@2.4.1 */
!function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,r)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function n(r,t){if(Array.isArray(r)){for(var n=0;n<r.length;n++)if(r[n]===t)return!0;return!1}if("string"==typeof r)return r.indexOf(t)>=0;throw Error("Can't call includes on ".concat(e(r)))}function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),n=t.exec(r);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}var a,i="import-map-override:",c="import-map-overrides-disabled",l="import-map-overrides-external-maps",s="data-is-importmap-override",u="import-map-overrides-domains",p="allowlist:",m="denylist:",d=document.querySelector('meta[name="importmap-type"]'),v=document.querySelector('meta[name="'.concat(u,'"]')),f={},g=d?d.getAttribute("content"):"importmap";if(v){var y=v.getAttribute("content");y||console.warn("Invalid ".concat(u," meta element - content required."));var h=function(e){return new RegExp(function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e).replace("\\*",".+")).test(window.location.hostname)};0===y.indexOf(p)?a=!y.slice(p.length).split(",").some(h):0===y.indexOf(m)?a=y.slice(m.length).split(",").some(h):console.log("Invalid ".concat(u," meta content attribute - must start with ").concat(p," or ").concat(m))}else a=!1;(function(){try{return localStorage.getItem("test"),!0}catch(e){return!1}})()||(console.warn("Disabling import-map-overrides, since local storage is not readable"),a=!0),a||function(){var e,t=!!d&&d.hasAttribute("server-cookie"),a=!!d&&d.hasAttribute("server-only");window.importMapOverrides={addOverride:function(e,r){/^\d+$/g.test(r)&&(r=u.getUrlFromPort(e,r));var n=i+e;return localStorage.setItem(n,r),t&&(document.cookie="".concat(n,"=").concat(r)),m(),u.getOverrideMap()},getOverrideMap:function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r={imports:{},scopes:{}},t=u.getDisabledOverrides(),n=function(n,o){!e&&t.indexOf(n)>=0||(r.imports[n]=o)},a=0;a<localStorage.length;a++){var c=localStorage.key(a);0===c.indexOf(i)&&n(c.slice(i.length),localStorage.getItem(c))}var l=o("imo",window.parent?window.parent.location.href:window.location.href);if(l){var s;try{s=JSON.parse(l)}catch(e){throw Error("Invalid importMap query param - text content must be json")}Object.keys(s.imports).forEach((function(e){n(e,s.imports[e])}))}return r},removeOverride:function(e){var r=i+e,n=null!==localStorage.getItem(r);return localStorage.removeItem(r),t&&(document.cookie="".concat(r,"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")),u.enableOverride(e),m(),n},resetOverrides:function(){return Object.keys(u.getOverrideMap(!0).imports).forEach((function(e){u.removeOverride(e)})),localStorage.removeItem(c),localStorage.removeItem(l),m(),u.getOverrideMap()},hasOverrides:function(){return Object.keys(u.getOverrideMap().imports).length>0},getUrlFromPort:function(e,r){var t=e.replace(/@/g,"").replace(/\//g,"-");return"//localhost:".concat(r,"/").concat(t,".js")},enableUI:function(){var e="import-map-overrides-full",r="show-when-local-storage",t=document.querySelector(e);t||((t=document.createElement(e)).setAttribute(r,"true"),document.body.appendChild(t));var n=t.getAttribute(r);n&&(localStorage.setItem(n,!0),t.renderWithPreact())},mergeImportMap:function(e,r){var t={imports:{},scopes:{}};for(var n in e.imports)t.imports[n]=e.imports[n];for(var o in r.imports)t.imports[o]=r.imports[o];for(var a in e.scopes)t.scopes[a]=e.scopes[a];for(var i in r.scopes)t.scopes[i]=r.scopes[i];return t},getDefaultMap:function(){return e||(e=Array.prototype.reduce.call(document.querySelectorAll('script[type="'.concat(g,'"], script[type="overridable-importmap"]')),(function(e,t){return t.hasAttribute(s)?e:(n=t.src?x(t.src):Promise.resolve(JSON.parse(t.textContent)),Promise.all([e,n]).then((function(e){var t=r(e,2),n=t[0],o=t[1];return u.mergeImportMap(n,o)})));var n}),Promise.resolve({imports:{},scopes:{}})))},getCurrentPageMap:function(){return Promise.all([u.getDefaultMap(),u.getExternalOverrideMap(u.getCurrentPageExternalOverrides())]).then((function(e){var t=r(e,2),n=t[0],o=t[1];return u.mergeImportMap(u.mergeImportMap(n,o),h)}))},getCurrentPageExternalOverrides:function(){var e=[];return document.querySelectorAll("[".concat(s,']:not([id="import-map-overrides"])')).forEach((function(r){e.push(r.src)})),e},getNextPageMap:function(){return Promise.all([u.getDefaultMap(),u.getExternalOverrideMap()]).then((function(e){var t=r(e,2),n=t[0],o=t[1];return u.mergeImportMap(u.mergeImportMap(n,o),u.getOverrideMap())}))},disableOverride:function(e){var r=u.getDisabledOverrides();return!n(r,e)&&(localStorage.setItem(c,JSON.stringify(r.concat(e))),m(),!0)},enableOverride:function(e){var r=u.getDisabledOverrides(),t=r.indexOf(e);return t>=0&&(r.splice(t,1),localStorage.setItem(c,JSON.stringify(r)),m(),!0)},getDisabledOverrides:function(){var e=localStorage.getItem(c);return e?JSON.parse(e):[]},isDisabled:function(e){return n(u.getDisabledOverrides(),e)},getExternalOverrides:function(){var e=localStorage.getItem(l);return e?JSON.parse(e).sort():[]},addExternalOverride:function(e){e=new URL(e,document.baseURI).href;var r=u.getExternalOverrides();return!n(r,e)&&(localStorage.setItem(l,JSON.stringify(r.concat(e))),m(),!0)},removeExternalOverride:function(e){var r=u.getExternalOverrides();return!!n(r,e)&&(localStorage.setItem(l,JSON.stringify(r.filter((function(r){return r!==e})))),m(),!0)},getExternalOverrideMap:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.getExternalOverrides()).reduce((function(e,t){var n=f[t]||(f[t]=x(t));return Promise.all([e,n]).then((function(e){var t=r(e,2),n=t[0],o=t[1];return u.mergeImportMap(n,o)}))}),Promise.resolve({imports:{},scopes:{}}))},isExternalMapValid:function(e){return(f[e]||(f[e]=x(e))).then((function(){return n(u.invalidExternalMaps,e)}))},invalidExternalMaps:[]};var u=window.importMapOverrides,p=!0;try{CustomEvent?new CustomEvent("a"):p=!1}catch(e){p=!1}function m(){v("change")}function v(e){setTimeout((function(){var r="import-map-overrides:".concat(e),t=p?new CustomEvent(r):document.createEvent("CustomEvent");p||t.initCustomEvent(r,!0,!0,null),window.dispatchEvent(t)}))}var y,h=u.getOverrideMap(),O=u.getExternalOverrides();if(!a){var b=document.querySelector('script[type="overridable-importmap"]');if(!(y=b)){var w=document.querySelectorAll('script[type="'.concat(g,'"]'));y=w?w[w.length-1]:null}if(b){if(b.src)throw Error('import-map-overrides: external import maps with type="overridable-importmap" are not supported');var E;try{E=JSON.parse(b.textContent)}catch(e){throw Error('Invalid <script type="overridable-importmap"> - text content must be json')}y=S(u.mergeImportMap(E,h),"import-map-overrides",y),M()}else M(),Object.keys(h.imports).length>0&&(y=S(h,"import-map-overrides",y))}function S(e,r,t){var n=document.createElement("script");return n.type=g,n.id=r,n.setAttribute(s,""),"string"==typeof e?n.src=e:n.textContent=JSON.stringify(e,null,2),t?t.insertAdjacentElement("afterend",n):document.head.appendChild(n),n}function x(e){return fetch(e).then((function(e){return e.ok?e.json().catch((function(r){return console.warn(Error("External override import map contained invalid json, at url ".concat(e.url,". ").concat(r))),u.invalidExternalMaps.push(e.url),{imports:{},scopes:{}}})):(console.warn(Error("Unable to download external override import map from url ".concat(e.url,". Server responded with status ").concat(e.status))),u.invalidExternalMaps.push(e.url),{imports:{},scopes:{}})}),(function(){return console.warn(Error("Unable to download external import map at url '".concat(e,"'"))),u.invalidExternalMaps.push(new URL(e,document.baseURI).href),{imports:{},scopes:{}}}))}function M(){O.length>0&&O.forEach((function(e,r){y=S(e,"import-map-overrides-external-".concat(r))}))}v("init")}()}();
//# sourceMappingURL=import-map-overrides-api.js.map
