<template>

  <div>
        <div>
        <h4 class="text-center">Datos personales</h4>
          <v-divider inset></v-divider>
        <div class="pad">
          <v-form ref="registerForm" v-model="valid" lazy-validation>
            <v-container class="bv-example-row">
              <v-row>
                <v-col>
                    <v-text-field label="Nombres" color="orange darken-3"  type="text" id="r-nombre" v-model="registerInfo.firstName"
                    :rules="[rules[0].required]"
                    >
                    </v-text-field>
                    <v-text-field label="Edad" color="orange darken-3"  type="text" id="r-edad" v-model="registerInfo.age"
                    :rules="[rules[0].required,rules[0].valid.age,rules[0].max.age,rules[0].min.age]">
                    </v-text-field>
                    <v-text-field label=" Celular principal" color="orange darken-3" type="text" id="r-celularp" v-model="registerInfo.principalCellphone"
                    :rules="[rules[0].required,rules[0].valid.number]">
                    </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="Primer apellido" color="orange darken-3"  type="text" id="r-apellido" v-model="registerInfo.lastName"
                  :rules="[rules[0].required]">
                  </v-text-field>
                  <v-text-field label="DNI" color="orange darken-3"  type="text" id="r-id" v-model="registerInfo.dni"
                  :rules="[rules[0].required,rules[0].valid.dni]">
                  </v-text-field>
                  <v-text-field label="Celular auxiliar" hint="opcional" persistent-hint color="orange darken-3" type="text" id="r-ccelularax" v-model="registerInfo.auxiliarCellphone">
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
                      v-model="registerInfo.address.department"
                      :items="optionsDepa"
                      label="Departamento"
                      color="orange darken-3"
                      :rules="[rules[0].required]"
                    ></v-combobox>
                    <v-text-field label="Colonia" color="orange darken-3"  type="text" id="r-colonia" v-model="registerInfo.address.suburb" 
                    :rules="[rules[0].required]">
                    </v-text-field>
                    <v-text-field label="Residencia" hint="opcional" persistent-hint color="orange darken-3"  type="text" id="r-residencia" v-model="registerInfo.address.residence">
                    </v-text-field>
                    <v-combobox
                      clearable
                      v-model="registerInfo.secureQuestion"
                      :items="optionsQuestion"
                      label="Pregunta de seguridad"
                      color="orange darken-3"
                      :rules="[rules[0].required]"
                    ></v-combobox>
                  </v-col>
                  <v-col>
                    <v-combobox
                      clearable
                      label="Ciudad"
                      v-model="registerInfo.address.city"
                      :items="optionsCity"
                      color="orange darken-3"
                      :rules="[rules[0].required]"
                    ></v-combobox>
                    <v-text-field label="Calle" color="orange darken-3"  type="text" id="r-calle" v-model="registerInfo.address.street"
                    :rules="[rules[0].required]">
                    </v-text-field>
                    <v-text-field label="Referencia" hint="opcional" persistent-hint color="orange darken-3"  type="text" id="r-referencia" v-model="registerInfo.address.reference">
                    </v-text-field>
                    <v-text-field label="Respuesta de seguridad" color="orange darken-3"  type="text" id="r-referencia" v-model="registerInfo.secureAnswer" 
                    :rules="[rules[0].required]">
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-lazy>
              <v-btn 
              color="orange darken-4 white--text"
              :disabled="!valid"
              @click="register">
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
  import {REGISTER_USER} from '@/graphql/queries/userQueries.js'
  export default {
    data() {
      return {
        valid:true,
        registerInfo:{
          firstName:'',
          lastName:'',
          age:'',
          dni:'',
          principalCellphone:'',
          auxiliarCellphone:'',
          address:{
            department:'',
            city:'',
            suburb:'',
            residence:'',
            reference:''
          },
          secureAnswer:'',
          secureQuestion:'',
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
              title:'Peluditos',
              text:'Los datos se actualizarón correctamente',
            }).then(()=>{
              this.$router.push('/Home')
            })
          }else{
            this.$swal({
              icon:'error',
              title:'Algo salio mal',
              text:'Verifica los campos e intentalo de nuevo'
            })
          }
        }
      }
    }
  }
</script>