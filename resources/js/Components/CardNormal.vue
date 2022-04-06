<template>
  <Link :href="cardUrl">
    <div class="card" style="width: 18rem">
      <img :src="image" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title text-black text-center">{{ cardTitle }}</h5>
        <p class="card-text text-black">
          {{ cardSubTitle }}
        </p>
      </div>
    </div>
  </Link>
</template>

<script setup>
const { usePage, Link } = require("@inertiajs/inertia-vue3");
defineProps({
  image: { type: String, default: "" },
  cardTitle: { type: String, default: "" },
  cardSubTitle: { type: String, default: "" },
  cardUrl: { type: String, default: "" },
});
</script>

<style>
</style>
