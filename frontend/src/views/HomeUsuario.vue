<template>
    <div>
        <div>
          <NavbarHome/>
        </div>
        <div class="im"> 
      <b-container align-v="center" class="wrapper" fluid>
        <div>
        <v-card
          class="mx-auto"
          max-width="344"
          >
          <v-img class="img" 
            src="../assets/2.png"
          ></v-img>
          <v-card-title class="justify-center">
            Mascotas Adoptadas
          </v-card-title>
          <v-card-subtitle>
            1
          </v-card-subtitle>
        </v-card>
        </div>

        <div>
          <v-card
          class="mx-auto"
          max-width="344"
          >
          <v-img class="img" 
            src="../assets/1.png"
          ></v-img>
          <v-card-title class="justify-center">
            Mascotas Publicadas
          </v-card-title>
          <v-card-subtitle>
            0
          </v-card-subtitle>
        </v-card>
        </div>

        <div>
          <v-card
          class="mx-auto"
          max-width="344"
          >
          <v-img class="img" 
            src="../assets/3.png"
          ></v-img>
          <v-card-title class="justify-center">
            Solicitudes Pendientes
          </v-card-title>
          <v-card-subtitle>
            0
          </v-card-subtitle>
        </v-card>
        </div>

        <div>
          <v-card
          class="mx-auto"
          max-width="344"
          >
          <v-img class="img" 
            src="../assets/4.png"
          ></v-img>
          <v-card-title class="justify-center">
            Solicitudes Recibidas
          </v-card-title>
          <v-card-subtitle>
            0
          </v-card-subtitle>
        </v-card>
        </div>
      </b-container>
        </div>
    </div>
</template>



<script>
import NavbarHome from '@/components/NavbarHome.vue'
import {GET_USER_INFO} from '@/graphql/queries/userQueries.js'
export default {
  name: 'home',
  components: {
    NavbarHome
  },
  data(){
    return{
      emailVerified:false
    }
  },

  methods:{
    async confirmVerifiedEmail(){
      const {data} = await this.$apollo.query({
            query: GET_USER_INFO,
            variables:{id:2}
          })
          this.emailVerified = data.user.verified

          console.log(this.emailVerified)
    },
    makeToast(append = false) {
        this.toastCount++
        this.$bvToast.toast(`Recuerda confirmar tu correo electronico para eliminar este mensaje flotante`, {
          title: 'Confirmacion de email',
          autoHideDelay: 5000,
          appendToast: append
        })
      }
  },
  async mounted(){
    await this.confirmVerifiedEmail()
    if(!this.emailVerified){
      this.makeToast()
    }
  }
}
</script>

<style scoped>
.im{
    height: 100%;
    width: 100%!important;
    display: inline-block;
}

::-webkit-scrollbar {
    display: none;
}

.v-card:hover{
  border-color:orange !important;
  color:orange !important;
}

.img{
  width: 50%!important;
  height: 50%!important;
  margin-left: 23%;
}

.wrapper {
  margin-top: 3%;
  display: grid;
  grid-template-columns: repeat(2, 30%);
  grid-gap: 30px;
  margin-left: 20%;
}

div{
  text-align: center;
}

</style>