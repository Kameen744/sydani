<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <h4>Our Work Page Section Intro</h4>
          <hr />
          <form
            @submit.prevent="
              edit
                ? ourWorkIntroForm.patch(`/admin/ourwork/intro/update/${edit}`)
                : ourWorkIntroForm.post('/admin/ourwork/intro/store')
            "
          >
            <div class="row">
              <div class="col-md-12">
                <Editor
                  label="Financing Intro Text"
                  v-model="ourWorkIntroForm.financing_intro"
                  :error="ourWorkIntroForm.errors.financing_intro"
                ></Editor>

                <Editor
                  label="System Strengthening Intro Text"
                  v-model="ourWorkIntroForm.sytem_strengthening_intro"
                  :error="ourWorkIntroForm.errors.sytem_strengthening_intro"
                ></Editor>

                <Editor
                  label="Demand Generation Intro Text"
                  v-model="ourWorkIntroForm.demand_generation_intro"
                  :error="ourWorkIntroForm.errors.demand_generation_intro"
                ></Editor>

                <Editor
                  label="Data Analytics Intro Text"
                  v-model="ourWorkIntroForm.data_analytics_intro"
                  :error="ourWorkIntroForm.errors.data_analytics_intro"
                ></Editor>

                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="ourWorkIntroForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="ourWorkIntroForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto"></div>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="ourWorkIntroForm.recentlySuccessful"
                :class="
                  ourWorkIntroForm.recentlySuccessful ? successefull() : ''
                "
              ></Alert>
              <Toast
                title="SystemStrength"
                content="Successefully Saved!"
                type="default"
                :show="ourWorkIntroForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(ourWorkIntro, key) in $page.props.intros" :key="key">
              <td v-html="ourWorkIntro.financing_intro"></td>
              <td v-html="ourWorkIntro.sytem_strengthening_intro"></td>
              <td v-html="ourWorkIntro.demand_generation_intro"></td>
              <td v-html="ourWorkIntro.data_analytics_intro"></td>
              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editSystemStrength(ourWorkIntro)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteSystemStrength(ourWorkIntro.id)"
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

const tableHeaders = [
  "Financing",
  "System Strengthening",
  "Demand Generation",
  "Data Analysis",
  "Action",
];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  ourWorkIntroForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const ourWorkIntroForm = useForm({
  financing_intro: "",
  sytem_strengthening_intro: "",
  demand_generation_intro: "",
  data_analytics_intro: "",
});

const successefull = () => {
  ourWorkIntroForm.financing_intro = "";
  ourWorkIntroForm.sytem_strengthening_intro = "";
  ourWorkIntroForm.demand_generation_intro = "";
  ourWorkIntroForm.data_analytics_intro = "";

  edit.value = false;
};

const editSystemStrength = (ourWorkIntro) => {
  edit.value = ourWorkIntro.id;
  ourWorkIntroForm.financing_intro = ourWorkIntro.financing_intro;

  ourWorkIntroForm.sytem_strengthening_intro =
    ourWorkIntro.sytem_strengthening_intro;

  ourWorkIntroForm.demand_generation_intro =
    ourWorkIntro.demand_generation_intro;

  ourWorkIntroForm.data_analytics_intro = ourWorkIntro.data_analytics_intro;
};

const deleteSystemStrength = (id) => {
  ourWorkIntroForm.delete(`/admin/ourwork/intro/delete/${id}`);
};
</script>

<style>
</style>
