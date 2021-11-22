<template>
  <div>
      <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="7"
      >
      <h3>Mi nombre es: </h3>
      <div>
        <CarouselMascota/>
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
            
            <p>Estoy siendo dado en adopcion por: 
                <b-link 
                @click.stop="dialog = true"
                >Nombre Persona</b-link>
            </p>
            <div>

                <v-dialog
                v-model="dialog"
                max-width="700"
                >
                <MostrarPerfil/>
                </v-dialog>
            </div>
                
            <p>Proceso de adopción <br>
                1. Envíe la solicitud<br>
                2. Entrevista<br>
                3. Verificación de la casa</p>
        <hr>
        <v-btn >
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
                Raza:
            </p>
            <p>
                Peso:
            </p>
            <p>
                Color:
            </p>
            <p>
                Edad:
            </p>
            <p>
                Tamaño:
            </p>
            <p>
                Sexo:
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
              Basco is an adorable 12-month-old Golden Retriever-Lab mix male that weighs about 65 pounds. This cute boy is young and active. As long as he gets his regular daily exercise he is calm in the house. He walks well on leash, does not react to other dogs and loves to say “Hi” to them. After the initial meeting he starts bowing to invite them to play.
                Basco has been crate-trained and housebroken in his foster home and knows how to use a doggie door.
                He is young and active, still acts like a puppy sometimes and gets excited to see his people, so he can get jumpy. Basco loves other dogs and could play with them all day long - he lives in a foster home with dogs and is always the one that initiates play. He also does great at daycare.
                This sweet boy can be timid and a little cautious when meeting new people but that goes away pretty quickly. Bosco is a very affectionate and cuddly dog with his people - he follows his foster mom and dad everywhere, and if they are sitting he makes sure he is as close to them as he can be. If you are lying down on your bed he will jump right on top of you, so he could be as close to you as possible. He gets attached to his people very quickly, and some boiled chicken will seal the deal, turning you into best friends forever.
                Even though he is very good with dogs and loves to be around them and play with them, he might do better in a home with no other dogs. In his foster home he does great with all the resident dogs, but he wants to keep his foster mom and dad to himself. If he is lying down and sitting next to his people and a second dog comes near his person, he gets jealous and will snap. However, he can be easily corrected verbally.
                In his future home we highly recommend that he receives crate-training for at least the first week and that he is taught some basic commands, so he would learn to listen to his people and respect them.
                He is an alert dog and will bark if he hears someone outside. His future owners will need to be careful at first if they have visitors, housekeepers, gardeners, etc. coming to the house, since he might become a little
          </p>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import CarouselMascota from '@/components/CarouselMascota.vue'
import MostrarPerfil from '@/components/MostrarPerfil.vue'

export default {
    data () {
      return {
        dialog: false,
      }
    },
    components:{
        CarouselMascota,
        MostrarPerfil
    }
}
</script>

<style scoped>
h5{
    font-style:unset!important;
}

</style>