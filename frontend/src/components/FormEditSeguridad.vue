<template>
  <div>
    <h4 class="text-center">Editar Datos Confidenciales</h4>
    <v-divider inset></v-divider>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Cambiar Correo" active>
          <div>
            <span>Ingrese sus credenciales actuales</span>
            <v-form ref="updateEmail" v-model="validEmail" lazy-validation>
              <v-container class="bv-example-row">
                <v-row>
                  <v-col>
                    <v-text-field
                      label="Email"
                      color="orange darken-3"
                      type="email"
                      id="r-emaila"
                      :rules="[rules[0].required, rules[0].valid.email]"
                      required
                      v-model="infoUpdate1.email"
                    >
                    </v-text-field>
                    <v-text-field
                      label="Contraseña"
                      color="orange darken-3"
                      type="password"
                      id="r-passwordac"
                      :rules="[rules[0].required]"
                      v-model="infoUpdate1.password"
                    >
                    </v-text-field>
                  </v-col>
                </v-row> </v-container
              ><br />
              <v-btn
                color="orange darken-4 white--text"
                :disabled="!validEmail"
                @click="updateEmail"
              >
                Actualizar
              </v-btn>
            </v-form>
          </div>
        </b-tab>

        <b-tab title="Cambiar Contraseña">
          <div>
            <span>Ingrese sus credenciales actuales</span>
            <v-form
              ref="updatePassword"
              v-model="validPassword"
              lazy-validation
            >
              <v-container class="bv-example-row">
                <v-row>
                  <v-col>
                    <v-text-field
                      label="Email"
                      color="orange darken-3"
                      type="email"
                      id="r-emailc"
                      :rules="[rules[0].required, rules[0].valid.email]"
                      v-model="infoUpdate2.email"
                    >
                    </v-text-field>
                    <v-text-field
                      label="Contraseña"
                      color="orange darken-3"
                      type="password"
                      id="r-passwordc"
                      :rules="[rules[0].required]"
                      v-model="infoUpdate2.password"
                    >
                    </v-text-field>
                  </v-col>
                </v-row> </v-container
              ><br />
              <v-btn
                color="orange darken-4 white--text"
                :disabled="!validPassword"
                @click="updatePassword"
              >
                Actualizar
              </v-btn>
            </v-form>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import { TRY_LOGIN,USER_UPDATE } from "@/graphql/queries/userQueries.js";
export default {
  data() {
    return {
      validEmail: true,
      validPassword: true,
      infoUpdate1: {
        password: "",
        email: "",
      },
      infoUpdate2: {
        password: "",
        email: "",
      },
      rules: [
        {
          required: (value) => !!value || "Campo requerido",
          valid: {
            email: (v) => /.+@.+\..+/.test(v) || "Ingrese un e-mail valido",
            onlyText: (v) =>
              /^([A-Za-z0-9]*)+$/.test(v) || "No se permiten numeros",
          },
        },
      ],
    };
  },
  methods: {
    async updateEmail() {
      try {
        if (this.$refs.updateEmail.validate()) {
          const { data } = await this.$apollo.mutate({
            mutation: TRY_LOGIN,
            variables: {
              email: this.infoUpdate1.email,
              password: this.infoUpdate1.password,
            },
          });
          if (data.tryLogin.verified) {
            await this.$swal({
              icon: "warning",
              title: "Crendeciales verificadas",
              text: "Ingrese el nuevo correo",
              input: "email",
              inputAttributes: {
                autocapitalize: "off",
              },
              inputPlaceholder: "Escribe el nuevo correo",
              showCancelButton: true,
              confirmButtonColor: "#F57C00",
              cancelButtonColor: "#d33",
              confirmButtonText: "Confirmar",
              cancelButtonText: "Cancelar",
              showLoaderOnConfirm: true,
              preConfirm: async (value) => {
                try {
                  if (value == "") {
                    throw new Error("Ingrese un correo");
                  } else {
                    const dataEmail = {email:value,id:this.$store.state.id,address:{}}
                    const {verified} = (await this.$apollo.mutate({mutation:USER_UPDATE,variables:{userData:dataEmail}})).data.updateUser
                    if(verified){
                      this.$swal({icon:'success',title:'Correo modificado'})
                      this.$refs.updateEmail.reset()
                    }else{
                      this.$swal({icon:'error',title:'Algo salio mal, intentalo de nuevo'})
                    }
                  }
                } catch (error) {
                  this.$swal.showValidationMessage(`Envio fallido, ${error}`);
                }
              },
              preDeny: () => {
                return { cancel: false };
              },
              allowOutsideClick: () => !this.$swal.isLoading(),
            });
          } else {
            this.$swal({
              icon: "error",
              title: "Error de validacion",
              text: "Credenciales incorrectas",
            });
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    async updatePassword() {
      try {
        if (this.$refs.updatePassword.validate()) {
          const { data } = await this.$apollo.mutate({
            mutation: TRY_LOGIN,
            variables: {
              email: this.infoUpdate2.email,
              password: this.infoUpdate2.password,
            },
          });
          if (data.tryLogin.verified) {
            await this.$swal({
              icon: "warning",
              title: "Crendeciales verificadas",
              text: "Ingrese la nueva contraseña",
              input: "password",
              inputAttributes: {
                autocapitalize: "off",
              },
              inputPlaceholder: "Escribe la nueva contraseña",
              showCancelButton: true,
              confirmButtonColor: "#F57C00",
              cancelButtonColor: "#d33",
              confirmButtonText: "Confirmar",
              cancelButtonText: "Cancelar",
              showLoaderOnConfirm: true,
              preConfirm: async (value) => {
                try {
                  if (value == "") {
                    throw new Error("Ingrese una contraseña");
                  } else {
                    const dataPassword = {password:value,id:this.$store.state.id,address:{}}
                    const {verified} = (await this.$apollo.mutate({mutation:USER_UPDATE,variables:{userData:dataPassword}})).data.updateUser
                    if(verified){
                      this.$swal({icon:'success',title:'contraseña modificada'})
                      this.$refs.updatePassword.reset()
                    }else{
                      this.$swal({icon:'error',title:'Algo salio mal, intentalo de nuevo'})
                    }
                  }
                } catch (error) {
                  this.$swal.showValidationMessage(`Error, ${error}`);
                }
              },
              preDeny: () => {
                return { cancel: false };
              },
              allowOutsideClick: () => !this.$swal.isLoading(),
            });
          } else {
            this.$swal({
              icon: "error",
              title: "Error de validacion",
              text: "Credenciales incorrectas",
            });
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
