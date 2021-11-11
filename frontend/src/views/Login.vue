<template>
  <div class="fondo">
    <div class="rec">
      <FormLogin />
    </div>
    <div class="semi">
      <img alt="logo" class="imglg" src="../assets/logo.png" />
    </div>
  </div>
</template>
<script>
import FormLogin from "@/components/FormLogin.vue";
////import {LOGIN_USER} from '@/graphql/queries/userQueries'
export default {
  name: "Login",
  components: { FormLogin },
};
</script>

<style>
.fondo {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;

  background: #ff9922;
  border-radius: 0px;
}
.rec {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  display: inline-block;
  background: #ffad4d;
  border-radius: 0px 0px 512px 0px;
}

.semi {
  position: absolute;
  width: 500px;
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
</style>
