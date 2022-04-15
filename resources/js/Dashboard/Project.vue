<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? projectForm.patch(`project/update/${edit}`)
                : projectForm.post('project/store')
            "
          >
            <div class="row">
              <div class="col-md-12">
                <h4>Add New Project</h4>
                <div class="row">
                  <div class="col-md-6">
                    <Editor
                      label="Project Title"
                      v-model="projectForm.title"
                      :error="projectForm.errors.title"
                    ></Editor>
                  </div>
                  <div class="col-md-6">
                    <Editor
                      label="Background"
                      v-model="projectForm.background"
                      :error="projectForm.errors.background"
                    ></Editor>
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
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="projectForm.processing"
                  >
                    {{ edit ? "Update " : "Create " }}
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
                    {{ edit ? "Change Image" : "Upload Image" }}
                  </button>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="projectForm.recentlySuccessful"
              ></Alert>
              <Toast
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

          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(project, key) in $page.props.projects" :key="key">
              <td v-html="project.title"></td>
              <td v-html="project.subtitle"></td>
              <td>
                <Image
                  :file="project.image"
                  folder="projects"
                  class="img-thumbnail"
                  width="150"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editProject(project)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteProject(project.id)"
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

const tableHeaders = ["Title", "Background", "Image", "Action"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  projectForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const projectForm = useForm({
  title: "",
  background: "",
  content: "",
  image: "",
});

const editProject = (project) => {
  edit.value = project.id;
  projectForm.title = project.title;
  projectForm.background = project.background;
  projectForm.content = project.content;
};

const deleteProject = (id) => {
  projectForm.delete(`project/delete/${id}`);
};

onMounted(() => {
  if (usePage().props.value.project) {
    console.log(usePage().props.value.project);
  }
});
</script>

<style>
</style>
