<template>
  <div>
      <v-row align-h="center" class="mt-2 mx-0">
        <v-card
          class="mx-0 px-0"
          max-width="230"
          elevation="0"
          style="background: none !important"
        >
          <v-img
            height="230"
            src="http://lorempixel.com/350/150/people/2"
            style="border-radius: 100%; background: none !important"
          >
          </v-img>
        </v-card>
      </v-row>
      <v-row justify="center" class="mb-5 mt-4 mx-0">
        <h3>{{getName}}</h3>
      </v-row>
      <v-row  class="text-center pr-5 mx-0" >
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
      </v-row>
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
        { text: 'Solicitudes', icon: 'mdi-bell',href:'Solicitudes' },
        
      ],
    }
  },
  computed:{
    getName(){
      return this.$store.state.firstName.split(' ')[0]+" "+this.$store.state.lastName.split(' ')[0]
    },
    getUserId(){
      return this.$store.state.id
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
    this.items[6].visible = (profileName=='Adopter')?true:false
  }
};
</script>

<style scoped>
  .menu-i:hover{
    text-decoration:none !important;
  }
</style>
