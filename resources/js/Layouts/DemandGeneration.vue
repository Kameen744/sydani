<template>
  <section id="faq" class="faq">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Demand Generation</h2>
        <p v-html="$page.props.intro.demand_generation_intro"></p>
      </div>
      <div class="row">
        <div
          class="col-md-3 p-4 pt-0"
          v-for="(demand, key) in $page.props.demands"
          :key="key"
          data-aos="zoom-in-left"
          :data-aos-delay="100 * (key + 1)"
        >
          <div class="row py-3 px-2 shadow demand-card">
            <div class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
              <h4>{{ demand.title }}</h4>
              <p v-html="demand.content.substring(0, 200)"></p>
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

<style scoped>
.financing-card:hover,
.demand-card:hover {
  cursor: pointer;
  box-shadow: 0px;
  border: 2px rgb(251, 146, 60) solid;
  transition: border 3s;
  border-radius: 10px;
}
.demand-card:hover {
  background: rgba(251, 146, 60, 0.7);
  color: black;
  transition: background ease-in 10ms;
}
</style>
