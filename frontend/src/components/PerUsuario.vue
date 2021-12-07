<template>
  <div>
     <div class="titulo text--white">
            <h4>¡Bienvenido a tu Perfil!</h4>
        </div>
    <div>
      <v-container class="mt">
        <hr>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="7"
      >
       <v-card
       elevation="0">
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-pencil
        </v-icon>
        Editar
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-book
        </v-icon>
        Biografía
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-lock
        </v-icon>
        Seguridad
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
              <FormEdit/>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              <BioUsuario/>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <FormEditSeguridad/>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
      </v-col>
      <v-col
        md="1"
      >
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <v-card
    class="mx-auto"
    max-width="400"
    elevation="0"
  >
    <v-img
      class="align-end"
      height="380px"
      :src="'http://lorempixel.com/400/200/people/'+ getUserId"

    >
    </v-img>
    <v-card-title>{{infoUser.firstName}} {{infoUser.lastName}}</v-card-title>
    <v-card-text class="text--primary">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </v-card-text>
  </v-card>
      </v-col>
    </v-row>
  </v-container>
    </div>
  </div>
</template>

<style scoped>
div{
    background-color:white ;
}

.col-md-8{
    font-size: 12px!important;
}
.align-end{
    border-radius: 100%!important;
}

.titulo{
  width: 400px;
  height:50px;
  background-color: #fdcc8d;
  text-align: center;
  margin: auto!important;
  top: 15px!important;
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 3px 10px 0 rgba(0,0,0,.12)!important;
  padding: 10px;
  color: black;
}
.mt{
  margin-top: 2%;
}
</style>

<script>
import FormEdit from '@/components/FormEdit.vue'
import FormEditSeguridad from '@/components/FormEditSeguridad.vue'
import BioUsuario from '@/components/BioUsuario.vue'
import {GET_USER_INFO_UPDATE} from '@/graphql/queries/userQueries.js'
export default {
  data() {
      return {
        idUser:0,
        infoUser:{},
      }
  },
    components:{
        FormEdit,
        FormEditSeguridad,
        BioUsuario
    },
    computed:{
    getUserId(){
      return this.$store.state.id
    }
    },
      async getUser(){
      this.idUser = this.$store.state.id;
      try{
        this.infoUser = (await this.$apollo.query({query:GET_USER_INFO_UPDATE,variables:{id:this.idUser}})).data.user
      }catch(e){
        console.log(e.getMessage)
      }
    }
}
</script>