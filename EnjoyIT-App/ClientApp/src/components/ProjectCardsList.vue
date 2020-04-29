<template>
  <div class="projectsListContainer"> 
    <span class="projectsListTitle">{{ listTitle }}</span>
    <project-card-add-new v-if="shouldShowAddNewCard"></project-card-add-new>
    <project-card
      v-for="project in projectsList"
      :status="project.status"
      :title="project.title"
      :counter="project.counter"
    ></project-card>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard'
import ProjectCardAddNew from './ProjectCardAddNew'

export default {
  name: "ProjectCardsList",
  components: {
      ProjectCard,
      ProjectCardAddNew
  },
  props: {
    status: {
      type: String,
      required: true
    },
    projects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      listTitle: {},
      projectsList: [],
      shouldShowAddNewCard: false
    };
  },
  created() {
    this.projects.forEach(project => {
      if (project.status === this.status) {
        this.projectsList.push(project);
      }
    });
    if (this.status === "DONE") {
      this.listTitle = "Done";
    } else if (this.status === "IN_PROGRESS") {
      this.listTitle = "In progress";
    } else if (this.status === "TODO") {
      this.listTitle = "To do";
    }
    this.shouldShowAddNewCard = (this.status === "TODO")
  }
};
</script>

<style scoped>

.projectsListTitle {
  color: #999999;
  font-size: 24px;
  margin-left: 26px;
  font-weight: bold;
}

.projectsListContainer {
  margin-top: 60px;
}
</style>