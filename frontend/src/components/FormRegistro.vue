<template>
    <div class="im">
        <div class="titulo">
            <h4>Registro de Usuario</h4>
        </div>
        <div class="cuerpo">
          <div class="mb-3">Datos personales</div>
          <v-divider inset></v-divider>
          <v-form ref="registerForm">
            <v-container class="bv-example-row">
              <v-row>
                <v-col>
                    <v-text-field label="Email" color="orange darken-3"  type="email" id="r-email" v-model="registerInfo.email"
                    >                      
                    </v-text-field>
                    <v-text-field label="Nombres" color="orange darken-3"  type="text" id="r-nombre" v-model="registerInfo.firstName">
                    </v-text-field>
                    <v-text-field label="Edad" color="orange darken-3"  type="text" id="r-edad" v-model="registerInfo.age">
                    </v-text-field>
                    <v-text-field label=" Celular principal" color="orange darken-3" type="text" id="r-celularp" v-model="registerInfo.principalCellphone">
                    </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="Contraseña" color="orange darken-3"  type="password" id="r-password" v-model="registerInfo.password">
                  </v-text-field>
                  <v-text-field label="Primer apellido" color="orange darken-3"  type="text" id="r-apellido" v-model="registerInfo.lastName">
                  </v-text-field>
                  <v-text-field label="DNI" color="orange darken-3"  type="text" id="r-id" v-model="registerInfo.dni">
                  </v-text-field>
                  <v-text-field label="Celular auxiliar" color="orange darken-3" type="text" id="r-ccelularax" v-model="registerInfo.auxiliarCellphone">
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <div class="mb-3">Datos residenciales</div>
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
                    ></v-combobox>
                    <v-text-field label="Colonia" color="orange darken-3"  type="text" id="r-colonia" v-model="registerInfo.address.suburb" >
                    </v-text-field>
                    <v-text-field label="Residencia" color="orange darken-3"  type="text" id="r-residencia" v-model="registerInfo.address.residence">
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <v-combobox
                      clearable
                      label="Ciudad"
                      v-model="registerInfo.address.city"
                      :items="optionsCity"
                      color="orange darken-3"
                    ></v-combobox>
                    <v-text-field label="Calle" color="orange darken-3"  type="text" id="r-calle" v-model="registerInfo.address.street">
                    </v-text-field>
                    <v-text-field label="Referencia" color="orange darken-3"  type="text" id="r-referencia" v-model="registerInfo.address.reference">
                    </v-text-field>
                                      
                  </v-col>
                </v-row>
              </v-container>
            </v-lazy>
            
              <v-btn class="orange darken-2 white--text" @click="register()">Registrarme</v-btn>
          </v-form>
        </div>
    </div>
</template>


<script>
  import {CREATE_USER} from '@/graphql/queries/userQueries.js'
  export default {
    data() {
      return {
        registerInfo:{
          firstName:'',
          lastName:'',
          age:'',
          dni:'',
          principalCellphone:'',
          auxiliarCellphone:'',
          address:{
            department:null,
            city:null,
            suburb:'',
            residence:'',
            reference:''
          }
        },
        optionsDepa: [
          { value: null, text: 'Departamento' },
          { value: 'Atlántida' ,text: 'Atlántida' },
          { value: 'Colón' ,text: 'Colón' },
          { value: 'Comayagua' ,text: 'Comayagua' },
          { value: 'Copán' ,text: 'Copán' },
          { value: 'Cortés' ,text: 'Cortés' },
          { value: 'Choluteca' ,text: 'Choluteca' },
          { value: 'El Paraíso' ,text: 'El Paraíso' },
          { value: 'Francisco Morazán' ,text: 'Francisco Morazán' },
          { value: 'Gracias a Dios' ,text: 'Gracias a Dios' },
          { value:  'Intibucá' , text: 'Intibucá' },
          { value:  'Islas de la Bahía' , text: 'Islas de la Bahía' },
          { value:  'La Paz' , text: 'La Paz' },
          { value:  'Lempira' , text: 'Lempira' },
          { value:  'Ocotepeque' , text: 'Ocotepeque' },
          { value:  'Olancho' , text: 'Olancho' },
          { value:  'Santa Bárbara' , text: 'Santa Bárbara' },
          { value:  'Valle' , text: 'Valle' },
          { value:  'Yoro', text: 'Yoro', disabled: true }
        ],
        optionsCity: [
            {value: null, text: 'Ciudad' },
            {value:'Tegucigalpa', text:'Tegucigalpa'},
            {value:'Comayaguela', text:'Comayaguela'},
            {value:'San Pedro Sula', text:'San Pedro Sula'},
            {value:'Choloma', text:'Choloma'},
            {value:'Valle De Angeles', text:'Valle De Angeles'},
            {value:'El Progreso', text:'El Progreso'},
            {value:'Villanueva', text:'Villanueva'},
            {value:'Comayagua', text:'Comayagua'},
            {value:'Choluteca', text:'Choluteca'},
            {value:'Puerto Cortés', text:'Puerto Cortés'},
            {value:'Danlí', text:'Danlí'},
            {value:'Siguatepeque', text:'Siguatepeque'},
            {value:'Juticalpa', text:'Juticalpa', disabled: true}
        ]
      }
    },
    methods:{
      async register(){
        await this.$apollo.mutate({
            mutation: CREATE_USER,
            variables:{userData:this.registerInfo}
          })
        
        this.$swal({
              icon:'success',
              title:'Registro exitoso',
              text:'Bienvenido a Peluditos',
            }).then(()=>{
              this.$router.push('/Home')
            })
      }
    }
  }
</script>

<style scoped>
.titulo{
  width: 400px;
  height: 100%;
  background-color: #f7f388;
  text-align: center;
  margin: auto!important;
  top: 50px!important;
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 3px 10px 0 rgba(0,0,0,.12)!important;
  padding: 10px;
}
.cuerpo{
  background-color: rgb(255, 255, 255);
  width:70%;
  height:100%!important;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 100px!important;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 3px 10px 0 rgba(0,0,0,.12)!important;
  text-align: center;
  padding: 50px;
}

.form-floating>input{
  width: 100%!important;
  margin-bottom: 5%!important;
   box-sizing: border-box!important; 

}

select{
    width: 100%!important;
}

.colorbtn{
    background: #FF9922!important;
}
.colorbtn:hover{
    background-color: #f8a94e!important;
}
.im{
    background-image: url(../assets/huella.png)!important;
    background-repeat: no-repeat;
}
input::placeholder {
  font-size: 12px!important;
}

::-webkit-scrollbar{
  display: none !important;
}
</style>
