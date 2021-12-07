import gql from 'graphql-tag'
import {USER_FRAGMENT_FIELDS, ADDRESS_FRAGMENT_FIELDS,PROFILE_FRAGMENTS_FIELDS, USER_UPDATE_FRAGMENT_FIELDS} from './fragments';
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
    ${USER_FRAGMENT_FIELDS}
    mutation ($email:String!,$password:String!){
        login(email: $email, password: $password){
            verified
            user{
                verified
                active
                token
                profileType{
                    name
                }
                ...UserFields
            }
        }
    }`

export const REGISTER_USER = gql`
    ${USER_FRAGMENT_FIELDS}
    mutation ($userData:UserInput!){
        register(userData:$userData){
            register
            user{
                verified
                active
                token
                profileType{
                    name
                }
                ...UserFields
            }
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

export const AUTHENTICATE_USER = gql`
    mutation($token:String,$id:ID!){
        verifyLogin(token:$token,id:$id){
            verified
        }
    }
`

export const LOGOUT = gql`
    mutation($token:String!){
        logout(token:$token){
            verified
        }
    }
`

export const RESTORE_PASSWORD = gql`
    mutation($email:String!,$dni:String!,$answer:String!){
        restorePassword(email:$email,dni:$dni,answer:$answer){
            verified
            msg
        }
    }
`
export const GET_USER_INFO_UPDATE = gql`
    ${USER_UPDATE_FRAGMENT_FIELDS}
    query($id: Int!){
        user(id:$id){
            ...UserUpdateFields
            address{
                department
                city
                suburb
                street
                residence
                reference
            }
        }
    }
`
export const USER_UPDATE = gql`
    mutation ($userData:UserInput!){
        updateUser(userData:$userData){
                firstName
                lastName
                dni
                age
                principalCellphone
                auxiliarCellphone
                address{
                    department
                    city
                    suburb
                    street
                    residence
                    reference
                }
        }
    }
    
`
export const USER_UPDATE_SEGURIDAD = gql`
mutation ($userData:UserInput!){
    updateUser(userData:$userData){
        email
        password
    }
}
`