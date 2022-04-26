<template>
  <Layout>
    <SubCarousel
      title="New Career Adventures Start Here"
      :bg-Image="`${$page.props.asset}/assets/img/aboutus-1.jpg`"
    ></SubCarousel>
    <section class="main-mission-section">
      <div class="mission-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="main-title">
                <MainTitle title="Benefits"></MainTitle>
                <p class="mt-5">
                  For us, taking care of our people is about making sure they
                  can show up for work every day, with less stress, and more
                  support. That’s why we make it a priority to provide an array
                  of medical benefit plans, short and long-term disability,
                  retirement planning, stellar PTO, employee assistance
                  programs, sponsored legal benefits, and a casual work
                  environment. How’s that for a little TLC?
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
              <h3 class="d-flex align-items-center text-shadow">
                Health Insurance
              </h3>
              <p>
                Sydani offers a variety of healthcare options for our employees
                across the US and international. With medical, dental, and
                vision insurance offered, our employees have access to benefits
                for themselves, as well as their family, under our company
                sponsored plans. For those that choose to take advantage of
                Health Insurance options, Sydani makes a significant
                contribution to help cover the cost of medical premiums.
              </p>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
              <h3 class="d-flex align-items-center text-shadow">PTO</h3>
              <p>
                Sydani provides a robust vacation plan, so that every employee
                has the opportunity to take full advantage of all the time
                offered to them. These days can be used for vacation, me time,
                or sick days.
              </p>
            </div>
            <div
              class="
                col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12
                mb-xl-0 mb-lg-0 mb-4
              "
            >
              <h3 class="d-flex align-items-center text-shadow">Retirement</h3>
              <p>
                Sydani understands that planning for the future is an important
                decision when considering any employer. Sydani offers its
                employees a very competitive retirement plan with a variety of
                different investment options, and a company matching program.
              </p>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <h3 class="d-flex align-items-center text-shadow">
                Life Insurance/Short term disability/Long term disability
              </h3>
              <p>
                Sydani covers premiums for all. Covered, covered, and covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="mission-section">
        <div class="container">
          <SectionTitle title="Vacancy"></SectionTitle>
          <div class="row">
            <div
              class="
                col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12
                shadow
                p-5
                mt-4
              "
              v-for="(vacancy, key) in $page.props.vacancies"
              :key="key"
            >
              <div v-html="vacancy.description"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "./../Layouts/Layout.vue";
import MainTitle from "./../Layouts/MainTitle.vue";
import SectionTitle from "./../Components/SectionTitle.vue";
import SubCarousel from "./../Layouts/SubCarousel.vue";
</script>
<style scoped>
.main-mission-section {
  background: #ececec;
}
.text-shadow {
  text-shadow: 0.5px 1px 0.5px rgb(0 0 0 / 90%);
  color: #ff9005;
}
</style>
