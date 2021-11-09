<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="nc">
    <b-container>
        <b-row>
            <b-col cols="2">
                <b-navbar-brand href="#"><img alt="logo" class="imgn" src="../assets/letras.png"></b-navbar-brand>
            </b-col>

            <b-col cols="10">
                    <div class="mgl">
                        <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav align="inicio">
                        <b-navbar-nav>
                            <b-nav-item :to="{name: 'Mascota'}">Mascotas</b-nav-item>
                            <b-nav-item href="#">Disabled</b-nav-item>
                        </b-navbar-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-form>
                            
                            </b-nav-form>

                        
                            <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <b-icon icon="person-fill"></b-icon>
                            </template>
                            <b-dropdown-item :to="{name: 'Login'}">Iniciar Sesion</b-dropdown-item>
                            <b-dropdown-item :to="{name: 'Registro'}">Registrarse</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-navbar-nav>
                        </b-collapse>
                    </div>
            </b-col>
        </b-row>
       
    </b-container>

  </b-navbar>
  </div>
</template>

<style scoped>
.nc{
  background: #FF9922!important;
}

.imgn{
    width: 90%!important;
    height: 100%!important;

}
.mgl{
    margin-left:80% ;
}
</style>