<template>
  <div class="projectsListContainer">
    <div>
      <span v-if="status === 3"><img src="../assets/done.png" class="icon"></span>
      <span v-else-if="status === 2"><img src="../assets/inprogress.png" class="icon"></span>
      <span v-else-if="status === 1"><img src="../assets/todo.png" class="icon"></span>
    </div>
    <project-card-add-new v-if="shouldShowAddNewCard"></project-card-add-new>
    <project-card
      v-for="project in projectsList"
      :key="project.id"
      :data="project">
      </project-card>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard";
import ProjectCardAddNew from "./ProjectCardAddNew";

export default {
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
      projectsList: [],
      shouldShowAddNewCard: false
    };
  },
  beforeMount() {
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
  margin-top: 20px;
}
.icon {
  display: flex;
  height: 200px;
  width: 200px;
  margin-left: 70px;
  align-self: center;
}
</style>