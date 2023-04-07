(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-60186489"],{

/***/ "3345":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "55d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1acdbebf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DetailedBlog.vue?vue&type=template&id=712a47b1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{domProps:{"innerHTML":_vm._s(_vm.getBlogContent())}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DetailedBlog.vue?vue&type=template&id=712a47b1&

// CONCATENATED MODULE: ./src/assets/blogs/blog1.txt
/* harmony default export */ var blog1 = ("<div class=\"blog\">\r\n    <section>\r\n      <h1>\r\n        Uncovering TOR's hidden gems: .onion URLs\r\n      </h1>\r\n    </section>\r\n    <section>\r\n      <h2>Table of content:</h2>\r\n      <ul>\r\n        <li><a href=\"#story\">Story behind vulnerability</a></li>\r\n        <li>\r\n          <a href=\"#exploit-analysis\">Vulnerability exploit and its analysis</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#patch-analysis\">Vulnerability patch analysis</a>\r\n          <ul>\r\n            <li>\r\n              <a href=\"#patch-analysis-1\">Patch analysis for Origin Header</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#patch-analysis-2\">Patch analysis for Referrer Header</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#patch-analysis-3\"\r\n                >Patch analysis for Referrer Header and Non-CORS requests</a\r\n              >\r\n            </li>\r\n            <li>\r\n              <a href=\"#patch-analysis-4\">Patch analysis for CORS requests</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <a href=\"#trick-techniques\"\r\n            >Bonus tricks and techniques for security folks</a\r\n          >\r\n        </li>\r\n        <li><a href=\"#credits\">Credits</a></li>\r\n        <li><a href=\"#references\">References</a></li>\r\n      </ul>\r\n    </section>\r\n    <div>\r\n      <p>\r\n        <strong>Vulnerable product:</strong> Brave 1.29.79 Chromium: 93.0.4577.63 (Official\r\n        Build) (64-bit) | Revision: ff5c0da2ec0adeaed5550e6c7e98417dac77d98a-\r\n        refs/branchheads/4577@{#1135}\r\n      </p>\r\n      <p>\r\n        When it comes to browser security, Brave is a shining star in the sky,\r\n        with a dedicated and cooperative bug bounty team. In this blog post, I,\r\n        alongside Patrick Walker, will be delving into a vulnerability that we\r\n        discovered.\r\n      </p>\r\n      <section>\r\n        <a id=\"story\" class=\"anchor\"></a>\r\n        <h2>Story behind Vulnerability:</h2>\r\n        <p>\r\n          As I began my search for vulnerabilities, I came across several\r\n          reported issues, most of which dealt with code execution\r\n          using privileged schemas or information leaks in the TOR network.\r\n          Setting those aside, I turned my attention to finding a way to\r\n          disclose \" .onion \" URLs.\r\n        </p>\r\n        <p>\r\n          Initially, I thought of attempting to leak URLs through the\r\n          Omnibox/Address bar, but unfortunately, my efforts were not\r\n          successful. As many of you may know, when a visitor accesses a\r\n          website, web servers send headers with information about where the\r\n          visitor came from, including the Referrer and Origin headers. In the\r\n          following sections, we will delve deeper into these headers and how\r\n          they relate to this vulnerability.\r\n        </p>\r\n        <p>\r\n          Referrer and Origin headers, just like a lighthouse in a vast ocean,\r\n          they guide the web server to know where the visitor is coming from.\r\n          Referrer header tells the server the last page visited by the user\r\n          while origin header tells the server the origin of the request. In the\r\n          case of the Brave browser, we found that these headers were not being\r\n          stripped out when navigating from one \" .onion \" URL to another,\r\n          leaving a trail of breadcrumbs for anyone to follow. This is similar\r\n          to how a lighthouse would guide ships to a specific island, but in\r\n          this case, it's guiding anyone to the specific .onion URL,\r\n          compromising the anonymity of the user.\r\n        </p>\r\n        <p>\r\n          Let's think of it this way, consider the dark web like a vast ocean,\r\n          and the .onion URLs like little islands in the ocean, it's a great\r\n          idea to find a way to navigate to those islands and remain anonymous,\r\n          but what if we leave a trail of breadcrumbs behind us, which gives\r\n          away our location? This is similar to how we found that the referrer\r\n          and origin headers were leaking the .onion URLs in the Brave browser.\r\n        </p>\r\n        <p>\r\n          <strong>What are “.onion” URLs and how it provides anonymous access?</strong><br />\r\n          → \" .onion \" URLs are like secret passageways to hidden treasures on\r\n          the internet. They are a top-level domain that provides access to\r\n          onion services or hidden services through the TOR network. The TOR\r\n          network uses a technique called onion routing to transmit data, which\r\n          makes the communication anonymous. It's like a game of telephone,\r\n          where each message gets passed through multiple layers, or \"onions,\"\r\n          before it reaches its destination. This makes it extremely difficult\r\n          for anyone to trace the origin of the communication, providing a high\r\n          level of anonymity for the user. Think of it like a maze, where the\r\n          end goal is to reach the center, but the path is winding and\r\n          unpredictable, making it hard for anyone to follow. The .onion URLs is\r\n          the same thing, it's a winding and unpredictable path to reach a\r\n          specific location on the internet, making it hard for anyone to follow\r\n          the user's journey. Here, we have uncovered a piece of breadcrumb that\r\n          the Brave browser was not effectively hiding, the Referrer and Origin\r\n          headers for the \".onion\" URLs. Now it's time to set up a test\r\n          scenario, like a treasure hunt, to replicate the vulnerability and\r\n          confirm our findings. It's like planning a treasure hunt, now that we\r\n          know where the treasure is, we must devise a plan to uncover it.\r\n        </p>\r\n        <p><strong>Steps which are to be followed to bake the exploit:</strong></p>\r\n        <ol>\r\n          <li>Setup a “.onion” URL</li>\r\n          <li>\r\n            Now, create the testcase which will print the value of referrer\r\n            header or Origin Header (as per requirement).\r\n          </li>\r\n        </ol>\r\n      </section>\r\n      <section>\r\n        <a id=\"exploit-analysis\" class=\"anchor\"></a>\r\n        <h2>Vulnerability exploit and its analysis:</h2>\r\n        <pre>\r\n<code class=\"language-html\">  &lt;!DOCTYPE html&gt;                                              \r\n  &lt;html&gt;                                                        \r\n    &lt;body&gt;                                                      \r\n      &lt;button id=\"redirectButton\" onclick=\"redirect()\"&gt;         \r\n        Visit https://whatsmyreferer.com/                       \r\n      &lt;/button&gt;                                                 \r\n      &lt;script&gt;                                                  \r\n        function redirect() {                                   \r\n          window.location.href = \"https://whatsmyreferer.com/\"; \r\n        }                                                       \r\n      &lt;/script&gt;                                                 \r\n    &lt;/body&gt;                                                     \r\n  &lt;/html&gt;\r\n</code></pre>\r\n        <p>\r\n          This test case creates a button element with the text \"Visit\r\n          <a href=\"https://whatsmyreferer.com/\">https://whatsmyreferer.com/</a>\r\n          \" and an onclick event that calls the redirect() function. When the\r\n          user clicks the button, the window.location.href = \"<a\r\n            href=\"https://whatsmyreferer.com/\"\r\n            >https://whatsmyreferer.com/</a\r\n          >\r\n          \"; line of code will execute and redirect the user to the\r\n          <a href=\"https://whatsmyreferer.com/\">https://whatsmyreferer.com/</a>\r\n          where the referrer header will be visible.\r\n        </p>\r\n        <p>\r\n          If you want to test this CORS, non-CORS and Referrer test cases, they\r\n          are created by Brave security team member Francois at\r\n          <a\r\n            href=\"http://ixrdj3iwwhkuau5tby5jh3a536a2rdhpbdbu6ldhng43r47kim7a3lid.onion/referrer/onion.html\"\r\n            >here</a\r\n          >, you can visit the test case and check for possible but and if the\r\n          browser is vulnerable, it will print the &quot;.onion&quot; URL.\r\n        </p>\r\n      </section>\r\n      <section>\r\n        <a id=\"patch-analysis\" class=\"anchor\"></a>\r\n        <h2>Vulnerability patch analysis:</h2>\r\n        <p>\r\n          The Brave browser has taken a similar approach to the TOR browser in\r\n          addressing this vulnerability. Let's explore in detail how the TOR\r\n          browser handles the Referrer policy and Origin header when it detects\r\n          that the browser has sent a value with it.\r\n        </p>\r\n        <section>\r\n          <a id=\"patch-analysis-1\" class=\"anchor\"></a>\r\n          <h4>Patch analysis for Origin Header:</h4>\r\n          <pre>\r\n<code class=\"language-javascript\">  // hide the Origin header when requesting from .onion and requesting CORS  \r\n  if (StaticPrefs::network_http_referer_hideOnionSource()) {                  \r\n    if (mOriginHeaderPrincipal->GetIsOnion()) {                               \r\n      origin.AssignLiteral(\"null\");                                           \r\n    }                                                                         \r\n  }\r\n</code></pre>\r\n          <a\r\n            href=\"https://searchfox.org/mozilla-central/rev/6c8d325e61b0b445ed2e04899da38c3a4c266cba/netwerk/protocol/http/nsCORSListenerProxy.cpp#979-984\"\r\n            >https://searchfox.org/mozilla-central/rev/6c8d325e61b0b445ed2e04899da38c3a4c266cba/netwerk/protocol/http/nsCORSListenerProxy.cpp#979-984</a\r\n          ><br />\r\n          <p>\r\n            We can see that the code is being used to hide the Origin header\r\n            when requesting from a \".onion\" URL and when requesting a\r\n            Cross-Origin Resource Sharing (CORS) resource. The very first thing\r\n            is that this will be triggered when the Origin contains any \".onion\"\r\n            URLs and it won't strip out the Origin when it is not a \".onion\"\r\n            URL. This code is checking a preference setting in the browser which\r\n            controls whether or not the Origin header should be hidden when\r\n            requesting resources from \".onion\" URLs. If this preference is set\r\n            to true, the code then looks at the origin of the request and if\r\n            it's coming from an onion URL, it assigns \"null\" to the Origin\r\n            header variable. This effectively strips the header and prevents it\r\n            from being sent to the server, protecting the user's privacy by not\r\n            revealing the origin of the request or the user's location. However,\r\n            this code will only be executed if the preference is set to true,\r\n            otherwise the Origin header will be sent as usual and it only\r\n            applies to requests to \".onion\" URLs and CORS resources. Now, let's\r\n            have a look over Referrer Policy in the TOR browser.\r\n          </p>\r\n        </section>\r\n        <section>\r\n          <a id=\"patch-analysis-2\" class=\"anchor\"></a>\r\n          <h4>Patch analysis for Referrer Header:</h4>\r\n          <pre>\r\n<code class=\"language-javascript\">  // Send an empty referrer if xorigin and leaving a .onion domain \r\n  if (StaticPrefs::network_http_referer_hideOnionSource() &&       \r\n      !uriHost.Equals(referrerHost) &&                             \r\n      StringEndsWith(referrerHost, \".onion\"_ns)) {                 \r\n    return NS_OK;                                                  \r\n  }\r\n</code></pre>\r\n          <a\r\n            href=\"https://searchfox.org/mozilla-central/rev/f8576fec48d866c5f988baaf1fa8d2f8cce2a82f/dom/security/ReferrerInfo.cpp#334-339\"\r\n            >https://searchfox.org/mozilla-central/rev/f8576fec48d866c5f988baaf1fa8d2f8cce2a82f/dom/security/ReferrerInfo.cpp#334-339</a\r\n          ><br />\r\n          <p>\r\n            Similar to Origin Header, in this code, the code is controlling\r\n            whether or not the Referrer header should be hidden when leaving a\r\n            \".onion\" domain and when requesting a cross-origin resource. If this\r\n            preference is set to true, the code then checks whether the URI host\r\n            (i.e the website the user is visiting) is different from the\r\n            referrer host (i.e the website the user came from) and if the\r\n            referrer host ends with \".onion\". If both conditions are met, the\r\n            code returns \"NS_OK\" which means it will send an empty referrer.\r\n          </p>\r\n          <p>\r\n            Same approach as above is inherited in the Brave Browser with TOR,\r\n            let's have a look at it.\r\n          </p>\r\n        </section>\r\n        <section>\r\n          <a id=\"patch-analysis-3\" class=\"anchor\"></a>\r\n          <h4>Patch analysis for Referrer Header and Non-CORS requests:</h4>\r\n          <pre>\r\n<code class=\"language-javascript\">  ComputeReferrerForPolicy(                                                  \r\n  ReferrerPolicy policy, const GURL& original_referrer,                       \r\n  const GURL& destination, bool* same_origin_out_for_metrics) {               \r\n    if (base::EndsWith(original_referrer.host_piece(), \".onion\",              \r\n                      base::CompareCase::INSENSITIVE_ASCII) &&                \r\n        !url::IsSameOriginWith(original_referrer, destination)) {             \r\n      return GURL();                                                          \r\n    }                                                                         \r\n    return ComputeReferrerForPolicy_Chromium(                                 \r\n        policy, original_referrer, destination, same_origin_out_for_metrics); \r\n  }                                                                           \r\n  GURL URLRequestJob::ComputeReferrerForPolicy_Chromium\r\n</code></pre>\r\n          <a\r\n            href=\"https://github.com/brave/brave-core/pull/10760/files#diff-e1c41276df6e7a9e7e922bfa3299ddf5cccd895d283ac39ee96a0425ff18734f\"\r\n            >https://github.com/brave/brave-core/pull/10760/files#diff-e1c41276df6e7a9e7e922bfa3299ddf5cccd895d283ac39ee96a0425ff18734f</a\r\n          ><br />\r\n          <p>\r\n            In the above code, we can see that patch adds a new condition that\r\n            checks if the original referrer host ends with \".onion\" and if the\r\n            original referrer and destination are not same origin. If both\r\n            conditions are met, the patch returns an empty GURL, eventually, it\r\n            won't be forwarded the referrer header with the “.onion” URL\r\n            further. This patch is for Referrer Header and Non-CORS Origin\r\n            Headers. Let's have a look at another patch for CORS requests.\r\n          </p>\r\n        </section>\r\n        <section>\r\n          <a id=\"patch-analysis-4\" class=\"anchor\"></a>\r\n          <h4>Patch analysis for CORS requests:</h4>\r\n          <pre>\r\n<code class=\"language-javascript\"> // Nullify the Origin header for cross-origin CORS requests        \r\n  // originating from a .onion address.                               \r\n  #define BRAVE_CORS_URL_LOADER_START_REQUEST                         \r\n    if (base::EndsWith(request_.request_initiator->host(), \".onion\",  \r\n                      base::CompareCase::INSENSITIVE_ASCII) &&        \r\n        !request_.request_initiator->IsSameOriginWith(                \r\n            url::Origin::Create(request_.url))) {                     \r\n      request_.headers.SetHeader(net::HttpRequestHeaders::kOrigin,    \r\n                                url::Origin().Serialize());           \r\n    } else /* NOLINT */\r\n</code></pre>\r\n          <a\r\n            href=\"https://github.com/brave/brave-core/pull/10760/files#diff-53d853f61e9b78f687e583b14503f956285f2259f7d15991c78ce261a1e956a3\"\r\n            >https://github.com/brave/brave-core/pull/10760/files#diff-53d853f61e9b78f687e583b14503f956285f2259f7d15991c78ce261a1e956a3</a\r\n          ><br />\r\n          <p>\r\n            This code deals with the initialization of a request which is for\r\n            cross-origin resource. The team has patched this by adding a new\r\n            condition that checks if the request initiator (i.e the domain which\r\n            the request is coming from) host ends with \".onion\" and if the\r\n            request initiator and destination (i.e the website the user is\r\n            visiting) are not same origin. If both conditions are met, the code\r\n            sets the Origin header to an empty value.\r\n          </p>\r\n        </section>\r\n      </section>\r\n      <section>\r\n        <a id=\"trick-techniques\" class=\"anchor\"></a>\r\n        <h2>Bonus tricks and techniques for security folks:</h2>\r\n        <p>\r\n          When you are testing a web server for CSRF, an easy trick is by using\r\n          \"&lt; img /&gt;\" tags to change the details. Let's see how.\r\n        </p>\r\n        <p>\r\n          Using an &lt; img /&gt; tag or a &lt; meta /&gt; refresh tag with a\r\n          URL that makes a state-changing request to perform CSRF. This works\r\n          because the browser will automatically send any cookies associated\r\n          with the URL in the src attribute or the content attribute, allowing\r\n          the attacker to make a request on behalf of the victim.\r\n        </p>\r\n      </section>\r\n      <section class=\"credits\">\r\n        <a id=\"credits\" class=\"anchor\"></a>\r\n        <h2>Credits:</h2>\r\n        <ol>\r\n          <li>Vulnerability Discovery: <a href=\"https://twitter.com/HomeSen\">Patrick Walker</a> &amp; <a href=\"https://kirtikumarar.com/\">Kirtikumar Anandrao Ramchandani</a></li>\r\n          <li>Patch: <a href=\"https://fmarier.org/\">Francois Marier</a></li>\r\n          <li>Mentions: <a href=\"https://azuki.vip/\">Yan Zhu</a>, <a href=\"https://twitter.com/ericlaw\">Eric Lawrence</a> &amp; <a href=\"https://shubhamkshatriya25.github.io/\">Shubham Singh Kshatriya</a></li>\r\n        </ol>\r\n      </section>\r\n      <section class=\"references\">\r\n        <a id=\"references\" class=\"anchor\"></a>\r\n        <h2>References:</h2>\r\n        <ol>\r\n          <li><a href=\"https://hackerone.com/reports/1337624\">Actual Vulnerability Report</a></li>\r\n          <li><a href=\"https://nvd.nist.gov/vuln/detail/CVE-2022-30334\">CVE Details for CVE-2022-30334</a></li>\r\n          <li><a href=\"https://textslashplain.com/2019/10/16/privacy-tweaks-limiting-referrer/\">Referrer Policy explained by Eric Lawrence</a></li>\r\n        </ol>\r\n      </section>\r\n    </div>\r\n  </div>");
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DetailedBlog.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var DetailedBlogvue_type_script_lang_js_ = ({
  data: function data() {
    return {};
  },
  props: ["blogId"],
  methods: {
    getBlogContent: function getBlogContent() {
      return blog1;
    }
  }
});
// CONCATENATED MODULE: ./src/components/DetailedBlog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DetailedBlogvue_type_script_lang_js_ = (DetailedBlogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/styles/DetailedBlog.scss?vue&type=style&index=0&lang=scss&
var DetailedBlogvue_type_style_index_0_lang_scss_ = __webpack_require__("b501");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/DetailedBlog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DetailedBlogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DetailedBlog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b501":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_DetailedBlog_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3345");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_DetailedBlog_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_DetailedBlog_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=chunk-60186489.b681704b.js.map