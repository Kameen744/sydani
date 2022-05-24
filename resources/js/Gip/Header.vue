<template>
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <h1 class="">
          <a href="/sgip" class="brand-name text-black">SGIP</a>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <Link class="nav-link scrollto active" href="/sgip">Home</Link>
          </li>
          <li>
            <Link class="nav-link scrollto" href="/sgip/gallery">Gallery</Link>
          </li>
          <!-- <li>
            <Link class="nav-link scrollto" href="/sgip/forum">Forum</Link>
          </li>
          <li>
            <Link class="nav-link scrollto" href="/sgip/event">Events</Link>
          </li> -->
          <li>
            <a
              class="nav-link scrollto"
              href="https://office.sydani.org/job-application?new=1&job_title=graduate-internship-program"
              target="_blank"
              >Apply</a
            >
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->
</template>

<script setup>
const { Link } = require("@inertiajs/inertia-vue3");
const { onMounted } = require("@vue/runtime-core");
import { on, select } from "./lib";

onMounted(() => {
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );
});
</script>

<style>
</style>
