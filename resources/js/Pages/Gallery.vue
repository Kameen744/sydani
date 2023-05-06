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
        <!-- <pre>{{ $page.props.teams }}</pre>
        <div v-for="(member, index) in $page.props.teams" class="m-2 rotate" style="width: 30%;">
          <img
          style="min-width: 30%; min-height: 180px; height: fit-content; background-color: #F3F7FC;"
          @click="() => handleModalShow(index)"
            :src="`${asset}/assets/img/teams/${member.image}`"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div> -->
        <SimpleGallery galleryID="my-test-gallery" :images="images" />
      </div>
      <div v-if="showModal">
      <!-- <transition name="modal">
        <div class="modal-overlay">
          <div class="modally">
            <div class="close-button" style="position: absolute; right: 0; top: 0;" @click="showModal = false">Close</div>
            <div class="pt-5 mt-3" style="display: flex; flex-direction: column; justify-self: center;">
              <img class="w-fit" :src="$page.props.teams[currentImageIndex]" alt="current image">
              <div style="display: flex; justify-content: center; column-gap: 2rem; align-items: center;">
                <div class="button prev" @click="handlePrevImage">Prev Image</div>
                <div class="button next">Next Image</div>
              </div>
            </div> 
        </div>
        </div>
      </transition> -->
      </div>
    </div>
  </Layout>
</template>

<script setup>
import SubCarousel from '@/Layouts/SubCarousel.vue';
import SimpleGallery from './Gallery/SimpleGallery.vue'
import Layout from "./../Layouts/Layout.vue";
import { Head, usePage } from '@inertiajs/inertia-vue3';
// const { computed } = require("@vue/runtime-core");


const images = [
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
        },
      ]

// const asset = computed( () => usePage().props.value.asset );
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

.modal-overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.modally {
display: grid;
place-items: center;
  background-color: white;
  height: fit-content;
  width: 60vw;
  border-radius: 20px;
  z-index: 9999;
  position: absolute;
}

@media (max-width: 780px){
  .modally {
    width: 90vw;
  }
}

@media (max-width: 480px){
  .modally {
    width: 100vw;
  }
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-button {
  color: red;
  border-radius: 10px; 
  float: right; 
  width: 150px; 
  height: 50px;
  display: grid;
  place-items: center;
}

.close-button:hover {
  background-color: red;
  color: white;
}

.modally  .button {
  width: 150px;
  height: 50px;
  color: white;
  font-size: 14px;
  border-radius: 10px;
  margin-block: 2rem;
  display: grid;
  place-items: center;
}

.button.next{
  background-color: #ff9005;
}
.button.prev{
  background-color: #ff9005;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>