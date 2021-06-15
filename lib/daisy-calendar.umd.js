(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["daisy-calendar"] = factory();
	else
		root["daisy-calendar"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0c69":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__("1de5");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__("d84e");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__("8e61");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__("66d9");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "@font-face{font-family:iconfont;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-jiantou-you:before{content:\"\\e631\"}.icon-jiantou-zuo:before{content:\"\\e632\"}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1de5":
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

/***/ "24fb":
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

/***/ "3993":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "49ab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8231");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "66d9":
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,AAEAAAALAIAAAwAwR1NVQiCLJXoAAAE4AAAAVE9TLzI9CEkBAAABjAAAAGRjbWFwfzjq2gAAAfwAAAF+Z2x5ZratfRIAAAOEAAAAkGhlYWQc6rp7AAAA4AAAADZoaGVhB4IDhAAAALwAAAAkaG10eAwAAAAAAAHwAAAADGxvY2EAJABIAAADfAAAAAhtYXhwAQ4AHQAAARgAAAAgbmFtZT5U/n0AAAQUAAACbXBvc3SSYLOaAAAGhAAAAEMAAQAAA4D/gAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAMAAQAAAAEAADKnoEVfDzz1AAsEAAAAAADc5jtDAAAAANzmO0MAAAAABAAC+AAAAAgAAgAAAAAAAAABAAAAAwARAAEAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKADAAPgACREZMVAAObGF0bgAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAUEAAH0AAUAAAKJAswAAACPAokCzAAAAesAMgEIAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAwOYx5jIDgP+AAFwD3ACAAAAAAQAAAAAAAAAAAAAAAAACAAD//wQAAAAEAAAABAAAAAAAAAUAAAADAAAALAAAAAQAAAFWAAEAAAAAAFAAAwABAAAALAADAAoAAAFWAAQAJAAAAAQABAABAADmMv//AADmMf//AAAAAQAEAAAAAQACAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAoAAAAAAAAAAIAAOYxAADmMQAAAAEAAOYyAADmMgAAAAIAAAAAAAAAJABIAAEAAAAAAtUC+AAQAAAlATY0JwEmIgYUFwkBBhQWMgGBAUUPD/67DykeDwEi/t4PHikXAUYOKg4BRg4dKQ/+3v7eDykdAAAAAAEAAAAAAtUC+AAQAAAJAQYUFwEWMjY0JwkBNjQmIgJ//rsPDwFFDykeD/7eASIPHikC6f66DioO/roOHSkPASIBIg8pHQAAAAAAEgDeAAEAAAAAAAAAFQAAAAEAAAAAAAEACAAVAAEAAAAAAAIABwAdAAEAAAAAAAMACAAkAAEAAAAAAAQACAAsAAEAAAAAAAUACwA0AAEAAAAAAAYACAA/AAEAAAAAAAoAKwBHAAEAAAAAAAsAEwByAAMAAQQJAAAAKgCFAAMAAQQJAAEAEACvAAMAAQQJAAIADgC/AAMAAQQJAAMAEADNAAMAAQQJAAQAEADdAAMAAQQJAAUAFgDtAAMAAQQJAAYAEAEDAAMAAQQJAAoAVgETAAMAAQQJAAsAJgFpCkNyZWF0ZWQgYnkgaWNvbmZvbnQKaWNvbmZvbnRSZWd1bGFyaWNvbmZvbnRpY29uZm9udFZlcnNpb24gMS4waWNvbmZvbnRHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQAKAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQACgBpAGMAbwBuAGYAbwBuAHQAUgBlAGcAdQBsAGEAcgBpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwECAQMBBAALamlhbnRvdS15b3ULamlhbnRvdS16dW8AAAA="

/***/ }),

/***/ "695e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3993");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("57b6a4fa", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8231":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("91e4");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("111eb64d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8e61":
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,d09GRgABAAAAAARMAAsAAAAABsgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAASAAAAGQ9CEkBY21hcAAAAYwAAABSAAABfn846tpnbHlmAAAB4AAAAHgAAACQtq19EmhlYWQAAAJYAAAALQAAADYc6rp7aGhlYQAAAogAAAAcAAAAJAeCA4RobXR4AAACpAAAAAwAAAAMDAAAAGxvY2EAAAKwAAAACAAAAAgAJABIbWF4cAAAArgAAAAfAAAAIAEOAB1uYW1lAAAC2AAAAUUAAAJtPlT+fXBvc3QAAAQgAAAAKwAAAEOSYLOaeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGVhYPzCwMrAwNTJdIaBgaEfQjO+ZjBi5ACKMrAyM2AFAWmuKQwHnhk+M2Ju+N/AEMN8h6EBKMyIooiJgeH/fwDTFg+CeJztkLkNgEAMBMc+Q4Aog4CABCohuv4j2jj8UAYrzUi7cmRgAppzOAbSESK3r5J7Y8nd2PLGYn+uMdxn2Lul1TXzZ03vX9P4U1GfK9AXS8cMdwAAeJxVzCEOg0AUBNA/K0gw/ArCKhA/gWaRhHCD9lqk12rPUbueG6B+mJWMGDHJPIEw4R9OeYiM2NYnJqvaWKNquwUfvFT9p2lQmGcdUsS7mRtWn9Qzp9QX4uaUc0S3UKtJThZ2GkqLjmcYnXD4lxCLEIxbgS6DjhzeeJxjYGRgYABio+ULXOP5bb4ycLMwgMCdZ9bOyDQLA9MPIMXBwATiAQAM4Aj3AAAAeJxjYGRgYG7438DAwMIAAkCSkQEVMAMAPVUCEAQAAAAEAAAABAAAAAAAAAAAJABIeJxjYGRgYGBmEGQA0QwMTEDMBYQMDP/BfAYAClsBLAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICZkYmRmZGFgTsrMzGvJL9UtzK/FM6uKs1nYAAAhN8JOwA="

/***/ }),

/***/ "91e4":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".daisy-calendar__root{color:#2c3e50;padding:10px;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;border:1px solid #2c3e50;border-radius:8px}.daisy-calendar__root .daisy-calendar__nav{flex:1;display:flex;justify-content:space-between;align-items:center}.daisy-calendar__root .daisy-calendar__nav i{cursor:pointer}.daisy-calendar__root .daisy-calendar__weekbar{flex:1;display:flex}.daisy-calendar__root .daisy-calendar__weekbar .daisy-calendar__weekbar-item{flex:1;height:100%}.daisy-calendar__root .daisy-calendar__panel{flex:6}.daisy-calendar__root .daisy-calendar__panel .daisy-calendar__panel-row{box-sizing:border-box;width:100%;height:16.66%;display:flex}.daisy-calendar__root .daisy-calendar__panel .daisy-calendar__panel-row .daisy-calendar__panel-date{box-sizing:border-box;flex:1}.daisy-calendar__root .daisy-calendar__border{border:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d84e":
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,d09GMgABAAAAAAK8AAsAAAAABsgAAAJtAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGZACCfgqBEIEQATYCJAMMCwgABCAFhG0HQxv7BRHVkxVkX0JONvRA0lieU1wQGSQP999RbABG+wcqhSpYAAAAAIAInsb6zdvdL6qYRjFJIpppmkRDJBIihEKkHUTRBPm2Nn39RqVysiR6+S7/QAI7XAhdCmPaAHAHG45xMp+53VzWgf4CZcbXC0MmEztGZsecz3M5vgV0drT6luW01rZpvcMDqzSgQPewoshKKOMUandQEFb+1TMCjZZaI23Kdh3SetXdvW5QEQ4HTWdcbS+cUq/zikKb9ULtxP6aIv7VkB6nGE+K78cvUShJTRY+tO/85rM+zNcos7odzRXbeQP08US1qgYZC1GII0h9nyym2KyxXkzzylrw1Z2+r2RB8XIuEX9d3N4M5tJG4iuJmuCrBySQQW23OYnFjOm+NERHx5n6TRr9awisXnI7sirw1z+mne6/oiXpn8OftLqv7P/uQuvfcrx738cCJ7Fy+pQufhEIJt/qtK36X6+Aym0k/gJ31r8+HvwxB1CxeAVymTIstgeyDmBpQqNGVIXpTl/2O3vgbkK9nh3JOiMNsnrTRGEWokaTlahVby0aLbD1cJMut2VRGjDffYLQ7h2SVu+RtftIFOYzavT6g1rtIWh0JPCdyaO1CTrFCooPtCVPFIfUlp0XrNfBSdtU8A+UpS1B6AX9Vo4TyhkblmcdqRKQ8AgZeQyHgWEW7rBUr1GdY9+nqTd5JY/GStApVqD4gLbkibLRagefv2C9Dk4WZF3NB8rSTg9CngAgcvsEyb7lleVZR1QJkPAIMjILh4HBPD2rw1I9zY7qHPMjJULt3v3O8ftOQKPwjBwpchQut25SXs+fxNzUvisbAwAAAA=="

/***/ }),

/***/ "dfb0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0c69");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6225acfa", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d999eb5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/calendar/src/calendar.vue?vue&type=template&id=6928e83c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.matrix)?_c('div',{staticClass:"daisy-calendar__root"},[_c('div',{staticClass:"daisy-calendar__nav"},[_vm._t("navbar",function(){return [_c('i',{staticClass:"icon iconfont icon-jiantou-zuo",on:{"click":_vm.lastMonth}}),_c('span',[_vm._v(_vm._s(_vm.config.seedDate.getFullYear() + "年" + (_vm.config.seedDate.getMonth() + 1) + "月"))]),_c('i',{staticClass:"icon iconfont icon-jiantou-you",on:{"click":_vm.nextMonth}})]},{"seedDate":_vm.config.seedDate})],2),_c('div',{staticClass:"daisy-calendar__weekbar"},_vm._l((7),function(day){return _c('div',{key:'week' + day,staticClass:"daisy-calendar__weekbar-item daisy-calendar__border"},[_c('div',[_vm._v(" "+_vm._s(_vm.config.mondayToSunday[day - 1])+" ")])])}),0),_c('div',{staticClass:"daisy-calendar__panel"},_vm._l((_vm.matrix),function(row,rowIndex){return _c('div',{key:rowIndex + Math.random(),staticClass:"daisy-calendar__panel-row"},_vm._l((row),function(date,colIndex){return _c('div',{key:rowIndex + '-' + colIndex + Math.random(),staticClass:"daisy-calendar__panel-date daisy-calendar__border",on:{"click":function($event){return _vm.clickDate(date)}}},[_vm._t("default",function(){return [_c('div',[(_vm.isSameMonth(date, _vm.config.seedDate))?_c('div',[_vm._v(" "+_vm._s(date.getDate())+" ")]):_vm._e()])]},{"date":date,"seedDate":_vm.config.seedDate,"data":_vm.data(date),"tool":{
						isSameMonth: _vm.isSameMonth(date, _vm.config.seedDate),
						isSelectDay: _vm.isSameDay(date, _vm.selectDate),
						isToday: _vm.isSameDay(date, new Date())
					}})],2)}),0)}),0)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/calendar/src/calendar.vue?vue&type=template&id=6928e83c&

// CONCATENATED MODULE: ./packages/calendar/src/utils.js
/* harmony default export */ var utils = ({
	calcMonthMatrix(seedDate = new Date(), weekStart = 1) {
		//1.通过种子日期计算出本月第一天
		let firstDateOfMonth = new Date(
			seedDate.getFullYear(),
			seedDate.getMonth(),
			1
		);
		//2.获取第一天是周几
		let firstDayOfWeek = firstDateOfMonth.getDay();
		//3.根据一周起始日计算（各地习惯不同）本月1号的未知
		if (weekStart < 0 || weekStart > 6) {
			throw new Error(
				"一周的起始天数只能在0～6的范围，0~6分别代表周天~周六为起始日期"
			);
		}
		//重排周数组，并获取1号的位置
		let postion = [0, 1, 2, 3, 4, 5, 6]
			.map(ele => {
				let rs = ele + weekStart;
				return rs >= 7 ? rs - 7 : rs;
			})
			.indexOf(firstDayOfWeek);

		//构造6*7数组
		let year = firstDateOfMonth.getFullYear();
		let month = firstDateOfMonth.getMonth();
		let matrix = [];
		for (let i = 0; i < 6; i++) {
			matrix[i] = [];
			for (let j = 0; j < 7; j++) {
				matrix[i][j] = new Date(year, month, i * 7 + (j + 1) - postion);
			}
		}
		return matrix;
	}
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/calendar/src/calendar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var calendarvue_type_script_lang_js_ = ({
	name: "calendar",
	data() {
		const defaultConfig = {
			seedDate: new Date(),
			startOfWeek: 1,
			mondayToSunday: ["一", "二", "三", "四", "五", "六", "日"]
		};
		return {
			defaultConfig,
			config: { ...defaultConfig, ...this.$attrs },
			selectDate: defaultConfig.seedDate,
			matrix: null,
			box: {}
		};
	},
	computed: {
		data() {
			let self = this;
			return date => {
				return self.box[date.toGMTString()];
			};
		}
	},
	methods: {
		calcMonthMatrix(
			seedDate = this.config.seedDate,
			startOfWeek = this.config.startOfWeek
		) {
			return utils.calcMonthMatrix(seedDate, startOfWeek);
		},
		changeMonth(delta) {
			let seedDate = this.config.seedDate;
			this.config.seedDate = new Date(
				seedDate.getFullYear(),
				seedDate.getMonth() + delta,
				1
			);
			this.$emit(
				"onMonthChange",
				this.config.seedDate,
				this.saveBox.bind(this),
				this.getFromBox.bind(this)
			);
		},
		getFromBox(date) {
			return this.box[date.toGMTString()];
		},
		saveBox(date, data) {
			this.box = { ...this.box, ...{ [date.toGMTString()]: data } };
		},
		nextMonth() {
			this.changeMonth(1);
		},
		lastMonth() {
			this.changeMonth(-1);
		},
		clickDate(date) {
			this.$emit(
				"onDateClick",
				date,
				this.saveBox.bind(this),
				this.getFromBox.bind(this)
			);
			if (this.isSameDay(this.selectDate, date)) {
				//点击来相同的时间
			} else {
				this.selectDate = date;
				this.$emit(
					"onDateChange",
					date,
					this.saveBox.bind(this),
					this.getFromBox.bind(this)
				);
			}
		},
		isSameDay(d1, d2) {
			return this.isSameMonth(d1, d2) && d1.getDate() === d2.getDate();
		},
		isSameMonth(d1, d2) {
			return this.isSameYear(d1, d2) && d1.getMonth() === d2.getMonth();
		},
		isSameYear(d1, d2) {
			return d1.getFullYear() === d2.getFullYear();
		},
		isWeekDay(date) {
			return date.getDay() % 6 !== 0;
		},
		getExtraByDate(date) {
			return this.box[date.toGMTString()];
		}
	},
	created() {
		// this.matrix = this.calcMonthMatrix();
		this.changeMonth(0);
		this.config.mondayToSunday = [0, 1, 2, 3, 4, 5, 6]
			.map(ele => {
				let rs = ele + this.config.startOfWeek;
				return rs >= 7 ? rs - 7 : rs;
			})
			.map(index => {
				return this.config.mondayToSunday[index - 1 < 0 ? 6 : index - 1];
			});
	},
	watch: {
		"config.seedDate": {
			handler(newValue, oldValue) {
				if (
					!!!oldValue ||
					newValue.getFullYear() !== oldValue.getFullYear() ||
					newValue.getMonth() !== oldValue.getMonth()
				) {
					this.matrix = this.calcMonthMatrix();
				}
			},
			immediate: true
		},
		"config.startOfWeek": {
			handler(newValue, oldValue) {
				this.matrix = this.calcMonthMatrix();
			},
			immediate: false
		}
	}
});

// CONCATENATED MODULE: ./packages/calendar/src/calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_calendarvue_type_script_lang_js_ = (calendarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/calendar/src/calendar.vue?vue&type=style&index=0&lang=scss&
var calendarvue_type_style_index_0_lang_scss_ = __webpack_require__("49ab");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/calendar/src/calendar.vue






/* normalize component */

var component = normalizeComponent(
  src_calendarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var calendar = (component.exports);
// EXTERNAL MODULE: ./packages/assets/style/main.scss
var main = __webpack_require__("695e");

// EXTERNAL MODULE: ./packages/assets/iconfont/iconfont.css
var iconfont = __webpack_require__("dfb0");

// CONCATENATED MODULE: ./packages/calendar/index.js



calendar.install = function(Vue) {
	Vue.component(calendar.name, calendar);
};
/* harmony default export */ var packages_calendar = (calendar);

// CONCATENATED MODULE: ./packages/index.js


const components = [packages_calendar];
const install = function(Vue) {
	// 判断是否安装
	if (install.installed) return;
	components.map(component => {
		Vue.component(component.name, component);
	});
	// 判断是否是直接引入文件
	if (typeof window !== "undefined" && window.Vue) {
		install(window.Vue);
	}
};
/* harmony default export */ var packages_0 = ({
	// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
	install,
	calendar: packages_calendar
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=daisy-calendar.umd.js.map