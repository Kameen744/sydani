<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container">
      <div class="row justify-content-between">
        <div
          class="
            col-lg-5
            d-flex
            align-items-center
            justify-content-center
            about-img
          "
        >
          <img
            :src="`${$page.props.public}/gip/img/team-meeting.svg`"
            class="w-100"
            alt=""
            data-aos="zoom-in"
          />
        </div>
        <div class="col-lg-6 pt-5 my-3">
          <h3 data-aos="fade-up">The program focuses on the following</h3>

          <div class="row">
            <div
              class="col-md-6 shadow-sm p-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <i class="bx bx-receipt"></i>

              <h5>
                Enhancing individuals, communication abilities, problem solving
                techniques, and other skills required to stand out in the
                working world
              </h5>
            </div>
            <div
              class="col-md-6 shadow-sm p-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <i class="bx bx-cube-alt"></i>
              <h5>
                Offering an opportunity for career exploration and development
              </h5>
            </div>
            <div
              class="col-md-12 shadow-sm p-4"
              data-aos="fade-dow"
              data-aos-delay="200"
            >
              <i class="bx bx-cube-alt"></i>
              <h5>
                Entailing supervised structured learning in a professional
                setting that allows participants to gain valuable work
                experience and relevant skills that can be applied to day-to-day
                challenges
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>

<script setup>
</script>

<style>
</style>
