<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? contactForm.patch(`/admin/contact/update/${edit}`, {
                    preserveState: false,
                  })
                : contactForm.post('/admin/contact/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <h4>Add New Contact</h4>
                <TextArea
                  label="Address"
                  v-model="contactForm.address"
                  :error="contactForm.errors.address"
                ></TextArea>

                <Input
                  label="Email"
                  type="email"
                  v-model="contactForm.email"
                  :error="contactForm.errors.email"
                ></Input>

                <Input
                  label="Numbers"
                  v-model="contactForm.numbers"
                  :error="contactForm.errors.numbers"
                ></Input>

                <hr />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="contactForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="contactForm.processing" />
                    </button>
                  </div>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="contactForm.recentlySuccessful"
                :class="contactForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Contact"
                subTitle="Successefully Saved!"
                type="default"
                :show="contactForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(contact, key) in $page.props.contacts" :key="key">
              <td v-html="contact.address"></td>
              <td v-html="contact.email"></td>
              <td v-html="contact.numbers"></td>
              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editContact(contact)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteContact(contact.id)"
                  ></ButtonIcon>
                </div>
              </td>
            </tr>
          </Table>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { Link, useForm, usePage } from "@inertiajs/inertia-vue3";
import Layout from "./Layout/Layout.vue";
import UploadImage from "vue-image-crop-upload";
import { ref } from "@vue/reactivity";
import Input from "./Layout/Input.vue";
import Toast from "./Layout/Toast.vue";
import Alert from "./Layout/Alert.vue";
import TextArea from "./Layout/TextArea.vue";
import Spiner from "./Layout/Spiner.vue";
import { Inertia } from "@inertiajs/inertia";
import Image from "./../Layouts/Image.vue";
import Editor from "./Layout/Editor.vue";
import Table from "./Layout/Table.vue";
import ButtonIcon from "./Layout/ButtonIcon.vue";
import { onMounted } from "@vue/runtime-core";

const tableHeaders = ["Address", "Email", "Number", "Action"];
const showUploadImage = ref(false);

const imgDataUrl = ref("");
const edit = ref(false);

const contactForm = useForm({
  address: "",
  email: "",
  numbers: "",
});

const successefull = () => {
  contactForm.address = "";
  contactForm.email = "";
  contactForm.numbers = "";
  edit.value = false;
};

const editContact = (contact) => {
  edit.value = contact.id;
  contactForm.address = contact.address;
  contactForm.email = contact.email;
  contactForm.numbers = contact.numbers;
};

const deleteContact = (id) => {
  contactForm.delete(`/admin/contact/delete/${id}`);
};
</script>

<style>
</style>
