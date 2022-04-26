<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <h4>Data Analytics Work Descriptions</h4>
          <hr />
          <form
            @submit.prevent="
              edit
                ? dataAnalyticsForm.patch(
                    `/admin/data-analytics/update/${edit}`
                  )
                : dataAnalyticsForm.post('/admin/data-analytics/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <Input
                  label="Title Text"
                  v-model="dataAnalyticsForm.title"
                  :error="dataAnalyticsForm.errors.title"
                ></Input>

                <Editor
                  label="Content"
                  v-model="dataAnalyticsForm.content"
                  :error="dataAnalyticsForm.errors.content"
                ></Editor>

                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="dataAnalyticsForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="dataAnalyticsForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto"></div>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="dataAnalyticsForm.recentlySuccessful"
                :class="
                  dataAnalyticsForm.recentlySuccessful ? successefull() : ''
                "
              ></Alert>
              <Toast
                title="DataAnalytics"
                content="Successefully Saved!"
                type="default"
                :show="dataAnalyticsForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr
              v-for="(dataAnalytic, key) in $page.props.dataAnalytics"
              :key="key"
            >
              <td v-html="dataAnalytic.title"></td>
              <td v-html="dataAnalytic.content"></td>
              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editDataAnalytics(dataAnalytic)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteDataAnalytics(dataAnalytic.id)"
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

const tableHeaders = ["Title", "Content", "Action"];

const edit = ref(false);

const dataAnalyticsForm = useForm({
  title: "",
  content: "",
});

const successefull = () => {
  dataAnalyticsForm.title = "";
  dataAnalyticsForm.content = "";
  edit.value = false;
};

const editDataAnalytics = (dataAnalytics) => {
  edit.value = dataAnalytics.id;
  dataAnalyticsForm.title = dataAnalytics.title;
  dataAnalyticsForm.content = dataAnalytics.content;
};

const deleteDataAnalytics = (id) => {
  dataAnalyticsForm.delete(`/admin/data-analytics/delete/${id}`);
};
</script>

<style>
</style>
