<template>
  <!-- ======= Team Section ======= -->
  <section id="team" class="team">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Alumni</h2>
        <!-- <p>First set 2022</p> -->
      </div>

      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          data-aos="zoom-in"
          data-aos-delay="100"
          v-for="(intern, key) in $page.props.interns"
          :key="key"
        >
          <div class="member">
            <img
              :src="`${$page.props.asset}/assets/img/interns/${intern.profile_image.image}`"
              class="img-fluid"
              alt=""
            />
            <div class="member-info">
              <div class="member-info-content">
                <h4>{{ intern.name }}</h4>
                <span>{{ intern.batch.batch }}</span>
              </div>
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <!-- <div
          class="col-xl-3 col-lg-4 col-md-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div class="member">
            <img
              :src="`${$page.props.public}/gip/img/team/team-2.jpg`"
              class="img-fluid"
              alt=""
            />
            <div class="member-info">
              <div class="member-info-content">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-xl-3 col-lg-4 col-md-6"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div class="member">
            <img
              :src="`${$page.props.public}/gip/img/team/team-3.jpg`"
              class="img-fluid"
              alt=""
            />
            <div class="member-info">
              <div class="member-info-content">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-xl-3 col-lg-4 col-md-6"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div class="member">
            <img
              :src="`${$page.props.public}/gip/img/team/team-4.jpg`"
              class="img-fluid"
              alt="team-4"
            />
            <div class="member-info">
              <div class="member-info-content">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <!-- End Team Section -->
</template>

<script setup>
</script>

<style>
</style>
