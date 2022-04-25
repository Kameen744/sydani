<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? visionmissionForm.patch(`/admin/visionmission/update/${edit}`)
                : visionmissionForm.post('/admin/visionmission/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <h4>Add New VisionMission</h4>
                <Editor
                  label="Vision"
                  v-model="visionmissionForm.vision"
                  :error="visionmissionForm.errors.vision"
                ></Editor>

                <Editor
                  label="Mission"
                  v-model="visionmissionForm.mission"
                  :error="visionmissionForm.errors.mission"
                ></Editor>

                <hr />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="visionmissionForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="visionmissionForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        visionmissionForm.errors.image
                          ? 'btn-danger'
                          : 'btn-secondary'
                      "
                      @click.prevent="showUploadImage = !showUploadImage"
                      :disabled="visionmissionForm.processing"
                    >
                      {{ edit ? "Change Image" : "Upload Image" }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6" v-if="visionmissionForm.image != ''">
                <img
                  :src="visionmissionForm.image"
                  alt="img"
                  class="img-fluid wi-100"
                />
              </div>
              <Alert
                text="Successefully Saved!"
                :show="visionmissionForm.recentlySuccessful"
                :class="
                  visionmissionForm.recentlySuccessful ? successefull() : ''
                "
              ></Alert>
              <Toast
                title="VisionMission"
                subTitle="Successefully Saved!"
                type="default"
                :show="visionmissionForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="700"
            :height="480"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr>
              <td v-html="$page.props.visionmission.vision"></td>
              <td v-html="$page.props.visionmission.mission"></td>
              <td>
                <Image
                  :file="$page.props.visionmission.image"
                  folder="visionmission"
                  class="img-thumbnail"
                  width="150"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editVisionMission($page.props.visionmission)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteVisionMission($page.props.visionmission.id)"
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

const tableHeaders = ["Vision", "Mission", "Image", "Action"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  visionmissionForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const visionmissionForm = useForm({
  vision: "",
  mission: "",
  image: "",
});

const successefull = () => {
  visionmissionForm.vision = "";
  visionmissionForm.mission = "";
  visionmissionForm.image = "";
  edit.value = false;
};

const editVisionMission = (visionmission) => {
  edit.value = visionmission.id;
  visionmissionForm.vision = visionmission.vision;
  visionmissionForm.mission = visionmission.mission;
};

const deleteVisionMission = (id) => {
  visionmissionForm.delete(`/admin/visionmission/delete/${id}`);
};
</script>

<style>
</style>
