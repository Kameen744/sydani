<template>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th v-for="(tHead, key) in tHeads" :key="key">
            {{ tHead }}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  tHeads: { type: Array },
});
</script>

<style>
</style>
