(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-9c20bb3e"],{

/***/ "7c5f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8779":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25ff3af1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PresentationModal.vue?vue&type=template&id=762e44a0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    modal: true,
    'modal-default-view': !_vm.isPresentationsInFullScreen,
    'modal-full-screen-view': _vm.isPresentationsInFullScreen,
  }},[_c('div',{staticClass:"modal-header"},[_c('span',{staticClass:"modal-icon close",on:{"click":function($event){return _vm.closePresentationModal()}}}),_c('span',{staticClass:"modal-icon"}),_c('span',{staticClass:"modal-icon full-screen",on:{"click":function($event){return _vm.togglePresentationInFullScreen()}}}),(_vm.openedPresentationId !== null)?_c('button',{staticClass:"back-arrow",on:{"click":function($event){return _vm.openKClosePresentation(null)}}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-chevron-left")])],1):_vm._e()]),_c('div',{class:{
      'modal-body': true,
      'modal-body-default-view': !_vm.isPresentationsInFullScreen,
      'modal-body-full-screen-view': _vm.isPresentationsInFullScreen,
    }},[(_vm.openedPresentationId == 1)?_c('Presentation1',{ref:"presentation1",attrs:{"isPresentationsInFullScreen":_vm.isPresentationsInFullScreen,"curSlideOverride":_vm.curSlideOverride}}):(_vm.openedPresentationId === null)?_c('div',{staticStyle:{"padding":"20px 30px 30px"}},[_c('h1',[_vm._v("Presentations")]),_c('div',{staticClass:"presentations"},_vm._l((_vm.presentations),function(p,index){return _c('div',{key:index,staticClass:"presentation-card"},[_c('span',{staticClass:"presentation-title",on:{"click":function($event){return _vm.openKClosePresentation(p.presentationId)}}},[_vm._v(" "+_vm._s(p.heading)+" ")]),_c('p',[_vm._v(_vm._s(p.conferenceName)+", "+_vm._s(p.timeline))]),_c('i',[_c('p',[_vm._v(_vm._s(p.description))])])])}),0)]):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PresentationModal.vue?vue&type=template&id=762e44a0&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--14-0!./src/scripts/PresentationModal.js?vue&type=script&lang=js&




var Presentation1 = function Presentation1() {
  return __webpack_require__.e(/* import() */ "chunk-1335b12d").then(__webpack_require__.bind(null, "3599"));
};

/* harmony default export */ var PresentationModalvue_type_script_lang_js_ = ({
  name: "PresentationModal",
  components: {
    Presentation1: Presentation1
  },
  data: function data() {
    return {
      presentation1Open: false,
      openedPresentationId: null,
      curSlideOverride: null,
      isPresentationsInFullScreen: false,
      presentations: [{
        heading: "Android Hacks Unleashed: Your App is More Vulnerable Than You Think!",
        presentationId: "1",
        conferenceName: "Conference name",
        timeline: "May 2023",
        description: "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis optio,\n          tempora omnis nam aliquam ab deleniti explicabo soluta, suscipit modi ullam\n          reprehenderit rerum obcaecati! Quos quidem reiciendis magni maxime saepe          \n          "
      }, {
        heading: "A Legal Lens: Are Your Company's Secrets Secure in the Digital Age?",
        presentationId: "2",
        conferenceName: "Conference name",
        timeline: "Aug 2023",
        description: "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis optio,\n          tempora omnis nam aliquam ab deleniti explicabo soluta, suscipit modi ullam\n          reprehenderit rerum obcaecati! Quos quidem reiciendis magni maxime saepe          \n          "
      }]
    };
  },
  methods: {
    closePresentationModal: function closePresentationModal() {
      this.$parent.$data.isPresentationsOpen = false;
    },
    togglePresentationInFullScreen: function togglePresentationInFullScreen() {
      this.isPresentationsInFullScreen = !this.isPresentationsInFullScreen;
      this.reRenderPresentation();
    },
    openKClosePresentation: function openKClosePresentation(openedPresentationId) {
      this.openedPresentationId = openedPresentationId;
    },
    reRenderPresentation: function reRenderPresentation() {
      var _this = this;

      this.updateCurSlideOverride(this.$refs.presentation1.curSlide);
      var temp = this.openedPresentationId;
      this.openedPresentationId = 0;
      setTimeout(function () {
        _this.openedPresentationId = temp;
      }, 0);
    },
    updateCurSlideOverride: function updateCurSlideOverride(value) {
      this.curSlideOverride = value;
    }
  }
});
// CONCATENATED MODULE: ./src/scripts/PresentationModal.js?vue&type=script&lang=js&
 /* harmony default export */ var scripts_PresentationModalvue_type_script_lang_js_ = (PresentationModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/styles/Modal.scss?vue&type=style&index=0&id=762e44a0&scoped=true&lang=scss&
var Modalvue_type_style_index_0_id_762e44a0_scoped_true_lang_scss_ = __webpack_require__("da68");

// EXTERNAL MODULE: ./src/styles/PresentationModal.scss?vue&type=style&index=1&id=762e44a0&scoped=true&lang=scss&
var PresentationModalvue_type_style_index_1_id_762e44a0_scoped_true_lang_scss_ = __webpack_require__("d1a2");

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
  "762e44a0",
  null
  
)

/* harmony default export */ var PresentationModal = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ "d1a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_PresentationModal_scss_vue_type_style_index_1_id_762e44a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7c5f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_PresentationModal_scss_vue_type_style_index_1_id_762e44a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_PresentationModal_scss_vue_type_style_index_1_id_762e44a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "da68":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_762e44a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8779");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_762e44a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_762e44a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=chunk-9c20bb3e.bc454031.js.map