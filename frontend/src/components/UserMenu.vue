<template>
  <div>
    <b-nav-item v-b-toggle.sidebar-1 class="my-0 py-0">
      <v-avatar color="white" size="40" class="orange--text">AA</v-avatar>
    </b-nav-item>
    <b-sidebar id="sidebar-1" backdrop shadow class="mx-0 px-0" style="min-width:300px;">
      <!-- <template #footer="{ hide }">
        <b-row align-h="end" class="p-3 mx-1">
          <b-link style="color: orange !important" @click="hide"></b-link>
        </b-row>
      </template> -->
      <b-row align-h="center" class="mt-2 mx-0">
        <v-card
          class="mx-0 px-0"
          max-width="230"
          elevation="0"
          style="background: none !important"
        >
          <v-img
            height="230"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            style="border-radius: 100%; background: none !important"
          >
          </v-img>
        </v-card>
      </b-row>
      <b-row align-h="center" class="mb-5 mt-4 mx-0">
        <h3>{{getName}}</h3>
      </b-row>
      <b-row  class="text-center pr-5 mx-0" >
        <b-nav vertical class="w-100 text-center px-0">
          <v-list shaped class="mx-0 px-0" style="background:none !important">
              <v-list-item-group v-model="selectedItem" color="orange">
                <div v-for="(item, i) in items" :key="i">
                  <v-list-item :to="{name:item.href}" class="menu-i" v-if="item.visible">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </div>
            </v-list-item-group>
          </v-list>
        </b-nav>
      </b-row>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "UserMenu",
  data(){
    return{
      selectedItem: 1,
      items: [
        { text: 'Dashboard', icon: 'mdi-view-dashboard', href:'HomeUsuario'},
        { text: 'Mi Perfil', icon: 'mdi-account',href:'PerfilUsuario' },
        { text: 'Mis Mascotas', icon: 'mdi-dog-service',href:'MisMascotas' },
        { text: 'Adoptar', icon: 'mdi-dog',href:'Adoptar' },
        { text: 'Usuarios', icon: 'mdi-account-group',href:'Users' },
        { text: 'Configuraciones', icon: 'mdi-cog',href:'Opciones' },
        
      ],
    }
  },
  computed:{
    getName(){
      return this.$store.state.firstName.split(' ')[0]+" "+this.$store.state.lastName.split(' ')[0]
    }
  },
  created(){
    const profileName = this.$store.state.profileName
    this.items[0].visible = true
    this.items[1].visible = true
    this.items[2].visible = (profileName=='Adopter')?true:false
    this.items[3].visible = (profileName=='Adopter')?true:false
    this.items[4].visible = (profileName=='Administrador')?true:false
    this.items[5].visible = (profileName=='Administrador')?true:false
  }
};
</script>

<style scoped>
  .menu-i:hover{
    text-decoration:none !important;
  }
</style>
