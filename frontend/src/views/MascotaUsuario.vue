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
    <PerMascota class="mt" />
  </div>
</template>

<style scoped></style>

<script>
import NavbarHome from "@/components/NavbarHome.vue";
import PerMascota from "@/components/PerMascota.vue";
export default {
  data: () => ({
    breadItem: [
      {
        text: "inicio",
        disabled: false,
        href: "/#/inicio",
      },
      {
        text: "Mis mascotas",
        disabled: true,
        href: "/#/mascotausuario",
      },
    ],
  }),
  components: {
    NavbarHome,
    PerMascota,
  },
};
</script>

<style scoped>
.mt {
  margin-top: 0.9% !important;
}
</style>
