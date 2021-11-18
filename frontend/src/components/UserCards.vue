<template>
  <div class="mt-5">
    <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg" style="height:225px;"></v-img>
        <v-card-title class="orange--text">
          {{userData.firstName.split(" ")[0]+" "+userData.lastName.split(" ")[0]}}
        </v-card-title>
        <v-card-subtitle>
          Usuario general
        </v-card-subtitle>
        <!-- <v-card-title>
          <v-rating
            :value="4"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>
          <span class="primary--text text-subtitle-2"></span>
        </v-card-title> -->
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            :value="overlay"
            color="#036358"
          >
            <v-btn @click="showUserDetails()" class="gray white--text">
              Ver mas...
            </v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
    </v-hover>
  </div>
  
</template>

<script>
export default {
  name: 'UserCard',
  data(){
    return{
      overlay:true
    }
  },
  methods:{
    showUserDetails(){
      this.$router.push({
        name: "UserDetail",
        params:{id:this.userData.id,}
      })
    }
  },
  props:{
    userData: {}
  }
}
</script>

<style scoped>
::-webkit-scrollbar{ 
  display: none;
}
</style>