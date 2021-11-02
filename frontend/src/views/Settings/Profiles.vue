<template>
  <div class="profiles">
    <MyNavbar></MyNavbar>
    <div class="container">
      <form class="col s6">
        <div class="row">
          <div class="input-field col s12">
            <input id="profileName" type="text" class="validate">
            <label for="profileName">Nombre</label>
          </div>
          <div class="input-field col s12">
            <textarea id="descriptionProfile" class="materialize-textarea"></textarea>
            <label for="descriptionProfile">Descripion</label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MyNavbar from '@/components/navbar.vue'

export default {
  name: 'Profiles',
  components:{
    MyNavbar
  }
}
</script>
