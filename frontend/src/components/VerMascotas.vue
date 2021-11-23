<template>
    <div class="mt">
        <v-container>
        <v-row no-gutters>
        <v-col
            cols="6"
            md="3"
        >
                <v-list>
                <v-list-group>
                    <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Categorias</v-list-item-title>
                    </v-list-item-content>
                    </template>
                    <v-list-item-content>
                        <b-form-checkbox>Perros</b-form-checkbox>
                        <b-form-checkbox>Gatos</b-form-checkbox>
                        <b-form-checkbox>Conejos</b-form-checkbox>
                        <b-form-checkbox>Hamsters</b-form-checkbox>
                    </v-list-item-content>
                </v-list-group>

                    <v-list-group>
                    <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Edad</v-list-item-title>
                    </v-list-item-content>
                    </template>
                    <v-list-item-content>
                    <b-input-group prepend="0" append="10" class="mt-3">
                    <b-form-input type="range" min="0" max="15"></b-form-input>
                    </b-input-group>
                    </v-list-item-content>
                </v-list-group>

                <v-list-group>
                    <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Vacunacion</v-list-item-title>
                    </v-list-item-content>
                    </template>
                    <v-list-item-content>
                        <b-form-checkbox>Todas las Vacunas</b-form-checkbox>
                        <b-form-checkbox>Vacunacion Imcompleta</b-form-checkbox>
                        <b-form-checkbox>No Vacunado</b-form-checkbox>
                    </v-list-item-content>
                </v-list-group>


                <v-list-group>
                    <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Ciudad</v-list-item-title>
                    </v-list-item-content>
                    </template>
                    <v-list-item-content> 
                        <b-form-checkbox
                        v-for="i in OptionsCity"
                        :key="i"
                        >{{i}}</b-form-checkbox>
                    </v-list-item-content>
                </v-list-group>
                </v-list>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="9"
        >
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
.v-application .primary--text {
    color:black !important;
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
        ],
        items: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'List Item' }],
          title: 'Categoria',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ],
          title: 'Edad',
        },
        {
          action: 'mdi-school',
          items: [{ title: 'List Item' }],
          title: 'Vacunación',
        },
        {
          action: 'mdi-run',
          items: [{ title: 'List Item' }],
          title: 'Ciudad',
        }
      ]
    }),
    components:{
        CardMascota
    }
}
</script>