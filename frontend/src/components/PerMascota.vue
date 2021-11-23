<template>
    <div>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
        <v-col
            cols="12"
            sm="8"
            md="12"
        >
        <div class="titulo">
            <h4>Mis Mascotas</h4>
        </div>

        <div class="mt">
            <b-tabs content-class="mt-3">
            <b-tab title="Publicar" active><p></p></b-tab>
            <b-tab title="Todas Mis Mascotas"><p></p></b-tab>
            <b-tab title="Solicitudes Recibidas"><p></p></b-tab>
            <b-tab title="Mascotas Favoritas"><p></p></b-tab>
            </b-tabs>
        </div>
        </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<style scoped>
.titulo{
  width: 400px;
  height:60px;
  background-color: #fdcc8d;
  text-align: center;
  margin: auto!important;
  top: 25px!important;
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 3px 10px 0 rgba(0,0,0,.12)!important;
  padding: 10px;
  color: black;
  padding: 1%;
}
.mt{
    margin-top: 8%;
}
</style>

<script>
//import NavbarHome from '@/components/NavbarHome.vue'
export default {
    components:{
        //NavbarHome
    }
}
</script>