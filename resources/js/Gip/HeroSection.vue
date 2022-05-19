<template>
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row gy-4">
        <div
          class="
            col-lg-6
            order-2 order-lg-1
            d-flex
            flex-column
            justify-content-center
          "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1>SYDANI GRADUATE INTERNSHIP PROGRAM (SGIP)</h1>
          <h2>
            The Sydani Graduate Internship Program (SGIP) is a 4-month training
            program set up and designed by Sydani Group for exceptional young
            graduates seeking to gain practical experience and polish up their
            technical skills.
          </h2>
          <div>
            <a href="#" class="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div
          class="col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            :src="`${$page.props.public}/gip/img/working.svg`"
            class="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero -->
</template>

<script setup>
</script>

<style>
</style>
