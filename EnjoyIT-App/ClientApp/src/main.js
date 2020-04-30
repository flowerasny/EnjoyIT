import Vue from 'vue'
import App from './App'
import axios from 'axios'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Routes from './helpers/routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

axios.defaults.baseURL = "http://51.68.142.66:5000/"

new Vue({
    router,
    vuetify,
    render: function(h) { return h(App) }
}).$mount('#app')