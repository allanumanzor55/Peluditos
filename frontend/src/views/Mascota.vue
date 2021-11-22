<template>
    <div>
        <div>
        <Navbar/>
        </div>
        <br>
        <div>
        <VerMascotas/>
        </div>
        
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