<template>
  <Head>
    <title>Projects</title>
  </Head>
  <Layout>
    <SubCarousel
      title="Projects"
      :bg-Image="`${$page.props.asset}/assets/img/aboutus-1.jpg`"
    ></SubCarousel>
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="main-title col-12">
            <h3 class="text-orange-400 py-1 px-3 mb-3">Projects</h3>
          </div>

          <div class="col-12 p-0 my-4">
            <p class="p-0">
              Sydani Group is a global systems integrator (GSI) and managed IT
              services provider (MSP). We offer comprehensive IT management and
              consultancy services to organizations worldwide. We work in
              partnership with clients of various sizes – from mid-market to
              Fortune 100 – while helping them strengthen their IT foundation,
              manage risk and compliance, and enhance their competitive
              position. Learn more about our service offerings:
            </p>
            <ul>
              <h3></h3>
              <li>
                <a href="#">
                  <i class="bi bi-circle-fill"></i>
                  &ensp; Business application management
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <hr />
            <div class="row mb-2">
              <div class="col-md-4 row-eq-height shadow-sm hover:shadow-lg">
                <div>
                  <div class="row">
                    <img
                      class="service-icon col-md-4"
                      :src="`${$page.props.asset}/assets/img/icon1.png`"
                    />
                    <h3 class="col">
                      <a href="dynamics-shipping-connector-dsc/index.html"
                        >Dynamics Shipping Connector (DSC)</a
                      >
                    </h3>
                  </div>
                  <p class="mt-4">
                    Unify Your Multi-Carrier Shipping Needs with Dynamics
                    Shipping Connector (DSC) Developed as an add-on to Dynamics
                    365 for Finance and Operations,...
                  </p>
                  <a
                    class="read_more"
                    href="dynamics-shipping-connector-dsc/index.html"
                    >Read More</a
                  >
                </div>
              </div>

              <div class="col-md-4 row-eq-height shadow-sm">
                <div>
                  <div class="row">
                    <img
                      class="service-icon col-md-4"
                      :src="`${$page.props.asset}/assets/img/icon1.png`"
                    />
                    <h3 class="col">
                      <a href="dynamics-shipping-connector-dsc/index.html"
                        >Dynamics Shipping Connector (DSC)</a
                      >
                    </h3>
                  </div>
                  <p class="mt-4">
                    Unify Your Multi-Carrier Shipping Needs with Dynamics
                    Shipping Connector (DSC) Developed as an add-on to Dynamics
                    365 for Finance and Operations,...
                  </p>
                  <a
                    class="read_more"
                    href="dynamics-shipping-connector-dsc/index.html"
                    >Read More</a
                  >
                </div>
              </div>

              <div class="col-md-4 row-eq-height shadow-sm">
                <div>
                  <div class="row">
                    <img
                      class="service-icon col-md-4"
                      :src="`${$page.props.asset}/assets/img/icon1.png`"
                    />
                    <h3 class="col">
                      <a href="dynamics-shipping-connector-dsc/index.html"
                        >Dynamics Shipping Connector (DSC)</a
                      >
                    </h3>
                  </div>
                  <p class="mt-4">
                    Unify Your Multi-Carrier Shipping Needs with Dynamics
                    Shipping Connector (DSC) Developed as an add-on to Dynamics
                    365 for Finance and Operations,...
                  </p>
                  <a
                    class="read_more"
                    href="dynamics-shipping-connector-dsc/index.html"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "./../Layouts/Layout.vue";
import SubCarousel from "./../Layouts/SubCarousel.vue";
import { Head } from "@inertiajs/inertia-vue3";
</script>

<style scoped>
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

li {
  list-style: none;
}
</style>
