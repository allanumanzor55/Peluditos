<template>
  <div class="row">
    <div class="col s6"><img src="../assets/logo.png" class="circulo" /></div>
    <div class="col s6 bajar">
      <div class="row">
        <div class="col s12 m5">
          <div class="card-panel white">
            <div><span class="card-title c">¡Bienvenido!</span></div>
            <br />
            <img src="../assets/logo1.png" class="peque c" />

            <form>
              <div class="input-field">
                <input id="email" type="email" class="validate" />
                <label for="email">Email</label>
              </div>

              <div class="input-field">
                <input id="password" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
              <br />
              <a class="waves-effect yellow darken-4 btn c">Ingresar</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>
export default {
  name: "Login",
  props: {},
  data: function () {
    return {
      usuario: "",
      password: "",
      validado: false,
    };
  },
  methods: {
    login() {},
  },
};
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --text-align: center;
    color: #2c3e50;
    weight:100%!important;
    height:100%!important;
    background-color:#fff3e0;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .circulo{
    clip-path: circle(75% at 0 48%);
    background-color:#ff9100;
    weight:20%;
    height:700px;
    margin-right: 70%;
    display: inline-block;
  }
  .centro{
    margin-left:15%!important;
  }

  .bajar{
  padding-top:8%!important;
  }
  .card-panel{
    width:150%!important;
  }
  .peque{
    width:100px;
    height:100px;
  }
  .c{
    margin-left:35%!important;
  }
  span{
  font-size:20px!important;
  }
</style>  