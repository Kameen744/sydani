<template>
  <div
    class="bs-toast toast toast-placement-ex m-2 top-0 end-0"
    :class="show ? `show ${type}` : 'hide'"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-delay="2000"
  >
    <div class="toast-header">
      <i class="bx bx-bell me-2"></i>
      <div class="me-auto fw-semibold">{{ title }}</div>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body">
      {{ subTitle }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: { type: String },
  title: { type: String },
  subTitle: { type: String },
  show: { type: Boolean, default: false },
});
</script>

<style>
</style>
