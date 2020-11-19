import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Index from '../components/Index.vue'
import Search from '../components/Search.vue'
import Person from '../components/Person.vue'
import Paper from '../components/Paper.vue'
import Profile from '../components/Profile.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
        path: '/home',
        redirect: '/index',
        component: Home,
        children: [
            { path: '/index', component: Index },
            {
                path: '/search',
                redirect: '/search/person',
                component: Search,
                children: [
                    { path: 'person', component: Person },
                    { path: 'paper', component: Paper }
                ]
            },
            { path: '/profile', name: "profile", component: Profile },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router