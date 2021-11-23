<template>
  <div>
    <div></div>
    <b-navbar style="background: #ff9922" class="py-0" fixed="top">
      <b-navbar-nav class="py-0">
        <UserMenu />
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
import UserMenu from '@/components/UserMenu'
import {LOGOUT} from '@/graphql/queries/userQueries'
import Cookies from 'js-cookie'
export default {
  name: "NavbarHome",
  components:{UserMenu},
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
