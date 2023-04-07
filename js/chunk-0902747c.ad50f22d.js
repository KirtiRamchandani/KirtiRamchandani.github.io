(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0902747c"],{

/***/ "1784":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_BlogsModal_scss_vue_type_style_index_1_id_5a9d16fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c846");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_BlogsModal_scss_vue_type_style_index_1_id_5a9d16fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_BlogsModal_scss_vue_type_style_index_1_id_5a9d16fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5b81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var requireObjectCoercible = __webpack_require__("1d80");
var isCallable = __webpack_require__("1626");
var isRegExp = __webpack_require__("44e7");
var toString = __webpack_require__("577e");
var getMethod = __webpack_require__("dc4a");
var getRegExpFlags = __webpack_require__("90d8");
var getSubstitution = __webpack_require__("0cb2");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var REPLACE = wellKnownSymbol('replace');
var TypeError = global.TypeError;
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var max = Math.max;

var stringIndexOf = function (string, searchValue, fromIndex) {
  if (fromIndex > string.length) return -1;
  if (searchValue === '') return fromIndex;
  return indexOf(string, searchValue, fromIndex);
};

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    if (searchValue != null) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) {
        return call(replacer, searchValue, O, replaceValue);
      } else if (IS_PURE && IS_REG_EXP) {
        return replace(toString(O), searchValue, replaceValue);
      }
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = stringIndexOf(string, searchString, 0);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = stringIndexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});


/***/ }),

/***/ "c652":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_5a9d16fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ee31");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_5a9d16fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_Modal_scss_vue_type_style_index_0_id_5a9d16fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c846":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ee31":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fe4a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1acdbebf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BlogsModal.vue?vue&type=template&id=5a9d16fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal"},[_c('div',{staticClass:"modal-header"},[_c('span',{staticClass:"modal-icon close",on:{"click":function($event){return _vm.closeBlogsModal()}}}),_c('span',{staticClass:"modal-icon"}),_c('span',{staticClass:"modal-icon"}),(_vm.openedBlogId)?_c('button',{staticClass:"back-arrow",on:{"click":function($event){return _vm.kCloseDetailedBlog()}}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-chevron-left")])],1):_vm._e()]),_c('div',{staticClass:"modal-body"},[(_vm.openedBlogId)?_c('DetailedBlog'):_c('div',[_c('h1',[_vm._v("Blogs")]),_c('div',{staticClass:"blogs"},_vm._l((_vm.blogs),function(blog,index){return _c('div',{key:index,staticClass:"blog-card"},[_c('span',{staticClass:"blog-title",on:{"click":function($event){return _vm.openKCloseBlog(blog.blogId)}}},[_vm._v(" "+_vm._s(blog.heading)+" ")]),_c('p',[_vm._v(_vm._s(blog.description))])])}),0)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BlogsModal.vue?vue&type=template&id=5a9d16fa&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace-all.js
var es_string_replace_all = __webpack_require__("5b81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__("9861");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--14-0!./src/scripts/BlogsModal.js?vue&type=script&lang=js&









var DetailedBlog = function DetailedBlog() {
  return __webpack_require__.e(/* import() */ "chunk-60186489").then(__webpack_require__.bind(null, "55d7"));
};

/* harmony default export */ var BlogsModalvue_type_script_lang_js_ = ({
  name: "Blogs",
  components: {
    DetailedBlog: DetailedBlog
  },
  data: function data() {
    return {
      openedBlogId: null,
      blogs: [{
        heading: "Uncovering TOR's hidden gems: .onion URLs",
        blogId: "1",
        description: "\n            CVE-2022-30334 is a vulnerability discovered in the Brave browser that allows for the leakage of \".onion\" URLs. In this blog, we will cover how referrer and origin headers can leave a trail of breadcrumbs for anyone to follow, compromising the anonymity of the user.           \n          "
      }]
    };
  },
  methods: {
    closeBlogsModal: function closeBlogsModal() {
      this.$parent.$data.isBlogsOpen = false;
    },
    kCloseDetailedBlog: function kCloseDetailedBlog() {
      if (this.openedBlogId) {
        this.openKCloseBlog(null);
        return;
      }
    },
    openKCloseBlog: function openKCloseBlog(selectedBlogId) {
      if (selectedBlogId) {
        var blogInfo = this.blogs.find(function (blog) {
          return blog.blogId === selectedBlogId;
        });
        this.updateAddressBarURL(blogInfo);
      } else {
        this.updateAddressBarURL(null);
      }

      this.openedBlogId = selectedBlogId;
    },
    updateAddressBarURL: function updateAddressBarURL(blogInfo) {
      if (blogInfo) {
        var formattedBlogTitle = blogInfo.heading.toLowerCase().replaceAll(" ", "-");
        window.history.replaceState("", blogInfo.heading, "?".concat(new URLSearchParams({
          blog: formattedBlogTitle
        })));
        return;
      }

      window.history.replaceState("", "", "/");
    }
  }
});
// CONCATENATED MODULE: ./src/scripts/BlogsModal.js?vue&type=script&lang=js&
 /* harmony default export */ var scripts_BlogsModalvue_type_script_lang_js_ = (BlogsModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/styles/Modal.scss?vue&type=style&index=0&id=5a9d16fa&scoped=true&lang=scss&
var Modalvue_type_style_index_0_id_5a9d16fa_scoped_true_lang_scss_ = __webpack_require__("c652");

// EXTERNAL MODULE: ./src/styles/BlogsModal.scss?vue&type=style&index=1&id=5a9d16fa&scoped=true&lang=scss&
var BlogsModalvue_type_style_index_1_id_5a9d16fa_scoped_true_lang_scss_ = __webpack_require__("1784");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("6544");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js + 3 modules
var VIcon = __webpack_require__("132d");

// CONCATENATED MODULE: ./src/components/BlogsModal.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  scripts_BlogsModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5a9d16fa",
  null
  
)

/* harmony default export */ var BlogsModal = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VIcon: VIcon["a" /* default */]})


/***/ })

}]);
//# sourceMappingURL=chunk-0902747c.ad50f22d.js.map