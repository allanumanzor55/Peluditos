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
    <PerUsuario />
  </div>
</template>

<script>
import PerUsuario from "@/components/PerUsuario.vue";
import NavbarHome from "@/components/NavbarHome.vue";
export default {
  data: () => ({
    breadItem: [
      {
        text: "inicio",
        disabled: false,
        href: "/#/inicio",
      },
      {
        text: "Perfil",
        disabled: true,
        href: "/#/perfilusuario",
      }
    ],
  }),
  components: {
    NavbarHome,
    PerUsuario,
  },
};
</script>

<style scoped>
.mt {
  margin-top: 6%;
}
</style>
