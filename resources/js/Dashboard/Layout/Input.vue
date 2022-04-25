<template>
  <div class="mb-3">
    <label class="form-label" :for="label.trim()">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      :class="classes"
      :id="label.trim()"
      :value="modelValue"
      :placeholder="label"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="error" class="mt-1 text-danger">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String },
  modelValue: { type: String },
  classes: { type: String },
  type: { type: String, default: "text" },
  error: { type: [Boolean, String], default: false },
});
</script>

<style>
</style>

