<template>
  <div class="home">
    <ul>
      <li v-for="person in users" :key="person.idCliente">
        {{person.firstName}} - {{person.lastName}}
      </li>
    </ul>
  </div>
</template>

<script>
import {GET_ALL_USERS_QUERY} from '@/graphql/queries/userQueries'
export default {
  name: "Home",
  data(){
    return{
      users:[]
    }
  },
  async mounted(){
      const {data} = await this.$apollo.query({query: GET_ALL_USERS_QUERY})
      this.users = data.allUsers
  }
  
};
</script>
