(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-36528893"],{

/***/ "01f6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0958":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3a19":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/profile.e62d3410.jpg";

/***/ }),

/***/ "3d5b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1acdbebf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PresentationModal.vue?vue&type=template&id=5bb08a92&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    modal: true,
    'modal-default-view': !_vm.isPresentationsInFullScreen,
    'modal-full-screen-view': _vm.isPresentationsInFullScreen,
  }},[_c('div',{staticClass:"modal-header"},[_c('span',{staticClass:"modal-icon close",on:{"click":function($event){return _vm.closePresentationModal()}}}),_c('span',{staticClass:"modal-icon"}),_c('span',{staticClass:"modal-icon full-screen",on:{"click":function($event){return _vm.togglePresentationInFullScreen()}}})]),_c('div',{class:{
      'modal-body': true,
      'modal-body-default-view': !_vm.isPresentationsInFullScreen,
      'modal-body-full-screen-view': _vm.isPresentationsInFullScreen,
    },attrs:{"id":"presentationModalBody"}},[_c('div',{staticClass:"slide-info-strip"},[_c('button',{staticClass:"slider-btn slider-btn-left",on:{"click":function($event){return _vm.prevSlide()}}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-chevron-left")])],1),_c('span',{staticClass:"slide-number"},[_vm._v(_vm._s(_vm.curSlide + 1)+"  of  "+_vm._s(_vm.totalSlides))]),_c('button',{staticClass:"slider-btn slider-btn-right",on:{"click":function($event){return _vm.nextSlide()}}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-chevron-right")])],1)]),_c('carousel',{attrs:{"id":"carousel","perPage":1,"navigationEnabled":false,"paginationEnabled":false,"navigateTo":_vm.curSlide},on:{"pageChange":_vm.updateCurSlide}},[_c('slide',{class:{
          slide: true,
          'slide-default-height': !_vm.isPresentationsInFullScreen,
          'slide-expanded-height': _vm.isPresentationsInFullScreen,
        }},[_c('div',{staticClass:"container",attrs:{"id":"container"}},[_c('img',{staticClass:"intro-img",attrs:{"src":__webpack_require__("3a19"),"alt":""}}),_c('div',{staticClass:"intro-desc"},[_c('h1',[_vm._v("Kirtikumar A.R.")]),_c('ul',[_c('li',[_vm._v("Security Researcher")]),_c('li',[_vm._v("World Cyber Games 2019 (Asia 7th, World's Top 32)")]),_c('li',[_vm._v("Paytm First Games National Champion")]),_c('li',[_vm._v("National Representative")]),_c('li',[_vm._v("GPSRP Top Security Researcher for 2022")])])])])]),_c('slide',{class:{
          slide: true,
          'slide-default-height': !_vm.isPresentationsInFullScreen,
          'slide-expanded-height': _vm.isPresentationsInFullScreen,
        }},[_c('div',{staticClass:"container"},[_vm._v("Slide 2")])]),_c('slide',{class:{
          slide: true,
          'slide-default-height': !_vm.isPresentationsInFullScreen,
          'slide-expanded-height': _vm.isPresentationsInFullScreen,
        }},[_c('div',{staticClass:"container"},[_vm._v("Slide 3")])])],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PresentationModal.vue?vue&type=template&id=5bb08a92&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--14-0!./src/scripts/PresentationModal.js?vue&type=script&lang=js&
/* harmony default export */ var PresentationModalvue_type_script_lang_js_ = ({
  mounted: function mounted() {
    var slides = document.querySelectorAll(".slide");
    this.totalSlides = slides.length;
    this.addKeyboardEventsToToggleSlides(); // this.resize();
    // window.addEventListener("resize", this.resize);
  },
  unmounted: function unmounted() {
    window.removeEventListener("keyup");
  },
  data: function data() {
    return {
      isPresentationsInFullScreen: false,
      curSlide: 0,
      totalSlides: undefined
    };
  },
  methods: {
    closePresentationModal: function closePresentationModal() {
      this.$parent.$data.isPresentationsOpen = false;
    },
    togglePresentationInFullScreen: function togglePresentationInFullScreen() {
      this.isPresentationsInFullScreen = !this.isPresentationsInFullScreen;
    },
    nextSlide: function nextSlide() {
      if (this.curSlide === this.totalSlides - 1) {
        this.curSlide = 0;
      } else {
        this.curSlide++;
      }
    },
    prevSlide: function prevSlide() {
      if (this.curSlide === 0) {
        this.curSlide = this.totalSlides - 1;
      } else {
        this.curSlide--;
      }
    },
    addKeyboardEventsToToggleSlides: function addKeyboardEventsToToggleSlides() {
      var _this = this;

      window.addEventListener("keyup", function (e) {
        if (e.key === "ArrowRight") {
          _this.nextSlide();
        } else if (e.key === "ArrowLeft") {
          _this.prevSlide();
        } else if (e.key === "Escape") {
          _this.togglePresentationInFullScreen();
        }
      });
    },
    updateCurSlide: function updateCurSlide(slideNumber) {
      this.curSlide = slideNumber;
    },
    resize: function resize() {
      var containers = document.getElementsByClassName("container");

      for (var index = 0; index < containers.length; index++) {
        var container = containers[index];
        var scale = 1 * container.offsetHeight / container.offsetWidth;
        container.style.transform = "scale(".concat(scale, ")");
      }
    }
  }
});
// CONCATENATED MODULE: ./src/scripts/PresentationModal.js?vue&type=script&lang=js&
 /* harmony default export */ var scripts_PresentationModalvue_type_script_lang_js_ = (PresentationModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/styles/Modal.scss?vue&type=style&index=0&id=5bb08a92&scoped=true&lang=scss&
var Modalvue_type_style_index_0_id_5bb08a92_scoped_true_lang_scss_ = __webpack_require__("fa1c");

// EXTERNAL MODULE: ./src/styles/PresentationModal.scss?vue&type=style&index=1&id=5bb08a92&scoped=true&lang=scss&
var PresentationModalvue_type_style_index_1_id_5bb08a92_scoped_true_lang_scss_ = __webpack_require__("e1cc");

// EXTERNAL MODULE: ./src/styles/customStyle.scss?vue&type=style&index=2&id=5bb08a92&scoped=true&lang=scss&
var customStylevue_type_style_index_2_id_5bb08a92_scoped_true_lang_scss_ = __webpack_require__("defd");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("6544");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js + 3 modules
var VIcon = __webpack_require__("132d");

// CONCATENATED MODULE: ./src/components/PresentationModal.vue








/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  scripts_PresentationModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5bb08a92",
  null
  
)

/* harmony default export */ var PresentationModal = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ "defd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_customStyle_scss_vue_type_style_index_2_id_5bb08a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3d5b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_customStyle_scss_vue_type_style_index_2_id_5bb08a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_customStyle_scss_vue_type_style_index_2_id_5bb08a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e1cc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_PresentationModal_scss_vue_type_style_index_1_id_5bb08a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0958");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_PresentationModal_scss_vue_type_style_index_1_id_5bb08a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_PresentationModal_scss_vue_type_style_index_1_id_5bb08a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fa1c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_5bb08a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("01f6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_5bb08a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_5bb08a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=chunk-36528893.294f0eec.js.map