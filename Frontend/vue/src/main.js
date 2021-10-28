import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios';
import Axios from 'axios';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

Vue.config.productionTip = false
Vue.use(VueAxios, Axios);
Vue.use(Axios, Axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')