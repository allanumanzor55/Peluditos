<template>
  <div>
    <NavbarHome />
    <v-container fluid class="p-0 position-relative" fill-height>
      <v-row class="mx-3">
        <v-breadcrumbs :items="items" class="mb-0">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <v-spacer></v-spacer>
        <v-col cols="3" class="mr-5">
          <v-text-field
          label="Buscar"
          color="orange"
          prepend-inner-icon="mdi-magnify"
          v-model="filtro"
          @keyup="filterUsers"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-container class="mt-3 orange lighten-5 vh-100 position-relative" style="min-width:90%;">
        <v-row class="orange lighten-1 rotulo-superficial" justify="center" align="center">
          <h3 class="white--text">Usuarios registrados</h3>
        </v-row>
        <v-row justify="start" align="start" class="mt-8">
          <v-col style="max-width:20%" v-for="us in users" :key="us.id">
            <UserCard :userData="us"></UserCard>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { GET_ALL_USERS_QUERY,SEARCH_USER } from "@/graphql/queries/userQueries"
import NavbarHome from "@/components/NavbarHome"
import UserCard from '@/components/UserCards'
export default {
  name: "Users",
  components: {NavbarHome,UserCard},
  data() {
    return {
      filtro:'',
      n:3,
      show: false,
      users: [],
      items: [
        {
          text: "Inicio",
          disabled: false,
          href: "#/Home/",
        },
        {
          text: "Usuarios",
          disabled: true,
          href: "#/Users",
        }
      ],
    };
  },
  methods:{
    async getUsers(){
      const { data } = await this.$apollo.query({ query: GET_ALL_USERS_QUERY });
      return data.allUsers;
    },
    async filterUsers(){
      const {data} = await this.$apollo.query({query:SEARCH_USER,variables:{firstName:this.filtro}})
      this.users = data.getUsers
      console.log(this.users)
    }
  },
  async mounted() {
    this.users = await this.getUsers()
  },
};
</script>

<style>
::-webkit-scrollbar{ 
  display: none;
}
.rotulo-superficial{
  min-width: 60%;
  min-height: 10%;
  top:-2%;
  left:20%;
  position:absolute;
  border-radius: 20px;
}
</style>