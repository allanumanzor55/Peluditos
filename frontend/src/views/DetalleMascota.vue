<template>
  <div>
      <div>
    <Navbar/>
      </div>
<br><br><br><br>
      <div>
        <InfoMascota/>
      </div>

  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import InfoMascota from '@/components/InfoMascota.vue'
export default {
  components: {
    Navbar,
    InfoMascota
  }
}
</script>

<style>
  ::-webkit-scrollbar {
    display: none;
  }
</style>