<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? carouselForm.patch(`/admin/carousel/update/${edit}`)
                : carouselForm.post('/admin/carousel/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <h4>Add New Carousel</h4>
                <Editor
                  label="Title Text"
                  v-model="carouselForm.title"
                  :error="carouselForm.errors.title"
                ></Editor>

                <Editor
                  label="Sub Text"
                  v-model="carouselForm.subTitle"
                  :error="carouselForm.errors.subTitle"
                ></Editor>

                <hr />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="carouselForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="carouselForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        carouselForm.errors.image
                          ? 'btn-danger'
                          : 'btn-secondary'
                      "
                      @click.prevent="showUploadImage = !showUploadImage"
                      :disabled="carouselForm.processing"
                    >
                      {{ edit ? "Change Image" : "Upload Image" }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6" v-if="carouselForm.image != ''">
                <img
                  :src="carouselForm.image"
                  alt="img"
                  class="img-fluid wi-100"
                />
              </div>
              <Alert
                text="Successefully Saved!"
                :show="carouselForm.recentlySuccessful"
                :class="carouselForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Carousel"
                subTitle="Successefully Saved!"
                type="default"
                :show="carouselForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="1800"
            :height="900"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(carousel, key) in $page.props.carousels" :key="key">
              <td v-html="carousel.title"></td>
              <td v-html="carousel.subtitle"></td>
              <td>
                <Image
                  :file="carousel.image"
                  folder="carousels"
                  class="img-thumbnail"
                  width="150"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editCarousel(carousel)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteCarousel(carousel.id)"
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

const tableHeaders = ["Title", "Sub Title", "Image", "Action"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  carouselForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const carouselForm = useForm({
  title: "",
  subTitle: "",
  image: "",
});

const successefull = () => {
  carouselForm.title = "";
  carouselForm.subTitle = "";
  carouselForm.image = "";
  edit.value = false;
};

const editCarousel = (carousel) => {
  edit.value = carousel.id;
  carouselForm.title = carousel.title;
  carouselForm.subTitle = carousel.subtitle;
};

const deleteCarousel = (id) => {
  carouselForm.delete(`/admin/carousel/delete/${id}`);
};
</script>

<style>
</style>
