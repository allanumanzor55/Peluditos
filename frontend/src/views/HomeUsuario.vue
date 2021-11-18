<template>
    <div>
        <div>
          <NavbarHome/>
        </div>
        <div class="im"> 
          <Dashboard :user="userType"/>
        </div>
    </div>
</template>



<script>
import NavbarHome from '@/components/NavbarHome.vue'
import Dashboard from '@/components/Dashboard.vue'
import {GET_USER_INFO} from '@/graphql/queries/userQueries.js'
export default {
  name: 'home',
  components: {
    NavbarHome,Dashboard
  },
  data(){
    return{
      emailVerified:false,
      userType:'adopter'
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