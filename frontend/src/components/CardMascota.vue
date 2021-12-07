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
          <v-btn icon @click="like(item.id,item.isLike,i)">
            <v-icon :class="{'red--text':item.isLike}">mdi-heart</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import Skeleton from "@/components/Skeleton.vue";
import { GET_PETS_ADOPT_MIN,LIKE_PET } from "@/graphql/queries/petQueries";
export default {
  components: { Skeleton },
  data: () => ({
    orden: [1, 2, 3],
    allPets: [],
  }),
  computed: {
    getCharge: function () {
      return this.$store.state.updateCentinel;
    },
  },
  methods: {
    async like(idPet,like,i){
      try{
        await this.$apollo.mutate({mutation:LIKE_PET,
        variables:{idPet:idPet,idUser:this.$store.state.id,like:like}})
        this.allPets[i].isLike=!this.allPets[i].isLike
      }catch(e){
        this.allPets[i].isLike=!!this.allPets[i].isLike
      }
    },
    async petDetails(id) {
      this.$router.push({
        name: "DetalleMascota",
        params: { id: id },
      });
    },
    async getAllPets() {
      this.$store.commit("desactivateUpdate");
      this.allPets = (
        await this.$apollo.query({ query: GET_PETS_ADOPT_MIN,variables:{idLoguer:this.$store.state.id} })
      ).data.allPets;
      this.$store.commit("activateUpdate");
    },

  },
  async created() {
    let id =  this.$store.state.id
    await this.getAllPets();
    try{
      for(let i in this.allPets){
        for(let j in this.allPets[i].likes){
          if (this.allPets[i].likes[j].id==id){
            this.allPets[i].isLike=true
          }
        }
      }
    }catch(e){
      console.log(e.message)
    }
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
