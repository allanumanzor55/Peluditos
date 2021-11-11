import gql from 'graphql-tag'

export const GET_ALL_USERS_QUERY = gql`
    query {
        allUsers {
            firstName
            lastName
        }
    }`

export const GET_USER_INFO = gql`
    query($id: Int!){
        user(id:$id){
            firstName
            lastName
            email
            password
            verified
        }
    }
`

export const LOGIN_USER = gql`
    mutation ($email:String!,$password:String!){
        login(email: $email, password: $password){
            verified
        }
    }`

export const CREATE_USER = gql`
    mutation ($userData:UserInput!){
        createUser(userData:$userData){
            user{
                firstName
                lastName
            }
        }
    }
`