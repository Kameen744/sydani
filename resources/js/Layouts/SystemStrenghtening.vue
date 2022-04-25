<template>
  <section id="about" class="about section-bg">
    <div class="container" data-aos="fade-up">
      <SectionTitle title="Systems Strengthening"></SectionTitle>
      <div class="row no-gutters">
        <div class="content col-xl-5 d-flex align-items-stretch">
          <div class="content">
            <h3>{{ $page.props.systems[0].title }}</h3>
            <p v-html="$page.props.systems[0].content.substring(0, 400)"></p>
          </div>
        </div>
        <div class="col-xl-7 d-flex align-items-stretch">
          <div class="icon-boxes d-flex flex-column justify-content-center">
            <div class="row">
              <div
                v-for="(system, key) in $page.props.systems"
                :key="key"
                class="col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <i class="bx bx-receipt"></i>
                <h4>{{ system.title }}</h4>
                <p v-html="system.content.substring(0, 200)"></p>
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

<style>
</style>
