import gql from 'graphql-tag'
import {USER_FRAGMENT_FIELDS, ADDRESS_FRAGMENT_FIELDS,PROFILE_FRAGMENTS_FIELDS} from './fragments';
export const GET_ALL_USERS_QUERY = gql`
    ${USER_FRAGMENT_FIELDS}
    query {
        allUsers {
            ...UserFields
        }
    }`

export const GET_USER_INFO = gql`
    ${USER_FRAGMENT_FIELDS}
    ${ADDRESS_FRAGMENT_FIELDS}
    ${PROFILE_FRAGMENTS_FIELDS}
    query($id: Int!){
        user(id:$id){
            ...UserFields
            profileType{
                ...ProfileFields
            }
            age
            dni
            principalCellphone
            auxiliarCellphone
            address{
                ...AddressFields
            }
            password
            verified
            active
        }
    }
`
export const USER_N_INFO = gql`
    mutation($id:Int!){
        userInfo(id:$id){
            requestsSent
            requestsAwait
            adoptedPets
            adoptionPets
        }
    }
`

export const LOGIN_USER = gql`
    mutation ($email:String!,$password:String!){
        login(email: $email, password: $password){
            verified
        }
    }`

export const REGISTER_USER = gql`
    mutation ($userData:UserInput!){
        register(userData:$userData){
            register
        }
    }
`

export const DISABLE_PROFILE = gql`
    mutation($userData:UserInput!){
        updateUser(userData:$userData){
            user{
                active
            }
        }
    }
`

export const DELETE_USER = gql`
    mutation($id:ID!){
        deleteUser(id:$id){
            user{
                firstName
            }
        }
    }
`

export const SEARCH_USER  = gql`
    ${USER_FRAGMENT_FIELDS}
    query($firstName:String!){
        getUsers(firstName:$firstName){
            ...UserFields
        }
    }
`