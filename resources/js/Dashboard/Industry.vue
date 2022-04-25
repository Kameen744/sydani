<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? industryForm.patch(`/admin/industry/update/${edit}`)
                : industryForm.post('/admin/industry/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <h4>Add Industry</h4>
                <Input
                  label="Name"
                  v-model="industryForm.name"
                  :error="industryForm.errors.name"
                ></Input>

                <Editor
                  label="Intro"
                  v-model="industryForm.intro"
                  :error="industryForm.errors.intro"
                  :height="300"
                ></Editor>
              </div>

              <div class="col-md-6" v-if="industryForm.image != ''">
                <div class="row">
                  <div class="col-md-6">
                    <img
                      :src="industryForm.image"
                      alt="img"
                      class="img-fluid wi-100"
                    />
                  </div>
                  <!-- <div class="col-md-4">
                    <img
                      :src="industryForm.insight_image"
                      alt="img"
                      class="img-fluid wi-100"
                    />
                  </div> -->
                  <div class="col-md-6">
                    <img
                      :src="industryForm.service_image"
                      alt="img"
                      class="img-fluid wi-100"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="industryForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="industryForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        industryForm.errors.image
                          ? 'btn-danger'
                          : 'btn-secondary'
                      "
                      @click.prevent="showUploadImage = !showUploadImage"
                      :disabled="industryForm.processing"
                    >
                      {{ edit ? "Change Header Image" : "Upload Header Image" }}
                    </button>
                  </div>
                  <!-- <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        industryForm.errors.insight_image
                          ? 'btn-danger'
                          : 'btn-secondary'
                      "
                      @click.prevent="
                        showInsightUploadImage = !showInsightUploadImage
                      "
                      :disabled="industryForm.processing"
                    >
                      {{
                        edit ? "Change Insight Image" : "Upload Insight Image"
                      }}
                    </button>
                  </div> -->
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        industryForm.errors.service_image
                          ? 'btn-danger'
                          : 'btn-secondary'
                      "
                      @click.prevent="
                        showServiceUploadImage = !showServiceUploadImage
                      "
                      :disabled="industryForm.processing"
                    >
                      {{
                        edit ? "Change Services Image" : "Upload Services Image"
                      }}
                    </button>
                  </div>
                </div>
              </div>
              <Alert
                text="Successefully Saved!"
                :show="industryForm.recentlySuccessful"
                :class="industryForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Industry"
                subTitle="Successefully Saved!"
                type="default"
                :show="industryForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="1800"
            :height="500"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <UploadImage
            field="service_image"
            @crop-success="cropServiceSuccess"
            v-model="showServiceUploadImage"
            :width="600"
            :height="400"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(industry, key) in $page.props.industries" :key="key">
              <td v-html="industry.name"></td>
              <td v-html="industry.intro.substring(0, 400) + ' ...'"></td>
              <td>
                <Image
                  :file="industry.image"
                  folder="industries"
                  class="img-thumbnail"
                  width="150"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editIndustry(industry)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteIndustry(industry.id)"
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

const tableHeaders = ["Name", "Intro", "Image", "Action"];
const showUploadImage = ref(false);
const showInsightUploadImage = ref(false);
const showServiceUploadImage = ref(false);

const cropSuccess = (imgDataUrl, field) => {
  industryForm.image = imgDataUrl;
};

const cropServiceSuccess = (imgDataUrl, field) => {
  industryForm.service_image = imgDataUrl;
};

const imgDataUrl = ref("");
const imgServiceDataUrl = ref("");

const edit = ref(false);

const industryForm = useForm({
  name: "",
  intro: "",
  image: "",
  service_image: "",
});

const successefull = () => {
  industryForm.name = "";
  industryForm.intro = "";
  industryForm.image = "";
  industryForm.service_image = "";
  edit.value = false;
};

const editIndustry = (industry) => {
  edit.value = industry.id;
  industryForm.name = industry.name;
  industryForm.intro = industry.intro;
};

const deleteIndustry = (id) => {
  industryForm.delete(`/admin/industry/delete/${id}`);
};
</script>

<style>
</style>
