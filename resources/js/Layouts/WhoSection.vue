<template>
  <section class="main-mission-section">
    <div class="mission-section">
      <div class="container" data-aos="fade-up">
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
            <MainTitle title="Who We Are"></MainTitle>
            <div id="whoweare" v-html="$page.props.whoweare.content"></div>
            <ul>
              <h3>Core Values</h3>
              <li v-for="(value, key) in $page.props.coreValues" :key="key">
                <a href="/" @click.prevent="">
                  <i class="bi bi-circle-fill"></i>
                  &ensp; {{ value.value }}
                </a>
              </li>
            </ul>
          </div>
          <div
            class="
              col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12
              text-center
              order-sm-12 order-xl-1 order-lg-1
              mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              :src="`${asset}/assets/img/whoweare/${$page.props.whoweare.image}`"
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

<style scoped>
.main-mission-section {
  background: #ececec;
}
</style>
