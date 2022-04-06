<template>
  <Head>
    <title>Our Works</title>
  </Head>
  <Layout>
    <SubCarousel
      title="Our Work"
      :bg-Image="`${$page.props.asset}/assets/img/aboutus-1.jpg`"
    ></SubCarousel>
    <FinancingSection></FinancingSection>
    <SystemStrenghtening></SystemStrenghtening>
    <DemandGeneration></DemandGeneration>
    <DataAnalyticsSection></DataAnalyticsSection>
  </Layout>
</template>

<script setup>
import Layout from "./../Layouts/Layout.vue";
import SubCarousel from "./../Layouts/SubCarousel.vue";
import FinancingSection from "./../Layouts/FinancingSection.vue";
import SystemStrenghtening from "./../Layouts/SystemStrenghtening.vue";
import DemandGeneration from "./../Layouts/DemandGeneration.vue";
import DataAnalyticsSection from "./../Layouts/DataAnalyticsSection.vue";
import { Head } from "@inertiajs/inertia-vue3";
</script>

<style>
</style>
