<template>
  <div id="main">
    <Header></Header>
    <slot />
    <Footer></Footer>
    <TopButton></TopButton>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";
import Header from "./Header";
import TopButton from "./TopButton";
import Footer from "./Footer";

const asset = computed(() => usePage().props.value.asset);
</script>

<style>
</style>
