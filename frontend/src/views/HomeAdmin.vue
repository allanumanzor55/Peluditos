<template>
    <div>
        <NavbarHome/>
        <MenuSettings/>
    </div>
</template>


<script>
import MenuSettings from '@/components/MenuSettings.vue'
import NavbarHome from '@/components/NavbarHome.vue'
export default {
    name: 'HomeAdmin',
    components: {
        MenuSettings,
        NavbarHome
    },
    data(){
        return{
            userType:'admin'
        }
    }
}
</script>

<style scoped>

</style>