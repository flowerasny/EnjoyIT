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

    export default {
        name: "App",
        components: {
            ProjectCardsList
        },
        data: function () {
            return {
                projects: [
                    {
                        id: "1",
                        status: "IN_PROGRESS",
                        title:
                            "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
                        counter: 32
                    },
                    {
                        id: "2",
                        status: "IN_PROGRESS",
                        title: "Aplikacja do zarządzania projektami studentów",
                        counter: 12
                    },
                    {
                        id: "3",
                        status: "DONE",
                        title: "Super sprawny system rezerwacji sal",
                        counter: 1
                    },
                    {
                        id: "4",
                        status: "TODO",
                        title:
                            "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
                        counter: 1241
                    },
                    {
                        id: "5",
                        status: "IN_PROGRESS",
                        title:
                            "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
                        counter: 32
                    },
                    {
                        id: "6",
                        status: "DONE",
                        title: "Aplikacja do zarządzania projektami studentów",
                        counter: 12
                    },
                    {
                        id: "7",
                        status: "IN_PROGRESS",
                        title: "Super sprawny system rezerwacji sal",
                        counter: 1
                    },
                    {
                        id: "8",
                        status: "TOIN_PROGRESSDO",
                        title:
                            "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
                        counter: 1241
                    },
                    {
                        id: "9",
                        status: "DONE",
                        title:
                            "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
                        counter: 32
                    },
                    {
                        id: "10",
                        status: "DONE",
                        title: "Aplikacja do zarządzania projektami studentów",
                        counter: 12
                    },
                    {
                        id: "11",
                        status: "TODO",
                        title: "Super sprawny system rezerwacji sal",
                        counter: 1
                    },
                    {
                        id: "12",
                        status: "DONE",
                        title:
                            "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
                        counter: 1241
                    },
                    {
                        id: "13",
                        status: "DONE",
                        title:
                            "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
                        counter: 32
                    },
                    {
                        id: "14",
                        status: "IN_PROGRESS",
                        title: "Aplikacja do zarządzania projektami studentów",
                        counter: 12
                    },
                    {
                        id: "3",
                        status: "TODO",
                        title: "Super sprawny system rezerwacji sal",
                        counter: 1
                    },
                    {
                        id: "15",
                        status: "TODO",
                        title:
                            "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
                        counter: 1241
                    }
                ],
                statuses: ["TODO", "IN_PROGRESS", "DONE"]
            };
        }
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
