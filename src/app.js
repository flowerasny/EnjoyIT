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
            title: "Aplikacja do zarządzania projektami studentów",
            counter: 32
        },{
            status: "DONE",
            title: "Aplikacja do zarządzania projektami studentów",
            counter: 12
        },{
            status: "TODO",
            title: "Aplikacja ",
            counter: 1
        },{
            status: "IN_PROGRESS",
            title: "Aplikacja do zarządzania projektami studentów",
            counter: 1241
        }],
        statuses: ["TODO", "IN_PROGRESS", "DONE"]
    }
})