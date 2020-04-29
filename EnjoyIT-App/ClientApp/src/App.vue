<template>
  <v-app id="app" class="appContainer">
    <v-app-bar
      app
      color="primary"
      dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <h2>Enjoy-IT</h2>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/flowerasny/EnjoyIT"
        target="_blank"
        text>
        <span class="mr-2">GITHUB PAGE</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    
    <div class="projectsContainer">
          <project-cards-list v-for="status in statuses"
                              :key="status"
                              :status="status"
                              :projects="projects"></project-cards-list>
    </div>

  </v-app>
</template>

<script>
    import ProjectCardsList from './components/ProjectCardsList'
    import service from '@/helpers/service'
    
    export default {
        name: "App",
        components: {
            ProjectCardsList
        },
        data: function () {
            return {
                statuses: [1, 2, 3],
                projects: []                   
            };
        },
        beforeMount (){
            service.getData().then(data => {this.projects = data})}                 
    };
</script>

<style> 
    .projectsContainer {
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>