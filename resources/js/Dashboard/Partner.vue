<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? partnerForm.patch(`/admin/partner/update/${edit}`)
                : partnerForm.post('/admin/partner/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <h4>Add New Partner</h4>
                <Input
                  label="Partner Name"
                  :error="partnerForm.errors.name"
                  v-model="partnerForm.name"
                />
                <hr />
                <img
                  v-if="partnerForm.image != ''"
                  :src="partnerForm.image"
                  alt="img"
                  class="img-fluid mb-3"
                />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="partnerForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="partnerForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        partnerForm.errors.image
                          ? 'btn-danger'
                          : 'btn-secondary'
                      "
                      @click.prevent="showUploadImage = !showUploadImage"
                      :disabled="partnerForm.processing"
                    >
                      {{ edit ? "Change Image" : "Upload Image" }}
                    </button>
                  </div>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="partnerForm.recentlySuccessful"
                :class="partnerForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Partner"
                subTitle="Successefully Saved!"
                type="default"
                :show="partnerForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="250"
            :height="110"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(partner, key) in $page.props.partners" :key="key">
              <td v-html="partner.name"></td>
              <td>
                <Image
                  :file="partner.image"
                  folder="partners"
                  class="img-thumbnail"
                  width="150"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editCarousel(partner)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteCarousel(partner.id)"
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

const tableHeaders = ["Name", "Image", "Action"];
const showUploadImage = ref(false);

const cropSuccess = (imgDataUrl, field) => {
  partnerForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const partnerForm = useForm({
  name: "",
  image: "",
});

const successefull = () => {
  partnerForm.name = "";
  partnerForm.image = "";
  edit.value = false;
};

const editCarousel = (partner) => {
  edit.value = partner.id;
  partnerForm.name = partner.name;
};

const deleteCarousel = (id) => {
  partnerForm.delete(`/admin/partner/delete/${id}`);
};
</script>

<style>
</style>
