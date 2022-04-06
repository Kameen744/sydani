"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_Layout_Layout-bac_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue */ "./resources/js/Pages/User/Layout/Sidebar.vue");
/* harmony import */ var _Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue */ "./resources/js/Pages/User/Layout/Footer.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();

    var _require = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js"),
        onMounted = _require.onMounted;

    onMounted(function () {
      function slideToggle(t, e, o) {
        0 === t.clientHeight ? j(t, e, o, !0) : j(t, e, o);
      }

      function slideUp(t, e, o) {
        j(t, e, o);
      }

      function slideDown(t, e, o) {
        j(t, e, o, !0);
      }

      function j(t, e, o, i) {
        void 0 === e && (e = 400), void 0 === i && (i = !1), t.style.overflow = "hidden", i && (t.style.display = "block");
        var p,
            l = window.getComputedStyle(t),
            n = parseFloat(l.getPropertyValue("height")),
            a = parseFloat(l.getPropertyValue("padding-top")),
            s = parseFloat(l.getPropertyValue("padding-bottom")),
            r = parseFloat(l.getPropertyValue("margin-top")),
            d = parseFloat(l.getPropertyValue("margin-bottom")),
            g = n / e,
            y = a / e,
            m = s / e,
            u = r / e,
            h = d / e;
        window.requestAnimationFrame(function l(x) {
          void 0 === p && (p = x);
          var f = x - p;
          i ? (t.style.height = g * f + "px", t.style.paddingTop = y * f + "px", t.style.paddingBottom = m * f + "px", t.style.marginTop = u * f + "px", t.style.marginBottom = h * f + "px") : (t.style.height = n - g * f + "px", t.style.paddingTop = a - y * f + "px", t.style.paddingBottom = s - m * f + "px", t.style.marginTop = r - u * f + "px", t.style.marginBottom = d - h * f + "px"), f >= e ? (t.style.height = "", t.style.paddingTop = "", t.style.paddingBottom = "", t.style.marginTop = "", t.style.marginBottom = "", t.style.overflow = "", i || (t.style.display = "none"), "function" == typeof o && o()) : window.requestAnimationFrame(l);
        });
      }

      var sidebarItems = document.querySelectorAll(".sidebar-item.has-sub");

      var _loop = function _loop() {
        var sidebarItem = sidebarItems[i];
        sidebarItems[i].querySelector(".sidebar-link").addEventListener("click", function (e) {
          e.preventDefault();
          var submenu = sidebarItem.querySelector(".submenu");
          if (submenu.classList.contains("active")) submenu.style.display = "block";
          if (submenu.style.display == "none") submenu.classList.add("active");else submenu.classList.remove("active");
          slideToggle(submenu, 300);
        });
      };

      for (var i = 0; i < sidebarItems.length; i++) {
        _loop();
      }

      window.addEventListener("DOMContentLoaded", function (event) {
        var w = window.innerWidth;

        if (w < 1200) {
          document.getElementById("sidebar").classList.remove("active");
        }
      });
      window.addEventListener("resize", function (event) {
        var w = window.innerWidth;

        if (w < 1200) {
          document.getElementById("sidebar").classList.remove("active");
        } else {
          document.getElementById("sidebar").classList.add("active");
        }
      });
      document.querySelector(".burger-btn").addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("active");
      });
      document.querySelector(".sidebar-hide").addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("active");
      }); // Perfect Scrollbar Init

      if (typeof PerfectScrollbar == "function") {
        var container = document.querySelector(".sidebar-wrapper");
        var ps = new PerfectScrollbar(container, {
          wheelPropagation: false
        });
      } // Scroll into active sidebar


      document.querySelector(".sidebar-item.active").scrollIntoView(false);
    });
    var __returned__ = {
      onMounted: onMounted,
      Sidebar: _Sidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      Footer: _Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Head,
      usePage: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.usePage
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {});

    var toggleMenu = function toggleMenu() {
      var tg = document.querySelector("html");
      tg.classList.toggle("layout-menu-expanded");
    };

    var toogleNavigation = function toogleNavigation(e) {
      e.target.parentElement.classList.toggle("open");
      e.target.parentElement.classList.toggle("active");
      e.target.classList.toggle("open");
      e.target.classList.toggle("active");
    };

    var __returned__ = {
      toggleMenu: toggleMenu,
      toogleNavigation: toogleNavigation,
      Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Head,
      usePage: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.usePage,
      onMounted: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.onMounted
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Footer.vue?vue&type=template&id=3cf90776":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Footer.vue?vue&type=template&id=3cf90776 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "footer clearfix mb-0 text-muted"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "float-start"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "2021 © Sydani")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "float-end"
})], -1
/* HOISTED */
);

var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", null, _hoisted_2);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=template&id=b6623cea":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=template&id=b6623cea ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  charset: "UTF-8"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Admin", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
  rel: "preconnect",
  href: "https://fonts.gstatic.com"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
  href: "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap",
  rel: "stylesheet"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = ["href"];
var _hoisted_7 = ["href"];
var _hoisted_8 = ["href"];
var _hoisted_9 = {
  id: "app"
};
var _hoisted_10 = {
  id: "sidebar",
  "class": "active"
};
var _hoisted_11 = {
  "class": "sidebar-wrapper active ps ps--active-y"
};
var _hoisted_12 = {
  "class": "sidebar-header"
};
var _hoisted_13 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_14 = {
  "class": "logo"
};
var _hoisted_15 = {
  href: "index.html"
};
var _hoisted_16 = ["src"];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toggler"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "sidebar-hide d-xl-none d-block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-x bi-middle"
})])], -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<button class=\"sidebar-toggler btn x\"><i data-feather=\"x\"></i></button><div class=\"ps__rail-x\" style=\"left:0px;bottom:0px;\"><div class=\"ps__thumb-x\" tabindex=\"0\" style=\"left:0px;width:0px;\"></div></div><div class=\"ps__rail-y\" style=\"top:0px;height:929px;right:0px;\"><div class=\"ps__thumb-y\" tabindex=\"0\" style=\"top:0px;height:522px;\"></div></div>", 3);

var _hoisted_21 = {
  id: "main"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", {
  "class": "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "burger-btn d-block d-xl-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-justify fs-3"
})])], -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "page-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Head"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <link\n      rel=\"stylesheet\"\n      :href=\"`${$page.props.dashAsset}/css/bootstrap.css`\"\n    /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
        rel: "stylesheet",
        href: "".concat(_ctx.$page.props.dashAsset, "/vendors/iconly/bold.css")
      }, null, 8
      /* PROPS */
      , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
        rel: "stylesheet",
        href: "".concat(_ctx.$page.props.dashAsset, "/css/app.css")
      }, null, 8
      /* PROPS */
      , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
        rel: "shortcut icon",
        href: "".concat(_ctx.$page.props.dashAsset, "/images/favicon.svg"),
        type: "image/x-icon"
      }, null, 8
      /* PROPS */
      , _hoisted_8)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "".concat(_ctx.$page.props.asset, "/images/logo/logo.png"),
    alt: "Logo",
    srcset: ""
  }, null, 8
  /* PROPS */
  , _hoisted_16)])]), _hoisted_17])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Sidebar"]), _hoisted_18])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"page-heading\">\n            <h3>Profile Statistics</h3>\n          </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Footer"])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=template&id=10d2eebc":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=template&id=10d2eebc ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "layout-menu",
  "class": "layout-menu menu-vertical menu bg-menu-theme"
};
var _hoisted_2 = {
  "class": "app-brand demo"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "index.html",
  "class": "app-brand-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "app-brand-logo demo"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "app-brand-text demo menu-text fw-bolder ms-2"
}, "Sneat")], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-chevron-left bx-sm align-middle"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "menu-inner-shadow"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "menu-inner py-1"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "menu-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "index.html",
  "class": "menu-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "menu-icon tf-icons bx bx-home-circle"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "data-i18n": "Analytics"
}, "Dashboard")])], -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"\" class=\"menu-link menu-toggle\"><i class=\"menu-icon tf-icons bx bx-layout\"></i> Layouts </a><ul class=\"menu-sub\"><li class=\"menu-item\"><a href=\"layouts-without-menu.html\" class=\"menu-link\"> Without menu </a></li><li class=\"menu-item\"><a href=\"layouts-without-navbar.html\" class=\"menu-link\"> Without navbar </a></li><li class=\"menu-item\"><a href=\"layouts-container.html\" class=\"menu-link\"> Container </a></li><li class=\"menu-item\"><a href=\"layouts-fluid.html\" class=\"menu-link\">Fluid</a></li><li class=\"menu-item\"><a href=\"layouts-blank.html\" class=\"menu-link\">Blank</a></li></ul>", 2);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "menu-header small text-uppercase"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "menu-header-text"
}, "Pages")], -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"\" class=\"menu-link menu-toggle\"><i class=\"menu-icon tf-icons bx bx-dock-top\"></i><div data-i18n=\"Account Settings\">Account Settings</div></a><ul class=\"menu-sub\"><li class=\"menu-item\"><a href=\"pages-account-settings-account.html\" class=\"menu-link\"><div data-i18n=\"Account\">Account</div></a></li><li class=\"menu-item\"><a href=\"pages-account-settings-notifications.html\" class=\"menu-link\"><div data-i18n=\"Notifications\">Notifications</div></a></li><li class=\"menu-item\"><a href=\"pages-account-settings-connections.html\" class=\"menu-link\"><div data-i18n=\"Connections\">Connections</div></a></li></ul>", 2);

var _hoisted_14 = [_hoisted_12];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#\" class=\"menu-link menu-toggle\"><i class=\"menu-icon tf-icons bx bx-lock-open-alt\"></i><div data-i18n=\"Authentications\">Authentications</div></a><ul class=\"menu-sub\"><li class=\"menu-item\"><a href=\"auth-login-basic.html\" class=\"menu-link\" target=\"_blank\"><div data-i18n=\"Basic\">Login</div></a></li><li class=\"menu-item\"><a href=\"auth-register-basic.html\" class=\"menu-link\" target=\"_blank\"><div data-i18n=\"Basic\">Register</div></a></li><li class=\"menu-item\"><a href=\"auth-forgot-password-basic.html\" class=\"menu-link\" target=\"_blank\"><div data-i18n=\"Basic\">Forgot Password</div></a></li></ul>", 2);

var _hoisted_17 = [_hoisted_15];

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#\" class=\"menu-link menu-toggle\"><i class=\"menu-icon tf-icons bx bx-cube-alt\"></i><div data-i18n=\"Misc\">Misc</div></a><ul class=\"menu-sub\"><li class=\"menu-item\"><a href=\"pages-misc-error.html\" class=\"menu-link\"><div data-i18n=\"Error\">Error</div></a></li><li class=\"menu-item\"><a href=\"pages-misc-under-maintenance.html\" class=\"menu-link\"><div data-i18n=\"Under Maintenance\">Under Maintenance</div></a></li></ul>", 2);

var _hoisted_20 = [_hoisted_18];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Menu "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "",
    "class": "layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.toggleMenu && $setup.toggleMenu.apply($setup, arguments);
    }, ["prevent"]))
  }, _hoisted_5)]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dashboard "), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "menu-item",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.toogleNavigation && $setup.toogleNavigation.apply($setup, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" menu-item-animating menu-item-closing "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :class=\"{ 'active': $page.url === '/users' }\" "), _hoisted_9]), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "menu-item",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.toogleNavigation && $setup.toogleNavigation.apply($setup, arguments);
    }, ["prevent"]))
  }, _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "menu-item",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.toogleNavigation && $setup.toogleNavigation.apply($setup, arguments);
    }, ["prevent"]))
  }, _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "menu-item",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.toogleNavigation && $setup.toogleNavigation.apply($setup, arguments);
    }, ["prevent"]))
  }, _hoisted_20)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / Menu ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/Pages/User/Layout/Footer.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Footer.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_3cf90776__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=3cf90776 */ "./resources/js/Pages/User/Layout/Footer.vue?vue&type=template&id=3cf90776");
/* harmony import */ var C_laragon_www_sydani_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_sydani_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Footer_vue_vue_type_template_id_3cf90776__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/User/Layout/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/User/Layout/Layout-bac.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Layout-bac.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_bac_vue_vue_type_template_id_b6623cea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout-bac.vue?vue&type=template&id=b6623cea */ "./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=template&id=b6623cea");
/* harmony import */ var _Layout_bac_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout-bac.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_sydani_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_sydani_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Layout_bac_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layout_bac_vue_vue_type_template_id_b6623cea__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/User/Layout/Layout-bac.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/User/Layout/Sidebar.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Sidebar.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_10d2eebc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=10d2eebc */ "./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=template&id=10d2eebc");
/* harmony import */ var _Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_sydani_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_sydani_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sidebar_vue_vue_type_template_id_10d2eebc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/User/Layout/Sidebar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_bac_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_bac_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout-bac.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/User/Layout/Footer.vue?vue&type=template&id=3cf90776":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Footer.vue?vue&type=template&id=3cf90776 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_3cf90776__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_3cf90776__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=3cf90776 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Footer.vue?vue&type=template&id=3cf90776");


/***/ }),

/***/ "./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=template&id=b6623cea":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=template&id=b6623cea ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_bac_vue_vue_type_template_id_b6623cea__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_bac_vue_vue_type_template_id_b6623cea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout-bac.vue?vue&type=template&id=b6623cea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-bac.vue?vue&type=template&id=b6623cea");


/***/ }),

/***/ "./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=template&id=10d2eebc":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=template&id=10d2eebc ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_10d2eebc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_10d2eebc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=template&id=10d2eebc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Sidebar.vue?vue&type=template&id=10d2eebc");


/***/ })

}]);