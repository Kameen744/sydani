<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-12 d-flex justify-content-between">
              <div class="btn btn-primary" @click="projectList">
                Projects List
              </div>
              <h4>Add New Project</h4>
            </div>
            <div class="col-12">
              <hr />
            </div>
          </div>
          <form
            @submit.prevent="
              editForm
                ? projectForm.patch(`/admin/project/update/${editForm.id}`)
                : projectForm.post('/admin/project/store')
            "
          >
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <Input
                      label="Project Title"
                      v-model="projectForm.title"
                      :error="projectForm.errors.title"
                    ></Input>
                  </div>
                  <div class="col-md-6">
                    <TextArea
                      label="Background"
                      v-model="projectForm.background"
                      :error="projectForm.errors.background"
                    ></TextArea>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <Editor
                      label="Content"
                      :height="300"
                      v-model="projectForm.content"
                      :error="projectForm.errors.content"
                    ></Editor>
                  </div>
                  <div
                    class="col-md-2 mt-auto mb-auto"
                    v-if="projectForm.image != ''"
                  >
                    <img :src="projectForm.image" alt="img" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <hr />
                </div>
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="projectForm.processing"
                  >
                    {{ editForm ? "Update " : "Create " }}
                    <Spiner :show="projectForm.processing" />
                  </button>
                </div>
                <div class="col-auto">
                  <button
                    class="btn"
                    :class="
                      projectForm.errors.image ? 'btn-danger' : 'btn-secondary'
                    "
                    @click.prevent="showUploadImage = !showUploadImage"
                    :disabled="projectForm.processing"
                  >
                    {{ editForm ? "Change Image" : "Upload Image" }}
                  </button>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="projectForm.recentlySuccessful"
                :class="projectForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                class="bg-primary"
                title="Project"
                subTitle="Successefully Saved!"
                type="default"
                :show="projectForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="1900"
            :height="600"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>
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

const props = defineProps({
  editForm: { type: [Boolean, Object] },
  default: false,
});

const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  projectForm.image = imgDataUrl;
};

const imgDataUrl = ref("");

const projectForm = useForm({
  title: "",
  background: "",
  content: "",
  image: "",
});

const successefull = () => {
  projectForm.title = "";
  projectForm.background = "";
  projectForm.content = "";
  projectForm.image = "";
  edit.value = false;
};

const projectList = () => {
  Inertia.visit("/admin/project/list");
};

onMounted(() => {
  if (props.editForm) {
    projectForm.title = props.editForm.title;
    projectForm.background = props.editForm.background;
    projectForm.content = props.editForm.content;
    projectForm.image = "";
  }
});
</script>

<style>
</style>
