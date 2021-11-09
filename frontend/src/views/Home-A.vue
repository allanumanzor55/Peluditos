<template>
  <div>
    BIENVENIDO
  </div>
</template>

<script>
  export default {
    data() {
      return {
        toastCount: 0
      }
    },
    methods: {
      makeToast(append = false) {
        this.toastCount++
        this.$bvToast.toast(`Recuerde confirmar su correo para elimintar esta alerta`, {
          title: 'Confirmacion de correo',
          appendToast: append
        })
      }
    },
    mounted(){
      this.makeToast()
    }
  }
</script>