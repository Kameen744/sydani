<template>
  <AuthLayout>
    <h4 class="mb-2 text-center">Admin Login</h4>

    <form
      id="formAuthentication"
      class="mb-3"
      @submit.prevent="form.post('/login')"
    >
      <div class="mb-3">
        <label for="email" class="form-label">Email or Username</label>
        <input
          type="text"
          class="form-control"
          v-model="form.email"
          name="email-username"
          placeholder="Enter your email or username"
          autofocus=""
        />
        <div class="text-danger" v-if="form.errors.email">
          {{ form.errors.email }}
        </div>
      </div>
      <div class="mb-3 form-password-toggle">
        <div class="d-flex justify-content-between">
          <label class="form-label" for="password">Password</label>
          <Link href="/forgot-password">
            <small>Forgot Password?</small>
          </Link>
        </div>
        <div class="input-group input-group-merge">
          <input
            type="password"
            v-model="form.password"
            class="form-control"
            name="password"
            placeholder="············"
            aria-describedby="password"
          />
          <span class="input-group-text cursor-pointer"
            ><i class="bx bx-hide"></i
          ></span>
          <div class="text-danger" v-if="form.errors.password">
            {{ form.errors.password }}
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="form.remember"
          />
          <label class="form-check-label" for="remember-me">
            Remember Me
          </label>
        </div>
      </div>
      <div class="mb-3">
        <button
          class="btn btn-primary d-grid w-100"
          type="submit"
          :disabled="form.processing"
        >
          Sign in
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { reactive } from "@vue/reactivity";
import AuthLayout from "./AuthLayout.vue";

const form = useForm({
  email: null,
  password: null,
  remember: false,
});
</script>

<style scoped>
</style>
