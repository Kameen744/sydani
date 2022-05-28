<template>
  <Head>
    <title>GIP-Gallery</title>
  </Head>
  <GipLayout>
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio mt-5 pb-5">
      <div class="container" data-aos="fade-up">
        <div class="section-title mt-2">
          <h2>Gallery</h2>
          <!-- <p>##</p> -->
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li
                :data-filter="`.filter-${batch.id}`"
                :class="key == 0 ? 'filter-active' : ''"
                v-for="(batch, key) in $page.props.batches"
                :key="key"
              >
                {{ batch.batch }}
              </li>
              <!-- <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li> -->
            </ul>
          </div>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <template v-for="(batch, key) in $page.props.batches" :key="key">
            <div
              class="col-lg-4 col-md-6 portfolio-item"
              :class="`filter-${batch.id}`"
              v-for="(intern, index) in batch.interns"
              :key="index"
            >
              <div class="portfolio-wrap">
                <img
                  :src="`${$page.props.asset}/assets/img/interns/${intern.profile_image.image}`"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-links">
                  <a
                    :href="`${$page.props.asset}/assets/img/interns/${intern.profile_image.image}`"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    :title="intern.name"
                    ><i class="bi bi-plus"></i
                  ></a>
                  <a href="#" title="More Details"
                    ><i class="bi bi-link"></i
                  ></a>
                </div>
                <div class="portfolio-info">
                  <h4>{{ intern.name }}</h4>
                  <p>{{ batch.batch }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
    <!-- End Portfolio Section -->
  </GipLayout>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Header from "./Header.vue";
import GipLayout from "./GipLayout.vue";
import { onMounted } from "@vue/runtime-core";
import { on, select } from "./lib";

onMounted(() => {
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
});
</script>
