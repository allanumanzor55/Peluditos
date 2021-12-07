import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import {AUTHENTICATE_USER} from '@/graphql/queries/userQueries'
import {GET_OWNER_PETS,FAVORITE_PETS} from '@/graphql/queries/petQueries'

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
    verify:false,
    restorePassword:false,
    myPets:[],
    myFavoritesPets:[],
    updateCentinel:false,
  },
  mutations: {
    activateUpdate(state){
      state.updateCentinel=true
    },
    desactivateUpdate(state){
      state.updateCentinel=false
    },
    setData(state){
      if(Cookies.get('token')!==undefined){
        state.token = Cookies.get('token')
        state.firstName = Cookies.get('firstName')
        state.lastName = Cookies.get('lastName')
        state.id = Cookies.get('id')
        state.verifiedEmail = Cookies.get('verifiedEmail')
        state.profileName = Cookies.get('profileName')
      }else if(Cookies.get('token')===undefined){
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
    },
    setRestorePassword(state){
      state.restorePassword=!state.restorePassword
    }
,
    noSetVerify(state){
      state.verify=false
    },
  },
  actions: {
    async verifyLogin(context){
      try {
        const {data} = await apolloClient.mutate(
          {mutation:AUTHENTICATE_USER,
          variables:{token:context.state.token,id:context.state.id}})
        if(data.verifyLogin.verified){
          context.commit('setVerify')
        }else{
          context.commit('noSetVerify')
        }
      } catch (error) {
        console.error(error.message)
      }
    },
    async updatePets(context){
      try {
        context.state.myPets = (await apolloClient.query({
          query: GET_OWNER_PETS,
          variables: { ownerId: context.state.id },
        })).data.ownerPets
      } catch (error) {
        console.error(error.message)
      }
    },
    async updateFavoritesPets(context){
      try {
        context.state.myFavoritesPets = (await apolloClient.query({
          query: FAVORITE_PETS,
          variables: { id: context.state.id },
        })).data.favoriteOwnerPets
      } catch (error) {
        console.error(error.message)
      }
    }
  }
})
