<template>
    <b-container align-v="center" class="wrapper" fluid>
        <div v-if="user==='adopter'">
        <v-card
          class="mx-auto"
          max-width="344"
          >
          <v-img class="img" 
            src="../assets/2.png"
          ></v-img>
          <v-card-title class="justify-center">
            Mascotas Adoptadas
          </v-card-title>
          <v-card-subtitle>
            1
          </v-card-subtitle>
        </v-card>
        </div>

        <div v-if="user==='adopter'">
          <v-card
          class="mx-auto"
          max-width="344"
          >
          <v-img class="img" 
            src="../assets/1.png"
          ></v-img>
          <v-card-title class="justify-center">
            Mascotas Publicadas
          </v-card-title>
          <v-card-subtitle>
            0
          </v-card-subtitle>
        </v-card>
        </div>

        <div v-if="user==='adopter'">
          <v-card
          class="mx-auto"
          max-width="344"
          >
          <v-img class="img" 
            src="../assets/3.png"
          ></v-img>
          <v-card-title class="justify-center">
            Solicitudes Pendientes
          </v-card-title>
          <v-card-subtitle>
            0
          </v-card-subtitle>
        </v-card>
        </div>

        <div v-if="user==='adopter'">
          <v-card
          class="mx-auto"
          max-width="344"
          >
          <v-img class="img" 
            src="../assets/4.png"
          ></v-img>
          <v-card-title class="justify-center">
            Solicitudes Recibidas
          </v-card-title>
          <v-card-subtitle>
            0
          </v-card-subtitle>
        </v-card>
        </div>
      </b-container>
</template>


<script>
export default {
    name: 'Dashboard',
    components: {},
    props:{
      user:String
    }
}
</script>

<style scoped>
.im{
    height: 100%;
    width: 100%!important;
    display: inline-block;
}

::-webkit-scrollbar {
    display: none;
}

.v-card:hover{
  border-color:orange !important;
  color:orange !important;
}

.img{
  width: 50%!important;
  height: 50%!important;
  margin-left: 23%;
}

.wrapper {
  margin-top: 3%;
  display: grid;
  grid-template-columns: repeat(2, 30%);
  grid-gap: 30px;
  margin-left: 20%;
}

div{
  text-align: center;
}

</style>