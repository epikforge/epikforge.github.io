!function l(r,i,n){function c(o,t){if(!i[o]){if(!r[o]){var e="function"==typeof require&&require;if(!t&&e)return e(o,!0);if(s)return s(o,!0);throw(e=new Error("Cannot find module '"+o+"'")).code="MODULE_NOT_FOUND",e}e=i[o]={exports:{}},r[o][0].call(e.exports,function(t){return c(r[o][1][t]||t)},e,e.exports,l,r,i,n)}return i[o].exports}for(var s="function"==typeof require&&require,t=0;t<n.length;t++)c(n[t]);return c}({1:[function(t,o,e){!function(){"use strict";function t(){var t,l,c,s,e,o,a=window,f=document;function p(t,o){this.scrollLeft=t,this.scrollTop=o}function r(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function i(t,o){return"Y"===o?t.clientHeight+e<t.scrollHeight:"X"===o?t.clientWidth+e<t.scrollWidth:void 0}function n(t,o){o=a.getComputedStyle(t,null)["overflow"+o];return"auto"===o||"scroll"===o}function u(t){for(;t!==f.body&&!1===(e=void 0,e=i(o=t,"Y")&&n(o,"Y"),o=i(o,"X")&&n(o,"X"),e||o);)t=t.parentNode||t.host;var o,e;return t}function d(t){var o,e=(s()-t.startTime)/l;o=e=1<e?1:e,e=.5*(1-Math.cos(Math.PI*o)),o=t.startX+(t.x-t.startX)*e,e=t.startY+(t.y-t.startY)*e,t.method.call(t.scrollable,o,e),o===t.x&&e===t.y||a.requestAnimationFrame(d.bind(a,t))}function h(t,o,e){var l,r,i,n=s(),t=t===f.body?(r=(l=a).scrollX||a.pageXOffset,i=a.scrollY||a.pageYOffset,c.scroll):(r=(l=t).scrollLeft,i=t.scrollTop,p);d({scrollable:l,method:t,startTime:n,startX:r,startY:i,x:o,y:e})}"scrollBehavior"in f.documentElement.style&&!0!==a.__forceSmoothScrollPolyfill__||(t=a.HTMLElement||a.Element,l=468,c={scroll:a.scroll||a.scrollTo,scrollBy:a.scrollBy,elementScroll:t.prototype.scroll||p,scrollIntoView:t.prototype.scrollIntoView},s=a.performance&&a.performance.now?a.performance.now.bind(a.performance):Date.now,o=a.navigator.userAgent,e=new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0,a.scroll=a.scrollTo=function(){void 0!==arguments[0]&&(!0!==r(arguments[0])?h.call(a,f.body,void 0!==arguments[0].left?~~arguments[0].left:a.scrollX||a.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:a.scrollY||a.pageYOffset):c.scroll.call(a,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:a.scrollX||a.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:a.scrollY||a.pageYOffset))},a.scrollBy=function(){void 0!==arguments[0]&&(r(arguments[0])?c.scrollBy.call(a,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(a,f.body,~~arguments[0].left+(a.scrollX||a.pageXOffset),~~arguments[0].top+(a.scrollY||a.pageYOffset)))},t.prototype.scroll=t.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==r(arguments[0])){var t=arguments[0].left,o=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===o?this.scrollTop:~~o)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");c.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},t.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==r(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):c.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},t.prototype.scrollIntoView=function(){var t,o,e;!0!==r(arguments[0])?(o=(t=u(this)).getBoundingClientRect(),e=this.getBoundingClientRect(),t!==f.body?(h.call(this,t,t.scrollLeft+e.left-o.left,t.scrollTop+e.top-o.top),"fixed"!==a.getComputedStyle(t).position&&a.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):a.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):c.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])})}"object"==typeof e&&void 0!==o?o.exports={polyfill:t}:t()}()},{}],2:[function(t,o,e){const l=new URLSearchParams(window.location.search);let r=document.querySelector('input[name="m"]');var i=l.get("m");r&&i&&(r.value=i),document.querySelectorAll("input[data-city-to]").forEach(r=>{var e,l,i;r.addEventListener("input",(e=t=>{let o=r.getAttribute("data-country");var e=r.getAttribute("data-city-to");let l=document.querySelector('input[name="'+e+'"]');null===o&&(o="hu");e="https://api.zippopotam.us/"+o+"/"+r.value;fetch(e).then(function(t){return t.json()}).then(function(t){t.places&&0<t.places.length&&(l.value=t.places[0]["place name"])})},i=0,function(){var t=this,o=arguments;clearTimeout(i),i=setTimeout(function(){e.apply(t,o)},l||0)}),l=500)}),t("smoothscroll-polyfill").polyfill(),document.querySelectorAll("a").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=e.getAttribute("href");if(o.startsWith("#")){let t=document.querySelector(o);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}else"_blank"!==e.getAttribute("target")?window.location.href=o:window.open(o,"_blank")})})},{"smoothscroll-polyfill":1}]},{},[2]);