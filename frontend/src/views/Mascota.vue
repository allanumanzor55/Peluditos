<template>
    <div>
        <div></div>
        <NavbarHome/>
        <VerMascotas/>
    </div>
</template>


<script>
import NavbarHome from '@/components/NavbarHome.vue'
import VerMascotas from '@/components/VerMascotas.vue'

export default {
  name: 'VerMascota',
  components: {
    NavbarHome,
    VerMascotas
  }
}
</script>