<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="setting"
      sort-by="name"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-text-field
            v-model="search"
            label="Buscar"
            class="mx-4"
        ></v-text-field>
        <v-toolbar
          flat
        >
          <v-toolbar-title class="text-outline">{{settingType}}</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="orange lighten-1"
                class="mb-2 white--text"
                v-bind="attrs"
                v-on="on"
              >
                Nuevo
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
                <hr>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="12"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <div></div>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="orange darken-1"
                  text
                  @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="orange darken-1"
                  text
                  @click="save"
                >
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h7">Eliminar</v-card-title>
              <hr>
              <v-card-text class="pb-0">
              <div class="text--primary">
                ¿Estás seguro que quieres eliminar este elemento?
              </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="orange darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          class="mr-2"
          @click="editItem(item)"
          color="blue"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          @click="deleteItem(item)"
          color="red"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="danger"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>

  import {
    GET_ALL_VACCINES,GET_ALL_PET_CATEGORY,GET_ALL_PROFILE_TYPE,GET_ALL_BREED,
    CREATE_VACCINE,CREATE_PET_CATEGORY,CREATE_BREED,
    UPDATE_VACCINE,UPDATE_PET_CATEGORY,UPDATE_BREED,
    DELETE_VACCINE,DELETE_PET_CATEGORY,DELETE_BREED} from '@/graphql/queries/settingsQueries'
  export default {
    components:{},
    data: () => ({
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Nombre', value: 'name'
            },
        { text: 'Acciones', value: 'actions', sortable: false }
      ],
      setting: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: ''
      },
      defaultItem: {
        id: 0,
        name: ''
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo' : 'Editar'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    async created () {
      await this.initialize()
    },

    methods: {
      async getData(){
        if(this.settingType=='Vacunas'){
          return (await this.$apollo.query({query:GET_ALL_VACCINES})).data.allVaccines
        }else if(this.settingType=='Categorias'){
          return (await this.$apollo.query({query:GET_ALL_PET_CATEGORY})).data.allPetCategories
        }else if(this.settingType=='Perfiles'){
          return (await this.$apollo.query({query:GET_ALL_PROFILE_TYPE})).data.allProfileTypes
        }else if(this.settingType=='Raza'){
          return (await this.$apollo.query({query:GET_ALL_BREED})).data.allBreeds
        }
      },
      async saveData(){
        if(this.settingType=='Vacunas'){
          return (await this.$apollo.mutate({mutation:CREATE_VACCINE,
          variables:{name:this.editedItem.name}})).data.createVaccine.vaccine
        }else if(this.settingType=='Categorias'){
          return (await this.$apollo.mutate({mutation:CREATE_PET_CATEGORY,
          variables:{name:this.editedItem.name}})).data.createPetCategory.petCategory
        }else if(this.settingType=='Perfiles'){
          // return (await this.$apollo.mutate({mutation:CREATE_PROFILE_TYPE,
          // variables:{name:this.editedItem.name,description:this.setting.description}})).data.createProfileType
        }else if(this.settingType=='Raza'){
          return (await this.$apollo.mutate({mutation:CREATE_BREED,
          variables:{name:this.editedItem.name}})).data.createBreed.breed
        }
      },
      async editData(){
        if(this.settingType=='Vacunas'){
          return (await this.$apollo.mutate({mutation:UPDATE_VACCINE,
          variables:{id:this.editedItem.id,name:this.editedItem.name}})).data.updateVaccine.vaccine
        }else if(this.settingType=='Categorias'){
          return (await this.$apollo.mutate({mutation:UPDATE_PET_CATEGORY,
          variables:{id:this.editedItem.id,name:this.editedItem.name}})).data.updatePetCategory.petCategory
        }else if(this.settingType=='Perfiles'){
          // return (await this.$apollo.mutate({mutation:UPDATE_PROFILE_TYPE,
          // variables:{id:this.editedItem.id,name:this.editedItem.name,description:this.setting.description}})).data.updateProfileType
        }else if(this.settingType=='Raza'){
          return (await this.$apollo.mutate({mutation:UPDATE_BREED,
          variables:{id:this.editedItem.id,name:this.editedItem.name}})).data.updateBreed.breed
        }
      },

      async deleteData(){
        if(this.settingType=='Vacunas'){
          return (await this.$apollo.mutate({mutation:DELETE_VACCINE,
          variables:{id:this.editedItem.id}})).data.updateVaccine
        }else if(this.settingType=='Categorias'){
          return (await this.$apollo.mutate({mutation:DELETE_PET_CATEGORY,
          variables:{id:this.editedItem.id}})).data.updatePetCategory
        }else if(this.settingType=='Perfiles'){
          // return (await this.$apollo.mutate({mutation:DELETE_PROFILE_TYPE,
          // variables:{id:this.editedItem.id}})).data.updateProfileType
        }else if(this.settingType=='Raza'){
          return (await this.$apollo.mutate({mutation:DELETE_BREED,
          variables:{id:this.editedItem.id}})).data.updateBreed
        }
      },
      async initialize () {
        this.setting = (await this.getData())
      },

      editItem (item) {
        this.editedIndex = this.setting.indexOf(item)
        this.editedItem = item
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.setting.indexOf(item)
        this.editedItem = item
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.deleteData()
        this.setting.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save () {
        if(this.editedIndex>-1){
          try {
            this.editedItem = await this.editData()
            Object.assign(this.setting[this.editedIndex], this.editedItem)
          } catch (error) {
            this.edited
            console.log(error)
            this.close()
          }
        }else{
          try {
            this.editedItem.id = parseInt(this.setting[this.setting.length-1].id)+1
            this.editedItem = await this.saveData()
            console.log(this.editedItem)
            this.setting.push(this.editedItem)
          } catch (error) {
            console.log(error)
            this.close()
          }
        }
        this.close()
      },
    },
    editItem (item) {
        this.editedIndex = this.setting.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.setting.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

    props:{
      settingType:String
    }
  }
</script>