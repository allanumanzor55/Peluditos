<template>
    <div>
        <Navbar/>
        <VerMascotas/>
    </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import VerMascotas from '@/components/VerMascotas.vue'

export default {
  name: 'VerMascota',
  components: {
    Navbar,
    VerMascotas
  }
}
</script>