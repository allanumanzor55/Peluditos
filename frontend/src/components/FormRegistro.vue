<template>
    <div class="im">

        <div class="titulo">
            <h4>Registro de Usuario</h4>
        </div>
        <div class="cuerpo">
          <form id="registerForm">
            <b-container class="bv-example-row">
            <b-row>
                <b-col>
                  <div class="form-floating">
                    <input placeholder="Email" type="email" class="form-control" id="r-email" v-model="registerInfo.email">
                  </div> 

                  <div class="form-floating">
                    <input placeholder="Nombres" type="text" class="form-control" id="r-nombre" v-model="registerInfo.firstName">
                  </div> 

                  <div class="form-floating">
                    <input placeholder="Edad" type="text" class="form-control" id="r-edad" v-model="registerInfo.age">
                  </div>

                  <div class="form-floating">
                    <input placeholder="Celular principal" type="text" class="form-control" id="r-celularp" v-model="registerInfo.principalCellphone">
                  </div>
                </b-col>

                <b-col>
                  <div class="form-floating">
                    <input placeholder="Contraseña" type="password" class="form-control" id="r-password" v-model="registerInfo.password">
                  </div> 

                  <div class="form-floating">
                    <input placeholder="Primer apellido" type="text" class="form-control" id="r-apellido" v-model="registerInfo.lastName">
                  </div>

                  <div class="form-floating"> 
                    <input placeholder="DNI" type="text" class="form-control" id="r-id" v-model="registerInfo.dni">
                  </div>

                  <div class="form-floating">
                    <input placeholder="Celular auxiliar" type="text" class="form-control" id="r-ccelularax" v-model="registerInfo.auxiliarCellphone">
                  </div>
                </b-col>
            </b-row>
            </b-container>
            <b-row class="justify-content-center">
              <div class="mb-3">Datos Residenciales</div>
            </b-row>
            <b-container class="bv-example-row">
            <b-row>
                <b-col>
                  <b-form-select v-model="registerInfo.address.department" :options="optionsDepa" class="form-select mb-4"></b-form-select>
                  <div class="form-floating">
                    <input placeholder="Colonia" type="text" class="form-control" id="r-colonia" v-model="registerInfo.address.suburb" >
                  </div>
                  <div class="form-floating">
                    <input placeholder="Residencia" type="text" class="form-control" id="r-residencia" v-model="registerInfo.address.residence">
                  </div>
                </b-col>
                <b-col>
                  <b-form-select v-model="registerInfo.address.city" :options="optionsCity" class="form-select mb-4"></b-form-select>
                  <div class="form-floating">
                    <input placeholder="Calle" type="text" class="form-control" id="r-calle" v-model="registerInfo.address.street">
                  </div>

                  <div class="form-floating">
                    <input placeholder="Referencia" type="text" class="form-control" id="r-referencia" v-model="registerInfo.address.reference">
                  </div>
                  
                </b-col>
            </b-row>
            </b-container>
            <button type="button" class="btn colorbtn btn-lg" @click="register()">Registrarme</button>
          </form>
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
input{
  border-style: none;
  border-bottom:#87878a 0.2px solid;
  border-radius: 0px!important;
}
input::placeholder {
  font-size: 12px!important;
}

::-webkit-scrollbar{
  display: none !important;
}
</style>
