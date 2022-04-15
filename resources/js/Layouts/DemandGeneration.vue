<template>
  <section id="faq" class="faq">
    <div class="container" data-aos="fade-up">
      <SectionTitle
        title="Demand Generation"
        subtitle="Magnam dolores commodi suscipit. Necessitatibus Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea."
      ></SectionTitle>
      <div class="row">
        <div class="col-md-3 p-4 pt-0">
          <div class="row py-3 px-2 shadow demand-card">
            <div
              class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Voluptatem provident quasi</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-4 pt-0">
          <div class="row py-3 px-2 shadow demand-card">
            <div
              class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Voluptatem provident quasi</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-4 pt-0">
          <div class="row py-3 px-2 shadow demand-card">
            <div
              class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Voluptatem provident quasi</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-4 pt-0">
          <div class="row py-3 px-2 shadow demand-card">
            <div
              class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Voluptatem provident quasi</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
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
