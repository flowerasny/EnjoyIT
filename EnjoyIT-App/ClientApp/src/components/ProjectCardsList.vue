<template>
  <div> 
    <span class="projectsListTitle">{{ listTitle }}</span>
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
import ProjectCard from './ProjectCard'

export default {
  name: "ProjectCardsList",
  components: {
      ProjectCard
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
      projectsList: []
    };
  },
  created() {
    this.projects.forEach(project => {
      if (project.status === this.status) {
        this.projectsList.push(project);
      }
    });
    if (this.status === 1) {
      this.listTitle = "Done";
    } else if (this.status === 2) {
      this.listTitle = "In progress";
    } else if (this.status === 3) {
      this.listTitle = "To do";
    }
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
</style>