import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Home',
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/Users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path:'/Users/UserDetail/:id',
    name:'UserDetail',
    component: () => import('../views/UserDetail.vue')
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
  {
    path: '/Home',
    name: 'HomeUsuario',
    component: () => import('../views/HomeUsuario.vue')
  },
  {
    path: '/Perfil',
    name: 'PerfilUsuario',
    component: () => import('../views/Perfil.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
