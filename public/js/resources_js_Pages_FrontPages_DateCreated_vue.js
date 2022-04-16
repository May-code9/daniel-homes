"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_FrontPages_DateCreated_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    created_at: [String, Number],
    time: {
      "default": true,
      type: Boolean
    }
  },
  data: function data() {
    return {
      months: [{
        full: 'January',
        "short": 'Jan',
        days: 31
      }, {
        full: 'Febuary',
        "short": 'Feb',
        days: 29
      }, {
        full: 'March',
        "short": 'March',
        days: 31
      }, {
        full: 'April',
        "short": 'April',
        days: 30
      }, {
        full: 'May',
        "short": 'May',
        days: 31
      }, {
        full: 'June',
        "short": 'Jun',
        days: 30
      }, {
        full: 'July',
        "short": 'Jul',
        days: 31
      }, {
        full: 'August',
        "short": 'Aug',
        days: 31
      }, {
        full: 'September',
        "short": 'Sept',
        days: 30
      }, {
        full: 'October',
        "short": 'Oct',
        days: 31
      }, {
        full: 'November',
        "short": 'Nov',
        days: 30
      }, {
        full: 'December',
        "short": 'Dec',
        days: 31
      }],
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };
  },
  computed: {
    getDay: function getDay() {
      var today = new Date(this.created_at);
      var day = today.getDate();

      if (day == 1 || day == 21 || day == 31) {
        var end = 'st';
      } else if (day == 2 || day == 22) {
        end = 'nd';
      } else if (day == 3 || day == 23) {
        end = 'rd';
      } else {
        end = 'th';
      }

      return day + end;
    },
    getDayName: function getDayName() {
      var today = new Date(this.created_at);
      var dayNumber = today.getDay();
      return dayNumber;
    },
    getMonthName: function getMonthName() {
      var today = new Date(this.created_at);
      var month = today.getMonth();
      return month;
    },
    getYear: function getYear() {
      var today = new Date(this.created_at);
      var year = today.getFullYear();
      return year;
    },
    getTime: function getTime() {
      var today = new Date(this.created_at);
      var hours = today.getHours();

      if (hours >= 12) {
        var period = 'PM';
      } else if (hours < 12) {
        period = 'AM';
      }

      if (hours > 12) {
        hours = hours - 12;
      }

      var minutes = today.getMinutes();

      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      return hours + ':' + minutes + ' ' + period;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=template&id=4bf3d02f":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=template&id=4bf3d02f ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "inline-block"
};
var _hoisted_2 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getDay ? $options.getDay : 'Day') + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.months[$options.getMonthName] ? $data.months[$options.getMonthName]["short"] : 'Month') + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getYear ? $options.getYear : 'Year') + " ", 1
  /* TEXT */
  ), $props.time ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, " at " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getTime ? $options.getTime : 'Time'), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./resources/js/Pages/FrontPages/DateCreated.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/FrontPages/DateCreated.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DateCreated_vue_vue_type_template_id_4bf3d02f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateCreated.vue?vue&type=template&id=4bf3d02f */ "./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=template&id=4bf3d02f");
/* harmony import */ var _DateCreated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateCreated.vue?vue&type=script&lang=js */ "./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DateCreated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DateCreated_vue_vue_type_template_id_4bf3d02f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/FrontPages/DateCreated.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DateCreated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DateCreated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DateCreated.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=template&id=4bf3d02f":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=template&id=4bf3d02f ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DateCreated_vue_vue_type_template_id_4bf3d02f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DateCreated_vue_vue_type_template_id_4bf3d02f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DateCreated.vue?vue&type=template&id=4bf3d02f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/DateCreated.vue?vue&type=template&id=4bf3d02f");


/***/ })

}]);