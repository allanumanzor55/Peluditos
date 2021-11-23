import { LOGIN_USER } from '@/graphql/queries/userQueries'
import Cookies from "js-cookie";
export default {
    async login_user(email, password) {
        const { data } = await this.$apollo.mutate({
            mutation: LOGIN_USER,
            variables: { email: email, password: password }
        })
        const login = data.login
        if (login.verified) {
            this.$swal({
                icon: 'success',
                title: 'bienvenido'
            }).then(() => {
                this.$router.push('/inicio')
                Cookies.set("token", login.token);
            })
        } else {
            if (!login.active) {
                this.$swal({
                    icon: 'info',
                    title: 'Su perfil ha sido desactivado, espere hasta que un administrador lo desbloquee'
                })
            } else {
                this.$swal({
                    icon: 'error',
                    title: 'credenciales incorrectas'
                })
            }
        }
    },
    async register(registerInfo) {
        const { data } = await this.$apollo.mutate({
            mutation: REGISTER_USER,
            variables: { userData: registerInfo }
        })
        if (data.register.register) {
            this.$swal({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'Bienvenido a Peluditos',
            }).then(() => {
                this.$router.push('/inicio')
            })
        } else {
            this.$swal({
                icon: 'error',
                title: 'Algo salio mal',
                text: 'Intentalo de nuevo'
            })
        }
    }
}