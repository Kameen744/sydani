<template>
    <Head>
    <title>Photo Gallery</title>
  </Head>
  <Layout>
    <SubCarousel
        title="Sydani Photo Gallery"
        :bg-Image="`${$page.props.asset}/assets/img/aboutus-1.jpg`"
      ></SubCarousel>
    <div class="d-flex justify-content-center flex-column">
      <!-- <div class="col-5 md:col-10">
        <h2>"Photography takes an instant out of time, altering life by holding it still." - Dorothea Lange</h2>
      </div> -->
      <div class="section-title pt-3">
        <h3>"Photography takes an instant out of time, altering life by holding it still." - Dorothea Lange</h3>
      </div>
      <div class="d-flex flex-wrap justify-content-center">
        <div v-for="item in arr" class="m-2 rotate" style="width: 30%;">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import SubCarousel from '@/Layouts/SubCarousel.vue';
import Layout from "./../Layouts/Layout.vue";
import { Head } from '@inertiajs/inertia-vue3';

const arr = [1,2,3,4,5,6,7,8,9]
</script>

<style scoped>
.rotate img{
transition: 1s ease;
}

.rotate img:hover{
-webkit-transform: rotateZ(-5deg);
-ms-transform: rotateZ(-5deg);
transform: rotateZ(-5deg);
transition: 1s ease;
}
</style>