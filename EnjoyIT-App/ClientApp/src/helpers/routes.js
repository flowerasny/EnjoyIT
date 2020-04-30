import Projects from '../components/Projects.vue'
import AboutUs from '../components/AboutUs.vue'
import Login from '../auth/Login.vue'

export default [
    { path: '/projects', component: Projects },
    { path: '/', redirect: '/projects' },
    { path: '/aboutUs', component: AboutUs },
    { path: '/login', component: Login },
]