<template>
  <section id="services" class="about section-bg">
    <div class="container" data-aos="fade-up">
      <SectionTitle
        :title="`${$page.props.industry.name} Services`"
        subtitle="Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit."
      ></SectionTitle>
      <div class="row no-gutters">
        <div class="content col-xl-5 d-flex align-items-stretch">
          <div class="card">
            <img
              :src="`${$page.props.asset}/assets/img/industries/${$page.props.industry.service_image}`"
              class="card-img-top"
              :alt="$page.props.industry.slug"
            />
          </div>
        </div>
        <div class="col-xl-7 d-flex align-items-stretch">
          <div class="icon-boxes d-flex flex-column justify-content-center">
            <div class="row">
              <div
                v-for="(service, key) in $page.props.services"
                :key="key"
                class="col-md-6 icon-box"
                data-aos="fade-up"
                :data-aos-delay="key * 100"
              >
                <i class="bx bx-receipt"></i>
                <h4>{{ service.title }}</h4>
                <p>
                  {{ service.content.substring(0, 80) }}
                </p>
              </div>
            </div>
          </div>
          <!-- End .content-->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "./../Components/SectionTitle.vue";
</script>

<style>
</style>
