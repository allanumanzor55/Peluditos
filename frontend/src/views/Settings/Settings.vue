<template>
  <div id="configuracion" class="container">
    <img src="@/assets/Logo 1-4.png" id="logo">
    <h1 id="titulo">Configuración</h1>

    <div id="nav" class="col">
      <i class="fas fa-paw col"></i>
      <router-link to="configuracion/perfil">Perfil</router-link> 
      <i class="fas fa-paw col"></i>
      <router-link to="configuracion/vacunas">Vacunas</router-link> 
      <i class="fas fa-paw col"></i>
      <router-link to="configuracion/razas">Razas</router-link> 
      <i class="fas fa-paw col"></i>
      <router-link to="configuracion/departamentos">Departamentos</router-link>
      <i class="fas fa-paw col"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  components: {}
}
</script>

<style>
#configuracion {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f0f0f;
  background-color: #FFC581;
}

#nav {
  padding: 10px;
  font-size: 20px;
  background-color: #f0f0f0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: gray;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
}

#nav a {
  padding: 5px;
  font-weight: bold;
  color: #0f0f0f;
}

#nav a.router-link-exact-active {
  color: orangered;
}

#logo {
  width: 100px;
}

#titulo{
  font-size: 50px;
}
</style>

