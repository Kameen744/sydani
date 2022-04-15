<template>
  <!-- ======= Tabs Section ======= -->
  <section id="tabs" class="tabs">
    <div class="container" data-aos="fade-up">
      <SectionTitle
        title="Featured Insights"
        subtitle="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea."
      ></SectionTitle>
      <ul class="nav nav-tabs row d-flex">
        <li class="nav-item col-3" v-for="(tab, key) in tabs" :key="key">
          <a
            class="nav-link"
            :class="activeKey == key ? 'active show' : ''"
            href="/"
            @click.prevent="changeKey(key)"
            data-bs-toggle="tab"
            :data-bs-target="`#tab-${key}`"
          >
            <i class="bx bx-alarm"></i>
            <h4 class="d-none d-lg-block">
              Modi sit est dela pireda nest {{ key }}
            </h4>
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <div
          class="tab-pane"
          :class="activeKey == key ? 'active show' : ''"
          :id="`tab-${key}`"
          v-for="(tab, key) in tabs"
          :key="key"
        >
          <div class="row">
            <div
              class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda {{ key }}
              </h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i class="bi bi-check2-all"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
            <div
              class="col-lg-6 order-1 order-lg-2 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                :src="`${asset}/assets/img/tabs-${key + 1}.jpg`"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Tabs Section -->
</template>

<script setup>
import SectionTitle from "./../Components/SectionTitle.vue";
const { usePage } = require("@inertiajs/inertia-vue3");
const { computed, ref } = require("@vue/runtime-core");
const asset = computed(() => usePage().props.value.asset);
let activeKey = ref(0);
const changeKey = (key) => {
  activeKey.value = key;
};
const tabs = [
  { name: "Modi sit est", title: "Modi sit est dela pireda nest" },
  { name: "Unde praesenti", title: "Unde praesenti mara setra le" },
  { name: "Pariatur explica", title: "Pariatur explica nitro dela" },
  { name: "Nostrum qui", title: "Nostrum qui dile node" },
];
</script>

<style>
</style>
