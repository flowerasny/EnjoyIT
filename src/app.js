
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
            status: "TODO",
            title: "Aplikacja do zarządzania projektami studentów",
            counter: 12
        },{
            status: "DONE",
            title: "Aplikacja do zarządzania projektami studentów",
            counter: 1
        },{
            status: "DONE",
            title: "Aplikacja do zarządzania projektami studentów",
            counter: 1241
        }]
    }
})