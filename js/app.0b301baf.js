/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"chunk-0902747c":"ad50f22d","chunk-28aef6c6":"a5aa9135","chunk-4e608d41":"c1073488","chunk-53257922":"776bdfc7","chunk-6071fba5":"dfdb8f01","chunk-607a5e5f":"1254880b","chunk-607dcbd7":"e8f96876","chunk-9742337a":"06fbf0fa","chunk-e5d9a56e":"c3a9e1e0","chunk-60186489":"b681704b"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"chunk-0902747c":1,"chunk-28aef6c6":1,"chunk-4e608d41":1,"chunk-53257922":1,"chunk-6071fba5":1,"chunk-607a5e5f":1,"chunk-607dcbd7":1,"chunk-9742337a":1,"chunk-e5d9a56e":1,"chunk-60186489":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"chunk-0902747c":"209c3d00","chunk-28aef6c6":"ef294722","chunk-4e608d41":"41c09eda","chunk-53257922":"689e56bf","chunk-6071fba5":"7fdfa5ef","chunk-607a5e5f":"8968908c","chunk-607dcbd7":"7fdfa5ef","chunk-9742337a":"cfc6b728","chunk-e5d9a56e":"fdcb88fa","chunk-60186489":"57332c4a"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "02b5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/14.d8f9884e.png";

/***/ }),

/***/ "07b1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.18d12b95.png";

/***/ }),

/***/ "131c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1323":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/8.861fc410.png";

/***/ }),

/***/ "168e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/0.ab0388ac.png";

/***/ }),

/***/ "1b9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1acdbebf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ArtGalleryModal.vue?vue&type=template&id=457b2108&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    modal: true,
    'modal-default-view': true,
    'p-0': _vm.displayImgSrc !== null,
  }},[_c('div',{staticClass:"modal-header"},[_c('span',{staticClass:"modal-icon close",on:{"click":function($event){return _vm.kcloseArtGalleryModal()}}}),_c('span',{staticClass:"modal-icon"}),_c('span',{staticClass:"modal-icon"}),(_vm.displayImgSrc !== null)?_c('button',{staticClass:"back-arrow",on:{"click":function($event){return _vm.kCloseMainImage()}}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-chevron-left")])],1):_vm._e(),(_vm.displayImgSrc !== null)?_c('input',{staticClass:"zoom-controller",attrs:{"type":"range","step":"0.1","min":"1","max":"2","value":"1"},on:{"change":function($event){return _vm.updateImageZoom($event)},"mousemove":function($event){return _vm.updateImageZoom($event)}}}):_vm._e()]),_c('div',{class:{
      'modal-body': true,
      'modal-body-default-view': true,
      'p-0': _vm.displayImgSrc !== null,
    },attrs:{"id":"modalBody"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.displayImgSrc === null),expression:"displayImgSrc === null"}],attrs:{"id":"gridContainer"}}),(_vm.displayImgSrc !== null)?_c('MainImage',{ref:"mainImage",attrs:{"displayImgSrc":_vm.displayImgSrc}}):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ArtGalleryModal.vue?vue&type=template&id=457b2108&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./src/assets/artGalleryImages/imageConfig.js
var imageConfig = [{
  src: __webpack_require__("168e"),
  alt: "Art Gallery Image 0"
}, {
  src: __webpack_require__("07b1"),
  alt: "Art Gallery Image 1"
}, {
  src: __webpack_require__("78b7"),
  alt: "Art Gallery Image 2"
}, {
  src: __webpack_require__("3c1e"),
  alt: "Art Gallery Image 3"
}, {
  src: __webpack_require__("6e48"),
  alt: "Art Gallery Image 4"
}, {
  src: __webpack_require__("620c"),
  alt: "Art Gallery Image 5"
}, {
  src: __webpack_require__("8ecb"),
  alt: "Art Gallery Image 6"
}, {
  src: __webpack_require__("cb6a"),
  alt: "Art Gallery Image 7"
}, {
  src: __webpack_require__("1323"),
  alt: "Art Gallery Image 8"
}, {
  src: __webpack_require__("a443"),
  alt: "Art Gallery Image 9"
}, {
  src: __webpack_require__("e1d5"),
  alt: "Art Gallery Image 10"
}, {
  src: __webpack_require__("a3fb"),
  alt: "Art Gallery Image 11"
}, {
  src: __webpack_require__("c0fb"),
  alt: "Art Gallery Image 12"
}, {
  src: __webpack_require__("7161"),
  alt: "Art Gallery Image 13"
}, {
  src: __webpack_require__("02b5"),
  alt: "Art Gallery Image 14"
}, {
  src: __webpack_require__("7622"),
  alt: "Art Gallery Image 15"
}, {
  src: __webpack_require__("7669"),
  alt: "Art Gallery Image 16"
}, {
  src: __webpack_require__("d1b0"),
  alt: "Art Gallery Image 17"
}, {
  src: __webpack_require__("f4a3"),
  alt: "Art Gallery Image 18"
}, {
  src: __webpack_require__("6899"),
  alt: "Art Gallery Image 19"
}, {
  src: __webpack_require__("63ba"),
  alt: "Art Gallery Image 20"
}, {
  src: __webpack_require__("26e1"),
  alt: "Art Gallery Image 21"
}, {
  src: __webpack_require__("9a85"),
  alt: "Art Gallery Image 22"
}, {
  src: __webpack_require__("ad73"),
  alt: "Art Gallery Image 23"
}];

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1acdbebf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageComponent.vue?vue&type=template&id=35f651e4&scoped=true&
var ImageComponentvue_type_template_id_35f651e4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c('img',{class:("image" + _vm.index),attrs:{"src":_vm.imgSrc,"alt":"Enlarged image","draggable":"false"},on:{"click":function($event){return _vm.open(_vm.imgSrc, _vm.index)}}})])}
var ImageComponentvue_type_template_id_35f651e4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ImageComponent.vue?vue&type=template&id=35f651e4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageComponent.vue?vue&type=script&lang=js&

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
/* harmony default export */ var ImageComponentvue_type_script_lang_js_ = ({
  props: {
    imgSrc: String,
    index: Number,
    openImage: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    open: function open(s, i) {
      this.openImage(s, i);
    }
  }
});
// CONCATENATED MODULE: ./src/components/ImageComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageComponentvue_type_script_lang_js_ = (ImageComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/styles/ArtGalleryModal.scss?vue&type=style&index=0&id=35f651e4&scoped=true&lang=scss&
var ArtGalleryModalvue_type_style_index_0_id_35f651e4_scoped_true_lang_scss_ = __webpack_require__("2b20");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/ImageComponent.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImageComponentvue_type_script_lang_js_,
  ImageComponentvue_type_template_id_35f651e4_scoped_true_render,
  ImageComponentvue_type_template_id_35f651e4_scoped_true_staticRenderFns,
  false,
  null,
  "35f651e4",
  null
  
)

/* harmony default export */ var ImageComponent = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1acdbebf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainImage.vue?vue&type=template&id=1217ab4c&scoped=true&
var MainImagevue_type_template_id_1217ab4c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",staticStyle:{"position":"relative"}},[_c('div',{attrs:{"id":"primary-img"}},[_c('img',{directives:[{name:"drag",rawName:"v-drag"}],attrs:{"src":_vm.displayImgSrc}})])])}
var MainImagevue_type_template_id_1217ab4c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MainImage.vue?vue&type=template&id=1217ab4c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainImage.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MainImagevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      zoom: 1.0
    };
  },
  props: ["displayImgSrc"],
  methods: {
    closeImage: function closeImage() {
      this.zoom = 1;
      this.setImageZoom(this.zoom);
      this.$parent.displayImgSrc = null;
    },
    zoomIn: function zoomIn() {
      this.zoom += 0.1;
      this.setImageZoom(this.zoom);
    },
    zoomOut: function zoomOut() {
      if (this.zoom > 1) {
        this.zoom -= 0.1;
        this.setImageZoom(this.zoom);
      }
    },
    setImageZoom: function setImageZoom(value) {
      var img = document.getElementById("primary-img");
      img.style.transform = "scale(".concat(value, ")");
    }
  }
});
// CONCATENATED MODULE: ./src/components/MainImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MainImagevue_type_script_lang_js_ = (MainImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/styles/ArtGalleryModal.scss?vue&type=style&index=0&id=1217ab4c&scoped=true&lang=scss&
var ArtGalleryModalvue_type_style_index_0_id_1217ab4c_scoped_true_lang_scss_ = __webpack_require__("2adc");

// CONCATENATED MODULE: ./src/components/MainImage.vue






/* normalize component */

var MainImage_component = Object(componentNormalizer["a" /* default */])(
  components_MainImagevue_type_script_lang_js_,
  MainImagevue_type_template_id_1217ab4c_scoped_true_render,
  MainImagevue_type_template_id_1217ab4c_scoped_true_staticRenderFns,
  false,
  null,
  "1217ab4c",
  null
  
)

/* harmony default export */ var MainImage = (MainImage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--14-0!./src/scripts/ArtGalleryModal.js?vue&type=script&lang=js&




/* harmony default export */ var ArtGalleryModalvue_type_script_lang_js_ = ({
  name: "ArtGallery",
  components: {
    MainImage: MainImage
  },
  data: function data() {
    return {
      displayImgSrc: null,
      scrollTopPosition: 0,
      imgCount: 0,
      images: imageConfig,
      openedImageIndex: null
    };
  },
  mounted: function mounted() {
    this.populateImages();
  },
  methods: {
    kcloseArtGalleryModal: function kcloseArtGalleryModal() {
      this.$parent.$data.isArtGalleryOpen = false;
    },
    openImage: function openImage(src, index) {
      this.displayImgSrc = src;
      this.openedImageIndex = index;
    },
    populateImages: function populateImages() {
      var self = this;

      if (window.Worker) {
        var worker = new Worker("/worker.js");

        worker.onmessage = function (event) {
          self.addImageToDOM(event.data);
        };

        worker.onerror = function () {
          console.error("Failed to load image. There is an error with the web worker!");
        };

        worker.postMessage(this.images);
      }
    },
    updateImageZoom: function updateImageZoom(e) {
      this.$refs.mainImage.setImageZoom(e.target.value);
    },
    kCloseMainImage: function kCloseMainImage() {
      var _this = this;

      if (this.displayImgSrc) {
        this.$refs.mainImage.closeImage();
      }

      setTimeout(function () {
        var image = document.querySelector(".image".concat(_this.openedImageIndex));
        if (image) image.scrollIntoView();
        _this.openedImageIndex = null;
      }, 0);
    },
    addImageToDOM: function addImageToDOM(data) {
      var imageComponentClass = vue_runtime_esm["a" /* default */].extend(ImageComponent);
      var img = new imageComponentClass({
        propsData: {
          imgSrc: data[0],
          index: data[1],
          openImage: this.openImage
        }
      });
      img.$mount();
      document.getElementById("gridContainer").appendChild(img.$el);
    }
  }
});
// CONCATENATED MODULE: ./src/scripts/ArtGalleryModal.js?vue&type=script&lang=js&
 /* harmony default export */ var scripts_ArtGalleryModalvue_type_script_lang_js_ = (ArtGalleryModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/styles/Modal.scss?vue&type=style&index=0&id=457b2108&scoped=true&lang=scss&
var Modalvue_type_style_index_0_id_457b2108_scoped_true_lang_scss_ = __webpack_require__("7443");

// EXTERNAL MODULE: ./src/styles/ArtGalleryModal.scss?vue&type=style&index=1&id=457b2108&scoped=true&lang=scss&
var ArtGalleryModalvue_type_style_index_1_id_457b2108_scoped_true_lang_scss_ = __webpack_require__("7b32");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("6544");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js + 3 modules
var VIcon = __webpack_require__("132d");

// CONCATENATED MODULE: ./src/components/ArtGalleryModal.vue







/* normalize component */

var ArtGalleryModal_component = Object(componentNormalizer["a" /* default */])(
  scripts_ArtGalleryModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "457b2108",
  null
  
)

/* harmony default export */ var ArtGalleryModal = __webpack_exports__["default"] = (ArtGalleryModal_component.exports);

/* vuetify-loader */


installComponents_default()(ArtGalleryModal_component, {VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ "26e1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/21.f8102079.png";

/***/ }),

/***/ "2adc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_ArtGalleryModal_scss_vue_type_style_index_0_id_1217ab4c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("131c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_ArtGalleryModal_scss_vue_type_style_index_0_id_1217ab4c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_ArtGalleryModal_scss_vue_type_style_index_0_id_1217ab4c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2b20":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_ArtGalleryModal_scss_vue_type_style_index_0_id_35f651e4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c00f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_ArtGalleryModal_scss_vue_type_style_index_0_id_35f651e4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_ArtGalleryModal_scss_vue_type_style_index_0_id_35f651e4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3c1e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.2398f86a.png";

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1acdbebf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=fccfcbfa&
var Appvue_type_template_id_fccfcbfa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{staticClass:"app"},[_c('v-main',[_c('IndexScreen',{ref:"IndexScreen"})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=fccfcbfa&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__("9861");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("841c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1acdbebf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/IndexScreen.vue?vue&type=template&id=fc3edabe&scoped=true&
var IndexScreenvue_type_template_id_fc3edabe_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"home-screen"},[_c('div',{staticClass:"nav-tray"},[_c('div',{staticClass:"nav-option",on:{"click":function($event){return _vm.openKCloseHome()}}},[(_vm.isHomeOpen)?_c('folder-open',{style:("--element-color: #c7c7bb")}):_c('folder-close',{style:("--element-color: #c7c7bb")}),_c('p',{staticClass:"nav-title"},[_vm._v("Home")])],1),_c('div',{staticClass:"nav-option",on:{"click":function($event){return _vm.openKCloseProjects()}}},[(_vm.isProjectsOpen)?_c('folder-open',{style:("--element-color: #c9c2ea")}):_c('folder-close',{style:("--element-color: #c9c2ea")}),_c('p',{staticClass:"nav-title"},[_vm._v("Projects")])],1),_c('div',{staticClass:"nav-option",on:{"click":function($event){return _vm.openKCloseHonoursAndRewards()}}},[(_vm.isHonoursAndRewardsOpen)?_c('folder-open',{style:("--element-color: #f0caa3")}):_c('folder-close',{style:("--element-color: #f0caa3")}),_c('p',{staticClass:"nav-title"},[_vm._v("Honours")])],1),_c('div',{staticClass:"nav-option",on:{"click":function($event){return _vm.openKCloseCVEs()}}},[(_vm.isCVEOpen)?_c('folder-open',{style:("--element-color: #cae8d7")}):_c('folder-close',{style:("--element-color: #cae8d7")}),_c('p',{staticClass:"nav-title"},[_vm._v("CVEs")])],1),_c('div',{staticClass:"nav-option",on:{"click":function($event){return _vm.openKCloseArtGallery()}}},[(_vm.isArtGalleryOpen)?_c('folder-open',{style:("--element-color: #b5f0cb")}):_c('folder-close',{style:("--element-color: #b5f0cb")}),_c('p',{staticClass:"nav-title"},[_vm._v("Art Gallery")])],1),_c('div',{staticClass:"nav-option",on:{"click":function($event){return _vm.openKClosePresentations()}}},[(_vm.isPresentationsOpen)?_c('folder-open',{style:("--element-color: #b5f0cb")}):_c('folder-close',{style:("--element-color: #b5f0cb")}),_c('p',{staticClass:"nav-title"},[_vm._v("Presentations")])],1)])]),(_vm.isHomeOpen)?_c('HomeModal'):_vm._e(),(_vm.isProjectsOpen)?_c('ProjectsModal'):_vm._e(),(_vm.isHonoursAndRewardsOpen)?_c('HonoursAndPublicationsModal'):_vm._e(),(_vm.isPublicationsOpen)?_c('PublicationsModal'):_vm._e(),_c('ArtGalleryModal',{directives:[{name:"show",rawName:"v-show",value:(_vm.isArtGalleryOpen),expression:"isArtGalleryOpen"}],ref:"artGallery"}),_c('BlogsModal',{directives:[{name:"show",rawName:"v-show",value:(_vm.isBlogsOpen),expression:"isBlogsOpen"}],ref:"blogsModal"}),(_vm.isCVEOpen)?_c('CVEModal'):_vm._e(),(_vm.isPresentationsOpen)?_c('PresentationModal'):_vm._e()],1)}
var IndexScreenvue_type_template_id_fc3edabe_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/IndexScreen.vue?vue&type=template&id=fc3edabe&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--14-0!./src/scripts/IndexScreen.js?vue&type=script&lang=js&




var HomeModal = function HomeModal() {
  return __webpack_require__.e(/* import() */ "chunk-9742337a").then(__webpack_require__.bind(null, "ca3b"));
};

var ProjectsModal = function ProjectsModal() {
  return __webpack_require__.e(/* import() */ "chunk-4e608d41").then(__webpack_require__.bind(null, "83a8"));
};

var HonoursAndPublicationsModal = function HonoursAndPublicationsModal() {
  return __webpack_require__.e(/* import() */ "chunk-53257922").then(__webpack_require__.bind(null, "7a42"));
};

var PublicationsModal = function PublicationsModal() {
  return __webpack_require__.e(/* import() */ "chunk-28aef6c6").then(__webpack_require__.bind(null, "02ed"));
};

var ArtGalleryModal = function ArtGalleryModal() {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "1b9b"));
};

var BlogsModal = function BlogsModal() {
  return __webpack_require__.e(/* import() */ "chunk-0902747c").then(__webpack_require__.bind(null, "fe4a"));
};

var FolderClose = function FolderClose() {
  return __webpack_require__.e(/* import() */ "chunk-607dcbd7").then(__webpack_require__.bind(null, "f276"));
};

var FolderOpen = function FolderOpen() {
  return __webpack_require__.e(/* import() */ "chunk-6071fba5").then(__webpack_require__.bind(null, "e76a"));
};

var CVEModal = function CVEModal() {
  return __webpack_require__.e(/* import() */ "chunk-e5d9a56e").then(__webpack_require__.bind(null, "4b19"));
};

var PresentationModal = function PresentationModal() {
  return __webpack_require__.e(/* import() */ "chunk-607a5e5f").then(__webpack_require__.bind(null, "9b74"));
};

/* harmony default export */ var IndexScreenvue_type_script_lang_js_ = ({
  name: "IndexScreen",
  components: {
    HomeModal: HomeModal,
    ProjectsModal: ProjectsModal,
    HonoursAndPublicationsModal: HonoursAndPublicationsModal,
    PublicationsModal: PublicationsModal,
    ArtGalleryModal: ArtGalleryModal,
    BlogsModal: BlogsModal,
    FolderClose: FolderClose,
    FolderOpen: FolderOpen,
    CVEModal: CVEModal,
    PresentationModal: PresentationModal
  },
  data: function data() {
    return {
      isHomeOpen: true,
      isProjectsOpen: false,
      isHonoursAndRewardsOpen: false,
      isPublicationsOpen: false,
      isCVEOpen: false,
      isBlogsOpen: false,
      isArtGalleryOpen: false,
      isPresentationsOpen: false
    };
  },
  methods: {
    openKCloseHome: function openKCloseHome() {
      this.kcloseOtherModals("Home");
      this.isHomeOpen = !this.isHomeOpen;
    },
    openKCloseProjects: function openKCloseProjects() {
      this.kcloseOtherModals("Projects");
      this.isProjectsOpen = !this.isProjectsOpen;
    },
    openKCloseHonoursAndRewards: function openKCloseHonoursAndRewards() {
      this.kcloseOtherModals("HonoursAndRewards");
      this.isHonoursAndRewardsOpen = !this.isHonoursAndRewardsOpen;
    },
    openKClosePublications: function openKClosePublications() {
      this.kcloseOtherModals("Publications");
      this.isPublicationsOpen = !this.isPublicationsOpen;
    },
    openKCloseCVEs: function openKCloseCVEs() {
      this.kcloseOtherModals("CVEs");
      this.isCVEOpen = !this.isCVEOpen;
    },
    openKCloseBlogs: function openKCloseBlogs() {
      this.kcloseOtherModals("Blogs");
      this.isBlogsOpen = !this.isBlogsOpen;
      var openedBlog = this.$refs.blogsModal.openedBlogId;

      if (openedBlog) {
        this.$refs.blogsModal.openedBlogId = null;
        this.$refs.blogsModal.updateAddressBarURL(null);
      }
    },
    openKCloseArtGallery: function openKCloseArtGallery() {
      this.kcloseOtherModals("ArtGallery");
      this.isArtGalleryOpen = !this.isArtGalleryOpen;

      if (this.$refs.artGallery.displayImgSrc) {
        this.$refs.artGallery.$refs.mainImage.closeImage();
      }
    },
    openKClosePresentations: function openKClosePresentations() {
      this.kcloseOtherModals("Presentations");
      this.isPresentationsOpen = !this.isPresentationsOpen;
    },
    kcloseOtherModals: function kcloseOtherModals(clickedModal) {
      if (clickedModal !== "Home") this.isHomeOpen = false;
      if (clickedModal !== "Projects") this.isProjectsOpen = false;
      if (clickedModal !== "HonoursAndRewards") this.isHonoursAndRewardsOpen = false;
      if (clickedModal !== "Publications") this.isPublicationsOpen = false;
      if (clickedModal !== "CVEs") this.isCVEOpen = false;

      if (clickedModal !== "Blogs") {
        this.isBlogsOpen = false;
        this.$refs.blogsModal.openedBlogId = null;
        this.$refs.blogsModal.updateAddressBarURL(null);
      }

      if (clickedModal !== "ArtGallery") {
        this.isArtGalleryOpen = false;

        if (this.$refs.artGallery.displayImgSrc) {
          this.$refs.artGallery.$refs.mainImage.closeImage();
        }
      }

      if (clickedModal !== "Presentations") this.isPresentationsOpen = false;
    }
  }
});
// CONCATENATED MODULE: ./src/scripts/IndexScreen.js?vue&type=script&lang=js&
 /* harmony default export */ var scripts_IndexScreenvue_type_script_lang_js_ = (IndexScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/styles/IndexScreen.scss?vue&type=style&index=0&id=fc3edabe&scoped=true&lang=scss&
var IndexScreenvue_type_style_index_0_id_fc3edabe_scoped_true_lang_scss_ = __webpack_require__("c2df");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/IndexScreen.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  scripts_IndexScreenvue_type_script_lang_js_,
  IndexScreenvue_type_template_id_fc3edabe_scoped_true_render,
  IndexScreenvue_type_template_id_fc3edabe_scoped_true_staticRenderFns,
  false,
  null,
  "fc3edabe",
  null
  
)

/* harmony default export */ var IndexScreen = (component.exports);
// EXTERNAL MODULE: ./src/components/ArtGalleryModal.vue + 15 modules
var components_ArtGalleryModal = __webpack_require__("1b9b");

// CONCATENATED MODULE: ./src/assets/blogs/blogAndIdMapping.js
var blogAndIdMapping = {
  "uncovering-tor's-hidden-gems:-.onion-urls": 1
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//




/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: "App",
  components: {
    IndexScreen: IndexScreen
  },
  methods: {
    redirectToBlogsModalIfUrlContainsBlogTitle: function redirectToBlogsModalIfUrlContainsBlogTitle() {
      var _this = this;

      var urlParams = new URLSearchParams(window.location.search);

      if (urlParams.has("blog")) {
        var blogTitle = urlParams.get("blog");
        var blogId = blogAndIdMapping[blogTitle];

        if (blogId) {
          this.$refs.IndexScreen.isHomeOpen = false;
          setTimeout(function () {
            _this.$refs.IndexScreen.isBlogsOpen = true;
            _this.$refs.IndexScreen.$refs.blogsModal.openedBlogId = blogId;
          }, 100);
        }
      }
    }
  },
  mounted: function mounted() {
    // invokes art gallery modal
    var artGalleryModal = vue_runtime_esm["a" /* default */].extend(components_ArtGalleryModal["default"]);
    new artGalleryModal(); // redirect to blogs modal and open the specified blog in the URL.
    // this.redirectToBlogsModalIfUrlContainsBlogTitle();
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("5c0b");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("6544");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__("7496");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js + 1 modules
var VMain = __webpack_require__("f6c4");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_fccfcbfa_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);

/* vuetify-loader */



installComponents_default()(App_component, {VApp: VApp["a" /* default */],VMain: VMain["a" /* default */]})

// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.js + 33 modules
var framework = __webpack_require__("f309");

// CONCATENATED MODULE: ./src/plugins/vuetify.js


vue_runtime_esm["a" /* default */].use(framework["a" /* default */]);
/* harmony default export */ var vuetify = (new framework["a" /* default */]({
  theme: {
    disable: true
  }
}));
// EXTERNAL MODULE: ./node_modules/v-drag/dist/module.js
var dist_module = __webpack_require__("54f5");

// EXTERNAL MODULE: ./node_modules/vue-carousel/dist/vue-carousel.min.js
var vue_carousel_min = __webpack_require__("0a63");
var vue_carousel_min_default = /*#__PURE__*/__webpack_require__.n(vue_carousel_min);

// CONCATENATED MODULE: ./src/main.js









vue_runtime_esm["a" /* default */].config.productionTip = false;
vue_runtime_esm["a" /* default */].use(dist_module["a" /* default */]);
vue_runtime_esm["a" /* default */].use(vue_carousel_min_default.a);
new vue_runtime_esm["a" /* default */]({
  vuetify: vuetify,
  render: function render(h) {
    return h(App);
  }
}).$mount("#app");

/***/ }),

/***/ "5c0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c0c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "620c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5.c30cc187.png";

/***/ }),

/***/ "63ba":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/20.e8a796cd.png";

/***/ }),

/***/ "6899":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/19.bdb3682d.png";

/***/ }),

/***/ "6e48":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/4.97940f95.png";

/***/ }),

/***/ "7161":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/13.ee043e6f.png";

/***/ }),

/***/ "7443":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_457b2108_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9b76");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_457b2108_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_457b2108_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7622":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/15.c7e59a4c.png";

/***/ }),

/***/ "7669":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/16.1e80a7ed.png";

/***/ }),

/***/ "78b7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.d77c9a6e.png";

/***/ }),

/***/ "7b32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_ArtGalleryModal_scss_vue_type_style_index_1_id_457b2108_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9075");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_ArtGalleryModal_scss_vue_type_style_index_1_id_457b2108_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_ArtGalleryModal_scss_vue_type_style_index_1_id_457b2108_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8ecb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/6.3de00a5c.png";

/***/ }),

/***/ "9075":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9a85":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/22.f027a68f.png";

/***/ }),

/***/ "9b76":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9c0c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a3fb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/11.581b2e8f.png";

/***/ }),

/***/ "a443":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/9.a42f37bd.png";

/***/ }),

/***/ "ad73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/23.7179d56f.png";

/***/ }),

/***/ "c00f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c0fb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/12.1885cdf7.png";

/***/ }),

/***/ "c2df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_IndexScreen_scss_vue_type_style_index_0_id_fc3edabe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c7c0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_IndexScreen_scss_vue_type_style_index_0_id_fc3edabe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_IndexScreen_scss_vue_type_style_index_0_id_fc3edabe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c7c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cb6a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/7.4edbf275.png";

/***/ }),

/***/ "d1b0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/17.e25d7dd4.png";

/***/ }),

/***/ "e1d5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/10.67f957d2.png";

/***/ }),

/***/ "f4a3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/18.412e0bf8.png";

/***/ })

/******/ });
//# sourceMappingURL=app.0b301baf.js.map