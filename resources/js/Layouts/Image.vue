<template>
  <img :src="`${imgAsset}/${folder}/${file}`" :class="classes" :alt="file" />
</template>

<script setup>
const { usePage } = require("@inertiajs/inertia-vue3");
defineProps({
  file: { type: String },
  folder: { type: String },
  classes: { type: String, default: "" },
});
const imgAsset = usePage().props.value.asset + "/assets/img/";
</script>

<style>
</style>
