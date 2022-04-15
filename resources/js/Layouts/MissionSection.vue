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
            <MainTitle title="Our Vision"></MainTitle>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, repudiandae quae quasi error, fugit obcaecati quia
              dignissimos quidem soluta pariatur quod illum nisi sunt eaque non,
              voluptatum voluptatibus mollitia doloremque? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
            <hr />

            <MainTitle title="Our Mission"></MainTitle>

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
import { usePage } from "@inertiajs/inertia-vue3";
import { computed } from "@vue/runtime-core";
import MainTitle from "./MainTitle.vue";

const asset = computed(() => usePage().props.value.asset);
</script>

