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
                projects: [],                
            };
        },
        beforeMount (){
            let obj = JSON.parse(localStorage.getItem("user"));

            if (obj != null)
            {
                Service.getData().then(data => {this.projects = data})                      
                
            }
            else
            {
                this.$router.push('login');
            }          
        }                 
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