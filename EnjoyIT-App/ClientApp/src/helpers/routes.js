import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
    { path: '/', redirect: '/home' },
    { path: '/projects', component: 'Projects' },
    { path: '/aboutUs', component: 'AboutUs' },
    { path: '/login', component: 'Login' },
    { path: '/home', component: 'Home' },
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