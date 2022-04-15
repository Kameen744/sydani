<template>
  <DashboardHeader></DashboardHeader>
  <div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <!-- Register -->
        <div class="card">
          <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center">
              <a href="" @click.prevent="" class="app-brand-link gap-2">
                <span class="app-brand-logo demo">
                  <img
                    :src="`${$page.props.asset}/assets/img/logo.svg`"
                    class="img-fluid"
                    alt="Sydani Group"
                    style="height: 80px"
                  />
                </span>
              </a>
            </div>
            <!-- /Logo -->
            <slot></slot>
            <!-- <p class="text-center">
              <span>New on our platform?</span>
              <a href="auth-register-basic.html">
                <span>Create an account</span>
              </a>
            </p> -->
          </div>
        </div>
        <!-- /Register -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import DashboardHeader from "./../Layout/DashboardHeader.vue";
</script>

<style>
</style>
