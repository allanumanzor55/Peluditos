<template>
  <div>
    <NavbarHome />
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
    <VerMascotas />
  </div>
</template>

<script>
import NavbarHome from "@/components/NavbarHome.vue";
import VerMascotas from "@/components/VerMascotas.vue";

export default {
  name: "VerMascota",
  components: {
    NavbarHome,
    VerMascotas,
  },
  data: () => ({
    breadItem: [
      {
        text: "inicio",
        disabled: false,
        href: "/#/inicio",
      },
      {
        text: "Adoptar",
        disabled: true,
        href: "/#/adoptar",
      },
    ],
  }),
};
</script>
