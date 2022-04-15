<template>
  <div class="main-title">
    <h2 class="py-1 px-3 mb-3 text-shadow">{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String },
});
</script>

<style scoped>
.main-title {
  border-left: 4px solid #ff9005;
}
.main-title h3 {
  font-size: 30px;
  font-weight: 700;
  font-family: "Heebo", sans-serif;
}
.text-shadow {
  text-shadow: 0.8px 0.8px 0.8px rgb(0 0 0 / 50%);
  color: #ff9005;
}
</style>
