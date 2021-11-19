<template>
  <v-app>
    
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  async created(){
    this.$store.commit('setData')
    await this.$store.dispatch('verifyLogin')
  },
  async updated(){
    this.$store.commit('setData')
    await this.$store.dispatch('verifyLogin')
    console.log(this.$store.state.verify)
  }
};
</script>
