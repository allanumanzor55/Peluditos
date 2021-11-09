<template>
  <div class="home">
    
    <MenuSettings msg="Perfiles"/>

  </div>
</template>

<script>
// @ is an alias to /src
import MenuSettings from '@/components/MenuSettings.vue'


export default {
  name: 'Home',
  components: {
    MenuSettings
  }
}
</script>