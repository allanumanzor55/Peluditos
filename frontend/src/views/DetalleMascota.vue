<template>
  <div>
    <NavbarHome class="mb-3"/>
    <v-breadcrumbs :items="breadItem">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <span class="orange--text" v-if="!item.disabled">
            {{ item.text.toUpperCase() }}
          </span>
          <span v-else>
            {{ item.text.toUpperCase() }}
          </span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <InfoMascota/>
  </div>
</template>


<script>
import NavbarHome from '@/components/NavbarHome.vue'
import InfoMascota from '@/components/InfoMascota.vue'
export default {
  data: () => ({
    breadItem: [
      {
        text: "inicio",
        disabled: false,
        href: "/#/inicio",
      },
      {
        text: "Adoptar",
        disabled: false,
        href: "/#/adoptar",
      },
      {
        text: "Detalle",
        disabled: true,
        href: "/#/adoptar/detalle",
      },
    ],
  }),
  components: {
    NavbarHome,
    InfoMascota
  }
}
</script>

<style>
  ::-webkit-scrollbar {
    display: none;
  }
</style>