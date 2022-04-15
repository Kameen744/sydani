<template>
  <div
    class="alert alert-success mt-2 alert-dismissible fade show"
    v-if="show"
    role="alert"
  >
    <strong>{{ text }}</strong>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script setup>
defineProps({
  show: { type: Boolean, default: false },
  text: { type: String },
});
</script>

<style>
</style>
