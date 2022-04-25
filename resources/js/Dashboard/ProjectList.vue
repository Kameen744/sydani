<template>
  <Project v-if="editCurrProject" :editForm="editCurrProject"></Project>
  <!-- table -->
  <Layout v-else>
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <div class="btn btn-primary" @click.prevent="addNewProject">
                Add New Project
              </div>
              <hr />
            </div>
          </div>
          <Table :tHeads="tableHeaders">
            <tr v-for="(project, key) in $page.props.projects.data" :key="key">
              <td v-html="project.title"></td>
              <td v-html="project.background"></td>
              <td>
                <Image
                  :file="project.image"
                  folder="projects"
                  class="img-thumbnail"
                  width="150"
                ></Image>
              </td>

              <td>
                <div class="d-flex">
                  <ButtonIcon
                    btn="primary"
                    icon="pen"
                    @click="editProject(project)"
                  ></ButtonIcon>

                  <ButtonIcon
                    btn="danger"
                    icon="trash"
                    @click="deleteProject(project.id)"
                  ></ButtonIcon>
                </div>
              </td>
            </tr>
          </Table>
          <div class="row">
            <div class="col-12 px-2 pt-3">
              <Pagination :data="$page.props.projects"></Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "./Layout/Layout.vue";
import Project from "./Project.vue";
import Image from "./../Layouts/Image.vue";
import Table from "./Layout/Table.vue";
import ButtonIcon from "./Layout/ButtonIcon.vue";
import { Inertia } from "@inertiajs/inertia";
import { ref } from "@vue/reactivity";
import Pagination from "./Layout/Pagination.vue";

const tableHeaders = ["Title", "Background", "Image", "Action"];
const editCurrProject = ref(null);
const editProject = (project) => {
  editCurrProject.value = project;
  //   edit.value = project.id;
  //   projectForm.title = project.title;
  //   projectForm.background = project.background;
  //   projectForm.content = project.content;
};

const deleteProject = (id) => {
  Inertia.delete(`/admin/project/delete/${id}`);
};

const addNewProject = () => {
  Inertia.visit("/admin/project");
};
</script>

<style>
</style>
