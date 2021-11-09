<template>
	<div class="fondo">
        <div class="rec">
            <FormLogin/>
        </div>
        <div class="semi">
            <img alt="logo" class="imglg" src="../assets/logo.png">
        </div>
        
    </div>
</template>
<script>
import FormLogin from '@/components/FormLogin.vue'
////import {LOGIN_USER} from '@/graphql/queries/userQueries'
export default {
	name: "Login",
	components: {FormLogin},
	// data () {
    //     return {
	// 		id:0,
    //         email:'',
	// 		login: false,
	// 		password:''
    //     }
    // },
	// // methods:{
	// // 	async login_user(){
	// // 		const {data} = await this.$apollo.mutate({
	// // 			mutation: LOGIN_USER,
	// // 			variables:{
	// // 				email:this.email,
	// // 				password:this.password
	// // 			}
	// // 		})
	// // 		this.login = data.login.verified
	// // 		if(this.login){
	// // 			this.$router.push('/')
	// // 		}
	// // 	}
	// // }
	// // async mounted () {
    // //     this.loading = true
    // //     this.users = await this.$apollo.query({ query: GET_ALL_USERS_QUERY })
    // //     this.loading = false
    // // }
};
</script>

<style scoped>
.fondo{
   position: absolute;
width: 100%;
height: 100%;
left: 0px;
top: 0px;

background: #FF9922;
border-radius: 0px;
}
.rec{
    position: absolute;
width: 100%;
height: 100%;
left: 0px;
top: 0px;
display: inline-block;
background: #FFAD4D;
border-radius: 0px 0px 512px 0px;
}

.semi{
    position: absolute;
width: 500px;
height: 100%;
left: 0px;
top: 0px;
background: #fff48db2;
border-radius: 0px 350px 350px 0px;
}
.imglg{
    width: 40%;
    height: 28%;
    margin-top: 45%;
    margin-right:10% ;
}
</style>
