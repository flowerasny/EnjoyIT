<template>
  <div class="projectsListContainer">
    <span class="projectsListTitle">{{ listTitle }}</span>
    <project-card-add-new v-if="shouldShowAddNewCard"></project-card-add-new>
    <project-card
      v-for="project in projectsList"
      :key="project.id"
      :status="project.status"
      :title="project.title"
      :rate="project.rate"
    ></project-card>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard";
import ProjectCardAddNew from "./ProjectCardAddNew";

export default {
  name: "ProjectCardsList",
  components: {
    ProjectCard,
    ProjectCardAddNew
  },
  props: {
    status: {
      type: Number,
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
  beforeMount() {
  if (this.status === 1) {
      this.listTitle = "To do";
    } else if (this.status === 2) {
      this.listTitle = "In progress";
    } else if (this.status === 3) {
      this.listTitle = "Done";
    }
    this.shouldShowAddNewCard = this.status === 1;
  },
  watch: {
    projects: function(newVal, oldVal) {
      this.projectsList = []
      newVal.forEach(project => {
        if (project.status === this.status) {
          this.projectsList.push(project);
        }
      });
    }
  }
};
</script>

<style scoped>
.projectsListTitle {
  color: #999999;
  font-size: 25px;
  margin-left: 26px;
  font-weight: bold;
}

.projectsListContainer {
  margin-top: 60px;
}
</style>