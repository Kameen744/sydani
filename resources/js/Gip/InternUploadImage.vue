<template>
  <GipLayout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <h4>Upload Images</h4>
          <form
            @submit.prevent="
              edit
                ? imageForm.patch(`/sgip/upload-image/update/${edit}`)
                : imageForm.post('/sgip/upload-image/store')
            "
          >
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <Input
                      label="Title Text"
                      v-model="imageForm.title"
                      :error="imageForm.errors.title"
                    ></Input>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <Editor
                  label="Content"
                  v-model="imageForm.content"
                  :error="imageForm.errors.content"
                  :height="400"
                ></Editor>

                <hr />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="imageForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="imageForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        imageForm.errors.image ? 'btn-danger' : 'btn-secondary'
                      "
                      @click.prevent="showUploadImage = !showUploadImage"
                      :disabled="imageForm.processing"
                    >
                      {{ edit ? "Change Image" : "Upload Image" }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6 my-3" v-if="imageForm.image != ''">
                <img
                  :src="imageForm.image"
                  alt="img"
                  class="img-fluid wi-100"
                />
              </div>
              <Alert
                text="Successefully Saved!"
                :show="imageForm.recentlySuccessful"
                :class="imageForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Image"
                subTitle="Successefully Saved!"
                type="default"
                :show="imageForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="800"
            :height="600"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(image, key) in $page.props.images" :key="key">
              <td v-html="image.title"></td>
              <td v-html="image.industry_slug"></td>
              <td v-html="image.content.substring(0, 300)"></td>
              <td>
                <Image
                  :file="image.image"
                  folder="images"
                  class="img-thumbnail"
                  width="150"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editImage(image)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteImage(image.id)"
                  ></ButtonIcon>
                </div>
              </td>
            </tr>
          </Table>
        </div>
      </div>
    </div>
  </GipLayout>
</template>

<script setup>
import { Link, useForm, usePage } from "@inertiajs/inertia-vue3";
import GipLayout from "./GipLayout.vue";
// import Layout from "./../Layout/Layout.vue";
// import UploadImage from "vue-image-crop-upload";
// import { ref } from "@vue/reactivity";
// import Input from "./../Layout/Input.vue";
// import Toast from "./../Layout/Toast.vue";
// import Alert from "./../Layout/Alert.vue";
// import TextArea from "./../Layout/TextArea.vue";
// import Spiner from "./../Layout/Spiner.vue";
// import { Inertia } from "@inertiajs/inertia";
// import Image from "./../Layouts/Image.vue";
// import Editor from "./../Layout/Editor.vue";
// import Table from "./../Layout/Table.vue";
// import ButtonIcon from "./../Layout/ButtonIcon.vue";
import { onMounted } from "@vue/runtime-core";

const tableHeaders = ["Title", "Industry", "Content", "Image", "Action"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  imageForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const imageForm = useForm({
  title: "",
  industry_slug: "",
  content: "",
  image: "",
});

const successefull = () => {
  imageForm.title = "";
  imageForm.industry_slug = "";
  imageForm.content = "";
  imageForm.image = "";
  edit.value = false;
};

const editImage = (image) => {
  edit.value = image.id;
  imageForm.title = image.title;
  imageForm.industry_slug = image.industry_slug;
  imageForm.content = image.content;
};

const deleteImage = (id) => {
  imageForm.delete(`/admin/image/delete/${id}`);
};
</script>

<style>
</style>
