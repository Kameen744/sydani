<template>
  <div class="row-container">
    <iframe
      id="map"
      src="https://maps.google.com/maps?q=sydani&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  </div>
</template>

<script setup>
defineProps({
  width: { type: Number },
  height: { type: Number },
});
</script>

<style scoped>
.row-container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: blue;
  overflow: hidden;
}

#map {
  flex-grow: 1;
  border: none;
  margin: 0;
  padding: 0;
}
</style>
