<template>
    <v-app>
        <Navbar></Navbar>
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
    };
</script>

<style> 

</style>