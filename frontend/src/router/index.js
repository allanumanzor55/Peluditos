import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profiles from '../views/Settings/Profiles.vue'
import Users from '../views/Users.vue'
import Menu from '../views/Settings/Menu.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/settings/profiles',
    name: 'Profiles',
    component: Profiles
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },{
    path: '/settings',
    name:'Settins',
    component:Menu
  }
]

const router = new VueRouter({
  routes
})

export default router
