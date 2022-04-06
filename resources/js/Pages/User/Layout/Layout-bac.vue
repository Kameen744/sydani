<template>
  <Head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin</title>

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&amp;display=swap"
      rel="stylesheet"
    />
    <!-- <link
      rel="stylesheet"
      :href="`${$page.props.dashAsset}/css/bootstrap.css`"
    /> -->

    <link
      rel="stylesheet"
      :href="`${$page.props.dashAsset}/vendors/iconly/bold.css`"
    />

    <link rel="stylesheet" :href="`${$page.props.dashAsset}/css/app.css`" />
    <link
      rel="shortcut icon"
      :href="`${$page.props.dashAsset}/images/favicon.svg`"
      type="image/x-icon"
    />
  </Head>

  <div id="app">
    <div id="sidebar" class="active">
      <div class="sidebar-wrapper active ps ps--active-y">
        <div class="sidebar-header">
          <div class="d-flex justify-content-between">
            <div class="logo">
              <a href="index.html"
                ><img
                  :src="`${$page.props.asset}/images/logo/logo.png`"
                  alt="Logo"
                  srcset=""
              /></a>
            </div>
            <div class="toggler">
              <a href="#" class="sidebar-hide d-xl-none d-block"
                ><i class="bi bi-x bi-middle"></i
              ></a>
            </div>
          </div>
        </div>
        <Sidebar></Sidebar>
        <button class="sidebar-toggler btn x">
          <i data-feather="x"></i>
        </button>
        <div class="ps__rail-x" style="left: 0px; bottom: 0px">
          <div
            class="ps__thumb-x"
            tabindex="0"
            style="left: 0px; width: 0px"
          ></div>
        </div>
        <div class="ps__rail-y" style="top: 0px; height: 929px; right: 0px">
          <div
            class="ps__thumb-y"
            tabindex="0"
            style="top: 0px; height: 522px"
          ></div>
        </div>
      </div>
    </div>
    <div id="main">
      <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
          <i class="bi bi-justify fs-3"></i>
        </a>
      </header>

      <!-- <div class="page-heading">
            <h3>Profile Statistics</h3>
          </div> -->
      <div class="page-content">
        <slot />
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";
import { Head, usePage } from "@inertiajs/inertia-vue3";

const { onMounted } = require("@vue/runtime-core");

onMounted(() => {
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
    void 0 === e && (e = 400),
      void 0 === i && (i = !1),
      (t.style.overflow = "hidden"),
      i && (t.style.display = "block");
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
      i
        ? ((t.style.height = g * f + "px"),
          (t.style.paddingTop = y * f + "px"),
          (t.style.paddingBottom = m * f + "px"),
          (t.style.marginTop = u * f + "px"),
          (t.style.marginBottom = h * f + "px"))
        : ((t.style.height = n - g * f + "px"),
          (t.style.paddingTop = a - y * f + "px"),
          (t.style.paddingBottom = s - m * f + "px"),
          (t.style.marginTop = r - u * f + "px"),
          (t.style.marginBottom = d - h * f + "px")),
        f >= e
          ? ((t.style.height = ""),
            (t.style.paddingTop = ""),
            (t.style.paddingBottom = ""),
            (t.style.marginTop = ""),
            (t.style.marginBottom = ""),
            (t.style.overflow = ""),
            i || (t.style.display = "none"),
            "function" == typeof o && o())
          : window.requestAnimationFrame(l);
    });
  }

  let sidebarItems = document.querySelectorAll(".sidebar-item.has-sub");
  for (var i = 0; i < sidebarItems.length; i++) {
    let sidebarItem = sidebarItems[i];
    sidebarItems[i]
      .querySelector(".sidebar-link")
      .addEventListener("click", function (e) {
        e.preventDefault();

        let submenu = sidebarItem.querySelector(".submenu");
        if (submenu.classList.contains("active"))
          submenu.style.display = "block";

        if (submenu.style.display == "none") submenu.classList.add("active");
        else submenu.classList.remove("active");
        slideToggle(submenu, 300);
      });
  }

  window.addEventListener("DOMContentLoaded", (event) => {
    var w = window.innerWidth;
    if (w < 1200) {
      document.getElementById("sidebar").classList.remove("active");
    }
  });
  window.addEventListener("resize", (event) => {
    var w = window.innerWidth;
    if (w < 1200) {
      document.getElementById("sidebar").classList.remove("active");
    } else {
      document.getElementById("sidebar").classList.add("active");
    }
  });

  document.querySelector(".burger-btn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("active");
  });
  document.querySelector(".sidebar-hide").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("active");
  });

  // Perfect Scrollbar Init
  if (typeof PerfectScrollbar == "function") {
    const container = document.querySelector(".sidebar-wrapper");
    const ps = new PerfectScrollbar(container, {
      wheelPropagation: false,
    });
  }

  // Scroll into active sidebar
  document.querySelector(".sidebar-item.active").scrollIntoView(false);
});
</script>

<style scoped>
</style>
