<template>
  <div class="mb-3">
    <label class="form-label" :for="props.label.trim()">{{ label }}</label>
    <quill-editor
      :id="props.label.trim()"
      :options="editorOptins"
      :value="props.modelValue"
      :style="`height: ${height}px; padding: 1px`"
      @change="$emit('update:modelValue', $event.html)"
    />

    <div v-if="props.error" class="mt-1 text-danger">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  height: { type: Number, default: 100 },
  label: { type: String },
  modelValue: { type: String },
  error: { type: [Boolean, String], default: false },
});

const editorOptins = {
  placeholder: props.label,
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
      ["link", "image"],
    ],
  },
};
</script>

<style>
</style>
