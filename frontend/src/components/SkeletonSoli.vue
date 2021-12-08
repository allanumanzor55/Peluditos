<template>
  <v-container>
    <v-row v-for="i in 4" :key="i">
      <v-col cols="12">
        <v-skeleton-loader
          v-bind="attrs"
          type="card-avatar, paraph, actions"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "SkeletonSoli",
  data:()=>({
    attrs: {
    class: 'mb-6',
    boilerplate: true,
    elevation: 2,
    },
  })
};
</script>
