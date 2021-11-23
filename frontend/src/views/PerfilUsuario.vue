<template>
    <div>
        <div>
        <NavbarHome />
        </div>
       
        <div class="mt">
            <PerUsuario/>
        </div>
        
    </div>
</template>

<script>
import PerUsuario from '@/components/PerUsuario.vue'
import NavbarHome from '@/components/NavbarHome.vue'
export default {
    components:{
        NavbarHome,
        PerUsuario
    }
}
</script>

<style scoped>
.mt{
    margin-top: 6%;
}
</style>