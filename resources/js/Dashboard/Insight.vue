<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? insightForm.patch(`/admin/insight/update/${edit}`)
                : insightForm.post('/admin/insight/store')
            "
          >
            <div class="row">
              <div class="col-md-12">
                <h4>Add New insight</h4>
                <div class="row">
                  <div class="col-md-6">
                    <Input
                      label="Title Text"
                      v-model="insightForm.title"
                      :error="insightForm.errors.title"
                    ></Input>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Select Industry</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="insightForm.industry_slug"
                      >
                        <option selected disabled>Select Industry</option>
                        <option
                          v-for="(industry, key) in $page.props.industries"
                          :key="key"
                          :value="industry.slug"
                        >
                          {{ industry.name }}
                        </option>
                      </select>
                      <div
                        v-if="insightForm.errors.industry_slug"
                        class="mt-1 text-danger"
                      >
                        {{ insightForm.errors.industry_slug }}
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div class="col-md-6" v-if="insightForm.image != ''">
                <img
                  :src="insightForm.image"
                  alt="img"
                  width="300"
                  class="img-fluid wi-100"
                />
              </div>
              <div class="col-md-12">
                <Editor
                  label="Content"
                  :height="300"
                  v-model="insightForm.content"
                  :error="insightForm.errors.content"
                ></Editor>
              </div>
              <div class="row">
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="insightForm.processing"
                  >
                    {{ edit ? "Update " : "Create " }}
                    <Spiner :show="insightForm.processing" />
                  </button>
                </div>

                <div class="col-auto">
                  <button
                    class="btn"
                    :class="
                      insightForm.errors.image ? 'btn-danger' : 'btn-secondary'
                    "
                    @click.prevent="showUploadImage = !showUploadImage"
                    :disabled="insightForm.processing"
                  >
                    {{ edit ? "Change Image" : "Upload Image" }}
                  </button>
                </div>
              </div>
              <Alert
                text="Successefully Saved!"
                :show="insightForm.recentlySuccessful"
                :class="insightForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="insight"
                subTitle="Successefully Saved!"
                type="default"
                :show="insightForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="600"
            :height="450"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(insight, key) in $page.props.insights.data" :key="key">
              <td v-html="insight.title"></td>
              <td v-html="insight.industry_slug"></td>
              <td>
                <Image
                  :file="insight.image"
                  folder="insights"
                  class="img-thumbnail"
                  width="100"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editInsight(insight)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteInsight(insight.id)"
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

const tableHeaders = ["Title", "Industry", "Image", "Action"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  insightForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const insightForm = useForm({
  title: "",
  content: "",
  industry_slug: "",
  image: "",
});

const successefull = () => {
  insightForm.title = "";
  insightForm.content = "";
  insightForm.industry_slug = "";
  insightForm.image = "";
  edit.value = false;
};

const editInsight = (insight) => {
  edit.value = insight.id;
  insightForm.title = insight.title;
  insightForm.content = insight.content;
  insightForm.industry_slug = insight.industry_slug;
};

const deleteInsight = (id) => {
  insightForm.delete(`/admin/insight/delete/${id}`);
};
</script>

<style>
</style>
