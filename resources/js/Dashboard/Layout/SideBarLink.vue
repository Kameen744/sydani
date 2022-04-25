<template>
  <li
    class="menu-item"
    :class="active == data.activeKey ? 'open active' : ''"
    @click.prevent="toggleNavLink()"
  >
    <a href="" class="menu-link menu-toggle">
      <i class="menu-icon tf-icons bx bx-layout"></i>
      {{ data.title }}
    </a>

    <ul class="menu-sub">
      <li
        class="menu-item"
        v-for="(navLink, key) in data.links"
        :key="key"
        :class="$page.url == `${navLink.url}` ? 'active' : ''"
      >
        <Link :href="navLink.url" class="menu-link">{{ navLink.link }}</Link>
      </li>
    </ul>
  </li>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/inertia-vue3";
import { useStore } from "vuex";
import { useState, useActions } from "vuex-composition-helpers/dist";
const { onMounted, computed } = require("@vue/runtime-core");

const props = defineProps({
  data: { type: Object },
});

const store = useStore();

const active = computed(() => store.state.activeNavLink);
const toggleNavLink = () =>
  store.commit("setActiveNavLink", props.data.activeKey);

onMounted(() => {
  usePage().url.value == `/admin/dashboard`
    ? store.commit("setActiveNavLink", -1)
    : "";
});
</script>
<style scoped>
.menu-item:hover {
  transition: 2s;
}
</style>;
