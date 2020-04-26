Vue.component('project-cards-list', {
    template: "#project-cards-list-template",
    props: {
        status: {
            type: String,
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
        }
    },
    created() {
        this.projects.forEach(project => {
            if (project.status === this.status){
                this.projectsList.push(project)
            }
        });
        if (this.status === "DONE") {
            this.listTitle = "Done"
        } else if (this.status === "IN_PROGRESS") {
            this.listTitle = "In progress"
        } else if (this.status === "TODO") {
            this.listTitle = "To do"
        }
    }

})

Vue.component('project-card', {
    template: '#project-card-template',
    props: {
        status: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        counter: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            project: {},
            statusClass: {},
            statusBarClass: "statusBar",
            cardButtonClass: "cardButton"
        }
    },
    created() {
        this.project = {
            status: this.status,
            title: this.title,
            counter: this.counter
        }
        if (this.status === "DONE") {
            this.statusClass = "statusDone"
        } else if (this.status === "IN_PROGRESS") {
            this.statusClass = "statusInProgress"
        } else if (this.status === "TODO") {
            this.statusClass = "statusTodo"
        }
    }
})

new Vue({
    el: '#app',
    data: {
        projects: [{
            status: "IN_PROGRESS",
            title: "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
            counter: 32
        },{
            status: "DONE",
            title: "Aplikacja do zarządzania projektami studentów",
            counter: 12
        },{
            status: "TODO",
            title: "Super sprawny system rezerwacji sal",
            counter: 1
        },{
            status: "TODO",
            title: "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
            counter: 1241
        },{
            status: "DONE",
            title: "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
            counter: 32
        },{
            status: "IN_PROGRESS",
            title: "Aplikacja do zarządzania projektami studentów",
            counter: 12
        },{
            status: "TODO",
            title: "Super sprawny system rezerwacji sal",
            counter: 1
        },{
            status: "IN_PROGRESS",
            title: "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
            counter: 1241
        },{
            status: "DONE",
            title: "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
            counter: 32
        },{
            status: "DONE",
            title: "Aplikacja do zarządzania projektami studentów",
            counter: 12
        },{
            status: "IN_PROGRESS",
            title: "Super sprawny system rezerwacji sal",
            counter: 1
        },{
            status: "DONE",
            title: "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
            counter: 1241
        },{
            status: "TODO",
            title: "Kalendarz UEk pozwalający wyświetlić wydarzenia mające miejsce na uczelni",
            counter: 32
        },{
            status: "TODO",
            title: "Aplikacja do zarządzania projektami studentów",
            counter: 12
        },{
            status: "TODO",
            title: "Super sprawny system rezerwacji sal",
            counter: 1
        },{
            status: "DONE",
            title: "Inteligentna porównywarka kursów walut, która wychwytuje i podkreśla niespodziewane skoki i spadki cen",
            counter: 1241
        }],
        statuses: ["TODO", "IN_PROGRESS", "DONE"]
    }
})