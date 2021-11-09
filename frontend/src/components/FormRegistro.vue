<template>
    <div class="im">

        <div class="titulo">
            <h4>Registro de Usuario</h4>
        </div>
        <div class="cuerpo">
            <b-container class="bv-example-row">
            <b-row>
                <b-col>
                <form class="form-floating">
                <input type="text" class="form-control" id="r-nombre" >
                <label for="r-nombre">Nombre</label>  
                </form> 

                <form class="form-floating">
                <input type="text" class="form-control" id="r-edad" >
                <label for="r-edad">Edad</label>
                </form>

                <form class="form-floating">
                <input type="text" class="form-control" id="r-celularp" >
                <label for="r-celularp">Numero Celular</label>
                </form>
                </b-col>

                <b-col>
                <form class="form-floating">
                <input type="text" class="form-control" id="r-apellido" >
                <label for="r-apellido">Apellido</label>
                </form>

                <form class="form-floating"> 
                <input type="text" class="form-control" id="r-id" >
                <label for="r-id">DNI</label>
                </form>

                <form class="form-floating">
                <input type="text" class="form-control" id="r-ccelularax" >
                <label for="r-ccelularax">Numero Celular Auxiliar</label>
                </form>
                </b-col>
            </b-row>
            </b-container>
            <span>Datos Recidenciales</span>
            
            <b-container class="bv-example-row">
            <b-row>
                <b-col>1 of 3
                 <b-form-select v-model="selectedDepa" :options="optionsDepa" class="form-select"></b-form-select>
                 <div class="mt-3">Selected: <strong>{{ selectedDepa }}</strong></div>

                <form class="form-floating">
                <input type="text" class="form-control" id="r-calle" >
                <label for="r-calle">Calle Principal o de Referencia</label>
                </form>
                 

                <form class="form-floating">
                <input type="text" class="form-control" id="r-sub" >
                <label for="r-sub">Sub</label>
                </form>

                

                <form class="form-floating">
                <input type="text" class="form-control" id="r-contra" >
                <label for="r-contra">Contraseña</label>
                </form>


                </b-col>
                <b-col>2 of 3
                <b-form-select v-model="selectedCity" :options="optionsCity" class="form-select"></b-form-select>
                 <div class="mt-3">Selected: <strong>{{ selectedCity }}</strong></div>


                <form class="form-floating">
                <input type="text" class="form-control" id="r-colonia" >
                <label for="r-colonia">Colonia</label>
                </form>

                <form class="form-floating">
                <input type="text" class="form-control" id="r-refenncia" >
                <label for="r-refenncia">Referencias</label>
                </form>

                <form class="form-floating">
                <input type="text" class="form-control" id="r-ccontra" >
                <label for="r-ccontra">Confirmar Contraseña</label>
                </form>
                

                </b-col>
            </b-row>
            </b-container>
            <button type="button" class="btn colorbtn btn-lg">Registrarme</button>

           
        </div>
    </div>
</template>

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


<script>
  export default {
    data() {
      return {
        selectedDepa: null,
        optionsDepa: [
          { value: null, text: 'Departamento' },
          { value: 1, text: 'Atlántida' },
          { value: 2, text: 'Colón' },
          { value: 3, text: 'Comayagua' },
          { value: 4, text: 'Copán' },
          { value: 5, text: 'Cortés' },
          { value: 6, text: 'Choluteca' },
          { value: 7, text: 'El Paraíso' },
          { value: 8, text: 'Francisco Morazán' },
          { value: 9, text: 'Gracias a Dios' },
          { value: 10, text: 'Intibucá' },
          { value: 11, text: 'Islas de la Bahía' },
          { value: 12, text: 'La Paz' },
          { value: 13, text: 'Lempira' },
          { value: 14, text: 'Ocotepeque' },
          { value: 15, text: 'Olancho' },
          { value: 16, text: 'Santa Bárbara' },
          { value: 17, text: 'Valle' },
          { value: 18, text: 'Yoro', disabled: true }
        ],
        selectedCity:null,
        optionsCity: [
            {value: null, text: 'Ciudad' },
            {value:1, nombre:'Tegucigalpa'},
            {value:2, nombre:'Comayaguela'},
            {value:3, nombre:'San Pedro Sula'},
            {value:4, nombre:'Choloma'},
            {value:5, nombre:'La Ceiba'},
            {value:6, nombre:'El Progreso'},
            {value:7, nombre:'Villanueva'},
            {value:8, nombre:'Comayagua'},
            {value:9, nombre:'Choluteca'},
            {value:10, nombre:'Puerto Cortés'},
            {value:11, nombre:'Danlí'},
            {value:12, nombre:'Siguatepeque'},
            {value:13, nombre:'Juticalpa', disabled: true}
        ]
      }
    }
  }
</script>