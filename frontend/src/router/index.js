import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Home',
    component: ()=> import('../views/Home.vue'),
  },
  {
    path: '/usuarios',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/usuarios/detalle/:id',
    name:'UserDetail',
    component: () => import('../views/UserDetail.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/adoptar',
    name: 'Adoptar',
    component: () => import('../views/Adoptar.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/inicio',
    name: 'HomeUsuario',
    component: () => import('../views/HomeUsuario.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/inicioAdmin',
    name: 'HomeAdmin',
    component: () => import('../views/HomeAdmin.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/opciones',
    name: 'Opciones',
    component: () => import('../views/Settings.vue'),
    meta:{
      requiresAuth:true
    }
  },{
    path:'/recuperarcontra',
    name:'RestorePassword',
    component: ()=>import('../views/RestorePassword.vue')
  },
  {
    path: '/adoptar/detalle/:id',
    name: 'DetalleMascota',
    component: () => import('../views/DetalleMascota.vue')
  },
  {
    path: '/mascotas/mismascotas',
    name: 'MisMascotas',
    component: () => import('../views/MascotaUsuario.vue')
  },
  {
    path: '/perfilusuario',
    name: 'PerfilUsuario',
    component: () => import('../views/PerfilUsuario.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/mascotausuario',
    name: 'MascotaUsuario',
    component: () => import('../views/MascotaUsuario.vue')
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
