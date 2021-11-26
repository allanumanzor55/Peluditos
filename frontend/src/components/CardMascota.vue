<template>
  <div>
    <v-card v-if="!getCharge">
      <Skeleton />
    </v-card>
    <div class="wrapper" v-else>
      <v-card
        v-for="(item, i) in allPets"
        :key="i"
        class="mx-auto"
        min-width="400"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="400">
              <v-img
                :src="'https://placedog.net/600/300?id=' + (i + 1)"
                contain
              ></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#000">
                  <v-btn @click="petDetails(item.id)">Mas detalles...</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle class="pb-0"
          >{{ item.owner.address.department }} - {{ item.owner.address.city }}
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon class="">mdi-heart</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import Skeleton from "@/components/Skeleton.vue";
import { GET_PETS_ADOPT_MIN } from "@/graphql/queries/petQueries";
export default {
  components: { Skeleton },
  data: () => ({
    mascota: [
      {
        id: 1,
        nombre: "lorem ipsum",
        imgn: "https://picsum.photos/600/300/?image=25",
        lugar: "Tegucigalpa",
        isLike: false,
      },
      {
        id: 2,
        nombre: "lorem ipsum2",
        imgn: "https://picsum.photos/600/300/?image=25",
        lugar: "Tegucigalpa",
        isLike: false,
      },
      {
        id: 3,
        nombre: "lorem ipsum3",
        imgn: "https://picsum.photos/600/300/?image=25",
        lugar: "Tegucigalpa",
        isLike: false,
      },
      {
        id: 4,
        nombre: "lorem ipsum4",
        imgn: "https://picsum.photos/600/300/?image=25",
        lugar: "Tegucigalpa",
        isLike: false,
      },
      {
        id: 5,
        nombre: "lorem ipsum5",
        imgn: "https://picsum.photos/600/300/?image=25",
        lugar: "Tegucigalpa",
        isLike: false,
      },
    ],
    orden: [1, 2, 3],
    allPets: [],
  }),
  computed: {
    getCharge: function () {
      return this.$store.state.updateCentinel;
    },
  },
  methods: {
    async petDetails(id) {
      this.$router.push({
        name: "DetalleMascota",
        params: { id: id },
      });
    },
    async getAllPets() {
      this.$store.commit("desactivateUpdate");
      this.allPets = (
        await this.$apollo.query({ query: GET_PETS_ADOPT_MIN })
      ).data.allPets;
      this.$store.commit("activateUpdate");
    },
  },
  async created() {
    await this.getAllPets();
  },
  async updated() {},
};
</script>

<style scoped>
.colorbtn {
  background: #ff9922 !important;
  color: black;
  border-color: #ff9922 !important ;
}
.colorbtn:hover {
  background-color: #f8a94e !important;
  border-color: #ff9922 !important;
  color: white;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
}
.card-text {
  font-size: 13px !important;
}
.v-card__title {
  color: black;
}
</style>
