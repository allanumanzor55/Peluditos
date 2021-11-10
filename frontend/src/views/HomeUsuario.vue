<template>
    <div>
        <div>
          <NavbarHome/>
        </div>
        
        <div class="im"> 
      
      <b-container>
        
        <b-row>
          <b-col class="wrapper">
            <div>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>
              </b-card>
            </div>
            <div>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>
              </b-card>
            </div>
            <div>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>
              </b-card>
            </div>
        </b-col>
        </b-row>
      </b-container>
      
      <b-container class="bv-example-row">
  <b-row>
    <b-col><img src="../assets/fondohomeuser.jpg" alt="" class="img"></b-col>
    
  </b-row>
</b-container>


        </div>
    </div>
</template>



<script>
import NavbarHome from '@/components/NavbarHome.vue'

export default {
  name: 'navbahome',
  components: {
    NavbarHome
  }
}
</script>

<style scoped>
.img{
  height: 100px;
  width: 100px;
  margin-left: 100%;
  margin-top: 5%;
}
.im{
    height: 100%;
    width: 100%!important;
    display: inline-block;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 20%;
}
</style>