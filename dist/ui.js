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
exports.push([module.i, ":root {\n  --color-accent: #FF1A1A;\n\n  --color-bg: #fff;\n  --color-pad-hard: #333;\n  --color-pad-soft: #f1f1f1;\n\n  --color-text-main: #333;\n  --color-text-invert: #fff;\n  --color-text-optional: #b6b6b6;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  color: var(--color-text-main);\n  height: 100%;\n  overflow: hidden;\n  width: 100%;\n}\n\nbody,\nbutton,\ntextarea {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n}\n\nbutton,\nh3,\np,\na,\nsmall {\n  user-select: none;\n}\n\nh3,\np {\n  font-size: 11px;\n}\n\nh3 {\n  font-weight: 400;\n  color: var(--color-text-optional);\n  height: 16px;\n}\n\nsmall {\n  font-size: 10px;\n}\n\na:focus,\nbutton:focus,\ntextarea:focus {\n  outline: none;\n}\n\na {\n  cursor: default;\n  color: var(--color-text-main);\n  text-decoration: none;\n  transition: all 150ms ease;\n}\n\na:hover{\n  color: var(--color-accent);\n  transition: all 150ms ease;\n}\n\nbutton {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  color: var(--color-text-main);\n  font-size: 11px;\n  font-weight: 600;\n  flex-grow: 1;\n  height: 21px;\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n}\n\nhr {\n  background-color: var(--color-pad-soft);\n  border: none;\n  height: 1px;\n  width: 100%;\n}\n\ntextarea {\n  background-color: var(--color-bg);\n  border: none;\n  border-bottom: 1px solid var(--color-pad-soft);\n  color: var(--color-text-main);\n  font-size: 11px;\n  height: 48px;\n  padding: 0 8px 0 0;\n  resize: none;\n  transition: all 150ms ease;\n}\n\ntextarea::-webkit-scrollbar {\n  display: none;\n}\n\ntextarea::placeholder {\n  color: var(--color-text-optional);\n  font-size: 11px;\n}\n\ntextarea:focus,\ntextarea:hover {\n  cursor: default;\n  border-color: var(--color-accent);\n  transition: all 150ms ease;\n}\n\ninput[type=\"radio\"] {\n\tdisplay: none;\n}\n\ninput[type=\"range\"] {\n  -webkit-appearance: none;\n  vertical-align: middle;\n  outline: none;\n  border: none;\n  padding: 0;\n  background: none;\n  width: 100%;\n}\n\n\n\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n  background-color: var(--color-pad-soft);\n  border: 6px solid var(--color-bg);\n  height: 16px;\n  border-radius: 8px;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border-radius: 100%;\n  background-color: var(--color-accent);\n  height: 8px;\n  width: 8px;\n  margin-top: -2px;\n}\n\noutput {\n  font-size: 11px;\n}\n\ninput[type=\"range\"]:active::-webkit-slider-thumb {\n  outline: none;\n}\n\n.plugin {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 16px;\n}\n\n.plugin__source-text,\n.plugin__random-generation {\n  display: flex;\n  flex-direction: column;\n  margin: 0 16px 16px 16px;\n}\n\n.plugin__title {\n  margin: 0 0 4px 0;\n}\n\n.plugin__textbox {\n  margin: 0 0 8px 0;\n}\n\n.plugin__source-button,\n.plugin__random-button-container .plugin__random-button {\n  transition: all 150ms ease;\n}\n\n.plugin__source-button:hover,\n.plugin__help-closer:hover {\n  color: var(--color-accent);\n  transition: all 150ms ease;\n}\n\n.plugin__random-button-container {\n  display: flex;\n}\n\n.plugin__random-button {\n  width: 152px;\n}\n\n.plugin__range-container {\n  display: flex;\n  opacity: 0;\n  align-items: center;\n  transition: all 150ms ease;\n}\n\n.plugin__random-button-container:hover .plugin__range-container {\n  opacity: 1;\n  transition: all 150ms ease;\n}\n\n.plugin__range-container input {\n  margin: 0 8px 0 0;\n}\n\n.plugin__range-container output {\n  width: 16px;\n}\n\n.plugin__switcher {\n  display: flex;\n  margin: 0 0 16px 0;\n}\n\n.plugin__toggle {\n  height: 30px;\n  padding: 8px 15px;\n  border-radius: 2px;\n  margin: 0 2px 0 0;\n  transition: all 150ms ease;\n}\n\n.plugin__control-panel {\n  height: 24px;\n  margin: 4px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.plugin__info {\n  display: flex;\n  align-items: center;\n}\n\n.plugin__info small {\n  margin: 0 16px 0 0;\n}\n\n.plugin__info small:last-child {\n  margin: 0;\n}\n\n.plugin__lang {\n  display: flex;\n  /* margin: 0 16px 0 0; */\n}\n\n.plugin__lang-toggle {\n  margin: 0 4px 0 0;\n}\n\n.plugin__lang-toggle:last-child {\n  margin: 0;\n}\n\ninput[type=\"radio\"] + .plugin__lang-toggle {\n  color: var(--color-text-main);\n  transition: all 150ms ease;\n}\n\ninput[type=\"radio\"]:hover + .plugin__lang-toggle {\n  color: var(--color-accent);\n  transition: all 150ms ease;\n}\n\ninput[type=\"radio\"]:checked + .plugin__lang-toggle {\n  color: var(--color-text-optional);\n  pointer-events: none;\n  transition: all 150ms ease;\n}\n\n.plugin__help {\n  opacity: 0;\n  transform: scale(0.9);\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  top: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  transition: all 150ms ease;\n  z-index: -1;\n}\n\n.plugin__help_active {\n  z-index: 1;\n  opacity: 1;\n  transform: scale(1);\n  background-color: var(--color-bg);\n  transition: all 150ms ease;\n}\n\n.plugin__help-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  padding: 16px 16px 0 16px;\n}\n\n.plugin__help-content::-webkit-scrollbar {\n  display: none;\n}\n\n.plugin__help-section {\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 16px 0;\n}\n\n.plugin__help-text {\n  margin: 0 0 8px 0;\n}\n\n.plugin__help-text:last-child {\n  margin: 0;\n}\n\n.plugin__help-pic {\n  height: 102px;\n  width: 272px;\n  border-radius: 8px;\n}\n\n.plugin__help-pic_1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.plugin__help-pic_2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.plugin__help-gradient {\n  content: \" \";\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  min-height: 24px;\n  background: linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);\n}\n\n.plugin__help-bottom-panel {\n  display: flex;\n  place-items: center;\n  height: 40px;\n}\n\n.plugin__help-closer {\n  margin: 0 0 0 16px;;\n}\n\n/* effects  */\n.effect-in {\n  animation: effect-in 300ms ease;\n}\n\n.effect-lang-switch {\n  animation: effect-lang-switch 300ms;\n}\n\n@keyframes effect-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes effect-lang-switch {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(8px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n", ""]);
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
setTimeout(() => plugin.classList.remove("effect-in"), 300);
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
setTimeout(() => text.focus(), 100);
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
        helpText1.innerText = "Окно плагина всего лишь формирует текст — вы можете разделить свой текст по одному из правил или использовать генерируемые данные.";
        helpText2.innerText = "Результат будет зависеть от того, что выбрано в макете.";
        helpText3.innerText = "Если вы хотите создать копии объекта — выберите текстовый слой внутри него и примените одну из функций плагина.";
        helpText4.innerText = "Если вы хотите вставить готовые копии объекта в определённый фрейм, то выберите также фрейм для вставки.";
        helpText5.innerText = "Вы можете не выбирать объект для копирования и фрейм для вставки — в первом случае текст будет вставлен в макет в виде разделённых текстовых слоёв. Во втором — текст или копии объекта будут упакованы в специальный фрейм.";
        closer.innerText = "Закрыть";
    }
    else if (lang === "zh_CN") {
        text.placeholder = "按规则切片的源文本";
        paragraph.innerHTML = "拆分段落后的文本";
        comma.innerHTML = "逗号";
        dot.innerHTML = "点";
        semicolon.innerHTML = "分号";
        titleSecond.innerText = "从随机创建";
        btnNames.innerHTML = "Имён";
        btnPhones.innerHTML = "Телефонных номеров";
        btnCities.innerHTML = "Названий городов";
        btnAddresses.innerHTML = "Адресов";
        btnEmails.innerHTML = "Эмейлов";
        btnParagraphs.innerHTML = "Параграфов";
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
        closer.innerText = "关闭";
    }
    else {
        text.placeholder = "Your text for creating layers";
        paragraph.innerHTML = "Divide the text into paragraphs";
        comma.innerHTML = "After the comma";
        dot.innerHTML = "Dot";
        semicolon.innerHTML = "Semicolon";
        titleSecond.innerText = "or create from random";
        btnNames.innerHTML = "Имён";
        btnPhones.innerHTML = "Телефонных номеров";
        btnCities.innerHTML = "Названий городов";
        btnAddresses.innerHTML = "Адресов";
        btnEmails.innerHTML = "Эмейлов";
        btnParagraphs.innerHTML = "Параграфов";
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
        closer.innerText = "Close";
    }
}
// help functional
const help = document.getElementById("help");
howItWorks.onclick = () => {
    help.classList.add("plugin__help_active");
};
closer.onclick = () => {
    help.classList.remove("plugin__help_active");
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy8xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzLzIucG5nIiwid2VicGFjazovLy8uL3NyYy91aS5jc3M/M2I5NyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InVpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdWkudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vaW1hZ2VzLzEucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vaW1hZ2VzLzIucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLWFjY2VudDogI0ZGMUExQTtcXG5cXG4gIC0tY29sb3ItYmc6ICNmZmY7XFxuICAtLWNvbG9yLXBhZC1oYXJkOiAjMzMzO1xcbiAgLS1jb2xvci1wYWQtc29mdDogI2YxZjFmMTtcXG5cXG4gIC0tY29sb3ItdGV4dC1tYWluOiAjMzMzO1xcbiAgLS1jb2xvci10ZXh0LWludmVydDogI2ZmZjtcXG4gIC0tY29sb3ItdGV4dC1vcHRpb25hbDogI2I2YjZiNjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1haW4pO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuYnV0dG9uLFxcbmgzLFxcbnAsXFxuYSxcXG5zbWFsbCB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaDMsXFxucCB7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1vcHRpb25hbCk7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuYTpmb2N1cyxcXG5idXR0b246Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tYWluKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xcbn1cXG5cXG5hOmhvdmVye1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1haW4pO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGhlaWdodDogMjFweDtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXBhZC1zb2Z0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wYWQtc29mdCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tYWluKTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIHBhZGRpbmc6IDAgOHB4IDAgMDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xcbn1cXG5cXG50ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW9wdGlvbmFsKTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMsXFxudGV4dGFyZWE6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYWQtc29mdCk7XFxuICBib3JkZXI6IDZweCBzb2xpZCB2YXIoLS1jb2xvci1iZyk7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbiAgaGVpZ2h0OiA4cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgbWFyZ2luLXRvcDogLTJweDtcXG59XFxuXFxub3V0cHV0IHtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTphY3RpdmU6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wbHVnaW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXRvcDogMTZweDtcXG59XFxuXFxuLnBsdWdpbl9fc291cmNlLXRleHQsXFxuLnBsdWdpbl9fcmFuZG9tLWdlbmVyYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMTZweCAxNnB4IDE2cHg7XFxufVxcblxcbi5wbHVnaW5fX3RpdGxlIHtcXG4gIG1hcmdpbjogMCAwIDRweCAwO1xcbn1cXG5cXG4ucGx1Z2luX190ZXh0Ym94IHtcXG4gIG1hcmdpbjogMCAwIDhweCAwO1xcbn1cXG5cXG4ucGx1Z2luX19zb3VyY2UtYnV0dG9uLFxcbi5wbHVnaW5fX3JhbmRvbS1idXR0b24tY29udGFpbmVyIC5wbHVnaW5fX3JhbmRvbS1idXR0b24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxufVxcblxcbi5wbHVnaW5fX3NvdXJjZS1idXR0b246aG92ZXIsXFxuLnBsdWdpbl9faGVscC1jbG9zZXI6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcXG59XFxuXFxuLnBsdWdpbl9fcmFuZG9tLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnBsdWdpbl9fcmFuZG9tLWJ1dHRvbiB7XFxuICB3aWR0aDogMTUycHg7XFxufVxcblxcbi5wbHVnaW5fX3JhbmdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3BhY2l0eTogMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcXG59XFxuXFxuLnBsdWdpbl9fcmFuZG9tLWJ1dHRvbi1jb250YWluZXI6aG92ZXIgLnBsdWdpbl9fcmFuZ2UtY29udGFpbmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcXG59XFxuXFxuLnBsdWdpbl9fcmFuZ2UtY29udGFpbmVyIGlucHV0IHtcXG4gIG1hcmdpbjogMCA4cHggMCAwO1xcbn1cXG5cXG4ucGx1Z2luX19yYW5nZS1jb250YWluZXIgb3V0cHV0IHtcXG4gIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG4ucGx1Z2luX19zd2l0Y2hlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwIDAgMTZweCAwO1xcbn1cXG5cXG4ucGx1Z2luX190b2dnbGUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBtYXJnaW46IDAgMnB4IDAgMDtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xcbn1cXG5cXG4ucGx1Z2luX19jb250cm9sLXBhbmVsIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIG1hcmdpbjogNHB4IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsdWdpbl9faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsdWdpbl9faW5mbyBzbWFsbCB7XFxuICBtYXJnaW46IDAgMTZweCAwIDA7XFxufVxcblxcbi5wbHVnaW5fX2luZm8gc21hbGw6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wbHVnaW5fX2xhbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG1hcmdpbjogMCAxNnB4IDAgMDsgKi9cXG59XFxuXFxuLnBsdWdpbl9fbGFuZy10b2dnbGUge1xcbiAgbWFyZ2luOiAwIDRweCAwIDA7XFxufVxcblxcbi5wbHVnaW5fX2xhbmctdG9nZ2xlOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdICsgLnBsdWdpbl9fbGFuZy10b2dnbGUge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbWFpbik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpob3ZlciArIC5wbHVnaW5fX2xhbmctdG9nZ2xlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIC5wbHVnaW5fX2xhbmctdG9nZ2xlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW9wdGlvbmFsKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnBsdWdpbl9faGVscF9hY3RpdmUge1xcbiAgei1pbmRleDogMTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMTZweCAxNnB4IDAgMTZweDtcXG59XFxuXFxuLnBsdWdpbl9faGVscC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMCAxNnB4IDA7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtdGV4dCB7XFxuICBtYXJnaW46IDAgMCA4cHggMDtcXG59XFxuXFxuLnBsdWdpbl9faGVscC10ZXh0Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwLXBpYyB7XFxuICBoZWlnaHQ6IDEwMnB4O1xcbiAgd2lkdGg6IDI3MnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucGx1Z2luX19oZWxwLXBpY18xIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtcGljXzIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLnBsdWdpbl9faGVscC1ncmFkaWVudCB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI0ZGRkZGRiAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcXG59XFxuXFxuLnBsdWdpbl9faGVscC1ib3R0b20tcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5wbHVnaW5fX2hlbHAtY2xvc2VyIHtcXG4gIG1hcmdpbjogMCAwIDAgMTZweDs7XFxufVxcblxcbi8qIGVmZmVjdHMgICovXFxuLmVmZmVjdC1pbiB7XFxuICBhbmltYXRpb246IGVmZmVjdC1pbiAzMDBtcyBlYXNlO1xcbn1cXG5cXG4uZWZmZWN0LWxhbmctc3dpdGNoIHtcXG4gIGFuaW1hdGlvbjogZWZmZWN0LWxhbmctc3dpdGNoIDMwMG1zO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGVmZmVjdC1pbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBlZmZlY3QtbGFuZy1zd2l0Y2gge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICAyMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFSQUFBQUJtQ0FZQUFBQURCczU5QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQWdBU1VSQlZIZ0I3ZDI3YnhSWEZNZnhNK1psaDRkbEMvTk1RQW9DbEJRUTNKQWlFbEs2VUNMeGFLaWc0OStnb1lNQ0tpaWdnNElpQlZXS2dOSzRBWUdVQXBBc0lTSmpDTEt4TWJZeDJKUDd1K3ZyakIzV2hET0R2Y3QrUDlKb2QyYTB1M2huK2UyNVp4NmJUVTFONVFZQURtMEdBRTRFQ0FBM0FnU0FHd0VDd0kwQUFlQkdnQUJ3STBBQXVCRWdBTndJRUFCdUJBZ0FOd0lFZ0JzQkFzQ05BQUhnUm9BQWNDTkFBTGdSSUFEY0NCQUFiZ1FJQURjQ0JJQWJBUUxBalFBQjRFYUFBSEFqUUFDNEVTQUEzQWdRQUc0RUNBQTNBZ1NBR3dFQ3dJMEFBZUJHZ0FCd1cya1ZlL1BtalkyTWpNVHAzYnQzaHVYWDN0NXVIUjBkdG5uelpsdTllclVCVmNtbXBxWnlxOEQwOUxROWYvN2Nob2FHcktlbng3cTd1MjNWcWxXRzVUYzVPV25qNCtOeCszUjJkc1lnV2JGaWhRRmxWUklnQ28vKy92NzRUYmR0MnpZK25BMHFoZnpZMkpqdDJyV0w3WVRTS2dtUWdZR0JlS3Z3UU9ONyt2UnBEQSsyRjhvcTNVUU5BUlQ3SFNxTDBSd1VITVBEdzdFU0Fjb29IU0FxaVJsVE54ZHRxNDBiTjlybzZLZ0JaWlFPRURYbzFPRkhjK25xNmlKQVVGcnBBSm1ZbUNCQW1wQjI1MnI0Q1pUQmdXUUEzQWdRQUc0RUNBQzN5ZzlsQjVyV3lJaGxmWDJXRFE3cStBU3p0Mjh0QzVPbFNjdldycldaM2w3TGYvbkZRQVVDekdtN2Q4K3k4WEd6Tld2VVpZNjN1ZTZuU2N2R3hxenR0OThzR3hveVVJRUFOWk9UbHMvTVdLYWdXRUNIYW1jTEYvYjNtM1YzVzZzalFORGFSa2V0N2RkZkxWTWdQSDVjcTBBbUptS2dhSXBEbUN5em1lKy9OL3ZoaDM4Zng0R1RFUUdDbHBiZHZtMzI4bVVZdjRUUi9GZGYvYWZhaVBNaFJEUzhtZG0rM2F5bnA3YWlqZEcvRUNCTlFOZFZlZkhpUmVqanZiV1pVR2F2RFkwOFhUSmg1Y3JXMkh6Mzc5KzNMVnUyVkg2K1ZSYjZHYkdYb1REUXBQZFRreTVERWQ3blpDNVUvdjdiOHErL3J0My9TSUM4ZnYzYWJ0MjZGWXFheDdadTNUbzdkT2lRSFRodzRLUHJ0T3kyUXExZ3o1NDk5dWpSby8rOHh2cjE2KzM0OGVPMm5BaVFCcWZ3ME5tek00VVB0QzdhcENPQWQrelkwUklob3VDNGZ2MTYvTTlTU1lpRXZTMXR2LzhlRzZMWjNidTFJVXNZdW1URHc3V2hTOWpia21tUFMwZUg1YUVxa1hqSyttd3pOZDVmWkFqejdOa3pPM1BtVER4WlVjR2dlZjM3TDEyNkZJTXdyZHU5ZS9mY3V0T25UOXVwVTZkaVVGeTVjaVd1VTBDSWJ1K0ZDa2dVTUtMMWVxN2x0dVNmdnBVLy9XVFpYMzlaSzlLMzEvcy8vdmlreDd3TTVYVXhQQkl0MDRtTTIxVldmK0gwSCtYWXNXT1ZoVWpibjMvR3ZrYmNxeEtxdVNqUGErRWhZVjJzT2hRczdlMjFTZEtlbVBnazlTc1FCWUNDNGViTm03WjE2OWE0N0c0SUtvV0p3a091WHIwNnQrNzgrZk4yK2ZMbCtEY201ODZkbTFzdnFkSTRjdVJJWEg3eDRrVnJCRXMra0d2VjhCRFAzNjVxb3g0TmFUNjNZam5kMTljWDU5UHJhbWloK1ZldlhzMmJWN0RKdzRjUDQveVRKMC9pdkc0MXIrVXlPRGdZNS9VNDBXVWhpdk02VVZQemV0MFVJdGV1WFp0N2ZxOWMxVVdxSmhRZ21uUStsNm9OM2FaMUNnc0ZqWllwUklxN2N4ZXBRRlFsOVBiMnpnc0F6YWQxcWg2SzZ3NGZQaHh2Nzl5NU03ZE1ZYWxRMGFRd2FsUU1ZUnBjVy9pbSsxQUZJdldXZjZteXJOYmV6UE9TMThDYUhZYkVad3Zoa2U3blliaVkxVjZvTm1sWkNJNU13YUw1RkNMUzJWbjM2ZFhqV016QzY3Q2tlUTFWMG1OVnNhUWhqSG9raldycEF5U1U4ZGFxVllqKzlrKzBKbnhnMWUvNGtMV3AvUDZNaWgvZWd3Y1B6bHUzZi8vK1JlZjM3dDBicDJUbnpwMXhTbFJWRk1meHVsNXI4ZlYwaWN3MHI2cmp4bzBiZHZMa3lmSmovOWtRaU1FeCt4N0crOVBUL3daTENxbENIeVFGaU9ielRadnFQcjBxQ2cxak5LbXZvVkM0Y09GQ3ZLOHFTc3ZUY0V3VnlkbXpaMk5Gb3NwRXdTRUxoekNOYXNrRDVOMG45Z0JhM2Fid1FWM1lSQlZWSmoxcGwrSVhMb1hIMGFOSHEya2NGZzhXbS8yV2x4Z2U0WDNOTlR4SmUyTzZ1bXBUYUxLcWh6V2pZMEUrOHI2cklhcXFJZzFCUkdHZ3dEaHg0a1Fja3Fqdm9TbXRhNWJBV0tqME5WRWZQSGhnKy9idE0zdysyaE9qWnFyNklRb09WU1ZxSkpiZEE5TXMyMDQ5RWYyOVZlMTF5TFFuSTUzcm9uNUs2TDJZaGc3cU40VXAwNjBPS0ZOb0tDekNwQVBNWm43KzJmSWZmL3pmcjZPZ1NMdHFpM3RWaXV0UzVWRmNyaW4xVEJaS1E1dmlZNVlUUFpBbW9KL0hhTVp2cDZvc0hCcVZWcWhBY2xVWE9vUzlzSHJlTUViREZ3MVpObXl3L0x2djdGTm9tOVhiYnZYV0xmWVlxUmNzeTRVQVFjdlJDWEp6emRMWld6VkwxVkROWm84SnlkUGg3S0ZubytESXYvMTIvdEFIRVFHQzFsUGNDNU9vMzZGS1k4RXAvSG5vZWNUd3dBY1JJR2c5eFQwdkgxZzl0MXRYZ2ZMTk40YjZDQkMwSGxVYm9hZGgybTM3L24yOGpaUDJkR2tLeStJQlpxSDVpY1VSSUdoTjZRUTZmcis1Rk01SkJ1QkdnQUJ3STBBQXVKVU9FSDdockRucC9KcjJkSm82NEZRNlFEYUViclorNlIzTmhkODBSaFVxQ1JDZHB6R3QzV0JvQ3RwV09rR3Q2a3NFb3ZXVURoQ2RLS1JmZWg4WUdEQTBCNFdIZ245MXVyb1c0RlJKRTFYZlpCcFRLMFNvUkJxWHRvMHVEYUJUemFrK1VJWFNwL01ucVN3ZUhSMk5IMDZOcjJuU05RWmREbUJvYUNnT05WVXRhdnVzNEhkTlVJSEtBaVRSSGhrRmlTcVN5WFNSV2l3clhRNUFWL3ZTdEJSWE1VUHJxRHhBQUxRT0RpUUQ0RWFBQUhBalFBQzRFU0FBM0FnUUFHNEVDQUEzQWdTQUd3RUN3STBBQWVCR2dBQndJMEFBdUJFZ0FOd0lFQUJ1QkFnQU53SUVnQnNCQXNDTkFBSGdSb0FBY0NOQUFMZ1JJQURjQ0JBQWJnUUlBRGNDQklBYkFRTEFqUUFCNEVhQUFIQWpRQUM0RVNBQTNBZ1FBRzRFQ0FDM2Z3QVRraG1wUjltNzZBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFSQUFBQUJtQ0FZQUFBQURCczU5QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQWdCU1VSQlZIZ0I3ZDFMYkZSVkhNZngveDBLdGdwSUNjcERHNDJrSkJwanBDc1hUVWhjbU1nU2VYUVBPemJzMkxrd2JFaGN3QUpXc0lBVkVNTENCQmJHaFJBWGRnUEJSQk5vWW9vUVhpTGxVYVcwWmE3bmQ2Wm51QjM2b09kT0g3ZjMrMGx1WnU2OWRscFBtTitjOXlURHc4T3BBVUNFaWdGQUpBSUVRRFFDQkVBMEFnUkFOQUlFUURRQ0JFQTBBZ1JBTkFJRVFEUUNCRUEwQWdSQU5BSUVRRFFDQkVBMEFnUkFOQUlFUURRQ0JFQzBGbXVDNGVGaHUzbnpwZzBORGRtTEZ5OE1VMXU1Y3FWdDJMREJsaTFiWmtDUkpYazNGRko0OVBYMTJabzFhL3l4Wk1rU3crUVVzQThmUHJUNzkrOWJaMmNuSVlKQ3l4MGcvZjM5dG56NWNoOGVlSDMzN3QyendjRkIyN2h4b3dGRmxic1A1TW1USjliZTNtNllHUVd1bW54QWtUV2xFNVZteTh5cHpPZ3ZRdEV4Q2dNZ0dnRUNJQm9CQWlBYUFRSWdXbE1ta3NIODNJNUhqeDc1NTVvb3hyQTJ5b0FBYVlJSER4N1V3MFAwdkZLcDJPclZxdzFZekdZOVFGcTZ1eTI1ZGN1S0tIMy9mUnY5NVpkcC96dk5oV21rRUNGQXNOak5laDlJWXNWVjVMOGRtQXV6WGdNWmVZMVA4S0pidFdxVjd3UEpVajhJc05qUkI5SUVhcXBVcTlWNlUwYUJRdk1GWlVDQU5FbFlqUXlVQ2ZOQUFFUWpRQUJFSTBBQVJDTkFBRVRMSFNEc2F4R0hNc05pa0R0QVdsdGIvVlJ1ek16QXdBQnpSVkI0dVFPa282UERCNGdPUGxXbnB6TFNmcWgzNzk3MU83TURSWlo3VTJYUnp1eTNiOStlY0UwSXh0TWl1N2EyTmgrODdNaU9vbXRLZ0FBb0owWmhBRVJqS2pzUVBINXNTVyt2SmE1L3lyWEx6WjQvdDhRZEZnNWRlK3N0cTNaMVdmcjExd1pxSUVCZDVjb1ZTLzc3eit5Tk44elVQK1VlVXowUGg2NE5EbHJscDU4c2FWaDlYVmJVUUFBWkdySzBXclZFUWRGQW5ZU3Y3QTN6NTU5YWhtMWxSNENnM056SVllV0hIeXhSSVBUMTFXb2d6NTc1UU5IaG16QkpZdFZQUGpINy9QT1hQOGVYcVhrRUNFb3R1WGhSbTlwcWZOM3N6VGRmcVczNGN4Y2lhdDVVMzN2UDdKMTNhamNxdFA2RkFNRzh1M3IxcXExYnQ4N1dybDFyY3lseC9SbStMME5ob0tPbHBYWXNYV3JtbWpOQlBWVCsvdHZ2ayt1ZlR4TWdUNTgrdFFzWExyaEtUWi8vOHZrdFc3Ylk1czJicDcybmF4Y1ZhaG1iTm0yeTY5ZXZ2L0k3VnF4WVlidDI3Ykw1UklCZzNpazRUcDgrN2Q4TWN4SWliclNsOHZQUHZrTTB1WHk1MW1SeFRaZGtZS0RXZEhHakxZbEdYTnJhTEhXMUV2R1RwY1k2VS8zektab3dkKzdjc2IxNzk3cVhIL1RCb0hQOS94MDlldFFIWmJqWDJkbFp2N2Rueng3YnZYdTNENHJqeDQvN2V3b0kwZU1WVndNU0JZem92bDVydmhFZ21IZDZJK3pjdVhQT1FxVHkrKysrWDhPUHFyaGhXUzlOYStFaDdwNnZkU2hZV2x0cmg0U1JHUDhpazlkQUZBQUtoblBuenRuNjlldjl0Y3N1cUJRbUNnODVjZUpFL2Q2aFE0ZnMyTEZqdmd5Q2d3Y1AxdTlMcUdsczI3Yk5Yejl5NUlndEJEVGtGcmxzZGJpM3Q5ZWZQMWZIWU9ZOGZLZU5taExaODJ2WHJ2bHpyZDNKbnQrNGNjT2Y2MUhudWk1YTM1TTlmK3crNlhXdTE4MmU2L2ZLa0h2RGh2TVFJaWRQbnF6L3Z0bVNxbllSYWhNS0VCMnV0cUUrRVA4WTdpa3NGRFM2cGhESkR1ZE9VUU5STGFHcnEydGNBT2c4M0ZQdElYdHY2OWF0L3ZIU3BVdjFhd3BUaFlvT2hkRkNSUTBFQzBhUzFMb3YwM1NXVjFlTU5VUDhiM1BoRVo2bkl5TzFhL283d3QvaWdpTlJzT2c4aElpOC9mYWtMNjgranFtbytUTFJ1Wm9xNFdkVll3bE5HUFdSTEZSTld3dFRPWHZXS3Q5OVo4bllncnFSL3Y1eDk1ZCsrT0c0OHpMZkh6MTF5dEl2dmpDOHBGckhtVE5uYk1lT0hiUGV0dmY5SG1PelN4UDFLZno3cnovOHYxMTNKRHJYY0s3bWhtakxCYjJSZGY3cHA1Wis5cG1scnZhUmZ2WFZwSyt2V29PYU1hRmZRNkZ3K1BCaC8vejgrZlArM3I1OSszeXpSRFdTL2Z2Mys1OVRzMFRCY2VEQWdYSE5uNnlGMW9ScFdnMms2Z3BVaFpwT3NzZEY0eHVxclBjVFZpeS9ZaTdEdzh0T0ZodjdsQmRmRTNGOUd3cUkrbWhNZTN2dGNBR2lFWmlxNW9LRW9keEpLRGhVcXdoTkVOR2JYb0hSMDlQam15VHE5OUFSN2pYMmVSUkY3aHBJOHV1dmxtcVNEWnZqeklpQ0pQbnhSNnR1MzI1bHB6NFNkWnpPMWFpQ3IzV0V0UzdxYjNGOU02YW1RNmlKaEJxSVFrTmg0UTVOTUt0KytlV01hbzRLaWpCVW14MVZ5ZDVUYU9oZTlycU8wR2ZTS0RSdHNqOHpuM0lIaUtybUk3LzlSb0RNbEF1UXBkM2R0YkxEbkVyKyt1dmw0amdGeHovL1dLTEh4aEJ4Ui9ydXU3VWFoNnVSVkwvNVpzcStqekpxVGhPRzhKZzVsUm5ObVhtaEJYTDF6dEt4UjNXV3FrTTFHWnNUa29icDdCOThZT25ISDF2NjBVZmptejd3R0lWQitXUkhZUUwxZDJncWU4TVMvdFQxZWZqd3dJUnlCOGhvQ2I0OGU3WlFkdk5rYlBMWWhLdHNNOWMxQ3pYdDZEQk1qaTBOVVU1YTY2Sk53RWRIYTQ4NmRFMkhyaWxrWE9jbnBrWVRCdVVVRnRDcDZZSm9UR1VIRUMxM2dMVDA5QmppVUhZb3V0d0Jvb2xraUVQWm9laG93Z0NJUm9BQWlKWTdRRWEvLzk0UWg3SkQwVEVQQkVBMG1qQUFvaEVnQUtMbEg4WTllOVlRaDdKRDBUVm5QNUJwZHVQQ3hDZzdGQjFOR0FEUkNCQUEwWElIQ0x1THg2UHNVSFRNQXdFUWpTWU1nR2dFQ0lCbytlZUIzTHBsaUVQWm9lanlieWpVM1cySVE5bWg2R2pDQUlpV1AwRDRncVE0bEJrV2dkd0I4dUxiYnlmOGJnMU1iL1RVS1FPS3JHbnpRTUszenFkOHplV1VWRTYrd0NrbkxBTE4rMTZZUC80WXQ4dDQ0eUl4TFJ6TEt1MTlGeHlxdFZXM2J6ZWc2SmlKQ2lBYW96QUFvaEVnQUtJUklBQ2lFU0FBb2hFZ0FLSVJJQUNpRVNBQW9oRWdBS0lSSUFDaUVTQUFvaEVnQUtJUklBQ2lFU0FBb2hFZ0FLSVJJQUNpRVNBQW92MFBiZDJCblVzUy9ZNEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgXCIuL3VpLmNzc1wiO1xuLy8gZGVmYXVsdCBpbml0XG5jb25zdCBzZXR0aW5ncyA9IHsgbGFuZzogXCJlblwiIH07XG4vLyBhZGQgdWkgaW4tZWZmZWN0XG5jb25zdCBwbHVnaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdWdpblwiKTtcbnBsdWdpbi5jbGFzc0xpc3QuYWRkKFwiZWZmZWN0LWluXCIpO1xuc2V0VGltZW91dCgoKSA9PiBwbHVnaW4uY2xhc3NMaXN0LnJlbW92ZShcImVmZmVjdC1pblwiKSwgMzAwKTtcbi8vIGRlZmF1bHQgZGF0YSBmb3IgY29kZVxucGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgIHJhbmdlOiAwLFxuICAgICAgICBsYW5nOiBzZXR0aW5ncy5sYW5nLFxuICAgIH0sXG59LCBcIipcIik7XG4vLyBzb3VyY2UgdGV4dCBmdW5jdGlvbmFsIHVuaXRcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRcIik7XG5jb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcmFncmFwaFwiKTtcbmNvbnN0IGRvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG90XCIpO1xuY29uc3QgY29tbWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1hXCIpO1xuY29uc3Qgc2VtaWNvbG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZW1pY29sb25cIik7XG5zZXRUaW1lb3V0KCgpID0+IHRleHQuZm9jdXMoKSwgMTAwKTtcbnBhcmFncmFwaC5vbmNsaWNrID0gKCkgPT4gYWN0aW9uKFwicypcXG5zKlwiKTtcbmRvdC5vbmNsaWNrID0gKCkgPT4gYWN0aW9uKFwicypcXFxcLnMqXCIpO1xuY29tbWEub25jbGljayA9ICgpID0+IGFjdGlvbihcInMqLHMqXCIpO1xuc2VtaWNvbG9uLm9uY2xpY2sgPSAoKSA9PiBhY3Rpb24oXCJzKjtzKlwiKTtcbmZ1bmN0aW9uIGFjdGlvbihzZXBhcmF0b3IpIHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICBtb2RlOiBcInNvdXJjZVwiLFxuICAgICAgICAgICAgc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gICAgICAgICAgICBjb250ZW50OiB0ZXh0LnZhbHVlLFxuICAgICAgICB9LFxuICAgIH0sIFwiKlwiKTtcbn1cbi8vIHJhbmRvbSBmdW5jdGlvbmFsIHVuaXRcbmNvbnN0IG5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lc1wiKTtcbmNvbnN0IHBob25lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmVzXCIpO1xuY29uc3QgYWRkcmVzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRyZXNzZXNcIik7XG5jb25zdCBjaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdGllc1wiKTtcbmNvbnN0IGVtYWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxzXCIpO1xuY29uc3QgcGFyYWdyYXBocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFyYWdyYXBoc1wiKTtcbm5hbWVzLm9uY2xpY2sgPSAoKSA9PiByYW5kb21SYW5nZUFjdGlvbihcIm5hbWVzXCIsIG5hbWVzKTtcbnBob25lcy5vbmNsaWNrID0gKCkgPT4gcmFuZG9tUmFuZ2VBY3Rpb24oXCJwaG9uZXNcIiwgcGhvbmVzKTtcbmFkZHJlc3Nlcy5vbmNsaWNrID0gKCkgPT4gcmFuZG9tUmFuZ2VBY3Rpb24oXCJhZGRyZXNzZXNcIiwgYWRkcmVzc2VzKTtcbmNpdGllcy5vbmNsaWNrID0gKCkgPT4gcmFuZG9tUmFuZ2VBY3Rpb24oXCJjaXRpZXNcIiwgY2l0aWVzKTtcbmVtYWlscy5vbmNsaWNrID0gKCkgPT4gcmFuZG9tUmFuZ2VBY3Rpb24oXCJlbWFpbHNcIiwgZW1haWxzKTtcbnBhcmFncmFwaHMub25jbGljayA9ICgpID0+IHJhbmRvbVJhbmdlQWN0aW9uKFwicGFyYWdyYXBoc1wiLCBwYXJhZ3JhcGhzKTtcbmZ1bmN0aW9uIHJhbmRvbVJhbmdlQWN0aW9uKHR5cGUsIHJhbmdlKSB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLnZhbHVlLFxuICAgICAgICAgICAgcmFuZG9tVHlwZTogdHlwZSxcbiAgICAgICAgICAgIGxhbmc6IHNldHRpbmdzLmxhbmcsXG4gICAgICAgIH0sXG4gICAgfSwgXCIqXCIpO1xuICAgIHJhbmdlLnZhbHVlID0gXCIwXCI7XG59XG4vLyBsYW5ndWFnZSBzd2l0Y2ggZnVuY3Rpb25hbFxuY29uc3QgdGl0bGVTZWNvbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLXNlY29uZFwiKTtcbmNvbnN0IGJ0bk5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tbmFtZXNcIik7XG5jb25zdCBidG5QaG9uZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1waG9uZXNcIik7XG5jb25zdCBidG5BZGRyZXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGRyZXNzZXNcIik7XG5jb25zdCBidG5DaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1jaXRpZXNcIik7XG5jb25zdCBidG5FbWFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1lbWFpbHNcIik7XG5jb25zdCBidG5QYXJhZ3JhcGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcGFyYWdyYXBoc1wiKTtcbmNvbnN0IGxhbmdFTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5cIik7XG5jb25zdCBsYW5nUlUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1XCIpO1xuY29uc3QgbGFuZ1pIID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6aFwiKTtcbmNvbnN0IGhvd0l0V29ya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvdy1pdC13b3Jrc1wiKTtcbmNvbnN0IHN1cHBvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cHBvcnRcIik7XG5jb25zdCBoZWxwVGV4dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHAtdGV4dC0xXCIpO1xuY29uc3QgaGVscFRleHQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwLXRleHQtMlwiKTtcbmNvbnN0IGhlbHBUZXh0MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC10ZXh0LTNcIik7XG5jb25zdCBoZWxwVGV4dDQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHAtdGV4dC00XCIpO1xuY29uc3QgaGVscFRleHQ1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwLXRleHQtNVwiKTtcbmNvbnN0IGhlbHBIZWFkMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC1oZWFkLTFcIik7XG5jb25zdCBoZWxwSGVhZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHAtaGVhZC0yXCIpO1xuY29uc3QgY2xvc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZXJcIik7XG5sYW5nRU4ub25jbGljayA9ICgpID0+IGxhbmdTd2l0Y2hlcihcImVuXCIpO1xubGFuZ1JVLm9uY2xpY2sgPSAoKSA9PiBsYW5nU3dpdGNoZXIoXCJydVwiKTtcbmxhbmdaSC5vbmNsaWNrID0gKCkgPT4gbGFuZ1N3aXRjaGVyKFwiemhfQ05cIik7XG5mdW5jdGlvbiBsYW5nU3dpdGNoZXIobGFuZykge1xuICAgIHNldHRpbmdzLmxhbmcgPSBsYW5nO1xuICAgIHBsdWdpbi5jbGFzc0xpc3QuYWRkKFwiZWZmZWN0LWxhbmctc3dpdGNoXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcGx1Z2luLmNsYXNzTGlzdC5yZW1vdmUoXCJlZmZlY3QtbGFuZy1zd2l0Y2hcIiksIDMwMCk7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgbGFuZzogc2V0dGluZ3MubGFuZyxcbiAgICAgICAgfSxcbiAgICB9LCBcIipcIik7XG4gICAgaWYgKGxhbmcgPT09IFwicnVcIikge1xuICAgICAgICB0ZXh0LnBsYWNlaG9sZGVyID0gXCLQktCw0Ygg0YLQtdC60YHRgiDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDRgdC70L7RkdCyXCI7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBcItCg0LDQt9C00LXQu9C40YLRjCDQv9C+INCw0LHQt9Cw0YbQsNC8XCI7XG4gICAgICAgIGNvbW1hLmlubmVySFRNTCA9IFwi0J/QvtGB0LvQtSDQt9Cw0L/Rj9GC0YvRhVwiO1xuICAgICAgICBkb3QuaW5uZXJIVE1MID0gXCLQotC+0YfQtdC6XCI7XG4gICAgICAgIHNlbWljb2xvbi5pbm5lckhUTUwgPSBcItCi0L7Rh9C10Log0YEg0LfQsNC/0Y/RgtC+0LlcIjtcbiAgICAgICAgdGl0bGVTZWNvbmQuaW5uZXJUZXh0ID0gXCLQuNC70Lgg0YHQvtC30LTQsNGC0Ywg0LjQtyDRgdC70YPRh9Cw0LnQvdGL0YVcIjtcbiAgICAgICAgYnRuTmFtZXMuaW5uZXJIVE1MID0gXCLQmNC80ZHQvVwiO1xuICAgICAgICBidG5QaG9uZXMuaW5uZXJIVE1MID0gXCLQotC10LvQtdGE0L7QvdC90YvRhSDQvdC+0LzQtdGA0L7QslwiO1xuICAgICAgICBidG5DaXRpZXMuaW5uZXJIVE1MID0gXCLQndCw0LfQstCw0L3QuNC5INCz0L7RgNC+0LTQvtCyXCI7XG4gICAgICAgIGJ0bkFkZHJlc3Nlcy5pbm5lckhUTUwgPSBcItCQ0LTRgNC10YHQvtCyXCI7XG4gICAgICAgIGJ0bkVtYWlscy5pbm5lckhUTUwgPSBcItCt0LzQtdC50LvQvtCyXCI7XG4gICAgICAgIGJ0blBhcmFncmFwaHMuaW5uZXJIVE1MID0gXCLQn9Cw0YDQsNCz0YDQsNGE0L7QslwiO1xuICAgICAgICBob3dJdFdvcmtzLmlubmVySFRNTCA9IFwi0J/QvtC80L7RidGMXCI7XG4gICAgICAgIHN1cHBvcnQuaW5uZXJUZXh0ID0gXCLQn9C+0LTQtNC10YDQttCw0YLRjCDQsNCy0YLQvtGA0LBcIjtcbiAgICAgICAgc3VwcG9ydC5ocmVmID0gXCJodHRwczovL3d3dy50aW5rb2ZmLnJ1L3NsLzNzYmZYNDVkVldqXCI7XG4gICAgICAgIGhlbHBIZWFkMS5pbm5lclRleHQgPSBcItCh0L7Qt9C00LDRgtGMINC60L7Qv9C40Lgg0L7QsdGK0LXQutGC0LBcIjtcbiAgICAgICAgaGVscEhlYWQyLmlubmVyVGV4dCA9IFwi0JLRgdGC0LDQstC40YLRjCDQutC+0L/QuNC4INCyINCy0YvQsdGA0LDQvdC90YvQuSDRhNGA0LXQudC8XCI7XG4gICAgICAgIGhlbHBUZXh0MS5pbm5lclRleHQgPSBcItCe0LrQvdC+INC/0LvQsNCz0LjQvdCwINCy0YHQtdCz0L4g0LvQuNGI0Ywg0YTQvtGA0LzQuNGA0YPQtdGCINGC0LXQutGB0YIg4oCUINCy0Ysg0LzQvtC20LXRgtC1INGA0LDQt9C00LXQu9C40YLRjCDRgdCy0L7QuSDRgtC10LrRgdGCINC/0L4g0L7QtNC90L7QvNGDINC40Lcg0L/RgNCw0LLQuNC7INC40LvQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LPQtdC90LXRgNC40YDRg9C10LzRi9C1INC00LDQvdC90YvQtS5cIjtcbiAgICAgICAgaGVscFRleHQyLmlubmVyVGV4dCA9IFwi0KDQtdC30YPQu9GM0YLQsNGCINCx0YPQtNC10YIg0LfQsNCy0LjRgdC10YLRjCDQvtGCINGC0L7Qs9C+LCDRh9GC0L4g0LLRi9Cx0YDQsNC90L4g0LIg0LzQsNC60LXRgtC1LlwiO1xuICAgICAgICBoZWxwVGV4dDMuaW5uZXJUZXh0ID0gXCLQldGB0LvQuCDQstGLINGF0L7RgtC40YLQtSDRgdC+0LfQtNCw0YLRjCDQutC+0L/QuNC4INC+0LHRitC10LrRgtCwIOKAlCDQstGL0LHQtdGA0LjRgtC1INGC0LXQutGB0YLQvtCy0YvQuSDRgdC70L7QuSDQstC90YPRgtGA0Lgg0L3QtdCz0L4g0Lgg0L/RgNC40LzQtdC90LjRgtC1INC+0LTQvdGDINC40Lcg0YTRg9C90LrRhtC40Lkg0L/Qu9Cw0LPQuNC90LAuXCI7XG4gICAgICAgIGhlbHBUZXh0NC5pbm5lclRleHQgPSBcItCV0YHQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INCy0YHRgtCw0LLQuNGC0Ywg0LPQvtGC0L7QstGL0LUg0LrQvtC/0LjQuCDQvtCx0YrQtdC60YLQsCDQsiDQvtC/0YDQtdC00LXQu9GR0L3QvdGL0Lkg0YTRgNC10LnQvCwg0YLQviDQstGL0LHQtdGA0LjRgtC1INGC0LDQutC20LUg0YTRgNC10LnQvCDQtNC70Y8g0LLRgdGC0LDQstC60LguXCI7XG4gICAgICAgIGhlbHBUZXh0NS5pbm5lclRleHQgPSBcItCS0Ysg0LzQvtC20LXRgtC1INC90LUg0LLRi9Cx0LjRgNCw0YLRjCDQvtCx0YrQtdC60YIg0LTQu9GPINC60L7Qv9C40YDQvtCy0LDQvdC40Y8g0Lgg0YTRgNC10LnQvCDQtNC70Y8g0LLRgdGC0LDQstC60Lgg4oCUINCyINC/0LXRgNCy0L7QvCDRgdC70YPRh9Cw0LUg0YLQtdC60YHRgiDQsdGD0LTQtdGCINCy0YHRgtCw0LLQu9C10L0g0LIg0LzQsNC60LXRgiDQsiDQstC40LTQtSDRgNCw0LfQtNC10LvRkdC90L3Ri9GFINGC0LXQutGB0YLQvtCy0YvRhSDRgdC70L7RkdCyLiDQktC+INCy0YLQvtGA0L7QvCDigJQg0YLQtdC60YHRgiDQuNC70Lgg0LrQvtC/0LjQuCDQvtCx0YrQtdC60YLQsCDQsdGD0LTRg9GCINGD0L/QsNC60L7QstCw0L3RiyDQsiDRgdC/0LXRhtC40LDQu9GM0L3Ri9C5INGE0YDQtdC50LwuXCI7XG4gICAgICAgIGNsb3Nlci5pbm5lclRleHQgPSBcItCX0LDQutGA0YvRgtGMXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhbmcgPT09IFwiemhfQ05cIikge1xuICAgICAgICB0ZXh0LnBsYWNlaG9sZGVyID0gXCLmjInop4TliJnliIfniYfnmoTmupDmlofmnKxcIjtcbiAgICAgICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IFwi5ouG5YiG5q616JC95ZCO55qE5paH5pysXCI7XG4gICAgICAgIGNvbW1hLmlubmVySFRNTCA9IFwi6YCX5Y+3XCI7XG4gICAgICAgIGRvdC5pbm5lckhUTUwgPSBcIueCuVwiO1xuICAgICAgICBzZW1pY29sb24uaW5uZXJIVE1MID0gXCLliIblj7dcIjtcbiAgICAgICAgdGl0bGVTZWNvbmQuaW5uZXJUZXh0ID0gXCLku47pmo/mnLrliJvlu7pcIjtcbiAgICAgICAgYnRuTmFtZXMuaW5uZXJIVE1MID0gXCLQmNC80ZHQvVwiO1xuICAgICAgICBidG5QaG9uZXMuaW5uZXJIVE1MID0gXCLQotC10LvQtdGE0L7QvdC90YvRhSDQvdC+0LzQtdGA0L7QslwiO1xuICAgICAgICBidG5DaXRpZXMuaW5uZXJIVE1MID0gXCLQndCw0LfQstCw0L3QuNC5INCz0L7RgNC+0LTQvtCyXCI7XG4gICAgICAgIGJ0bkFkZHJlc3Nlcy5pbm5lckhUTUwgPSBcItCQ0LTRgNC10YHQvtCyXCI7XG4gICAgICAgIGJ0bkVtYWlscy5pbm5lckhUTUwgPSBcItCt0LzQtdC50LvQvtCyXCI7XG4gICAgICAgIGJ0blBhcmFncmFwaHMuaW5uZXJIVE1MID0gXCLQn9Cw0YDQsNCz0YDQsNGE0L7QslwiO1xuICAgICAgICBob3dJdFdvcmtzLmlubmVyVGV4dCA9IFwi5pWR5ZG977yBXCI7XG4gICAgICAgIHN1cHBvcnQuaW5uZXJUZXh0ID0gXCLmlK/mjIHkvZzogIVcIjtcbiAgICAgICAgc3VwcG9ydC5ocmVmID0gXCJodHRwczovL3d3dy5idXltZWFjb2ZmZWUuY29tL21pbHNpbmVyeVwiO1xuICAgICAgICBoZWxwSGVhZDEuaW5uZXJUZXh0ID0gXCLliJvlu7rlr7nosaHnmoTlia/mnKxcIjtcbiAgICAgICAgaGVscEhlYWQyLmlubmVyVGV4dCA9IFwi5bCG5Ymv5pys5o+S5YWl5omA6YCJ5binXCI7XG4gICAgICAgIGhlbHBUZXh0MS5pbm5lclRleHQgPSBcIuaPkuS7tueql+WPo+WPqueUn+aIkOaWh+acrOKAlOaCqOWPr+S7peagueaNruWFtuS4reS4gOS4quinhOWImeaLhuWIhuaWh+acrOaIluS9v+eUqOeUn+aIkOeahOaVsOaNruOAglwiO1xuICAgICAgICBoZWxwVGV4dDIuaW5uZXJUZXh0ID0gXCLnu5PmnpzlsIblj5blhrPkuo7lnKjluIPlsYDkuK3pgInmi6nnmoTlhoXlrrnjgIJcIjtcbiAgICAgICAgaGVscFRleHQzLmlubmVyVGV4dCA9IFwi5aaC5p6c6KaB5Yib5bu65a+56LGh55qE5Ymv5pys77yM6K+36YCJ5oup5YW25Lit55qE5paH5pys5bGC5bm25L2/55So5YW25Lit5LiA5Liq5o+S5Lu25Ye95pWw44CCXCI7XG4gICAgICAgIGhlbHBUZXh0NC5pbm5lclRleHQgPSBcIuWmguaenOimgeWcqOeJueWumuW4p+S4reaPkuWFpeWvueixoeeahOeOsOaIkOWJr+acrO+8jOivt+mAieaLqeimgeaPkuWFpeeahOW4p+OAglwiO1xuICAgICAgICBoZWxwVGV4dDUuaW5uZXJUZXh0ID0gXCLmgqjlj6/ku6XpgInmi6nkuI3pgInmi6nopoHlpI3liLblkoznspjotLTmoYbmnrbnmoTlr7nosaEt5Zyo56ys5LiA56eN5oOF5Ya15LiL77yM5paH5pys5bCG5Lul5YiG6ZqU5paH5pys5Zu+5bGC55qE5b2i5byP57KY6LS05Yiw5biD5bGA5Lit44CCIOWcqOesrOS6jOenjeaDheWGteS4i++8jOWvueixoeeahOaWh+acrOaIluWJr+acrOWwhuiiq+aJk+WMheWcqOS4gOS4queJueauiueahOahhuaetuS4reOAglwiO1xuICAgICAgICBjbG9zZXIuaW5uZXJUZXh0ID0gXCLlhbPpl61cIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRleHQucGxhY2Vob2xkZXIgPSBcIllvdXIgdGV4dCBmb3IgY3JlYXRpbmcgbGF5ZXJzXCI7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBcIkRpdmlkZSB0aGUgdGV4dCBpbnRvIHBhcmFncmFwaHNcIjtcbiAgICAgICAgY29tbWEuaW5uZXJIVE1MID0gXCJBZnRlciB0aGUgY29tbWFcIjtcbiAgICAgICAgZG90LmlubmVySFRNTCA9IFwiRG90XCI7XG4gICAgICAgIHNlbWljb2xvbi5pbm5lckhUTUwgPSBcIlNlbWljb2xvblwiO1xuICAgICAgICB0aXRsZVNlY29uZC5pbm5lclRleHQgPSBcIm9yIGNyZWF0ZSBmcm9tIHJhbmRvbVwiO1xuICAgICAgICBidG5OYW1lcy5pbm5lckhUTUwgPSBcItCY0LzRkdC9XCI7XG4gICAgICAgIGJ0blBob25lcy5pbm5lckhUTUwgPSBcItCi0LXQu9C10YTQvtC90L3Ri9GFINC90L7QvNC10YDQvtCyXCI7XG4gICAgICAgIGJ0bkNpdGllcy5pbm5lckhUTUwgPSBcItCd0LDQt9Cy0LDQvdC40Lkg0LPQvtGA0L7QtNC+0LJcIjtcbiAgICAgICAgYnRuQWRkcmVzc2VzLmlubmVySFRNTCA9IFwi0JDQtNGA0LXRgdC+0LJcIjtcbiAgICAgICAgYnRuRW1haWxzLmlubmVySFRNTCA9IFwi0K3QvNC10LnQu9C+0LJcIjtcbiAgICAgICAgYnRuUGFyYWdyYXBocy5pbm5lckhUTUwgPSBcItCf0LDRgNCw0LPRgNCw0YTQvtCyXCI7XG4gICAgICAgIGhvd0l0V29ya3MuaW5uZXJUZXh0ID0gXCJIb3cgaXQgd29ya3NcIjtcbiAgICAgICAgc3VwcG9ydC5pbm5lclRleHQgPSBcIlN1cHBvcnQgdGhlIGF1dGhvclwiO1xuICAgICAgICBzdXBwb3J0LmhyZWYgPSBcImh0dHBzOi8vd3d3LmJ1eW1lYWNvZmZlZS5jb20vbWlsc2luZXJ5XCI7XG4gICAgICAgIGhlbHBIZWFkMS5pbm5lclRleHQgPSBcIkNyZWF0ZSBjb3BpZXMgb2YgYW4gb2JqZWN0XCI7XG4gICAgICAgIGhlbHBIZWFkMi5pbm5lclRleHQgPSBcIkluc2VydCBjb3BpZXMgaW50byB0aGUgc2VsZWN0ZWQgZnJhbWVcIjtcbiAgICAgICAgaGVscFRleHQxLmlubmVyVGV4dCA9IFwiVGhlIHBsdWdpbiB3aW5kb3cgb25seSBnZW5lcmF0ZXMgdGV4dCDigJQgeW91IGNhbiBzcGxpdCB5b3VyIHRleHQgYWNjb3JkaW5nIHRvIG9uZSBvZiB0aGUgcnVsZXMgb3IgdXNlIHRoZSBnZW5lcmF0ZWQgZGF0YS5cIjtcbiAgICAgICAgaGVscFRleHQyLmlubmVyVGV4dCA9IFwiVGhlIHJlc3VsdCB3aWxsIGRlcGVuZCBvbiB3aGF0IGlzIHNlbGVjdGVkIGluIHRoZSBsYXlvdXQuXCI7XG4gICAgICAgIGhlbHBUZXh0My5pbm5lclRleHQgPSBcIklmIHlvdSB3YW50IHRvIGNyZWF0ZSBjb3BpZXMgb2YgYW4gb2JqZWN0LCBzZWxlY3QgdGhlIHRleHQgbGF5ZXIgaW5zaWRlIGl0IGFuZCB1c2Ugb25lIG9mIHRoZSBwbHVnaW4gZnVuY3Rpb25zLlwiO1xuICAgICAgICBoZWxwVGV4dDQuaW5uZXJUZXh0ID0gXCJJZiB5b3Ugd2FudCB0byBpbnNlcnQgcmVhZHktbWFkZSBjb3BpZXMgb2YgYW4gb2JqZWN0IGluIGEgc3BlY2lmaWMgZnJhbWUsIHNlbGVjdCB0aGUgZnJhbWUgdG8gaW5zZXJ0IGFzIHdlbGwuXCI7XG4gICAgICAgIGhlbHBUZXh0NS5pbm5lclRleHQgPSBcIllvdSBjYW4gY2hvb3NlIG5vdCB0byBzZWxlY3QgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb3B5IGFuZCBmcmFtZSBmb3IgcGFzdGUg4oCUIGluIHRoZSBmaXJzdCBjYXNlIHRoZSB0ZXh0IHdpbGwgYmUgcGFzdGVkIHRvIHRoZSBsYXlvdXQgaW4gdGhlIGZvcm0gb2YgZGVsaW1pdGVkIHRleHQgbGF5ZXJzLlwiO1xuICAgICAgICBjbG9zZXIuaW5uZXJUZXh0ID0gXCJDbG9zZVwiO1xuICAgIH1cbn1cbi8vIGhlbHAgZnVuY3Rpb25hbFxuY29uc3QgaGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscFwiKTtcbmhvd0l0V29ya3Mub25jbGljayA9ICgpID0+IHtcbiAgICBoZWxwLmNsYXNzTGlzdC5hZGQoXCJwbHVnaW5fX2hlbHBfYWN0aXZlXCIpO1xufTtcbmNsb3Nlci5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGhlbHAuY2xhc3NMaXN0LnJlbW92ZShcInBsdWdpbl9faGVscF9hY3RpdmVcIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==