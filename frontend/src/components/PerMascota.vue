<template>
  <div>
    <v-card elevation="0">
      <v-row align="center" justify="center" class="px-5">
        <v-spacer></v-spacer>
        <v-row
          class="cyan lighten-1 rotulo-superficial"
          justify="center"
          align="center"
        >
          <h3 class="white--text">Mis mascotas</h3>
        </v-row>
        <v-spacer></v-spacer>
        <FormMascota type="guardar" />
      </v-row>
      <v-tabs color="orange accent-4" right>
        <v-tab>Mis mascotas</v-tab>
        <v-tab>Favoritas</v-tab>
        <v-tab>Adoptadas</v-tab>

        <v-tab-item v-for="n in 3" :key="n">
          <v-container fluid>
            <v-row v-if="!getCharge">
              <v-col
                v-for="(item, i) in getPets"
                :key="i"
                cols="12"
                md="4"
                style="min-height: 400px !important"
              >
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    :src="'https://placedog.net/200/344?id=' + (i + 1)"
                    height="200px"
                  >
                    <v-app-bar flat color="rgba(0, 0, 0, 0)">
                      <v-spacer></v-spacer>
                      <v-menu bottom left>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn dark icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>

                        <v-list dense>
                          <v-list-item-group>
                            <FormMascota type="modificar" :idPet="item.id" />
                            <v-list-item @click="deletePet(item.id)">
                              <v-list-item-title>
                                <v-icon pointer>mdi-delete</v-icon>Eliminar
                              </v-list-item-title>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-menu>
                      <!-- <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="white" icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <span>Mas opciones</span>
                      </v-tooltip> -->
                    </v-app-bar>
                  </v-img>
                  <v-card-text class="mb-0">
                    <div>{{ item.category.name }}</div>
                    <p class="text-h4 text--primary">{{ item.name }}</p>
                    <span>{{ item.breed.name }} - {{ item.gender }}</span>
                  </v-card-text>
                  <v-card-actions class="mt-0">
                    <v-btn
                      text
                      color="teal accent-4"
                      @click="item.showDetails = true"
                    >
                      Leer mas
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <v-card
                      v-if="item.showDetails"
                      class="transition-fast-in-fast-out v-card--reveal"
                      style="height: 100%"
                    >
                      <v-card-text>
                        <v-container
                          class="orange lighten-5"
                          style="border-radius: 15px"
                        >
                          <p class="orange--text">
                            Color:
                            <span class="black--text">{{
                              item.color == "" ? "N/D" : item.color
                            }}</span>
                          </p>
                          <p class="orange--text">
                            Fecha de nacimiento:
                            <span class="black--text">{{
                              item.birthDate
                            }}</span>
                          </p>
                        </v-container>
                        <v-container
                          class="orange lighten-4 mt-3"
                          style="
                            border-radius: 15px;
                            min-height: 190px !important;
                          "
                        >
                          <p class="text-h4 orange--text">Descripcion:</p>
                          {{ item.description }}
                        </v-container>
                      </v-card-text>
                      <v-card-actions style="margin-top: calc(100%-1rem)">
                        <v-btn
                          text
                          color="teal accent-4"
                          @click="item.showDetails = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
            <v-row v-else>
              <skeleton />
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import Skeleton from "@/components/Skeleton.vue";
import FormMascota from "@/components/FormMascota.vue";
import { DELETE_PET /*GET_OWNER_PETS*/ } from "@/graphql/queries/petQueries";
export default {
  components: { FormMascota, Skeleton },
  data() {
    return {
      myPets: [],
      type: "guardar",
      updateActivate: true,
    };
  },
  computed: {
    getPets: function () {
      return this.$store.state.myPets;
    },
    getCharge: function () {
      return this.$store.state.updateCentinel;
    },
  },
  methods: {
    getMyPets() {
      // this.myPets = (await this.$apollo.query({query: GET_OWNER_PETS,variables: { ownerId: this.$store.state.id },})).data.ownerPets
      this.myPets = this.$store.state.myPets;
    },
    async deletePet(id) {
      const { isConfirmed } = await this.$swal({
        title: "¿Estas seguro?",
        text: "No podras revertir esta accion (te recomendamos deshabilitar el perfil de no estar seguro)",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#F57C00",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminalo",
        cancelButtonText: "Cancelar",
      });
      if (isConfirmed) {
        try {
          this.$store.commit("activateUpdate");
          const { data } = await this.$apollo.mutate({
            mutation: DELETE_PET,
            variables: { id: id },
          });
          if (data.deletePet.verified) {
            await this.$store.dispatch("updatePets");
            await this.$swal({ title: "Registro eliminado", icon: "success" });
            this.$store.commit("desactivateUpdate");
          } else {
            this.$swal({ title: "Algo salio mal", icon: "error" });
          }
        } catch (error) {
          console.error(error.message);
        }
      }
    },
  },
  async mounted() {
    //await this.getMyPets()
  },
  async created() {
    this.$store.commit("activateUpdate");
    await this.$store.dispatch("updatePets");
    this.$store.commit("desactivateUpdate");
  },
};
</script>

<style scoped>
.titulo {
  width: 400px;
  height: 60px;
  background-color: #fdcc8d;
  text-align: center;
  margin: auto !important;
  top: 25px !important;
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 3px 10px 0 rgba(0, 0, 0, 0.12) !important;
  padding: 10px;
  color: black;
  padding: 1%;
}
.mt {
  margin-top: 5%;
}

.rotulo-superficial {
  min-width: 40%;
  min-height: 5%;
  top: 30px;
  left: 30%;
  position: absolute;
  border-radius: 20px;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
