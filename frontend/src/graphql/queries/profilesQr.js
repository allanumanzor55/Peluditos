import gql from 'graphql-tag'

export const GET_ALL_PROFILES = gql`
    query {
        allProfileTypes{
            id
            name
            description
        }
    }`

export const SAVE_PROFILE = gql`
    mutation ($name:String!,$description:String!){
        createProfileType(profileTypeData:{name:$name,description:$description}){
            profileType{
                name
                description
            }
        }
    }`

export const DELETE_PROFILE = gql`
    mutation ($id:ID!){
        deleteProfileType(id:$id){
            profileType{
                name
            }
        }
    }`