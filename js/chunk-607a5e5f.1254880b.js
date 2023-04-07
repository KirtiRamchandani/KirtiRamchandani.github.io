(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-607a5e5f"],{

/***/ "1546":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_PresentationModal_scss_vue_type_style_index_1_id_3e6dff4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("741b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_PresentationModal_scss_vue_type_style_index_1_id_3e6dff4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_PresentationModal_scss_vue_type_style_index_1_id_3e6dff4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "70a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_3e6dff4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bc6c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_3e6dff4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_3e6dff4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "741b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1acdbebf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PresentationModal.vue?vue&type=template&id=3e6dff4e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    modal: true,
    'modal-default-view': !_vm.isPresentationsInFullScreen,
    'modal-full-screen-view': _vm.isPresentationsInFullScreen,
  }},[_c('div',{staticClass:"modal-header"},[_c('span',{staticClass:"modal-icon close",on:{"click":function($event){return _vm.closePresentationModal()}}}),_c('span',{staticClass:"modal-icon"}),_c('span',{staticClass:"modal-icon full-screen",on:{"click":function($event){return _vm.togglePresentationInFullScreen()}}})]),_c('div',{class:{
      'modal-body': true,
      'modal-body-default-view': !_vm.isPresentationsInFullScreen,
      'modal-body-full-screen-view': _vm.isPresentationsInFullScreen,
    },attrs:{"id":"presentationModalBody"}},[_c('div',{staticClass:"slide-info-strip"},[_c('button',{staticClass:"slider-btn slider-btn-left",on:{"click":function($event){return _vm.prevSlide()}}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-chevron-left")])],1),_c('span',{staticClass:"slide-number"},[_vm._v(_vm._s(_vm.curSlide + 1)+"  of  "+_vm._s(_vm.totalSlides))]),_c('button',{staticClass:"slider-btn slider-btn-right",on:{"click":function($event){return _vm.nextSlide()}}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-chevron-right")])],1)]),_c('carousel',{attrs:{"id":"carousel","perPage":1,"navigationEnabled":false,"paginationEnabled":false,"navigateTo":_vm.curSlide}},[_c('slide',{staticClass:"slide"},[_vm._v(" Slide 1 ")]),_c('slide',{staticClass:"slide"},[_vm._v(" Slide 2 ")]),_c('slide',{staticClass:"slide"},[_vm._v(" Slide 3 ")]),_c('slide',{staticClass:"slide"},[_vm._v(" Slide 4 ")]),_c('slide',{staticClass:"slide"},[_vm._v(" Slide 5 ")])],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PresentationModal.vue?vue&type=template&id=3e6dff4e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PresentationModal.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PresentationModalvue_type_script_lang_js_ = ({
  mounted: function mounted() {
    var slides = document.querySelectorAll(".slide");
    this.totalSlides = slides.length;
    this.addKeyboardEventsToToggleSlides();
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
    }
  }
});
// CONCATENATED MODULE: ./src/components/PresentationModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PresentationModalvue_type_script_lang_js_ = (PresentationModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/styles/Modal.scss?vue&type=style&index=0&id=3e6dff4e&scoped=true&lang=scss&
var Modalvue_type_style_index_0_id_3e6dff4e_scoped_true_lang_scss_ = __webpack_require__("70a1");

// EXTERNAL MODULE: ./src/styles/PresentationModal.scss?vue&type=style&index=1&id=3e6dff4e&scoped=true&lang=scss&
var PresentationModalvue_type_style_index_1_id_3e6dff4e_scoped_true_lang_scss_ = __webpack_require__("1546");

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
  components_PresentationModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3e6dff4e",
  null
  
)

/* harmony default export */ var PresentationModal = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ "bc6c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-607a5e5f.1254880b.js.map