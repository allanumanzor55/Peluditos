<template>
  <div>
    <NavbarHome />
    <v-container fluid class="p-0 position-relative" fill-height>
      <v-row>
        <v-breadcrumbs :items="itemsAdmin" class="mb-0" v-if="getTypeProfile=='Administrador'">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <v-breadcrumbs :items="itemsOwner" class="mb-0" v-else>
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-row>
      <v-container
        class="mt-3 orange lighten-5 min-vh-100 position-relative"
        style="min-width: 70%"
      >
        <v-row class="orange lighten-1 rotulo-superficial" justify="center">
          <h1 class="white--text mt-2">
            {{ user.firstName + " " + user.lastName }}
          </h1>
        </v-row>
        
        <v-row class="white--text rotulo-opciones" justify="center" v-if="getTypeProfile=='Administrador'">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="ma-2 gray lighten-3" fab v-bind="attrs" v-on="on"
              @click="disableProfile">
                <v-icon v-if="user.active">mdi-cancel</v-icon>
                <v-icon v-else>mdi-checkbox-marked-circle-outline</v-icon>
              </v-btn>
            </template>
            <span>{{activeText}}</span>
          </v-tooltip>
          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn class="ma-2 red lighten-1 white--text" fab v-bind="attrs" v-on="on"
              @click="deleteProfile">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
            <span>Eliminar</span>
          </v-tooltip>
        </v-row>
        
        <v-row class="mt-8" justify="start">
          <v-col>
            <v-container class="orange lighten-4 b-radius">
              <v-card>
                <v-img
                  src="https://picsum.photos/200/300?random=11"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="user.firstName"></v-card-title>
                </v-img>
                <v-card-actions class="orange lighten-1 white--text" style="min-height:80px !important;">
                  {{motto}}
                </v-card-actions>
              </v-card>
              <v-row
                class="m-0 p-0"
                v-for="(item, key, index) in firstInfo"
                :key="index"
                style="max-height: 40px !important"
              >
                <v-col class="text-right px-1 my-0" cols="5">
                  <p
                    class="text-overline text-h6 deep-orange--text"
                    style="font-size: 1rem !important"
                    v-if="item != ''"
                  >
                    {{ key }}
                  </p>
                </v-col>
                <v-col class="px-1 my-0">
                  <p
                    class="text-h5"
                    style="font-size: 1rem !important"
                    v-if="item != ''"
                  >
                    {{ item }}
                  </p>
                </v-col>
              </v-row>
            </v-container>
            <v-container
              class="orange lighten-4 mt-2 pt-1"
              style="border-radius: 10px"
            >
              <v-row justify="center" class="mt-1">
                <p
                  class="text-overline deep-orange--text"
                  style="font-size: 1rem !important"
                >
                  <span v-if="!user.verified">Correo no verificado</span>
                  <span v-else>Correo verificado</span>
                </p>
              </v-row>
            </v-container>
          </v-col>

          <v-col cols="5">
            <v-container class="orange lighten-4 b-radius">
              <v-row class="m-0 px-5" style="min-height: 300px !important">
                <v-container
                  class="text-overline my-0 deep-orange--text"
                  style="font-size: 1rem !important; max-height: 1px"
                >
                  Biografia
                </v-container>
                <v-container class="my-0">
                  {{biography}}
                </v-container>
              </v-row>
            </v-container>
            <v-container class="orange lighten-4 mt-4 b-radius">
              <v-row
                class="text-overline mx-3 mb-10 my-0 deep-orange--text"
                style="font-size: 1rem !important; max-height: 1px"
              >
                Direccion
              </v-row>
              <v-row
                class="m-0 mt-1 p-0"
                v-for="(item, key, index) in addressInfo"
                :key="index"
                style="max-height: 40px !important"
              >
                <v-col class="text-right px-1 my-0">
                  <p
                    class="text-overline text-h6 deep-orange--text"
                    style="font-size: 1rem !important"
                    v-if="item != ''"
                  >
                    {{ key }}
                  </p>
                </v-col>
                <v-col class="px-1 my-0">
                  <p
                    class="text-h5"
                    style="font-size: 1rem !important"
                    v-if="item != ''"
                  >
                    {{ item }}
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-col>

          <v-col>
            <v-container>
              <v-row
                class="text-overline my-0 deep-orange--text"
                style="font-size: 1rem !important; max-height: 1px"
              >
                Datos De peluditos
              </v-row>
            </v-container>
            <hr />
            <v-container fluid>
              <v-card class="orange lighten-2 mb-3" dark>
                <v-card-title class="text-h5"> Adoptados </v-card-title>
                <v-card-subtitle class="text-center">
                  <h1>{{ userPetInfo.adoptedPets }}</h1>
                </v-card-subtitle>
              </v-card>
              <v-card class="orange lighten-2" dark>
                <v-card-title class="text-h5"> En Adopcion </v-card-title>
                <v-card-subtitle class="text-center">
                  <h1>{{ userPetInfo.adoptionPets }}</h1>
                </v-card-subtitle>
              </v-card>
            </v-container>

            <v-container>
              <v-row
                class="text-overline my-0 deep-orange--text"
                style="font-size: 1rem !important; max-height: 1px"
              >
                Datos de Solicitud
              </v-row>
            </v-container>
            <hr />
            <v-container>
              <v-card class="orange lighten-2 mb-3" dark>
                <v-card-title class="text-h5"> Pendientes </v-card-title>
                <v-card-subtitle class="text-center">
                  <h1>{{ userPetInfo.requestsAwait }}</h1>
                </v-card-subtitle>
              </v-card>
              <v-card class="orange lighten-2" dark>
                <v-card-title class="text-h5"> Enviadas </v-card-title>
                <v-card-subtitle class="text-center">
                  <h1>{{ userPetInfo.requestsSent }}</h1>
                </v-card-subtitle>
              </v-card>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import NavbarHome from "@/components/NavbarHome";
import { GET_USER_INFO, USER_N_INFO,DISABLE_PROFILE,DELETE_USER } from "@/graphql/queries/userQueries";
export default {
  components: { NavbarHome },
  name: "UserDetail",
  data() {
    return {
      biography:'',
      motto:'',
      activeText:'',
      idUser: 0,
      user: {},
      userInfo:{id:0,active:true,address:{}},
      firstInfo: {},
      addressInfo: {},
      userPetInfo: {},
      itemsAdmin: [
        {
          text: "Inicio",
          disabled: false,
          href: "#/inicio/",
        },
        {
          text: "Usuarios",
          disabled: false,
          href: "#/usuarios",
        },
        {
          text: "Detalle de usuario",
          disabled: true,
          href: "#/usuarios/detalle",
        },
      ],
      itemsOwner:[
        {
          text: "Inicio",
          disabled: false,
          href: "#/inicio/",
        },
        {
          text: "Adoptar",
          disabled: false,
          href: "#/adoptar",
        },
        {
          text: "Detalle",
          disabled: false,
          href: "#/adoptar/detalle/"+this.$route.params.idPet,
        },
        {
          text: "Perfil De Usuario",
          disabled: true,
          href: "#/usuarios/detalle",
        },
      ]
    };
  },
  computed:{
    getTypeProfile:function(){
      try {
        return this.$store.state.profileName
      } catch (error) {
        console.log(this.$store.state.profileName)
        return 'Owner'
      }
      
    }
  },
  methods: {
    async disableProfile(){
      this.userInfo.active = !this.user.active
      const {data} = await this.$apollo.mutate({
        mutation: DISABLE_PROFILE,
        variables:{userData:this.userInfo}
      })
      this.user.active = data.updateUser.user.active
      this.activeText = this.user.active?'Deshabilitar':'Habilitar'
    },
    async deleteProfile(){
      let result = await this.$swal({
        title: '¿Estas seguro?',
        text: "No podras revertir esta accion (te recomendamos deshabilitar el perfil de no estar seguro)",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#F57C00',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminalo',
        cancelButtonText:'Cancelar'
      })
      if(result.isConfirmed){
          try {
            await this.$apollo.mutate({  
            mutation: DELETE_USER,
            variables:{id:parseInt(this.idUser)}
            })
            this.$router.go(-1)
          } catch (error) {
            await this.$swal({
              title: 'Algo salio mal',
              text: 'Intentalo de nuevo mas tarde',
              icon: 'error'
            })
          }
      }
    }
  },
  async mounted() {
    this.idUser = this.$route.params.id;
    const data1 = await this.$apollo.query({
      query: GET_USER_INFO,
      variables: { id: this.idUser },
    });
    this.user = data1.data.user;
    if (this.user==undefined){
      this.$router.go(-1)
    }
    this.userInfo.id = this.idUser
    this.userInfo.active = this.user.active
    this.activeText = this.user.active?'Deshabilitar':'Habilitar'
    //Json para datos principales
    this.firstInfo.perfil = this.user.profileType.name;
    this.firstInfo.identidad = this.user.dni;
    this.firstInfo.edad = this.user.age;
    this.firstInfo.email = this.user.email;
    this.firstInfo.celular = this.user.principalCellphone;
    this.firstInfo.celular2 = this.user.auxiliarCellphone;
    //Json para datos de direccion
    this.addressInfo.departamento = this.user.address.department;
    this.addressInfo.ciudad = this.user.address.city;
    this.addressInfo.colonia = this.user.address.suburb;
    this.addressInfo.residencia = this.user.address.residence;
    this.addressInfo.referencia = this.user.address.reference;
    this.biography = this.user.biography
    this.motto = this.user.motto
    try {
      const data2 = await this.$apollo.mutate({
      mutation: USER_N_INFO,
      variables: { id: this.idUser },
      });
      //Json para datos numericos de mascotas
      this.userPetInfo = data2.data.userInfo;
      
    } catch (error) {
      console.error(error.message)
    }
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.rotulo-superficial {
  min-width: 60%;
  min-height: 10%;
  top: -2%;
  left: 10%;
  position: absolute;
  border-radius: 20px;
}
.rotulo-opciones {
  min-width: 20%;
  min-height: 8%;
  top: -6%;
  left: 83%;
  position: absolute;
  border-radius: 20px;
}

.b-radius{
  border-radius: 10px;
}
</style>
