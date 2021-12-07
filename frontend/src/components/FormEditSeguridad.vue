<template>

  <div>
    <h4 class="text-center">Editar Datos Confidenciales</h4>
          <v-divider inset></v-divider>
      <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Cambiar Correo" active>
            <div>
            <span>Ingrese sus credenciales actuales</span>
          <v-form ref="updateForm" v-model="valid" lazy-validation>
            <v-container class="bv-example-row">
              <v-row>
                <v-col>
                    <v-text-field label="Email" color="orange darken-3"  type="email" id="r-emaila" v-model="form.email"
                    :rules="[rules[0].required,rules[0].valid.email]"
                    required
                    >                      
                    </v-text-field>
                    <v-text-field label="Contraseña" color="orange darken-3"  type="password" id="r-passwordac" v-model="form.password"
                  :rules="[rules[0].required]">
                  </v-text-field>

                  <br>
                  <span>Ingrese su nuevo correo</span>
                  <v-text-field label="Email" color="orange darken-3"  type="email" id="r-emailac" v-model="infoUpdate.email"
                    :rules="[rules[0].required,rules[0].valid.email]"
                    required
                    >                      
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container><br>
              <v-btn 
              color="orange darken-4 white--text"
              :disabled="!valid"
              @click="updateSeguridad">
              Actualizar
              </v-btn>
          </v-form>
        </div>
        </b-tab>


        <b-tab title="Cambiar Contraseña">
                      <div>
            <span>Ingrese sus credenciales actuales</span>
          <v-form ref="updateForm" v-model="valid" lazy-validation>
            <v-container class="bv-example-row">
              <v-row>
                <v-col>
                    <v-text-field label="Email" color="orange darken-3"  type="email" id="r-emailc" v-model="form.email"
                    :rules="[rules[0].required,rules[0].valid.email]"
                    required
                    >                      
                    </v-text-field>
                    <v-text-field label="Contraseña" color="orange darken-3"  type="password" id="r-passwordc" v-model="form.password"
                  :rules="[rules[0].required]">
                  </v-text-field>

                  <br>
                  <span>Ingrese su nueva contraseña</span>
                  <v-text-field label="Contraseña" color="orange darken-3"  type="password" id="r-passwordn" v-model="infoUpdate.password"
                  :rules="[rules[0].required]">
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container><br>
              <v-btn 
              color="orange darken-4 white--text"
              :disabled="!valid"
              @click="updateSeguridad">
              Actualizar
              </v-btn>
          </v-form>
        </div>
        </b-tab>
      </b-tabs>
  </div>
  </div>
</template>

<style scoped>

</style>

<script>
  import {USER_UPDATE_SEGURIDAD, LOGIN_USER} from '@/graphql/queries/userQueries.js'
  import Cookies from "js-cookie";
  export default {
    data() {
      return {
        valid:true,
        infoUpdate:{
          password:'',
          email:''
        },
        form: {
        email: "",
        password: "",
        },
        rules:[
          {
            required: value=>!!value  || 'Campo requerido',
            valid:{
              email: v => /.+@.+\..+/.test(v) || 'Ingrese un e-mail valido',
              onlyText: v=> /^([A-Za-z0-9]*)+$/.test(v) || 'No se permiten numeros'
            }
          }
        ]
      }
    },
    methods:{
      validate() {
        if (this.$refs.formLogin.validate()) {
          this.login_user();
        }
      },
      async updateSeguridad() {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: LOGIN_USER,
          variables: { email: this.form.email, password: this.form.password },
        });
        this.login = data.login;
        if (this.login.verified) {
          if (!(Cookies.get('token'))=="") {
            if(this.$refs.updateForm.validate()){
              const {data} = await this.$apollo.mutate({
                mutation: USER_UPDATE_SEGURIDAD,
                variables:{userData:this.infoUpdate}
              })
              console.log(data.updateUser.updateUser)
              if(data.updateUser.updateUser){
                this.$swal({
                  icon:'success',
                  title:'Exitoso',
                  text:'Los datos se actualizarón correctamente',
                }).then(()=>{
                  this.$router.push('/perfilusuario')
                })
              }
            }
          }
        } else {
          if (this.login.user === null) {
            this.$swal({ icon: "error", title: "credenciales incorrectas" });
          } 
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    }
  }
</script>