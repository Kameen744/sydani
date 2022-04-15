<template>
  <Layout>
    <SubCarousel
      title="Contact Sydani Expert"
      :bgImage="`${$page.props.asset}/assets/img/aboutus-1.jpg`"
    ></SubCarousel>
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-5">
            <MapSection></MapSection>
          </div>
          <div class="col-md-7">
            <ContactAddress></ContactAddress>
            <div class="my-4"></div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "./../Layouts/Layout.vue";
import SubCarousel from "./../Layouts/SubCarousel.vue";
import ContactAddress from "./../Layouts/ContactAddress.vue";
import ContactForm from "./../Layouts/ContactForm.vue";
import MapSection from "./../Layouts/MapSection.vue";
</script>

<style>
</style>
