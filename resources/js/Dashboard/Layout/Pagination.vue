<template>
  <!-- <nav aria-label="Page navigation" v-if="links">
    <ul class="pagination mt-4">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav> -->
  <LaravelVuePagination
    :data="props.data"
    @pagination-change-page="goToPage"
  ></LaravelVuePagination>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import LaravelVuePagination from "laravel-vue-pagination";
const props = defineProps({
  data: {
    type: Object,
  },
});

const goToPage = (pageNumber) => {
  Inertia.visit(`${props.data.path}?page=${pageNumber}`);
};
</script>
