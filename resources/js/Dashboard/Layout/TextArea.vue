<template>
  <div class="mb-3">
    <label class="form-label" :for="label.trim()">{{ label }}</label>
    <textarea
      class="form-control"
      :value="modelValue"
      :placeholder="label"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="classes"
      :id="label.trim()"
      :rows="rows"
    ></textarea>

    <div v-if="error" class="mt-1 text-danger">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  rows: { type: Number, default: 3 },
  label: { type: String },
  modelValue: { type: String },
  classes: { type: String },
  error: { type: [Boolean, String], default: false },
});
</script>

<style>
</style>

