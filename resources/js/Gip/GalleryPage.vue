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
          <p>Check out our beautifull gallery</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img
                :src="`${$page.props.public}/gip/img/team/team-1.jpg`"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  :href="`${$page.props.public}/gip/img/team/team-1.jpg`"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="App 1"
                  ><i class="bi bi-plus"></i
                ></a>
                <a href="#" title="More Details"><i class="bi bi-link"></i></a>
              </div>
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                :src="`${$page.props.public}/gip/img/team/team-2.jpg`"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  :href="`${$page.props.public}/gip/img/team/team-2.jpg`"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Web 3"
                  ><i class="bi bi-plus"></i
                ></a>
                <a href="#" title="More Details"><i class="bi bi-link"></i></a>
              </div>
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img
                :src="`${$page.props.public}/gip/img/team/team-3.jpg`"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  :href="`${$page.props.public}/gip/img/team/team-3.jpg`"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="App 2"
                  ><i class="bi bi-plus"></i
                ></a>
                <a href="#" title="More Details"><i class="bi bi-link"></i></a>
              </div>
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img
                :src="`${$page.props.public}/gip/img/team/team-4.jpg`"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  :href="`${$page.props.public}/gip/img/team/team-4.jpg`"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Card 2"
                  ><i class="bi bi-plus"></i
                ></a>
                <a href="#" title="More Details"><i class="bi bi-link"></i></a>
              </div>
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                :src="`${$page.props.public}/gip/img/team/team-1.jpg`"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  :href="`${$page.props.public}/gip/img/team/team-1.jpg`"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Web 2"
                  ><i class="bi bi-plus"></i
                ></a>
                <a href="#" title="More Details"><i class="bi bi-link"></i></a>
              </div>
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img
                :src="`${$page.props.public}/gip/img/team/team-2.jpg`"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  :href="`${$page.props.public}/gip/img/team/team-2.jpg`"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="App 3"
                  ><i class="bi bi-plus"></i
                ></a>
                <a href="#" title="More Details"><i class="bi bi-link"></i></a>
              </div>
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img
                :src="`${$page.props.public}/gip/img/team/team-3.jpg`"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  :href="`${$page.props.public}/gip/img/team/team-3.jpg`"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Card 1"
                  ><i class="bi bi-plus"></i
                ></a>
                <a href="#" title="More Details"><i class="bi bi-link"></i></a>
              </div>
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img
                :src="`${$page.props.public}/gip/img/team/team-4.jpg`"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  :href="`${$page.props.public}/gip/img/team/team-4.jpg`"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Card 3"
                  ><i class="bi bi-plus"></i
                ></a>
                <a href="#" title="More Details"><i class="bi bi-link"></i></a>
              </div>
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                :src="`${$page.props.public}/gip/img/team/team-3.jpg`"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-links">
                <a
                  :href="`${$page.props.public}/gip/img/team/team-3.jpg`"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Web 3"
                  ><i class="bi bi-plus"></i
                ></a>
                <a href="#" title="More Details"><i class="bi bi-link"></i></a>
              </div>
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
            </div>
          </div>
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
