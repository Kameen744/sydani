<script setup>
const { useForm, Link } = require("@inertiajs/inertia-vue3");

const newsLetterForm = useForm({
  email: "",
});
const date = new Date();
</script>

<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Sydani <span> Group</span></h3>
            <p>
              {{ $page.props.contact.address }}<br />
              <strong>Phone:</strong> {{ $page.props.contact.numbers }}<br />
              <strong>Email:</strong> {{ $page.props.contact.email }}<br />
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i> <Link href="/">Home</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Industries</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i>
                <Link href="/industries/healthcare">Health</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <Link href="/industries/energy">Energy</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <Link href="/industries/education">Education</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <Link href="/industries/agriculture">Agriculture</Link>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>

            <form
              @submit.prevent="newsLetterForm.post('/newsletter/subscribe')"
            >
              <input
                type="email"
                name="email"
                aria-label="Email Address"
                v-model="newsLetterForm.email"
              /><input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">
      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          Copyright {{ date.getFullYear() }} &copy;
          <strong><span> Sydani </span> Group</strong>
        </div>
      </div>
      <div class="social-links text-center text-md-end pt-3 pt-md-0">
        <a href="#" class="twitter" aria-label="Link to Twitter handle"
          ><i class="bx bxl-twitter"></i
        ></a>
        <a href="#" class="facebook" aria-label="Link to facebook handle"
          ><i class="bx bxl-facebook"></i
        ></a>
        <a href="#" class="instagram" aria-label="Link to instagram handle"
          ><i class="bx bxl-instagram"></i
        ></a>
        <a href="#" class="google-plus" aria-label="Link to googlePlus handle"
          ><i class="bx bxl-skype"></i
        ></a>
        <a href="#" class="linkedin" aria-label="Link to linkedIn handle"
          ><i class="bx bxl-linkedin"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<style>
</style>
