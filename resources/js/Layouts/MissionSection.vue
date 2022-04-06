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
          >
            <div class="main-title">
              <h3 class="text-orange-400 py-1 px-3 mb-3">Our Vision</h3>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, repudiandae quae quasi error, fugit obcaecati quia
              dignissimos quidem soluta pariatur quod illum nisi sunt eaque non,
              voluptatum voluptatibus mollitia doloremque? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
            <hr />

            <div class="main-title">
              <h3 class="text-orange-400 py-1 px-3 mb-3">Our Mission</h3>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, repudiandae quae quasi error, fugit obcaecati quia
              dignissimos quidem soluta pariatur quod illum nisi sunt eaque non,
              voluptatum voluptatibus mollitia doloremque? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>

            <ul>
              <li>
                <a href="#">
                  <i class="bi bi-circle-fill"></i>
                  &ensp; Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
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
          >
            <img :src="`${asset}/assets/img/mission.jpg`" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { usePage } = require("@inertiajs/inertia-vue3");
const { computed } = require("@vue/runtime-core");

const asset = computed(() => usePage().props.value.asset);
</script>

<style scoped>
/* .main-mission-section {
  background: #ececec;
} */
.main-title {
  border-left: 4px solid rgb(251 146 60);
}
.main-title h3 {
  font-size: 30px;
  font-weight: 700;
  font-family: "Heebo", sans-serif;
}
</style>
