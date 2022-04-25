<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <h4>Add Industry Service</h4>
          <form
            @submit.prevent="
              edit
                ? industryServiceForm.patch(
                    `/admin/industry/services/update/${edit}`
                  )
                : industryServiceForm.post('/admin/industry/services/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <Input
                  label="Service Title"
                  v-model="industryServiceForm.title"
                  :error="industryServiceForm.errors.title"
                ></Input>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Select Industry</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="industryServiceForm.industry_slug"
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
                    v-if="industryServiceForm.errors.industry_slug"
                    class="mt-1 text-danger"
                  >
                    {{ industryServiceForm.errors.industry_slug }}
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <TextArea
                  label="Content Description"
                  v-model="industryServiceForm.content"
                  :error="industryServiceForm.errors.content"
                ></TextArea>
              </div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="industryServiceForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="industryServiceForm.processing" />
                    </button>
                  </div>
                </div>
              </div>

              <Alert
                text="Successefully Saved!"
                :show="industryServiceForm.recentlySuccessful"
              ></Alert>
              <Toast
                title="IndustryService"
                :class="
                  industryServiceForm.recentlySuccessful ? successefull() : ''
                "
                subTitle="Successefully Saved!"
                type="default"
                :show="industryServiceForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(service, key) in $page.props.services" :key="key">
              <td>{{ key + 1 }}</td>
              <td>{{ service.title }}</td>
              <td>{{ service.industry_slug }}</td>
              <td>{{ service.content }}</td>
              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editIndustryService(service)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteIndustryService(service.id)"
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

const tableHeaders = ["ID", "title", "Industry", "Description", "Action"];
const showUploadImage = ref(false);

const edit = ref(false);

const industryServiceForm = useForm({
  title: "",
  content: "",
  industry_slug: "",
});

const successefull = () => {
  industryServiceForm.title = "";
  industryServiceForm.content = "";
  industryServiceForm.industry_slug = "";
  edit.value = false;
};

const editIndustryService = (industryService) => {
  edit.value = industryService.id;
  industryServiceForm.title = industryService.title;
  industryServiceForm.content = industryService.content;
  industryServiceForm.industry_slug = industryService.industry_slug;
};

const deleteIndustryService = (id) => {
  industryServiceForm.delete(`/admin/industry/services/delete/${id}`);
};
</script>

<style>
</style>
