<template>
  <section id="about" class="about section-bg">
    <div class="container" data-aos="fade-up">
      <SectionTitle title="Systems Strengthening"></SectionTitle>
      <div class="row no-gutters">
        <div class="content col-xl-5 d-flex align-items-stretch">
          <div class="content">
            <!-- <h3>{{ $page.props.systems[0].title }}</h3> -->
            <p
              class="intro"
              v-html="$page.props.intro.sytem_strengthening_intro"
            ></p>
          </div>
        </div>
        <div class="col-xl-7 d-flex align-items-stretch">
          <div class="icon-boxes d-flex flex-column justify-content-center">
            <div class="row">
              <div
                v-for="(system, key) in $page.props.systems"
                :key="key"
                class="col-md-6 icon-box"
                data-aos="fade-up-left"
                :data-aos-delay="100 * (key + 1)"
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
import { onMounted } from "@vue/runtime-core";
import SectionTitle from "./../Components/SectionTitle.vue";

// onMounted(() => {
//   let nodes = document.getElementsByClassName("intro");
//   for (var i = 0; i < nodes.length; i++) {
//     if (nodes[i].nodeName.toLowerCase() == "p") {
//       nodes[i].style.color = "white";
//       console.log(nodes[i]);
//     }
//   }
// });
</script>

<style scoped>
.intro p {
  color: white !important;
}
</style>
