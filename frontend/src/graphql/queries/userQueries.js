import gpl from 'graphql-tag'

export const GET_ALL_USERS_QUERY = gpl`
    query {
        allUsers{
            allUsers {
                email
                password
            }
        }
    }`