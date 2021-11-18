<template>
  <div>
    <div></div>
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
  }
}
</script>

<style>
  ::-webkit-scrollbar {
    display: none;
  }
</style>