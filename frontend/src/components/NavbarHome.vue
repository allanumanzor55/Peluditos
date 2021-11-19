<template>
  <div>
    <div></div>
    <b-navbar style="background: #ff9922" class="py-0">
      <b-navbar-nav class="pl-2 py-0">
        <b-nav-item v-b-toggle.sidebar-1 class="my-0 py-0">
          <v-avatar
            color="white"
            size="40"
            class="orange--text"
          >AA</v-avatar>
        </b-nav-item>
        <b-sidebar id="sidebar-1" backdrop shadow class="mx-0 px-0">
          <template #footer="{ hide }">
            <b-row align-h="end" class="p-3 mx-1">
              <b-link style="color:orange!important;" @click="hide">Cerrar sesion</b-link>
            </b-row>
          </template>
          <b-row align-h="center" class="mt-2">
              <b-icon icon="app" font-scale="7.5"></b-icon>
              <br>
          </b-row>
          <b-row align-h="center" class="mb-5">
            <h3>Usuario</h3>
          </b-row>
          <b-row align-h="center" class="text-center mx-3 px-0">
            <b-nav vertical class="w-100 text-center">
              <b-nav-item class="btn-sidebar" :to="{name:'HomeUsuario'}">Inicio</b-nav-item>
              <b-nav-item class="btn-sidebar" :to="{name:'PerfilUsuario'}">Mi perfil</b-nav-item>
              <b-nav-item class="btn-sidebar" :to="{name:'Mascota'}">Mascotas en adopcion</b-nav-item>
              <b-nav-item class="btn-sidebar" >Solicitudes pendientes</b-nav-item>
            </b-nav>
          </b-row>
        </b-sidebar>
      </b-navbar-nav>
      <v-spacer></v-spacer>
      <div>
        <b-navbar-nav>
          <b-nav-item >
            <v-icon class="white--text">
            mdi-bell
            </v-icon>
          </b-nav-item>
          <b-nav-item>
            <v-icon class="white--text" @click="logout">
            mdi-power-standby
            </v-icon>
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import {LOGOUT} from '@/graphql/queries/userQueries'
import Cookies from 'js-cookie'
export default {
  name: "NavbarHome",
  methods:{
    async logout(){
      let r = await this.$swal({
        title: 'Cerrar sesion',
        text: "¿Estas seguro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'
      })
      if(r.isConfirmed){
        const {data} = await this.$apollo.mutate({mutation:LOGOUT,variables:{token:this.$store.state.token}})
        if(data.logout.verified){
          Cookies.remove("token",{ path: '' })
          Cookies.remove("firstName",{ path: '' })
          Cookies.remove("lastName",{ path: '' })
          Cookies.remove("id",{ path: '' })
          Cookies.remove("verifiedEmail",{ path: '' })
          Cookies.remove("profileName",{ path: '' })
          this.$store.state.verify
          this.$router.push('/')
        }
      }
      
    }
  }
};
</script>

<style scoped>
.b-list-group-item {
  padding-top: 30% !important;
}

.tc {
  text-align: center !important;
}
::-webkit-scrollbar {
  display: none;
}

.btn-sidebar {
  border-bottom: solid !important;
  border-bottom-width: 0.5px !important;
  border-bottom-color: gray !important;
  background-color: transparent !important;
}

.btn-sidebar:hover {
  background: rgba(128, 128, 128, 0.4) !important;
  color:orangered !important;
}
</style>
