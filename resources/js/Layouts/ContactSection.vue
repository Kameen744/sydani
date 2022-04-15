<template>
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Contact</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        </p>
      </div>

      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-6">
          <ContactAddress></ContactAddress>
        </div>
        <div class="col-md-6">
          <ContactForm class="h-100"></ContactForm>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactSection from "./ContactForm.vue";
import ContactAddress from "./ContactAddress.vue";
import ContactForm from "./ContactForm.vue";
</script>

<style>
</style>
