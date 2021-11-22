<template>
<v-container>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="7"
      >
       <v-card
       elevation="0">
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
        Editar
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-lock
        </v-icon>
        Seguridad
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-access-point
        </v-icon>
        Option 3
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              <FormEdit/>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
      </v-col>
      <v-col
        md="1"
      >
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <v-card
    class="mx-auto"
    max-width="400"
    elevation="0"
  >
    <v-img
      class="align-end"
      height="380px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"

    >
    </v-img>
    <v-card-title>Nombre + Apellido</v-card-title>
    <v-card-text class="text--primary">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </v-card-text>
  </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
div{
    background-color:white ;
}

.col-md-8{
    font-size: 12px!important;
}
.align-end{
    border-radius: 100%!important;
}

</style>

<script>
import FormEdit from '@/components/FormEdit'
export default {
    components:{
        FormEdit
    }
}
</script>