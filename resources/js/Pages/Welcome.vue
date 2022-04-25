<template>
  <Head>
    <title>Sydani Group - Abuja Nigeria</title>
    <meta
      name="description"
      content="Sydani Initiative For International Development Abuja Nigeria is a not-for-profit organization founded by international development &amp; project management professionals"
    />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Sydani Group - Abuja Nigeria" />
    <meta
      property="og:description"
      content="Sydani Initiative For International Development Abuja Nigeria is a not-for-profit organization founded by international development &amp; project management professionals"
    />
    <meta property="og:url" content="https://sydani.org/" />
    <meta property="og:site_name" content="Sydani Group" />
    <meta
      property="article:modified_time"
      content="2022-03-19T09:39:40+00:00"
    />
    <!-- <meta
      property="og:image"
      content="https://i.postimg.cc/8cXxvqGK/our-partners.png"
    /> -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:label1" content="Est. reading time" />
    <meta name="twitter:data1" content="7 minutes" />
  </Head>
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
import { Head, usePage } from "@inertiajs/inertia-vue3";
import Layout from "./../Layouts/Layout.vue";
import Carousel from "./../Layouts/Carousel";
import Partners from "./../Layouts/Partners";
import FeaturedProject from "./../Layouts/FeaturedProject.vue";
import CountSection from "./../Layouts/CountSection.vue";
import FeaturedInsight from "./../Layouts/FeaturedInsight.vue";
const asset = computed(() => usePage().props.value.asset);
</script>
