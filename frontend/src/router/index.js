import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name:'Home',
    component: ()=> import('../views/Home-A.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../components/Navbar.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/Mascota',
    name: 'Mascota',
    component: () => import('../views/Mascota.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
