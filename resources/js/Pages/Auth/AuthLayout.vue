<template>
  <Head>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />

    <!-- Icons. Uncomment required icon fonts -->
    <link
      rel="stylesheet"
      :href="`${$page.props.dashAsset}/vendor/fonts/boxicons.css`"
    />

    <!-- Core CSS -->
    <link
      rel="stylesheet"
      :href="`${$page.props.dashAsset}/vendor/css/core.css`"
      class="template-customizer-core-css"
    />
    <link
      rel="stylesheet"
      :href="`${$page.props.dashAsset}/vendor/css/theme-default.css`"
      class="template-customizer-theme-css"
    />
    <link rel="stylesheet" :href="`${$page.props.dashAsset}/css/demo.css`" />

    <!-- Vendors CSS -->
    <link
      rel="stylesheet"
      :href="`${$page.props.dashAsset}/vendor/libs/perfect-scrollbar/perfect-scrollbar.css`"
    />

    <!-- Page CSS -->
    <!-- Page -->
    <link
      rel="stylesheet"
      :href="`${$page.props.dashAsset}/vendor/css/pages/page-auth.css`"
    />
  </Head>
  <div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <!-- Register -->
        <div class="card">
          <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center">
              <a href="index.html" class="app-brand-link gap-2">
                <span class="app-brand-logo demo"> </span>
                <span class="app-brand-text demo text-body fw-bolder"
                  >Sydani-Group</span
                >
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
</script>

<style>
</style>
