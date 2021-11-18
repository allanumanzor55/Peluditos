<template>
    <div>
        <div>
            <NavbarHome/>
        </div>
        <div class="mt">
            <v-container>
                <v-row no-gutters>
                <v-col order="1">
                     <v-card
                    class="mx-auto"
                    max-width="344"
                    >
                    <v-img class="img" 
                        src="../assets/5.png"
                    ></v-img>
                    <v-card-title class="justify-center">
                        Vacunas
                    </v-card-title>
                    
                    </v-card>
                </v-col>
                <v-col order="2">
                     <v-card
                    class="mx-auto"
                    max-width="344"
                    >
                    <v-img class="img" 
                        src="../assets/6.png"
                    ></v-img>
                    <v-card-title class="justify-center">
                        Razas
                    </v-card-title>
                    
                    </v-card>
                </v-col>
                <v-col order="3">
                     <v-card
                    class="mx-auto"
                    max-width="344"
                    >
                    <v-img class="img" 
                        src="../assets/7.png"
                    ></v-img>
                    <v-card-title class="justify-center">
                        Categorias
                    </v-card-title>
                    </v-card>
                </v-col>
                </v-row>
                
                <v-row>
                    <v-col order="1">
                     <v-card
                    class="mx-auto"
                    max-width="344"
                    >
                    <v-img class="img" 
                        src="../assets/8.png"
                    ></v-img>
                    <v-card-title class="justify-center">
                        Usuarios
                    </v-card-title>
                    </v-card>
                </v-col>
                

                <v-col order="2">
                     <v-card
                    class="mx-auto"
                    max-width="344"
                    >
                    <v-img class="img" 
                        src="../assets/9.png"
                    ></v-img>
                    <v-card-title class="justify-center">
                        Departamentos
                    </v-card-title>
                    </v-card>
                </v-col>
                
                </v-row>
            </v-container>
        </div>
    </div>
</template>


<script>
import NavbarHome from '@/components/NavbarHome.vue'
export default {
    name: 'home',
  components: {
    NavbarHome
  }
}
</script>

<style scoped>
.img{
  width: 50%!important;
  height: 50%!important;
  margin-left: 23%;
}

.mt{
    margin-top: 5%;
    background-color: white!important;
}

.v-card:hover{
  border-color:orange !important;
  color:orange !important;
}

.v-container{
    background-color: white!important;;
}
</style>