<template>
    <div>
        <div>
        <Navbar/>
        </div>
       
        <div class="mt">
            <PerUsuario/>
        </div>
        
    </div>
</template>

<script>
import PerUsuario from '@/components/PerUsuario.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    components:{
        Navbar,
        PerUsuario
    }
}
</script>

<style scoped>
.mt{
    margin-top: 6%;
}
</style>