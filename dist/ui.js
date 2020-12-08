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
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ":root {\n  --color-accent: #FF1A1A;\n\n  --color-bg: #fff;\n  --color-pad-hard: #333;\n  --color-pad-soft: #f1f1f1;\n\n  --color-text-main: #333;\n  --color-text-invert: #fff;\n  --color-text-optional: #b6b6b6;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  color: var(--color-text-main);\n  font-family: \"Montserrat\", sans-serif;\n  height: 100%;\n  overflow: hidden;\n  width: 100%;\n}\n\nbutton,\ntextarea {\n  font-family: inherit;\n  font-weight: 400;\n}\n\nbutton,\nh3,\np,\na,\nsmall {\n  user-select: none;\n}\n\nh3,\np {\n  font-size: 11px;\n}\n\nh3 {\n  font-weight: 400;\n  color: var(--color-text-optional);\n  height: 16px;\n}\n\nsmall {\n  font-size: 10px;\n}\n\na:focus,\nbutton:focus,\ntextarea:focus {\n  outline: none;\n}\n\na {\n  cursor: default;\n  color: var(--color-text-main);\n  text-decoration: none;\n  transition: all 150ms ease;\n}\n\na:hover{\n  color: var(--color-accent);\n  transition: all 150ms ease;\n}\n\nbutton {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  color: var(--color-text-main);\n  font-size: 11px;\n  font-weight: 600;\n  flex-grow: 1;\n  height: 21px;\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n}\n\nhr {\n  background-color: var(--color-pad-soft);\n  border: none;\n  height: 1px;\n  width: 100%;\n}\n\ntextarea {\n  background-color: var(--color-bg);\n  border: none;\n  border-bottom: 1px solid var(--color-pad-soft);\n  color: var(--color-text-main);\n  cursor: default;\n  font-size: 11px;\n  height: 48px;\n  padding: 0 8px 0 0;\n  resize: none;\n  transition: all 150ms ease;\n}\n\ntextarea::-webkit-scrollbar {\n  display: none;\n}\n\ntextarea::placeholder {\n  color: var(--color-text-optional);\n  font-size: 11px;\n}\n\ntextarea:focus,\ntextarea:hover {\n  border-color: var(--color-accent);\n  transition: all 150ms ease;\n}\n\ninput[type=\"radio\"] {\n\tdisplay: none;\n}\n\ninput[type=\"range\"] {\n  -webkit-appearance: none;\n  vertical-align: middle;\n  outline: none;\n  border: none;\n  padding: 0;\n  background: none;\n  width: 100%;\n}\n\n\n\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n  background-color: var(--color-pad-soft);\n  border: 6px solid var(--color-bg);\n  height: 16px;\n  border-radius: 8px;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border-radius: 100%;\n  background-color: var(--color-accent);\n  height: 8px;\n  width: 8px;\n  margin-top: -2px;\n}\n\noutput {\n  font-size: 11px;\n}\n\ninput[type=\"range\"]:active::-webkit-slider-thumb {\n  outline: none;\n}\n\n.plugin {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 16px;\n}\n\n.plugin__source-text,\n.plugin__random-generation {\n  display: flex;\n  flex-direction: column;\n  margin: 0 16px 16px 16px;\n}\n\n.plugin__title {\n  margin: 0 0 4px 0;\n}\n\n.plugin__textbox {\n  margin: 0 0 8px 0;\n}\n\n.plugin__source-button,\n.plugin__random-button-container .plugin__random-button {\n  transition: all 150ms ease;\n}\n\n.plugin__source-button:hover,\n.plugin__help-closer:hover {\n  color: var(--color-accent);\n  transition: all 150ms ease;\n}\n\n.plugin__random-button-container {\n  display: flex;\n}\n\n.plugin__random-button {\n  width: 152px;\n}\n\n.plugin__range-container {\n  display: flex;\n  opacity: 0;\n  align-items: center;\n  transition: all 150ms ease;\n}\n\n.plugin__random-button-container:hover .plugin__range-container {\n  opacity: 1;\n  transition: all 150ms ease;\n}\n\n.plugin__range-container input {\n  margin: 0 8px 0 0;\n}\n\n.plugin__range-container output {\n  width: 16px;\n}\n\n.plugin__switcher {\n  display: flex;\n  margin: 0 0 16px 0;\n}\n\n.plugin__toggle {\n  height: 30px;\n  padding: 8px 15px;\n  border-radius: 2px;\n  margin: 0 2px 0 0;\n  transition: all 150ms ease;\n}\n\n.plugin__control-panel {\n  height: 24px;\n  margin: 4px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.plugin__info {\n  display: flex;\n  align-items: center;\n}\n\n.plugin__info small {\n  margin: 0 16px 0 0;\n}\n\n.plugin__info small:last-child {\n  margin: 0;\n}\n\n.plugin__lang {\n  display: flex;\n  /* margin: 0 16px 0 0; */\n}\n\n.plugin__lang-toggle {\n  margin: 0 4px 0 0;\n}\n\n.plugin__lang-toggle:last-child {\n  margin: 0;\n}\n\ninput[type=\"radio\"] + .plugin__lang-toggle {\n  color: var(--color-text-main);\n  transition: all 150ms ease;\n}\n\ninput[type=\"radio\"]:hover + .plugin__lang-toggle {\n  color: var(--color-accent);\n  transition: all 150ms ease;\n}\n\ninput[type=\"radio\"]:checked + .plugin__lang-toggle {\n  color: var(--color-text-optional);\n  pointer-events: none;\n  transition: all 150ms ease;\n}\n\n.plugin__help {\n  opacity: 0;\n  transform: scale(0.9);\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  top: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  transition: all 150ms ease;\n  z-index: -1;\n}\n\n.plugin__help_active {\n  z-index: 1;\n  opacity: 1;\n  transform: scale(1);\n  background-color: var(--color-bg);\n  transition: all 150ms ease;\n}\n\n.plugin__help-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  padding: 16px 16px 0 16px;\n}\n\n.plugin__help-content::-webkit-scrollbar {\n  display: none;\n}\n\n.plugin__help-section {\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 16px 0;\n}\n\n.plugin__help-text {\n  margin: 0 0 8px 0;\n}\n\n.plugin__help-text:last-child {\n  margin: 0;\n}\n\n.plugin__help-pic {\n  height: 102px;\n  width: 272px;\n  border-radius: 8px;\n}\n\n.plugin__help-pic_1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.plugin__help-pic_2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.plugin__help-gradient {\n  content: \" \";\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  min-height: 24px;\n  background: linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);\n}\n\n.plugin__help-bottom-panel {\n  display: flex;\n  place-items: center;\n  height: 40px;\n}\n\n.plugin__help-closer {\n  margin: 0 0 0 16px;;\n}\n\n/* effects  */\n.effect-in {\n  animation: effect-in 300ms ease;\n}\n\n.effect-lang-switch {\n  animation: effect-lang-switch 300ms;\n}\n\n@keyframes effect-in {\n  from {\n    opacity: 0;\n    transform: scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes effect-lang-switch {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(8px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n", ""]);
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
const settings = { lang: "en" };
// add ui in-effect
const plugin = document.getElementById("plugin");
plugin.classList.add("effect-in");
setTimeout(() => plugin.classList.remove("effect-in"), 600);
// default data for code
parent.postMessage({
    pluginMessage: {
        range: 0,
        lang: settings.lang,
    },
}, "*");
// source text functional unit
const text = document.getElementById("text");
const paragraph = document.getElementById("paragraph");
const dot = document.getElementById("dot");
const comma = document.getElementById("comma");
const semicolon = document.getElementById("semicolon");
const space = document.getElementById("space");
setTimeout(() => text.focus(), 100);
paragraph.onclick = () => action("s*\ns*");
dot.onclick = () => action("s*\\.s*");
comma.onclick = () => action("s*,s*");
semicolon.onclick = () => action("s*;s*");
space.onclick = () => action("s* s*");
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
const names = document.getElementById("names");
const phones = document.getElementById("phones");
const addresses = document.getElementById("addresses");
const cities = document.getElementById("cities");
const emails = document.getElementById("emails");
const paragraphs = document.getElementById("paragraphs");
names.onclick = () => randomRangeAction("names", names);
phones.onclick = () => randomRangeAction("phones", phones);
addresses.onclick = () => randomRangeAction("addresses", addresses);
cities.onclick = () => randomRangeAction("cities", cities);
emails.onclick = () => randomRangeAction("emails", emails);
paragraphs.onclick = () => randomRangeAction("paragraphs", paragraphs);
function randomRangeAction(type, range) {
    parent.postMessage({
        pluginMessage: {
            range: range.value,
            randomType: type,
            lang: settings.lang,
        },
    }, "*");
    range.value = "0";
}
// language switch functional
const titleSecond = document.getElementById("title-second");
const btnNames = document.getElementById("btn-names");
const btnPhones = document.getElementById("btn-phones");
const btnAddresses = document.getElementById("btn-addresses");
const btnCities = document.getElementById("btn-cities");
const btnEmails = document.getElementById("btn-emails");
const btnParagraphs = document.getElementById("btn-paragraphs");
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
const closer = document.getElementById("closer");
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
        text.placeholder = "Ваш текст для создания слоёв";
        paragraph.innerHTML = "Разделить по абзацам";
        comma.innerHTML = "После запятых";
        dot.innerHTML = "Точек";
        semicolon.innerHTML = "Точек с запятой";
        space.innerHTML = "Пробелов";
        titleSecond.innerText = "или создать из случайных";
        btnNames.innerHTML = "Имён";
        btnPhones.innerHTML = "Телефонных номеров";
        btnCities.innerHTML = "Названий городов";
        btnAddresses.innerHTML = "Адресов";
        btnEmails.innerHTML = "Эмейлов";
        btnParagraphs.innerHTML = "Параграфов";
        howItWorks.innerHTML = "Помощь";
        support.innerText = "Поддержать автора";
        support.href = "https://www.tinkoff.ru/sl/3sbfX45dVWj";
        helpHead1.innerText = "Создать копии объекта";
        helpHead2.innerText = "Вставить копии в выбранный фрейм";
        helpText1.innerText =
            "Окно плагина всего лишь формирует текст — вы можете разделить свой текст по одному из правил или использовать генерируемые данные.";
        helpText2.innerText =
            "Результат будет зависеть от того, что выбрано в макете.";
        helpText3.innerText =
            "Если вы хотите создать копии объекта — выберите текстовый слой внутри него и примените одну из функций плагина.";
        helpText4.innerText =
            "Если вы хотите вставить готовые копии объекта в определённый фрейм, то выберите также фрейм для вставки.";
        helpText5.innerText =
            "Вы можете не выбирать объект для копирования и фрейм для вставки — в первом случае текст будет вставлен в макет в виде разделённых текстовых слоёв. Во втором — текст или копии объекта будут упакованы в специальный фрейм.";
        closer.innerText = "Закрыть";
    }
    else if (lang === "zh_CN") {
        text.placeholder = "您想要切分的文本";
        paragraph.innerHTML = "将文字分段";
        comma.innerHTML = "通过逗号分段";
        dot.innerHTML = "通过句号分段";
        semicolon.innerHTML = "通过分号分段";
        space.innerHTML = "通过空格分段";
        titleSecond.innerText = "创建文字";
        btnNames.innerHTML = "随机名字";
        btnPhones.innerHTML = "随机电话号";
        btnCities.innerHTML = "随机城市名称";
        btnAddresses.innerHTML = "随机地址";
        btnEmails.innerHTML = "随机电子邮箱";
        btnParagraphs.innerHTML = "随机片段";
        howItWorks.innerText = "帮助";
        support.innerText = "联系我们";
        support.href = "https://www.buymeacoffee.com/milsinery";
        helpHead1.innerText = "创建对象副本";
        helpHead2.innerText = "将副本插入所选框架";
        helpText1.innerText =
            "插件窗口仅生成文本，您可以按规定细则切分自己的文章或使用生成的数据。";
        helpText2.innerText = "在模版中的选择决定您的结果。";
        helpText3.innerText =
            "如果要创建对象副本，请选择所给文本层并使用一个相应插件功能。";
        helpText4.innerText = "如果要在特定框架中粘贴现成副本，请同时选择框架。";
        helpText5.innerText =
            "您可以不选择要复制粘贴的对象或不选择特定框架，第一种情况，文本将以分好的形式粘贴到模版中。 第二种情况，文本或副本将包装在特种框架中。";
        closer.innerText = "特写";
    }
    else {
        text.placeholder = "Your text for creating layers";
        paragraph.innerHTML = "Divide the text into paragraphs";
        comma.innerHTML = "After the comma";
        dot.innerHTML = "Dot";
        semicolon.innerHTML = "Semicolon";
        space.innerHTML = "Spaces";
        titleSecond.innerText = "or create from random";
        btnNames.innerHTML = "Names";
        btnPhones.innerHTML = "Phone numbers";
        btnCities.innerHTML = "City names";
        btnAddresses.innerHTML = "Addresses";
        btnEmails.innerHTML = "E-mail addresses";
        btnParagraphs.innerHTML = "Paragraphs";
        howItWorks.innerText = "How it works";
        support.innerText = "Support the author";
        support.href = "https://www.buymeacoffee.com/milsinery";
        helpHead1.innerText = "Create copies of an object";
        helpHead2.innerText = "Insert copies into the selected frame";
        helpText1.innerText =
            "The plugin window only generates text — you can split your text according to one of the rules or use the generated data.";
        helpText2.innerText =
            "The result will depend on what is selected in the layout.";
        helpText3.innerText =
            "If you want to create copies of an object, select the text layer inside it and use one of the plugin functions.";
        helpText4.innerText =
            "If you want to insert ready-made copies of an object in a specific frame, select the frame to insert as well.";
        helpText5.innerText =
            "You can choose not to select the object you want to copy and frame for paste — in the first case the text will be pasted to the layout in the form of delimited text layers.";
        closer.innerText = "Close";
    }
}
// help functional
const help = document.getElementById("help");
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
        help.classList.remove("plugin__help_active");
});
howItWorks.onclick = () => {
    help.classList.add("plugin__help_active");
};
closer.onclick = () => {
    help.classList.remove("plugin__help_active");
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy8xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzLzIucG5nIiwid2VicGFjazovLy8uL3NyYy91aS5jc3M/M2I5NyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3VpLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ltYWdlcy8xLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL2ltYWdlcy8yLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb2xvci1hY2NlbnQ6ICNGRjFBMUE7XFxuXFxuICAtLWNvbG9yLWJnOiAjZmZmO1xcbiAgLS1jb2xvci1wYWQtaGFyZDogIzMzMztcXG4gIC0tY29sb3ItcGFkLXNvZnQ6ICNmMWYxZjE7XFxuXFxuICAtLWNvbG9yLXRleHQtbWFpbjogIzMzMztcXG4gIC0tY29sb3ItdGV4dC1pbnZlcnQ6ICNmZmY7XFxuICAtLWNvbG9yLXRleHQtb3B0aW9uYWw6ICNiNmI2YjY7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tYWluKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbixcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmJ1dHRvbixcXG5oMyxcXG5wLFxcbmEsXFxuc21hbGwge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmgzLFxcbnAge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtb3B0aW9uYWwpO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbWFpbik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcXG59XFxuXFxuYTpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tYWluKTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBoZWlnaHQ6IDIxcHg7XFxuICBwYWRkaW5nOiA0cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ociB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYWQtc29mdCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItcGFkLXNvZnQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbWFpbik7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBwYWRkaW5nOiAwIDhweCAwIDA7XFxuICByZXNpemU6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcXG59XFxuXFxudGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1vcHRpb25hbCk7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzLFxcbnRleHRhcmVhOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFkLXNvZnQpO1xcbiAgYm9yZGVyOiA2cHggc29saWQgdmFyKC0tY29sb3ItYmcpO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXG4gIGhlaWdodDogOHB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcblxcbm91dHB1dCB7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06YWN0aXZlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucGx1Z2luIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy10b3A6IDE2cHg7XFxufVxcblxcbi5wbHVnaW5fX3NvdXJjZS10ZXh0LFxcbi5wbHVnaW5fX3JhbmRvbS1nZW5lcmF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDE2cHggMTZweCAxNnB4O1xcbn1cXG5cXG4ucGx1Z2luX190aXRsZSB7XFxuICBtYXJnaW46IDAgMCA0cHggMDtcXG59XFxuXFxuLnBsdWdpbl9fdGV4dGJveCB7XFxuICBtYXJnaW46IDAgMCA4cHggMDtcXG59XFxuXFxuLnBsdWdpbl9fc291cmNlLWJ1dHRvbixcXG4ucGx1Z2luX19yYW5kb20tYnV0dG9uLWNvbnRhaW5lciAucGx1Z2luX19yYW5kb20tYnV0dG9uIHtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xcbn1cXG5cXG4ucGx1Z2luX19zb3VyY2UtYnV0dG9uOmhvdmVyLFxcbi5wbHVnaW5fX2hlbHAtY2xvc2VyOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxufVxcblxcbi5wbHVnaW5fX3JhbmRvbS1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wbHVnaW5fX3JhbmRvbS1idXR0b24ge1xcbiAgd2lkdGg6IDE1MnB4O1xcbn1cXG5cXG4ucGx1Z2luX19yYW5nZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxufVxcblxcbi5wbHVnaW5fX3JhbmRvbS1idXR0b24tY29udGFpbmVyOmhvdmVyIC5wbHVnaW5fX3JhbmdlLWNvbnRhaW5lciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxufVxcblxcbi5wbHVnaW5fX3JhbmdlLWNvbnRhaW5lciBpbnB1dCB7XFxuICBtYXJnaW46IDAgOHB4IDAgMDtcXG59XFxuXFxuLnBsdWdpbl9fcmFuZ2UtY29udGFpbmVyIG91dHB1dCB7XFxuICB3aWR0aDogMTZweDtcXG59XFxuXFxuLnBsdWdpbl9fc3dpdGNoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMCAwIDE2cHggMDtcXG59XFxuXFxuLnBsdWdpbl9fdG9nZ2xlIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luOiAwIDJweCAwIDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcXG59XFxuXFxuLnBsdWdpbl9fY29udHJvbC1wYW5lbCB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDRweCAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbHVnaW5fX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbHVnaW5fX2luZm8gc21hbGwge1xcbiAgbWFyZ2luOiAwIDE2cHggMCAwO1xcbn1cXG5cXG4ucGx1Z2luX19pbmZvIHNtYWxsOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGx1Z2luX19sYW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBtYXJnaW46IDAgMTZweCAwIDA7ICovXFxufVxcblxcbi5wbHVnaW5fX2xhbmctdG9nZ2xlIHtcXG4gIG1hcmdpbjogMCA0cHggMCAwO1xcbn1cXG5cXG4ucGx1Z2luX19sYW5nLXRvZ2dsZTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSArIC5wbHVnaW5fX2xhbmctdG9nZ2xlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1haW4pO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06aG92ZXIgKyAucGx1Z2luX19sYW5nLXRvZ2dsZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyAucGx1Z2luX19sYW5nLXRvZ2dsZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1vcHRpb25hbCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5wbHVnaW5fX2hlbHBfYWN0aXZlIHtcXG4gIHotaW5kZXg6IDE7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDE2cHggMTZweCAwIDE2cHg7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBsdWdpbl9faGVscC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDAgMTZweCAwO1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwLXRleHQge1xcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtdGV4dDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnBsdWdpbl9faGVscC1waWMge1xcbiAgaGVpZ2h0OiAxMDJweDtcXG4gIHdpZHRoOiAyNzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnBsdWdpbl9faGVscC1waWNfMSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwLXBpY18yIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtZ3JhZGllbnQge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtaW4taGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNGRkZGRkYgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtYm90dG9tLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwLWNsb3NlciB7XFxuICBtYXJnaW46IDAgMCAwIDE2cHg7O1xcbn1cXG5cXG4vKiBlZmZlY3RzICAqL1xcbi5lZmZlY3QtaW4ge1xcbiAgYW5pbWF0aW9uOiBlZmZlY3QtaW4gMzAwbXMgZWFzZTtcXG59XFxuXFxuLmVmZmVjdC1sYW5nLXN3aXRjaCB7XFxuICBhbmltYXRpb246IGVmZmVjdC1sYW5nLXN3aXRjaCAzMDBtcztcXG59XFxuXFxuQGtleWZyYW1lcyBlZmZlY3QtaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZWZmZWN0LWxhbmctc3dpdGNoIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUkFBQUFCbUNBWUFBQUFEQnM1OUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFnQVNVUkJWSGdCN2QyN2J4UlhGTWZ4TStabGg0ZGxDL05NUUFvQ2xCUVEzSkFpRWxLNlVDTHhhS2lnNDkrZ29ZTUNLaWlnZzRJaUJWV0tnTks0QVlHVUFwQXNJU0pqQ0xLeE1iWXgySlA3dSt2cmpCM1doRE9EdmN0K1A5Sm9kMmEwdTNobitlMjVaeDZiVFUxTjVRWUFEbTBHQUU0RUNBQTNBZ1NBR3dFQ3dJMEFBZUJHZ0FCd0kwQUF1QkVnQU53SUVBQnVCQWdBTndJRWdCc0JBc0NOQUFIZ1JvQUFjQ05BQUxnUklBRGNDQkFBYmdRSUFEY0NCSUFiQVFMQWpRQUI0RWFBQUhBalFBQzRFU0FBM0FnUUFHNEVDQUEzQWdTQUd3RUN3STBBQWVCR2dBQndXMmtWZS9QbWpZMk1qTVRwM2J0M2h1WFgzdDV1SFIwZHRubnpabHU5ZXJVQlZjbW1wcVp5cThEMDlMUTlmLzdjaG9hR3JLZW54N3E3dTIzVnFsV0c1VGM1T1duajQrTngrM1IyZHNZZ1diRmloUUZsVlJJZ0NvLysvdjc0VGJkdDJ6WStuQTBxaGZ6WTJKanQycldMN1lUU0tnbVFnWUdCZUt2d1FPTjcrdlJwREErMkY4b3EzVVFOQVJUN0hTcUwwUndVSE1QRHc3RVNBY29vSFNBcWlSbFROeGR0cTQwYk45cm82S2dCWlpRT0VEWG8xT0ZIYytucTZpSkFVRnJwQUptWW1DQkFtcEIyNTJyNENaVEJnV1FBM0FnUUFHNEVDQUMzeWc5bEI1cld5SWhsZlgyV0RRN3ErQVN6dDI4dEM1T2xTY3ZXcnJXWjNsN0xmL25GUUFVQ3pHbTdkOCt5OFhHek5XdlVaWTYzdWU2blNjdkd4cXp0dDk4c0d4b3lVSUVBTlpPVGxzL01XS2FnV0VDSGFtY0xGL2IzbTNWM1c2c2pRTkRhUmtldDdkZGZMVk1nUEg1Y3EwQW1KbUtnYUlwRG1DeXptZSsvTi92aGgzOGZ4NEdURVFHQ2xwYmR2bTMyOG1VWXY0VFIvRmRmL2FmYWlQTWhSRFM4bWRtKzNheW5wN2FpamRHL0VDQk5RTmRWZWZIaVJlamp2YldaVUdhdkRZMDhYVEpoNWNyVzJIejM3OSszTFZ1MlZINitWUmI2R2JHWG9URFFwUGRUa3k1REVkN25aQzVVL3Y3YjhxKy9ydDMvU0lDOGZ2M2FidDI2RllxYXg3WnUzVG83ZE9pUUhUaHc0S1BydE95MlFxMWd6NTQ5OXVqUm8vKzh4dnIxNiszNDhlTzJuQWlRQnFmdzBObXpNNFVQdEM3YXBDT0FkK3pZMFJJaG91QzRmdjE2L005U1NZaUV2UzF0di84ZUc2TFozYnUxSVVzWXVtVER3N1doUzlqYmttbVBTMGVINWFFcWtYaksrbXd6TmQ1ZlpBano3Tmt6TzNQbVREeFpVY0dnZWYzN0wxMjZGSU13cmR1OWUvZmN1dE9uVDl1cFU2ZGlVRnk1Y2lXdVUwQ0lidStGQ2tnVU1LTDFlcTdsdHVTZnZwVS8vV1RaWDM5Wks5SzMxL3MvL3Zpa3g3d001WFV4UEJJdDA0bU0yMVZXZitIMEgrWFlzV09WaFVqYm4zL0d2a2JjcXhLcXVTalBhK0VoWVYyc09oUXM3ZTIxU2RLZW1QZ2s5U3NRQllDQzRlYk5tN1oxNjlhNDdHNElLb1dKd2tPdVhyMDZ0Kzc4K2ZOMitmTGwrRGNtNTg2ZG0xc3ZxZEk0Y3VSSVhIN3g0a1ZyQkVzK2tHdlY4QkRQMzY1cW94NE5hVDYzWWpuZDE5Y1g1OVByYW1paCtWZXZYczJiVjdESnc0Y1A0L3lUSjAvaXZHNDFyK1V5T0RnWTUvVTQwV1VoaXZNNlVWUHpldDBVSXRldVhadDdmcTljMVVXcUpoUWdtblErbDZvTjNhWjFDZ3NGalpZcFJJcTdjeGVwUUZRbDlQYjJ6Z3NBemFkMXFoNks2dzRmUGh4djc5eTVNN2RNWWFsUTBhUXdhbFFNWVJwY1cvaW0rMUFGSXZXV2Y2bXlyTmJlelBPUzE4Q2FIWWJFWnd2aGtlN25ZYmlZMVY2b05tbFpDSTVNd2FMNUZDTFMyVm4zNmRYaldNekM2N0NrZVExVjBtTlZzYVFoakhva2pXcnBBeVNVOGRhcVZZais5ayswSm54ZzFlLzRrTFdwL1A2TWloL2Vnd2NQemx1M2YvLytSZWYzN3QwYnAyVG56cDF4U2xSVkZNZnh1bDVyOGZWMGljdzByNnJqeG8wYmR2TGt5ZkpqLzlrUWlNRXgreDdHKzlQVC93WkxDcWxDSHlRRmlPYnpUWnZxUHIwcUNnMWpOS212b1ZDNGNPRkN2SzhxU3N2VGNFd1Z5ZG16WjJORm9zcEV3U0VMaHpDTmFza0Q1TjBuOWdCYTNhYndRVjNZUkJWVkpqMXBsK0lYTG9YSDBhTkhxMmtjRmc4V20vMldseGdlNFgzTk5UeEplMk82dW1wVGFMS3FoeldqWTBFKzhyNnJJYXFxSWcxQlJHR2d3RGh4NGtRY2txanZvU210YTViQVdLajBOVkVmUEhoZysvYnRNM3crMmhPalpxcjZJUW9PVlNWcUpKYmRBOU1zMjA0OUVmMjlWZTExeUxRbkk1M3JvbjVLNkwyWWhnN3FONFVwMDYwT0tGTm9LQ3pDcEFQTVpuNysyZklmZi96ZnI2T2dTTHRxaTN0Vml1dFM1VkZjcmluMVRCWktRNXZpWTVZVFBaQW1vSi9IYU1adnA2b3NIQnFWVnFoQWNsVVhPb1M5c0hyZU1FYkRGdzFaTm15dy9MdnY3Rk5vbTlYYmJ2WFdMZllZcVJjc3k0VUFRY3ZSQ1hKenpkTFpXelZMMVZETlpvOEp5ZFBoN0tGbm8rREl2LzEyL3RBSEVRR0MxbFBjQzVPbzM2RktZOEVwL0hub2VjVHd3QWNSSUdnOXhUMHZIMWc5dDF0WGdmTE5ONGI2Q0JDMEhsVWJvYWRoMm0zNy9uMjhqWlAyZEdrS3krSUJacUg1aWNVUklHaE42UVE2ZnIrNUZNNUpCdUJHZ0FCd0kwQUF1SlVPRUg3aHJEbnAvSnIyZEpvNjRGUTZRRGFFYnJaKzZSM05oZDgwUmhVcUNSQ2Rwekd0M1dCb0N0cFdPa0d0NmtzRW92V1VEaENkS0tSZmVoOFlHREEwQjRXSGduOTF1cm9XNEZSSkUxWGZaQnBUSzBTb1JCcVh0bzB1RGFCVHphaytVSVhTcC9NbnFTd2VIUjJOSDA2TnIyblNOUVpkRG1Cb2FDZ09OVlV0YXZ1czRIZE5VSUhLQWlUUkhoa0ZpU3FTeVhTUldpd3JYUTVBVi92U3RCUlhNVVBycUR4QUFMUU9EaVFENEVhQUFIQWpRQUM0RVNBQTNBZ1FBRzRFQ0FBM0FnU0FHd0VDd0kwQUFlQkdnQUJ3STBBQXVCRWdBTndJRUFCdUJBZ0FOd0lFZ0JzQkFzQ05BQUhnUm9BQWNDTkFBTGdSSUFEY0NCQUFiZ1FJQURjQ0JJQWJBUUxBalFBQjRFYUFBSEFqUUFDNEVTQUEzQWdRQUc0RUNBQzNmd0FUa2htcFI5bTc2QUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUkFBQUFCbUNBWUFBQUFEQnM1OUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFnQlNVUkJWSGdCN2QxTGJGUlZITWZ4L3gwS3RncElDY3BERzQya0pCcGpwQ3NYVFVoY21NZ1NlWFFQT3piczJMa3diRWhjd0FKV3NJQVZFTUxDQkJiR2hSQVhkZ1BCUkJOb1lvb1FYaUxsVWFXMFphN25kNlpudUIzNm9PZE9IN2YzKzBsdVp1NjlkbHBQbU4rYzl5VER3OE9wQVVDRWlnRkFKQUlFUURRQ0JFQTBBZ1JBTkFJRVFEUUNCRUEwQWdSQU5BSUVRRFFDQkVBMEFnUkFOQUlFUURRQ0JFQTBBZ1JBTkFJRVFEUUNCRUMwRm11QzRlRmh1M256cGcwTkRkbUxGeThNVTF1NWNxVnQyTERCbGkxYlprQ1JKWGszRkZKNDlQWDEyWm8xYS95eFpNa1N3K1FVc0E4ZlByVDc5KzliWjJjbklZSkN5eDBnL2YzOXRuejVjaDhlZUgzMzd0Mnp3Y0ZCMjdoeG93RkZsYnNQNU1tVEo5YmUzbTZZR1FXdW1ueEFrVFdsRTVWbXk4eXB6T2d2UXRFeENnTWdHZ0VDSUJvQkFpQWFBUUlnV2xNbWtzSDgzSTVIang3NTU1b294ckEyeW9BQWFZSUhEeDdVdzBQMHZGS3AyT3JWcXcxWXpHWTlRRnE2dXkyNWRjdUtLSDMvZlJ2OTVaZHAvenZOaFdta0VDRkFzTmpOZWg5SVlzVlY1TDhkbUF1elhnTVplWTFQOEtKYnRXcVY3d1BKVWo4SXNOalJCOUlFYXFwVXE5VjZVMGFCUXZNRlpVQ0FORWxZalF5VUNmTkFBRVFqUUFCRUkwQUFSQ05BQUVUTEhTRHNheEdITXNOaWtEdEFXbHRiL1ZSdXpNekF3QUJ6UlZCNHVRT2tvNlBEQjRnT1BsV25wekxTZnFoMzc5NzFPN01EUlpaN1UyWFJ6dXkzYjkrZWNFMEl4dE1pdTdhMk5oKzg3TWlPb210S2dBQW9KMFpoQUVSaktqc1FQSDVzU1crdkphNS95clhMelo0L3Q4UWRGZzVkZStzdHEzWjFXZnIxMXdacUlFQmQ1Y29WUy83N3oreU5OOHpVUCtVZVV6MFBoNjRORGxybHA1OHNhVmg5WFZiVVFBQVpHckswV3JWRVFkRkFuWVN2N0EzejU1OWFobTFsUjRDZzNOeklZZVdISHl4UklQVDExV29nejU3NVFOSGhtekJKWXRWUFBqSDcvUE9YUDhlWHFYa0VDRW90dVhoUm05cHFmTjNzelRkZnFXMzRjeGNpYXQ1VTMzdlA3SjEzYWpjcXRQNkZBTUc4dTNyMXFxMWJ0ODdXcmwxcmN5bHgvUm0rTDBOaG9LT2xwWFlzWFdybW1qTkJQVlQrL3R2dmsrdWZUeE1nVDU4K3RRc1hMcmhLVFovLzh2a3RXN2JZNXMyYnA3Mm5heGNWYWhtYk5tMnk2OWV2di9JN1ZxeFlZYnQyN2JMNVJJQmczaWs0VHA4KzdkOE1jeElpYnJTbDh2UFB2a00wdVh5NTFtUnhUWmRrWUtEV2RIR2pMWWxHWE5yYUxIVzFFdkdUcGNZNlUvM3pLWm93ZCs3Y3NiMTc5N3FYSC9UQm9IUDkveDA5ZXRRSFpialgyZGxadjdkbnp4N2J2WHUzRDRyang0Lzdld29JMGVNVlZ3TVNCWXpvdmw1cnZoRWdtSGQ2SSt6Y3VYUE9RcVR5KysrK1g4T1BxcmhoV1M5TmErRWg3cDZ2ZFNoWVdsdHJoNFNSR1A4aWs5ZEFGQUFLaG5Qbnp0bjY5ZXY5dGNzdXFCUW1DZzg1Y2VKRS9kNmhRNGZzMkxGanZneUNnd2NQMXU5THFHbHMyN2JOWHo5eTVJZ3RCRFRrRnJsc2RiaTN0OWVmUDFmSFlPWThmS2VObWhMWjgydlhydmx6cmQzSm50KzRjY09mNjFIbnVpNWEzNU05Zit3KzZYV3UxODJlNi9mS2tIdkRodk1RSWlkUG5xei92dG1TcW5ZUmFoTUtFQjJ1dHFFK0VQOFk3aWtzRkRTNnBoREpEdWRPVVFOUkxhR3JxMnRjQU9nODNGUHRJWHR2NjlhdC92SFNwVXYxYXdwVGhZb09oZEZDUlEwRUMwYVMxTG92MDNTV1YxZU1OVVA4YjNQaEVaNm5JeU8xYS9vN3d0L2lnaU5Sc09nOGhJaTgvZmFrTDY4K2pxbW8rVExSdVpvcTRXZFZZd2xOR1BXUkxGUk5Xd3RUT1h2V0t0OTlaOG5ZZ3JxUi92NXg5NWQrK09HNDh6TGZIejExeXRJdnZqQzhwRnJIbVRObmJNZU9IYlBldHZmOUhtT3pTeFAxS2Z6N3J6Lzh2MTEzSkRyWGNLN21obWpMQmIyUmRmN3BwNVorOXBtbHJ2YVJmdlhWcEsrdldvT2FNYUZmUTZGdytQQmgvL3o4K2ZQKzNyNTkrM3l6UkRXUy9mdjMrNTlUczBUQmNlREFnWEhObjZ5RjFvUnBXZzJrNmdwVWhacE9zc2RGNHh1cXJQY1RWaXkvWWk3RHc4dE9GaHY3bEJkZkUzRjlHd3FJK21oTWUzdnRjQUdpRVppcTVvS0VvZHhKS0RoVXF3aE5FTkdiWG9IUjA5UGpteVRxOTlBUjdqWDJlUlJGN2hwSTh1dXZsbXFTRFp2anpJaUNKUG54UjZ0dTMyNWxwejRTZFp6TzFhaUNyM1dFdFM3cWIzRjlNNmFtUTZpSmhCcUlRa05oNFE1Tk1LdCsrZVdNYW80S2lqQlVteDFWeWQ1VGFPaGU5cnFPMEdmU0tEUnRzajh6bjNJSGlLcm1JNy85Um9ETWxBdVFwZDNkdGJMRG5FcisrdXZsNGpnRnh6Ly9XS0xIeGhCeFIvcnV1N1VhaDZ1UlZMLzVac3EranpKcVRoT0c4Smc1bFJuTm1YbWhCWEwxenRLeFIzV1dxa00xR1pzVGtvYnA3Qjk4WU9uSEgxdjYwVWZqbXo3d0dJVkIrV1JIWVFMMWQyZ3FlOE1TL3RUMWVmand3SVJ5Qjhob0NiNDhlN1pRZHZOa2JQTFloS3RzTTljMUN6WHQ2REJNamkwTlVVNWE2NkpOd0VkSGE0ODZkRTJIcmlsa1hPY25wa1lUQnVVVUZ0Q3A2WUpvVEdVSEVDMTNnTFQwOUJqaVVIWW91dHdCb29sa2lFUFpvZWhvd2dDSVJvQUFpSlk3UUVhLy85NFFoN0pEMFRFUEJFQTBtakFBb2hFZ0FLTGxIOFk5ZTlZUWg3SkQwVFZuUDVCcGR1UEN4Q2c3RkIxTkdBRFJDQkFBMFhJSENMdUx4NlBzVUhUTUF3RVFqU1lNZ0dnRUNJQm8rZWVCM0xwbGlFUFpvZWp5YnlqVTNXMklROW1oNkdqQ0FJaVdQMEQ0Z3FRNGxCa1dnZHdCOHVMYmJ5ZjhiZzFNYi9UVUtRT0tyR256UU1LM3pxZDh6ZVdVVkU2K3dDa25MQUxOKzE2WVAvNFl0OHQ0NHlJeExSekxLdTE5Rnh5cXRWVzNiemVnNkppSkNpQWFvekFBb2hFZ0FLSVJJQUNpRVNBQW9oRWdBS0lSSUFDaUVTQUFvaEVnQUtJUklBQ2lFU0FBb2hFZ0FLSVJJQUNpRVNBQW9oRWdBS0lSSUFDaUVTQUFvdjBQYmQyQm5Vc1MvWTRBQUFBQVNVVk9SSzVDWUlJPVwiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFwiLi91aS5jc3NcIjtcbi8vIGRlZmF1bHQgaW5pdFxuY29uc3Qgc2V0dGluZ3MgPSB7IGxhbmc6IFwiZW5cIiB9O1xuLy8gYWRkIHVpIGluLWVmZmVjdFxuY29uc3QgcGx1Z2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVnaW5cIik7XG5wbHVnaW4uY2xhc3NMaXN0LmFkZChcImVmZmVjdC1pblwiKTtcbnNldFRpbWVvdXQoKCkgPT4gcGx1Z2luLmNsYXNzTGlzdC5yZW1vdmUoXCJlZmZlY3QtaW5cIiksIDYwMCk7XG4vLyBkZWZhdWx0IGRhdGEgZm9yIGNvZGVcbnBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICByYW5nZTogMCxcbiAgICAgICAgbGFuZzogc2V0dGluZ3MubGFuZyxcbiAgICB9LFxufSwgXCIqXCIpO1xuLy8gc291cmNlIHRleHQgZnVuY3Rpb25hbCB1bml0XG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0XCIpO1xuY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJhZ3JhcGhcIik7XG5jb25zdCBkb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvdFwiKTtcbmNvbnN0IGNvbW1hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tYVwiKTtcbmNvbnN0IHNlbWljb2xvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VtaWNvbG9uXCIpO1xuY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwYWNlXCIpO1xuc2V0VGltZW91dCgoKSA9PiB0ZXh0LmZvY3VzKCksIDEwMCk7XG5wYXJhZ3JhcGgub25jbGljayA9ICgpID0+IGFjdGlvbihcInMqXFxucypcIik7XG5kb3Qub25jbGljayA9ICgpID0+IGFjdGlvbihcInMqXFxcXC5zKlwiKTtcbmNvbW1hLm9uY2xpY2sgPSAoKSA9PiBhY3Rpb24oXCJzKixzKlwiKTtcbnNlbWljb2xvbi5vbmNsaWNrID0gKCkgPT4gYWN0aW9uKFwicyo7cypcIik7XG5zcGFjZS5vbmNsaWNrID0gKCkgPT4gYWN0aW9uKFwicyogcypcIik7XG5mdW5jdGlvbiBhY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgbW9kZTogXCJzb3VyY2VcIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICAgICAgICAgICAgY29udGVudDogdGV4dC52YWx1ZSxcbiAgICAgICAgfSxcbiAgICB9LCBcIipcIik7XG59XG4vLyByYW5kb20gZnVuY3Rpb25hbCB1bml0XG5jb25zdCBuYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZXNcIik7XG5jb25zdCBwaG9uZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob25lc1wiKTtcbmNvbnN0IGFkZHJlc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkcmVzc2VzXCIpO1xuY29uc3QgY2l0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXRpZXNcIik7XG5jb25zdCBlbWFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsc1wiKTtcbmNvbnN0IHBhcmFncmFwaHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcmFncmFwaHNcIik7XG5uYW1lcy5vbmNsaWNrID0gKCkgPT4gcmFuZG9tUmFuZ2VBY3Rpb24oXCJuYW1lc1wiLCBuYW1lcyk7XG5waG9uZXMub25jbGljayA9ICgpID0+IHJhbmRvbVJhbmdlQWN0aW9uKFwicGhvbmVzXCIsIHBob25lcyk7XG5hZGRyZXNzZXMub25jbGljayA9ICgpID0+IHJhbmRvbVJhbmdlQWN0aW9uKFwiYWRkcmVzc2VzXCIsIGFkZHJlc3Nlcyk7XG5jaXRpZXMub25jbGljayA9ICgpID0+IHJhbmRvbVJhbmdlQWN0aW9uKFwiY2l0aWVzXCIsIGNpdGllcyk7XG5lbWFpbHMub25jbGljayA9ICgpID0+IHJhbmRvbVJhbmdlQWN0aW9uKFwiZW1haWxzXCIsIGVtYWlscyk7XG5wYXJhZ3JhcGhzLm9uY2xpY2sgPSAoKSA9PiByYW5kb21SYW5nZUFjdGlvbihcInBhcmFncmFwaHNcIiwgcGFyYWdyYXBocyk7XG5mdW5jdGlvbiByYW5kb21SYW5nZUFjdGlvbih0eXBlLCByYW5nZSkge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHJhbmdlOiByYW5nZS52YWx1ZSxcbiAgICAgICAgICAgIHJhbmRvbVR5cGU6IHR5cGUsXG4gICAgICAgICAgICBsYW5nOiBzZXR0aW5ncy5sYW5nLFxuICAgICAgICB9LFxuICAgIH0sIFwiKlwiKTtcbiAgICByYW5nZS52YWx1ZSA9IFwiMFwiO1xufVxuLy8gbGFuZ3VhZ2Ugc3dpdGNoIGZ1bmN0aW9uYWxcbmNvbnN0IHRpdGxlU2Vjb25kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1zZWNvbmRcIik7XG5jb25zdCBidG5OYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLW5hbWVzXCIpO1xuY29uc3QgYnRuUGhvbmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcGhvbmVzXCIpO1xuY29uc3QgYnRuQWRkcmVzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYWRkcmVzc2VzXCIpO1xuY29uc3QgYnRuQ2l0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2l0aWVzXCIpO1xuY29uc3QgYnRuRW1haWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tZW1haWxzXCIpO1xuY29uc3QgYnRuUGFyYWdyYXBocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXBhcmFncmFwaHNcIik7XG5jb25zdCBsYW5nRU4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuXCIpO1xuY29uc3QgbGFuZ1JVID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJydVwiKTtcbmNvbnN0IGxhbmdaSCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiemhcIik7XG5jb25zdCBob3dJdFdvcmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3ctaXQtd29ya3NcIik7XG5jb25zdCBzdXBwb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXBwb3J0XCIpO1xuY29uc3QgaGVscFRleHQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwLXRleHQtMVwiKTtcbmNvbnN0IGhlbHBUZXh0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC10ZXh0LTJcIik7XG5jb25zdCBoZWxwVGV4dDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHAtdGV4dC0zXCIpO1xuY29uc3QgaGVscFRleHQ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwLXRleHQtNFwiKTtcbmNvbnN0IGhlbHBUZXh0NSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC10ZXh0LTVcIik7XG5jb25zdCBoZWxwSGVhZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHAtaGVhZC0xXCIpO1xuY29uc3QgaGVscEhlYWQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwLWhlYWQtMlwiKTtcbmNvbnN0IGNsb3NlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VyXCIpO1xubGFuZ0VOLm9uY2xpY2sgPSAoKSA9PiBsYW5nU3dpdGNoZXIoXCJlblwiKTtcbmxhbmdSVS5vbmNsaWNrID0gKCkgPT4gbGFuZ1N3aXRjaGVyKFwicnVcIik7XG5sYW5nWkgub25jbGljayA9ICgpID0+IGxhbmdTd2l0Y2hlcihcInpoX0NOXCIpO1xuZnVuY3Rpb24gbGFuZ1N3aXRjaGVyKGxhbmcpIHtcbiAgICBzZXR0aW5ncy5sYW5nID0gbGFuZztcbiAgICBwbHVnaW4uY2xhc3NMaXN0LmFkZChcImVmZmVjdC1sYW5nLXN3aXRjaFwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHBsdWdpbi5jbGFzc0xpc3QucmVtb3ZlKFwiZWZmZWN0LWxhbmctc3dpdGNoXCIpLCAzMDApO1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGxhbmc6IHNldHRpbmdzLmxhbmcsXG4gICAgICAgIH0sXG4gICAgfSwgXCIqXCIpO1xuICAgIGlmIChsYW5nID09PSBcInJ1XCIpIHtcbiAgICAgICAgdGV4dC5wbGFjZWhvbGRlciA9IFwi0JLQsNGIINGC0LXQutGB0YIg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0YHQu9C+0ZHQslwiO1xuICAgICAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gXCLQoNCw0LfQtNC10LvQuNGC0Ywg0L/QviDQsNCx0LfQsNGG0LDQvFwiO1xuICAgICAgICBjb21tYS5pbm5lckhUTUwgPSBcItCf0L7RgdC70LUg0LfQsNC/0Y/RgtGL0YVcIjtcbiAgICAgICAgZG90LmlubmVySFRNTCA9IFwi0KLQvtGH0LXQulwiO1xuICAgICAgICBzZW1pY29sb24uaW5uZXJIVE1MID0gXCLQotC+0YfQtdC6INGBINC30LDQv9GP0YLQvtC5XCI7XG4gICAgICAgIHNwYWNlLmlubmVySFRNTCA9IFwi0J/RgNC+0LHQtdC70L7QslwiO1xuICAgICAgICB0aXRsZVNlY29uZC5pbm5lclRleHQgPSBcItC40LvQuCDRgdC+0LfQtNCw0YLRjCDQuNC3INGB0LvRg9GH0LDQudC90YvRhVwiO1xuICAgICAgICBidG5OYW1lcy5pbm5lckhUTUwgPSBcItCY0LzRkdC9XCI7XG4gICAgICAgIGJ0blBob25lcy5pbm5lckhUTUwgPSBcItCi0LXQu9C10YTQvtC90L3Ri9GFINC90L7QvNC10YDQvtCyXCI7XG4gICAgICAgIGJ0bkNpdGllcy5pbm5lckhUTUwgPSBcItCd0LDQt9Cy0LDQvdC40Lkg0LPQvtGA0L7QtNC+0LJcIjtcbiAgICAgICAgYnRuQWRkcmVzc2VzLmlubmVySFRNTCA9IFwi0JDQtNGA0LXRgdC+0LJcIjtcbiAgICAgICAgYnRuRW1haWxzLmlubmVySFRNTCA9IFwi0K3QvNC10LnQu9C+0LJcIjtcbiAgICAgICAgYnRuUGFyYWdyYXBocy5pbm5lckhUTUwgPSBcItCf0LDRgNCw0LPRgNCw0YTQvtCyXCI7XG4gICAgICAgIGhvd0l0V29ya3MuaW5uZXJIVE1MID0gXCLQn9C+0LzQvtGJ0YxcIjtcbiAgICAgICAgc3VwcG9ydC5pbm5lclRleHQgPSBcItCf0L7QtNC00LXRgNC20LDRgtGMINCw0LLRgtC+0YDQsFwiO1xuICAgICAgICBzdXBwb3J0LmhyZWYgPSBcImh0dHBzOi8vd3d3LnRpbmtvZmYucnUvc2wvM3NiZlg0NWRWV2pcIjtcbiAgICAgICAgaGVscEhlYWQxLmlubmVyVGV4dCA9IFwi0KHQvtC30LTQsNGC0Ywg0LrQvtC/0LjQuCDQvtCx0YrQtdC60YLQsFwiO1xuICAgICAgICBoZWxwSGVhZDIuaW5uZXJUZXh0ID0gXCLQktGB0YLQsNCy0LjRgtGMINC60L7Qv9C40Lgg0LIg0LLRi9Cx0YDQsNC90L3Ri9C5INGE0YDQtdC50LxcIjtcbiAgICAgICAgaGVscFRleHQxLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBcItCe0LrQvdC+INC/0LvQsNCz0LjQvdCwINCy0YHQtdCz0L4g0LvQuNGI0Ywg0YTQvtGA0LzQuNGA0YPQtdGCINGC0LXQutGB0YIg4oCUINCy0Ysg0LzQvtC20LXRgtC1INGA0LDQt9C00LXQu9C40YLRjCDRgdCy0L7QuSDRgtC10LrRgdGCINC/0L4g0L7QtNC90L7QvNGDINC40Lcg0L/RgNCw0LLQuNC7INC40LvQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LPQtdC90LXRgNC40YDRg9C10LzRi9C1INC00LDQvdC90YvQtS5cIjtcbiAgICAgICAgaGVscFRleHQyLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBcItCg0LXQt9GD0LvRjNGC0LDRgiDQsdGD0LTQtdGCINC30LDQstC40YHQtdGC0Ywg0L7RgiDRgtC+0LPQviwg0YfRgtC+INCy0YvQsdGA0LDQvdC+INCyINC80LDQutC10YLQtS5cIjtcbiAgICAgICAgaGVscFRleHQzLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBcItCV0YHQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INGB0L7Qt9C00LDRgtGMINC60L7Qv9C40Lgg0L7QsdGK0LXQutGC0LAg4oCUINCy0YvQsdC10YDQuNGC0LUg0YLQtdC60YHRgtC+0LLRi9C5INGB0LvQvtC5INCy0L3Rg9GC0YDQuCDQvdC10LPQviDQuCDQv9GA0LjQvNC10L3QuNGC0LUg0L7QtNC90YMg0LjQtyDRhNGD0L3QutGG0LjQuSDQv9C70LDQs9C40L3QsC5cIjtcbiAgICAgICAgaGVscFRleHQ0LmlubmVyVGV4dCA9XG4gICAgICAgICAgICBcItCV0YHQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INCy0YHRgtCw0LLQuNGC0Ywg0LPQvtGC0L7QstGL0LUg0LrQvtC/0LjQuCDQvtCx0YrQtdC60YLQsCDQsiDQvtC/0YDQtdC00LXQu9GR0L3QvdGL0Lkg0YTRgNC10LnQvCwg0YLQviDQstGL0LHQtdGA0LjRgtC1INGC0LDQutC20LUg0YTRgNC10LnQvCDQtNC70Y8g0LLRgdGC0LDQstC60LguXCI7XG4gICAgICAgIGhlbHBUZXh0NS5pbm5lclRleHQgPVxuICAgICAgICAgICAgXCLQktGLINC80L7QttC10YLQtSDQvdC1INCy0YvQsdC40YDQsNGC0Ywg0L7QsdGK0LXQutGCINC00LvRjyDQutC+0L/QuNGA0L7QstCw0L3QuNGPINC4INGE0YDQtdC50Lwg0LTQu9GPINCy0YHRgtCw0LLQutC4IOKAlCDQsiDQv9C10YDQstC+0Lwg0YHQu9GD0YfQsNC1INGC0LXQutGB0YIg0LHRg9C00LXRgiDQstGB0YLQsNCy0LvQtdC9INCyINC80LDQutC10YIg0LIg0LLQuNC00LUg0YDQsNC30LTQtdC70ZHQvdC90YvRhSDRgtC10LrRgdGC0L7QstGL0YUg0YHQu9C+0ZHQsi4g0JLQviDQstGC0L7RgNC+0Lwg4oCUINGC0LXQutGB0YIg0LjQu9C4INC60L7Qv9C40Lgg0L7QsdGK0LXQutGC0LAg0LHRg9C00YPRgiDRg9C/0LDQutC+0LLQsNC90Ysg0LIg0YHQv9C10YbQuNCw0LvRjNC90YvQuSDRhNGA0LXQudC8LlwiO1xuICAgICAgICBjbG9zZXIuaW5uZXJUZXh0ID0gXCLQl9Cw0LrRgNGL0YLRjFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChsYW5nID09PSBcInpoX0NOXCIpIHtcbiAgICAgICAgdGV4dC5wbGFjZWhvbGRlciA9IFwi5oKo5oOz6KaB5YiH5YiG55qE5paH5pysXCI7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBcIuWwhuaWh+Wtl+WIhuautVwiO1xuICAgICAgICBjb21tYS5pbm5lckhUTUwgPSBcIumAmui/h+mAl+WPt+WIhuautVwiO1xuICAgICAgICBkb3QuaW5uZXJIVE1MID0gXCLpgJrov4flj6Xlj7fliIbmrrVcIjtcbiAgICAgICAgc2VtaWNvbG9uLmlubmVySFRNTCA9IFwi6YCa6L+H5YiG5Y+35YiG5q61XCI7XG4gICAgICAgIHNwYWNlLmlubmVySFRNTCA9IFwi6YCa6L+H56m65qC85YiG5q61XCI7XG4gICAgICAgIHRpdGxlU2Vjb25kLmlubmVyVGV4dCA9IFwi5Yib5bu65paH5a2XXCI7XG4gICAgICAgIGJ0bk5hbWVzLmlubmVySFRNTCA9IFwi6ZqP5py65ZCN5a2XXCI7XG4gICAgICAgIGJ0blBob25lcy5pbm5lckhUTUwgPSBcIumaj+acuueUteivneWPt1wiO1xuICAgICAgICBidG5DaXRpZXMuaW5uZXJIVE1MID0gXCLpmo/mnLrln47luILlkI3np7BcIjtcbiAgICAgICAgYnRuQWRkcmVzc2VzLmlubmVySFRNTCA9IFwi6ZqP5py65Zyw5Z2AXCI7XG4gICAgICAgIGJ0bkVtYWlscy5pbm5lckhUTUwgPSBcIumaj+acuueUteWtkOmCrueusVwiO1xuICAgICAgICBidG5QYXJhZ3JhcGhzLmlubmVySFRNTCA9IFwi6ZqP5py654mH5q61XCI7XG4gICAgICAgIGhvd0l0V29ya3MuaW5uZXJUZXh0ID0gXCLluK7liqlcIjtcbiAgICAgICAgc3VwcG9ydC5pbm5lclRleHQgPSBcIuiBlOezu+aIkeS7rFwiO1xuICAgICAgICBzdXBwb3J0LmhyZWYgPSBcImh0dHBzOi8vd3d3LmJ1eW1lYWNvZmZlZS5jb20vbWlsc2luZXJ5XCI7XG4gICAgICAgIGhlbHBIZWFkMS5pbm5lclRleHQgPSBcIuWIm+W7uuWvueixoeWJr+acrFwiO1xuICAgICAgICBoZWxwSGVhZDIuaW5uZXJUZXh0ID0gXCLlsIblia/mnKzmj5LlhaXmiYDpgInmoYbmnrZcIjtcbiAgICAgICAgaGVscFRleHQxLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBcIuaPkuS7tueql+WPo+S7heeUn+aIkOaWh+acrO+8jOaCqOWPr+S7peaMieinhOWumue7huWImeWIh+WIhuiHquW3seeahOaWh+eroOaIluS9v+eUqOeUn+aIkOeahOaVsOaNruOAglwiO1xuICAgICAgICBoZWxwVGV4dDIuaW5uZXJUZXh0ID0gXCLlnKjmqKHniYjkuK3nmoTpgInmi6nlhrPlrprmgqjnmoTnu5PmnpzjgIJcIjtcbiAgICAgICAgaGVscFRleHQzLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBcIuWmguaenOimgeWIm+W7uuWvueixoeWJr+acrO+8jOivt+mAieaLqeaJgOe7meaWh+acrOWxguW5tuS9v+eUqOS4gOS4quebuOW6lOaPkuS7tuWKn+iDveOAglwiO1xuICAgICAgICBoZWxwVGV4dDQuaW5uZXJUZXh0ID0gXCLlpoLmnpzopoHlnKjnibnlrprmoYbmnrbkuK3nspjotLTnjrDmiJDlia/mnKzvvIzor7flkIzml7bpgInmi6nmoYbmnrbjgIJcIjtcbiAgICAgICAgaGVscFRleHQ1LmlubmVyVGV4dCA9XG4gICAgICAgICAgICBcIuaCqOWPr+S7peS4jemAieaLqeimgeWkjeWItueymOi0tOeahOWvueixoeaIluS4jemAieaLqeeJueWumuahhuaetu+8jOesrOS4gOenjeaDheWGte+8jOaWh+acrOWwhuS7peWIhuWlveeahOW9ouW8j+eymOi0tOWIsOaooeeJiOS4reOAgiDnrKzkuoznp43mg4XlhrXvvIzmlofmnKzmiJblia/mnKzlsIbljIXoo4XlnKjnibnnp43moYbmnrbkuK3jgIJcIjtcbiAgICAgICAgY2xvc2VyLmlubmVyVGV4dCA9IFwi54m55YaZXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0ZXh0LnBsYWNlaG9sZGVyID0gXCJZb3VyIHRleHQgZm9yIGNyZWF0aW5nIGxheWVyc1wiO1xuICAgICAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gXCJEaXZpZGUgdGhlIHRleHQgaW50byBwYXJhZ3JhcGhzXCI7XG4gICAgICAgIGNvbW1hLmlubmVySFRNTCA9IFwiQWZ0ZXIgdGhlIGNvbW1hXCI7XG4gICAgICAgIGRvdC5pbm5lckhUTUwgPSBcIkRvdFwiO1xuICAgICAgICBzZW1pY29sb24uaW5uZXJIVE1MID0gXCJTZW1pY29sb25cIjtcbiAgICAgICAgc3BhY2UuaW5uZXJIVE1MID0gXCJTcGFjZXNcIjtcbiAgICAgICAgdGl0bGVTZWNvbmQuaW5uZXJUZXh0ID0gXCJvciBjcmVhdGUgZnJvbSByYW5kb21cIjtcbiAgICAgICAgYnRuTmFtZXMuaW5uZXJIVE1MID0gXCJOYW1lc1wiO1xuICAgICAgICBidG5QaG9uZXMuaW5uZXJIVE1MID0gXCJQaG9uZSBudW1iZXJzXCI7XG4gICAgICAgIGJ0bkNpdGllcy5pbm5lckhUTUwgPSBcIkNpdHkgbmFtZXNcIjtcbiAgICAgICAgYnRuQWRkcmVzc2VzLmlubmVySFRNTCA9IFwiQWRkcmVzc2VzXCI7XG4gICAgICAgIGJ0bkVtYWlscy5pbm5lckhUTUwgPSBcIkUtbWFpbCBhZGRyZXNzZXNcIjtcbiAgICAgICAgYnRuUGFyYWdyYXBocy5pbm5lckhUTUwgPSBcIlBhcmFncmFwaHNcIjtcbiAgICAgICAgaG93SXRXb3Jrcy5pbm5lclRleHQgPSBcIkhvdyBpdCB3b3Jrc1wiO1xuICAgICAgICBzdXBwb3J0LmlubmVyVGV4dCA9IFwiU3VwcG9ydCB0aGUgYXV0aG9yXCI7XG4gICAgICAgIHN1cHBvcnQuaHJlZiA9IFwiaHR0cHM6Ly93d3cuYnV5bWVhY29mZmVlLmNvbS9taWxzaW5lcnlcIjtcbiAgICAgICAgaGVscEhlYWQxLmlubmVyVGV4dCA9IFwiQ3JlYXRlIGNvcGllcyBvZiBhbiBvYmplY3RcIjtcbiAgICAgICAgaGVscEhlYWQyLmlubmVyVGV4dCA9IFwiSW5zZXJ0IGNvcGllcyBpbnRvIHRoZSBzZWxlY3RlZCBmcmFtZVwiO1xuICAgICAgICBoZWxwVGV4dDEuaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIFwiVGhlIHBsdWdpbiB3aW5kb3cgb25seSBnZW5lcmF0ZXMgdGV4dCDigJQgeW91IGNhbiBzcGxpdCB5b3VyIHRleHQgYWNjb3JkaW5nIHRvIG9uZSBvZiB0aGUgcnVsZXMgb3IgdXNlIHRoZSBnZW5lcmF0ZWQgZGF0YS5cIjtcbiAgICAgICAgaGVscFRleHQyLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBcIlRoZSByZXN1bHQgd2lsbCBkZXBlbmQgb24gd2hhdCBpcyBzZWxlY3RlZCBpbiB0aGUgbGF5b3V0LlwiO1xuICAgICAgICBoZWxwVGV4dDMuaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIFwiSWYgeW91IHdhbnQgdG8gY3JlYXRlIGNvcGllcyBvZiBhbiBvYmplY3QsIHNlbGVjdCB0aGUgdGV4dCBsYXllciBpbnNpZGUgaXQgYW5kIHVzZSBvbmUgb2YgdGhlIHBsdWdpbiBmdW5jdGlvbnMuXCI7XG4gICAgICAgIGhlbHBUZXh0NC5pbm5lclRleHQgPVxuICAgICAgICAgICAgXCJJZiB5b3Ugd2FudCB0byBpbnNlcnQgcmVhZHktbWFkZSBjb3BpZXMgb2YgYW4gb2JqZWN0IGluIGEgc3BlY2lmaWMgZnJhbWUsIHNlbGVjdCB0aGUgZnJhbWUgdG8gaW5zZXJ0IGFzIHdlbGwuXCI7XG4gICAgICAgIGhlbHBUZXh0NS5pbm5lclRleHQgPVxuICAgICAgICAgICAgXCJZb3UgY2FuIGNob29zZSBub3QgdG8gc2VsZWN0IHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29weSBhbmQgZnJhbWUgZm9yIHBhc3RlIOKAlCBpbiB0aGUgZmlyc3QgY2FzZSB0aGUgdGV4dCB3aWxsIGJlIHBhc3RlZCB0byB0aGUgbGF5b3V0IGluIHRoZSBmb3JtIG9mIGRlbGltaXRlZCB0ZXh0IGxheWVycy5cIjtcbiAgICAgICAgY2xvc2VyLmlubmVyVGV4dCA9IFwiQ2xvc2VcIjtcbiAgICB9XG59XG4vLyBoZWxwIGZ1bmN0aW9uYWxcbmNvbnN0IGhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHBcIik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIilcbiAgICAgICAgaGVscC5jbGFzc0xpc3QucmVtb3ZlKFwicGx1Z2luX19oZWxwX2FjdGl2ZVwiKTtcbn0pO1xuaG93SXRXb3Jrcy5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGhlbHAuY2xhc3NMaXN0LmFkZChcInBsdWdpbl9faGVscF9hY3RpdmVcIik7XG59O1xuY2xvc2VyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgaGVscC5jbGFzc0xpc3QucmVtb3ZlKFwicGx1Z2luX19oZWxwX2FjdGl2ZVwiKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9