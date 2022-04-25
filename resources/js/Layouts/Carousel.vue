<template>
  <section
    id="hero"
    class="d-flex align-items-center"
    :style="{
      'background-image': `url(${asset}/assets/img/carousels/${$page.props.carousel.image})`,
    }"
  >
    <div class="container" data-aos="zoom-out" data-aos-delay="100">
      <div class="row">
        <div class="col-xl-7">
          <h1 class="title-text" v-html="$page.props.carousel.title"></h1>
          <h2 v-html="$page.props.carousel.subtitle"></h2>
          <Link href="/" class="btn-get-started scrollto">Learn More</Link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { Link, usePage } from "@inertiajs/inertia-vue3";

const asset = computed(() => usePage().props.value.asset);
</script>

<style scoped>
.title-text {
  text-shadow: 1px 2px 4px rgb(0 0 0 / 90%);
}
.title-text {
  font-size: 5rem !important;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 2rem;
  font-family: "Heebo", sans-serif;
  font-weight: 700;
}
@media (max-width: 480px) {
  .title-text {
    font-size: 2rem !important;
  }
}
.title-text span {
  color: #ff9005 !important;
}
</style>
