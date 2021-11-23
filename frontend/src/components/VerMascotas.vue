<template>
    <div class="mt">
        <v-container>
        <v-row no-gutters>
            <v-col cols="3">
                <b-list-group>
                <b-list-group-item button>
                    <div>
                    <b-button v-b-toggle.collapse-1 class="m-1">Categorias</b-button>
                    <b-collapse visible id="collapse-1">
                        <b-form-checkbox>Perros</b-form-checkbox>
                        <b-form-checkbox>Gatos</b-form-checkbox>
                        <b-form-checkbox>Conejos</b-form-checkbox>
                        <b-form-checkbox>Hamsters</b-form-checkbox>
                    </b-collapse>
                    </div>
                </b-list-group-item>
                <b-list-group-item button>
                    <hr>
                    <div>
                    <b-button v-b-toggle.collapse-2 class="m-1">Edad</b-button>
                    <b-collapse visible id="collapse-2">
                        <b-input-group prepend="0" append="10" class="mt-3">
                    <b-form-input type="range" min="0" max="15"></b-form-input>
                    </b-input-group>
                    </b-collapse>
                    </div>
                </b-list-group-item>
                <b-list-group-item button>
                    <hr>
                    <div>
                    <b-button v-b-toggle.collapse-3 class="m-1">Vacunacion</b-button>
                    <b-collapse visible id="collapse-3">
                        <b-form-checkbox>Todas las Vacunas</b-form-checkbox>
                        <b-form-checkbox>Vacunacion Imcompleta</b-form-checkbox>
                        <b-form-checkbox>No Vacunado</b-form-checkbox>
                    </b-collapse>
                    </div>
                </b-list-group-item>
                
                <b-list-group-item button>
                    <hr>
                    <div>
                    <b-button v-b-toggle.collapse-4 class="m-1">Ciudad</b-button>
                    <b-collapse visible id="collapse-4">
                        <b-form-checkbox
                        v-for="i in OptionsCity"
                        :key="i"
                        >{{i}}</b-form-checkbox>
                    </b-collapse>
                    </div>
                </b-list-group-item>
                </b-list-group>
            </v-col>
            
            <v-col cols="9">
            <CardMascota/>
            </v-col>
            
        </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.mt{
    margin-top: 6%;
}
button{
    background-color: white!important;
    border-color:black!important;
    color: black!important;
    border-width:0px!important;
    border-style: none!important;
    outline: none!important;
}
button:hover{
    color: black!important;
    border-color: white!important;
    border-style: none!important;
    outline: none!important;
}

button:focus{
    border-color: white!important;
}

</style>

<script>
import CardMascota from '@/components/CardMascota.vue'
export default {
    data:()=>({
        OptionsCity: [
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
        ]
    }),
    components:{
        CardMascota
    }
}
</script>