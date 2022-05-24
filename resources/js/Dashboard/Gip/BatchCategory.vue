<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <h4>Interns Batch</h4>
          <hr />
          <form
            @submit.prevent="
              edit
                ? batchCategoryForm.patch(`/admin/intern/batch/update/${edit}`)
                : batchCategoryForm.post('/admin/intern/batch/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <Input
                  label="Batch"
                  v-model="batchCategoryForm.batch"
                  :error="batchCategoryForm.errors.batch"
                ></Input>

                <Input
                  label="Start"
                  v-model="batchCategoryForm.start"
                  :error="batchCategoryForm.errors.start"
                  type="date"
                ></Input>

                <Input
                  label="End"
                  v-model="batchCategoryForm.end"
                  :error="batchCategoryForm.errors.end"
                  type="date"
                ></Input>

                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="batchCategoryForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="batchCategoryForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto"></div>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="batchCategoryForm.recentlySuccessful"
                :class="
                  batchCategoryForm.recentlySuccessful ? successefull() : ''
                "
              ></Alert>
              <Toast
                title="BatchCategory"
                content="Successefully Saved!"
                type="default"
                :show="batchCategoryForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr
              v-for="(batchCategory, key) in $page.props.batchCategorys"
              :key="key"
            >
              <td>{{ batchCategory.batch }}</td>
              <td>{{ batchCategory.start }}</td>
              <td>{{ batchCategory.end }}</td>
              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editBatchCategory(batchCategory)"
                  ></ButtonIcon>

                  <!-- <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteBatchCategory(batchCategory.id)"
                  ></ButtonIcon> -->
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
import Layout from "./../Layout/Layout.vue";
import UploadImage from "vue-image-crop-upload";
import { ref } from "@vue/reactivity";
import Input from "./../Layout/Input.vue";
import Toast from "./../Layout/Toast.vue";
import Alert from "./../Layout/Alert.vue";
import TextArea from "./../Layout/TextArea.vue";
import Spiner from "./../Layout/Spiner.vue";
import { Inertia } from "@inertiajs/inertia";
import Image from "./../../Layouts/Image.vue";
import Editor from "./../Layout/Editor.vue";
import Table from "./../Layout/Table.vue";
import ButtonIcon from "./../Layout/ButtonIcon.vue";
import { onMounted } from "@vue/runtime-core";

const tableHeaders = ["Batch", "Start", "End"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  batchCategoryForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const batchCategoryForm = useForm({
  batch: "",
  start: "",
  end: "",
});

const successefull = () => {
  batchCategoryForm.batch = "";
  batchCategoryForm.start = "";
  batchCategoryForm.end = "";
  edit.value = false;
};

const editBatchCategory = (batchCategory) => {
  edit.value = batchCategory.id;
  batchCategoryForm.batch = batchCategory.batch;
  batchCategoryForm.start = batchCategory.start;
  batchCategoryForm.end = batchCategory.end;
};

const deleteBatchCategory = (id) => {
  batchCategoryForm.delete(`/admin/intern/batch/delete/${id}`);
};
</script>

<style>
</style>
