<template>
  <v-container class="cuad to">
    <v-row :align="center" :justify="center">
      <v-col class="text-center">
        <div class="mb-5">
          <h1>¡Bienvenido!</h1>
          <span>Ingresa tus credenciales</span>
        </div>
      <v-form ref="formLogin" v-model="valid" lazy-validation>
        <div class="mb-3">
            <v-text-field
            v-model="form.email"
            :rules="[rules[0].required,rules[0].email.valid]"
            label="E-mail"
            required
            >
            </v-text-field>
        </div>
        <div class="mb-3">
            <v-text-field
            
              color="primary"
              v-model="form.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules[0].required]"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
        </div>
        <div class="text-right mb-3">
          <!-- <link class="txtr">¿Olvidaste tu contraseña?</link> -->
        </div>
      </v-form>
      <v-btn 
        color="orange darken-4 white--text"
        :disabled="!valid"
        @click="validate"
      >
        Ingresar
      </v-btn>
      <div class="mt-4">
        <span class="txt13">¿Aun no tienes una cuenta?</span> <br />
        <a href="/#/Registro" type="button" class="btn colorbtn btn-sm white--text">Registrate</a>
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
//import {mapState} from 'vuex'
import {LOGIN_USER} from '@/graphql/queries/userQueries'
  export default {
    data() {
      return {
        center:'center',
        valid: true,
        show1: false,
        password: '',
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
    },
    methods:{
      validate () {
        if(this.$refs.formLogin.validate()){
          this.login_user()
        }
      },
      async login_user(){
        const {data} = await this.$apollo.mutate({
            mutation: LOGIN_USER,
            variables:{email:this.form.email,password:this.form.password}
          })
          this.login = data.login.verified
          if(this.login){
            this.$swal({
              icon:'success',
              title:'bienvenido'
            }).then(()=>{
              this.$router.push('/Home')

            })
          }else{
            console.log('Error')
            this.$swal({
              icon:'error',
              title:'credenciales incorrectas'
            })
          }
        },
        onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.celular = ''
          this.form.password = ''

          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    }
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
