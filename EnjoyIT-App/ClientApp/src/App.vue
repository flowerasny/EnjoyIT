<template>
  <div id="app">
    <div class="projectsContainer">
      <project-cards-list
        v-for="status in statuses"
        :key="status"
        :status="status"
        :projects="projects"
        class="projectsList"
      ></project-cards-list>
    </div>
  </div>
</template>

<script>
import ProjectCardList from "./components/ProjectCardList.vue";

export default {
  name: "App",
  components: {
    ProjectCardList
  },
  data: {
    projects: [
      {
        status: "IN_PROGRESS",
        title:
          "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
        counter: 32
      },
      {
        status: "DONE",
        title: "Aplikacja do zarządzania projektami studentów",
        counter: 12
      },
      {
        status: "TODO",
        title: "Super sprawny system rezerwacji sal",
        counter: 1
      },
      {
        status: "TODO",
        title:
          "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
        counter: 1241
      },
      {
        status: "DONE",
        title:
          "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
        counter: 32
      },
      {
        status: "IN_PROGRESS",
        title: "Aplikacja do zarządzania projektami studentów",
        counter: 12
      },
      {
        status: "TODO",
        title: "Super sprawny system rezerwacji sal",
        counter: 1
      },
      {
        status: "IN_PROGRESS",
        title:
          "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
        counter: 1241
      },
      {
        status: "DONE",
        title:
          "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
        counter: 32
      },
      {
        status: "DONE",
        title: "Aplikacja do zarządzania projektami studentów",
        counter: 12
      },
      {
        status: "IN_PROGRESS",
        title: "Super sprawny system rezerwacji sal",
        counter: 1
      },
      {
        status: "DONE",
        title:
          "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
        counter: 1241
      },
      {
        status: "TODO",
        title:
          "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
        counter: 32
      },
      {
        status: "TODO",
        title: "Aplikacja do zarządzania projektami studentów",
        counter: 12
      },
      {
        status: "TODO",
        title: "Super sprawny system rezerwacji sal",
        counter: 1
      },
      {
        status: "DONE",
        title:
          "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
        counter: 1241
      }
    ],
    statuses: ["TODO", "IN_PROGRESS", "DONE"]
  }
};
</script>

<style>
</style>
