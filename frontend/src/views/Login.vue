<template>
	<div class="login">
		<div class="row">
			<div class="col s6"><img src="../assets/logo.png" class="circulo" /></div>
			<div class="col s6 bajar">
				<div class="row">
					<div class="col s12 m5">
						<div class="card-panel white">
							<div><span class="card-title c">¡Bienvenido!</span></div>
							<br />
							<img src="../assets/logo1.png" class="peque c" />
							<form>
								<div class="input-field">
									<input id="email" type="email" class="validate" v-model="email" />
									<label for="email">Email</label>
								</div>

								<div class="input-field">
									<input id="password" type="password" class="validate" v-model="password" />
									<label for="password">Password</label>
								</div>
								<br />
								<a class="waves-effect yellow darken-4 btn c" @click="login_user()">Ingresar</a>
							</form>
							
						</div>
					</div>
				</div> 
			</div>
		</div>
	</div>
</template>

<script>
import {LOGIN_USER} from '@/graphql/queries/userQueries'
export default {
	name: "Login",
	components: {},
	data () {
        return {
			id:0,
            email:'',
			login: false,
			password:''
        }
    },
	methods:{
		async login_user(){
			const {data} = await this.$apollo.mutate({
				mutation: LOGIN_USER,
				variables:{
					email:this.email,
					password:this.password
				}
			})
			this.login = data.login.verified
			if(this.login){
				this.$router.push('/')
			}
		}
	}
	// async mounted () {
    //     this.loading = true
    //     this.users = await this.$apollo.query({ query: GET_ALL_USERS_QUERY })
    //     this.loading = false
    // }
};
</script>

<style scoped>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		--text-align: center;
		color: #2c3e50;
		weight: 100% !important;
		height: 100% !important;
		background-color: #fff3e0;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	.circulo {
		clip-path: circle(75% at 0 48%);
		background-color: #ff9100;
		weight: 20%;
		height: 700px;
		margin-right: 70%;
		display: inline-block;
	}
	.centro {
		margin-left: 15% !important;
	}

	.bajar {
		padding-top: 8% !important;
	}
	.card-panel {
		width: 150% !important;
	}
	.peque {
		width: 100px;
		height: 100px;
	}
	.c {
		margin-left: 35% !important;
	}
	span {
		font-size: 20px !important;
	}
</style>
