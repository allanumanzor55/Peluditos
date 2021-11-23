<template>
    <div>
        <NavbarHome/>
        <v-row>
        <v-breadcrumbs :items="items" class="mb-0">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-row>
    </div>
    
</template>

<script>
import NavbarHome from "@/components/NavbarHome"
export default {
    components:{NavbarHome},
    data(){
        return{
          items:[ 
            {
              text: "Inicio",
              disabled: false,
              href: "#/inicio/",
            },
            {
              text:"Mis Mascotas",
              disabled: true,
              href: "#/mascotas/mismascotas" 
            }

          ]
        }
    }
}
</script>