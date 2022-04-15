<template>
  <header id="header" class="fixed-top d-flex align-items-center border-b">
    <div class="container d-flex align-items-center position-relative d-flex">
      <!-- <h1 class="logo me-auto">
        <Link href="/"
          ><b class="text-primary">Sydani</b><span> Group.</span></Link
        >
      </h1> -->
      <!-- Uncomment below if you prefer to use an image logo -->
      <Link href="/" class="logo position-absolute mr-auto">
        <img
          :src="`${asset}/assets/img/logo.svg`"
          class="img-fluid"
          alt="Sydani Group"
        />
      </Link>
      <nav
        id="navbar"
        class="navbar order-last order-lg-0 ms-auto"
        :class="mobileMode ? 'navbar-mobile' : ''"
      >
        <ul v-if="type == 'Home'">
          <li><Link class="nav-link scrollto" href="/">Home</Link></li>
          <li><Link class="nav-link scrollto" href="/about">About Us</Link></li>

          <li class="dropdown">
            <a href="/" @click.prevent="navExp"
              ><span>Industries</span> <i class="bi bi-chevron-down"></i
            ></a>
            <ul>
              <li class="dropdown">
                <Link class="nav-link scrollto" href="industries/healthcare">
                  <span>Health Care</span> <i class="bi bi-chevron-right"></i>
                </Link>
                <ul>
                  <li>
                    <Link
                      class="nav-link scrollto"
                      href="industries/healthcare#services"
                      >Services</Link
                    >
                  </li>
                  <li>
                    <Link
                      class="nav-link scrollto"
                      href="industries/healthcare#insight"
                      >Our Insight</Link
                    >
                  </li>
                  <li>
                    <Link class="nav-link scrollto" href="/contact"
                      >Contact</Link
                    >
                  </li>
                </ul>
              </li>
              <li><a href="#">Energy</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Agriculture</a></li>
              <li><a href="#">Climate Change</a></li>
              <li><a href="#">Human Capital Dev</a></li>
            </ul>
          </li>
          <li>
            <Link class="nav-link scrollto" href="/ourwork">Our Work</Link>
          </li>
          <li>
            <Link class="nav-link scrollto" href="/projects">Projects</Link>
          </li>
          <li><Link class="nav-link scrollto" href="/career">Career</Link></li>
          <li>
            <Link class="nav-link scrollto" href="/contact">Contact</Link>
          </li>
          <li>
            <a class="nav-link scrollto" href="https://gip.test" target="_blank"
              >SGIP</a
            >
          </li>
          <li><Link class="nav-link scrollto" href="/blog">Blog</Link></li>
        </ul>
        <ul v-else>
          <li><Link class="nav-link scrollto" href="/">Home</Link></li>
          <li>
            <Link
              class="nav-link scrollto"
              :href="`/industries/${$page.props.page}#services`"
              >Services</Link
            >
          </li>
          <li>
            <Link
              class="nav-link scrollto"
              :href="`/industries/${$page.props.page}#insight`"
              >Our Insight</Link
            >
          </li>
          <li>
            <Link class="nav-link scrollto" href="/contact">Contact</Link>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle" @click="toggleMobile"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
</template>
<script setup>
const { usePage, Link } = require("@inertiajs/inertia-vue3");
const { ref } = require("@vue/reactivity");
const { computed, onMounted } = require("@vue/runtime-core");
defineProps({
  type: {
    type: String,
    default: "Home",
  },
});
const scroll = ref("bg-transparent");
const asset = computed(() => usePage().props.value.asset);

let mobileMode = ref(false);

const toggleMobile = (e) => {
  mobileMode.value = !mobileMode.value;
  e.target.classList.toggle("bi-list");
  e.target.classList.toggle("bi-x");
};

const navExp = (e) => {
  if (mobileMode) {
    e.target.classList.toggle("dropdown-active");
    e.target.nextElementSibling.classList.toggle("dropdown-active");
  }
};
onMounted(() => {
  //   window.addEventListener("scroll", (e) => {
  //     if (window.scrollY > 80) {
  //       scroll.value = "";
  //     } else {
  //       scroll.value = "bg-transparent";
  //     }
  //   });
});
</script>
<style scoped>
.logo-bg {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 80px;
  padding-left: 20px;
  padding-right: 20px;
}
.border-b {
  border-bottom: 3px solid #0d2e64;
}
</style>
