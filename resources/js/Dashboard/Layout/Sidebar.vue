<script setup>
import { Head, usePage, Link } from "@inertiajs/inertia-vue3";
import { onMounted } from "@vue/runtime-core";
import SideBarLink from "./SideBarLink.vue";
onMounted(() => {});

let toggleMenu = () => {
  const tg = document.querySelector("html");
  tg.classList.toggle("layout-menu-expanded");
  console.log("clicked exapnd");
};

const carousel = {
  title: "Carousel",
  path: "/admin/carousel",
  links: [{ link: "Add/Edit Carousel", url: "carousel" }],
};

const project = {
  title: "Projects",
  path: "/admin/project",
  links: [
    { link: "Add New Project", url: "project" },
    { link: "Project List", url: "project/list" },
  ],
};

const aboutUs = {
  title: "About Page",
  path: "/admin/aboutus",
  links: [
    { link: "Who We Are", url: "whoweare" },
    { link: "Our Partners", url: "partners" },
    { link: "Our Vision/Mission", url: "mission" },
    { link: "Our Team", url: "team" },
    { link: "Contact Us", url: "contact" },
  ],
};
</script>
<template>
  <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
      <Link href="/admin/dashboard" class="app-brand-link">
        <span class="app-brand-logo demo">
          <img
            :src="`${$page.props.asset}/assets/img/logo.svg`"
            class="img-fluid"
            alt="Sydani Group"
            style="max-height: 45px"
          />
        </span>
        <!-- <span class="app-brand-text demo menu-text fw-bolder ms-2">Sydani</span> -->
      </Link>
      <a
        href=""
        class="
          layout-menu-toggle
          menu-link
          text-large
          ms-auto
          d-block d-xl-none
        "
        @click.prevent="toggleMenu"
      >
        <i class="bx bx-chevron-left bx-sm align-middle"></i>
      </a>
    </div>

    <!-- <div class="menu-inner-shadow"></div> -->

    <ul class="menu-inner py-1">
      <!-- Dashboard -->
      <li
        class="menu-item"
        :class="$page.url == `/admin/dashboard` ? 'active' : ''"
      >
        <Link href="/admin/dashboard" class="menu-link">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </Link>
      </li>

      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Page Sections</span>
      </li>

      <SideBarLink :data="carousel"></SideBarLink>

      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Projects/Blog Post</span>
      </li>

      <SideBarLink :data="project"></SideBarLink>

      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Pages</span>
      </li>
      <SideBarLink :data="aboutUs"></SideBarLink>
      <!-- <li class="menu-item">
        <a href="" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-dock-top"></i>
          <div data-i18n="Account Settings">Account Settings</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item">
            <a href="pages-account-settings-account.html" class="menu-link">
              <div data-i18n="Account">Account</div>
            </a>
          </li>
          <li class="menu-item">
            <a
              href="pages-account-settings-notifications.html"
              class="menu-link"
            >
              <div data-i18n="Notifications">Notifications</div>
            </a>
          </li>
          <li class="menu-item">
            <a href="pages-account-settings-connections.html" class="menu-link">
              <div data-i18n="Connections">Connections</div>
            </a>
          </li>
        </ul>
      </li>
      <li class="menu-item" @click.prevent="toogleNavigation">
        <a href="#" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
          <div data-i18n="Authentications">Authentications</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item">
            <a href="auth-login-basic.html" class="menu-link" target="_blank">
              <div data-i18n="Basic">Login</div>
            </a>
          </li>
          <li class="menu-item">
            <a
              href="auth-register-basic.html"
              class="menu-link"
              target="_blank"
            >
              <div data-i18n="Basic">Register</div>
            </a>
          </li>
          <li class="menu-item">
            <a
              href="auth-forgot-password-basic.html"
              class="menu-link"
              target="_blank"
            >
              <div data-i18n="Basic">Forgot Password</div>
            </a>
          </li>
        </ul>
      </li>
      <li class="menu-item" @click.prevent="toogleNavigation">
        <a href="#" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-cube-alt"></i>
          <div data-i18n="Misc">Misc</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item">
            <a href="pages-misc-error.html" class="menu-link">
              <div data-i18n="Error">Error</div>
            </a>
          </li>
          <li class="menu-item">
            <a href="pages-misc-under-maintenance.html" class="menu-link">
              <div data-i18n="Under Maintenance">Under Maintenance</div>
            </a>
          </li>
        </ul>
      </li> -->
    </ul>
  </aside>
</template>

<style scoped>
</style>
