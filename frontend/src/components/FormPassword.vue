<template>
  <v-container class="cuad to">
    <v-row :align="center" :justify="center">
      <v-col class="text-center">
        <div class="mb-5">
          <h2>Recuperacion de contraseña</h2>
          <span>Ingresa los datos que se te solicitan para enviar la contraseña por correo</span>
        </div>
        <v-form ref="formLogin" v-model="valid" lazy-validation>
          <div class="mb-0">
            <v-text-field
              v-model="email"
              :rules="[rules[0].required, rules[0].email.valid]"
              label="E-mail"
              required
            >
            </v-text-field>
          </div>
          
          <div class="mb-3">
            <v-text-field
              color="primary"
              v-model="dni"
              :rules="[rules[0].required]"
              label="DNI"
            ></v-text-field>
          </div>
          <v-divider></v-divider>
          <div class="">
            <v-text-field
              color="primary"
              v-model="answer"
              :rules="[rules[0].required]"
              :label="question"
            ></v-text-field>
          </div>
        </v-form>
        <v-btn
          color="orange darken-4 white--text"
          :disabled="!valid || loading"
          @click="restorePassword"
          :loading="loading"
        >
          Restaurar
        </v-btn>
        <div class="mt-3">
          <a href="/#/login" type="button" class="btn colorbtn btn-sm white--text" @click="showPasswordComponent">
            Volver
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {RESTORE_PASSWORD} from '@/graphql/queries/userQueries'
export default {
  name: "FormPassword",
  data(){
    return{
      center:'center',
        valid: true,
        show1: false,
        loader:null,
        loading:false,
        showLoadingB:false,
        email:'',dni:'',answer:'',
        question:'Respuesta de seguridad',
        rules: 
            [
              {
                required: value => !!value || 'Campo requerido',
                email:{
                  valid: v => /.+@.+\..+/.test(v) || 'Ingrese un e-mail valido',

                }
              }
            ],
    }
  },
  watch:{
  },
  methods:{
    showPasswordComponent(){
        this.$store.commit('setRestorePassword')
    },
    async restorePassword(){
      this.loading=true
      const {data} = await this.$apollo.mutate({
      mutation:RESTORE_PASSWORD,
      variables:{email:this.email,dni:this.dni,answer:this.answer}})
      this.loading=false
      if(data.restorePassword.verified){
        
        this.$swal({icon:'success',title:'Confirmacion exitosa',text:data.restorePassword.msg}) 
        this.showPasswordComponent()          
      }else{
        this.$swal({icon:'error',title:'Error',text:data.restorePassword.msg})            
      }
    }
  }
};
</script>

<style scoped>
.cuad {
  width: 30%;
  min-height: 67%;
  background-color: #ffc581;
  padding: 20px;
  border-radius: 60px;
}

.to {
  margin-left: 55%;
  margin-top: 7%;
}

.txtr {
  color: rgb(103, 103, 104);
  font-size: 13px;
}
.txtl {
  text-align: left;
}

.quince {
  font-size: 15px;
}
.txt13 {
  font-size: 13px;
}

.tit {
  font-size: 50px;
}

.colorbtn {
  background: #ff9922 !important;
  border-color: #ff9922 !important;
}
.colorbtn:hover {
  background-color: #f8a94e !important;
}
</style>
