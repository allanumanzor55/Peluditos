<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="700"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Nombre + Apellido
        </v-list-item-title>
        <p class="text-sm-body-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="200"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
        <v-btn>
        <v-icon color="red accent-4">mdi-heart</v-icon>
        0
        </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>