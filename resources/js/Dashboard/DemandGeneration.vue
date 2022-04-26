<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <h4>Demand Generation</h4>
          <hr />
          <form
            @submit.prevent="
              edit
                ? demandGenerationForm.patch(`/admin/demand/update/${edit}`)
                : demandGenerationForm.post('/admin/demand/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <Input
                  label="Title Text"
                  v-model="demandGenerationForm.title"
                  :error="demandGenerationForm.errors.title"
                ></Input>

                <Editor
                  label="Content"
                  v-model="demandGenerationForm.content"
                  :error="demandGenerationForm.errors.content"
                ></Editor>

                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="demandGenerationForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="demandGenerationForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto"></div>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="demandGenerationForm.recentlySuccessful"
                :class="
                  demandGenerationForm.recentlySuccessful ? successefull() : ''
                "
              ></Alert>
              <Toast
                title="DemandGeneration"
                content="Successefully Saved!"
                type="default"
                :show="demandGenerationForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr
              v-for="(demandGeneration, key) in $page.props.demandGenerations"
              :key="key"
            >
              <td v-html="demandGeneration.title"></td>
              <td v-html="demandGeneration.content"></td>
              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editDemandGeneration(demandGeneration)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteDemandGeneration(demandGeneration.id)"
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
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  demandGenerationForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const demandGenerationForm = useForm({
  title: "",
  content: "",
});

const successefull = () => {
  demandGenerationForm.title = "";
  demandGenerationForm.content = "";
  edit.value = false;
};

const editDemandGeneration = (demandGeneration) => {
  edit.value = demandGeneration.id;
  demandGenerationForm.title = demandGeneration.title;
  demandGenerationForm.content = demandGeneration.content;
};

const deleteDemandGeneration = (id) => {
  demandGenerationForm.delete(`/admin/demand/delete/${id}`);
};
</script>

<style>
</style>
