<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <h4>Job Description</h4>
          <hr />
          <form
            @submit.prevent="
              edit
                ? vacancyForm.patch(`/admin/vacancy/update/${edit}`)
                : vacancyForm.post('/admin/vacancy/store')
            "
          >
            <div class="row">
              <div class="col-md-12">
                <Editor
                  label="Description"
                  v-model="vacancyForm.description"
                  :error="vacancyForm.errors.description"
                  :height="500"
                ></Editor>

                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="vacancyForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="vacancyForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto"></div>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="vacancyForm.recentlySuccessful"
                :class="vacancyForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Vacancy"
                content="Successefully Saved!"
                type="default"
                :show="vacancyForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(vacancy, key) in $page.props.vacancies" :key="key">
              <td v-html="vacancy.description.substring(0, 250)"></td>
              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editVacancy(vacancy)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="info"
                    icon="eye"
                    @click="viewJob(vacancy)"
                    data-bs-toggle="modal"
                    data-bs-target="#modelId"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteVacancy(vacancy.id)"
                  ></ButtonIcon>
                </div>
              </td>
            </tr>
          </Table>
        </div>
      </div>
    </div>

    <!-- Button trigger modal -->
    <!-- <button
      type="button"
      class="btn btn-primary btn-lg"
      data-bs-toggle="modal"
      data-bs-target="#modelId"
    >
      Launch
    </button> -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" v-if="currentJob">
            <div class="container-fluid" v-html="currentJob.description"></div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
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

const tableHeaders = ["Description", "Action"];

const imgDataUrl = ref("");
const edit = ref(false);

const vacancyForm = useForm({
  description: "",
});

const successefull = () => {
  vacancyForm.description = "";
  edit.value = false;
};

const editVacancy = (vacancy) => {
  edit.value = vacancy.id;
  vacancyForm.description = vacancy.description;
};

const deleteVacancy = (id) => {
  vacancyForm.delete(`/admin/vacancy/delete/${id}`);
};
const currentJob = ref(null);
const viewJob = (job) => {
  currentJob.value = job;
};

// var modelId = document.getElementById("modelId");

// modelId.addEventListener("show.bs.modal", function (event) {
//   // Button that triggered the modal
//   let button = event.relatedTarget;
//   // Extract info from data-bs-* attributes
//   let recipient = button.getAttribute("data-bs-whatever");

//   // Use above variables to manipulate the DOM
// });
</script>

<style>
</style>
