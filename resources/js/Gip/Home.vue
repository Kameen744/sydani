<template>
  <Head>
    <title>GIP</title>
  </Head>
  <GipLayout>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <BenefitSection></BenefitSection>
    <GallerySection></GallerySection>
  </GipLayout>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import Header from "./Header.vue";
import GipLayout from "./GipLayout.vue";
import HeroSection from "./HeroSection.vue";
import AboutSection from "./AboutSection.vue";
import BenefitSection from "./BenefitSection.vue";
import GallerySection from "./GallerySection.vue";
</script>
