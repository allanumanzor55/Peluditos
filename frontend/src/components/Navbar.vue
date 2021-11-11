<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="nc px-0" fixed="top">
    <b-container fluid>
        <b-row>
            <b-col cols="2">
                <b-navbar-brand href="#"><img alt="logo" class="imgn" src="../assets/letras.png"></b-navbar-brand>
            </b-col>

            <b-col cols="10">
                    <div class="mgl">
                        <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav align="inicio">
                        <b-navbar-nav>
                        </b-navbar-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-5 pl-4 mr-0 pr-0 mt-2">
                            <b-nav-form>
                            
                            </b-nav-form>
                            <b-nav-item :to="{name: 'Login'}">Ingresar</b-nav-item>
                            <b-nav-item :to="{name: 'Registro'}">Registrarse</b-nav-item>
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