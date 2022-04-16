"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_FrontPages_Home_ListProjects_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  props: {
    projects: Array
  },
  data: function data() {
    return {
      page_width: 0,
      slide: 0
    };
  },
  methods: {
    backgroungImage: function backgroungImage(index) {
      var image_source = "url('/img/projects/" + this.projects[index].img + "')"; //   var image_source = '/img/projects/' + this.projects[index].img

      return image_source;
    },
    pageWidth: function pageWidth() {
      return document.getElementById('app').offsetWidth;
    },
    switchSlide: function switchSlide() {
      var width = this.pageWidth();

      if (this.projects.length != this.slide + 1) {
        var count = this.slide + 1;
        this.slide = count;
        this.page_width = width * count;
      } else if (this.projects.length == this.slide + 1) {
        this.slide = 0;
        this.page_width = 0;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    window.setInterval(function () {
      _this.switchSlide();
    }, 10000);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=template&id=48a9029d":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=template&id=48a9029d ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full overflow-x-hidden relative"
};
var _hoisted_2 = {
  "class": "flex justify-between w-full"
};
var _hoisted_3 = {
  "class": "animate__animated animate__backInRight"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-sm xs:text-base md:text-xl font-bold"
}, "Type:", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "font-bold text-sm xs:text-base"
};
var _hoisted_6 = {
  "class": "animate__animated animate__backInLeft"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-sm xs:text-base md:text-xl font-bold"
}, "Location:", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "font-bold text-sm xs:text-base"
};
var _hoisted_9 = {
  "class": "absolute w-full sm:w-72 xl:w-96 h-52 xl:h-60 sm:right-5 top-0 sm:top-5 z-50"
};
var _hoisted_10 = ["src"];
var _hoisted_11 = {
  "class": "absolute w-full bottom-4 z-50"
};
var _hoisted_12 = {
  "class": "flex justify-between w-20 mx-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["h-80-screen flex", {
      'w-400-screen': $props.projects.length == 4,
      'w-300-screen': $props.projects.length == 3,
      'w-200-screen': $props.projects.length == 2,
      'w-screen': $props.projects.length == 1
    }])
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.projects, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "w-full bg-cover bg-center relative z-30",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "w-full h-80-screen bg-cover bg-center",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        'background-image': $options.backgroungImage(index),
        marginLeft: '-' + $data.page_width + 'px',
        transition: 'all 2s ease-in'
      })
    }, null, 4
    /* STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "bg-gradient-to-r from-primary via-gray-600 to-primary-2 opacity-40 absolute bottom-0 w-screen h-52 sm:h-64 lg:h-80",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        marginLeft: '-' + $data.page_width + 'px',
        transition: 'all 2s ease-in'
      })
    }, null, 4
    /* STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "px-8 sm:px-12 md:px-16 xl:px-24 text-white absolute bottom-10 sm:bottom-12 lg:bottom-32 w-full animate__animated animate__bounce",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        marginLeft: '-' + $data.page_width + 'px',
        transition: 'all 2s ease-in'
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: '/projects/details/' + item.id,
      "class": "aperto-bold text-3xl xs:text-4xl md:text-5xl"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.type), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.location), 1
    /* TEXT */
    )])])], 4
    /* STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
      src: item.map,
      "class": "w-full h-full animate__animated animate__heartBeat animate__backInLeft",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
        marginLeft: '-' + $data.page_width + 'px',
        transition: 'all 2s ease-in'
      }, {
        "border": "0"
      }]),
      allowfullscreen: "",
      loading: "lazy"
    }, null, 12
    /* STYLE, PROPS */
    , _hoisted_10)])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.projects, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-2 h-2 rounded-full", {
        'bg-secondary-2': $data.slide == index,
        'bg-white': $data.slide != index
      }]),
      key: index
    }, null, 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]);
}

/***/ }),

/***/ "./resources/js/Pages/FrontPages/Home/ListProjects.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Home/ListProjects.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListProjects_vue_vue_type_template_id_48a9029d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListProjects.vue?vue&type=template&id=48a9029d */ "./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=template&id=48a9029d");
/* harmony import */ var _ListProjects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListProjects.vue?vue&type=script&lang=js */ "./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ListProjects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ListProjects_vue_vue_type_template_id_48a9029d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/FrontPages/Home/ListProjects.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListProjects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListProjects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListProjects.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=template&id=48a9029d":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=template&id=48a9029d ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListProjects_vue_vue_type_template_id_48a9029d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListProjects_vue_vue_type_template_id_48a9029d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListProjects.vue?vue&type=template&id=48a9029d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Home/ListProjects.vue?vue&type=template&id=48a9029d");


/***/ })

}]);