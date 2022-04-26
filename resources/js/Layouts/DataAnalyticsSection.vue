<template>
  <section id="faq" class="faq">
    <div class="container" data-aos="fade-up">
      <div class="row align-items-center">
        <div
          class="
            col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12
            text-left
            order-sm-1 order-xl-1 order-lg-1
          "
        >
          <div class="main-title">
            <h3 class="text-orange-400 py-1 px-3 mb-3">Data Analytics</h3>
          </div>

          <p v-html="$page.props.intro.data_analytics_intro"></p>
        </div>

        <div
          class="
            col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12
            text-center
            order-sm-2 order-xl-2 order-lg-2
            mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5
          "
        >
          <div class="row">
            <div
              class="col-md-4 p-4 pt-0"
              v-for="(analytic, key) in $page.props.dataAnalytics"
              :key="key"
              data-aos="zoom-in-right"
              :data-aos-delay="100 * (key + 1)"
            >
              <div class="row py-3 px-2 shadow demand-card">
                <div class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h5>{{ analytic.title }}</h5>
                  <hr />
                  <p v-html="analytic.content.substring(0, 150)"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "./../Components/SectionTitle.vue";
</script>

<style scoped>
.financing-card:hover,
.demand-card:hover {
  cursor: pointer;
  box-shadow: 0px;
  border: 2px rgb(251, 146, 60) solid;
  transition: border 3s;
  border-radius: 10px;
}
.demand-card:hover {
  background: rgba(251, 146, 60, 0.7);
  color: black;
  transition: background ease-in 1s;
}
.main-mission-section {
  background: #ececec;
}
.main-title {
  border-left: 4px solid #ff9005;
}
.main-title h3 {
  font-size: 30px;
  font-weight: 700;
  font-family: "Heebo", sans-serif;
}
</style>
