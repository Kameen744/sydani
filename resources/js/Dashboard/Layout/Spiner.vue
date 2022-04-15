<template>
  <div class="spinner-border" :class="classes" role="status" v-show="show">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script setup>
defineProps({
  classes: { type: String, default: "spinner-border-sm text-white" },
  show: { type: Boolean, default: false },
});
</script>

<style>
</style>
