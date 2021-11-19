import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import { apolloClient, apolloProvider } from './graphql/apollo'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import store from '@/store/index'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(PortalVue)
Vue.use(VueSweetalert2)
Vue.use(apolloClient)
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(fas)
new Vue({
  router,
  apolloProvider,
  vuetify,
  store,
  icons: {
    iconfont: 'faSvg',
  },
  render: h => h(App)
}).$mount('#app')
