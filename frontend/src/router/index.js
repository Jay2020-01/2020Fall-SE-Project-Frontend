import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Index from '../components/Index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/home', redirect: '/index', component: Home , children: [
    {path: '/index', component: Index}
  ]}
]

const router = new VueRouter({
  routes
})

export default router
