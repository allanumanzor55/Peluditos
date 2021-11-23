<template>
    <div>
    <h4 class="text-center">Acerca de mi ...</h4>
    <v-divider inset></v-divider>
    <v-container fluid>
    <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="Mi Biografía"
      value=""
    ></v-textarea>
    <br>
    <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="Mi lema"
      value=""
    ></v-textarea>
    <v-btn
      depressed
      color="orange darken-4 white--text"
    >
      Guardar
    </v-btn>
  </v-container>
    </div>
</template>

<script>
export default {
    
}
</script>