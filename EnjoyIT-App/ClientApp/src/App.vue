<template>
    <div id="app" class="appContainer">
        <div class="projectsContainer">
            <project-cards-list v-for="status in statuses"
                                :key="status"
                                :status="status"
                                :projects="projects"></project-cards-list>
        </div> 
    </div>
  
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>
