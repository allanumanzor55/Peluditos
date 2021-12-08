<template>
  <div>
      <v-container class="orange lighten-5">
    <v-row no-gutters>
      <v-col cols="6">
        <v-row class="orange lighten-2 mb-1 p-2 m-1" style="border-radius:10px">
          <h3>Hola, mi nombre es: <span class="white--text">{{petData.name}}</span> </h3>
        </v-row>
        <v-row class="mb-1 ml-1">
          <CarouselMascota :id="parseInt(petData.id)" />
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="5" align="center">
        <br><br>
        <v-btn class="red accent-3 white--text">
          <v-icon>mdi-heart</v-icon>
          Agregar a favoritos
        </v-btn>
        <v-divider></v-divider>
        <div>
          <div class="orange lighten-4 p-3" style="border-radius:10px">
            <p class="text-left">Estoy siendo dado en adopcion por: 
                <v-btn color="orange white--text" elevation="0" @click="verUsuario()">   
                  {{getName}}
                </v-btn>
            </p>
            <v-dialog
            v-model="dialog"
            max-width="700"
            >
            <MostrarPerfil/>
            </v-dialog>
            <p class="text-left">Proceso de adopción <br>
                1. Envíe la solicitud<br>
                2. Entrevista<br>
                3. Verificación de la casa
            </p>
          </div>
        <v-divider></v-divider>
        <v-btn @click="sendRequest" class="teal accent-4 white--text" v-if="!requestSend">
        <v-icon class="mr-2">mdi-arrow-up-bold-box-outline</v-icon>
          Enviar Solicitud de Adopción
        </v-btn>
        <v-btn @click="sendRequest" class="teal accent-4 white--text" v-else disabled>
        <v-icon class="mr-2">mdi-arrow-up-bold-box-outline</v-icon>
          Solicitud enviada
        </v-btn>
        </div>
      </v-col>
    </v-row>
    <hr>
    <v-row class="mt-1">
    <v-col cols="6" class="orange lighten-3 ml-2 p-3" style="border-radius:10px">
      <div>
          <h3>Acerca de mi</h3>
          <p>
              Raza: {{petData.breed.name}}
          </p>
          <p>
              Color: {{(petData.color=="")?'N/D':petData.color}}
          </p>
          <p>
              Fecha de nacimiento: {{petData.birthDate}}
          </p>
          <p>
              Tamaño: {{petData.size}}
          </p>
          <p>
              Sexo: {{petData.gender}}
          </p>
      </div>
    </v-col>
    <v-col><v-spacer></v-spacer></v-col>
      <v-col cols="5" class="deep-orange lighten-3 p-3" style="border-radius:10px">
      <h3>Datos interesantes</h3>
      <p>
        <font-awesome-icon icon="check" color="green" class="mx-3"/>Vacunado
      </p>

      <p>
        <font-awesome-icon icon="check" color="green" class="mx-3"/>Esterilizado
      </p>

      <p>
        <font-awesome-icon icon="check" color="green" class="mx-3"/>Castrado
      </p>
      
      </v-col>
      <hr>
      <v-col cols="6" class="orange lighten-4 my-2 ml-2 p-3" style="border-radius:10px">
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
import {CONFIRM_SENDED_REQUEST} from '@/graphql/queries/requestQueries'

export default {
    data () {
      return {
        requestData:{
          sender:0,
          receiver:0,
          pet:0,
          description:""
        },
        idPet:0,
        idReceiver:0,
        dialog: false,
        petData:{},
        requestSend:false
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
        const result = await this.$swal({
        title: '¿Deseas enviar la solicitud?',
        text: "El dueño recibira la solicitud siempre que la envies",
        input: 'textarea',
        inputAttributes: {
          autocapitalize: 'off'
        },
        inputPlaceholder: 'Agrega una descripcion',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#F57C00',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, envialo',
        cancelButtonText:'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: async (value)=>{
          try {
            if(value==""){
              throw new Error('Agregue una descripcion')
            }else if(value.length>500){
              throw new Error('Descripcion muy larga, maximo de caracteres:500')
            }else{
              this.requestData.sender = this.$store.state.id
              this.requestData.receiver = this.petData.owner.id
              this.requestData.pet = this.petData.id
              this.requestData.description = value
              return (await this.$apollo.mutate({mutation:SEND_REQUEST, variables:{requestData:this.requestData}})).data.sendAdoptionRequest
            }
          } catch (error) {
            this.$swal.showValidationMessage(`${error}`)
          }
        },
        preDeny: ()=>{
          return {cancel:false}
        },
        allowOutsideClick: () => !this.$swal.isLoading()
        })
        if (result.isConfirmed){
          if(result.value.verified){
            this.$swal({icon:'success',title:'exito'})
            this.confirmSendedRequest()
          }else{
            this.$swal({icon:'error',title:'algo salio mal'})
          }
        }
      },
      async confirmSendedRequest(){
        let idSender = this.$store.state.id
        const {request } = (await this.$apollo.query({
          query:CONFIRM_SENDED_REQUEST,
          variables:{senderId:idSender,petId:this.$route.params.id}
        })).data
        console.log(request)
        if(idSender==request.sender.id){
          this.requestSend = true
        }else{
          this.requestSend = false
        }
        
      },
      async verUsuario(){
        this.$router.push({
          name: "PerfilUsuario2",
          params:{id:this.petData.owner.id,idPet:this.petData.id}
        })
      }
    },
    async created(){
      this.idPet = this.$route.params.id
      
      try{
        this.petData = (await this.$apollo.query({query:GET_PET_ALL_INFO,variables:{id:this.idPet}})).data.pet
        await this.confirmSendedRequest()
      }catch(e){
        console.log(e.message)
      }
    }
}
</script>

<style scoped>
h5{
    font-style:unset!important;
}

</style>