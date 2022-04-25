<template>
  <section class="main-mission-section">
    <div class="mission-section">
      <div class="container">
        <div class="row align-items-center">
          <div
            class="
              col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12
              text-left
              order-sm-1 order-xl-12 order-lg-12
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <MainTitle title="Our Vision"></MainTitle>

            <p v-html="$page.props.vision.vision"></p>
            <hr />

            <MainTitle title="Our Mission"></MainTitle>

            <p v-html="$page.props.vision.mission"></p>
          </div>

          <div
            class="
              col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12
              text-center
              order-sm-12 order-xl-1 order-lg-1
              mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5
            "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              :src="`${asset}/assets/img/visionmission/${$page.props.vision.image}`"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePage } from "@inertiajs/inertia-vue3";
import { computed } from "@vue/runtime-core";
import MainTitle from "./MainTitle.vue";

const asset = computed(() => usePage().props.value.asset);
</script>

