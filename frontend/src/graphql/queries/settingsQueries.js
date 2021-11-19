import gql from 'graphql-tag'
import {PROFILE_FRAGMENTS_FIELDS} from './fragments'

export const DELETE_VACCINE = gql`
    mutation($id:ID!){
        deleteVaccine(id:$id){
            vaccine{
                id
                name
            }
        }
    }
`

export const DELETE_PET_CATEGORY = gql`
    mutation($id:ID!){
        deletePetCategory(id:$id){
            petCategory{
                id
                name
            }
        }
    }
`

export const DELETE_PROFILE_TYPE = gql`
    mutation($id:ID!){
        deleteProfileType(id:$id){
            profileType{
                id
                name
            }
        }
    }
`

export const DELETE_BREED = gql`
    mutation($id:ID!){
        deleteBreed(id:$id){
            breed{
                id
                name
            }
        }
    }
`

export const UPDATE_VACCINE = gql`
    mutation($id:ID!,$name:String!){
        updateVaccine(id:$id,name:$name){
            vaccine{
                id
                name
            }
        }
    }
`

export const UPDATE_PET_CATEGORY = gql`
    mutation($id:ID!,$name:String!){
        updatePetCategory(id:$id,name:$name){
            petCategory{
                id
                name
            }
        }
    }
`

export const UPDATE_PROFILE_TYPE = gql`
    mutation($id:ID!,$name:String!,$description:String!){
        updateProfileType(id:$id,name:$name,description:$description){
            profileType{
                id
                name
            }
        }
    }
`

export const UPDATE_BREED = gql`
    mutation($id:ID!,$name:String!){
        updateBreed(id:$id,name:$name){
            breed{
                id
                name
            }
        }
    }
`

export const CREATE_VACCINE = gql`
    mutation($name:String!){
        createVaccine(name:$name){
            vaccine{
                id
                name
            }
        }
    }
`

export const CREATE_PET_CATEGORY = gql`
    mutation($name:String!){
        createPetCategory(name:$name){
            petCategory{
                id
                name
            }
        }
    }
`

export const CREATE_PROFILE_TYPE = gql`
    mutation($name:String!,$description:String!){
        createProfileType(name:$name,description:$description){
            profileType{
                id
                name
            }
        }
    }
`

export const CREATE_BREED = gql`
    mutation($name:String!){
        createBreed(name:$name){
            breed{
                id
                name
            }
        }
    }
`

export const GET_ALL_VACCINES = gql`
    query{
        allVaccines{
            id
            name
        }
    }
`

export const GET_ALL_PET_CATEGORY = gql`
    query{
        allPetCategories{
            id
            name
        }
    }
`

export const GET_ALL_PROFILE_TYPE = gql`
    ${PROFILE_FRAGMENTS_FIELDS}
    query{
        allProfileTypes{
            ...ProfileFields
        }
    }
`

export const GET_ALL_BREED = gql`
    query{
        allBreeds{
            id
            name
        }
    }
`


