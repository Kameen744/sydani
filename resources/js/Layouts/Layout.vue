<template>
  <Head>
    <link
      rel="stylesheet"
      :href="`${$page.props.asset}/assets/vendor/aos/aos.css`"
    />
    <link
      rel="stylesheet"
      :href="`${$page.props.asset}/assets/vendor/glightbox/css/glightbox.min.css`"
    />
    <link
      rel="stylesheet"
      :href="`${$page.props.asset}/assets/vendor/swiper/swiper-bundle.min.css`"
    />
    <link
      v-if="pageLoaded"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
    <link
      v-if="pageLoaded"
      rel="stylesheet"
      href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
    />

    <link
      v-if="pageLoaded"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    />
  </Head>
  <Loader></Loader>
  <div id="main">
    <Header></Header>
    <slot />
    <Footer></Footer>
    <TopButton></TopButton>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Header from "./Header";
import TopButton from "./TopButton";
import Footer from "./Footer";
import Loader from "./Loader.vue";
import { onMounted, ref } from "@vue/runtime-core";
const pageLoaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    pageLoaded.value = true;
  }, 300);
});
</script>

<style>
</style>
