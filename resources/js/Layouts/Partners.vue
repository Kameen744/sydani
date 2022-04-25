<template>
  <section id="clients" class="clients">
    <div class="container" data-aos="zoom-in">
      <div class="clients-slider swiper">
        <div class="swiper-wrapper align-items-center">
          <div
            class="swiper-slide"
            v-for="(partner, key) in $page.props.partners"
            :key="key"
          >
            <img
              :src="`${asset}/assets/img/partners/${partner.image}`"
              class="img-fluid"
              :alt="partner.name"
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";
onMounted(() => {
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  });
});

const asset = computed(() => usePage().props.value.asset);
</script>

<style>
</style>
