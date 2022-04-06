<template>
  <section
    id="about"
    class="about sub-page-slider"
    :style="{ 'background-image': `url(${bgImage})` }"
  >
    <div class="slider-content">
      <div class="container">
        <div class="row">
          <div
            class="
              col-xl-12 col-lg-12 col-md-12 col-sm-12
              text-center
              mb-3 mb-xl-5 mb-lg-5 mb-sm-3
            "
          >
            <h1 class="title-text">{{ title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";
defineProps({
  title: {
    type: [Array, String],
    default: "Industries",
  },
  bgImage: {
    type: String,
    default: "",
  },
});
const asset = computed(() => usePage().props.value.asset);
</script>

<style scoped>
.sub-page-slider:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(33, 37, 41, 0.6);
  z-index: 1;
  /* transform: skewY(-3deg); */
}

.slider-content .container {
  padding-top: 200px;
  padding-bottom: 20px;
}

.title-text {
  font-size: 3rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 2rem;
  font-family: "Heebo", sans-serif;
  font-weight: 700;
  color: rgb(251 146 60);
  text-shadow: 1px 2px 4px rgb(0 0 0 / 90%);
}
</style>
