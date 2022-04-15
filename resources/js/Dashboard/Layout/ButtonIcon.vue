<template>
  <button type="button" class="btn btn-icon m-1" :class="`btn-${btn}`">
    <span class="bi" :class="`bi-${icon}`"></span>
  </button>
</template>

<script setup>
defineProps({
  btn: { type: String },
  icon: { type: String },
});
</script>

<style>
</style>
