<template>
  <Head>
    <title>About</title>
  </Head>
  <Layout>
    <SubCarousel
      title="About Sydani Group"
      :bg-Image="`${$page.props.asset}/assets/img/aboutus-1.jpg`"
    ></SubCarousel>
    <WhoSection></WhoSection>
    <Partners></Partners>
    <MissionSection></MissionSection>
    <TeamSection></TeamSection>
    <ContactSection></ContactSection>
  </Layout>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { Head, usePage } from "@inertiajs/inertia-vue3";

import Layout from "./../Layouts/Layout.vue";
import SubCarousel from "../Layouts/SubCarousel.vue";
import TeamSection from "./../Layouts/TeamSection.vue";
import ContactSection from "./../Layouts/ContactSection.vue";
import Partners from "./../Layouts/Partners.vue";
import WhoSection from "../Layouts/WhoSection.vue";
import MissionSection from "./../Layouts/MissionSection.vue";

const asset = computed(() => usePage().props.value.asset);
</script>
