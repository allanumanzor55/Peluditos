<template>
  <div class="profiles">
    <MyNavbar></MyNavbar>
    <div class="container">
      <form class="col s6">
        <div class="row">
          <div class="input-field col s12">
            <input id="profileName" type="text" class="validate" v-model="profileData.profileName">
            <label for="profileName">Nombre</label>
          </div>
          <div class="input-field col s12">
            <textarea id="descriptionProfile" class="materialize-textarea" v-model="profileData.description" />
            <label for="descriptionProfile">Descripcion</label>
          </div>
          <a class="btn orange darken-2 waves-effect waves-light" name="action" @click="saveProfile()">
            Guardar
          </a>
          <ul class="collection">
            <li class="collection-item" v-for="profile in profiles" :key="profile.id">
              <div class="row">
                <div class="col s3">
                  {{profile.profileName}}
                </div>
                <div class="col s1">
                  -
                </div>
                <div class="col s5">
                  {{profile.description}} 
                </div>
                <div class="col s3">
                  <a class="btn red darken-2 waves-effect waves-ligth" @click="deleteProfile(profile.id)">
                    Eliminar
                  </a>
                </div>
              </div>
              
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MyNavbar from '@/components/navbar.vue'
import {GET_ALL_PROFILES,SAVE_PROFILE,DELETE_PROFILE} from '@/graphql/queries/profilesQr'

export default {
  name: 'Profiles',
  components:{
    MyNavbar
  },
  data(){
    return {
      profileData : {id:0,profileName:'',description:''},
      profiles:[],
      isSuccessfuly:false
    }
  },
  methods:{
    async saveProfile(){
      const {data} = await this.$apollo.mutate({
        mutation: SAVE_PROFILE,
        variables:{
          name:this.profileData.profileName,
          description:this.profileData.description
        }
      }) 
      console.log(data.createProfileType.profileType)
    },
    async refreshTable(){
      const {data} = await this.$apollo.query({query:GET_ALL_PROFILES})
      this.profiles = data.allProfileTypes
    },
    async deleteProfile(id){
      console.log(id)
      await this.$apollo.mutate({
        mutation:DELETE_PROFILE,
        variables:{
          id:id
        }})
      this.refreshTable()
    }
  }
  ,
  async mounted(){
    this.refreshTable()
  },
  async updated(){
    this.refreshTable()
  }
}
</script>
