<template>

  <div>
        <div>
        <h4 class="text-center">Datos personales</h4>
          <v-divider inset></v-divider>
        <div class="pad">
          <v-form ref="updateForm" v-model="valid" lazy-validation>
            <v-container class="bv-example-row">
              <v-row>
                <v-col>
                    <v-text-field label="Nombres" v color="orange darken-3" type="text" id="r-nombre" v-model="infoUpdate.firstName"
                    :rules="[rules[0].required]"
                    >
                    </v-text-field>
                    <v-text-field label="Edad" color="orange darken-3"  type="text" id="r-edad" v-model="infoUpdate.age"
                    :rules="[rules[0].required,rules[0].valid.age,rules[0].max.age,rules[0].min.age]">
                    </v-text-field>
                    <v-text-field label=" Celular principal" color="orange darken-3" type="text" id="r-celularp" v-model="infoUpdate.principalCellphone"
                    :rules="[rules[0].required,rules[0].valid.number]">
                    </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="Primer apellido" color="orange darken-3"  type="text" id="r-apellido" v-model="infoUpdate.lastName"
                  :rules="[rules[0].required]">
                  </v-text-field>
                  <v-text-field label="DNI" color="orange darken-3"  type="text" id="r-id" v-model="infoUpdate.dni"
                  :rules="[rules[0].required,rules[0].valid.dni]">
                  </v-text-field>
                  <v-text-field label="Celular auxiliar" hint="opcional" persistent-hint color="orange darken-3" type="text" id="r-ccelularax" v-model="infoUpdate.auxiliarCellphone">
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <h4 class="text-center" >Datos residenciales</h4>
            <v-divider inset></v-divider>
            <v-lazy
            :options="{threshold: .5}"
            min-height="200"
            >
              <v-container class="bv-example-row">
                <v-row>
                  <v-col>
                    <v-combobox
                      clearable
                      v-model="infoUpdate.address.department"
                      :items="optionsDepa"
                      label="Departamento"
                      color="orange darken-3"
                      :rules="[rules[0].required]"
                    ></v-combobox>
                    <v-text-field label="Colonia" color="orange darken-3"  type="text" id="r-colonia" v-model="infoUpdate.address.suburb" 
                    :rules="[rules[0].required]">
                    </v-text-field>
                    <v-text-field label="Residencia" hint="opcional" persistent-hint color="orange darken-3"  type="text" id="r-residencia" v-model="infoUpdate.address.residence">
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <v-combobox
                      clearable
                      label="Ciudad"
                      v-model="infoUpdate.address.city"
                      :items="optionsCity"
                      color="orange darken-3"
                      :rules="[rules[0].required]"
                    ></v-combobox>
                    <v-text-field label="Calle" color="orange darken-3"  type="text" id="r-calle" v-model="infoUpdate.address.street"
                    :rules="[rules[0].required]">
                    </v-text-field>
                    <v-text-field label="Referencia" hint="opcional" persistent-hint color="orange darken-3"  type="text" id="r-referencia" v-model="infoUpdate.address.reference">
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-lazy>
              <v-btn 
              color="orange darken-4 white--text"
              :disabled="!valid"
              @click="updateUsers">
              Actualizar
              </v-btn>
          </v-form>
        </div>
    </div>
  </div>
</template>

<style scoped>


.pad{
    padding: 2%;
}

.col-md-8{
    font-size: 12px!important;
}

.mt{
  margin-top: 15%!important;
}
</style>

<script>
  import {GET_USER_INFO_UPDATE, USER_UPDATE} from '@/graphql/queries/userQueries.js'
  import Cookies from "js-cookie";
  export default {
    data() {
      return {
        valid:true,
        idUser:0,
        infoUpdate:{
        },
        rules:[
          {
            required: value=>!!value  || 'Campo requerido',
            valid:{
              number:v => /^([0-9]){8}$/.test(v) || 'Ingrese un numero de telefono valido',
              dni : v=> /^([0-9]){13}$/.test(v) || 'Ingrese un dni valido',
              onlyText: v=> /^([A-Za-z0-9]*)+$/.test(v) || 'No se permiten numeros',
              age: v=>/^([0-9]){1,}$/.test(v) || 'Ingrese una edad valida'
            },
            max:{
              age: v=> (v && parseInt(v) <= 103) || 'Edad no valida',
            },
            min:{
              age: v=>(v && parseInt(v)>15) || 'Registro valido para mayores de 15'
            }
          }
        ],
        optionsDepa: [
          'Atlántida' ,
          'Colón',
          'Comayagua' ,
          'Copán',
          'Cortés' ,
          'Choluteca' ,
          'El Paraíso' ,
          'Francisco Morazán' ,
          'Gracias a Dios' ,
          'Intibucá' ,
          'Islas de la Bahía' ,
          'La Paz' ,
          'Lempira' ,
          'Ocotepeque' ,
          'Olancho' ,
          'Santa Bárbara' ,
          'Valle' ,
          'Yoro',
        ],
        optionsCity: [
            'Tegucigalpa', 
            'Comayaguela', 
            'San Pedro Sula', 
            'Choloma', 
            'Valle De Angeles', 
            'El Progreso', 
            'Villanueva', 
            'Comayagua', 
            'Choluteca', 
            'Puerto Cortés', 
            'Danlí', 
            'Siguatepeque', 
            'Juticalpa', 
        ],
        optionsQuestion:[
          'Cual es tu animal favorito',
          'Cual es tu lugar de nacimiento',
          'Como se llama o llamo tu primer mascota',
          'Nombre de tu padre',
          'Nombre de tu madre'
        ]
      }
    },
    methods:{
      async updateUsers(){
        if(this.$refs.updateForm.validate()){
          const {data} = await this.$apollo.mutate({
            mutation: USER_UPDATE,
            variables:{userData:this.infoUpdate}
          })
          if(data.updateUser.verified){
            this.$swal({
              icon:'success',
              title:'Exitoso',
              text:'Los datos se actualizarón correctamente',
            })
            Cookies.set("firstName", data.updateUser.user.firstName);
            Cookies.set("lastName", data.updateUser.user.lastName);
          }else{
            this.$swal({
              icon:'error',
              title:'Algo salio mal',
              text:'Verifica los campos e intentalo de nuevo'
            })
          }
        }
      },
      async getUser(){
      this.idUser = this.$store.state.id;
      try{
        this.infoUpdate = (await this.$apollo.query({query:GET_USER_INFO_UPDATE,variables:{id:this.idUser}})).data.user;
        delete this.infoUpdate['__typename']
        delete this.infoUpdate.address['__typename']
        console.log(this.infoUpdate);
      }catch(e){
        console.log(e.message)
      }
    }
    },
    async created(){
      await this.getUser();
    }
  }
</script>