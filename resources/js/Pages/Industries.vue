<template>
  <Loader></Loader>
  <Head>
    <title>{{ $page.props.industry.name }}</title>
  </Head>
  <div id="main">
    <Header type="industries"></Header>
    <SubCarousel
      :title="$page.props.industry.name"
      :bgImage="
        $page.props.industry.image
          ? `${$page.props.asset}/assets/img/industries/${$page.props.industry.image}`
          : `${$page.props.asset}/assets/img/aboutus-1.jpg`
      "
    ></SubCarousel>
    <AboutIndustry></AboutIndustry>
    <SubPageServices></SubPageServices>
    <SubPageInsight></SubPageInsight>
    <div class="py-5">
      <ContactSection></ContactSection>
    </div>
    <Footer></Footer>
    <TopButton></TopButton>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { Head } from "@inertiajs/inertia-vue3";

import Header from "./../Layouts/Header.vue";
import Footer from "./../Layouts/Footer.vue";
import TopButton from "./../Layouts/TopButton.vue";
import SubCarousel from "./../Layouts/SubCarousel.vue";
import AboutIndustry from "./../Layouts/AboutIndustry.vue";
import SubPageServices from "./../Layouts/SubPageServices.vue";
import SubPageInsight from "./../Layouts/SubPageInsight.vue";
import ContactSection from "./../Layouts/ContactSection.vue";
import Loader from "./../Layouts/Loader.vue";
</script>
