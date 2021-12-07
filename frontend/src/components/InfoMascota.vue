<template>
  <div>
      <v-container>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="7"
      >
      <h3>Mi nombre es: {{petData.name}}</h3>
      <div>
        <CarouselMascota :id="parseInt(petData.id)" />
      </div>

      </v-col>
      <v-col cols="1"></v-col>
      <v-col
        cols="6"
        md="4"
        align="center"
      >
      <br><br>
        <v-btn>
        <v-icon color="red accent-4">mdi-heart</v-icon>
        Agregar a favoritos
        </v-btn>
        <hr>
        <div>
            
            <p class="text-left">Estoy siendo dado en adopcion por: 
                <b-link 
                @click.stop="dialog = true"
                >{{getName}}</b-link>
            </p>
            <div>

                <v-dialog
                v-model="dialog"
                max-width="700"
                >
                <MostrarPerfil/>
                </v-dialog>
            </div>
                
            <p class="text-left">Proceso de adopción <br>
                1. Envíe la solicitud<br>
                2. Entrevista<br>
                3. Verificación de la casa</p>
        <hr>
        <v-btn @click="sendRequest">
        <v-icon color="teal darken-2">mdi-arrow-up-bold-box-outline</v-icon>
        Enviar Solicitud de Adopción
        </v-btn>
        </div>
      </v-col>
    </v-row>
    <hr>
    <v-row>
    <v-col
    cols="12"
    sm="6"
    md="8"
    >
        <div >
            <h3>Acerca de mi</h3>
            <p>
                Raza: {{petData.breed.name}}
            </p>
            <p>
                Color: {{petData.breed.color}}
            </p>
            <p>
                Fecha de nacimiento: {{petData.birthDate}}
            </p>
            <p>
                Tamaño: {{petData.breed.size}}
            </p>
            <p>
                Sexo: {{petData.breed.gender}}
            </p>
        </div>
    </v-col>
      <v-col
        cols="6"
        md="3"
      >
      <h3>Datos interesantes</h3>
      <p>
        <font-awesome-icon icon="check" color="green" class="mx-3"/>Vacunado
      </p>

      <p>
        <font-awesome-icon icon="check" color="green" class="mx-3"/>Amigable
      </p>

      <p>
        <font-awesome-icon icon="check" color="green" class="mx-3"/>Castrado
      </p>
      
      </v-col>
      <hr>
      <v-col cols="8">
          <h3>Mi Historia</h3>
          <p class="text-sm-body-1">
              {{petData.description}}
          </p>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import CarouselMascota from '@/components/CarouselMascota.vue'
import MostrarPerfil from '@/components/MostrarPerfil.vue'
import {GET_PET_ALL_INFO,SEND_REQUEST} from '@/graphql/queries/petQueries'
export default {
    data () {
      return {
        requestData:{
          sender:0,
          receiver:0,
          pet:0
        },
        idPet:0,
        idReceiver:0,
        dialog: false,
        petData:{}
      }
    },
    components:{
        CarouselMascota,
        MostrarPerfil
    },
    computed:{
      getName:function(){
        return this.petData.owner.firstName
      }
    },
    methods:{
      async sendRequest(){
        let result = await this.$swal({
        title: '¿Deseas enviar la solicitud?',
        text: "El dueño recibira la solicitud siempre que la envies",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#F57C00',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, envialo',
        cancelButtonText:'Cancelar'
        })
        if(result.isConfirmed){
          this.requestData.sender = this.$store.state.id
          this.requestData.receiver = this.petData.owner.id
          this.requestData.pet = this.petData.id
          const {data} = await this.$apollo.mutate({mutation:SEND_REQUEST, variables:{requestData:this.requestData}})
          if(data.sendAdoptionRequest.verified){
            this.$swal('success','exito')
          }
        }
        
      }
    },
    async created(){
      this.idPet = this.$route.params.id;
      try{
        this.petData = (await this.$apollo.query({query:GET_PET_ALL_INFO,variables:{id:this.idPet}})).data.pet
      }catch(e){
        console.log(e.getMessage)
      }
    }
}
</script>

<style scoped>
h5{
    font-style:unset!important;
}

</style>