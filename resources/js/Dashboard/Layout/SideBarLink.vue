<template>
  <li
    class="menu-item"
    :class="
      active ? 'open active' : $page.url == data.path ? 'open active' : ''
    "
    @click.prevent="active = !active"
  >
    <!-- menu-item-animating menu-item-closing -->
    <a href="" class="menu-link menu-toggle">
      <i class="menu-icon tf-icons bx bx-layout"></i>
      {{ data.title }}
    </a>

    <ul class="menu-sub">
      <li
        class="menu-item"
        v-for="(navLink, key) in data.links"
        :key="key"
        :class="$page.url == `/admin/${navLink.url}` ? 'active' : ''"
      >
        <Link :href="navLink.url" class="menu-link">{{ navLink.link }}</Link>
      </li>
    </ul>
  </li>
</template>

<script setup>
import { Link, usePage, useRemember } from "@inertiajs/inertia-vue3";
import { useState, useActions } from "vuex-composition-helpers/dist";
const { ref } = require("@vue/reactivity");
const { onMounted } = require("@vue/runtime-core");

defineProps({
  data: { type: Object },
});
// const toggleNavbar = (e) => {
//   e.target.parentElement.classList.toggle("open");
//   e.target.parentElement.classList.toggle("active");
//   //   //   e.target.classList.toggle("open");
//   //   //   e.target.classList.toggle("active");
// };
const active = ref(false);
// const rmData = useRemember({ currentUrl: "" }, `${Math.random(1, 999)}`);

// const { currentUrl } = useState(["currentUrl"]);
// const { setCurrentUrl } = useActions(["setCurrentUrl"]);

onMounted(() => {
  //   let url = window.location.href.split("/").reverse().slice(0, 2).reverse();
  //   currUrl.value = `/${url[0]}/${url[1]}`;
  //   console.log(currUrl.value);
});
</script>
<style scoped>
.menu-item:hover {
  transition: 2s;
}
</style>;
