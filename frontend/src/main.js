import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import { apolloProvider } from './graphql/apollo'
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import PortalVue from 'portal-vue'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(PortalVue)
Vue.use(VueAxios,axios)
Vue.use(VueSweetalert2)
// import 'materialize-css/dist/css/materialize.css'
// import 'materialize-css/dist/js/materialize.js'


new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
