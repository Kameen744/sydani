<template>
  <div class="row">
    <div class="col-md-12">
      <div class="info-box">
        <i class="bx bx-map"></i>
        <h3>Our Address</h3>
        <p>{{ $page.props.contact.address }}</p>
      </div>
    </div>
    <div class="col-md-6">
      <div class="info-box mt-4">
        <i class="bx bx-envelope"></i>
        <h3>Email Us</h3>
        <p>{{ $page.props.contact.email }}</p>
      </div>
    </div>
    <div class="col-md-6">
      <div class="info-box mt-4">
        <i class="bx bx-phone-call"></i>
        <h3>Call Us</h3>
        <p>{{ $page.props.contact.numbers }}</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>

