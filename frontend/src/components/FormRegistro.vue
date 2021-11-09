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
                    <input type="email" class="form-control" id="r-email" v-model="registerInfo.email">
                    <label for="r-email">Email</label>  
                  </div> 

                  <div class="form-floating">
                    <input type="text" class="form-control" id="r-nombre" v-model="registerInfo.firstName">
                    <label for="r-nombre">Nombres</label>  
                  </div> 

                  <div class="form-floating">
                    <input type="text" class="form-control" id="r-edad" v-model="registerInfo.age">
                    <label for="r-edad">Edad</label>
                  </div>

                  <div class="form-floating">
                    <input type="text" class="form-control" id="r-celularp" v-model="registerInfo.principalCellphone">
                    <label for="r-celularp">Numero Celular</label>
                  </div>
                </b-col>

                <b-col>
                  <div class="form-floating">
                    <input type="password" class="form-control" id="r-password" v-model="registerInfo.password">
                    <label for="r-password">Contraseña</label>  
                  </div> 

                  <div class="form-floating">
                    <input type="text" class="form-control" id="r-apellido" v-model="registerInfo.lastName">
                    <label for="r-apellido">Apellidos</label>
                  </div>

                  <div class="form-floating"> 
                    <input type="text" class="form-control" id="r-id" v-model="registerInfo.dni">
                    <label for="r-id">DNI</label>
                  </div>

                  <div class="form-floating">
                    <input type="text" class="form-control" id="r-ccelularax" v-model="registerInfo.auxiliarCellphone">
                    <label for="r-ccelularax">Numero Celular Auxiliar</label>
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
                    <input type="text" class="form-control" id="r-colonia" v-model="registerInfo.address.suburb" >
                    <label for="r-colonia">Colonia</label>
                  </div>
                  <div class="form-floating">
                    <input type="text" class="form-control" id="r-residencia" v-model="registerInfo.address.residence">
                    <label for="r-residencia">Residencia</label>
                  </div>
                </b-col>
                <b-col>
                  <b-form-select v-model="registerInfo.address.city" :options="optionsCity" class="form-select mb-4"></b-form-select>
                  <div class="form-floating">
                    <input type="text" class="form-control" id="r-calle" v-model="registerInfo.address.street">
                    <label for="r-calle">Calle de referencia</label>
                  </div>

                  <div class="form-floating">
                    <input type="text" class="form-control" id="r-referencia" v-model="registerInfo.address.reference">
                    <label for="r-refenncia">Otras referencias</label>
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
              this.$router.push('/')
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
  width: 400px!important;
  margin-bottom: 5%!important;
   box-sizing: border-box!important; 

}

select{
    width: 400px!important;
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
</style>
