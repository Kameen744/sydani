<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
});
</script>

<style scoped>
.section-title h2 {
  font-size: 30px;
}
</style>
