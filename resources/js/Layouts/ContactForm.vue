<template>
  <form
    class="contact-email-form"
    @submit.prevent="contactUsForm.post('/contact')"
  >
    <div class="row">
      <div class="col form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Your Name"
          required
          v-model="contactUsForm.name"
        />
        <div v-if="contactUsForm.errors.name" class="mt-1 text-danger">
          {{ contactUsForm.errors.name }}
        </div>
      </div>
      <div class="col form-group">
        <input
          type="email"
          class="form-control"
          placeholder="Your Email"
          required
          v-model="contactUsForm.email"
        />
        <div v-if="contactUsForm.errors.email" class="mt-1 text-danger">
          {{ contactUsForm.errors.email }}
        </div>
      </div>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Subject"
        required
        v-model="contactUsForm.subject"
      />
      <div v-if="contactUsForm.errors.subject" class="mt-1 text-danger">
        {{ contactUsForm.errors.subject }}
      </div>
    </div>
    <div class="form-group">
      <textarea
        class="form-control"
        rows="5"
        placeholder="Message"
        required
        v-model="contactUsForm.message"
      ></textarea>
      <div v-if="contactUsForm.errors.message" class="mt-1 text-danger">
        {{ contactUsForm.errors.message }}
      </div>
    </div>
    <div class="my-3">
      <div class="loading">Loading</div>
      <div class="error-message"></div>
      <div class="sent-message">Your message has been sent. Thank you!</div>
    </div>
    <div class="text-center">
      <button
        type="submit"
        :class="contactUsForm.recentlySuccessful ? successefull() : ''"
        :disabled="contactUsForm.processing"
      >
        {{
          contactUsForm.recentlySuccessful
            ? "Your message has been sent. Thank you!"
            : contactUsForm.processing
            ? "Loading..."
            : "Send Message"
        }}
      </button>
    </div>
  </form>
</template>

<script setup>
const { useForm } = require("@inertiajs/inertia-vue3");

const contactUsForm = useForm({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const successefull = () => {
  contactUsForm.name = "";
  contactUsForm.email = "";
  contactUsForm.subject = "";
  contactUsForm.message = "";
};
</script>

<style scoped>
.contact-email-form {
  height: inherit;
}
</style>
