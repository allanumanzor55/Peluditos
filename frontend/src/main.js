import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { apolloProvider } from './graphql/apollo'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios,axios)
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
