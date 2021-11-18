<template>
    <div>
      <v-card class="color">
    <v-card-title class="text-center justify-center py-6">
      <img src="../assets/banner.png" alt="" class="banner">
    </v-card-title>
    <div></div>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      
      <v-tab
        v-for="(item,i) in items"
        :key="i"
      >

        <font-awesome-icon :icon="item.icono" class="mx-3" />
        {{ item.nombre }}
        
      </v-tab>
      
    </v-tabs>
    
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item,i) in items"
        :key="i"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>
            <div class="cuad ">
                <TablaSetting/>
            </div>
            </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
    </div>
</template>

<script>
import TablaSetting from '@/components/TablaSetting.vue'
export default {
    name: 'tablastting',
   components: {
     TablaSetting
   },
    data () {
      return {
        tab: null,
        items: [
          {nombre:'Vacunas',icono:'medkit'}, 
          {nombre:'Raza',icono:'bone'}, 
          {nombre:'Categorias',icono:'layer-group'}, 
          {nombre:'Usuarios',icono:'users'}
        ]
      }
    },
}
</script>

<style scoped>
.cuad{
  width: 60%;
  height: 100%;
  margin-left: 20%;
}
.banner{
  width: 60%;
  height: 70%;
}

.color{
  background-color: #B0EFCC;
}
</style>