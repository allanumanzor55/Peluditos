import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import {AUTHENTICATE_USER} from '@/graphql/queries/userQueries'
import { apolloClient } from '../graphql/apollo'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'Allan',
    firstName:'',
    lastName:'',
    id:0,
    verifiedEmail:'',
    profileName:'',
    verify:false
  },
  mutations: {
    setData(state){
      if(Cookies.get('token')!==undefined){
        state.token = Cookies.get('token')
        state.firstName = Cookies.get('firstName')
        state.lastName = Cookies.get('lastName')
        state.id = Cookies.get('id')
        state.verifiedEmail = Cookies.get('verifiedEmail')
        state.profileName = Cookies.get('profileName')
        console.log('1')
      }else if(Cookies.get('token')===undefined){
        console.log('2')
        state.token=''
        state.firstName = ''
        state.lastName = ''
        state.id = 0
        state.verifiedEmail = ''
        state.profileName = ''
      }
    },
    setVerify(state){
      state.verify=true
    }
,
    noSetVerify(state){
      state.verify=false
    }
  },
  actions: {
    async verifyLogin(context){
      const {data} = await apolloClient.mutate(
        {mutation:AUTHENTICATE_USER,
        variables:{token:context.state.token,id:context.state.id}})
      if(data.verifyLogin.verified){
        context.commit('setVerify')
      }else{
        context.commit('noSetVerify')
      }
    }
  },
  modules: {
  }
})
