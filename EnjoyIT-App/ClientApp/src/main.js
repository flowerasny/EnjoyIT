import Vue from 'vue'
import App from './App'
import axios from 'axios'
import vuetify from './plugins/vuetify';

axios.defaults.baseURL = "http://51.68.142.66:5000/"

new Vue({
    vuetify,
    render: function(h) { return h(App) }
}).$mount('#app')