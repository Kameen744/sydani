<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <h4>Blog Post</h4>
          <form
            @submit.prevent="
              edit
                ? blogForm.patch(`/admin/blog/update/${edit}`)
                : blogForm.post('/admin/blog/store')
            "
          >
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <Input
                      label="Title Text"
                      v-model="blogForm.title"
                      :error="blogForm.errors.title"
                    ></Input>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Select Industry</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="blogForm.industry_slug"
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
                        v-if="blogForm.errors.industry_slug"
                        class="mt-1 text-danger"
                      >
                        {{ blogForm.errors.industry_slug }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <Editor
                  label="Content"
                  v-model="blogForm.content"
                  :error="blogForm.errors.content"
                  :height="400"
                ></Editor>

                <hr />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="blogForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="blogForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        blogForm.errors.image ? 'btn-danger' : 'btn-secondary'
                      "
                      @click.prevent="showUploadImage = !showUploadImage"
                      :disabled="blogForm.processing"
                    >
                      {{ edit ? "Change Image" : "Upload Image" }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6 my-3" v-if="blogForm.image != ''">
                <img :src="blogForm.image" alt="img" class="img-fluid wi-100" />
              </div>
              <Alert
                text="Successefully Saved!"
                :show="blogForm.recentlySuccessful"
                :class="blogForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Blog"
                subTitle="Successefully Saved!"
                type="default"
                :show="blogForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="800"
            :height="600"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(blog, key) in $page.props.blogs" :key="key">
              <td v-html="blog.title"></td>
              <td v-html="blog.industry_slug"></td>
              <td v-html="blog.content.substring(0, 300)"></td>
              <td>
                <Image
                  :file="blog.image"
                  folder="blogs"
                  class="img-thumbnail"
                  width="150"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editBlog(blog)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteBlog(blog.id)"
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

const tableHeaders = ["Title", "Industry", "Content", "Image", "Action"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  blogForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const blogForm = useForm({
  title: "",
  industry_slug: "",
  content: "",
  image: "",
});

const successefull = () => {
  blogForm.title = "";
  blogForm.industry_slug = "";
  blogForm.content = "";
  blogForm.image = "";
  edit.value = false;
};

const editBlog = (blog) => {
  edit.value = blog.id;
  blogForm.title = blog.title;
  blogForm.industry_slug = blog.industry_slug;
  blogForm.content = blog.content;
};

const deleteBlog = (id) => {
  blogForm.delete(`/admin/blog/delete/${id}`);
};
</script>

<style>
</style>
