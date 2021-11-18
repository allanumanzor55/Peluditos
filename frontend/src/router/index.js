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
  {
    path: '/Home',
    name: 'HomeUsuario',
    component: () => import('../views/HomeUsuario.vue')
  },
  {
    path: '/Perfil',
    name: 'PerfilUsuario',
    component: () => import('../views/Perfil.vue')
  },
  {
    path: '/HomeAdmin',
    name: 'HomeAdmin',
    component: () => import('../views/HomeAdmin.vue')
  },
  {
    path: '/Opciones',
    name: 'opciones',
    component: () => import('../components/OpcionesSetting.vue')
  }
  
  
]

const router = new VueRouter({
  routes
})

export default router
