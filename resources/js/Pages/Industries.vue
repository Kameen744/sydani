<template>
  <Loader></Loader>
  <Head>
    <title>{{ $page.props.page }}</title>
  </Head>
  <div id="main">
    <Header type="industries"></Header>
    <SubCarousel
      :title="$page.props.page"
      :bgImage="`${$page.props.asset}/assets/img/aboutus-1.jpg`"
    ></SubCarousel>
    <AboutIndustry></AboutIndustry>
    <SubPageServices></SubPageServices>
    <SubPageInsight></SubPageInsight>
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
import Loader from "./../Layouts/Loader.vue";
</script>
