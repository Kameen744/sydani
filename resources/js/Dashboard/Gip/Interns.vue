<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? internForm.patch(`/admin/intern/update/${edit}`)
                : internForm.post('/admin/intern/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <h4>Add New Intern</h4>
                <Input
                  label="Name"
                  v-model="internForm.name"
                  :error="internForm.errors.name"
                ></Input>

                <Input
                  label="Email"
                  v-model="internForm.email"
                  :error="internForm.errors.email"
                ></Input>

                <div class="mb-3">
                  <label class="form-label">Batch</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="internForm.batch_category_id"
                  >
                    <option selected disabled>Select Batch</option>

                    <option
                      v-for="(batch, key) in $page.props.batchCategories"
                      :key="key"
                      :value="batch.id"
                    >
                      {{ batch.batch }}
                    </option>
                  </select>
                  <div
                    v-if="internForm.errors.batch_category_id"
                    class="mt-1 text-danger"
                  >
                    {{ internForm.errors.batch_category_id }}
                  </div>
                </div>

                <hr />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="internForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="internForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        internForm.errors.image ? 'btn-danger' : 'btn-secondary'
                      "
                      @click.prevent="showUploadImage = !showUploadImage"
                      :disabled="internForm.processing"
                    >
                      {{ edit ? "Change Image" : "Upload Image" }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6" v-if="internForm.image != ''">
                <img
                  :src="internForm.image"
                  alt="img"
                  class="img-fluid wi-100"
                />
              </div>
              <Alert
                text="Successefully Saved!"
                :show="internForm.recentlySuccessful"
                :class="internForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Intern"
                subTitle="Successefully Saved!"
                type="default"
                :show="internForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="600"
            :height="600"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(intern, key) in $page.props.interns" :key="key">
              <td>{{ intern.name }}</td>
              <td>{{ intern.email }}</td>
              <td>{{ intern.batch }}</td>
              <td v-if="intern.profile_image">
                <Image
                  v-if="intern.profile_image.image"
                  :file="intern.profile_image.image"
                  folder="interns"
                  class="img-thumbnail"
                  width="50"
                ></Image>
              </td>
              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editIntern(intern)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="warning"
                    icon="stop"
                    @click="blockIntern(intern.id)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteIntern(intern.id)"
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
import Layout from "./../Layout/Layout.vue";
import UploadImage from "vue-image-crop-upload";
import { ref } from "@vue/reactivity";
import Input from "./../Layout/Input.vue";
import Toast from "./../Layout/Toast.vue";
import Alert from "./../Layout/Alert.vue";
import TextArea from "./../Layout/TextArea.vue";
import Spiner from "./../Layout/Spiner.vue";
import { Inertia } from "@inertiajs/inertia";
import Image from "./../../Layouts/Image.vue";
import Editor from "./../Layout/Editor.vue";
import Table from "./../Layout/Table.vue";
import ButtonIcon from "./../Layout/ButtonIcon.vue";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";

const tableHeaders = ["Name", "Email", "Batch", "Image", "Action"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  internForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const internForm = useForm({
  name: "",
  email: "",
  batch_category_id: "",
  image: "",
});

const successefull = () => {
  internForm.name = "";
  internForm.email = "";
  internForm.batch_category_id = "";
  internForm.image = "";
  edit.value = false;
};

const editIntern = (intern) => {
  edit.value = intern.id;
  internForm.name = intern.name;
  internForm.email = intern.email;
  internForm.batch_category_id = intern.batch_category_id;
};

const blockIntern = (id) => {};

const deleteIntern = (id) => {
  internForm.delete(`/admin/intern/delete/${id}`);
};
</script>

<style>
</style>
