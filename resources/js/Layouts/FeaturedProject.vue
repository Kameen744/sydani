<template>
  <section id="services" class="services section-bg">
    <div class="container" data-aos="fade-up">
      <SectionTitle
        title="Featured Project"
        subtitle="Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea."
      ></SectionTitle>
      <div class="row">
        <div
          class="col-md-6 mt-4 mt-md-0"
          v-for="(project, key) in $page.props.projects"
          :key="key"
        >
          <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
            <i class="bi bi-check2-square"></i>
            <h2>
              <Link :href="`projects/${project.slug}`">{{
                project.title.substring(0, 50)
              }}</Link>
            </h2>
            <p v-html="project.background.substring(0, 300) + ' ...'"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import SectionTitle from "./../Components/SectionTitle.vue";
</script>

<style scoped>
.icon-box h2 a {
  font-size: 17px;
  font-weight: 700;
  /* margin: 0 10px 0; */
  padding: 0 30px 0;
  align-self: center;
  color: white;
}
</style>
