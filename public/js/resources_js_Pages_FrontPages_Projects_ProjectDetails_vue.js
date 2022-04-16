"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_FrontPages_Projects_ProjectDetails_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Icons_Facebook2Icon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Icons/Facebook2Icon.vue */ "./resources/js/Pages/Shared/Icons/Facebook2Icon.vue");
/* harmony import */ var _Shared_Icons_FacebookIcon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Icons/FacebookIcon.vue */ "./resources/js/Pages/Shared/Icons/FacebookIcon.vue");
/* harmony import */ var _Shared_Icons_Instagram2Icon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/Icons/Instagram2Icon.vue */ "./resources/js/Pages/Shared/Icons/Instagram2Icon.vue");
/* harmony import */ var _Shared_Icons_InstagramIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Icons/InstagramIcon.vue */ "./resources/js/Pages/Shared/Icons/InstagramIcon.vue");
/* harmony import */ var _Shared_Icons_Linkedin2Icon_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/Icons/Linkedin2Icon.vue */ "./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue");
/* harmony import */ var _Shared_Icons_LinkedinIcon_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/Icons/LinkedinIcon.vue */ "./resources/js/Pages/Shared/Icons/LinkedinIcon.vue");
/* harmony import */ var _Shared_SVGImages_Logo2Icon_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/SVGImages/Logo2Icon.vue */ "./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Logo2Icon: _Shared_SVGImages_Logo2Icon_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Instagram2Icon: _Shared_Icons_Instagram2Icon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    InstagramIcon: _Shared_Icons_InstagramIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Facebook2Icon: _Shared_Icons_Facebook2Icon_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FacebookIcon: _Shared_Icons_FacebookIcon_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LinkedinIcon: _Shared_Icons_LinkedinIcon_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Linkedin2Icon: _Shared_Icons_Linkedin2Icon_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_7__.Link
  },
  data: function data() {
    return {
      instagram_active: false,
      facebook_active: false,
      linkedin_active: false
    };
  },
  methods: {
    year: function year() {
      var year = new Date().getFullYear();
      return year;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterBar.vue */ "./resources/js/Pages/FrontPages/FooterBar.vue");
/* harmony import */ var _NavBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.vue */ "./resources/js/Pages/FrontPages/NavBar.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NavBar: _NavBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FooterBar: _FooterBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      sub_menu: 0
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/NavBar.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/NavBar.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_SVGImages_LogoIcon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/SVGImages/LogoIcon.vue */ "./resources/js/Pages/Shared/SVGImages/LogoIcon.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Icons_DownArrowIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/Icons/DownArrowIcon.vue */ "./resources/js/Pages/Shared/Icons/DownArrowIcon.vue");
/* harmony import */ var _Shared_Icons_UpArrowIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Icons/UpArrowIcon.vue */ "./resources/js/Pages/Shared/Icons/UpArrowIcon.vue");
/* harmony import */ var _Shared_Icons_MenuIcon_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/Icons/MenuIcon.vue */ "./resources/js/Pages/Shared/Icons/MenuIcon.vue");
/* harmony import */ var _Shared_SVGImages_Logo2Icon_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/SVGImages/Logo2Icon.vue */ "./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LogoIcon: _Shared_SVGImages_LogoIcon_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link,
    DownArrowIcon: _Shared_Icons_DownArrowIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    UpArrowIcon: _Shared_Icons_UpArrowIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    MenuIcon: _Shared_Icons_MenuIcon_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Logo2Icon: _Shared_SVGImages_Logo2Icon_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    sub_menu: [String, Number]
  },
  data: function data() {
    return {
      show_extra: null,
      show_extra_mobile: null,
      mobile: false
    };
  },
  watch: {
    sub_menu: function sub_menu() {
      this.show_extra = null;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MasterLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MasterLayout.vue */ "./resources/js/Pages/FrontPages/MasterLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _DateCreated_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DateCreated.vue */ "./resources/js/Pages/FrontPages/DateCreated.vue");
/* harmony import */ var _PopForm_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PopForm.vue */ "./resources/js/Pages/FrontPages/PopForm.vue");
/* harmony import */ var _Shared_Icons_CloseIcon_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/Icons/CloseIcon.vue */ "./resources/js/Pages/Shared/Icons/CloseIcon.vue");
/* harmony import */ var _ViewImages_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ViewImages.vue */ "./resources/js/Pages/FrontPages/Projects/ViewImages.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Head,
    DateCreated: _DateCreated_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link,
    PopForm: _PopForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    CloseIcon: _Shared_Icons_CloseIcon_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ViewImages: _ViewImages_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    project: Object
  },
  layout: _MasterLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      pop: false,
      form: this.$inertia.form({
        password: ''
      }),
      show_form: false,
      timer: 30,
      view_image: null
    };
  },
  watch: {
    pop: function pop(val) {
      var _this = this;

      if (val) {
        setTimeout(function () {
          _this.pop = false;
        }, 10000);
      }
    }
  },
  methods: {
    deleteProject: function deleteProject() {
      var _this2 = this;

      this.form["delete"]('/admin/projects/' + this.project.id, {
        preserveScroll: true,
        onFinish: function onFinish() {
          return _this2.form.reset();
        }
      });
    },
    openForm: function openForm(val) {
      this.show_form = val;
    },
    closeMessage: function closeMessage() {
      this.timer = 0;
    },
    backgroungImage: function backgroungImage(image) {
      var image_source = "url('/img/projects/" + image + "')";
      return image_source;
    },
    closeView: function closeView() {
      this.view_image = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Icons_CloseIcon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Icons/CloseIcon.vue */ "./resources/js/Pages/Shared/Icons/CloseIcon.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CloseIcon: _Shared_Icons_CloseIcon_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    close: function close() {
      this.$emit('close-view');
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    width: String,
    height: String,
    withcolor: {
      "default": true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=script&lang=js ***!
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=script&lang=js ***!
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    width: String,
    height: String,
    withcolor: {
      "default": true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    width: String,
    height: String,
    linear_id: {
      "default": 'linear-trans'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=script&lang=js ***!
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=template&id=d63ecce6":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=template&id=d63ecce6 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-primary-2 pt-3"
};
var _hoisted_2 = {
  "class": "bg-primary pt-16 lg:pt-24 pb-7 md:pb-11 px-8 sm:px-12 md:px-16 xl:px-24"
};
var _hoisted_3 = {
  "class": "lg:flex justify-between items-center text-center lg:text-left"
};
var _hoisted_4 = {
  "class": ""
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"pt-10 lg:pt-0\"><div class=\"text-gray-50\"><div class=\"lg:flex\"><div class=\"lg:w-52 lg:mr-16\"><div class=\"aperto-bold text-xl md:text-2xl\">We Are Here</div><div class=\"font-jost text-base md:text-lg\">4 Kudang street, off Monrovia street. Wuse 2 FCT.</div></div><div class=\"lg:w-48 pt-10 lg:pt-0\"><div class=\"aperto-bold text-xl md:text-2xl\">Reach Us At</div><div class=\"font-jost text-base md:text-lg\"> 01-4962409 <br class=\"hidden lg:inline-block\"><span class=\"pl-5 lg:pl-0\">01-4960783</span></div></div></div></div></div>", 1);

var _hoisted_6 = {
  "class": "pt-28 md:flex justify-between items-center"
};
var _hoisted_7 = {
  "class": "text-gray-50 font-jost text-center md:text-left text-base md:text-lg"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" © ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Copyright");

var _hoisted_10 = {
  "class": "text-center pt-6 md:pt-0 md:float-right"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_logo_2_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("logo-2-icon");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_instagram_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("instagram-icon");

  var _component_instagram_2_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("instagram-2-icon");

  var _component_facebook_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("facebook-icon");

  var _component_facebook_2_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("facebook-2-icon");

  var _component_linkedin_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("linkedin-icon");

  var _component_linkedin_2_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("linkedin-2-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_logo_2_icon, {
    width: 'w-40 md:w-52',
    height: 'h-auto',
    linear_id: 'footer-logo'
  })]), _hoisted_5]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/login"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.year()) + " Daniel Homes Limited. ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cursor-pointer inline-block pr-2",
    onMouseover: _cache[0] || (_cache[0] = function ($event) {
      return $data.instagram_active = true;
    }),
    onMouseleave: _cache[1] || (_cache[1] = function ($event) {
      return $data.instagram_active = false;
    })
  }, [!$data.instagram_active ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_instagram_icon, {
    key: 0,
    width: 'w-8',
    height: 'h-8'
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.instagram_active ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_instagram_2_icon, {
    key: 1,
    width: 'w-8',
    height: 'h-8'
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
  /* HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cursor-pointer inline-block pr-2",
    onMouseover: _cache[2] || (_cache[2] = function ($event) {
      return $data.facebook_active = true;
    }),
    onMouseleave: _cache[3] || (_cache[3] = function ($event) {
      return $data.facebook_active = false;
    })
  }, [!$data.facebook_active ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_facebook_icon, {
    key: 0,
    width: 'w-8',
    height: 'h-8'
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.facebook_active ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_facebook_2_icon, {
    key: 1,
    width: 'w-8',
    height: 'h-8'
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
  /* HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cursor-pointer inline-block",
    onMouseover: _cache[4] || (_cache[4] = function ($event) {
      return $data.linkedin_active = true;
    }),
    onMouseleave: _cache[5] || (_cache[5] = function ($event) {
      return $data.linkedin_active = false;
    })
  }, [!$data.linkedin_active ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_linkedin_icon, {
    key: 0,
    width: 'w-8',
    height: 'h-8'
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.linkedin_active ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_linkedin_2_icon, {
    key: 1,
    width: 'w-8',
    height: 'h-8'
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
  /* HYDRATE_EVENTS */
  )])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=template&id=c7fa5db2":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=template&id=c7fa5db2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nav_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nav-bar");

  var _component_footer_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("footer-bar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "bg-primary",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.sub_menu = $data.sub_menu + 1;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nav_bar, {
    sub_menu: $data.sub_menu
  }, null, 8
  /* PROPS */
  , ["sub_menu"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_footer_bar)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/NavBar.vue?vue&type=template&id=7941792b":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/NavBar.vue?vue&type=template&id=7941792b ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "lg:flex justify-between items-center text-gray-200 hidden"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("About Us");

var _hoisted_3 = {
  "class": "flex"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Services");

var _hoisted_5 = {
  key: 0,
  "class": "pl-2 cursor-pointer"
};
var _hoisted_6 = {
  key: 1,
  "class": "pl-2 cursor-pointer"
};
var _hoisted_7 = {
  key: 0,
  "class": "absolute bg-primary pt-5 text-center w-52 z-50"
};
var _hoisted_8 = {
  "class": "relative"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Residential Projects");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Commercial Projects");

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Real Estate Advisory");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Projects");

var _hoisted_13 = {
  "class": "-mt-14 xl:-mt-24 w-32 xl:w-52"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Community");

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("News");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Contact Us");

var _hoisted_17 = {
  "class": "text-gray-200 flex items-center justify-between lg:hidden"
};
var _hoisted_18 = {
  "class": "w-28"
};
var _hoisted_19 = {
  key: 0,
  id: "mobile_menu",
  "class": "absolute right-0 w-72 z-40 bg-primary-2 rounded-md"
};
var _hoisted_20 = {
  "class": "relative px-7 py-4 text-yellow-100"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("About Us");

var _hoisted_22 = {
  "class": ""
};
var _hoisted_23 = {
  "class": "flex items-center"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Services");

var _hoisted_25 = {
  key: 0,
  "class": "bg-primary text-right w-full z-30"
};
var _hoisted_26 = {
  "class": "relative"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Residential Projects");

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Commercial Projects");

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Real Estate Advisory");

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Projects");

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Community");

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("News");

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Contact Us");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_down_arrow_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("down-arrow-icon");

  var _component_up_arrow_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("up-arrow-icon");

  var _component_logo_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("logo-icon");

  var _component_logo_2_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("logo-2-icon");

  var _component_menu_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("menu-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "bg-primary py-8 lg:pt-32 lg:pb-12 px-10 lg:px-24 aperto text-xl",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $data.show_extra = null;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('about'),
    "class": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "relative",
    onMouseover: _cache[0] || (_cache[0] = function ($event) {
      return $data.show_extra = 0;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('services'),
    "class": "w-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), $data.show_extra == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_down_arrow_icon, {
    width: 'w-2',
    height: 'h-auto',
    withcolor: false
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.show_extra == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_up_arrow_icon, {
    width: 'w-2',
    height: 'h-auto',
    withcolor: false
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.show_extra == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "px-6 py-1 block border-b border-t border-primary-2 cursor-pointer",
    href: _ctx.route('residential')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "px-6 py-1 block border-b border-primary-2 cursor-pointer",
    href: _ctx.route('commercial')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "px-6 py-1 block border-b border-primary-2 cursor-pointer",
    href: _ctx.route('advisory')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link class=\"px-6 py-1 block border-t border-primary-2 cursor-pointer\" :href=\"route('investment')\"\n              >Investment</Link\n            > ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
  /* HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('projects'),
    "class": "w-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('home'),
    "class": "w-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_logo_icon, {
        width: 'w-full',
        height: 'h-auto'
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('community'),
    "class": "w-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('news'),
    "class": "w-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_15];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('contact'),
    "class": "w-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('home'),
    "class": "w-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_logo_2_icon, {
        width: 'w-full',
        height: 'h-auto'
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.mobile = !$data.mobile;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_menu_icon, {
    width: 'w-8',
    height: 'h-8'
  })])]), $data.mobile ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.mobile = false;
    }),
    href: _ctx.route('about'),
    "class": "w-full py-2 block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_21];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $data.mobile = false;
    }),
    href: _ctx.route('services'),
    "class": "w-full py-2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_24];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), $data.show_extra_mobile == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "px-5 cursor-pointer",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $data.show_extra_mobile = 0;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_down_arrow_icon, {
    width: 'w-2',
    height: 'h-auto',
    withcolor: false
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.show_extra_mobile == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    "class": "px-5 cursor-pointer",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $data.show_extra_mobile = null;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_up_arrow_icon, {
    width: 'w-2',
    height: 'h-auto',
    withcolor: false
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.show_extra_mobile == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "px-6 py-1 block border-b border-t border-primary-2 cursor-pointer",
    href: _ctx.route('residential'),
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $data.mobile = false;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_27];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $data.mobile = false;
    }),
    "class": "px-6 py-1 block border-b border-primary-2 cursor-pointer",
    href: _ctx.route('commercial')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_28];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $data.mobile = false;
    }),
    "class": "px-6 py-1 block border-b border-primary-2 cursor-pointer",
    href: _ctx.route('advisory')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_29];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link\n                @click=\"mobile = false\"\n                class=\"px-6 py-1 block border-b border-primary-2 cursor-pointer\"\n                :href=\"route('investment')\"\n                >Investment</Link\n              > ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $data.mobile = false;
    }),
    href: _ctx.route('projects'),
    "class": "w-full py-2 block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_30];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $data.mobile = false;
    }),
    href: _ctx.route('community'),
    "class": "w-full py-2 block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_31];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $data.mobile = false;
    }),
    href: _ctx.route('news'),
    "class": "w-full py-2 block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_32];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $data.mobile = false;
    }),
    href: _ctx.route('contact'),
    "class": "w-full py-2 block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_33];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=template&id=9bae92da":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=template&id=9bae92da ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "min-h-screen"
};
var _hoisted_2 = {
  "class": "px-8 sm:px-12 md:px-16 xl:px-24 py-16 bg-secondary"
};
var _hoisted_3 = {
  key: 0,
  "class": "absolute w-full left-0 z-50"
};
var _hoisted_4 = {
  "class": "mx-auto max-w-sm"
};
var _hoisted_5 = {
  "class": "bg-primary-2 px-4 py-4 rounded-md shadow-md flex justify-between"
};
var _hoisted_6 = {
  "class": "w-full text-white text-center"
};
var _hoisted_7 = {
  key: 1,
  "class": "aperto-bold text-2xl text-primary-2 pb-3"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit Project");

var _hoisted_9 = {
  key: 2,
  "class": "absolute w-full left-0 z-50"
};
var _hoisted_10 = {
  "class": "mx-auto max-w-sm"
};
var _hoisted_11 = {
  "class": "bg-primary-2 px-4 py-4 rounded-md shadow-md"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-full text-white text-center"
}, " Are you sure you want to delete this project, this action cannot be reversed! ", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "flex justify-between items-center text-white font-bold pt-3"
};
var _hoisted_14 = ["src"];
var _hoisted_15 = {
  "class": "aperto-bold text-5xl md:text-6xl xl:text-8xl pt-16 leading-8 md:leading-12 text-primary text-center"
};
var _hoisted_16 = ["innerHTML"];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex justify-between items-center my-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-3/4 border-t-2 border-secondary-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-1/4 text-center aperto-bold text-2xl text-primary"
}, "House Types"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-3/4 border-t-2 border-secondary-2"
})], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5"
};
var _hoisted_19 = {
  "class": "block md:hidden"
};
var _hoisted_20 = ["src"];
var _hoisted_21 = ["onClick"];
var _hoisted_22 = {
  "class": "aperto-bold text-xl text-primary mt-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_close_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("close-icon");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_view_images = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("view-images");

  var _component_pop_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pop-form");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Project Details "
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [this.$attrs.flash != false && $data.timer != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.$attrs.flash), 1
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
  })])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.user && _ctx.$page.props.user.slot != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: '/admin/projects/' + $props.project.id + '/edit',
    "class": "px-4 py-2 cursor-pointer inline-block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.pop = !$data.pop;
    }),
    "class": "px-4 py-2 cursor-pointer inline-block"
  }, "Delete Project")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.pop ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "px-4 py-2 rounded-md bg-secondary-2 cursor-pointer",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.deleteProject && $options.deleteProject.apply($options, arguments);
    })
  }, "Yes, Delete"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "px-4 py-2 rounded-md bg-gray-400 cursor-pointer",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $data.pop = false;
    })
  }, "Cancel")])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: '/img/projects/' + $props.project.img,
    "class": "w-full animate__animated animate__heartBeat animate__backInLeft"
  }, null, 8
  /* PROPS */
  , _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.project.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "font-jost text-xl xl:text-2xl text-center text-primary pt-10",
    innerHTML: $props.project.details
  }, null, 8
  /* PROPS */
  , _hoisted_16), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.project.project_images, function (img, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: '/img/projects/' + img.img,
      "class": "w-full bg-cover bg-center"
    }, null, 8
    /* PROPS */
    , _hoisted_20)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "w-full cursor-pointer hidden md:inline-block",
      onClick: function onClick($event) {
        return $data.view_image = index;
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "bg-cover bg-center h-64 lg:h-72 xl:h-96 animate__animated animate__heartBeat animate__backInLeft",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        'background-image': $options.backgroungImage(img.img)
      })
    }, null, 4
    /* STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(img.type), 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_21), $data.view_image == index ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_view_images, {
      key: 0,
      img: img.img,
      onCloseView: $options.closeView
    }, null, 8
    /* PROPS */
    , ["img", "onCloseView"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "py-3 w-full cursor-pointer text-white text-center font-semibold bg-primary hover:bg-secondary-4 hover:text-primary",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $data.show_form = true;
    })
  }, " Register Interest ")]), $data.show_form ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_pop_form, {
    key: 0,
    message_info: 'I like ' + $props.project.title + '. I want to know more about this project.',
    onOpenForm: $options.openForm
  }, null, 8
  /* PROPS */
  , ["message_info", "onOpenForm"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=template&id=07d003b2&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=template&id=07d003b2&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-07d003b2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "fade w-full h-screen fixed inset-0 z-50"
};
var _hoisted_2 = {
  "class": "flex items-center h-screen max-w-screen-md md:max-w-screen-lg mx-auto"
};
var _hoisted_3 = {
  "class": "px-6 md:px-8 xl:px-12 py-10 text-primary bg-secondary rounded-md w-full relative"
};
var _hoisted_4 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_close_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("close-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute right-5 top-4 z-50",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.close && $options.close.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_close_icon, {
    width: 'w-4',
    height: 'h-4',
    color: 'text-red-600 cursor-pointer'
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: '/img/projects/' + _ctx.$attrs.img,
    "class": "w-full bg-cover bg-center"
  }, null, 8
  /* PROPS */
  , _hoisted_4)])])])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=template&id=37943b2c":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=template&id=37943b2c ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  id: "Icon_metro-chevron-thin-down",
  "data-name": "Icon metro-chevron-thin-down",
  d: "M29.437,10.965a1.074,1.074,0,0,1,1.51,0,1.049,1.049,0,0,1,0,1.495l-12.2,12.077a1.074,1.074,0,0,1-1.51,0L5.042,12.46a1.05,1.05,0,0,1,0-1.495,1.074,1.074,0,0,1,1.51,0L17.995,21.98Z",
  transform: "translate(-4.729 -10.655)",
  fill: "#c69e6f"
};
var _hoisted_2 = {
  key: 1,
  id: "Icon_metro-chevron-thin-down",
  "data-name": "Icon metro-chevron-thin-down",
  d: "M29.437,10.965a1.074,1.074,0,0,1,1.51,0,1.049,1.049,0,0,1,0,1.495l-12.2,12.077a1.074,1.074,0,0,1-1.51,0L5.042,12.46a1.05,1.05,0,0,1,0-1.495,1.074,1.074,0,0,1,1.51,0L17.995,21.98Z",
  transform: "translate(-4.729 -10.655)",
  fill: "#fff"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 26.53 14.192"
  }, [$props.withcolor ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", _hoisted_1)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", _hoisted_2))], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=template&id=5b28370f":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=template&id=5b28370f ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Path_109",
  "data-name": "Path 109",
  d: "M0,0H45.069V45.069H0Z",
  fill: "#3b686f"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Icon_awesome-facebook-f",
  "data-name": "Icon awesome-facebook-f",
  d: "M12.02,11.7,12.6,7.936H8.986V5.493a1.882,1.882,0,0,1,2.122-2.034H12.75V.254A20.025,20.025,0,0,0,9.835,0C6.86,0,4.916,1.8,4.916,5.067V7.936H1.609V11.7H4.916v9.1h4.07V11.7Z",
  transform: "translate(15.354 12.173)",
  fill: "#284e54"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_1, _hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    id: "Component_8_2",
    "data-name": "Component 8 – 2",
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 45.069 45.069"
  }, _hoisted_3, 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=template&id=0dee5f05":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=template&id=0dee5f05 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "Path_82",
  "data-name": "Path 82",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0,0H45.069V45.069H0Z",
  stroke: "none"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M 1.999992370605469 1.999992370605469 L 1.999992370605469 43.06866455078125 L 43.06866455078125 43.06866455078125 L 43.06866455078125 1.999992370605469 L 1.999992370605469 1.999992370605469 M -7.62939453125e-06 -7.62939453125e-06 L 45.06866455078125 -7.62939453125e-06 L 45.06866455078125 45.06866455078125 L -7.62939453125e-06 45.06866455078125 L -7.62939453125e-06 -7.62939453125e-06 Z",
  stroke: "none",
  fill: "#45676e"
})], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Icon_awesome-facebook-f",
  "data-name": "Icon awesome-facebook-f",
  d: "M12.02,11.7,12.6,7.936H8.986V5.493a1.882,1.882,0,0,1,2.122-2.034H12.75V.254A20.025,20.025,0,0,0,9.835,0C6.86,0,4.916,1.8,4.916,5.067V7.936H1.609V11.7H4.916v9.1h4.07V11.7Z",
  transform: "translate(15.355 12.173)",
  fill: "#3b686f"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_1, _hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    id: "Component_8_2",
    "data-name": "Component 8 – 2",
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 45.069 45.069"
  }, _hoisted_3, 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=template&id=94d52502":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=template&id=94d52502 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Path_82",
  "data-name": "Path 82",
  d: "M0,0H45V45H0Z",
  fill: "#3b686f"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Icon_awesome-instagram",
  "data-name": "Icon awesome-instagram",
  d: "M12.459,8.308A6.389,6.389,0,1,0,18.848,14.7,6.379,6.379,0,0,0,12.459,8.308Zm0,10.542A4.153,4.153,0,1,1,16.613,14.7a4.161,4.161,0,0,1-4.153,4.153Zm8.14-10.8a1.49,1.49,0,1,1-1.49-1.49A1.487,1.487,0,0,1,20.6,8.047Zm4.231,1.512a7.374,7.374,0,0,0-2.013-5.221A7.423,7.423,0,0,0,17.6,2.325c-2.057-.117-8.223-.117-10.281,0A7.412,7.412,0,0,0,2.1,4.332,7.4,7.4,0,0,0,.082,9.553c-.117,2.057-.117,8.223,0,10.281A7.374,7.374,0,0,0,2.1,25.055a7.432,7.432,0,0,0,5.221,2.013c2.057.117,8.223.117,10.281,0a7.374,7.374,0,0,0,5.221-2.013,7.423,7.423,0,0,0,2.013-5.221c.117-2.057.117-8.218,0-10.275ZM22.173,22.042A4.205,4.205,0,0,1,19.8,24.41c-1.64.651-5.532.5-7.345.5s-5.71.145-7.345-.5a4.205,4.205,0,0,1-2.369-2.369c-.651-1.64-.5-5.532-.5-7.345s-.145-5.71.5-7.345A4.205,4.205,0,0,1,5.114,4.983c1.64-.651,5.532-.5,7.345-.5s5.71-.145,7.345.5a4.205,4.205,0,0,1,2.369,2.369c.651,1.64.5,5.532.5,7.345S22.823,20.407,22.173,22.042Z",
  transform: "translate(10.058 7.818)",
  fill: "#284e54"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_1, _hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    id: "Component_8_1",
    "data-name": "Component 8 – 1",
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 45 45"
  }, _hoisted_3, 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=template&id=626ecad6":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=template&id=626ecad6 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "Path_82",
  "data-name": "Path 82",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0,0H45.069V45.069H0Z",
  stroke: "none"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M 1.999992370605469 1.999992370605469 L 1.999992370605469 43.06866455078125 L 43.06866455078125 43.06866455078125 L 43.06866455078125 1.999992370605469 L 1.999992370605469 1.999992370605469 M -7.62939453125e-06 -7.62939453125e-06 L 45.06866455078125 -7.62939453125e-06 L 45.06866455078125 45.06866455078125 L -7.62939453125e-06 45.06866455078125 L -7.62939453125e-06 -7.62939453125e-06 Z",
  stroke: "none",
  fill: "#45676e"
})], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Icon_awesome-instagram",
  "data-name": "Icon awesome-instagram",
  d: "M10.4,7.3a5.332,5.332,0,1,0,5.332,5.332A5.323,5.323,0,0,0,10.4,7.3Zm0,8.8a3.466,3.466,0,1,1,3.466-3.466A3.473,3.473,0,0,1,10.4,16.1Zm6.794-9.016a1.244,1.244,0,1,1-1.244-1.244A1.241,1.241,0,0,1,17.191,7.086Zm3.531,1.262a6.154,6.154,0,0,0-1.68-4.357,6.2,6.2,0,0,0-4.357-1.68c-1.717-.1-6.863-.1-8.58,0A6.186,6.186,0,0,0,1.748,3.986,6.175,6.175,0,0,0,.068,8.343c-.1,1.717-.1,6.863,0,8.58a6.154,6.154,0,0,0,1.68,4.357,6.2,6.2,0,0,0,4.357,1.68c1.717.1,6.863.1,8.58,0a6.154,6.154,0,0,0,4.357-1.68,6.2,6.2,0,0,0,1.68-4.357c.1-1.717.1-6.859,0-8.576ZM18.5,18.766a3.509,3.509,0,0,1-1.977,1.977c-1.369.543-4.617.418-6.13.418s-4.766.121-6.13-.418a3.509,3.509,0,0,1-1.977-1.977c-.543-1.369-.418-4.617-.418-6.13s-.121-4.766.418-6.13A3.509,3.509,0,0,1,4.267,4.529c1.369-.543,4.617-.418,6.13-.418s4.766-.121,6.13.418A3.509,3.509,0,0,1,18.5,6.506c.543,1.369.418,4.617.418,6.13S19.047,17.4,18.5,18.766Z",
  transform: "translate(12.178 9.937)",
  fill: "#3b686f"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_1, _hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    id: "Component_8_1",
    "data-name": "Component 8 – 1",
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 45.069 45.069"
  }, _hoisted_3, 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=template&id=49b9bfd7":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=template&id=49b9bfd7 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Path_109",
  "data-name": "Path 109",
  d: "M0,0H45.069V45.069H0Z",
  fill: "#3b686f"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Icon_awesome-linkedin-in",
  "data-name": "Icon awesome-linkedin-in",
  d: "M4.074,18.2H.3V6.05H4.074ZM2.185,4.392A2.2,2.2,0,1,1,4.371,2.186,2.2,2.2,0,0,1,2.185,4.392ZM18.2,18.2H14.431V12.286c0-1.41-.028-3.218-1.962-3.218-1.962,0-2.263,1.532-2.263,3.116V18.2H6.438V6.05h3.619V7.707h.053a3.965,3.965,0,0,1,3.57-1.962c3.819,0,4.521,2.515,4.521,5.781V18.2Z",
  transform: "translate(13.29 13.289)",
  fill: "#284e54"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_1, _hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    id: "Component_14_1",
    "data-name": "Component 14 – 1",
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 45.069 45.069"
  }, _hoisted_3, 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=template&id=26249d3d":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=template&id=26249d3d ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "Path_109",
  "data-name": "Path 109",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0,0H45.069V45.069H0Z",
  stroke: "none"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M 1.999992370605469 1.999992370605469 L 1.999992370605469 43.06866455078125 L 43.06866455078125 43.06866455078125 L 43.06866455078125 1.999992370605469 L 1.999992370605469 1.999992370605469 M -7.62939453125e-06 -7.62939453125e-06 L 45.06866455078125 -7.62939453125e-06 L 45.06866455078125 45.06866455078125 L -7.62939453125e-06 45.06866455078125 L -7.62939453125e-06 -7.62939453125e-06 Z",
  stroke: "none",
  fill: "#45676e"
})], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Icon_awesome-linkedin-in",
  "data-name": "Icon awesome-linkedin-in",
  d: "M4.074,18.2H.3V6.05H4.074ZM2.185,4.392A2.2,2.2,0,1,1,4.371,2.186,2.2,2.2,0,0,1,2.185,4.392ZM18.2,18.2H14.431V12.286c0-1.41-.028-3.218-1.962-3.218-1.962,0-2.263,1.532-2.263,3.116V18.2H6.438V6.05h3.619V7.707h.053a3.965,3.965,0,0,1,3.57-1.962c3.819,0,4.521,2.515,4.521,5.781V18.2Z",
  transform: "translate(13.29 13.289)",
  fill: "#3b686f"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_1, _hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    id: "Component_14_1",
    "data-name": "Component 14 – 1",
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 45.069 45.069"
  }, _hoisted_3, 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=template&id=16f7b0c4":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=template&id=16f7b0c4 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "Icon_ionic-ios-menu",
  "data-name": "Icon ionic-ios-menu",
  transform: "translate(-4.5 -10.125)"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Path_132",
  "data-name": "Path 132",
  d: "M26.292,12.02H5.447a.95.95,0,0,1-.947-.947h0a.95.95,0,0,1,.947-.947H26.292a.95.95,0,0,1,.947.947h0A.95.95,0,0,1,26.292,12.02Z",
  fill: "#e9c18d"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Path_133",
  "data-name": "Path 133",
  d: "M26.292,18.77H5.447a.95.95,0,0,1-.947-.947h0a.95.95,0,0,1,.947-.947H26.292a.95.95,0,0,1,.947.947h0A.95.95,0,0,1,26.292,18.77Z",
  transform: "translate(0 -1.065)",
  fill: "#e9c18d"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  id: "Path_134",
  "data-name": "Path 134",
  d: "M26.292,25.52H5.447a.95.95,0,0,1-.947-.947h0a.95.95,0,0,1,.947-.947H26.292a.95.95,0,0,1,.947.947h0A.95.95,0,0,1,26.292,25.52Z",
  transform: "translate(0 -2.13)",
  fill: "#e9c18d"
})], -1
/* HOISTED */
);

var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 22.739 13.265"
  }, _hoisted_2, 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=template&id=1fa6ccde":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=template&id=1fa6ccde ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  id: "Icon_metro-chevron-thin-down",
  "data-name": "Icon metro-chevron-thin-down",
  d: "M29.437,24.537a1.074,1.074,0,0,0,1.51,0,1.049,1.049,0,0,0,0-1.495l-12.2-12.077a1.074,1.074,0,0,0-1.51,0L5.042,23.042a1.05,1.05,0,0,0,0,1.495,1.074,1.074,0,0,0,1.51,0L18,13.522Z",
  transform: "translate(-4.729 -10.655)",
  fill: "#c69e6f"
};
var _hoisted_2 = {
  key: 1,
  id: "Icon_metro-chevron-thin-down",
  "data-name": "Icon metro-chevron-thin-down",
  d: "M29.437,24.537a1.074,1.074,0,0,0,1.51,0,1.049,1.049,0,0,0,0-1.495l-12.2-12.077a1.074,1.074,0,0,0-1.51,0L5.042,23.042a1.05,1.05,0,0,0,0,1.495,1.074,1.074,0,0,0,1.51,0L18,13.522Z",
  transform: "translate(-4.729 -10.655)",
  fill: "#fff"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 26.531 14.192"
  }, [$props.withcolor ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", _hoisted_1)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", _hoisted_2))], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=template&id=1c5c12ac":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=template&id=1c5c12ac ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["id"];

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("stop", {
  offset: "0",
  "stop-color": "#ae865d"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("stop", {
  offset: "1",
  "stop-color": "#e9c18d"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
var _hoisted_5 = {
  id: "logo2",
  transform: "translate(-86.181 -905.499)"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(231.604 929.918)\"><g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(0 0)\"><path id=\"Path_49\" data-name=\"Path 49\" d=\"M391.748,987.506h-12.4c.981-2.134.923-2.711.923-5.019v-21a10.647,10.647,0,0,0-.808-5.018H392.5c6.288,0,13.383,2.711,16.209,10.325C412.341,976.43,404.553,987.506,391.748,987.506Zm-6.287-28.842v26.708h6c10.9,0,12.633-8.134,12.46-13.267-.174-5.192-3.923-13.441-13.325-13.441Z\" transform=\"translate(-379.346 -955.606)\" fill=\"#ede7df\"></path><path id=\"Path_50\" data-name=\"Path 50\" d=\"M462.826,987.153l-4.846-11.364H447.829l-4.788,11.364H439.81a17.059,17.059,0,0,0,2.711-4.673l11.306-26.823h1.212l11.133,26.13c1.1,2.6,1.673,2.942,3.807,5.365ZM452.9,963.907l-3.922,9.229h7.845Z\" transform=\"translate(-409.817 -955.196)\" fill=\"#ede7df\"></path><path id=\"Path_51\" data-name=\"Path 51\" d=\"M531,958.88v28.669h-1.384L507.464,963.38V983.4a8.628,8.628,0,0,0,.576,3.288H504.7a8.621,8.621,0,0,0,.577-3.288V954.727h1.269l22.208,24.17V958.88a8.619,8.619,0,0,0-.577-3.288h3.4A8.618,8.618,0,0,0,531,958.88Z\" transform=\"translate(-442.516 -954.727)\" fill=\"#ede7df\"></path><path id=\"Path_52\" data-name=\"Path 52\" d=\"M570.392,987.506a10.949,10.949,0,0,0,.923-5.019v-21a10.947,10.947,0,0,0-.923-5.018h7.037a10.236,10.236,0,0,0-.923,5.018v21a10.238,10.238,0,0,0,.923,5.019Z\" transform=\"translate(-475.625 -955.606)\" fill=\"#ede7df\"></path><path id=\"Path_53\" data-name=\"Path 53\" d=\"M613.152,987.506H594.693c.981-2.134.923-2.711.923-5.019v-21a10.235,10.235,0,0,0-.923-5.018H612.46l1.558,3.518c-3.692-1.384-4.269-1.327-5.538-1.327h-7.672V968.3h11.075l-.75,2.192H600.808v14.882h8.364c1.212,0,1.9-.231,5.25-1.558Z\" transform=\"translate(-487.871 -955.606)\" fill=\"#ede7df\"></path><path id=\"Path_54\" data-name=\"Path 54\" d=\"M659.664,987.506H641.2c.981-2.134.923-2.711.923-5.019v-21a10.229,10.229,0,0,0-.923-5.018h7.037a10.239,10.239,0,0,0-.923,5.018v23.881h8.364c1.212,0,1.9-.231,5.25-1.558Z\" transform=\"translate(-511.311 -955.606)\" fill=\"#ede7df\"></path></g><g id=\"Group_24\" data-name=\"Group 24\" transform=\"translate(0 41.338)\"><path id=\"Path_55\" data-name=\"Path 55\" d=\"M400.343,1070.039a10.238,10.238,0,0,0,.923-5.019v-12.4h-15.8v12.4a10.237,10.237,0,0,0,.923,5.019h-7.037a10.237,10.237,0,0,0,.923-5.019v-21a10.233,10.233,0,0,0-.923-5.018h7.037a10.234,10.234,0,0,0-.923,5.018v6.345h15.8v-6.345a10.235,10.235,0,0,0-.923-5.018h7.038a10.235,10.235,0,0,0-.923,5.018v21a10.239,10.239,0,0,0,.923,5.019Z\" transform=\"translate(-379.346 -1038.537)\" fill=\"#ede7df\"></path><path id=\"Path_56\" data-name=\"Path 56\" d=\"M460.658,1070.266c-6.287.057-13.5-2.711-16.382-10.383-3.576-9.634,4.269-21.054,16.325-21.113,6.287-.057,13.555,2.769,16.382,10.326C480.616,1058.73,472.6,1070.209,460.658,1070.266Zm-.058-28.957c-8.826-.057-11.941,7.787-11.595,12.979.577,8.826,7.441,13.613,11.595,13.555,9.114-.173,11.883-7.9,11.537-13.152C471.56,1045.924,464.753,1041.309,460.6,1041.309Z\" transform=\"translate(-411.629 -1038.419)\" fill=\"#ede7df\"></path><path id=\"Path_57\" data-name=\"Path 57\" d=\"M547.483,1069.57a16.446,16.446,0,0,0,.116-5.6l-2.019-15.748-10.614,21.343h-1.327l-10.383-21-1.961,15.748a20.393,20.393,0,0,0-.058,5.307h-3.518a14.641,14.641,0,0,0,1.326-5.134l3.288-26.419h1.673l11.94,24.227,12-24.227H549.5l3.461,26.361a14.643,14.643,0,0,0,1.326,5.134Z\" transform=\"translate(-449.079 -1038.068)\" fill=\"#ede7df\"></path><path id=\"Path_58\" data-name=\"Path 58\" d=\"M617.573,1070.039H599.114c.98-2.135.923-2.711.923-5.019v-21a10.24,10.24,0,0,0-.923-5.018h17.767l1.557,3.518c-3.692-1.385-4.268-1.326-5.538-1.326h-7.672v9.633H616.3l-.75,2.192H605.228V1067.9h8.364c1.211,0,1.9-.23,5.249-1.557Z\" transform=\"translate(-490.099 -1038.537)\" fill=\"#ede7df\"></path><path id=\"Path_59\" data-name=\"Path 59\" d=\"M652.455,1069.967c-3-.057-5.365-.346-10.441-3.288l-.692-5.019s5.538,6.057,11.248,6.345c2.711.115,6.115-1.442,6.692-4.672.634-3.692-1.1-5.365-6.749-8.249-5.538-2.885-10.9-5.25-10.095-10.441.462-2.884,4.384-6.518,10.556-6.575,2.25-.058,5.134.23,9.634,2.423l.461,4.1c-4.673-4.441-8.768-4.845-10.614-4.5-4.9.98-7.787,5.595,1.961,10.325,6.922,3.346,11.479,5.826,10.268,12.575C663.877,1067.372,657.7,1070.083,652.455,1069.967Z\" transform=\"translate(-511.37 -1038.062)\" fill=\"#ede7df\"></path></g></g>", 1);

var _hoisted_7 = {
  id: "Group_26",
  "data-name": "Group 26",
  transform: "translate(86.181 905.499)"
};
var _hoisted_8 = ["fill"];
var _hoisted_9 = ["fill"];
var _hoisted_10 = ["fill"];
var _hoisted_11 = ["fill"];
var _hoisted_12 = ["fill"];
var _hoisted_13 = ["fill"];
var _hoisted_14 = ["fill"];
var _hoisted_15 = ["fill"];
var _hoisted_16 = ["fill"];
var _hoisted_17 = ["fill"];
var _hoisted_18 = ["fill"];
var _hoisted_19 = ["fill"];
var _hoisted_20 = ["fill"];
var _hoisted_21 = ["fill"];
var _hoisted_22 = ["fill"];
var _hoisted_23 = ["fill"];
var _hoisted_24 = ["fill"];
var _hoisted_25 = ["fill"];
var _hoisted_26 = ["fill"];
var _hoisted_27 = ["fill"];
var _hoisted_28 = ["fill"];
var _hoisted_29 = ["fill"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 298.931 121.535"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("defs", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("linearGradient", {
    id: $props.linear_id,
    y1: "0.5",
    x2: "1",
    y2: "0.5",
    gradientUnits: "objectBoundingBox"
  }, _hoisted_4, 8
  /* PROPS */
  , _hoisted_1)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_60",
    "data-name": "Path 60",
    d: "M207.07,1123.7v-9.055c-1.165-.325-2.222-.616-3.465-.958C203.138,1117.567,204.342,1120.679,207.07,1123.7Z",
    transform: "translate(-145.308 -1010.418)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_61",
    "data-name": "Path 61",
    d: "M202.441,1103.91c2.618,3.02,8.229,3.052,11.014.032A17.424,17.424,0,0,0,202.441,1103.91Z",
    transform: "translate(-144.771 -1005.047)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_62",
    "data-name": "Path 62",
    d: "M216.97,1114.617c0,2.642,0,5.188.007,7.731a5.277,5.277,0,0,0,.114.765c2.475-1.87,4-6.591,3.07-9.526C219.061,1113.941,218.057,1114.265,216.97,1114.617Z",
    transform: "translate(-152.093 -1010.367)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_63",
    "data-name": "Path 63",
    d: "M191.826,915.477a30.068,30.068,0,0,0-18.659,7.67l18.659,16.861Z",
    transform: "translate(-130.018 -910.528)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_64",
    "data-name": "Path 64",
    d: "M160.943,935.125a30.018,30.018,0,0,0-7.852,18.022l-.01.139h27.957Z",
    transform: "translate(-119.896 -920.429)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_65",
    "data-name": "Path 65",
    d: "M246.1,953.326c0-.047,0-.093-.007-.139a30.054,30.054,0,0,0-7.813-17.983l-20.056,18.122Z",
    transform: "translate(-152.726 -920.469)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_66",
    "data-name": "Path 66",
    d: "M216.727,915.477v24.61l18.7-16.9A30.1,30.1,0,0,0,216.727,915.477Z",
    transform: "translate(-151.97 -910.528)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_67",
    "data-name": "Path 67",
    d: "M216.906,987.946v9.924c2.849-3.358,5.644-6.655,8.415-9.924Z",
    transform: "translate(-152.061 -947.049)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_15), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_68",
    "data-name": "Path 68",
    d: "M257.351,1036.783c-.32,2.229-.652,4.519-1.033,7.172a39.9,39.9,0,0,1,8.535,13.795c.142-3.418.175-6.783.132-10.148C264.939,1043.353,261.21,1038.236,257.351,1036.783Z",
    transform: "translate(-171.923 -971.66)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_16), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_69",
    "data-name": "Path 69",
    d: "M252.688,1009.372a11.138,11.138,0,0,0-8.653,2.856c.819.865,1.5,1.556,2.14,2.275s1.239,1.463,1.834,2.172C250.9,1015.465,253.129,1011.99,252.688,1009.372Z",
    transform: "translate(-165.733 -957.814)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_70",
    "data-name": "Path 70",
    d: "M220.611,1001.219c2.628-.363,4.811-.591,6.958-1.011a5.858,5.858,0,0,0,2.539-1.179,15.176,15.176,0,0,1,13.479-3.372c1.082.228,2.136.57,3.265.876v-8.817c-3.54,0-6.962-.128-10.366.057a11.685,11.685,0,0,0-4.818,1.24C226.739,991.7,223.734,996.219,220.611,1001.219Z",
    transform: "translate(-153.928 -946.911)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_71",
    "data-name": "Path 71",
    d: "M258.105,1019.373l7.66,6.05v-13.763c-.851-.338-1.628-.648-2.507-1C262.485,1014.292,261.011,1017.308,258.105,1019.373Z",
    transform: "translate(-172.823 -958.495)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_72",
    "data-name": "Path 72",
    d: "M176.98,1024.415c-3.016,4.771-1.991,9.18,2.7,12.328a28.723,28.723,0,0,0,3.127,1.6c.392.192.791.367,1.093.509a44.255,44.255,0,0,0-2.653,4.8c-1.068,2.642,1.83,6.9,4.565,6.591a56.65,56.65,0,0,0,6.9-1.62v-4.687q-2.019-1.666-4.016-3.322c.054-.132.11-.267.164-.4a20.789,20.789,0,0,0,10.964.032c.021.124.039.249.061.37-1.335,1.1-2.667,2.2-3.963,3.266v4.736c2.2.563,4.352,1.161,6.534,1.642a2.944,2.944,0,0,0,1.773-.242,5.484,5.484,0,0,0,2.5-7.646c-.637-1.2-1.453-2.293-2.1-3.294a48.465,48.465,0,0,0,5.488-3.415c2.61-2.13,3.792-4.953,2.738-8.343-1.115-3.6-3.536-6.261-6.25-8.653-4.184.573-8.236,1.574-12.288,1.567-4.1-.011-8.2-1.018-12.727-1.652A67.433,67.433,0,0,0,176.98,1024.415Zm20.735,3.408c2.966-1.7,6.214-1.806,9.579-1.464-1.6,3.354-4.954,2.852-7.806,3.668.1,2.115.2,4.142.3,6.168-.1.032-.2.061-.3.089-.947-3.048-1.894-6.093-2.945-9.475C197.05,1027.245,197.313,1027.473,197.715,1027.822Zm-6.762-.122c.466-.53.822-.933,1.175-1.331q-1.464,5.1-2.931,10.188c-.135-.021-.271-.043-.406-.061.1-2.087.2-4.174.306-6.378-2.653-1-6.061-.356-7.564-3.671A15.746,15.746,0,0,1,190.953,1027.7Z",
    transform: "translate(-131.079 -962.489)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_73",
    "data-name": "Path 73",
    d: "M162.078,1043.495c-.384-2.724-.712-5.049-1.09-7.709a45.636,45.636,0,0,0-5.017,4.629,10.033,10.033,0,0,0-2.5,4.939c-.363,4.035-.117,8.123-.117,12.2A42.02,42.02,0,0,1,162.078,1043.495Z",
    transform: "translate(-119.994 -971.157)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_21), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_74",
    "data-name": "Path 74",
    d: "M170.79,999.372a2.518,2.518,0,0,0,1.161.67c2.507.406,5.032.74,8.03,1.172-3.176-5.1-6.232-9.679-11.267-12.41a9.975,9.975,0,0,0-4.07-1.136c-3.209-.168-6.431-.072-9.647-.064a11.9,11.9,0,0,0-1.35.167v8.8c.581-.146,1.022-.225,1.446-.364C160.915,994.33,166.164,995.27,170.79,999.372Z",
    transform: "translate(-120.181 -946.859)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_22), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_75",
    "data-name": "Path 75",
    d: "M201.638,987.824h-8.464c2.852,3.344,5.69,6.673,8.464,9.921Z",
    transform: "translate(-140.101 -946.987)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_23), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_76",
    "data-name": "Path 76",
    d: "M165.291,1009.116c-.014,3.262,2.222,6.574,4.925,7.428,1.285-1.46,2.589-2.931,3.963-4.487A11.779,11.779,0,0,0,165.291,1009.116Z",
    transform: "translate(-126.049 -957.699)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_24), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_77",
    "data-name": "Path 77",
    d: "M153.7,1011.462v13.955l7.763-6.2c-2.959-2.1-4.43-5.178-5.185-8.863C155.24,1010.8,154.432,1011.149,153.7,1011.462Z",
    transform: "translate(-120.207 -958.34)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_25), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_78",
    "data-name": "Path 78",
    d: "M314.481,1058.294a7.576,7.576,0,0,0-7.518,7.45,7.417,7.417,0,0,0,2.172,5.334,7.5,7.5,0,0,0,5.363,2.244h.01a7.565,7.565,0,0,0,7.523-7.425,7.419,7.419,0,0,0-2.2-5.338A7.538,7.538,0,0,0,314.481,1058.294Z",
    transform: "translate(-197.445 -982.501)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_26), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_79",
    "data-name": "Path 79",
    d: "M314.6,1094.731a7.594,7.594,0,0,0-7.64,7.5,7.582,7.582,0,0,0,7.418,7.55l.148,0a7.414,7.414,0,0,0,5.2-2.162,7.488,7.488,0,0,0-5.122-12.893Z",
    transform: "translate(-197.445 -1000.863)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_27), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_80",
    "data-name": "Path 80",
    d: "M345.653,1081.671h-.009a4.819,4.819,0,0,0-3.469,1.477,4.937,4.937,0,0,0-1.421,3.6,4.859,4.859,0,0,0,4.912,4.76h.083a4.976,4.976,0,0,0,4.843-4.948A5.031,5.031,0,0,0,345.653,1081.671Z",
    transform: "translate(-214.474 -994.282)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_28), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    id: "Path_81",
    "data-name": "Path 81",
    d: "M224.783,993.5c-2.215-3.688-5.675-5-10.29-3.9-.122-6.009-2.855-9.874-8.131-11.489a10.36,10.36,0,0,0-11.671,3.552c-3.438,4.216-3.593,8.894-.464,13.912l-10.064.023c.511-44,.44-54.786.312-57.246-.01-.271-.028-.52-.028-.52a35.092,35.092,0,0,0-69.966,0c-.017.175-.021.349-.032.524l-.057,2.988v2q0,11.815,0,23.631c0,9.155.036,18.31.021,27.465,0,.45.015.888.035,1.322l-27.908.063h-.358v3.934l3.963.293v9.592h4.094v-5.012h10.813v5.027H109.2v-9.508h3.324c.077.8.153,1.592.228,2.39h3.066a17.022,17.022,0,0,0,7.342,8.375c5.3,3.2,10.434,6.648,15.718,9.864,3.615,2.2,7.361,4.191,11.011,6.257.4-.21.68-.338.937-.5,6.5-3.981,13.043-7.88,19.46-11.986,3.137-2.005,6.054-4.359,9.006-6.641a10.735,10.735,0,0,0,3.764-5.37h3.262l.331-2.39h7.571c-3,4.8-2.962,9.212.1,13.48a10.794,10.794,0,0,0,8.749,4.507,10.536,10.536,0,0,0,2.94-.418c5.528-1.609,8.38-5.538,8.481-11.683,4.3,1.075,7.647-.05,9.957-3.348A8.028,8.028,0,0,0,224.783,993.5Zm-48.031,13.87c-4.345,3.234-8.728,6.428-13.233,9.426-4.387,2.913-8.945,5.559-13.56,8.4-9.223-5.394-18.439-10.5-26.821-16.961a15.4,15.4,0,0,1-4.64-5.7h3.864a3.044,3.044,0,0,0,.716,1.524c1.916,1.855,4.07,3.461,6.132,5.163l.385-.277a34.748,34.748,0,0,1-1.335-6.41h2.927c.644,5.925,2.838,10.918,8.991,13.492a19.883,19.883,0,0,1,1.987,1.154,10.059,10.059,0,0,0,1.1.417,15.394,15.394,0,0,1-1.6-10.591c-.866-1.164-1.677-2.251-2.475-3.318a9.635,9.635,0,0,1,1.642-1.154c4.686-2.643,12.528-2.632,17.157,0a9.2,9.2,0,0,1,1.617,1.15c-.762,1.04-1.538,2.1-2.154,2.941a42.458,42.458,0,0,1-.061,5.858,44.1,44.1,0,0,1-1.67,5.8c2.9-2.029,5.637-3.778,8.162-5.8a6.438,6.438,0,0,0,1.951-3.219,68.476,68.476,0,0,0,1.545-6.737h3.23a37.352,37.352,0,0,1-1.317,6.449c.118.05.235.1.349.157,1.705-1.375,3.49-2.656,5.075-4.156a5.891,5.891,0,0,0,1.57-2.45h4.3A11.839,11.839,0,0,1,176.751,1007.374Zm-60.315-69.389a32.352,32.352,0,0,1,2.176-9.49,33.137,33.137,0,0,1,63.88,9.49c.007.125.01.246.021.37l-.01,2.988H116.4A30.068,30.068,0,0,1,116.436,937.985Zm.21,55.515c-.135-5.469-.061-10.946-.064-16.423q-.011-15.811,0-31.618v-2.112H182.2a10.128,10.128,0,0,1,.139,1.154c.014,15.757.057,31.515-.018,47.275a34.538,34.538,0,0,1-.252,3.829l-5.46.012c-.767-5.87-4.125-10.815-8.144-15.55l-3.75,3.02a24.664,24.664,0,0,1,5.8,12.544l-3.047.007a21.537,21.537,0,0,0-1.865-5.6c-1.211,2.356-2.525,4.459-4.642,5.611l-7.288.016a8.742,8.742,0,0,0-8.723.02l-6.773.015c-2.255-1.117-3.644-3.232-4.868-5.531-.146.1-.27.132-.31.207-.182.363-.36.73-.506,1.111a21.786,21.786,0,0,0-1.168,4.229l-2.981.006c.017-.126.032-.253.051-.378a24.94,24.94,0,0,1,5.729-12.289c-1.339-1.061-2.528-2-3.789-2.991a34.164,34.164,0,0,0-6.374,9.39,23.1,23.1,0,0,0-1.927,6.283l-5.252.012C116.713,995.013,116.663,994.265,116.646,993.5Zm107.218,8.774c-2.227,3.181-5.378,4.145-9.629,2.948l-.459-.129,0,.477c.036,6.14-2.57,9.888-7.966,11.458a10.157,10.157,0,0,1-10.905-3.818c-2.985-4.162-2.9-8.486.275-13.221l.374-.559h-87.07v9.508h-2.718v-5.027H93.52v5.012H90.862v-9.542l-3.963-.293v-2.55l107.986-.243h.67l-.372-.557c-3.3-4.937-3.278-9.518.065-13.616a9.568,9.568,0,0,1,10.9-3.319c5.071,1.553,7.638,5.341,7.627,11.262v.469l.453-.121c4.557-1.219,7.806-.086,9.937,3.463h0A7.259,7.259,0,0,1,223.863,1002.275Z",
    transform: "translate(-86.181 -905.499)",
    fill: 'url(#' + $props.linear_id + ')'
  }, null, 8
  /* PROPS */
  , _hoisted_29)])])], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=template&id=35321bc8":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=template&id=35321bc8 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<defs><linearGradient id=\"linear-gradient\" y1=\"0.5\" x2=\"1\" y2=\"0.5\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#ae865d\"></stop><stop offset=\"1\" stop-color=\"#e9c18d\"></stop></linearGradient></defs><g id=\"Group_1\" data-name=\"Group 1\" transform=\"translate(0 110.041)\"><path id=\"Path_1\" data-name=\"Path 1\" d=\"M-112.034-952.446h-10.122a7.268,7.268,0,0,0,.753-4.1V-973.68a8.687,8.687,0,0,0-.659-4.1h10.64c5.132,0,10.923,2.213,13.23,8.427C-95.226-961.486-101.582-952.446-112.034-952.446Zm-5.132-23.541v21.8h4.9c8.9,0,10.31-6.639,10.17-10.829-.142-4.237-3.2-10.97-10.876-10.97Z\" transform=\"translate(122.156 978.482)\" fill=\"#ede7df\"></path><path id=\"Path_2\" data-name=\"Path 2\" d=\"M-19.143-953.2l-3.955-9.275h-8.287l-3.908,9.275h-2.637a13.93,13.93,0,0,0,2.213-3.814l9.228-21.893h.989l9.087,21.328c.895,2.119,1.365,2.4,3.107,4.379Zm-8.1-18.974-3.2,7.533h6.4Z\" transform=\"translate(62.409 979.287)\" fill=\"#ede7df\"></path><path id=\"Path_3\" data-name=\"Path 3\" d=\"M73.925-976.816v23.4H72.8L54.716-973.144v16.338a7.043,7.043,0,0,0,.47,2.684h-2.73a7.035,7.035,0,0,0,.471-2.684v-23.4h1.036l18.126,19.727v-16.337a7.037,7.037,0,0,0-.471-2.683H74.4A7.029,7.029,0,0,0,73.925-976.816Z\" transform=\"translate(-1.706 980.206)\" fill=\"#ede7df\"></path><path id=\"Path_4\" data-name=\"Path 4\" d=\"M143.972-952.446a8.933,8.933,0,0,0,.754-4.1V-973.68a8.933,8.933,0,0,0-.754-4.1h5.744a8.357,8.357,0,0,0-.753,4.1v17.138a8.357,8.357,0,0,0,.753,4.1Z\" transform=\"translate(-66.623 978.482)\" fill=\"#ede7df\"></path><path id=\"Path_5\" data-name=\"Path 5\" d=\"M192.891-952.446H177.825a7.268,7.268,0,0,0,.753-4.1V-973.68a8.356,8.356,0,0,0-.753-4.1h14.5L193.6-974.9c-3.014-1.13-3.484-1.083-4.52-1.083h-6.262v7.863h9.039l-.612,1.789h-8.427v12.147h6.826c.989,0,1.554-.188,4.285-1.271Z\" transform=\"translate(-90.637 978.482)\" fill=\"#ede7df\"></path><path id=\"Path_6\" data-name=\"Path 6\" d=\"M257.681-952.446H242.615a7.264,7.264,0,0,0,.754-4.1V-973.68a8.351,8.351,0,0,0-.754-4.1h5.744a8.36,8.36,0,0,0-.753,4.1v19.492h6.827c.989,0,1.554-.188,4.284-1.271Z\" transform=\"translate(-136.596 978.482)\" fill=\"#ede7df\"></path><path id=\"Path_7\" data-name=\"Path 7\" d=\"M365.04-952.446a8.354,8.354,0,0,0,.753-4.1v-10.123h-12.9v10.123a8.353,8.353,0,0,0,.753,4.1H347.9a8.354,8.354,0,0,0,.753-4.1V-973.68a8.354,8.354,0,0,0-.753-4.1h5.744a8.353,8.353,0,0,0-.753,4.1v5.179h12.9v-5.179a8.354,8.354,0,0,0-.753-4.1h5.744a8.356,8.356,0,0,0-.753,4.1v17.138a8.356,8.356,0,0,0,.753,4.1Z\" transform=\"translate(-211.282 978.482)\" fill=\"#ede7df\"></path><path id=\"Path_8\" data-name=\"Path 8\" d=\"M451.219-952.4c-5.132.047-11.017-2.213-13.371-8.475-2.919-7.863,3.484-17.185,13.324-17.232,5.132-.047,11.064,2.26,13.371,8.428C467.509-961.812,460.965-952.442,451.219-952.4Zm-.047-23.635c-7.2-.047-9.746,6.356-9.463,10.594.471,7.2,6.073,11.111,9.463,11.064,7.439-.141,9.7-6.45,9.416-10.735C460.118-972.264,454.562-976.03,451.172-976.03Z\" transform=\"translate(-274.582 978.714)\" fill=\"#ede7df\"></path><path id=\"Path_9\" data-name=\"Path 9\" d=\"M564.949-953.366a13.425,13.425,0,0,0,.094-4.567L563.4-970.786l-8.663,17.42h-1.083L545.175-970.5l-1.6,12.853a16.64,16.64,0,0,0-.047,4.331h-2.872a11.95,11.95,0,0,0,1.083-4.19l2.684-21.563h1.365l9.746,19.774,9.793-19.774H566.6l2.825,21.516a11.948,11.948,0,0,0,1.083,4.19Z\" transform=\"translate(-348.012 979.401)\" fill=\"#ede7df\"></path><path id=\"Path_10\" data-name=\"Path 10\" d=\"M669.106-952.446H654.04a7.266,7.266,0,0,0,.753-4.1V-973.68a8.354,8.354,0,0,0-.753-4.1h14.5l1.271,2.872c-3.013-1.13-3.484-1.083-4.52-1.083h-6.262v7.863h9.04l-.612,1.789h-8.427v12.147h6.827c.988,0,1.554-.188,4.284-1.271Z\" transform=\"translate(-428.442 978.482)\" fill=\"#ede7df\"></path><path id=\"Path_11\" data-name=\"Path 11\" d=\"M721.924-953.049c-2.448-.047-4.379-.283-8.522-2.684l-.565-4.1s4.52,4.944,9.181,5.179c2.213.094,4.991-1.177,5.461-3.814.518-3.013-.895-4.379-5.509-6.733-4.52-2.354-8.9-4.284-8.239-8.522.377-2.354,3.578-5.32,8.616-5.367a16.011,16.011,0,0,1,7.863,1.977l.376,3.343c-3.814-3.625-7.156-3.955-8.663-3.673-4,.8-6.356,4.567,1.6,8.428,5.65,2.731,9.369,4.755,8.38,10.264C731.246-955.168,726.208-952.955,721.924-953.049Z\" transform=\"translate(-470.15 979.415)\" fill=\"#ede7df\"></path></g><g id=\"Group_2\" data-name=\"Group 2\" transform=\"translate(74.559 0)\"><path id=\"Path_12\" data-name=\"Path 12\" d=\"M298.71-1064.233v-7.3c-.939-.261-1.792-.5-2.794-.773A9.646,9.646,0,0,0,298.71-1064.233Z\" transform=\"translate(-248.908 1155.579)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_13\" data-name=\"Path 13\" d=\"M294.37-1086.264a6.312,6.312,0,0,0,8.881.026A14.046,14.046,0,0,0,294.37-1086.264Z\" transform=\"translate(-247.868 1165.982)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_14\" data-name=\"Path 14\" d=\"M314.365-1071.615c0,2.13,0,4.184.006,6.234a4.208,4.208,0,0,0,.092.617,8.082,8.082,0,0,0,2.475-7.681C316.05-1072.161,315.241-1071.9,314.365-1071.615Z\" transform=\"translate(-262.051 1155.677)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_15\" data-name=\"Path 15\" d=\"M269.129-1345.084a24.246,24.246,0,0,0-15.046,6.185l15.046,13.6Z\" transform=\"translate(-219.29 1349.075)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_16\" data-name=\"Path 16\" d=\"M232.78-1318.044a24.206,24.206,0,0,0-6.331,14.532l-.009.112h22.543Z\" transform=\"translate(-199.681 1329.894)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_17\" data-name=\"Path 17\" d=\"M338.572-1303.323c0-.037,0-.075-.006-.112a24.232,24.232,0,0,0-6.3-14.5L316.1-1303.323Z\" transform=\"translate(-263.278 1329.817)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_18\" data-name=\"Path 18\" d=\"M314.03-1345.084v19.844l15.08-13.63A24.269,24.269,0,0,0,314.03-1345.084Z\" transform=\"translate(-261.814 1349.075)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_19\" data-name=\"Path 19\" d=\"M314.277-1245.352v8c2.3-2.708,4.551-5.366,6.785-8Z\" transform=\"translate(-261.989 1278.33)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_20\" data-name=\"Path 20\" d=\"M369.347-1178.144c-.258,1.8-.526,3.644-.833,5.783a32.178,32.178,0,0,1,6.883,11.124c.115-2.756.141-5.47.106-8.183C375.466-1172.846,372.459-1176.972,369.347-1178.144Z\" transform=\"translate(-300.462 1230.655)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_21\" data-name=\"Path 21\" d=\"M358.588-1215.9a8.981,8.981,0,0,0-6.977,2.3c.66.7,1.206,1.255,1.726,1.835s1,1.18,1.479,1.752C357.144-1210.99,358.944-1213.792,358.588-1215.9Z\" transform=\"translate(-288.472 1257.477)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_22\" data-name=\"Path 22\" d=\"M319.375-1234.806c2.119-.293,3.879-.477,5.611-.816a4.727,4.727,0,0,0,2.047-.95,12.236,12.236,0,0,1,10.868-2.719c.873.184,1.723.459,2.633.706v-7.11c-2.854,0-5.614-.1-8.359.046a9.415,9.415,0,0,0-3.885,1C324.317-1242.481,321.893-1238.837,319.375-1234.806Z\" transform=\"translate(-265.605 1278.597)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_23\" data-name=\"Path 23\" d=\"M370.974-1207.068c2.082,1.645,4.072,3.216,6.177,4.878v-11.1c-.687-.273-1.313-.522-2.021-.807A10.853,10.853,0,0,1,370.974-1207.068Z\" transform=\"translate(-302.207 1256.157)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_24\" data-name=\"Path 24\" d=\"M258.357-1198.487c-2.432,3.848-1.605,7.4,2.176,9.941a23.192,23.192,0,0,0,2.521,1.292c.316.155.637.3.881.411a35.637,35.637,0,0,0-2.139,3.871c-.861,2.13,1.476,5.562,3.681,5.315a45.74,45.74,0,0,0,5.568-1.307v-3.779q-1.628-1.344-3.239-2.679c.043-.106.089-.215.132-.322a16.766,16.766,0,0,0,8.841.026c.017.1.032.2.049.3-1.077.885-2.15,1.772-3.2,2.633v3.819c1.771.454,3.509.936,5.269,1.324a2.377,2.377,0,0,0,1.43-.2,4.422,4.422,0,0,0,2.013-6.165c-.514-.965-1.172-1.849-1.691-2.656a39.167,39.167,0,0,0,4.425-2.754,5.935,5.935,0,0,0,2.208-6.728,15.607,15.607,0,0,0-5.039-6.977c-3.374.462-6.642,1.269-9.909,1.263-3.3-.008-6.61-.821-10.262-1.332A54.439,54.439,0,0,0,258.357-1198.487Zm16.72,2.748c2.392-1.369,5.01-1.455,7.724-1.18-1.289,2.7-3.994,2.3-6.294,2.958.083,1.705.161,3.339.238,4.973-.08.026-.161.049-.241.072-.764-2.458-1.528-4.913-2.375-7.641C274.54-1196.2,274.753-1196.021,275.077-1195.74Zm-5.453-.1c.376-.428.663-.752.948-1.073q-1.18,4.109-2.363,8.215c-.109-.017-.218-.034-.327-.049.08-1.682.164-3.365.247-5.143-2.139-.8-4.887-.287-6.1-2.96A12.7,12.7,0,0,1,269.624-1195.837Z\" transform=\"translate(-221.345 1248.421)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_25\" data-name=\"Path 25\" d=\"M233.806-1173.3c-.31-2.2-.574-4.072-.879-6.217a36.723,36.723,0,0,0-4.045,3.733,8.087,8.087,0,0,0-2.013,3.983c-.293,3.253-.095,6.549-.095,9.834A33.889,33.889,0,0,1,233.806-1173.3Z\" transform=\"translate(-199.872 1231.629)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_26\" data-name=\"Path 26\" d=\"M241.043-1236.354a2.032,2.032,0,0,0,.936.54c2.021.327,4.057.6,6.475.945-2.561-4.115-5.025-7.8-9.085-10.006a8.046,8.046,0,0,0-3.282-.916c-2.587-.135-5.186-.057-7.779-.052a9.686,9.686,0,0,0-1.088.135v7.1c.468-.118.824-.181,1.166-.293A12.217,12.217,0,0,1,241.043-1236.354Z\" transform=\"translate(-200.234 1278.698)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_27\" data-name=\"Path 27\" d=\"M288.441-1245.52h-6.825c2.3,2.7,4.588,5.381,6.825,8Z\" transform=\"translate(-238.821 1278.449)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_28\" data-name=\"Path 28\" d=\"M243.245-1216.239a6.474,6.474,0,0,0,3.971,5.99c1.036-1.177,2.087-2.363,3.2-3.618A9.5,9.5,0,0,0,243.245-1216.239Z\" transform=\"translate(-211.602 1257.699)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_29\" data-name=\"Path 29\" d=\"M227.29-1213.623v11.253l6.259-5c-2.386-1.7-3.572-4.175-4.18-7.147C228.533-1214.16,227.881-1213.876,227.29-1213.623Z\" transform=\"translate(-200.284 1256.458)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_30\" data-name=\"Path 30\" d=\"M444.274-1148.54a6.109,6.109,0,0,0-6.063,6.008,5.981,5.981,0,0,0,1.751,4.3,6.045,6.045,0,0,0,4.325,1.809h.008a6.1,6.1,0,0,0,6.066-5.987,5.983,5.983,0,0,0-1.775-4.3A6.077,6.077,0,0,0,444.274-1148.54Z\" transform=\"translate(-349.902 1209.656)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_31\" data-name=\"Path 31\" d=\"M444.372-1098.4a6.025,6.025,0,0,0-4.321,1.747,6.026,6.026,0,0,0-1.84,4.3,6.114,6.114,0,0,0,5.981,6.088h.119A5.976,5.976,0,0,0,448.5-1088a6.113,6.113,0,0,0,1.86-4.312A6.1,6.1,0,0,0,444.372-1098.4Z\" transform=\"translate(-349.903 1174.086)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_32\" data-name=\"Path 32\" d=\"M488.664-1116.369h-.008a3.886,3.886,0,0,0-2.8,1.191,3.978,3.978,0,0,0-1.146,2.9,3.918,3.918,0,0,0,3.96,3.839h.067a4.013,4.013,0,0,0,3.905-3.99A4.057,4.057,0,0,0,488.664-1116.369Z\" transform=\"translate(-382.888 1186.835)\" fill=\"url(#linear-gradient)\"></path><path id=\"Path_33\" data-name=\"Path 33\" d=\"M246.134-1287.853c-1.786-2.974-4.576-4.031-8.3-3.145-.1-4.846-2.3-7.962-6.556-9.264a8.353,8.353,0,0,0-9.411,2.864c-2.772,3.4-2.9,7.171-.375,11.217l-8.115.018c.412-35.475.355-44.177.252-46.16-.008-.218-.023-.419-.023-.419a28.2,28.2,0,0,0-8.95-18.509,28.2,28.2,0,0,0-19.258-7.566,28.2,28.2,0,0,0-19.258,7.566,28.173,28.173,0,0,0-8.95,18.506c-.014.141-.017.281-.026.422l-.046,2.409v1.611q0,9.527,0,19.054c0,7.382.029,14.765.017,22.147,0,.363.012.716.028,1.066l-22.5.051h-.289v3.172l3.2.237v7.735h3.3v-4.041h8.719v4.053h3.349v-7.666h2.68c.062.643.124,1.283.184,1.926h2.472a13.728,13.728,0,0,0,5.921,6.754c4.27,2.579,8.413,5.361,12.674,7.954,2.914,1.774,5.935,3.38,8.878,5.045.322-.169.548-.273.755-.4,5.24-3.21,10.518-6.354,15.692-9.665,2.529-1.617,4.881-3.515,7.262-5.355a8.659,8.659,0,0,0,3.035-4.33h2.63l.267-1.926h6.1c-2.417,3.868-2.389,7.427.081,10.87a8.7,8.7,0,0,0,7.054,3.634,8.492,8.492,0,0,0,2.371-.337c4.457-1.3,6.757-4.465,6.838-9.42,3.466.867,6.167-.04,8.029-2.7A6.473,6.473,0,0,0,246.134-1287.853Zm-38.73,11.184c-3.5,2.607-7.038,5.183-10.67,7.6-3.537,2.349-7.213,4.482-10.934,6.776-7.437-4.35-14.868-8.465-21.627-13.676a12.416,12.416,0,0,1-3.741-4.6h3.115a2.459,2.459,0,0,0,.577,1.229c1.545,1.5,3.282,2.791,4.944,4.163l.31-.224a28.052,28.052,0,0,1-1.077-5.169h2.36c.52,4.778,2.288,8.8,7.25,10.88a16.172,16.172,0,0,1,1.6.93,8.074,8.074,0,0,0,.89.336,12.41,12.41,0,0,1-1.289-8.539c-.7-.939-1.352-1.815-2-2.676a7.789,7.789,0,0,1,1.324-.931,15.8,15.8,0,0,1,13.834,0,7.458,7.458,0,0,1,1.3.927c-.614.839-1.24,1.691-1.737,2.372a34.205,34.205,0,0,1-.049,4.723,35.649,35.649,0,0,1-1.347,4.68c2.34-1.637,4.545-3.047,6.581-4.675a5.193,5.193,0,0,0,1.574-2.6,55.281,55.281,0,0,0,1.246-5.433h2.6a30.145,30.145,0,0,1-1.062,5.2c.094.04.189.083.281.126,1.375-1.108,2.814-2.142,4.092-3.351a4.747,4.747,0,0,0,1.266-1.976H210.5A9.548,9.548,0,0,1,207.4-1276.669Zm-48.635-55.951a26.091,26.091,0,0,1,1.754-7.652,26.684,26.684,0,0,1,6.7-9.817,26.626,26.626,0,0,1,18.182-7.141,26.608,26.608,0,0,1,18.178,7.141,26.6,26.6,0,0,1,8.453,17.469c.006.1.009.2.017.3l-.008,2.409h-53.3A24.345,24.345,0,0,1,158.769-1332.62Zm.169,44.764c-.109-4.41-.049-8.827-.052-13.243q-.008-12.749,0-25.5v-1.7H211.8a8.185,8.185,0,0,1,.112.93c.011,12.706.046,25.412-.015,38.12a27.863,27.863,0,0,1-.2,3.088l-4.4.01c-.618-4.733-3.326-8.721-6.567-12.539l-3.023,2.435a19.891,19.891,0,0,1,4.675,10.115l-2.457.006a17.376,17.376,0,0,0-1.5-4.513c-.977,1.9-2.036,3.6-3.743,4.525l-5.877.013a7.048,7.048,0,0,0-7.034.016l-5.462.012a9.621,9.621,0,0,1-3.925-4.459c-.117.077-.218.106-.25.167-.146.293-.29.589-.408.9a17.538,17.538,0,0,0-.942,3.41l-2.4.005c.014-.1.026-.2.041-.305a20.109,20.109,0,0,1,4.62-9.909c-1.08-.856-2.039-1.611-3.055-2.412a27.553,27.553,0,0,0-5.14,7.572,18.621,18.621,0,0,0-1.554,5.066l-4.235.01C158.993-1286.637,158.953-1287.24,158.938-1287.856Zm86.455,7.075c-1.8,2.565-4.336,3.342-7.764,2.377l-.37-.1,0,.384c.029,4.951-2.072,7.973-6.423,9.239a8.189,8.189,0,0,1-8.793-3.078c-2.407-3.356-2.334-6.843.222-10.661l.3-.45H152.36v7.666h-2.192v-4.054h-9.877v4.042h-2.144v-7.694l-3.2-.237v-2.057l87.074-.2h.54l-.3-.449c-2.661-3.981-2.643-7.675.052-10.979a7.715,7.715,0,0,1,8.793-2.677c4.089,1.252,6.158,4.307,6.15,9.081v.378l.365-.1c3.675-.983,6.295-.069,8.013,2.792h0A5.853,5.853,0,0,1,245.393-1280.781Z\" transform=\"translate(-134.373 1358.816)\" fill=\"url(#linear-gradient)\"></path></g>", 3);

var _hoisted_4 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    id: "logo",
    "data-name": "Group 3",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block fill-current", [$props.width, $props.height]]),
    viewBox: "0 0 261.914 136.831"
  }, _hoisted_4, 2
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade[data-v-07d003b2] {\n  background-color: rgba(53, 107, 67, 0.541);\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewImages_vue_vue_type_style_index_0_id_07d003b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewImages_vue_vue_type_style_index_0_id_07d003b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewImages_vue_vue_type_style_index_0_id_07d003b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/Pages/FrontPages/FooterBar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/FrontPages/FooterBar.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterBar_vue_vue_type_template_id_d63ecce6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterBar.vue?vue&type=template&id=d63ecce6 */ "./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=template&id=d63ecce6");
/* harmony import */ var _FooterBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterBar.vue?vue&type=script&lang=js */ "./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FooterBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FooterBar_vue_vue_type_template_id_d63ecce6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/FrontPages/FooterBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/FrontPages/MasterLayout.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/FrontPages/MasterLayout.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MasterLayout_vue_vue_type_template_id_c7fa5db2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MasterLayout.vue?vue&type=template&id=c7fa5db2 */ "./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=template&id=c7fa5db2");
/* harmony import */ var _MasterLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MasterLayout.vue?vue&type=script&lang=js */ "./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MasterLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MasterLayout_vue_vue_type_template_id_c7fa5db2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/FrontPages/MasterLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/FrontPages/NavBar.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/FrontPages/NavBar.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavBar_vue_vue_type_template_id_7941792b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=7941792b */ "./resources/js/Pages/FrontPages/NavBar.vue?vue&type=template&id=7941792b");
/* harmony import */ var _NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.vue?vue&type=script&lang=js */ "./resources/js/Pages/FrontPages/NavBar.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavBar_vue_vue_type_template_id_7941792b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/FrontPages/NavBar.vue"]])
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

/***/ "./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectDetails_vue_vue_type_template_id_9bae92da__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDetails.vue?vue&type=template&id=9bae92da */ "./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=template&id=9bae92da");
/* harmony import */ var _ProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDetails.vue?vue&type=script&lang=js */ "./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProjectDetails_vue_vue_type_template_id_9bae92da__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/FrontPages/Projects/ProjectDetails.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/FrontPages/Projects/ViewImages.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Projects/ViewImages.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewImages_vue_vue_type_template_id_07d003b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewImages.vue?vue&type=template&id=07d003b2&scoped=true */ "./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=template&id=07d003b2&scoped=true");
/* harmony import */ var _ViewImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewImages.vue?vue&type=script&lang=js */ "./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=script&lang=js");
/* harmony import */ var _ViewImages_vue_vue_type_style_index_0_id_07d003b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css */ "./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ViewImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ViewImages_vue_vue_type_template_id_07d003b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-07d003b2"],['__file',"resources/js/Pages/FrontPages/Projects/ViewImages.vue"]])
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

/***/ "./resources/js/Pages/Shared/Icons/DownArrowIcon.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/DownArrowIcon.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DownArrowIcon_vue_vue_type_template_id_37943b2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownArrowIcon.vue?vue&type=template&id=37943b2c */ "./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=template&id=37943b2c");
/* harmony import */ var _DownArrowIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DownArrowIcon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DownArrowIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DownArrowIcon_vue_vue_type_template_id_37943b2c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/DownArrowIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Facebook2Icon.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Facebook2Icon.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Facebook2Icon_vue_vue_type_template_id_5b28370f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Facebook2Icon.vue?vue&type=template&id=5b28370f */ "./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=template&id=5b28370f");
/* harmony import */ var _Facebook2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Facebook2Icon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Facebook2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Facebook2Icon_vue_vue_type_template_id_5b28370f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/Facebook2Icon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/FacebookIcon.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/FacebookIcon.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FacebookIcon_vue_vue_type_template_id_0dee5f05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FacebookIcon.vue?vue&type=template&id=0dee5f05 */ "./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=template&id=0dee5f05");
/* harmony import */ var _FacebookIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FacebookIcon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FacebookIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FacebookIcon_vue_vue_type_template_id_0dee5f05__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/FacebookIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Instagram2Icon.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Instagram2Icon.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Instagram2Icon_vue_vue_type_template_id_94d52502__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Instagram2Icon.vue?vue&type=template&id=94d52502 */ "./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=template&id=94d52502");
/* harmony import */ var _Instagram2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instagram2Icon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Instagram2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Instagram2Icon_vue_vue_type_template_id_94d52502__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/Instagram2Icon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/InstagramIcon.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/InstagramIcon.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InstagramIcon_vue_vue_type_template_id_626ecad6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InstagramIcon.vue?vue&type=template&id=626ecad6 */ "./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=template&id=626ecad6");
/* harmony import */ var _InstagramIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InstagramIcon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InstagramIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InstagramIcon_vue_vue_type_template_id_626ecad6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/InstagramIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Linkedin2Icon_vue_vue_type_template_id_49b9bfd7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Linkedin2Icon.vue?vue&type=template&id=49b9bfd7 */ "./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=template&id=49b9bfd7");
/* harmony import */ var _Linkedin2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Linkedin2Icon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Linkedin2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Linkedin2Icon_vue_vue_type_template_id_49b9bfd7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/Linkedin2Icon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/LinkedinIcon.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/LinkedinIcon.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LinkedinIcon_vue_vue_type_template_id_26249d3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedinIcon.vue?vue&type=template&id=26249d3d */ "./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=template&id=26249d3d");
/* harmony import */ var _LinkedinIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkedinIcon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LinkedinIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LinkedinIcon_vue_vue_type_template_id_26249d3d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/LinkedinIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/MenuIcon.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/MenuIcon.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuIcon_vue_vue_type_template_id_16f7b0c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuIcon.vue?vue&type=template&id=16f7b0c4 */ "./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=template&id=16f7b0c4");
/* harmony import */ var _MenuIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuIcon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MenuIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuIcon_vue_vue_type_template_id_16f7b0c4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/MenuIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/UpArrowIcon.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/UpArrowIcon.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpArrowIcon_vue_vue_type_template_id_1fa6ccde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpArrowIcon.vue?vue&type=template&id=1fa6ccde */ "./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=template&id=1fa6ccde");
/* harmony import */ var _UpArrowIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpArrowIcon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UpArrowIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UpArrowIcon_vue_vue_type_template_id_1fa6ccde__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Icons/UpArrowIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logo2Icon_vue_vue_type_template_id_1c5c12ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo2Icon.vue?vue&type=template&id=1c5c12ac */ "./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=template&id=1c5c12ac");
/* harmony import */ var _Logo2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo2Icon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Logo2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Logo2Icon_vue_vue_type_template_id_1c5c12ac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/SVGImages/Logo2Icon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/SVGImages/LogoIcon.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Shared/SVGImages/LogoIcon.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogoIcon_vue_vue_type_template_id_35321bc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoIcon.vue?vue&type=template&id=35321bc8 */ "./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=template&id=35321bc8");
/* harmony import */ var _LogoIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoIcon.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mayowaajayi_Documents_programs_macode09_daniel_homes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LogoIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LogoIcon_vue_vue_type_template_id_35321bc8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/SVGImages/LogoIcon.vue"]])
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

/***/ "./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FooterBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FooterBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FooterBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MasterLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MasterLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MasterLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/FrontPages/NavBar.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/NavBar.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/NavBar.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectDetails.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ViewImages.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DownArrowIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DownArrowIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DownArrowIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Facebook2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Facebook2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Facebook2Icon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FacebookIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FacebookIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FacebookIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Instagram2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Instagram2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Instagram2Icon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InstagramIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InstagramIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InstagramIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Linkedin2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Linkedin2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Linkedin2Icon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LinkedinIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LinkedinIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LinkedinIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpArrowIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpArrowIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UpArrowIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo2Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Logo2Icon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogoIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=template&id=d63ecce6":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=template&id=d63ecce6 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FooterBar_vue_vue_type_template_id_d63ecce6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FooterBar_vue_vue_type_template_id_d63ecce6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FooterBar.vue?vue&type=template&id=d63ecce6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/FooterBar.vue?vue&type=template&id=d63ecce6");


/***/ }),

/***/ "./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=template&id=c7fa5db2":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=template&id=c7fa5db2 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MasterLayout_vue_vue_type_template_id_c7fa5db2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MasterLayout_vue_vue_type_template_id_c7fa5db2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MasterLayout.vue?vue&type=template&id=c7fa5db2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/MasterLayout.vue?vue&type=template&id=c7fa5db2");


/***/ }),

/***/ "./resources/js/Pages/FrontPages/NavBar.vue?vue&type=template&id=7941792b":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/NavBar.vue?vue&type=template&id=7941792b ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_template_id_7941792b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_template_id_7941792b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavBar.vue?vue&type=template&id=7941792b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/NavBar.vue?vue&type=template&id=7941792b");


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

/***/ "./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=template&id=9bae92da":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=template&id=9bae92da ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_template_id_9bae92da__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_template_id_9bae92da__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectDetails.vue?vue&type=template&id=9bae92da */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ProjectDetails.vue?vue&type=template&id=9bae92da");


/***/ }),

/***/ "./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=template&id=07d003b2&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=template&id=07d003b2&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewImages_vue_vue_type_template_id_07d003b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewImages_vue_vue_type_template_id_07d003b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ViewImages.vue?vue&type=template&id=07d003b2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=template&id=07d003b2&scoped=true");


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

/***/ "./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=template&id=37943b2c":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=template&id=37943b2c ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DownArrowIcon_vue_vue_type_template_id_37943b2c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DownArrowIcon_vue_vue_type_template_id_37943b2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DownArrowIcon.vue?vue&type=template&id=37943b2c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/DownArrowIcon.vue?vue&type=template&id=37943b2c");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=template&id=5b28370f":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=template&id=5b28370f ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Facebook2Icon_vue_vue_type_template_id_5b28370f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Facebook2Icon_vue_vue_type_template_id_5b28370f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Facebook2Icon.vue?vue&type=template&id=5b28370f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Facebook2Icon.vue?vue&type=template&id=5b28370f");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=template&id=0dee5f05":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=template&id=0dee5f05 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FacebookIcon_vue_vue_type_template_id_0dee5f05__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FacebookIcon_vue_vue_type_template_id_0dee5f05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FacebookIcon.vue?vue&type=template&id=0dee5f05 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/FacebookIcon.vue?vue&type=template&id=0dee5f05");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=template&id=94d52502":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=template&id=94d52502 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Instagram2Icon_vue_vue_type_template_id_94d52502__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Instagram2Icon_vue_vue_type_template_id_94d52502__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Instagram2Icon.vue?vue&type=template&id=94d52502 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Instagram2Icon.vue?vue&type=template&id=94d52502");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=template&id=626ecad6":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=template&id=626ecad6 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InstagramIcon_vue_vue_type_template_id_626ecad6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InstagramIcon_vue_vue_type_template_id_626ecad6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InstagramIcon.vue?vue&type=template&id=626ecad6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/InstagramIcon.vue?vue&type=template&id=626ecad6");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=template&id=49b9bfd7":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=template&id=49b9bfd7 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Linkedin2Icon_vue_vue_type_template_id_49b9bfd7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Linkedin2Icon_vue_vue_type_template_id_49b9bfd7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Linkedin2Icon.vue?vue&type=template&id=49b9bfd7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/Linkedin2Icon.vue?vue&type=template&id=49b9bfd7");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=template&id=26249d3d":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=template&id=26249d3d ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LinkedinIcon_vue_vue_type_template_id_26249d3d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LinkedinIcon_vue_vue_type_template_id_26249d3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LinkedinIcon.vue?vue&type=template&id=26249d3d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/LinkedinIcon.vue?vue&type=template&id=26249d3d");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=template&id=16f7b0c4":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=template&id=16f7b0c4 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuIcon_vue_vue_type_template_id_16f7b0c4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuIcon_vue_vue_type_template_id_16f7b0c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuIcon.vue?vue&type=template&id=16f7b0c4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/MenuIcon.vue?vue&type=template&id=16f7b0c4");


/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=template&id=1fa6ccde":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=template&id=1fa6ccde ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpArrowIcon_vue_vue_type_template_id_1fa6ccde__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpArrowIcon_vue_vue_type_template_id_1fa6ccde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UpArrowIcon.vue?vue&type=template&id=1fa6ccde */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Icons/UpArrowIcon.vue?vue&type=template&id=1fa6ccde");


/***/ }),

/***/ "./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=template&id=1c5c12ac":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=template&id=1c5c12ac ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo2Icon_vue_vue_type_template_id_1c5c12ac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo2Icon_vue_vue_type_template_id_1c5c12ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Logo2Icon.vue?vue&type=template&id=1c5c12ac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/Logo2Icon.vue?vue&type=template&id=1c5c12ac");


/***/ }),

/***/ "./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=template&id=35321bc8":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=template&id=35321bc8 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoIcon_vue_vue_type_template_id_35321bc8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoIcon_vue_vue_type_template_id_35321bc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogoIcon.vue?vue&type=template&id=35321bc8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/SVGImages/LogoIcon.vue?vue&type=template&id=35321bc8");


/***/ }),

/***/ "./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopForm_vue_vue_type_style_index_0_id_4293ac8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/PopForm.vue?vue&type=style&index=0&id=4293ac8a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewImages_vue_vue_type_style_index_0_id_07d003b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/FrontPages/Projects/ViewImages.vue?vue&type=style&index=0&id=07d003b2&scoped=true&lang=css");


/***/ })

}]);