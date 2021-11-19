import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Home',
    component: ()=> import('../views/Home.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/Users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/Users/UserDetail/:id',
    name:'UserDetail',
    component: () => import('../views/UserDetail.vue'),
    meta:{
      requiresAuth:true
    }
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
    component: () => import('../views/Mascota.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/Home',
    name: 'HomeUsuario',
    component: () => import('../views/HomeUsuario.vue')
  },
  {
    path: '/Perfil',
    name: 'PerfilUsuario',
    component: () => import('../views/Perfil.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/HomeAdmin',
    name: 'HomeAdmin',
    component: () => import('../views/HomeAdmin.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/Opciones',
    name: 'Opciones',
    component: () => import('../views/Settings.vue'),
    meta:{
      requiresAuth:true
    }
  }
  
]


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.verify) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router
