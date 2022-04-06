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
              <h3 class="text-orange-400 py-1 px-3 mb-3">Who We Are</h3>
            </div>

            <p>
              Sydani Group is a global systems integrator (GSI) and managed IT
              services provider (MSP). We offer comprehensive IT management and
              consultancy services to organizations worldwide. We work in
              partnership with clients of various sizes – from mid-market to
              Fortune 100 – while helping them strengthen their IT foundation,
              manage risk and compliance, and enhance their competitive
              position. Learn more about our service offerings:
            </p>
            <ul>
              <h3>Core Values</h3>
              <li>
                <a href="#">
                  <i class="bi bi-circle-fill"></i>
                  &ensp; Business application management
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-circle-fill"></i>
                  &ensp; Custom software product development
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-circle-fill"></i>
                  &ensp; Data insights, business intelligence, artificial
                  intelligence and big data
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-circle-fill"></i>
                  &ensp; Workforce productivity apps, development and management
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-circle-fill"></i>
                  &ensp; Cloud migration, integration, expansion and security
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-circle-fill"></i>
                  &ensp; Cyber security and end point management
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-circle-fill"></i>
                  &ensp; IT infrastructure optimizations
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
            <img :src="`${asset}/assets/img/services.png`" class="img-fluid" />
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
.main-mission-section {
  background: #ececec;
}
.main-title {
  border-left: 4px solid rgb(251 146 60);
}
.main-title h3 {
  font-size: 30px;
  font-weight: 700;
  font-family: "Heebo", sans-serif;
}
</style>
