import gql from 'graphql-tag'
import {PET_FRAGMENTS_FIELDS} from './fragments'
export const GET_ALL_PETS = gql`
    ${PET_FRAGMENTS_FIELDS}
    query {
        allPets{
            ...PetFields
            gender
            description
            color
            size
            birthDate
        }
    }`

export const GET_OWNER_PETS = gql`
${PET_FRAGMENTS_FIELDS}
    query($ownerId:Int!){
        ownerPets(ownerId:$ownerId){
            ...PetFields
            gender
            showDetails
            description
            color
            size
            birthDate
        }
    }
`

export const CREATE_PET = gql`
    ${PET_FRAGMENTS_FIELDS}
    mutation($petData:PetInput!){
        createPet(petData:$petData){
            pet{
                ...PetFields
            }
            verified
        }
    }
`
export const DELETE_PET = gql`
    mutation($id:ID!){
        deletePet(id:$id){
            verified
            msg
        }
    }
`
export const GET_PET = gql`
${PET_FRAGMENTS_FIELDS}
    query($id:Int!){         
        pet(id:$id){
            ...PetFields
            owner{
                id
            }
            birthDate
            color
            size
            gender
            isSterilized
            isAdopted
            vaccines{
                id
                name
            }
            description
        }
    }
`
export const GET_PET_ALL_INFO = gql`
${PET_FRAGMENTS_FIELDS}
    query($id:Int!){         
        pet(id:$id){
            ...PetFields
            owner{
                id
                firstName
                lastName
                address{
                    department
                    city
                    suburb

                }
                principalCellphone
            }
            birthDate
            color
            size
            gender
            isSterilized
            isAdopted
            vaccines{
                id
                name
            }
            description
        }
    }
`

export const UPDATE_PET = gql`
    mutation($petData:PetInput!){
        updatePet(petData:$petData){
            verified
        }
    }
`

export const GET_PETS_ADOPT = gql`
    ${PET_FRAGMENTS_FIELDS}
    query{
        allPets{
            ...PetFields
            owner{
                id
            }
            birthDate
            color
            size
            gender
            isSterilized
            isAdopted
            vaccines{
                id
                name
            }
            description
        }
    }
`
export const GET_PETS_ADOPT_MIN = gql`
    ${PET_FRAGMENTS_FIELDS}
    query{
        allPets{
            ...PetFields
            owner{
                id
                address{
                    department
                    city
                }
            }
            gender
        }
    }
`