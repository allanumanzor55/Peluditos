<template>
  <v-dialog v-model="dialog" persistent max-width="600px" style="">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-3 mb-5 mt-3"
        fab
        dark
        color="light-blue lighten-1"
        v-bind="attrs"
        v-on="on"
        v-if="type == 'guardar'"
      >
        <v-icon> mdi-plus </v-icon>
      </v-btn>
      <v-list-item v-bind="attrs" v-on="on" v-else>
        <v-list-item-title>
          <v-icon>mdi-refresh</v-icon>Modificar
        </v-list-item-title>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Agregar mascota</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="petForm" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-select
                  :items="itemsCategories"
                  item-text="name"
                  item-value="id"
                  label="Categoria*"
                  color="deep-orange"
                  v-model="petData.categoryId"
                  :rules="[rules[0].required]"
                  prepend-icon="mdi-dog-side"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  :items="itemsBreeds"
                  item-text="name"
                  item-value="id"
                  label="Raza*"
                  color="deep-orange"
                  prepend-icon="mdi-dog"
                  :rules="[rules[0].required]"
                  v-model="petData.breedId"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Nombre*"
                  v-model="petData.name"
                  color="deep-orange"
                  :rules="[rules[0].required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Color"
                  color="deep-orange"
                  v-model="petData.color"
                  :rules="[rules[0].required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Tamaño"
                  color="deep-orange"
                  v-model="petData.size"
                  :rules="[rules[0].required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-combobox
                  v-model="petData.vaccines"
                  :items="itemsVaccines"
                  item-text="name"
                  item-value="id"
                  color="deep-orange"
                  chips
                  clearable
                  label="Vacunas"
                  multiple
                  prepend-icon="mdi-diabetes"
                >
                  <template
                    v-slot:selection="{ attrs, item, select, selected }"
                  >
                    <v-chip
                      v-bind="attrs"
                      :input-value="selected"
                      close
                      color="orange lighten-5 deep-orange--text"
                      @click="select"
                      @click:close="remove(item)"
                    >
                      <strong>{{ item.name }}</strong
                      >&nbsp;
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>
              <v-col cols="3" sm="3">
                <v-select
                  color="deep-orange"
                  :items="['Hembra', 'Macho']"
                  label="Genero*"
                  v-model="petData.gender"
                  prepend-icon="mdi-gender-male-female"
                  :rules="[rules[0].required]"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="5">
                <v-menu
                  v-model="showPicker"
                  :close-on-content-click="true"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                  :rules="[rules[0].required]"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="petData.birthDate"
                      label="Fecha de nacimiento"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="petData.birthDate"
                    @input="showPicker = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="4">
                <v-switch
                  v-model="petData.isSterilized"
                  label="Esterilizado?"
                  color="orange darken-3"
                  hide-details
                  :rules="[rules[0].required]"
                ></v-switch>
              </v-col>
              <v-col cols="12">
                <v-textarea
                background-color="amber lighten-5"
                color="orange orange-darken-4"
                name="input-7-1"
                filled
                label="Descripcion"
                auto-grow
                v-model="petData.description"
                :rules="[rules[0].required]"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indica los campos obligatorios</small>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Cerrar
        </v-btn>
        <v-btn
          color="orange darken-1"
          text
          @click="addPet"
          :disabled="!valid"
          v-if="type == 'guardar'"
        >
          Guardar
        </v-btn>
        <v-btn
          color="orange darken-1"
          text
          @click="updatePet"
          :disabled="!valid"
          v-else
        >
          Modificar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { CREATE_PET, GET_PET, UPDATE_PET } from "@/graphql/queries/petQueries";
import {
  GET_ALL_VACCINES,
  GET_ALL_PET_CATEGORY,
  GET_ALL_BREED,
} from "@/graphql/queries/settingsQueries";
export default {
  name: "FormMascota",
  computed: {
    getIdPet: function () {
      return parseInt(this.idPet);
    },
  },
  data: () => ({
    valid: true,
    itemsCategories: [],
    itemsBreeds: [],
    itemsVaccines: [],
    petData2: {},
    petData: {
      name: "",
      categoryId: 0,
      ownerId: 0,
      birthDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      color: "",
      breedId: 0,
      size: "",
      gender: "",
      isSterilized: false,
      vaccines: [],
      description:""
    },
    allPets: [],
    dialog: false,
    showPicker: false,
    rules: [
      {
        required: (value) => !!value || "Campo requerido",
      },
    ],
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    async addPet() {
      if (this.$refs.petForm.validate()) {
        this.petData.ownerId = this.$store.state.id;
        const { data } = await this.$apollo.mutate({
          mutation: CREATE_PET,
          variables: { petData: this.petData },
        });
        let response = data.createPet;
        if (response.verified) {
          await this.$store.dispatch("updatePets");
          this.dialog = false;
          await this.$swal({ icon: "success", title: "Mascota agregada" });
          this.$refs.petForm.reset()
          this.petData.birthDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
        } else {
          this.$swal({
            icon: "error",
            title: "Oops, Algo salio mal",
            text: "Intentalo de nuevo...",
          });
        }

      }
    },
    async updatePet() {
      this.$store.commit("activateUpdate")
      const { data } = await this.$apollo.mutate({
        mutation: UPDATE_PET,
        variables: { petData: this.petData },
      });
      if (data.updatePet.verified) {
        this.dialog = false;
        await this.$store.dispatch("updatePets");
        await this.$swal({ icon: "success", title: "Mascota modificada" });
        this.$store.commit("desactivateUpdate")
        
        this.$refs.petForm.reset()
      } else {
        this.$swal({
          icon: "error",
          title: "Oops, Algo salio mal",
          text: "Intentalo de nuevo...",
        });
      }
    },
    remove(item) {
      this.petData.vaccines.splice(this.petData.vaccines.indexOf(item), 1);
      this.petData.vaccines = [...this.petData.vaccines];
    },
  },
  props: {
    type: String,
    idPet: null,
  },
  async created() {
    this.itemsCategories = (
      await this.$apollo.query({ query: GET_ALL_PET_CATEGORY })
    ).data.allPetCategories;
    this.itemsVaccines = (
      await this.$apollo.query({ query: GET_ALL_VACCINES })
    ).data.allVaccines;
    this.itemsBreeds = (
      await this.$apollo.query({ query: GET_ALL_BREED })
    ).data.allBreeds;
    if (this.type == "modificar") {
      this.petData2 = (
        await this.$apollo.query({
          query: GET_PET,
          variables: { id: this.getIdPet },
        })
      ).data.pet;
      this.petData.id = this.petData2.id;
      this.petData.name = this.petData2.name;
      this.petData.categoryId = parseInt(this.petData2.category.id);
      this.petData.ownerId = parseInt(this.petData2.owner.id);
      this.petData.birthDate = this.petData2.birthDate;
      this.petData.color = this.petData2.color;
      this.petData.breedId = parseInt(this.petData2.breed.id);
      this.petData.size = this.petData2.size;
      this.petData.gender = this.petData2.gender;
      this.petData.isSterilized = this.petData2.isSterilized;
      this.petData.vaccines = this.petData2.vaccines;
    }
  },
};
</script>

<style scoped></style>
