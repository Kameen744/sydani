<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <form
            @submit.prevent="
              edit
                ? coreValueForm.patch(`/admin/values/update/${edit}`)
                : coreValueForm.post('/admin/values/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <h4>Add Core Value</h4>

                <Input
                  label="Core Value"
                  v-model="coreValueForm.value"
                  :error="coreValueForm.errors.value"
                ></Input>

                <hr />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="coreValueForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="coreValueForm.processing" />
                    </button>
                  </div>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="coreValueForm.recentlySuccessful"
              ></Alert>
              <Toast
                title="CoreValue"
                :class="coreValueForm.recentlySuccessful ? successefull() : ''"
                subTitle="Successefully Saved!"
                type="default"
                :show="coreValueForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(coreValue, key) in $page.props.coreValues" :key="key">
              <td>{{ key + 1 }}</td>
              <td>{{ coreValue.value }}</td>
              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editCoreValue(coreValue)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteCoreValue(coreValue.id)"
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

const tableHeaders = ["ID", "Core Value", "Action"];
const showUploadImage = ref(false);

const edit = ref(false);

const coreValueForm = useForm({
  value: "",
});

const successefull = () => {
  coreValueForm.value = "";
};

const editCoreValue = (coreValue) => {
  edit.value = coreValue.id;
  coreValueForm.value = coreValue.value;
};

const deleteCoreValue = (id) => {
  coreValueForm.delete(`/admin/values/delete/${id}`);
};
</script>

<style>
</style>
