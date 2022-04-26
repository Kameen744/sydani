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
          </div>
          <div class="col-12">
            <hr />
            <div class="row mb-2">
              <div
                class="col-md-4 row-eq-height p-2 hover:shadow-lg mb-4"
                v-for="(project, key) in $page.props.projects"
                :key="key"
                data-aos="fade-down-right"
                :data-aos-delay="100 * (key + 1)"
              >
                <div>
                  <div class="row shadow p-3">
                    <img
                      class="service-icon col-md-4"
                      :src="`${$page.props.asset}/assets/img/icon1.png`"
                    />
                    <!-- <i class="bi bi-check-square h2"></i> -->
                    <h5 class="col">{{ project.title.substring(0, 32) }}</h5>
                  </div>
                  <p
                    class="mt-4 px-1"
                    v-html="project.background.substring(0, 300)"
                  ></p>
                  <Link
                    :href="`/projects/${project.slug}`"
                    class="btn-get-started scrollto"
                    >Read More</Link
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
import { Head, Link } from "@inertiajs/inertia-vue3";
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
