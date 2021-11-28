<template>
  <div>
    <v-app-bar color="orange lighten-1" dark>
      <v-avatar color="white" @click="drawer = true" style="cursor: pointer">
        <span class="orange--text text-h5">
          {{ inicials }}
        </span>
      </v-avatar>
      <v-spacer></v-spacer>
      <v-btn class="mx-0 px-0" color="orange lighten-1" elevation="0">
        <v-icon class="white--text" @click="logout"> mdi-bell </v-icon>
      </v-btn>
      <v-btn color="orange lighten-1" elevation="0" class="px-0">
        <v-icon class="white--text" @click="logout"> mdi-power-standby </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <UserMenu />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import UserMenu from "@/components/UserMenu";
import { LOGOUT } from "@/graphql/queries/userQueries";
import Cookies from "js-cookie";
export default {
  name: "NavbarHome",
  components: { UserMenu },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  computed: {
    inicials: function () {
      return (
        this.$store.state.firstName.split("")[0].toUpperCase() +
        this.$store.state.lastName.split("")[0].toUpperCase()
      );
    },
  },
  methods: {
    async logout() {
      let r = await this.$swal({
        title: "Cerrar sesion",
        text: "¿Estas seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar",
      });
      if (r.isConfirmed) {
        try {
          const { data } = await this.$apollo.mutate({
            mutation: LOGOUT,
            variables: { token: this.$store.state.token },
          });
          if (data.logout.verified) {
            Cookies.remove("token", { path: "" });
            Cookies.remove("firstName", { path: "" });
            Cookies.remove("lastName", { path: "" });
            Cookies.remove("id", { path: "" });
            Cookies.remove("verifiedEmail", { path: "" });
            Cookies.remove("profileName", { path: "" });
            this.$store.state.verify;
            this.$router.push("/");
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
};
</script>

<style scoped>
.b-list-group-item {
  padding-top: 30% !important;
}

.tc {
  text-align: center !important;
}
::-webkit-scrollbar {
  display: none;
}

.btn-sidebar {
  border-bottom: solid !important;
  border-bottom-width: 0.5px !important;
  border-bottom-color: gray !important;
  background-color: transparent !important;
}

.btn-sidebar:hover {
  background: rgba(128, 128, 128, 0.4) !important;
  color: orangered !important;
}
</style>
