<template>
    <div>
        <NavbarHome/>
        <div class="im mt-7"> 
          <Dashboard :user="userType"/>
        </div>
    </div>
</template>



<script>
import NavbarHome from '@/components/NavbarHome.vue'
import Dashboard from '@/components/Dashboard.vue'
export default {
  name: 'home',
  components: {
    NavbarHome,Dashboard
  },
  data(){
    return{
      userType:'adopter'
    }
  },

  methods:{
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
    if(!this.$store.state.emailVerified){
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