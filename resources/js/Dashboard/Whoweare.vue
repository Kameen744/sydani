<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? whoweareForm.patch(`/admin/whoweare/update/${edit}`)
                : whoweareForm.post('/admin/whoweare/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <h4>Who We Are</h4>
                <Editor
                  label="Content"
                  v-model="whoweareForm.content"
                  :height="300"
                  :error="whoweareForm.errors.content"
                ></Editor>

                <hr />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="whoweareForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="whoweareForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        whoweareForm.errors.image
                          ? 'btn-danger'
                          : 'btn-secondary'
                      "
                      @click.prevent="showUploadImage = !showUploadImage"
                      :disabled="whoweareForm.processing"
                    >
                      {{ edit ? "Change Image" : "Upload Image" }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6" v-if="whoweareForm.image != ''">
                <img
                  :src="whoweareForm.image"
                  alt="img"
                  class="img-fluid wi-100"
                />
              </div>
              <Alert
                text="Successefully Saved!"
                :show="whoweareForm.recentlySuccessful"
                :class="whoweareForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Whoweare"
                subTitle="Successefully Saved!"
                type="default"
                :show="whoweareForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="700"
            :height="500"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr>
              <td v-html="$page.props.whoweare.content"></td>
              <td>
                <Image
                  :file="$page.props.whoweare.image"
                  folder="whoweare"
                  class="img-thumbnail"
                  width="150"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editWhoweare($page.props.whoweare)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteWhoweare($page.props.whoweare.id)"
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

const tableHeaders = ["content", "Image", "Action"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  whoweareForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const whoweareForm = useForm({
  content: "",
  image: "",
});

const successefull = () => {
  whoweareForm.content = "";
  whoweareForm.image = "";
  edit.value = false;
};

const coreValueForm = useForm({
  value: "",
});

const editWhoweare = (whoweare) => {
  edit.value = whoweare.id;
  whoweareForm.content = whoweare.content;
};

const deleteWhoweare = (id) => {
  whoweareForm.delete(`/admin/whoweare/delete/${id}`);
};
</script>

<style>
</style>
