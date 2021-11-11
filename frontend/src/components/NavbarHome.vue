<template>
  <div>
    <b-navbar style="background: #ff9922">
      <b-navbar-nav>
        <b-nav-item v-b-toggle.sidebar-1>
          <b-icon icon="justify"> </b-icon>
        </b-nav-item>
        <b-sidebar id="sidebar-1" backdrop shadow class="mx-0 px-0">
          <template #footer="{ hide }">
            <b-row align-h="end" class="p-3 mx-1">
              <b-link style="color:orange!important;" @click="hide">Cerrar sesion</b-link>
            </b-row>
          </template>
          <b-row align-h="center" class="mt-2">
              <b-icon icon="app" font-scale="7.5"></b-icon>
              <br>
          </b-row>
          <b-row align-h="center" class="mb-5">
            <h3>Usuario</h3>
          </b-row>
          <b-row align-h="center" class="text-center mx-3 px-0">
            <b-nav vertical class="w-100 text-center">
              <b-nav-item class="btn-sidebar" :to="{name:'HomeUsuario'}">Inicio</b-nav-item>
              <b-nav-item class="btn-sidebar" :to="{name:'PerfilUsuario'}">Mi perfil</b-nav-item>
              <b-nav-item class="btn-sidebar" :to="{name:'Mascota'}">Mascotas en adopcion</b-nav-item>
              <b-nav-item class="btn-sidebar" >Solicitudes pendientes</b-nav-item>
            </b-nav>
          </b-row>
        </b-sidebar>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavbarHome",
};
</script>

<style scoped>
.b-list-group-item {
  padding-top: 30% !important;
}

.tc {
  text-align: center !important;
}
::-webkit-scrollbar {
  display: none;
}

.btn-sidebar {
  border-bottom: solid !important;
  border-bottom-width: 0.5px !important;
  border-bottom-color: gray !important;
  background-color: transparent !important;
}

.btn-sidebar:hover {
  background: rgba(128, 128, 128, 0.4) !important;
  color:orangered !important;
}
</style>
