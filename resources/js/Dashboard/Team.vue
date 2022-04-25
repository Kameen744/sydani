<template>
  <Layout>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <h4>Add Team Member</h4>
          <form
            @submit.prevent="
              edit
                ? teamForm.patch(`/admin/team/update/${edit}`, {
                    preserveState: false,
                  })
                : teamForm.post('/admin/team/store')
            "
          >
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6">
                    <Input
                      label="Name"
                      v-model="teamForm.name"
                      :error="teamForm.errors.name"
                    ></Input>
                  </div>
                  <div class="col-md-6">
                    <Input
                      label="Position"
                      v-model="teamForm.position"
                      :error="teamForm.errors.position"
                    ></Input>
                  </div>
                </div>
                <Editor
                  label="Bio"
                  v-model="teamForm.bio"
                  :error="teamForm.errors.bio"
                ></Editor>
                <div class="row">
                  <div class="col-md-6">
                    <Input
                      label="LinkedIn"
                      v-model="teamForm.linkedin"
                      :error="teamForm.errors.linkedin"
                    ></Input>
                  </div>
                  <div class="col-md-6">
                    <Input
                      label="Facebook"
                      v-model="teamForm.facebook"
                      :error="teamForm.errors.facebook"
                    ></Input>
                  </div>
                  <div class="col-md-6">
                    <Input
                      label="Instagram"
                      v-model="teamForm.instagram"
                      :error="teamForm.errors.instagram"
                    ></Input>
                  </div>
                  <div class="col-md-6">
                    <Input
                      label="Twitter"
                      v-model="teamForm.twitter"
                      :error="teamForm.errors.twitter"
                    ></Input>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="teamForm.processing"
                    >
                      {{ edit ? "Update " : "Create " }}
                      <Spiner :show="teamForm.processing" />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn"
                      :class="
                        teamForm.errors.image ? 'btn-danger' : 'btn-secondary'
                      "
                      @click.prevent="showUploadImage = !showUploadImage"
                      :disabled="teamForm.processing"
                    >
                      {{ edit ? "Change Image" : "Upload Image" }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6" v-if="teamForm.image != ''">
                <img :src="teamForm.image" alt="img" class="img-fluid wi-100" />
              </div>
              <Alert
                text="Successefully Saved!"
                :show="teamForm.recentlySuccessful"
                :class="teamForm.recentlySuccessful ? successefull() : ''"
              ></Alert>
              <Toast
                title="Team"
                subTitle="Successefully Saved!"
                type="default"
                :show="teamForm.recentlySuccessful"
              ></Toast>
            </div>
          </form>

          <UploadImage
            field="image"
            @crop-success="cropSuccess"
            v-model="showUploadImage"
            :width="350"
            :height="400"
            langType="eng"
            img-format="jpg"
            :noCircle="true"
            :value="true"
          ></UploadImage>

          <hr />
          <!-- table -->
          <Table :tHeads="tableHeaders">
            <tr v-for="(team, key) in $page.props.teams" :key="key">
              <td v-html="team.name"></td>
              <td v-html="team.position"></td>
              <td>
                <Image
                  :file="team.image"
                  folder="teams"
                  class="img-thumbnail"
                  width="80"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editTeam(team)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteTeam(team.id)"
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
import { computed, onMounted } from "@vue/runtime-core";

const tableHeaders = ["Name", "Position", "Image", "Action"];
const showUploadImage = ref(false);
const cropSuccess = (imgDataUrl, field) => {
  teamForm.image = imgDataUrl;
};

const imgDataUrl = ref("");
const edit = ref(false);

const teamForm = useForm({
  name: "",
  position: "",
  bio: "",
  linkedin: "",
  facebook: "",
  twitter: "",
  instagram: "",
  image: "",
});

const successefull = () => {
  teamForm.name = "";
  teamForm.position = "";
  teamForm.bio = "";
  teamForm.image = "";
  teamForm.linkedin = "";
  teamForm.facebook = "";
  teamForm.twitter = "";
  teamForm.instagram = "";
  edit.value = false;
};

const editTeam = (team) => {
  edit.value = team.id;
  teamForm.name = team.name;
  teamForm.position = team.position;
  teamForm.bio = team.bio;
  teamForm.linkedin = team.linkedin;
  teamForm.facebook = team.facebook;
  teamForm.twitter = team.twitter;
  teamForm.instagram = team.instagram;
};

const deleteTeam = (id) => {
  teamForm.delete(`/admin/team/delete/${id}`);
};
</script>

<style>
</style>
