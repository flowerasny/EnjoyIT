<template> 
    <div class="projectsContainer">
          <project-cards-list v-for="status in statuses"
                              :key="status"
                              :status="status"
                              :projects="projects"></project-cards-list>
    </div>
</template>

<script>
    import ProjectCardsList from './ProjectCardsList'
    import Service from '../helpers/service'
    import Footer from './Footer'
    import Navbar from './Navbar'

    export default {
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
            Service.getData().then(data => {this.projects = data})}                 
    };
</script>

<style> 
    .projectsContainer {     
        font-family: sans-serif;
        display: flex;
        padding: 50px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>