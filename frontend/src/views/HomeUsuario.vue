<template>
    <div style="background:#D8DBF0;">
        <div>
          <NavbarHome />
        </div>
        <div class="im"> 
      <b-container align-v="center" class="" fluid>
        <b-card-group deck>
          <b-col cols="2" class="mb-0">
              <b-card
              header-text-variant="white"
              align="center"
              style="height:150px;"
              class="mb-2 card-dashboard">
                <b-card-text> 
                  <h4> Mascotas adoptadas</h4></b-card-text>
                  <h5>0</h5>
              </b-card>
              <b-card
              header-text-variant="white"
              align="center"
              style="height:150px;"
              class="mb-2 card-dashboard">
                <b-card-text> 
                  <h4> Mascotas en adopcion</h4>
                  <h5>0</h5>

                </b-card-text>
              </b-card>
              <b-card
              header-text-variant="white"
              align="center"
              style="height:150px;"
              class="mb-2 card-dashboard">
                <b-card-text> 
                  <h4> Solicitudes enviadas</h4></b-card-text>
                  <h5>0</h5>
              </b-card>
              <b-card
              header-text-variant="white"
              align="center"
              style="height:150px;"
              class="mb-2 card-dashboard">
                <b-card-text> 
                  <h4> Solicitudes pendientes</h4></b-card-text>
                  <h5>0</h5>
              </b-card>
          </b-col>
          <b-col cols="8">
            <b-card
              header-text-variant="white"
              align="center"
              style="height:620px;"
              class="mb-2 card-dashboard">
                <b-card-text> 
                </b-card-text>
              </b-card>
          </b-col>
        </b-card-group>
      </b-container>
      
      <b-container class="bv-example-row">
  <!--b-row>
    <b-col class="float-top"><img src="../assets/fondohomeuser.jpg" alt="" class="img"></b-col>
  </b-row-->
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

<style>
.img{
  height: 100px;
  width: 100px;
  margin-left: 100%;
  margin-top: 5%;
}
.im{
    height: 100%;
    width: 100%!important;
    display: inline-block;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 20%;
}
::-webkit-scrollbar {
    display: none;
}

.card-dashboard:hover{
  border-color:orange !important;
  color:orange !important;
}

</style>