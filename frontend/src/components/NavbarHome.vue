<template>
    <div>
    <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
        <b-nav-item v-b-toggle.sidebar-1>Home</b-nav-item>
        <b-sidebar id="sidebar-1" title="Mi Perfil" class="tc" shadow alin>
      <div class="px-3 py-2">
          <b-icon icon="camera" font-scale="7.5"></b-icon>
          <h3>Nombre + Apellido</h3>
            <br><br>
            <hr>
            <span>Opciones</span><br>
            <b-list-group>
            <b-list-group-item button>Opcion 1</b-list-group-item>
            <b-list-group-item button>Opcion 2</b-list-group-item>
            <b-list-group-item button>Opcion 3</b-list-group-item>
            </b-list-group>
      </div>
    </b-sidebar>
        </b-navbar-nav>

        
    </b-navbar>
    </div>
</template>

<style scoped>
.b-list-group-item{
    padding-top: 30%!important;
}

.tc{
    text-align: center!important;;
}
</style>