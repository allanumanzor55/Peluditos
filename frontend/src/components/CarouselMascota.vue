<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in 4"
      :key="i"
      :src="'https://placedog.net/400/200?id=' + (i+id)"
    ></v-carousel-item>
  </v-carousel>
</template> 

<script>
  export default {
    data () {
      return {
      }
    },
    props:{
      id:Number
    }
  }
</script>