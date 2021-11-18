<template>
  <div>
    {{userData.firstName}}
  </div>
</template>

<script>
  export default {
    name:'InfoDetail',
    data(){
        return{
            
        }
    },
    props:{
      userData:{}
    }
  }
</script>