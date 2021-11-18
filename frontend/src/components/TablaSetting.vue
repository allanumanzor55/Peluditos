<template>
  <v-data-table
    :headers="headers"
    :items="vacunas"
    sort-by="nombre"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-text-field
          v-model="search"
          label="Buscar por ID"
          class="mx-4"
        ></v-text-field>
      <v-toolbar
        flat
      >
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="orange darken-1"
              class="mb-2"
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
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.id"
                      label="ID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.nombre"
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
</template>

<script>
  export default {
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
        { text: 'Nombre', value: 'nombre'
            },
        { text: 'Acciones', value: 'actions', sortable: false }
      ],
      vacunas: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        nombre: ''
      },
      defaultItem: {
        id: 0,
        nombre: ''
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

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.vacunas = [
          {
            id: 1,
            nombre: 'lorem ipsum'
          },
          {
            id: 2,
            nombre: 'lorem ipsum'
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.vacunas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.vacunas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.vacunas.splice(this.editedIndex, 1)
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

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.vacunas[this.editedIndex], this.editedItem)
        } else {
          this.vacunas.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>