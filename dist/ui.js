!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([,,function(n,e,t){"use strict";t.r(e);t(3);const o={randomType:"name",eng:!0};parent.postMessage({pluginMessage:{range:0,randomType:o.randomType,lang:o.eng?"en":"ru"}},"*");const r=document.getElementById("text"),i=document.getElementById("paragraph"),a=document.getElementById("dot"),s=document.getElementById("comma"),c=document.getElementById("semicolon");function l(n){parent.postMessage({pluginMessage:{mode:"source",separator:n,content:r.value}},"*")}i.onclick=()=>l("s*\ns*"),a.onclick=()=>l("s*\\.s*"),s.onclick=()=>l("s*,s*"),c.onclick=()=>l("s*;s*");const u=document.getElementById("name"),p=document.getElementById("phone"),d=document.getElementById("name-label"),f=document.getElementById("phone-label"),g=document.getElementById("range"),m=document.getElementById("range_output");function h(n){g.value="0",o.randomType=n,parent.postMessage({pluginMessage:{randomType:o.randomType,lang:o.eng?"en":"ru"}},"*")}u.onclick=()=>h("name"),p.onclick=()=>h("phone"),g.onclick=()=>(parent.postMessage({pluginMessage:{range:g.value,randomType:o.randomType,lang:o.eng?"en":"ru"}},"*"),g.value="0",void(m.value="0"));const b=document.getElementById("title-first"),v=document.getElementById("title-second"),x=document.getElementById("lang"),y=document.getElementById("how-it-works"),w=document.getElementById("support");x.onclick=()=>(o.eng=!o.eng,parent.postMessage({pluginMessage:{lang:o.eng?"en":"ru"}},"*"),b.innerText=o.eng?_[0]:_[1],r.placeholder=o.eng?k[0]:k[1],i.innerHTML=o.eng?T[0]:T[1],s.innerHTML=o.eng?E[0]:E[1],a.innerHTML=o.eng?I[0]:I[1],c.innerHTML=o.eng?M[0]:M[1],v.innerText=o.eng?B[0]:B[1],d.innerText=o.eng?j[0]:j[1],f.innerText=o.eng?L[0]:L[1],x.innerText=o.eng?S[0]:S[1],y.innerText=o.eng?U[0]:U[1],y.href=o.eng?O[0]:O[1],void(w.innerText=o.eng?R[0]:R[1]));const _=["Your Content","Ваш контент"],k=["Source text for division by rule","Исходный текст для нарезки по правилу"],T=["Divide the text into paragraphs","Разделить текст после абзаца"],E=["After the comma","Запятой"],I=["Dot","Точки"],M=["Semicolon","Точки с запятой"],B=["Сreate fragments with random","Создать фрагменты со случайными"],j=["Names","Именами"],L=["Phone Numbers","Номерами телефонов"],S=["На русском","in English"],U=["How it Works","Помощь"],O=["https://www.figma.com/community/plugin/903936058293238810","https://t.me/pluginsforfigma"],R=["Support or share ideas","Поддержка и обратная связь"]},function(n,e,t){var o=t(4);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(e=t(5)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap);"]),e.push([n.i,':root {\n  --color-accent: #FF1A1A;\n  --color-optional: #126ba7;\n\n  --color-bg: #fff;\n  --color-pad-hard: #333;\n  --color-pad-soft: #e5e5e5;\n\n  --color-text-main: #333;\n  --color-text-invert: #fff;\n  --color-text-optional: #b6b6b6;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  background-color: var(--color-bg);\n  color: var(--color-text-main);\n  height: 100%;\n  overflow: hidden;\n  width: 100%;\n}\n\nbody,\nbutton,\ntextarea {\n  font-family: "Inter", sans-serif;\n  font-weight: 400;\n}\n\nbutton,\nh3,\np,\na {\n  user-select: none;\n}\n\nh3,\np {\n  font-size: 11px;\n}\n\nh3 {\n  font-weight: 600;\n}\n\nsmall {\n  font-size: 10px;\n  color: var(--color-text-optional);\n}\n\na {\n  color: var(--color-text-main);\n  text-decoration: none;\n}\n\nbutton {\n  appearance: none;\n  background-color: transparent;\n  border: 1px solid var(--color-pad-hard);\n  border-radius: 6px;\n  color: var(--color-text-main);\n  font-size: 11px;\n  font-weight: 400;\n  height: 30px;\n  padding: 0px 15px;\n}\n\nbutton:active {\n  box-shadow: inset 0 0 0 1px var(--color-accent);\n  border-color: var(--color-accent);\n}\n\na:focus,\nbutton:focus,\ntextarea:focus {\n  outline: none;\n}\n\na:hover,\nbutton:hover,\nlabel:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: var(--color-pad-soft);\n  border: none;\n  height: 1px;\n  width: 100%;\n}\n\ntextarea {\n  background-color: var(--color-bg);\n  border-color: var(--color-pad-soft);\n  border-radius: 2px;\n  color: var(--color-text-main);\n  font-size: 11px;\n  height: 72px;\n  padding: 6px 8px;\n  resize: none;\n  transition: all 150ms ease-out;\n}\n\ntextarea::placeholder {\n  color: var(--color-text-optional);\n  font-size: 11px;\n}\n\ntextarea:focus,\ntextarea:hover {\n  border-color: var(--color-accent);\n  box-shadow: inset 0 0 0 1px var(--color-accent);\n  transition: all 150ms ease-in;\n}\n\ninput[type="radio"] {\n\tdisplay: none;\n}\n\ninput[type="range"] {\n  -webkit-appearance: none;\n  vertical-align: middle;\n  outline: none;\n  border: none;\n  padding: 0;\n  background: none;\n  width: 100%;\n}\n\ninput[type="range"]:hover {\n  cursor: grab;\n}\n\ninput[type="range"]::-webkit-slider-runnable-track {\n  background-color: var(--color-pad-soft);\n  border: 6px solid var(--color-bg);\n  height: 16px;\n  border-radius: 8px;\n}\n\ninput[type="range"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border-radius: 100%;\n  background-color: var(--color-pad-hard);\n  height: 8px;\n  width: 8px;\n  margin-top: -2px;\n  transition: all 150ms ease-out;\n}\n\ninput[type="range"]:hover::-webkit-slider-thumb {\n  background-color: var(--color-accent);\n  transition: all 150ms ease-in;\n}\n\noutput {\n  font-size: 12px;\n}\n\ninput[type="range"]:active::-webkit-slider-thumb {\n  outline: none;\n}\n\ninput[type="radio"]:checked + .plugin__toggle,\ninput[type="radio"]:hover + .plugin__toggle {\n  background-color: var(--color-pad-soft);\n  transition: all 150ms ease-in;\n}\n\ninput[type="radio"]:active + .plugin__toggle {\n  box-shadow: inset 0 0 0 2px var(--color-accent);\n  transition: all 150ms ease-in;\n}\n\n.plugin {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.plugin__source-text,\n.plugin__random-generation {\n  display: flex;\n  flex-direction: column;\n  margin: 16px;\n}\n\n.plugin__caption p:last-child {\n  margin: 0;\n}\n\n.plugin__title {\n  margin: 0 0 8px 0;\n}\n\n.plugin__textbox {\n  margin: 0 0 16px 0;\n}\n\n.plugin__button-paragraph {\n  margin: 0 0 8px 0;\n}\n\n.plugin__buttons-line {\n  display: flex;\n  justify-content: space-between;\n}\n\n.plugin__range-container {\n  display: flex;\n  align-items: center;\n  height: 24px;\n}\n\n.plugin__range-container input {\n  margin: 0 8px 0 0;\n}\n\n.plugin__range-container output {\n  width: 24px;\n}\n\n.plugin__switcher {\n  display: flex;\n  margin: 0 0 16px 0;\n}\n\n.plugin__toggle {\n  height: 30px;\n  padding: 8px 15px;\n  border-radius: 2px;\n  margin: 0 2px 0 0;\n  transition: all 150ms ease-out;\n}\n\n.plugin__info {\n  margin: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.plugin__info small {\n  margin: 0 16px 0 0;\n}\n\n.plugin__info small:last-child {\n  margin: 0;\n}\n\n.effect-in {\n  animation: effect-in 300ms;\n}\n\n@keyframes effect-in {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}',""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(n,e){return e?e.querySelector(n):document.querySelector(n)},c=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=s.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),l=null,u=0,p=[],d=t(7);function f(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(x(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(x(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function g(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function m(n,e){var t=c(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=p[p.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),p.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(n.insertAt.before,t);t.insertBefore(e,r)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=p.indexOf(n);e>=0&&p.splice(e,1)}function b(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return t.nc}();o&&(n.attrs.nonce=o)}return v(e,n.attrs),m(n,e),e}function v(n,e){Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])}))}function x(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=u++;t=l||(l=b(e)),o=_.bind(null,t,a,!1),r=_.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(e,n.attrs),m(n,e),e}(e),o=T.bind(null,t,e),r=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(e),o=k.bind(null,t),r=function(){h(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=g(n,e);return f(t,e),function(n){for(var o=[],r=0;r<t.length;r++){var a=t[r];(s=i[a.id]).refs--,o.push(s)}n&&f(g(n,e),e);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,w=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function _(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function k(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function T(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=d(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(n,e){var r,i=e.trim().replace(/^"(.*)"$/,(function(n,e){return e})).replace(/^'(.*)'$/,(function(n,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}}]);