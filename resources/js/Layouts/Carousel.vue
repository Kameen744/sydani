<template>
  <section
    id="hero"
    class="d-flex align-items-center"
    :style="{ 'background-image': `url(${asset}/assets/img/hero-bg.jpg)` }"
  >
    <div class="container" data-aos="zoom-out" data-aos-delay="100">
      <div class="row">
        <div class="col-xl-6">
          <h1 class="title-text">
            The Last
            <br /><span>Technology Partner </span><br />
            You'll Ever Need.
          </h1>
          <h2>
            For more than 20 years as a managed tech leader, we’ve worked in
            partnership with clients of all sizes from mid-market to Fortune 100
            to innovate and realize their vision. Experience the simplicity and
            strategic advantage of a single trusted advisor.
          </h2>
          <a href="#about" class="btn-get-started scrollto">Learn More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

const asset = computed(() => usePage().props.value.asset);
</script>

<style scoped>
.title-text {
  text-shadow: 1px 2px 4px rgb(0 0 0 / 90%);
}
.title-text {
  font-size: 70px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 2rem;
  font-family: "Heebo", sans-serif;
  font-weight: 700;
}
.title-text span {
  color: rgb(251 146 60) !important;
}
</style>
