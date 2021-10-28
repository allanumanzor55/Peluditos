
<template>
  <div id="app">

    <router-view/>
  </div>
</template>

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