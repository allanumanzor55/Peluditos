<template>
    <div>
    <h4 class="text-center">Acerca de mi ...</h4>
    <v-divider inset></v-divider>
    <v-container fluid>
    <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="Mi Biografía"
      v-model="biografyData.biography"
    ></v-textarea>
    <br>
    <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="Mi lema"
      v-model="biografyData.motto"
    ></v-textarea>
    <v-btn
      @click="updateBiography"
      depressed
      color="orange darken-4 white--text"
    >
      Guardar
    </v-btn>
  </v-container>
    </div>
</template>

<script>
import {GET_BIOGRAFY_INFO,UPDATE_BIOGRAFY_INFO} from '@/graphql/queries/userQueries'
export default { 
  data: ()=>({
    biografyData:{
      biography:'',
      motto:'',
      address:{

      }
    }
  }),
  methods:{
    async updateBiography(){
      this.biografyData.address = {}
      const {updateUser}= (await this.$apollo.mutate({mutation:UPDATE_BIOGRAFY_INFO,variables:{userData:this.biografyData}})).data
      if(updateUser.verified){
        this.biografyData = updateUser
        this.$swal({'icon':'success',title:'Biografia actualizada'})
      }else{
        this.$swal({'icon':'error',title:'Algo salio mal'})
      }
    }
  },
  async created(){
    this.biografyData = (await this.$apollo.query({query:GET_BIOGRAFY_INFO,variables:{id:this.$store.state.id}})).data.user
    delete this.biografyData['__typename']
  }
}
</script>