/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/1.png */ "./src/images/1.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./images/2.png */ "./src/images/2.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ":root {\n  --color-accent: #FF1A1A;\n  --color-optional: #126ba7;\n\n  --color-bg: #fff;\n  --color-pad-hard: #333;\n  --color-pad-soft: #e5e5e5;\n\n  --color-text-main: #333;\n  --color-text-invert: #fff;\n  --color-text-optional: #b6b6b6;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  background-color: var(--color-bg);\n  color: var(--color-text-main);\n  height: 100%;\n  overflow: hidden;\n  width: 100%;\n}\n\nbody,\nbutton,\ntextarea {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n}\n\nbutton,\nh3,\np,\na,\nsmall {\n  user-select: none;\n}\n\nh3,\np {\n  font-size: 11px;\n}\n\nh3 {\n  font-weight: 600;\n  height: 16px;\n}\n\nsmall {\n  font-size: 10px;\n}\n\na {\n  color: var(--color-text-main);\n  text-decoration: none;\n}\n\nbutton {\n  appearance: none;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-pad-hard);\n  border-radius: 6px;\n  color: var(--color-text-main);\n  font-size: 11px;\n  font-weight: 400;\n  flex-grow: 1;\n  height: 30px;\n  padding: 0px 8px;\n  display: flex;\n  place-content: center;\n  place-items: center;\n}\n\nbutton:active {\n  box-shadow: inset 0 0 0 1px var(--color-accent);\n  border-color: var(--color-accent);\n}\n\na:focus,\nbutton:focus,\ntextarea:focus {\n  outline: none;\n}\n\na:hover,\nbutton:hover,\nlabel:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: var(--color-pad-soft);\n  border: none;\n  height: 1px;\n  width: 100%;\n}\n\ntextarea {\n  background-color: var(--color-bg);\n  border-color: var(--color-pad-soft);\n  border-radius: 2px;\n  color: var(--color-text-main);\n  font-size: 11px;\n  height: 72px;\n  padding: 6px 8px;\n  resize: none;\n  transition: all 150ms ease-out;\n}\n\ntextarea::placeholder {\n  color: var(--color-text-optional);\n  font-size: 11px;\n}\n\ntextarea:focus,\ntextarea:hover {\n  border-color: var(--color-accent);\n  box-shadow: inset 0 0 0 1px var(--color-accent);\n  transition: all 150ms ease-in;\n}\n\ninput[type=\"radio\"] {\n\tdisplay: none;\n}\n\ninput[type=\"range\"] {\n  -webkit-appearance: none;\n  vertical-align: middle;\n  outline: none;\n  border: none;\n  padding: 0;\n  background: none;\n  width: 100%;\n}\n\ninput[type=\"range\"]:hover {\n  cursor: grab;\n}\n\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n  background-color: var(--color-pad-soft);\n  border: 6px solid var(--color-bg);\n  height: 16px;\n  border-radius: 8px;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border-radius: 100%;\n  background-color: var(--color-pad-hard);\n  height: 8px;\n  width: 8px;\n  margin-top: -2px;\n  transition: all 150ms ease-out;\n}\n\ninput[type=\"range\"]:hover::-webkit-slider-thumb {\n  background-color: var(--color-accent);\n  transition: all 150ms ease-in;\n}\n\noutput {\n  font-size: 12px;\n}\n\ninput[type=\"range\"]:active::-webkit-slider-thumb {\n  outline: none;\n}\n\ninput[type=\"radio\"]:checked + .plugin__toggle,\ninput[type=\"radio\"]:hover + .plugin__toggle {\n  background-color: var(--color-pad-soft);\n  transition: all 150ms ease-in;\n}\n\ninput[type=\"radio\"]:active + .plugin__toggle {\n  box-shadow: inset 0 0 0 2px var(--color-accent);\n  transition: all 150ms ease-in;\n}\n\n.plugin {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.plugin__source-text,\n.plugin__random-generation {\n  display: flex;\n  flex-direction: column;\n  margin: 16px;\n}\n\n.plugin__caption p:last-child {\n  margin: 0;\n}\n\n.plugin__title {\n  margin: 0 0 8px 0;\n}\n\n.plugin__textbox {\n  margin: 0 0 16px 0;\n}\n\n.plugin__button-paragraph {\n  margin: 0 0 8px 0;\n}\n\n.plugin__buttons-line {\n  display: flex;\n  justify-content: space-between;\n}\n\n.plugin__buttons-line button {\n  margin: 0 8px 0 0;\n}\n\n.plugin__buttons-line button:last-child {\n  margin: 0;\n}\n\n.plugin__range-container {\n  display: flex;\n  align-items: center;\n  height: 24px;\n}\n\n.plugin__range-container input {\n  margin: 0 8px 0 0;\n}\n\n.plugin__range-container output {\n  width: 24px;\n}\n\n.plugin__switcher {\n  display: flex;\n  margin: 0 0 16px 0;\n}\n\n.plugin__toggle {\n  height: 30px;\n  padding: 8px 15px;\n  border-radius: 2px;\n  margin: 0 2px 0 0;\n  transition: all 150ms ease-out;\n}\n\n.plugin__info {\n  height: 16px;\n  margin: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.plugin__info small {\n  margin: 0 16px 0 0;\n}\n\n.plugin__info small:last-child {\n  margin: 0;\n}\n\n.plugin__lang {\n  display: flex;\n  margin: 0 16px 0 0;\n}\n\n.plugin__lang-toggle {\n  margin: 0 4px 0 0;\n}\n\n.plugin__lang-toggle:last-child {\n  margin: 0;\n}\n\ninput[type=\"radio\"] + .plugin__lang-toggle {\n  color: var(--color-text-main);\n  transition: all 150ms ease-out;\n}\n\ninput[type=\"radio\"]:hover + .plugin__lang-toggle {\n  color: var(--color-accent);\n  transition: all 150ms ease-in;\n}\n\ninput[type=\"radio\"]:checked + .plugin__lang-toggle {\n  color: var(--color-text-optional);\n  cursor: default;\n  transition: all 150ms ease-in;\n}\n\n.plugin__help {\n  background-color: var(--color-bg);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 100%;\n  transition: all 300ms ease-out;\n  width: 100%;\n}\n\n.plugin__help_active {\n  top: 0;\n  transition: all 350 ease-in;\n}\n\n.plugin__help-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  padding: 16px 16px 0 16px;\n}\n\n.plugin__help-content::-webkit-scrollbar {\n  display: none;\n}\n\n.plugin__help-section {\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 16px 0;\n}\n\n.plugin__help-text {\n  margin: 0 0 8px 0;\n}\n\n.plugin__help-pic {\n  height: 102px;\n  width: 272px;\n  border-radius: 8px;\n}\n\n.plugin__help-pic_1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.plugin__help-pic_2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.plugin__help-gradient {\n  content: \" \";\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  min-height: 24px;\n  background: linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);\n}\n\n.plugin__help-closer {\n  display: flex;\n  justify-content: stretch;\n  height: 62px;\n  padding: 16px;\n}\n\n/* effects  */\n.effect-in {\n  animation: effect-in 300ms;\n}\n\n.effect-lang-switch {\n  animation: effect-lang-switch 300ms;\n}\n\n@keyframes effect-in {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes effect-lang-switch {\n  0% {\n    transform: translateY(0);\n  }\n  30% {\n    transform: translateY(-8px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/images/1.png":
/*!**************************!*\
  !*** ./src/images/1.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/2.png":
/*!**************************!*\
  !*** ./src/images/2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/ui.css":
/*!********************!*\
  !*** ./src/ui.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.css */ "./src/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_0__);

// default init
const settings = { randomType: "name", lang: "en" };
// add ui in-effect
const plugin = document.getElementById("plugin");
plugin.classList.add("effect-in");
setTimeout(() => plugin.classList.remove("effect-in"), 300);
// default data for code
parent.postMessage({
    pluginMessage: {
        range: 0,
        randomType: settings.randomType,
        lang: settings.lang,
    },
}, "*");
// source text functional unit
const text = document.getElementById("text");
const paragraph = document.getElementById("paragraph");
const dot = document.getElementById("dot");
const comma = document.getElementById("comma");
const semicolon = document.getElementById("semicolon");
paragraph.onclick = () => action("s*\ns*");
dot.onclick = () => action("s*\\.s*");
comma.onclick = () => action("s*,s*");
semicolon.onclick = () => action("s*;s*");
function action(separator) {
    parent.postMessage({
        pluginMessage: {
            mode: "source",
            separator: separator,
            content: text.value,
        },
    }, "*");
}
// random functional unit
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const nameLabel = document.getElementById("name-label");
const phoneLabel = document.getElementById("phone-label");
const range = document.getElementById("range");
const output = document.getElementById("range_output");
name.onclick = () => randomTypeAction("name");
phone.onclick = () => randomTypeAction("phone");
range.onclick = () => randomRangeAction();
function randomRangeAction() {
    parent.postMessage({
        pluginMessage: {
            range: range.value,
            randomType: settings.randomType,
            lang: settings.lang,
        },
    }, "*");
    range.value = "0";
    output.value = "0";
}
function randomTypeAction(msg) {
    range.value = "0";
    settings.randomType = msg;
    parent.postMessage({
        pluginMessage: {
            randomType: settings.randomType,
            lang: settings.lang,
        },
    }, "*");
}
// language switch functional
const titleFirst = document.getElementById("title-first");
const titleSecond = document.getElementById("title-second");
const langEN = document.getElementById("en");
const langRU = document.getElementById("ru");
const langZH = document.getElementById("zh");
const howItWorks = document.getElementById("how-it-works");
const support = document.getElementById("support");
const helpText1 = document.getElementById("help-text-1");
const helpText2 = document.getElementById("help-text-2");
const helpText3 = document.getElementById("help-text-3");
const helpText4 = document.getElementById("help-text-4");
const helpText5 = document.getElementById("help-text-5");
const helpHead1 = document.getElementById("help-head-1");
const helpHead2 = document.getElementById("help-head-2");
langEN.onclick = () => langSwitcher("en");
langRU.onclick = () => langSwitcher("ru");
langZH.onclick = () => langSwitcher("zh_CN");
function langSwitcher(lang) {
    settings.lang = lang;
    plugin.classList.add("effect-lang-switch");
    setTimeout(() => plugin.classList.remove("effect-lang-switch"), 300);
    parent.postMessage({
        pluginMessage: {
            lang: settings.lang,
        },
    }, "*");
    if (lang === "ru") {
        titleFirst.innerText = "Создать из текста";
        text.placeholder = "Исходный текст для нарезки по правилу";
        paragraph.innerHTML = "Разделить текст после абзаца";
        comma.innerHTML = "Запятой";
        dot.innerHTML = "Точки";
        semicolon.innerHTML = "Точки с запятой";
        titleSecond.innerText = "Создать из случайных";
        nameLabel.innerText = "Имён";
        phoneLabel.innerText = "Телефонных номеров";
        howItWorks.innerText = "Помощь";
        support.innerText = "Поддержать автора";
        support.href = "https://www.tinkoff.ru/sl/3sbfX45dVWj";
        helpHead1.innerText = "Создать копии объекта";
        helpHead2.innerText = "Вставить копии в выбранный фрейм";
        helpText1.innerText = "Окно плагина всего лишь формирует текст — вы можете разделить свой текст по одному из правил или использовать генерируемые данные.";
        helpText2.innerText = "Результат будет зависеть от того, что выбрано в макете.";
        helpText3.innerText = "Если вы хотите создать копии объекта — выберите текстовый слой внутри него и примените одну из функций плагина.";
        helpText4.innerText = "Если вы хотите вставить готовые копии объекта в определённый фрейм, то выберите также фрейм для вставки.";
        helpText5.innerText = "Вы можете не выбирать объект для копирования и фрейм для вставки — в первом случае текст будет вставлен в макет в виде разделённых текстовых слоёв. Во втором — текст или копии объекта будут упакованы в специальный фрейм.";
    }
    else if (lang === "zh_CN") {
        titleFirst.innerText = "从文本创建";
        text.placeholder = "按规则切片的源文本";
        paragraph.innerHTML = "拆分段落后的文本";
        comma.innerHTML = "逗号";
        dot.innerHTML = "点";
        semicolon.innerHTML = "分号";
        titleSecond.innerText = "从随机创建";
        nameLabel.innerText = "名字'";
        phoneLabel.innerText = "电话号码";
        howItWorks.innerText = "救命！";
        support.innerText = "支持作者";
        support.href = "https://www.buymeacoffee.com/milsinery";
        helpHead1.innerText = "创建对象的副本";
        helpHead2.innerText = "将副本插入所选帧";
        helpText1.innerText = "插件窗口只生成文本—您可以根据其中一个规则拆分文本或使用生成的数据。";
        helpText2.innerText = "结果将取决于在布局中选择的内容。";
        helpText3.innerText = "如果要创建对象的副本，请选择其中的文本层并使用其中一个插件函数。";
        helpText4.innerText = "如果要在特定帧中插入对象的现成副本，请选择要插入的帧。";
        helpText5.innerText = "您可以选择不选择要复制和粘贴框架的对象-在第一种情况下，文本将以分隔文本图层的形式粘贴到布局中。 在第二种情况下，对象的文本或副本将被打包在一个特殊的框架中。";
    }
    else {
        titleFirst.innerText = "Create from text";
        text.placeholder = "Source text for division by rule";
        paragraph.innerHTML = "Divide the text into paragraphs";
        comma.innerHTML = "After the comma";
        dot.innerHTML = "Dot";
        semicolon.innerHTML = "Semicolon";
        titleSecond.innerText = "Сreate from random";
        nameLabel.innerText = "Names";
        phoneLabel.innerText = "Phone Numbers";
        howItWorks.innerText = "How it works";
        support.innerText = "Support the author";
        support.href = "https://www.buymeacoffee.com/milsinery";
        helpHead1.innerText = "Create copies of an object";
        helpHead2.innerText = "Insert copies into the selected frame";
        helpText1.innerText = "The plugin window only generates text — you can split your text according to one of the rules or use the generated data.";
        helpText2.innerText = "The result will depend on what is selected in the layout.";
        helpText3.innerText = "If you want to create copies of an object, select the text layer inside it and use one of the plugin functions.";
        helpText4.innerText = "If you want to insert ready-made copies of an object in a specific frame, select the frame to insert as well.";
        helpText5.innerText = "You can choose not to select the object you want to copy and frame for paste — in the first case the text will be pasted to the layout in the form of delimited text layers.";
    }
}
// help functional
const help = document.getElementById("help");
const closer = document.getElementById("closer");
howItWorks.onclick = () => {
    help.classList.add("plugin__help_active");
};
closer.onclick = () => {
    help.classList.remove("plugin__help_active");
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy8xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzLzIucG5nIiwid2VicGFjazovLy8uL3NyYy91aS5jc3M/M2I5NyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91aS50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9pbWFnZXMvMS5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi9pbWFnZXMvMi5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLWFjY2VudDogI0ZGMUExQTtcXG4gIC0tY29sb3Itb3B0aW9uYWw6ICMxMjZiYTc7XFxuXFxuICAtLWNvbG9yLWJnOiAjZmZmO1xcbiAgLS1jb2xvci1wYWQtaGFyZDogIzMzMztcXG4gIC0tY29sb3ItcGFkLXNvZnQ6ICNlNWU1ZTU7XFxuXFxuICAtLWNvbG9yLXRleHQtbWFpbjogIzMzMztcXG4gIC0tY29sb3ItdGV4dC1pbnZlcnQ6ICNmZmY7XFxuICAtLWNvbG9yLXRleHQtb3B0aW9uYWw6ICNiNmI2YjY7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tYWluKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSxcXG5idXR0b24sXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5idXR0b24sXFxuaDMsXFxucCxcXG5hLFxcbnNtYWxsIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5oMyxcXG5wIHtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogMTZweDtcXG59XFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1haW4pO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXBhZC1oYXJkKTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1haW4pO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tY29sb3ItYWNjZW50KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXG59XFxuXFxuYTpmb2N1cyxcXG5idXR0b246Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYTpob3ZlcixcXG5idXR0b246aG92ZXIsXFxubGFiZWw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ociB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYWQtc29mdCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXBhZC1zb2Z0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1haW4pO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgaGVpZ2h0OiA3MnB4O1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLW91dDtcXG59XFxuXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW9wdGlvbmFsKTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMsXFxudGV4dGFyZWE6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLWNvbG9yLWFjY2VudCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06aG92ZXIge1xcbiAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYWQtc29mdCk7XFxuICBib3JkZXI6IDZweCBzb2xpZCB2YXIoLS1jb2xvci1iZyk7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYWQtaGFyZCk7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOmhvdmVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW47XFxufVxcblxcbm91dHB1dCB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06YWN0aXZlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyAucGx1Z2luX190b2dnbGUsXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpob3ZlciArIC5wbHVnaW5fX3RvZ2dsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYWQtc29mdCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTphY3RpdmUgKyAucGx1Z2luX190b2dnbGUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHZhcigtLWNvbG9yLWFjY2VudCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLnBsdWdpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBsdWdpbl9fc291cmNlLXRleHQsXFxuLnBsdWdpbl9fcmFuZG9tLWdlbmVyYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE2cHg7XFxufVxcblxcbi5wbHVnaW5fX2NhcHRpb24gcDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnBsdWdpbl9fdGl0bGUge1xcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XFxufVxcblxcbi5wbHVnaW5fX3RleHRib3gge1xcbiAgbWFyZ2luOiAwIDAgMTZweCAwO1xcbn1cXG5cXG4ucGx1Z2luX19idXR0b24tcGFyYWdyYXBoIHtcXG4gIG1hcmdpbjogMCAwIDhweCAwO1xcbn1cXG5cXG4ucGx1Z2luX19idXR0b25zLWxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBsdWdpbl9fYnV0dG9ucy1saW5lIGJ1dHRvbiB7XFxuICBtYXJnaW46IDAgOHB4IDAgMDtcXG59XFxuXFxuLnBsdWdpbl9fYnV0dG9ucy1saW5lIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnBsdWdpbl9fcmFuZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4ucGx1Z2luX19yYW5nZS1jb250YWluZXIgaW5wdXQge1xcbiAgbWFyZ2luOiAwIDhweCAwIDA7XFxufVxcblxcbi5wbHVnaW5fX3JhbmdlLWNvbnRhaW5lciBvdXRwdXQge1xcbiAgd2lkdGg6IDI0cHg7XFxufVxcblxcbi5wbHVnaW5fX3N3aXRjaGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAgMCAxNnB4IDA7XFxufVxcblxcbi5wbHVnaW5fX3RvZ2dsZSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbjogMCAycHggMCAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4ucGx1Z2luX19pbmZvIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGx1Z2luX19pbmZvIHNtYWxsIHtcXG4gIG1hcmdpbjogMCAxNnB4IDAgMDtcXG59XFxuXFxuLnBsdWdpbl9faW5mbyBzbWFsbDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnBsdWdpbl9fbGFuZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwIDE2cHggMCAwO1xcbn1cXG5cXG4ucGx1Z2luX19sYW5nLXRvZ2dsZSB7XFxuICBtYXJnaW46IDAgNHB4IDAgMDtcXG59XFxuXFxuLnBsdWdpbl9fbGFuZy10b2dnbGU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0gKyAucGx1Z2luX19sYW5nLXRvZ2dsZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tYWluKTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpob3ZlciArIC5wbHVnaW5fX2xhbmctdG9nZ2xlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW47XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIC5wbHVnaW5fX2xhbmctdG9nZ2xlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW9wdGlvbmFsKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLW91dDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwX2FjdGl2ZSB7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzUwIGVhc2UtaW47XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMTZweCAxNnB4IDAgMTZweDtcXG59XFxuXFxuLnBsdWdpbl9faGVscC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMCAxNnB4IDA7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtdGV4dCB7XFxuICBtYXJnaW46IDAgMCA4cHggMDtcXG59XFxuXFxuLnBsdWdpbl9faGVscC1waWMge1xcbiAgaGVpZ2h0OiAxMDJweDtcXG4gIHdpZHRoOiAyNzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnBsdWdpbl9faGVscC1waWNfMSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwLXBpY18yIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtZ3JhZGllbnQge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtaW4taGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNGRkZGRkYgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtY2xvc2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBoZWlnaHQ6IDYycHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4vKiBlZmZlY3RzICAqL1xcbi5lZmZlY3QtaW4ge1xcbiAgYW5pbWF0aW9uOiBlZmZlY3QtaW4gMzAwbXM7XFxufVxcblxcbi5lZmZlY3QtbGFuZy1zd2l0Y2gge1xcbiAgYW5pbWF0aW9uOiBlZmZlY3QtbGFuZy1zd2l0Y2ggMzAwbXM7XFxufVxcblxcbkBrZXlmcmFtZXMgZWZmZWN0LWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZWZmZWN0LWxhbmctc3dpdGNoIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVJBQUFBQm1DQVlBQUFBREJzNTlBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBZ0FTVVJCVkhnQjdkMjdieFJYRk1meE0rWmxoNGRsQy9OTVFBb0NsQlFRM0pBaUVsSzZVQ0x4YUtpZzQ5K2dvWU1DS2lpZ2c0SWlCVldLZ05LNEFZR1VBcEFzSVNKakNMS3hNYll4MkpQN3UrdnJqQjNXaERPRHZjdCtQOUpvZDJhMHUzaG4rZTI1Wng2YlRVMU41UVlBRG0wR0FFNEVDQUEzQWdTQUd3RUN3STBBQWVCR2dBQndJMEFBdUJFZ0FOd0lFQUJ1QkFnQU53SUVnQnNCQXNDTkFBSGdSb0FBY0NOQUFMZ1JJQURjQ0JBQWJnUUlBRGNDQklBYkFRTEFqUUFCNEVhQUFIQWpRQUM0RVNBQTNBZ1FBRzRFQ0FBM0FnU0FHd0VDd0kwQUFlQkdnQUJ3VzJrVmUvUG1qWTJNak1UcDNidDNodVhYM3Q1dUhSMGR0bm56Wmx1OWVyVUJWY21tcHFaeXE4RDA5TFE5Zi83Y2hvYUdyS2VueDdxN3UyM1ZxbFdHNVRjNU9Xbmo0K054KzNSMmRzWWdXYkZpaFFGbFZSSWdDby8rL3Y3NFRiZHQyelkrbkEwcWhmelkySmp0MnJXTDdZVFNLZ21RZ1lHQmVLdndRT043K3ZScERBKzJGOG9xM1VRTkFSVDdIU3FMMFJ3VUhNUER3N0VTQWNvb0hTQXFpUmxUTnhkdHE0MGJOOXJvNktnQlpaUU9FRFhvMU9GSGMrbnE2aUpBVUZycEFKbVltQ0JBbXBCMjUycjRDWlRCZ1dRQTNBZ1FBRzRFQ0FDM3lnOWxCNXJXeUlobGZYMldEUTdxK0FTenQyOHRDNU9sU2N2V3JyV1ozbDdMZi9uRlFBVUN6R203ZDgreThYR3pOV3ZVWlk2M3VlNm5TY3ZHeHF6dHQ5OHNHeG95VUlFQU5aT1Rscy9NV0thZ1dFQ0hhbWNMRi9iM20zVjNXNnNqUU5EYVJrZXQ3ZGRmTFZNZ1BINWNxMEFtSm1LZ2FJcERtQ3l6bWUrL04vdmhoMzhmeDRHVEVRR0NscGJkdm0zMjhtVVl2NFRSL0ZkZi9hZmFpUE1oUkRTOG1kbSszYXlucDdhaWpkRy9FQ0JOUU5kVmVmSGlSZWpqdmJXWlVHYXZEWTA4WFRKaDVjclcySHozNzkrM0xWdTJWSDYrVlJiNkdiR1hvVERRcFBkVGt5NURFZDduWkM1VS92N2I4cSsvcnQzL1NJQzhmdjNhYnQyNkZZcWF4N1p1M1RvN2RPaVFIVGh3NEtQcnRPeTJRcTFnejU0OTl1alJvLys4eHZyMTYrMzQ4ZU8ybkFpUUJxZncwTm16TTRVUHRDN2FwQ09BZCt6WTBSSWhvdUM0ZnYxNi9NOVNTWWlFdlMxdHYvOGVHNkxaM2J1MUlVc1l1bVREdzdXaFM5amJrbW1QUzBlSDVhRXFrWGpLK213ek5kNWZaQWp6N05rek8zUG1URHhaVWNHZ2VmMzdMMTI2RklNd3JkdTllL2ZjdXRPblQ5dXBVNmRpVUZ5NWNpV3VVMENJYnUrRkNrZ1VNS0wxZXE3bHR1U2Z2cFUvL1dUWlgzOVpLOUszMS9zLy92aWt4N3dNNVhVeFBCSXQwNG1NMjFWV2YrSDBIK1hZc1dPVmhVamJuMy9HdmtiY3F4S3F1U2pQYStFaFlWMnNPaFFzN2UyMVNkS2VtUGdrOVNzUUJZQ0M0ZWJObTdaMTY5YTQ3RzRJS29XSndrT3VYcjA2dCs3OCtmTjIrZkxsK0RjbTU4NmRtMXN2cWRJNGN1UklYSDd4NGtWckJFcytrR3ZWOEJEUDM2NXFveDROYVQ2M1lqbmQxOWNYNTlQcmFtaWgrVmV2WHMyYlY3REp3NGNQNC95VEowL2l2RzQxcitVeU9EZ1k1L1U0MFdVaGl2TTZVVlB6ZXQwVUl0ZXVYWnQ3ZnE5YzFVV3FKaFFnbW5RK2w2b04zYVoxQ2dzRmpaWXBSSXE3Y3hlcFFGUWw5UGIyemdzQXphZDFxaDZLNnc0ZlBoeHY3OXk1TTdkTVlhbFEwYVF3YWxRTVlScGNXL2ltKzFBRkl2V1dmNm15ck5iZXpQT1MxOENhSFliRVp3dmhrZTduWWJpWTFWNm9ObWxaQ0k1TXdhTDVGQ0xTMlZuMzZkWGpXTXpDNjdDa2VRMVYwbU5Wc2FRaGpIb2tqV3JwQXlTVThkYXFWWWorOWsrMEpueGcxZS80a0xXcC9QNk1paC9lZ3djUHpsdTNmLy8rUmVmMzd0MGJwMlRuenAxeFNsUlZGTWZ4dWw1cjhmVjBpY3cwcjZyanhvMGJkdkxreWZKai85a1FpTUV4K3g3Rys5UFQvd1pMQ3FsQ0h5UUZpT2J6VFp2cVByMHFDZzFqTkttdm9WQzRjT0ZDdks4cVNzdlRjRXdWeWRteloyTkZvc3BFd1NFTGh6Q05hc2tENU4wbjlnQmEzYWJ3UVYzWVJCVlZKajFwbCtJWExvWEgwYU5IcTJrY0ZnOFdtLzJXbHhnZTRYM05OVHhKZTJPNnVtcFRhTEtxaHpXalkwRSs4cjZySWFxcUlnMUJSR0dnd0RoeDRrUWNrcWp2b1NtdGE1YkFXS2owTlZFZlBIaGcrL2J0TTN3KzJoT2pacXI2SVFvT1ZTVnFKSmJkQTlNczIwNDlFZjI5VmUxMXlMUW5JNTNyb241SzZMMlloZzdxTjRVcDA2ME9LRk5vS0N6Q3BBUE1abjcrMmZJZmYvemZyNk9nU0x0cWkzdFZpdXRTNVZGY3JpbjFUQlpLUTV2aVk1WVRQWkFtb0ovSGFNWnZwNm9zSEJxVlZxaEFjbFVYT29TOXNIcmVNRWJERncxWk5teXcvTHZ2N0ZOb205WGJidlhXTGZZWXFSY3N5NFVBUWN2UkNYSnp6ZExaV3pWTDFWRE5abzhKeWRQaDdLRm5vK0RJdi8xMi90QUhFUUdDMWxQY0M1T28zNkZLWThFcC9Ibm9lY1R3d0FjUklHZzl4VDB2SDFnOXQxdFhnZkxOTjRiNkNCQzBIbFVib2FkaDJtMzcvbjI4alpQMmRHa0t5K0lCWnFINWljVVJJR2hONlFRNmZyKzVGTTVKQnVCR2dBQndJMEFBdUpVT0VIN2hyRG5wL0pyMmRKbzY0RlE2UURhRWJyWis2UjNOaGQ4MFJoVXFDUkNkcHpHdDNXQm9DdHBXT2tHdDZrc0VvdldVRGhDZEtLUmZlaDhZR0RBMEI0V0hnbjkxdXJvVzRGUkpFMVhmWkJwVEswU29SQnFYdG8wdURhQlR6YWsrVUlYU3AvTW5xU3dlSFIyTkgwNk5yMm5TTlFaZERtQm9hQ2dPTlZVdGF2dXM0SGROVUlIS0FpVFJIaGtGaVNxU3lYU1JXaXdyWFE1QVYvdlN0QlJYTVVQcnFEeEFBTFFPRGlRRDRFYUFBSEFqUUFDNEVTQUEzQWdRQUc0RUNBQTNBZ1NBR3dFQ3dJMEFBZUJHZ0FCd0kwQUF1QkVnQU53SUVBQnVCQWdBTndJRWdCc0JBc0NOQUFIZ1JvQUFjQ05BQUxnUklBRGNDQkFBYmdRSUFEY0NCSUFiQVFMQWpRQUI0RWFBQUhBalFBQzRFU0FBM0FnUUFHNEVDQUMzZndBVGtobXBSOW03NkFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVJBQUFBQm1DQVlBQUFBREJzNTlBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBZ0JTVVJCVkhnQjdkMUxiRlJWSE1meC94MEt0Z3BJQ2NwREc0MmtKQnBqcENzWFRVaGNtTWdTZVhRUE96YnMyTGt3YkVoY3dBSldzSUFWRU1MQ0JCYkdoUkFYZGdQQlJCTm9Zb29RWGlMbFVhVzBaYTduZDZabnVCMzZvT2RPSDdmMyswbHVadTY5ZGxwUG1OK2M5eVREdzhPcEFVQ0VpZ0ZBSkFJRVFEUUNCRUEwQWdSQU5BSUVRRFFDQkVBMEFnUkFOQUlFUURRQ0JFQTBBZ1JBTkFJRVFEUUNCRUEwQWdSQU5BSUVRRFFDQkVDMEZtdUM0ZUZodTNuenBnME5EZG1MRnk4TVUxdTVjcVZ0MkxEQmxpMWJaa0NSSlhrM0ZGSjQ5UFgxMlpvMWEveXhaTWtTdytRVXNBOGZQclQ3OSs5YloyY25JWUpDeXgwZy9mMzl0bno1Y2g4ZWVIMzM3dDJ6d2NGQjI3aHhvd0ZGbGJzUDVNbVRKOWJlM202WUdRV3VtbnhBa1RXbEU1Vm15OHlwek9ndlF0RXhDZ01nR2dFQ0lCb0JBaUFhQVFJZ1dsTW1rc0g4M0k1SGp4NzU1NW9veHJBMnlvQUFhWUlIRHg3VXcwUDB2RktwMk9yVnF3MVl6R1k5UUZxNnV5MjVkY3VLS0gzL2ZSdjk1WmRwL3p2TmhXbWtFQ0ZBc05qTmVoOUlZc1ZWNUw4ZG1BdXpYZ01aZVkxUDhLSmJ0V3FWN3dQSlVqOElzTmpSQjlJRWFxcFVxOVY2VTBhQlF2TUZaVUNBTkVsWWpReVVDZk5BQUVRalFBQkVJMEFBUkNOQUFFVExIU0RzYXhHSE1zTmlrRHRBV2x0Yi9WUnV6TXpBd0FCelJWQjR1UU9rbzZQREI0Z09QbFducHpMU2ZxaDM3OTcxTzdNRFJaWjdVMlhSenV5M2I5K2VjRTBJeHRNaXU3YTJOaCs4N01pT29tdEtnQUFvSjBaaEFFUmpLanNRUEg1c1NXK3ZKYTUveXJYTHpaNC90OFFkRmc1ZGUrc3RxM1oxV2ZyMTF3WnFJRUJkNWNvVlMvNzd6K3lOTjh6VVArVWVVejBQaDY0TkRscmxwNThzYVZoOVhWYlVRQUFaR3JLMFdyVkVRZEZBbllTdjdBM3o1NTlhaG0xbFI0Q2czTnpJWWVXSEh5eFJJUFQxMVdvZ3o1NzVRTkhobXpCSll0VlBQakg3L1BPWFA4ZVhxWGtFQ0VvdHVYaFJtOXBxZk4zc3pUZGZxVzM0Y3hjaWF0NVUzM3ZQN0oxM2FqY3F0UDZGQU1HOHUzcjFxcTFidDg3V3JsMXJjeWx4L1JtK0wwTmhvS09scFhZc1hXcm1tak5CUFZUKy90dnZrK3VmVHhNZ1Q1OCt0UXNYTHJoS1RaLy84dmt0VzdiWTVzMmJwNzJuYXhjVmFobWJObTJ5NjlldnYvSTdWcXhZWWJ0MjdiTDVSSUJnM2lrNFRwOCs3ZDhNY3hJaWJyU2w4dlBQdmtNMHVYeTUxbVJ4VFpka1lLRFdkSEdqTFlsR1hOcmFMSFcxRXZHVHBjWTZVLzN6S1pvd2QrN2NzYjE3OTdxWEgvVEJvSFA5L3gwOWV0UUhaYmpYMmRsWnY3ZG56eDdidlh1M0Q0cmp4NC83ZXdvSTBlTVZWd01TQll6b3ZsNXJ2aEVnbUhkNkkremN1WFBPUXFUeSsrKytYOE9QcXJoaFdTOU5hK0VoN3A2dmRTaFlXbHRyaDRTUkdQOGlrOWRBRkFBS2huUG56dG42OWV2OXRjc3VxQlFtQ2c4NWNlSkUvZDZoUTRmczJMRmp2Z3lDZ3djUDF1OUxxR2xzMjdiTlh6OXk1SWd0QkRUa0ZybHNkYmkzdDllZlAxZkhZT1k4ZktlTm1oTFo4MnZYcnZsenJkM0pudCs0Y2NPZjYxSG51aTVhMzVNOWYrdys2WFd1MTgyZTYvZktrSHZEaHZNUUlpZFBucXovdnRtU3FuWVJhaE1LRUIydXRxRStFUDhZN2lrc0ZEUzZwaERKRHVkT1VRTlJMYUdycTJ0Y0FPZzgzRlB0SVh0djY5YXQvdkhTcFV2MWF3cFRoWW9PaGRGQ1JRMEVDMGFTMUxvdjAzU1dWMWVNTlVQOGIzUGhFWjZuSXlPMWEvbzd3dC9pZ2lOUnNPZzhoSWk4L2Zha0w2OCtqcW1vK1RMUnVab3E0V2RWWXdsTkdQV1JMRlJOV3d0VE9YdldLdDk5WjhuWWdycVIvdjV4OTVkKytPRzQ4ekxmSHoxMXl0SXZ2akM4cEZySG1UTm5iTWVPSGJQZXR2ZjlIbU96U3hQMUtmejdyei84djExM0pEclhjSzdtaG1qTEJiMlJkZjdwcDVaKzlwbWxydmFSZnZYVnBLK3ZXb09hTWFGZlE2RncrUEJoLy96OCtmUCszcjU5KzN5elJEV1MvZnYzKzU5VHMwVEJjZURBZ1hITm42eUYxb1JwV2cyazZncFVoWnBPc3NkRjR4dXFyUGNUVml5L1lpN0R3OHRPRmh2N2xCZGZFM0Y5R3dxSSttaE1lM3Z0Y0FHaUVaaXE1b0tFb2R4SktEaFVxd2hORU5HYlhvSFIwOVBqbXlUcTk5QVI3algyZVJSRjdocEk4dXV2bG1xU0Radmp6SWlDSlBueFI2dHUzMjVscHo0U2Raek8xYWlDcjNXRXRTN3FiM0Y5TTZhbVE2aUpoQnFJUWtOaDRRNU5NS3QrK2VXTWFvNEtpakJVbXgxVnlkNVRhT2hlOXJxTzBHZlNLRFJ0c2o4em4zSUhpS3JtSTcvOVJvRE1sQXVRcGQzZHRiTERuRXIrK3V2bDRqZ0Z4ei8vV0tMSHhoQnhSL3J1dTdVYWg2dVJWTC81WnNxK2p6SnFUaE9HOEpnNWxSbk5tWG1oQlhMMXp0S3hSM1dXcWtNMUdac1Rrb2JwN0I5OFlPbkhIMXY2MFVmam16N3dHSVZCK1dSSFlRTDFkMmdxZThNUy90VDFlZmp3d0lSeUI4aG9DYjQ4ZTdaUWR2TmtiUExZaEt0c005YzFDelh0NkRCTWppME5VVTVhNjZKTndFZEhhNDg2ZEUySHJpbGtYT2NucGtZVEJ1VVVGdENwNllKb1RHVUhFQzEzZ0xUMDlCamlVSFlvdXR3Qm9vbGtpRVBab2Vob3dnQ0lSb0FBaUpZN1FFYS8vOTRRaDdKRDBURVBCRUEwbWpBQW9oRWdBS0xsSDhZOWU5WVFoN0pEMFRWblA1QnBkdVBDeENnN0ZCMU5HQURSQ0JBQTBYSUhDTHVMeDZQc1VIVE1Bd0VRalNZTWdHZ0VDSUJvK2VlQjNMcGxpRVBab2VqeWJ5alUzVzJJUTltaDZHakNBSWlXUDBENGdxUTRsQmtXZ2R3Qjh1TGJieWY4YmcxTWIvVFVLUU9LckduelFNSzN6cWQ4emVXVVZFNit3Q2tuTEFMTisxNllQLzRZdDh0NDR5SXhMUnpMS3UxOUZ4eXF0VlczYnplZzZKaUpDaUFhb3pBQW9oRWdBS0lSSUFDaUVTQUFvaEVnQUtJUklBQ2lFU0FBb2hFZ0FLSVJJQUNpRVNBQW9oRWdBS0lSSUFDaUVTQUFvaEVnQUtJUklBQ2lFU0FBb3YwUGJkMkJuVXNTL1k0QUFBQUFTVVZPUks1Q1lJST1cIiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIi4vdWkuY3NzXCI7XG4vLyBkZWZhdWx0IGluaXRcbmNvbnN0IHNldHRpbmdzID0geyByYW5kb21UeXBlOiBcIm5hbWVcIiwgbGFuZzogXCJlblwiIH07XG4vLyBhZGQgdWkgaW4tZWZmZWN0XG5jb25zdCBwbHVnaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdWdpblwiKTtcbnBsdWdpbi5jbGFzc0xpc3QuYWRkKFwiZWZmZWN0LWluXCIpO1xuc2V0VGltZW91dCgoKSA9PiBwbHVnaW4uY2xhc3NMaXN0LnJlbW92ZShcImVmZmVjdC1pblwiKSwgMzAwKTtcbi8vIGRlZmF1bHQgZGF0YSBmb3IgY29kZVxucGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgIHJhbmdlOiAwLFxuICAgICAgICByYW5kb21UeXBlOiBzZXR0aW5ncy5yYW5kb21UeXBlLFxuICAgICAgICBsYW5nOiBzZXR0aW5ncy5sYW5nLFxuICAgIH0sXG59LCBcIipcIik7XG4vLyBzb3VyY2UgdGV4dCBmdW5jdGlvbmFsIHVuaXRcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRcIik7XG5jb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcmFncmFwaFwiKTtcbmNvbnN0IGRvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG90XCIpO1xuY29uc3QgY29tbWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1hXCIpO1xuY29uc3Qgc2VtaWNvbG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZW1pY29sb25cIik7XG5wYXJhZ3JhcGgub25jbGljayA9ICgpID0+IGFjdGlvbihcInMqXFxucypcIik7XG5kb3Qub25jbGljayA9ICgpID0+IGFjdGlvbihcInMqXFxcXC5zKlwiKTtcbmNvbW1hLm9uY2xpY2sgPSAoKSA9PiBhY3Rpb24oXCJzKixzKlwiKTtcbnNlbWljb2xvbi5vbmNsaWNrID0gKCkgPT4gYWN0aW9uKFwicyo7cypcIik7XG5mdW5jdGlvbiBhY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgbW9kZTogXCJzb3VyY2VcIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICAgICAgICAgICAgY29udGVudDogdGV4dC52YWx1ZSxcbiAgICAgICAgfSxcbiAgICB9LCBcIipcIik7XG59XG4vLyByYW5kb20gZnVuY3Rpb25hbCB1bml0XG5jb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xuY29uc3QgcGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob25lXCIpO1xuY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lLWxhYmVsXCIpO1xuY29uc3QgcGhvbmVMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmUtbGFiZWxcIik7XG5jb25zdCByYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZ2VcIik7XG5jb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmdlX291dHB1dFwiKTtcbm5hbWUub25jbGljayA9ICgpID0+IHJhbmRvbVR5cGVBY3Rpb24oXCJuYW1lXCIpO1xucGhvbmUub25jbGljayA9ICgpID0+IHJhbmRvbVR5cGVBY3Rpb24oXCJwaG9uZVwiKTtcbnJhbmdlLm9uY2xpY2sgPSAoKSA9PiByYW5kb21SYW5nZUFjdGlvbigpO1xuZnVuY3Rpb24gcmFuZG9tUmFuZ2VBY3Rpb24oKSB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLnZhbHVlLFxuICAgICAgICAgICAgcmFuZG9tVHlwZTogc2V0dGluZ3MucmFuZG9tVHlwZSxcbiAgICAgICAgICAgIGxhbmc6IHNldHRpbmdzLmxhbmcsXG4gICAgICAgIH0sXG4gICAgfSwgXCIqXCIpO1xuICAgIHJhbmdlLnZhbHVlID0gXCIwXCI7XG4gICAgb3V0cHV0LnZhbHVlID0gXCIwXCI7XG59XG5mdW5jdGlvbiByYW5kb21UeXBlQWN0aW9uKG1zZykge1xuICAgIHJhbmdlLnZhbHVlID0gXCIwXCI7XG4gICAgc2V0dGluZ3MucmFuZG9tVHlwZSA9IG1zZztcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICByYW5kb21UeXBlOiBzZXR0aW5ncy5yYW5kb21UeXBlLFxuICAgICAgICAgICAgbGFuZzogc2V0dGluZ3MubGFuZyxcbiAgICAgICAgfSxcbiAgICB9LCBcIipcIik7XG59XG4vLyBsYW5ndWFnZSBzd2l0Y2ggZnVuY3Rpb25hbFxuY29uc3QgdGl0bGVGaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtZmlyc3RcIik7XG5jb25zdCB0aXRsZVNlY29uZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtc2Vjb25kXCIpO1xuY29uc3QgbGFuZ0VOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlblwiKTtcbmNvbnN0IGxhbmdSVSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnVcIik7XG5jb25zdCBsYW5nWkggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInpoXCIpO1xuY29uc3QgaG93SXRXb3JrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG93LWl0LXdvcmtzXCIpO1xuY29uc3Qgc3VwcG9ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VwcG9ydFwiKTtcbmNvbnN0IGhlbHBUZXh0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC10ZXh0LTFcIik7XG5jb25zdCBoZWxwVGV4dDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHAtdGV4dC0yXCIpO1xuY29uc3QgaGVscFRleHQzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwLXRleHQtM1wiKTtcbmNvbnN0IGhlbHBUZXh0NCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC10ZXh0LTRcIik7XG5jb25zdCBoZWxwVGV4dDUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHAtdGV4dC01XCIpO1xuY29uc3QgaGVscEhlYWQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwLWhlYWQtMVwiKTtcbmNvbnN0IGhlbHBIZWFkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC1oZWFkLTJcIik7XG5sYW5nRU4ub25jbGljayA9ICgpID0+IGxhbmdTd2l0Y2hlcihcImVuXCIpO1xubGFuZ1JVLm9uY2xpY2sgPSAoKSA9PiBsYW5nU3dpdGNoZXIoXCJydVwiKTtcbmxhbmdaSC5vbmNsaWNrID0gKCkgPT4gbGFuZ1N3aXRjaGVyKFwiemhfQ05cIik7XG5mdW5jdGlvbiBsYW5nU3dpdGNoZXIobGFuZykge1xuICAgIHNldHRpbmdzLmxhbmcgPSBsYW5nO1xuICAgIHBsdWdpbi5jbGFzc0xpc3QuYWRkKFwiZWZmZWN0LWxhbmctc3dpdGNoXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcGx1Z2luLmNsYXNzTGlzdC5yZW1vdmUoXCJlZmZlY3QtbGFuZy1zd2l0Y2hcIiksIDMwMCk7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgbGFuZzogc2V0dGluZ3MubGFuZyxcbiAgICAgICAgfSxcbiAgICB9LCBcIipcIik7XG4gICAgaWYgKGxhbmcgPT09IFwicnVcIikge1xuICAgICAgICB0aXRsZUZpcnN0LmlubmVyVGV4dCA9IFwi0KHQvtC30LTQsNGC0Ywg0LjQtyDRgtC10LrRgdGC0LBcIjtcbiAgICAgICAgdGV4dC5wbGFjZWhvbGRlciA9IFwi0JjRgdGF0L7QtNC90YvQuSDRgtC10LrRgdGCINC00LvRjyDQvdCw0YDQtdC30LrQuCDQv9C+INC/0YDQsNCy0LjQu9GDXCI7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBcItCg0LDQt9C00LXQu9C40YLRjCDRgtC10LrRgdGCINC/0L7RgdC70LUg0LDQsdC30LDRhtCwXCI7XG4gICAgICAgIGNvbW1hLmlubmVySFRNTCA9IFwi0JfQsNC/0Y/RgtC+0LlcIjtcbiAgICAgICAgZG90LmlubmVySFRNTCA9IFwi0KLQvtGH0LrQuFwiO1xuICAgICAgICBzZW1pY29sb24uaW5uZXJIVE1MID0gXCLQotC+0YfQutC4INGBINC30LDQv9GP0YLQvtC5XCI7XG4gICAgICAgIHRpdGxlU2Vjb25kLmlubmVyVGV4dCA9IFwi0KHQvtC30LTQsNGC0Ywg0LjQtyDRgdC70YPRh9Cw0LnQvdGL0YVcIjtcbiAgICAgICAgbmFtZUxhYmVsLmlubmVyVGV4dCA9IFwi0JjQvNGR0L1cIjtcbiAgICAgICAgcGhvbmVMYWJlbC5pbm5lclRleHQgPSBcItCi0LXQu9C10YTQvtC90L3Ri9GFINC90L7QvNC10YDQvtCyXCI7XG4gICAgICAgIGhvd0l0V29ya3MuaW5uZXJUZXh0ID0gXCLQn9C+0LzQvtGJ0YxcIjtcbiAgICAgICAgc3VwcG9ydC5pbm5lclRleHQgPSBcItCf0L7QtNC00LXRgNC20LDRgtGMINCw0LLRgtC+0YDQsFwiO1xuICAgICAgICBzdXBwb3J0LmhyZWYgPSBcImh0dHBzOi8vd3d3LnRpbmtvZmYucnUvc2wvM3NiZlg0NWRWV2pcIjtcbiAgICAgICAgaGVscEhlYWQxLmlubmVyVGV4dCA9IFwi0KHQvtC30LTQsNGC0Ywg0LrQvtC/0LjQuCDQvtCx0YrQtdC60YLQsFwiO1xuICAgICAgICBoZWxwSGVhZDIuaW5uZXJUZXh0ID0gXCLQktGB0YLQsNCy0LjRgtGMINC60L7Qv9C40Lgg0LIg0LLRi9Cx0YDQsNC90L3Ri9C5INGE0YDQtdC50LxcIjtcbiAgICAgICAgaGVscFRleHQxLmlubmVyVGV4dCA9IFwi0J7QutC90L4g0L/Qu9Cw0LPQuNC90LAg0LLRgdC10LPQviDQu9C40YjRjCDRhNC+0YDQvNC40YDRg9C10YIg0YLQtdC60YHRgiDigJQg0LLRiyDQvNC+0LbQtdGC0LUg0YDQsNC30LTQtdC70LjRgtGMINGB0LLQvtC5INGC0LXQutGB0YIg0L/QviDQvtC00L3QvtC80YMg0LjQtyDQv9GA0LDQstC40Lsg0LjQu9C4INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQs9C10L3QtdGA0LjRgNGD0LXQvNGL0LUg0LTQsNC90L3Ri9C1LlwiO1xuICAgICAgICBoZWxwVGV4dDIuaW5uZXJUZXh0ID0gXCLQoNC10LfRg9C70YzRgtCw0YIg0LHRg9C00LXRgiDQt9Cw0LLQuNGB0LXRgtGMINC+0YIg0YLQvtCz0L4sINGH0YLQviDQstGL0LHRgNCw0L3QviDQsiDQvNCw0LrQtdGC0LUuXCI7XG4gICAgICAgIGhlbHBUZXh0My5pbm5lclRleHQgPSBcItCV0YHQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INGB0L7Qt9C00LDRgtGMINC60L7Qv9C40Lgg0L7QsdGK0LXQutGC0LAg4oCUINCy0YvQsdC10YDQuNGC0LUg0YLQtdC60YHRgtC+0LLRi9C5INGB0LvQvtC5INCy0L3Rg9GC0YDQuCDQvdC10LPQviDQuCDQv9GA0LjQvNC10L3QuNGC0LUg0L7QtNC90YMg0LjQtyDRhNGD0L3QutGG0LjQuSDQv9C70LDQs9C40L3QsC5cIjtcbiAgICAgICAgaGVscFRleHQ0LmlubmVyVGV4dCA9IFwi0JXRgdC70Lgg0LLRiyDRhdC+0YLQuNGC0LUg0LLRgdGC0LDQstC40YLRjCDQs9C+0YLQvtCy0YvQtSDQutC+0L/QuNC4INC+0LHRitC10LrRgtCwINCyINC+0L/RgNC10LTQtdC70ZHQvdC90YvQuSDRhNGA0LXQudC8LCDRgtC+INCy0YvQsdC10YDQuNGC0LUg0YLQsNC60LbQtSDRhNGA0LXQudC8INC00LvRjyDQstGB0YLQsNCy0LrQuC5cIjtcbiAgICAgICAgaGVscFRleHQ1LmlubmVyVGV4dCA9IFwi0JLRiyDQvNC+0LbQtdGC0LUg0L3QtSDQstGL0LHQuNGA0LDRgtGMINC+0LHRitC10LrRgiDQtNC70Y8g0LrQvtC/0LjRgNC+0LLQsNC90LjRjyDQuCDRhNGA0LXQudC8INC00LvRjyDQstGB0YLQsNCy0LrQuCDigJQg0LIg0L/QtdGA0LLQvtC8INGB0LvRg9GH0LDQtSDRgtC10LrRgdGCINCx0YPQtNC10YIg0LLRgdGC0LDQstC70LXQvSDQsiDQvNCw0LrQtdGCINCyINCy0LjQtNC1INGA0LDQt9C00LXQu9GR0L3QvdGL0YUg0YLQtdC60YHRgtC+0LLRi9GFINGB0LvQvtGR0LIuINCS0L4g0LLRgtC+0YDQvtC8IOKAlCDRgtC10LrRgdGCINC40LvQuCDQutC+0L/QuNC4INC+0LHRitC10LrRgtCwINCx0YPQtNGD0YIg0YPQv9Cw0LrQvtCy0LDQvdGLINCyINGB0L/QtdGG0LjQsNC70YzQvdGL0Lkg0YTRgNC10LnQvC5cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAobGFuZyA9PT0gXCJ6aF9DTlwiKSB7XG4gICAgICAgIHRpdGxlRmlyc3QuaW5uZXJUZXh0ID0gXCLku47mlofmnKzliJvlu7pcIjtcbiAgICAgICAgdGV4dC5wbGFjZWhvbGRlciA9IFwi5oyJ6KeE5YiZ5YiH54mH55qE5rqQ5paH5pysXCI7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBcIuaLhuWIhuauteiQveWQjueahOaWh+acrFwiO1xuICAgICAgICBjb21tYS5pbm5lckhUTUwgPSBcIumAl+WPt1wiO1xuICAgICAgICBkb3QuaW5uZXJIVE1MID0gXCLngrlcIjtcbiAgICAgICAgc2VtaWNvbG9uLmlubmVySFRNTCA9IFwi5YiG5Y+3XCI7XG4gICAgICAgIHRpdGxlU2Vjb25kLmlubmVyVGV4dCA9IFwi5LuO6ZqP5py65Yib5bu6XCI7XG4gICAgICAgIG5hbWVMYWJlbC5pbm5lclRleHQgPSBcIuWQjeWtlydcIjtcbiAgICAgICAgcGhvbmVMYWJlbC5pbm5lclRleHQgPSBcIueUteivneWPt+eggVwiO1xuICAgICAgICBob3dJdFdvcmtzLmlubmVyVGV4dCA9IFwi5pWR5ZG977yBXCI7XG4gICAgICAgIHN1cHBvcnQuaW5uZXJUZXh0ID0gXCLmlK/mjIHkvZzogIVcIjtcbiAgICAgICAgc3VwcG9ydC5ocmVmID0gXCJodHRwczovL3d3dy5idXltZWFjb2ZmZWUuY29tL21pbHNpbmVyeVwiO1xuICAgICAgICBoZWxwSGVhZDEuaW5uZXJUZXh0ID0gXCLliJvlu7rlr7nosaHnmoTlia/mnKxcIjtcbiAgICAgICAgaGVscEhlYWQyLmlubmVyVGV4dCA9IFwi5bCG5Ymv5pys5o+S5YWl5omA6YCJ5binXCI7XG4gICAgICAgIGhlbHBUZXh0MS5pbm5lclRleHQgPSBcIuaPkuS7tueql+WPo+WPqueUn+aIkOaWh+acrOKAlOaCqOWPr+S7peagueaNruWFtuS4reS4gOS4quinhOWImeaLhuWIhuaWh+acrOaIluS9v+eUqOeUn+aIkOeahOaVsOaNruOAglwiO1xuICAgICAgICBoZWxwVGV4dDIuaW5uZXJUZXh0ID0gXCLnu5PmnpzlsIblj5blhrPkuo7lnKjluIPlsYDkuK3pgInmi6nnmoTlhoXlrrnjgIJcIjtcbiAgICAgICAgaGVscFRleHQzLmlubmVyVGV4dCA9IFwi5aaC5p6c6KaB5Yib5bu65a+56LGh55qE5Ymv5pys77yM6K+36YCJ5oup5YW25Lit55qE5paH5pys5bGC5bm25L2/55So5YW25Lit5LiA5Liq5o+S5Lu25Ye95pWw44CCXCI7XG4gICAgICAgIGhlbHBUZXh0NC5pbm5lclRleHQgPSBcIuWmguaenOimgeWcqOeJueWumuW4p+S4reaPkuWFpeWvueixoeeahOeOsOaIkOWJr+acrO+8jOivt+mAieaLqeimgeaPkuWFpeeahOW4p+OAglwiO1xuICAgICAgICBoZWxwVGV4dDUuaW5uZXJUZXh0ID0gXCLmgqjlj6/ku6XpgInmi6nkuI3pgInmi6nopoHlpI3liLblkoznspjotLTmoYbmnrbnmoTlr7nosaEt5Zyo56ys5LiA56eN5oOF5Ya15LiL77yM5paH5pys5bCG5Lul5YiG6ZqU5paH5pys5Zu+5bGC55qE5b2i5byP57KY6LS05Yiw5biD5bGA5Lit44CCIOWcqOesrOS6jOenjeaDheWGteS4i++8jOWvueixoeeahOaWh+acrOaIluWJr+acrOWwhuiiq+aJk+WMheWcqOS4gOS4queJueauiueahOahhuaetuS4reOAglwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGl0bGVGaXJzdC5pbm5lclRleHQgPSBcIkNyZWF0ZSBmcm9tIHRleHRcIjtcbiAgICAgICAgdGV4dC5wbGFjZWhvbGRlciA9IFwiU291cmNlIHRleHQgZm9yIGRpdmlzaW9uIGJ5IHJ1bGVcIjtcbiAgICAgICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IFwiRGl2aWRlIHRoZSB0ZXh0IGludG8gcGFyYWdyYXBoc1wiO1xuICAgICAgICBjb21tYS5pbm5lckhUTUwgPSBcIkFmdGVyIHRoZSBjb21tYVwiO1xuICAgICAgICBkb3QuaW5uZXJIVE1MID0gXCJEb3RcIjtcbiAgICAgICAgc2VtaWNvbG9uLmlubmVySFRNTCA9IFwiU2VtaWNvbG9uXCI7XG4gICAgICAgIHRpdGxlU2Vjb25kLmlubmVyVGV4dCA9IFwi0KFyZWF0ZSBmcm9tIHJhbmRvbVwiO1xuICAgICAgICBuYW1lTGFiZWwuaW5uZXJUZXh0ID0gXCJOYW1lc1wiO1xuICAgICAgICBwaG9uZUxhYmVsLmlubmVyVGV4dCA9IFwiUGhvbmUgTnVtYmVyc1wiO1xuICAgICAgICBob3dJdFdvcmtzLmlubmVyVGV4dCA9IFwiSG93IGl0IHdvcmtzXCI7XG4gICAgICAgIHN1cHBvcnQuaW5uZXJUZXh0ID0gXCJTdXBwb3J0IHRoZSBhdXRob3JcIjtcbiAgICAgICAgc3VwcG9ydC5ocmVmID0gXCJodHRwczovL3d3dy5idXltZWFjb2ZmZWUuY29tL21pbHNpbmVyeVwiO1xuICAgICAgICBoZWxwSGVhZDEuaW5uZXJUZXh0ID0gXCJDcmVhdGUgY29waWVzIG9mIGFuIG9iamVjdFwiO1xuICAgICAgICBoZWxwSGVhZDIuaW5uZXJUZXh0ID0gXCJJbnNlcnQgY29waWVzIGludG8gdGhlIHNlbGVjdGVkIGZyYW1lXCI7XG4gICAgICAgIGhlbHBUZXh0MS5pbm5lclRleHQgPSBcIlRoZSBwbHVnaW4gd2luZG93IG9ubHkgZ2VuZXJhdGVzIHRleHQg4oCUIHlvdSBjYW4gc3BsaXQgeW91ciB0ZXh0IGFjY29yZGluZyB0byBvbmUgb2YgdGhlIHJ1bGVzIG9yIHVzZSB0aGUgZ2VuZXJhdGVkIGRhdGEuXCI7XG4gICAgICAgIGhlbHBUZXh0Mi5pbm5lclRleHQgPSBcIlRoZSByZXN1bHQgd2lsbCBkZXBlbmQgb24gd2hhdCBpcyBzZWxlY3RlZCBpbiB0aGUgbGF5b3V0LlwiO1xuICAgICAgICBoZWxwVGV4dDMuaW5uZXJUZXh0ID0gXCJJZiB5b3Ugd2FudCB0byBjcmVhdGUgY29waWVzIG9mIGFuIG9iamVjdCwgc2VsZWN0IHRoZSB0ZXh0IGxheWVyIGluc2lkZSBpdCBhbmQgdXNlIG9uZSBvZiB0aGUgcGx1Z2luIGZ1bmN0aW9ucy5cIjtcbiAgICAgICAgaGVscFRleHQ0LmlubmVyVGV4dCA9IFwiSWYgeW91IHdhbnQgdG8gaW5zZXJ0IHJlYWR5LW1hZGUgY29waWVzIG9mIGFuIG9iamVjdCBpbiBhIHNwZWNpZmljIGZyYW1lLCBzZWxlY3QgdGhlIGZyYW1lIHRvIGluc2VydCBhcyB3ZWxsLlwiO1xuICAgICAgICBoZWxwVGV4dDUuaW5uZXJUZXh0ID0gXCJZb3UgY2FuIGNob29zZSBub3QgdG8gc2VsZWN0IHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29weSBhbmQgZnJhbWUgZm9yIHBhc3RlIOKAlCBpbiB0aGUgZmlyc3QgY2FzZSB0aGUgdGV4dCB3aWxsIGJlIHBhc3RlZCB0byB0aGUgbGF5b3V0IGluIHRoZSBmb3JtIG9mIGRlbGltaXRlZCB0ZXh0IGxheWVycy5cIjtcbiAgICB9XG59XG4vLyBoZWxwIGZ1bmN0aW9uYWxcbmNvbnN0IGhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHBcIik7XG5jb25zdCBjbG9zZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlclwiKTtcbmhvd0l0V29ya3Mub25jbGljayA9ICgpID0+IHtcbiAgICBoZWxwLmNsYXNzTGlzdC5hZGQoXCJwbHVnaW5fX2hlbHBfYWN0aXZlXCIpO1xufTtcbmNsb3Nlci5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGhlbHAuY2xhc3NMaXN0LnJlbW92ZShcInBsdWdpbl9faGVscF9hY3RpdmVcIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==