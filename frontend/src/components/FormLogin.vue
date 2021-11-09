<template>
  <div class="cuad to">
    <h1>¡Bienvenido!</h1>
    <span>Ingresa tus credenciales</span>
    <form>
      <br />
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="form.email"
          :state="emailState()"
          placeholder="example@example.com"
        />
        <label for="floatingInput">Email</label>
        <b-form-invalid-feedback id="input-live-feedback">
          Ingrese una direccion de correo valida
        </b-form-invalid-feedback>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="form.password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <b-link href="#foo" class="txtr">¿Olvidaste tu contraseña?</b-link
      ><br /><br />
      <button type="button" class="btn colorbtn btn-lg"  @click="login_user()" >Ingresar</button>
    </form>
    <div>
      <br /><br />
      <span class="txt13">¿Aun no tienes una cuenta?</span> <br />
      <button type="button" class="btn colorbtn btn-sm">Registrate</button>
    </div>
  </div>
</template>

<script>
//import {mapState} from 'vuex'
import {LOGIN_USER} from '@/graphql/queries/userQueries'
  export default {
    data() {
      return {
        emailRegex : /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        form: {
          email: '',
          password: ''
        },
        show: true
      }
    },
    computed:{
        emailState(){
          return this.emailRegex.test(this.form.email)?true:false
        }

    },
    methods:{
      async login_user(){
        const {data} = await this.$apollo.mutate({
            mutation: LOGIN_USER,
            variables:{email:this.form.email,password:this.form.password}
          })
          this.login = data.login.verified
          if(this.login){
            this.$swal({
              icon:'success',
              title:'bienvenido'
            }).then(()=>{
              this.$router.push('/')
            })
          }else{
            this.$swal({
              icon:'error',
              title:'credenciales incorrectas'
            })
          }
        },
        onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.celular = ''
          this.form.password = ''

          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    }
</script>

<style scoped>
.cuad {
  width: 30%;
  height: 67%;
  background-color: #ffc581;
  padding: 20px;
  border-radius: 60px;
}

.to {
  margin-left: 55%;
  margin-top: 7%;
}

.txtr {
  margin-left: 55%;
  color: rgb(103, 103, 104);
  font-size: 13px;
}
.txtl {
  text-align: left;
}

.quince {
  font-size: 15px;
}
.txt13 {
  font-size: 13px;
}

.tit {
  font-size: 50px;
}

.colorbtn {
  background: #ff9922 !important;
}
.colorbtn:hover {
  background-color: #f8a94e !important;
}
</style>
