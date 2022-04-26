<template>
  <section id="faq" class="faq">
    <div class="container" data-aos="fade-up">
      <div class="row align-items-center">
        <div
          class="
            col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12
            text-left
            order-sm-0 order-xl-0 order-lg-0
          "
        >
          <div class="main-title">
            <h3 class="text-orange-400 py-1 px-3 mb-3">Financing</h3>
          </div>

          <p v-html="$page.props.intro.financing_intro"></p>
        </div>
        <div
          class="
            col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12
            text-center
            order-sm-1 order-xl-1 order-lg-1
            mt-xl-0 mt-lg-0 mt-5
            mb-2
          "
        >
          <div class="row">
            <div
              class="col-md-12 p-4 pt-0"
              v-for="(financing, key) in $page.props.financings"
              :key="key"
              data-aos="fade-up-right"
              :data-aos-delay="100 * (key + 1)"
            >
              <div class="row py-3 px-2 shadow mb-3 financing-card">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h4>{{ financing.title }}</h4>
                  <p v-html="financing.content.substring(0, 120)"></p>
                </div>
                <div
                  class="col-lg-6 order-1 order-lg-2 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    :src="`${$page.props.asset}/assets/img/financings/${financing.image}`"
                    :alt="financing.title"
                    class="img-fluid"
                  />
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
.financing-card:hover {
  cursor: pointer;
  box-shadow: 0px;
  border: 2px rgb(251, 146, 60) solid;
  border-radius: 10px;
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
