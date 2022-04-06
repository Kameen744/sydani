<template>
  <section id="faq" class="faq">
    <div class="container" data-aos="fade-up">
      <div class="row align-items-center">
        <div
          class="
            col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12
            text-left
            order-sm-1 order-xl-1 order-lg-1
          "
        >
          <div class="main-title">
            <h3 class="text-orange-400 py-1 px-3 mb-3">Data Analytics</h3>
          </div>

          <p>
            Sydani Group is a global systems integrator (GSI) and managed IT
            services provider (MSP). We offer comprehensive IT management and
            consultancy services to organizations worldwide. We work in
            partnership with clients of various sizes – from mid-market to
            Fortune 100 – while helping them strengthen their IT foundation,
            manage risk and compliance, and enhance their competitive position.
            Learn more about our service offerings:
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
            order-sm-2 order-xl-2 order-lg-2
            mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5
          "
        >
          <div class="row">
            <div class="col-md-4 p-4 pt-0">
              <div class="row py-3 px-2 shadow demand-card">
                <div
                  class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h4>Voluptatem provident quasi</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-4 pt-0">
              <div class="row py-3 px-2 shadow demand-card">
                <div
                  class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h4>Voluptatem provident quasi</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-4 pt-0">
              <div class="row py-3 px-2 shadow demand-card">
                <div
                  class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h4>Voluptatem provident quasi</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
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
  border-left: 4px solid rgb(251 146 60);
}
.main-title h3 {
  font-size: 30px;
  font-weight: 700;
  font-family: "Heebo", sans-serif;
}
</style>
