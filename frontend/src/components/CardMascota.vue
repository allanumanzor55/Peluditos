<template>
    <div class="wrapper">
        <v-card
        v-for="(item,i) in mascota"
        :key="i"
        class="mx-auto"
        max-width="420">
        <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto" max-width="344">
        <v-img :src="item.imgn"></v-img>
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#000"
          >
            <v-btn>Mas detalles...</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
        <v-card-title>{{item.nombre}}</v-card-title>
        <v-card-subtitle class="pb-0">
        {{item.lugar}}
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn icon @click="item.isLike=!item.isLike" :key="i">
              <v-icon :class="{'red--text':item.isLike}">mdi-heart</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
    </div>
</template>

<script>
export default {
    data:()=>({
        mascota:[{
            id: 1,
            nombre: 'lorem ipsum',
            imgn:'https://picsum.photos/600/300/?image=25',            
            lugar:'Tegucigalpa',
            isLike:false
          },
          {
            id: 2,
            nombre: 'lorem ipsum2'
            ,imgn:'https://picsum.photos/600/300/?image=25',
            lugar:'Tegucigalpa',
            isLike:false
          },
          {
            id: 3,
            nombre: 'lorem ipsum3'
            ,imgn:'https://picsum.photos/600/300/?image=25',
            lugar:'Tegucigalpa',
            isLike:false
          },
          {
            id: 4,
            nombre: 'lorem ipsum4'
            ,imgn:'https://picsum.photos/600/300/?image=25',
            lugar:'Tegucigalpa',
            isLike:false
          },
          {
            id: 5,
            nombre: 'lorem ipsum5'
            ,imgn:'https://picsum.photos/600/300/?image=25',
            lugar:'Tegucigalpa',
            isLike:false
          }],
        orden:[1,2,3]
    })
}
</script>


<style scoped>
.colorbtn{
    background: #FF9922!important;
    color: black;
    border-color:#FF9922!important ;
}
.colorbtn:hover{
    background-color: #f8a94e!important;
    border-color: #FF9922!important;
    color: white;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
}
.card-text{
    font-size: 13px!important;
}
.v-card__title{
    color: black;
}
</style>
