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
        <span class="menu-header-text">Website</span>
      </li>
      <SideBarLink
        :data="link"
        v-for="(link, key) in websiteNavLinks"
        :key="key"
      ></SideBarLink>

      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Posts</span>
      </li>
      <SideBarLink
        :data="link"
        v-for="(link, key) in postNavLink"
        :key="key"
      ></SideBarLink>

      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Admin</span>
      </li>
      <SideBarLink
        :data="link"
        v-for="(link, key) in usersNavLink"
        :key="key"
      ></SideBarLink>
    </ul>
  </aside>
</template>

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

const toggleNavbar = (e) => {
  e.target.parentElement.classList.toggle("open");
  e.target.parentElement.classList.toggle("active");
};

const websiteNavLinks = [
  {
    title: "Carousel",
    activeKey: 1,
    links: [{ link: "Add/Edit Carousel", url: "/admin/carousel" }],
  },
  {
    title: "Partners",
    activeKey: 1.1,
    links: [{ link: "Add/Edit Partner", url: "/admin/partner" }],
  },
  {
    title: "Who We Are",
    activeKey: 1.2,
    links: [{ link: "Add/Edit Who we are", url: "/admin/whoweare" }],
  },
  {
    title: "Core Values",
    activeKey: 1.7,
    links: [{ link: "Add/Edit Core Values", url: "/admin/values" }],
  },
  {
    title: "Vision/Mission",
    activeKey: 1.3,
    links: [{ link: "Add/Edit Vision & Mission", url: "/admin/visionmission" }],
  },
  {
    title: "Our Team",
    activeKey: 1.4,
    links: [{ link: "Add/Edit Team", url: "/admin/team" }],
  },
  {
    title: "Idustries",
    activeKey: 1.6,
    links: [
      { link: "Add/Edit Industries", url: "/admin/industry" },
      { link: "Services", url: "/admin/industry/services" },
    ],
  },
  {
    title: "Our Work",
    activeKey: 1.8,
    links: [
      { link: "Financing", url: "/admin/financing" },
      {
        link: "System Strengthening",
        url: "/admin/system",
      },
      { link: "Demand Generation", url: "/admin/demand" },
      { link: "Data Analytics", url: "/admin/data-analytics" },
    ],
  },
  {
    title: "Contact Us",
    activeKey: 1.5,
    links: [{ link: "Add/Edit Contact Info", url: "/admin/contact" }],
  },
];

const postNavLink = [
  {
    title: "Projects/Insights",
    activeKey: 2,
    links: [
      { link: "Create Project", url: "/admin/project" },
      { link: "Project List", url: "/admin/project/list" },
      { link: "Project Page Intro", url: "/admin/project/intro" },
      { link: "--INSIGHT--", url: "#" },
      { link: "Add/Edit Insight", url: "/admin/insight" },
    ],
  },
  {
    title: "Blog",
    activeKey: 3,
    links: [
      { link: "Create Project", url: "/admin/project" },
      { link: "Project List", url: "/admin/project/list" },
      { link: "Add/Edit Insight", url: "/admin/insight" },
    ],
  },
];

const usersNavLink = [
  {
    title: "Manage Users",
    activeKey: 4,
    links: [{ link: "Users List", url: "/admin/users" }],
  },
];
</script>
<style scoped>
#layout-menu {
  overflow-x: hidden;
  overflow-y: auto;
}
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: orange midnightblue;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 6px;
}

*::-webkit-scrollbar-track {
  background: midnightblue;
}

*::-webkit-scrollbar-thumb {
  background-color: orange;
  border-radius: 10px;
  border: 1px solid midnightblue;
}
</style>
