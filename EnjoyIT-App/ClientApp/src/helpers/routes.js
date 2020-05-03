import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
    { path: '/', redirect: '/login' },
    { path: '/projects', component: 'Projects' },
    { path: '/login', component: 'Login' }
];

const routes = routerOptions.map(route => {
    return {
        ...route,
        component: () =>
            import (`../components/${route.component}.vue`)
    };
});

export default new Router({
    mode: "history",
    routes
});

Vue.use(Router);