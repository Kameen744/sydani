<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? financingForm.patch(`/admin/financing/update/${edit}`)
                : financingForm.post('/admin/financing/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <h4>Financing</h4>
                <Input
                  label="Title Text"
                  v-model="financingForm.title"
                  :error="financingForm.errors.title"
                ></Input>

                <Editor
                  label="Content"
                  v-model="financingForm.content"
                  :error="financingForm.errors.content"
                ></Editor>

                <hr />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="financingForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="financingForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        financingForm.errors.image
                          ? 'btn-danger'
                          : 'btn-secondary'
                      "
                      @click.prevent="showUploadImage = !showUploadImage"
                      :disabled="financingForm.processing"
                    >
                      {{ edit ? "Change Image" : "Upload Image" }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6" v-if="financingForm.image != ''">
                <img
                  :src="financingForm.image"
                  alt="img"
                  class="img-fluid wi-100"
                />
              </div>
              <Alert
                text="Successefully Saved!"
                :show="financingForm.recentlySuccessful"
                :class="financingForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Financing"
                content="Successefully Saved!"
                type="default"
                :show="financingForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="280"
            :height="150"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(financing, key) in $page.props.financings" :key="key">
              <td v-html="financing.title"></td>
              <td v-html="financing.content"></td>
              <td>
                <Image
                  :file="financing.image"
                  folder="financings"
                  class="img-thumbnail"
                  width="150"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editFinancing(financing)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteFinancing(financing.id)"
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

const tableHeaders = ["Title", "Content", "Image", "Action"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  financingForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const financingForm = useForm({
  title: "",
  content: "",
  image: "",
});

const successefull = () => {
  financingForm.title = "";
  financingForm.content = "";
  financingForm.image = "";
  edit.value = false;
};

const editFinancing = (financing) => {
  edit.value = financing.id;
  financingForm.title = financing.title;
  financingForm.content = financing.content;
};

const deleteFinancing = (id) => {
  financingForm.delete(`/admin/financing/delete/${id}`);
};
</script>

<style>
</style>
