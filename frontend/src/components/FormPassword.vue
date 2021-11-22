<template>
  <v-container class="cuad to">
    <v-row :align="center" :justify="center">
      <v-col class="text-center">
        <div class="mb-5">
          <h1>Restauracion de contraseña</h1>
          <span>Sigue las indicaciones!</span>
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
          <div class="mb-3">
            Responda la pregunta de seguridad que proveyo
            <v-text-field
              color="primary"
              v-model="answer"
              :rules="[rules[0].required]"
              :label="question"
            ></v-text-field>
          </div>
          <div class="text-right mb-3">
            <!-- <link class="txtr">¿Olvidaste tu contraseña?</link> -->
          </div>
        </v-form>
        <v-btn
          color="orange darken-4 white--text"
          :disabled="!valid"
        >
          Restaurar
        </v-btn>
        <div class="mt-4">
          <a href="/#/Login" type="button" class="btn colorbtn btn-sm white--text">
            Volver
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "FormPassword",
  data(){
    return{
      center:'center',
        valid: true,
        show1: false,
        email:'',
        dni:'',
        asnwer:'',
        question:'¿?',
        rules: 
            [
              {
                required: value => !!value || 'Campo requerido',
                email:{
                  valid: v => /.+@.+\..+/.test(v) || 'Ingrese un e-mail valido',

                }
              }
            ],
        form: {
          email: '',
          password: ''
        },
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
