"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_FrontPages_Projects_ProjectList_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Icons_CloseIcon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Icons/CloseIcon.vue */ "./resources/js/Pages/Shared/Icons/CloseIcon.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CloseIcon: _Shared_Icons_CloseIcon_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    message_info: String
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        _method: 'POST',
        fullname: '',
        email: '',
        phone: '',
        message: this.message_info,
        contact: false,
        loading: false
      })
    };
  },
  methods: {
    close: function close() {
      this.$emit('open-form', false);
    },
    sendMessage: function sendMessage() {
      var _this = this;

      if (this.validator()) {
        this.form.loading = true;
        this.form.post('/contact/post', {
          onSuccess: function onSuccess() {
            _this.form.reset();

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Info', 'Message Sent!');
          }
        });
      }
    },
    validator: function validator() {
      if (this.form.fullname != '' && this.form.email != '' && this.form.phone != '' && this.form.message != '') {
        return true;
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Fill all fields');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Icons_CalendarIcon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Icons/CalendarIcon.vue */ "./resources/js/Pages/Shared/Icons/CalendarIcon.vue");
/* harmony import */ var _Shared_Icons_EyeIcon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Icons/EyeIcon.vue */ "./resources/js/Pages/Shared/Icons/EyeIcon.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _DateCreated_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DateCreated.vue */ "./resources/js/Pages/FrontPages/DateCreated.vue");
/* harmony import */ var _PopForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PopForm.vue */ "./resources/js/Pages/FrontPages/PopForm.vue");
/* harmony import */ var _Shared_Icons_CloseIcon_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Shared/Icons/CloseIcon.vue */ "./resources/js/Pages/Shared/Icons/CloseIcon.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Link,
    CalendarIcon: _Shared_Icons_CalendarIcon_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    EyeIcon: _Shared_Icons_EyeIcon_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    DateCreated: _DateCreated_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    PopForm: _PopForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    CloseIcon: _Shared_Icons_CloseIcon_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    all_projects: Array,
    flash: [String, Boolean]
  },
  data: function data() {
    return {
      form: null,
      timer: 30
    };
  },
  methods: {
    logout: function logout() {
      this.$inertia.post(route('logout'));
    },
    arrayCount: function arrayCount() {
      return [{
        img: '/img/projects/sapphire.jpg',
        name: 'The Sapphire'
      }, {
        img: '/img/projects/emerald.jpg',
        name: 'The Emerald'
      }];
    },
    backgroungImage: function backgroungImage(image) {
      var image_source = "url('/img/news/" + image + "')";
      return image_source;
    },
    backgroungImageProject: function backgroungImageProject(image) {
      var image_source = "url('/img/projects/" + image + "')";
      return image_source;
    },
    openForm: function openForm(val) {
      this.form = null;
    },
    content: function content(val) {
      if (val.length > 120) {
        return val.substring(0, 120) + '...';
      } else {
        return val;
      }
    },
    closeMessage: function closeMessage() {
      this.timer = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    width: String,
    height: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    width: String,
    height: String,
    color: {
      "default": 'text-primary',
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    width: String,
    height: String
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=template&id=4293ac8a&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=template&id=4293ac8a&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4293ac8a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "fade w-full h-screen fixed inset-0"
};
var _hoisted_2 = {
  "class": "flex items-center h-screen max-w-screen-sm mx-auto"
};
var _hoisted_3 = {
  "class": "px-6 md:px-8 xl:px-12 py-10 text-primary bg-secondary rounded-md w-full relative"
};

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "aperto-bold text-4xl"
  }, "Register Interest", -1
  /* HOISTED */
  );
});

var _hoisted_5 = {
  "class": "pt-8"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "border-b border-secondary-4"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "pt-2"
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "border-b border-secondary-4"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_9 = {
  "class": "pt-2"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "border-b border-secondary-4"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_11 = {
  "class": "pt-2"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "border-b border-secondary-4"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_13 = {
  "class": "pt-8"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_close_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("close-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute right-8 top-6",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.close && $options.close.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_close_icon, {
    width: 'w-4',
    height: 'h-4',
    color: 'text-red-600 cursor-pointer'
  })]), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.fullname = $event;
    }),
    placeholder: "What's your name?",
    "class": "font-jost text-xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fullname]]), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.email = $event;
    }),
    placeholder: "We would like to email you...",
    "class": "pt-8 font-jost text-xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.email]]), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.phone = $event;
    }),
    placeholder: "Let's give you a call...",
    "class": "pt-8 font-jost text-xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.phone]]), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.message = $event;
    }),
    placeholder: "Is there anything else?",
    "class": "pt-8 font-jost text-xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current",
    rows: "4"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.message]]), _hoisted_12]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.sendMessage && $options.sendMessage.apply($options, arguments);
    }),
    "class": "py-3 px-14 font-semibold bg-primary text-white hover:bg-secondary-4 hover:text-primary"
  }, " Send ")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=template&id=2916f7c6":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=template&id=2916f7c6 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-secondary pt-16 pb-36 px-8 sm:px-12 md:px-16 xl:px-24"
};
var _hoisted_2 = {
  key: 0,
  "class": "absolute w-full left-0 z-50"
};
var _hoisted_3 = {
  "class": "mx-auto max-w-sm"
};
var _hoisted_4 = {
  "class": "bg-primary-2 px-4 py-4 rounded-md shadow-md flex justify-between"
};
var _hoisted_5 = {
  "class": "w-full text-white text-center"
};
var _hoisted_6 = {
  key: 1,
  "class": "flex aperto-bold text-2xl text-primary-2"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Project");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "aperto-bold text-6xl md:text-7xl xl:text-9xl pt-3 text-center text-primary opacity-30"
}, "Projects", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "-mt-10 xl:-mt-20 relative"
};
var _hoisted_10 = {
  "class": "text-primary"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "aperto-bold text-4xl md:text-6xl xl:text-8xl pt-16 leading-8 md:leading-12 md:w-3/4 mx-auto text-primary md:text-center animate__animated animate__heartBeat animate__backInRight"
}, " A Step Above The Rest ", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "font-jost text-lg md:text-xl xl:text-2xl text-primary md:w-4/5 mx-auto pt-1 md:text-center animate__animated animate__heartBeat animate__backInRight"
}, " Convenient luxury is the guiding principle for every Daniel Homes development – as projects are built to provide best-in-class service delivery, infrastructure, environment, security and style. We build more than just residences, we build lifestyles. ", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-y-5 md:gap-y-8"
};
var _hoisted_14 = {
  "class": "lg:ml-16 xl:ml-20 text-primary"
};
var _hoisted_15 = ["innerHTML"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "border-secondary-2 border-t-2"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "pt-4"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "font-bold text-lg"
}, "Property Type:", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "pt-4"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "font-bold text-lg"
}, "Location:", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "text-center text-white pt-8"
};
var _hoisted_22 = ["onClick"];
var _hoisted_23 = {
  key: 0,
  "class": "shadow-lg mt-6"
};
var _hoisted_24 = ["src"];

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Get to Know More ");

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "border-t-2 border-secondary-2 mt-10"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_close_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("close-icon");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_pop_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pop-form");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.flash != false && $data.timer != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.flash), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cursor-pointer",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeMessage && $options.closeMessage.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_close_icon, {
    width: 'w-3',
    height: 'h-3',
    color: 'text-white'
  })])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.user && _ctx.$page.props.user.slot != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('projects.create'),
    "class": "px-4 py-2 mr-3 cursor-pointer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"px-4 py-2 cursor-pointer\">Admin List</div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "px-4 py-2 cursor-pointer",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.logout && $options.logout.apply($options, arguments);
    })
  }, "Logout")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-cover bg-center h-40 animate__animated animate__heartBeat animate__backInLeft",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      'background-image': $options.backgroungImage('1642831695_9115b9fbbb1f11df6600c6388177c648.jpg')
    })
  }, null, 4
  /* STYLE */
  ), _hoisted_11, _hoisted_12])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.all_projects, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "pt-10",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: '/projects/details/' + item.id
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img :src=\"'/img/projects/' + item.img\" :alt=\"item.title\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": "bg-cover bg-center h-64 lg:h-72 xl:h-96 animate__animated animate__heartBeat animate__backInLeft",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            'background-image': $options.backgroungImageProject(item.img)
          })
        }, null, 4
        /* STYLE */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: '/projects/details/' + item.id,
      "class": "aperto-bold text-4xl md:text-5xl xl:text-7xl pt-4 xl:pt-6"
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
    , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "text-base md:text-xl pb-4",
      innerHTML: $options.content(item.details)
    }, null, 8
    /* PROPS */
    , _hoisted_15), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.type), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.location), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      onClick: function onClick($event) {
        return $data.form = index;
      },
      "class": "py-3 w-full cursor-pointer font-semibold bg-primary hover:bg-secondary-4 hover:text-primary"
    }, " Contact ", 8
    /* PROPS */
    , _hoisted_22)]), $data.form == index ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_pop_form, {
      key: 0,
      message_info: 'I like ' + item.title + '. I want to know more about this project.',
      onOpenForm: $options.openForm
    }, null, 8
    /* PROPS */
    , ["message_info", "onOpenForm"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), item.map != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
      src: item.map,
      "class": "w-full h-72",
      style: {
        "border": "0"
      },
      allowfullscreen: "",
      loading: "lazy"
    }, null, 8
    /* PROPS */
    , _hoisted_24)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: '/projects/details/' + item.id,
      "class": "w-full block text-primary border mt-6 border-secondary-2 cursor-pointer shadow hover:shadow-lg text-center py-3"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_25];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"]), _hoisted_26]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=template&id=025fc77d":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=template&id=025fc77d ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Icon_awesome-calendar-alt",
  "data-name": "Icon awesome-calendar-alt",
  d: "M0,23.008a2.381,2.381,0,0,0,2.38,2.38H19.835a2.381,2.381,0,0,0,2.38-2.38V9.521H0Zm15.868-9.719a.6.6,0,0,1,.6-.6h1.983a.6.6,0,0,1,.6.6v1.983a.6.6,0,0,1-.6.6H16.463a.6.6,0,0,1-.6-.6Zm0,6.347a.6.6,0,0,1,.6-.6h1.983a.6.6,0,0,1,.6.6V21.62a.6.6,0,0,1-.6.6H16.463a.6.6,0,0,1-.6-.6ZM9.521,13.289a.6.6,0,0,1,.6-.6H12.1a.6.6,0,0,1,.6.6v1.983a.6.6,0,0,1-.6.6H10.116a.6.6,0,0,1-.6-.6Zm0,6.347a.6.6,0,0,1,.6-.6H12.1a.6.6,0,0,1,.6.6V21.62a.6.6,0,0,1-.6.6H10.116a.6.6,0,0,1-.6-.6ZM3.174,13.289a.6.6,0,0,1,.6-.6H5.752a.6.6,0,0,1,.6.6v1.983a.6.6,0,0,1-.6.6H3.769a.6.6,0,0,1-.6-.6Zm0,6.347a.6.6,0,0,1,.6-.6H5.752a.6.6,0,0,1,.6.6V21.62a.6.6,0,0,1-.6.6H3.769a.6.6,0,0,1-.6-.6ZM19.835,3.174h-2.38V.793A.8.8,0,0,0,16.661,0H15.074a.8.8,0,0,0-.793.793v2.38H7.934V.793A.8.8,0,0,0,7.14,0H5.554A.8.8,0,0,0,4.76.793v2.38H2.38A2.381,2.381,0,0,0,0,5.554v2.38H22.215V5.554A2.381,2.381,0,0,0,19.835,3.174Z",
  fill: "#c69e6f"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fill-current inline", [$props.width, $props.height]]),
    viewBox: "0 0 22.215 25.388"
  }, _hoisted_2, 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=template&id=61fcb3db":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=template&id=61fcb3db ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["fill"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fill-current inline", [$props.width, $props.height, $props.color]]),
    viewBox: "0 0 14 14"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_3573",
    "data-name": "Path 3573",
    d: "M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z",
    transform: "translate(-5 -5)",
    fill: $props.color
  }, null, 8
  /* PROPS */
  , _hoisted_1)], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=template&id=025b3b94":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=template&id=025b3b94 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Icon_awesome-eye",
  "data-name": "Icon awesome-eye",
  d: "M22.364,9.43A12.529,12.529,0,0,0,11.25,2.5,12.531,12.531,0,0,0,.136,9.43a1.264,1.264,0,0,0,0,1.14A12.529,12.529,0,0,0,11.25,17.5a12.531,12.531,0,0,0,11.114-6.93,1.264,1.264,0,0,0,0-1.14Zm-11.114,6.2A5.625,5.625,0,1,1,16.875,10,5.625,5.625,0,0,1,11.25,15.625Zm0-9.375a3.723,3.723,0,0,0-.989.148A1.869,1.869,0,0,1,7.648,9.011a3.741,3.741,0,1,0,3.6-2.761Z",
  transform: "translate(0 -2.5)",
  fill: "#c69e6f"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fill-current inline", [$props.width, $props.height]]),
    viewBox: "0 0 22.5 15"
  }, _hoisted_2, 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade[data-v-4293ac8a] {\n  background-color: rgba(53, 107, 67, 0.541);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopForm_vue_vue_type_style_index_0_id_4293ac8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopForm_vue_vue_type_style_index_0_id_4293ac8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopForm_vue_vue_type_style_index_0_id_4293ac8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/Pages/FrontPages/PopForm.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/FrontPages/PopForm.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PopForm_vue_vue_type_template_id_4293ac8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopForm.vue?vue&type=template&id=4293ac8a&scoped=true */ "./resources/js/Pages/FrontPages/PopForm.vue?vue&type=template&id=4293ac8a&scoped=true");
/* harmony import */ var _PopForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopForm.vue?vue&type=script&lang=js */ "./resources/js/Pages/FrontPages/PopForm.vue?vue&type=script&lang=js");
/* harmony import */ var _PopForm_vue_vue_type_style_index_0_id_4293ac8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css */ "./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PopForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PopForm_vue_vue_type_template_id_4293ac8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4293ac8a"],['__file',"resources/js/Pages/FrontPages/PopForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/FrontPages/Projects/ProjectList.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Projects/ProjectList.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectList_vue_vue_type_template_id_2916f7c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=template&id=2916f7c6 */ "./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=template&id=2916f7c6");
/* harmony import */ var _ProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=script&lang=js */ "./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProjectList_vue_vue_type_template_id_2916f7c6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/FrontPages/Projects/ProjectList.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/CalendarIcon.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/CalendarIcon.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CalendarIcon_vue_vue_type_template_id_025fc77d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarIcon.vue?vue&type=template&id=025fc77d */ "./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=template&id=025fc77d");
/* harmony import */ var _CalendarIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarIcon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CalendarIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CalendarIcon_vue_vue_type_template_id_025fc77d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/CalendarIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/CloseIcon.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/CloseIcon.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CloseIcon_vue_vue_type_template_id_61fcb3db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloseIcon.vue?vue&type=template&id=61fcb3db */ "./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=template&id=61fcb3db");
/* harmony import */ var _CloseIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloseIcon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CloseIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CloseIcon_vue_vue_type_template_id_61fcb3db__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/CloseIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/EyeIcon.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/EyeIcon.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EyeIcon_vue_vue_type_template_id_025b3b94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EyeIcon.vue?vue&type=template&id=025b3b94 */ "./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=template&id=025b3b94");
/* harmony import */ var _EyeIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EyeIcon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_EyeIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EyeIcon_vue_vue_type_template_id_025b3b94__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/EyeIcon.vue"]])
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

/***/ "./resources/js/Pages/FrontPages/PopForm.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/PopForm.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CalendarIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CalendarIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CalendarIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloseIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloseIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CloseIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyeIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyeIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EyeIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=script&lang=js");
 

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


/***/ }),

/***/ "./resources/js/Pages/FrontPages/PopForm.vue?vue&type=template&id=4293ac8a&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/PopForm.vue?vue&type=template&id=4293ac8a&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopForm_vue_vue_type_template_id_4293ac8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopForm_vue_vue_type_template_id_4293ac8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopForm.vue?vue&type=template&id=4293ac8a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=template&id=4293ac8a&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=template&id=2916f7c6":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=template&id=2916f7c6 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectList_vue_vue_type_template_id_2916f7c6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectList_vue_vue_type_template_id_2916f7c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectList.vue?vue&type=template&id=2916f7c6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectList.vue?vue&type=template&id=2916f7c6");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=template&id=025fc77d":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=template&id=025fc77d ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CalendarIcon_vue_vue_type_template_id_025fc77d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CalendarIcon_vue_vue_type_template_id_025fc77d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CalendarIcon.vue?vue&type=template&id=025fc77d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CalendarIcon.vue?vue&type=template&id=025fc77d");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=template&id=61fcb3db":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=template&id=61fcb3db ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloseIcon_vue_vue_type_template_id_61fcb3db__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloseIcon_vue_vue_type_template_id_61fcb3db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CloseIcon.vue?vue&type=template&id=61fcb3db */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/CloseIcon.vue?vue&type=template&id=61fcb3db");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=template&id=025b3b94":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=template&id=025b3b94 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyeIcon_vue_vue_type_template_id_025b3b94__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyeIcon_vue_vue_type_template_id_025b3b94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EyeIcon.vue?vue&type=template&id=025b3b94 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/EyeIcon.vue?vue&type=template&id=025b3b94");


/***/ }),

/***/ "./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopForm_vue_vue_type_style_index_0_id_4293ac8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css");


/***/ })

}]);