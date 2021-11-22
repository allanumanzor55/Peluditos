<template>
  <div class="fondo">
    <div></div>
    <div class="rec">
      <div class="in-rec">
        <FormLogin />
      </div>
    </div>
    <div class="semi">
      <img alt="logo" class="imglg" src="../assets/logo.png" />
    </div>
  </div>
</template>
<script>
import FormLogin from "@/components/FormLogin.vue";
// import FormPassword from '@/components/FormPassword.vue'
export default {
  name: "Login",
  components: { FormLogin, },
  data(){
    return{
      centinelPassword:false,
      
    }
  },
  created(){

  }
};
</script>

<style scoped>
.fondo {
  position: absolute;
  width: 100%;
  min-height: 100%;
  left: 0px;
  top: 0px;

  background: #ff9922;
  border-radius: 0px;
}
.rec {
  position: relative;
  width: 100%;
  height: 625px;
  left: 0px;
  top: 0;
  display: inline-block;
  background: #ffad4d;
  border-radius: 0px 0px 512px 0px;
}

.in-rec{
  position:relative;
  bottom:5%;
}

.semi {
  position: absolute;
  width: 38%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #fff48db2;
  border-radius: 0px 350px 350px 0px;
}
.imglg {
  width: 40%;
  height: 28%;
  margin-top: 45%;
  margin-left: 25%;
}

@media (min-width:700px) and (max-width: 1080) {
  .imglg{
    width:80%;
    margin: 80%;
    margin: 25%;
  }
}
</style>
