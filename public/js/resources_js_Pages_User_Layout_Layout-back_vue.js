"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_Layout_Layout-back_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      var menu, animate;

      (function () {
        // Initialize menu
        //-----------------
        var layoutMenuEl = document.querySelectorAll("#layout-menu");
        layoutMenuEl.forEach(function (element) {
          menu = new Menu(element, {
            orientation: "vertical",
            closeChildren: false
          }); // Change parameter to true if you want scroll animation

          window.Helpers.scrollToActive(animate = false);
          window.Helpers.mainMenu = menu;
        }); // Initialize menu togglers and bind click on each

        var menuToggler = document.querySelectorAll(".layout-menu-toggle");
        menuToggler.forEach(function (item) {
          item.addEventListener("click", function (event) {
            event.preventDefault();
            window.Helpers.toggleCollapsed();
          });
        }); // Display menu toggle (layout-menu-toggle) on hover with delay

        var delay = function delay(elem, callback) {
          var timeout = null;

          elem.onmouseenter = function () {
            // Set timeout to be a timer which will invoke callback after 300ms (not for small screen)
            if (!Helpers.isSmallScreen()) {
              timeout = setTimeout(callback, 300);
            } else {
              timeout = setTimeout(callback, 0);
            }
          };

          elem.onmouseleave = function () {
            // Clear any timers set to timeout
            document.querySelector(".layout-menu-toggle").classList.remove("d-block");
            clearTimeout(timeout);
          };
        };

        if (document.getElementById("layout-menu")) {
          delay(document.getElementById("layout-menu"), function () {
            // not for small screen
            if (!Helpers.isSmallScreen()) {
              document.querySelector(".layout-menu-toggle").classList.add("d-block");
            }
          });
        } // Display in main menu when menu scrolls
        // let menuInnerContainer = document.getElementsByClassName("menu-inner"),
        //   menuInnerShadow = document.getElementsByClassName("menu-inner-shadow")[0];
        // if (menuInnerContainer.length > 0 && menuInnerShadow) {
        //   menuInnerContainer[0].addEventListener("ps-scroll-y", function () {
        //     if (this.querySelector(".ps__thumb-y").offsetTop) {
        //       menuInnerShadow.style.display = "block";
        //     } else {
        //       menuInnerShadow.style.display = "none";
        //     }
        //   });
        // }
        // Init helpers & misc
        // --------------------
        // Init BS Tooltip
        // const tooltipTriggerList = [].slice.call(
        //   document.querySelectorAll('[data-bs-toggle="tooltip"]')
        // );
        // tooltipTriggerList.map(function (tooltipTriggerEl) {
        //   return new bootstrap.Tooltip(tooltipTriggerEl);
        // });
        // Accordion active class
        // const accordionActiveFunction = function (e) {
        //   if (e.type == "show.bs.collapse" || e.type == "show.bs.collapse") {
        //     e.target.closest(".accordion-item").classList.add("active");
        //   } else {
        //     e.target.closest(".accordion-item").classList.remove("active");
        //   }
        // };
        // const accordionTriggerList = [].slice.call(
        //   document.querySelectorAll(".accordion")
        // );
        // const accordionList = accordionTriggerList.map(function (
        //   accordionTriggerEl
        // ) {
        //   accordionTriggerEl.addEventListener(
        //     "show.bs.collapse",
        //     accordionActiveFunction
        //   );
        //   accordionTriggerEl.addEventListener(
        //     "hide.bs.collapse",
        //     accordionActiveFunction
        //   );
        // });
        // Auto update layout based on screen size
        //   window.Helpers.setAutoUpdate(true);
        // Toggle Password Visibility
        // window.Helpers.initPasswordToggle();
        // Speech To Text
        // window.Helpers.initSpeechToText();
        // Manage menu expanded/collapsed with templateCustomizer & local storage
        //------------------------------------------------------------------
        // If current layout is horizontal OR current window screen is small (overlay menu) than return from here
        // if (window.Helpers.isSmallScreen()) {
        //     return;
        // }
        // If current layout is vertical and current window screen is > small
        // Auto update menu collapsed/expanded based on the themeConfig
        // window.Helpers.setCollapsed(true, false);

      })();
    });
    var __returned__ = {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=template&id=0f6f9620":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=template&id=0f6f9620 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Admin-Dashboard", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  name: "description",
  content: ""
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossorigin: ""
}, null, -1
/* HOISTED */
);

var _hoisted_5 = ["href"];
var _hoisted_6 = ["href"];
var _hoisted_7 = ["href"];
var _hoisted_8 = ["href"];
var _hoisted_9 = ["href"];
var _hoisted_10 = {
  "class": "layout-wrapper layout-content-navbar"
};
var _hoisted_11 = {
  "class": "layout-container"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<aside id=\"layout-menu\" class=\"layout-menu menu-vertical menu bg-menu-theme\"><div class=\"app-brand demo\"><a href=\"index.html\" class=\"app-brand-link\"><span class=\"app-brand-text demo menu-text fw-bolder ms-2\">Sneat</span></a><a href=\"#\" class=\"layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none\"><i class=\"bx bx-chevron-left bx-sm align-middle\"></i></a></div><div class=\"menu-inner-shadow\"></div><ul class=\"menu-inner py-1\"><!-- Dashboard --><li class=\"menu-item\"><a href=\"index.html\" class=\"menu-link\"><i class=\"menu-icon tf-icons bx bx-home-circle\"></i><div data-i18n=\"Analytics\">Dashboard</div></a></li><!-- Layouts --><li class=\"menu-item active open\"><a href=\"#\" class=\"menu-link menu-toggle\"><i class=\"menu-icon tf-icons bx bx-layout\"></i><div data-i18n=\"Layouts\">Layouts</div></a><ul class=\"menu-sub\"><li class=\"menu-item\"><a href=\"layouts-without-menu.html\" class=\"menu-link\"><div data-i18n=\"Without menu\">Without menu</div></a></li><li class=\"menu-item\"><a href=\"layouts-without-navbar.html\" class=\"menu-link\"><div data-i18n=\"Without navbar\">Without navbar</div></a></li><li class=\"menu-item\"><a href=\"layouts-container.html\" class=\"menu-link\"><div data-i18n=\"Container\">Container</div></a></li><li class=\"menu-item active\"><a href=\"layouts-fluid.html\" class=\"menu-link\"><div data-i18n=\"Fluid\">Fluid</div></a></li><li class=\"menu-item\"><a href=\"layouts-blank.html\" class=\"menu-link\"><div data-i18n=\"Blank\">Blank</div></a></li></ul></li><!-- Components --><li class=\"menu-header small text-uppercase\"><span class=\"menu-header-text\">Components</span></li><!-- Cards --><li class=\"menu-item\"><a href=\"cards-basic.html\" class=\"menu-link\"><i class=\"menu-icon tf-icons bx bx-collection\"></i><div data-i18n=\"Basic\">Cards</div></a></li></ul></aside>", 1);

var _hoisted_13 = {
  "class": "layout-page"
};
var _hoisted_14 = {
  "class": "layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme",
  id: "layout-navbar"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-item nav-link px-0 me-xl-4",
  href: "javascript:void(0)"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-menu bx-sm"
})])], -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "navbar-nav-right d-flex align-items-center",
  id: "navbar-collapse"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "navbar-nav align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "nav-item d-flex align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-search fs-4 lh-0"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control border-0 shadow-none",
  placeholder: "Search...",
  "aria-label": "Search..."
})])], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "navbar-nav flex-row align-items-center ms-auto"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item lh-1 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "github-button",
  href: "https://github.com/themeselection/sneat-html-admin-template-free",
  "data-icon": "octicon-star",
  "data-size": "large",
  "data-show-count": "true",
  "aria-label": "Star themeselection/sneat-html-admin-template-free on GitHub"
}, "Star")], -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "nav-item navbar-dropdown dropdown-user dropdown"
};
var _hoisted_21 = {
  "class": "nav-link dropdown-toggle hide-arrow",
  href: "#",
  "data-bs-toggle": "dropdown"
};
var _hoisted_22 = {
  "class": "avatar avatar-online"
};
var _hoisted_23 = ["src"];
var _hoisted_24 = {
  "class": "dropdown-menu dropdown-menu-end"
};
var _hoisted_25 = {
  "class": "dropdown-item",
  href: "#"
};
var _hoisted_26 = {
  "class": "d-flex"
};
var _hoisted_27 = {
  "class": "flex-shrink-0 me-3"
};
var _hoisted_28 = {
  "class": "avatar avatar-online"
};
var _hoisted_29 = ["src"];

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-semibold d-block"
}, "John Doe"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-muted"
}, "Admin")], -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<li><div class=\"dropdown-divider\"></div></li><li><a class=\"dropdown-item\" href=\"#\"><i class=\"bx bx-user me-2\"></i><span class=\"align-middle\">My Profile</span></a></li><li><a class=\"dropdown-item\" href=\"#\"><i class=\"bx bx-cog me-2\"></i><span class=\"align-middle\">Settings</span></a></li><li><a class=\"dropdown-item\" href=\"#\"><span class=\"d-flex align-items-center align-middle\"><i class=\"flex-shrink-0 bx bx-credit-card me-2\"></i><span class=\"flex-grow-1 align-middle\">Billing</span><span class=\"flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20\">4</span></span></a></li><li><div class=\"dropdown-divider\"></div></li><li><a class=\"dropdown-item\" href=\"auth-login-basic.html\"><i class=\"bx bx-power-off me-2\"></i><span class=\"align-middle\">Log Out</span></a></li>", 6);

var _hoisted_37 = {
  "class": "content-wrapper"
};
var _hoisted_38 = {
  "class": "container-fluid flex-grow-1 container-p-y"
};
var _hoisted_39 = {
  "class": "layout-demo-wrapper"
};
var _hoisted_40 = {
  "class": "layout-demo-placeholder"
};
var _hoisted_41 = ["src"];

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layout-demo-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Layout fluid"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Fluid layout sets a "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "100% width"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" at each responsive breakpoint. ")])], -1
/* HOISTED */
);

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<footer class=\"content-footer footer bg-footer-theme\"><div class=\"container-fluid d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column\"><div class=\"mb-2 mb-md-0\"> © <!-- &lt;script&gt;\n                      document.write(new Date().getFullYear());\n                    &lt;/script&gt; --> , made with ❤️ by <a href=\"https://themeselection.com\" target=\"_blank\" class=\"footer-link fw-bolder\">ThemeSelection</a></div><div><a href=\"https://themeselection.com/license/\" class=\"footer-link me-4\" target=\"_blank\">License</a><a href=\"https://themeselection.com/\" target=\"_blank\" class=\"footer-link me-4\">More Themes</a><a href=\"https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/\" target=\"_blank\" class=\"footer-link me-4\">Documentation</a><a href=\"https://github.com/themeselection/sneat-html-admin-template-free/issues\" target=\"_blank\" class=\"footer-link me-4\">Support</a></div></div></footer>", 1);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "content-backdrop fade"
}, null, -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layout-overlay layout-menu-toggle"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Head"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Fonts "), _hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Icons. Uncomment required icon fonts "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
        rel: "stylesheet",
        href: "".concat(_ctx.$page.props.dashAsset, "/vendor/fonts/boxicons.css")
      }, null, 8
      /* PROPS */
      , _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Core CSS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
        rel: "stylesheet",
        href: "".concat(_ctx.$page.props.dashAsset, "/vendor/css/core.css"),
        "class": "template-customizer-core-css"
      }, null, 8
      /* PROPS */
      , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
        rel: "stylesheet",
        href: "".concat(_ctx.$page.props.dashAsset, "/vendor/css/theme-default.css"),
        "class": "template-customizer-theme-css"
      }, null, 8
      /* PROPS */
      , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
        rel: "stylesheet",
        href: "".concat(_ctx.$page.props.dashAsset, "/css/demo.css")
      }, null, 8
      /* PROPS */
      , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Vendors CSS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
        rel: "stylesheet",
        href: "".concat(_ctx.$page.props.dashAsset, "/vendor/libs/perfect-scrollbar/perfect-scrollbar.css")
      }, null, 8
      /* PROPS */
      , _hoisted_9)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Menu "), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / Menu "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Layout container "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Navbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Search "), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /Search "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Place this tag where you want the button to render. "), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" User "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "".concat(_ctx.$page.props.dashAsset, "/img/avatars/1.png"),
    alt: "",
    "class": "w-px-40 h-auto rounded-circle"
  }, null, 8
  /* PROPS */
  , _hoisted_23)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "".concat(_ctx.$page.props.dashAsset, "/img/avatars/1.png"),
    alt: "",
    "class": "w-px-40 h-auto rounded-circle"
  }, null, 8
  /* PROPS */
  , _hoisted_29)])]), _hoisted_30])])]), _hoisted_31])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("/ User ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / Navbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Content wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Layout Demo "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "".concat(_ctx.$page.props.dashAsset, "/img/layouts/layout-fluid-light.png"),
    "class": "img-fluid",
    alt: "Layout fluid",
    "data-app-light-img": "layouts/layout-fluid-light.png",
    "data-app-dark-img": "layouts/layout-fluid-dark.png"
  }, null, 8
  /* PROPS */
  , _hoisted_41)]), _hoisted_42]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("/ Layout Demo ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / Content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Footer "), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / Footer "), _hoisted_44]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Content wrapper ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" / Layout page ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Overlay "), _hoisted_45])], 64
  /* STABLE_FRAGMENT */
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

/***/ "./resources/js/Pages/User/Layout/Layout-back.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Layout-back.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_back_vue_vue_type_template_id_0f6f9620__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout-back.vue?vue&type=template&id=0f6f9620 */ "./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=template&id=0f6f9620");
/* harmony import */ var _Layout_back_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout-back.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_sydani_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_sydani_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Layout_back_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layout_back_vue_vue_type_template_id_0f6f9620__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/User/Layout/Layout-back.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_back_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_back_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout-back.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=template&id=0f6f9620":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=template&id=0f6f9620 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_back_vue_vue_type_template_id_0f6f9620__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_back_vue_vue_type_template_id_0f6f9620__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout-back.vue?vue&type=template&id=0f6f9620 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Layout/Layout-back.vue?vue&type=template&id=0f6f9620");


/***/ })

}]);