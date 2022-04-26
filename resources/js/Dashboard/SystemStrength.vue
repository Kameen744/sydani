<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <h4>System Strengthening</h4>
          <hr />
          <form
            @submit.prevent="
              edit
                ? systemStrengthForm.patch(`/admin/system/update/${edit}`)
                : systemStrengthForm.post('/admin/system/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <Input
                  label="Title Text"
                  v-model="systemStrengthForm.title"
                  :error="systemStrengthForm.errors.title"
                ></Input>

                <Editor
                  label="Content"
                  v-model="systemStrengthForm.content"
                  :error="systemStrengthForm.errors.content"
                ></Editor>

                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="systemStrengthForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="systemStrengthForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto"></div>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="systemStrengthForm.recentlySuccessful"
                :class="
                  systemStrengthForm.recentlySuccessful ? successefull() : ''
                "
              ></Alert>
              <Toast
                title="SystemStrength"
                content="Successefully Saved!"
                type="default"
                :show="systemStrengthForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr
              v-for="(systemStrength, key) in $page.props.systemStrengths"
              :key="key"
            >
              <td v-html="systemStrength.title"></td>
              <td v-html="systemStrength.content"></td>
              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editSystemStrength(systemStrength)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteSystemStrength(systemStrength.id)"
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
  systemStrengthForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const systemStrengthForm = useForm({
  title: "",
  content: "",
});

const successefull = () => {
  systemStrengthForm.title = "";
  systemStrengthForm.content = "";
  edit.value = false;
};

const editSystemStrength = (systemStrength) => {
  edit.value = systemStrength.id;
  systemStrengthForm.title = systemStrength.title;
  systemStrengthForm.content = systemStrength.content;
};

const deleteSystemStrength = (id) => {
  systemStrengthForm.delete(`/admin/system/delete/${id}`);
};
</script>

<style>
</style>
