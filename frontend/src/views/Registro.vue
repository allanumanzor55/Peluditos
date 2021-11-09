<template>
    <div class="fondo">
        <div class="ima">

        </div>
        
        <div class="rec">

            <FormRegistro/>
        </div>
        
        
        
    </div>
</template>


<script>
import FormRegistro from '@/components/FormRegistro.vue'

export default {
  name: 'form',
  components: {
    FormRegistro
  }
}
</script>



<style scoped>
.fondo{
   position: absolute;
width: 100%;
height: 120%;
left: 0px;
top: 0px;
background: #FF9922;


}
.rec{
position: absolute;
width: 100%;
height: 100%;
left: 0px;
top: 0px;
display: inline-block;
background: #FFAD4D;
border-radius: 0px 0px 512px 0px;
}

</style>
