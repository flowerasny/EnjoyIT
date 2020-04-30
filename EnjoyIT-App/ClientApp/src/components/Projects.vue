<template>
  <v-app>
    
    <Navbar></Navbar>

    <div class="projectsContainer">
          <project-cards-list v-for="status in statuses"
                              :key="status"
                              :status="status"
                              :projects="projects"></project-cards-list>
    </div>

    <Footer></Footer>
  
  </v-app>
</template>

<script>
    import ProjectCardsList from './ProjectCardsList'
    import service from '../helpers/service'
    import Footer from './Footer'
    import Navbar from './Navbar'

    export default {
        name: "App",
        components: {
            ProjectCardsList,
            Footer,
            Navbar
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
        background: rgb(240, 240, 240);
        font-family: sans-serif;
        display: flex;
        padding: 50px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>