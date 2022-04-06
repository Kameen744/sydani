<template>
  <!-- Layout wrapper -->
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <Sidebar></Sidebar>
      <!-- Layout container -->
      <div class="layout-page">
        <!-- Navbar -->

        <nav
          class="
            layout-navbar
            container-xxl
            navbar navbar-expand-xl navbar-detached
            align-items-center
            bg-navbar-theme
          "
          id="layout-navbar"
        >
          <div
            class="
              layout-menu-toggle
              navbar-nav
              align-items-xl-center
              me-3 me-xl-0
              d-xl-none
            "
          >
            <a
              class="nav-item nav-link px-0 me-xl-4"
              href=""
              @click.prevent="toggleMenu"
            >
              <i class="bx bx-menu bx-sm"></i>
            </a>
          </div>

          <div
            class="navbar-nav-right d-flex align-items-center"
            id="navbar-collapse"
          >
            <!-- Search -->
            <div class="navbar-nav align-items-center">
              <div class="nav-item d-flex align-items-center">
                <i class="bx bx-search fs-4 lh-0"></i>
                <input
                  type="text"
                  class="form-control border-0 shadow-none"
                  placeholder="Search..."
                  aria-label="Search..."
                />
              </div>
            </div>
            <!-- /Search -->

            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <li class="nav-item lh-1 me-3"></li>
            </ul>
          </div>
        </nav>

        <!-- / Navbar -->

        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- Content -->

          <div class="container-xxl flex-grow-1 container-p-y">
            <div class="row">
              <div class="col-lg-12 mb-4 order-0">
                <div class="card">
                  <div class="d-flex align-items-end row">
                    <div class="col-sm-7">
                      <div class="card-body">
                        <h5 class="card-title text-primary">
                          Congratulations John! 🎉
                        </h5>
                        <p class="mb-4">
                          You have done <span class="fw-bold">72%</span> more
                          sales today. Check your new badge in your profile.
                        </p>

                        <a
                          href="javascript:;"
                          class="btn btn-sm btn-outline-primary"
                          >View Badges</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- / Content -->

          <!-- Footer -->
          <footer class="content-footer footer bg-footer-theme">
            <div
              class="
                container-xxl
                d-flex
                flex-wrap
                justify-content-between
                py-2
                flex-md-row flex-column
              "
            >
              <div class="mb-2 mb-md-0">© 2022</div>
            </div>
          </footer>
          <!-- / Footer -->
          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
  </div>
  <!-- / Layout wrapper -->
</template>

<script setup>
import { Head, usePage } from "@inertiajs/inertia-vue3";
import { onMounted } from "@vue/runtime-core";
import Sidebar from "./Sidebar.vue";
// onMounted(() => {});

// let toggleMenu = () => {
//   const tg = document.querySelector("html");
//   tg.classList.toggle("layout-menu-expanded");
// };

// let toogleNavigation = (e) => {
//   e.target.parentElement.classList.toggle("open");
//   e.target.parentElement.classList.toggle("active");
//   e.target.classList.toggle("open");
//   e.target.classList.toggle("active");
// };
</script>

<style>
</style>
