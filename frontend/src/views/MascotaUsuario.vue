<template>
    <div>
        <div>
            <NavbarHome/>
        </div>

        <div>
            <PerMascota/>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
import NavbarHome from '@/components/NavbarHome.vue'
import PerMascota from '@/components/PerMascota.vue'
export default {
    components:{
        NavbarHome,
        PerMascota
    }
}
</script>