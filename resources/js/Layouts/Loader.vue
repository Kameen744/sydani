<template>
  <div class="loader-container" v-if="show">
    <div id="wifi-loader">
      <svg class="circle-outer" viewBox="0 0 86 86">
        <circle class="back" cx="43" cy="43" r="40"></circle>
        <circle class="front" cx="43" cy="43" r="40"></circle>
        <circle class="new" cx="43" cy="43" r="40"></circle>
      </svg>
      <svg class="circle-middle" viewBox="0 0 60 60">
        <circle class="back" cx="30" cy="30" r="27"></circle>
        <circle class="front" cx="30" cy="30" r="27"></circle>
      </svg>
      <svg class="circle-inner" viewBox="0 0 34 34">
        <circle class="back" cx="17" cy="17" r="14"></circle>
        <circle class="front" cx="17" cy="17" r="14"></circle>
      </svg>
      <div class="text" data-text="Loading"></div>
    </div>
  </div>
</template>

<script setup>
const { Inertia } = require("@inertiajs/inertia");
const { ref } = require("@vue/reactivity");

const show = ref(false);
Inertia.on("start", () => {
  show.value = true;
});
Inertia.on("finish", () => {
  show.value = false;
});
</script>

<style scoped>
@keyframes backgroundColorPalette {
  0% {
    background: darkgray;
  }
  50% {
    background: darkorange;
  }
  100% {
    background: white;
  }
}
.loader-container {
  animation-name: backgroundColorPalette;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  position: absolute;
  z-index: 99999;
  /* border-top-right-radius: 45px;
  border-top-left-radius: 45px; */
  border-radius: 50px/20px;
  top: 50%;
  left: 50%;
  height: fit-content;
  padding: 20px;
  padding-bottom: 50px;
  position: fixed;
}
#wifi-loader {
  --background: #62abff;
  --front-color: midnightblue;
  --back-color: darkOrange;
  --text-color: #414856;
  width: 64px;
  height: 64px;
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
#wifi-loader svg {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
#wifi-loader svg circle {
  position: absolute;
  fill: none;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(-100deg);
  transform-origin: center;
}
#wifi-loader svg circle.back {
  stroke: var(--back-color);
}
#wifi-loader svg circle.front {
  stroke: var(--front-color);
}
#wifi-loader svg.circle-outer {
  height: 86px;
  width: 86px;
}
#wifi-loader svg.circle-outer circle {
  stroke-dasharray: 62.75 188.25;
}
#wifi-loader svg.circle-outer circle.back {
  animation: circle-outer 1.8s ease infinite 0.3s;
}
#wifi-loader svg.circle-outer circle.front {
  animation: circle-outer 1.8s ease infinite 0.15s;
}
#wifi-loader svg.circle-middle {
  height: 60px;
  width: 60px;
}
#wifi-loader svg.circle-middle circle {
  stroke-dasharray: 42.5 127.5;
}
#wifi-loader svg.circle-middle circle.back {
  animation: circle-middle 1.8s ease infinite 0.25s;
}
#wifi-loader svg.circle-middle circle.front {
  animation: circle-middle 1.8s ease infinite 0.1s;
}
#wifi-loader svg.circle-inner {
  height: 34px;
  width: 34px;
}
#wifi-loader svg.circle-inner circle {
  stroke-dasharray: 22 66;
}
#wifi-loader svg.circle-inner circle.back {
  animation: circle-inner 1.8s ease infinite 0.2s;
}
#wifi-loader svg.circle-inner circle.front {
  animation: circle-inner 1.8s ease infinite 0.05s;
}
#wifi-loader .text {
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: lowercase;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.2px;
}
#wifi-loader .text::before,
#wifi-loader .text::after {
  content: attr(data-text);
}
#wifi-loader .text::before {
  color: var(--text-color);
}
#wifi-loader .text::after {
  color: var(--front-color);
  animation: text-animation 3.6s ease infinite;
  position: absolute;
  left: 0;
}
@keyframes circle-outer {
  0% {
    stroke-dashoffset: 25;
  }
  25% {
    stroke-dashoffset: 0;
  }
  65% {
    stroke-dashoffset: 301;
  }
  80% {
    stroke-dashoffset: 276;
  }
  100% {
    stroke-dashoffset: 276;
  }
}
@keyframes circle-middle {
  0% {
    stroke-dashoffset: 17;
  }
  25% {
    stroke-dashoffset: 0;
  }
  65% {
    stroke-dashoffset: 204;
  }
  80% {
    stroke-dashoffset: 187;
  }
  100% {
    stroke-dashoffset: 187;
  }
}
@keyframes circle-inner {
  0% {
    stroke-dashoffset: 9;
  }
  25% {
    stroke-dashoffset: 0;
  }
  65% {
    stroke-dashoffset: 106;
  }
  80% {
    stroke-dashoffset: 97;
  }
  100% {
    stroke-dashoffset: 97;
  }
}
@keyframes text-animation {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  50% {
    clip-path: inset(0);
  }
  100% {
    clip-path: inset(0 0 0 100%);
  }
}
</style>
