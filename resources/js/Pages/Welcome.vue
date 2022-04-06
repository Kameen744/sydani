<template>
  <Layout>
    <Carousel></Carousel>
    <Partners></Partners>
    <FeaturedProject></FeaturedProject>
    <!-- <CountSection></CountSection> -->
    <FeaturedInsight></FeaturedInsight>
  </Layout>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";
import Layout from "./../Layouts/Layout.vue";
import Carousel from "./../Layouts/Carousel";
import Partners from "./../Layouts/Partners";
import FeaturedProject from "./../Layouts/FeaturedProject.vue";
import CountSection from "./../Layouts/CountSection.vue";
import FeaturedInsight from "./../Layouts/FeaturedInsight.vue";
const asset = computed(() => usePage().props.value.asset);
</script>
