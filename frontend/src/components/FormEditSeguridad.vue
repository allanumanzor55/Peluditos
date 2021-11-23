<template>

  <div>
    <h4 class="text-center">Editar Datos Confidenciales</h4>
          <v-divider inset></v-divider>
      <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Cambiar Correo" active>
            <div>
            <span>Ingrese sus credenciales actuales</span>
          <v-form ref="registerForm" v-model="valid" lazy-validation>
            <v-container class="bv-example-row">
              <v-row>
                <v-col>
                    <v-text-field label="Email" color="orange darken-3"  type="email" id="r-email" v-model="registerInfo.email"
                    :rules="[rules[0].required,rules[0].valid.email]"
                    required
                    >                      
                    </v-text-field>
                    <v-text-field label="Contraseña" color="orange darken-3"  type="password" id="r-password" v-model="registerInfo.password"
                  :rules="[rules[0].required]">
                  </v-text-field>

                  <br>
                  <span>Ingrese su nuevo correo</span>
                  <v-text-field label="Email" color="orange darken-3"  type="email" id="r-email" v-model="registerInfo.email"
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
              @click="register">
              Actualizar
              </v-btn>
          </v-form>
        </div>
        </b-tab>


        <b-tab title="Cambiar Contraseña">
                      <div>
            <span>Ingrese sus credenciales actuales</span>
          <v-form ref="registerForm" v-model="valid" lazy-validation>
            <v-container class="bv-example-row">
              <v-row>
                <v-col>
                    <v-text-field label="Email" color="orange darken-3"  type="email" id="r-email" v-model="registerInfo.email"
                    :rules="[rules[0].required,rules[0].valid.email]"
                    required
                    >                      
                    </v-text-field>
                    <v-text-field label="Contraseña" color="orange darken-3"  type="password" id="r-password" v-model="registerInfo.password"
                  :rules="[rules[0].required]">
                  </v-text-field>

                  <br>
                  <span>Ingrese su nueva contraseña</span>
                  <v-text-field label="Contraseña" color="orange darken-3"  type="password" id="r-password" v-model="registerInfo.password"
                  :rules="[rules[0].required]">
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container><br>
              <v-btn 
              color="orange darken-4 white--text"
              :disabled="!valid"
              @click="register">
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
  import {REGISTER_USER} from '@/graphql/queries/userQueries.js'
  export default {
    data() {
      return {
        valid:true,
        registerInfo:{
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
      async register(){
        if(this.$refs.registerForm.validate()){
          const {data} = await this.$apollo.mutate({
            mutation: REGISTER_USER,
            variables:{userData:this.registerInfo}
          })
          console.log(data.register.register)
          if(data.register.register){
            this.$swal({
              icon:'success',
              title:'Registro exitoso',
              text:'Bienvenido a Peluditos',
            }).then(()=>{
              this.$router.push('/Home')
            })
          }else{
            this.$swal({
              icon:'error',
              title:'Algo salio mal',
              text:'Intentalo de nuevo'
            })
          }
        }
      }
    }
  }
</script>