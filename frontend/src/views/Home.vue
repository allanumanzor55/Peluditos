<template>
  <div>
    <Navbar/>
    <Carusel/>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import Carusel from '@/components/Carusel.vue'
export default {
  name: 'landing',
  components: {
    Navbar,
    Carusel
  },
  data(){
    return{
    }
  },
  created(){
    
  }
}
</script>

<style>
  ::-webkit-scrollbar {
    display: none;
  }
</style>