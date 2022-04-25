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
        <li
          class="nav-item col-3"
          v-for="(insight, key) in $page.props.insights"
          :key="key"
        >
          <a
            class="nav-link"
            :class="activeKey == key ? 'active show' : ''"
            :href="`/insights/${insight.key}`"
            aria-label="Link to featured insight"
            @click.prevent="changeKey(key)"
            data-bs-toggle="tab"
            :data-bs-target="`#tab-${key}`"
          >
            <i class="bx bi-blockquote-right"></i>
            <h4 class="d-none d-lg-block capitalize">
              {{ insight.title.substring(0, 35).toLowerCase() + " .." }}
            </h4>
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <div
          class="tab-pane"
          :class="activeKey == key ? 'active show' : ''"
          :id="`tab-${key}`"
          v-for="(insight, key) in $page.props.insights"
          :key="key"
        >
          <div class="row">
            <div
              class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 class="capitalize">
                {{ insight.title }}
              </h3>
              <p v-html="insight.content.substring(0, 1000)"></p>
              <Link
                :href="`/insights/${insight.slug}`"
                class="btn btn-action btn-sm"
                >More...</Link
              >
            </div>
            <div
              class="col-lg-6 order-1 order-lg-2 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                :src="`${asset}/assets/img/insights/${insight.image}`"
                :alt="insight.image"
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
const { usePage, Link } = require("@inertiajs/inertia-vue3");
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

<style scoped>
.capitalize {
  text-transform: capitalize;
}
</style>
