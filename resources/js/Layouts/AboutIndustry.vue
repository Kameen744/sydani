<template>
  <section id="faq" class="faq">
    <div class="container" data-aos="fade-up">
      <div class="row justify-content-center">
        <div
          class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-3 pb-3 m-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <MainTitle :title="$page.props.industry.name"></MainTitle>
          <div class="subpage-intro" v-html="$page.props.industry.intro"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MainTitle from "./MainTitle.vue";
</script>

<style>
</style>
