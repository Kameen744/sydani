<template>
  <!-- ======= Team Section ======= -->
  <section id="team" class="team section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Team</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        </p>
      </div>

      <div class="row">
        <div
          class="col-lg-3 col-md-6 d-flex align-items-stretch member-hover my-3"
          v-for="(member, key) in members"
          :key="key"
        >
          <div class="box">
            <div class="body">
              <div class="imgContainer">
                <img
                  :src="`${asset}/assets/img/team/team-${key + 1}.jpg`"
                  :alt="member.name"
                />
              </div>
              <div class="member-info">
                <h4>{{ member.name }}</h4>
                <span>{{ member.title }}</span>
              </div>
              <div
                class="
                  content
                  d-flex
                  flex-column
                  align-items-center
                  justify-content-center
                "
              >
                <div class="back-content">
                  <h3 class="text-white fs-5">{{ member.name }}</h3>
                  <p class="fs-6 text-white">
                    {{ member.bio }}
                  </p>
                  <div class="social d-flex justify-content-evenly">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Team Section -->
</template>

<script setup>
const { usePage } = require("@inertiajs/inertia-vue3");
const { computed } = require("@vue/runtime-core");

const asset = computed(() => usePage().props.value.asset);
const members = [
  {
    name: "John Doe",
    title: "Position",
    bio: `Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          Sit sint consectetur velit.`,
  },
  {
    name: "John Doe",
    title: "Position",
    bio: `Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          Sit sint consectetur velit.`,
  },
  {
    name: "John Doe",
    title: "Position",
    bio: `Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          Sit sint consectetur velit.`,
  },
  {
    name: "John Doe",
    title: "Position",
    bio: `Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          Sit sint consectetur velit.`,
  },
];
</script>

<style scoped>
.container {
  transform-style: preserve-3d;
}

.container .box {
  position: relative;
  width: 100%;
  /* height: 100%; */
  height: 350px;
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
}

.container .box .body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 0.9s ease;
}

.container .box .body .imgContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.container .box .body .member-info {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(250, 250, 250, 0.8);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.container .box .body .imgContainer img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.container .box .body .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(162, 161, 161);
  border-radius: 5px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
}

.container .member-hover:hover .body {
  transform: rotateY(180deg);
}
/* .container .box .body .content .back-content {
  max-height: 100%;
  overflow: hidden;
} */
.container .box .body .content div {
  transform-style: preserve-3d;
  padding: 20px;
  background: linear-gradient(45deg, midnightblue, grey);
  transform: translateZ(70px);
}

.container .box .body .content div h3 {
  letter-spacing: 1px;
}
</style>
