<template>
    <div>
        <NavbarHome />
        <v-container fluid class="pink lighten-3">
            <v-icon>
                mdi-account-arrow-down
            </v-icon>
        </v-container>
    </div>
</template>

<script>
import NavbarHome from '@/components/NavbarHome'
export default {
    name:'Solicitudes',
    components:{NavbarHome}
}
</script>