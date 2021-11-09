import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
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
  {
    path: '/configuracion/perfil',
      name: 'Perfil',
      component: () => import( '../views/Settings/Perfil.vue')
    },
    {
    path: '/configuracion/vacunas',
      name: 'Vacunas',
      component: () => import( '../views/Settings/Vacunas.vue')
    },
    {
    path: '/configuracion/razas',
      name: 'Razas',
      component: () => import( '../views/Settings/Razas.vue')
    },
    {
    path: '/configuracion/departamentos',
      name: 'Departamentos',
      component: () => import( '../views/Settings/Departamentos.vue')
    },
    {path: '/configuracion',
    name: 'Configuracion',
    component: () => import( '../views/Settings/Settings.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
