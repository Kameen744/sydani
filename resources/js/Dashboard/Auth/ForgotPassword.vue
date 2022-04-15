<template>
  <AuthLayout>
    <h4 class="mb-2">Forgot Password? 🔒</h4>
    <p class="mb-4">
      Enter your email and we'll send you instructions to reset your password
    </p>
    <form
      id="formAuthentication"
      class="mb-3"
      @submit.prevent="form.post('/forgot-password')"
    >
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="text"
          class="form-control"
          v-model="form.email"
          name="email"
          placeholder="Enter your email"
          autofocus
        />
      </div>
      <button class="btn btn-primary d-grid w-100">Send Reset Link</button>
    </form>
    <div class="text-center">
      <Link
        href="/login"
        class="d-flex align-items-center justify-content-center"
      >
        <i class="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
        Back to login
      </Link>
    </div>
  </AuthLayout>
</template>

<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import AuthLayout from "./AuthLayout.vue";

const form = useForm({
  email: null,
});
</script>

<style>
</style>
