import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Index from '../components/Index.vue'
import Search from '../components/Search.vue'
import Person from '../components/Person.vue'
import Paper from '../components/Paper.vue'
import DetailsPaper from '../components/DetailsPaper'
import PersonalCenter from '../components/PersonalCenter'
import AcademicHomepage from '../components/AcademicHomepage'
import Collection from '../components/Collection'
import Follow from '../components/Follow'
import IndividualAccount from '../components/IndividualAccount'
Vue.use(VueRouter)

const routes = [
  // { path: '/', redirect: '/home' },
  { path: '/', redirect: '/details_paper' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/home', redirect: '/index', component: Home , children: [
    {path: '/index', component: Index},
    { path: '/search', redirect: '/search/person',component: Search , children:[
      { path: 'person', component: Person },
      { path: 'paper', component: Paper }
    ]},
    {path: '/details_paper', component: DetailsPaper},   
    {path: '/personal_center', component: PersonalCenter, redirect: '/personal_center/academic_homepage', children:[
      { path: 'academic_homepage', component: AcademicHomepage },
      { path: 'collection', component: Collection },
      { path: 'follow', component: Follow },
      { path: 'individual_account', component: IndividualAccount },
    ]},                          
  ]},
]

const router = new VueRouter({
  routes
})

export default router
