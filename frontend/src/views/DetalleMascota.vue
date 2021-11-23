<template>
  <div>
    <NavbarHome class="mb-3"/>
    <InfoMascota/>
  </div>
</template>


<script>
import NavbarHome from '@/components/NavbarHome.vue'
import InfoMascota from '@/components/InfoMascota.vue'
export default {
  components: {
    NavbarHome,
    InfoMascota
  }
}
</script>

<style>
  ::-webkit-scrollbar {
    display: none;
  }
</style>