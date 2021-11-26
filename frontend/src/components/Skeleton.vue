<template>
  <v-container>
    <v-row v-for="i in 3" :key="i">
      <v-col cols="4" v-for="j in 3" :key="j">
        <v-card :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="">
          <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    // Vuetify components provide
    // a theme variable that is
    // used to determine dark
    inject: {
      theme: {
        default: { isDark: false },
      },
    },
  }
</script>