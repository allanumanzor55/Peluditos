<template>
  <div class="home">
    <div class="row">
      <div class="col s6"><img src="../assets/logo.png" class="circulo"></div>


      <div class="col s6 bajar">
        <div class="row">
        <div class="col s12 m5">
        <div class="card-panel white">
        <div><span class="card-title c h3">¡Bienvenido!</span></div>
        <br>
        <img src="../assets/logo1.png" class="peque c">
          
        <form>
        
        <div class="input-field">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
          
        <div class="input-field">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>

      </div>
      <br>
        <a class="waves-effect  yellow darken-4 btn c">Ingresar</a>
        </form>
      </div>
    </div>
  </div>
      
      
      </div>
    </div>
    
   
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
