<template>
  <Layout>
    <Head>
      <title>{{ $page.props.member.name }}</title>
    </Head>

    <Header></Header>
    <SubCarousel
      :title="$page.props.member.name"
      :bgImage="`${$page.props.asset}/assets/img/aboutus-1.jpg`"
    ></SubCarousel>
    <section id="faq" class="faq">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-center">
          <div
            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-3 pb-3 m-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="row subpage-intro mt-5">
              <div class="col-lg-3">
                <img
                  :src="`${$page.props.asset}/assets/img/teams/${$page.props.member.image}`"
                  class="img-fluid"
                />
                <h2 class="position">{{ $page.props.member.position }}</h2>
              </div>
              <div
                class="col text-justify bio-text"
                v-html="$page.props.member.bio.substring(0, 1300) + ' ...'"
              ></div>
              <div
                class="col-12 text-justify bio-text"
                v-html="$page.props.member.bio.substring(1300)"
              ></div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { Head } from "@inertiajs/inertia-vue3";

import Header from "./../Layouts/Header.vue";
import Footer from "./../Layouts/Footer.vue";
import TopButton from "./../Layouts/TopButton.vue";
import SubCarousel from "./../Layouts/SubCarousel.vue";
import Loader from "./../Layouts/Loader.vue";
import MainTitle from "./../Layouts/MainTitle.vue";
import Layout from "./../Layouts/Layout.vue";

onMounted(() => {
  let intro = document.getElementsByName("subpage-intro");
  console.log(intro);
});
</script>
<style scoped>
.position {
  color: orange;
  border-left: 3px solid orange;
  margin-top: 15px;
  padding-left: 15px;
  font-size: 25px;
  font-weight: 600;
}
.bio-text {
  font-size: 20px;
}
</style>
