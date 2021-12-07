import gql from 'graphql-tag'

export const SEND_REQUEST = gql`
    query($senderId:Int!){
        allUserRequest(senderId:$senderId){
            receiver{
                firstName
                lastName
            }
            date
            state
        }
    }
`

export const RECEIVE_REQUEST = gql`
    query($receiverId:Int!){
        allUserRequest(receiverId:$receiverId){
            sender{
                id
                firstName
                lastName
            },
            pet{
                name
                id
            }
            date
            state
        }
    }`

export const UPDATE_REQUEST = gql`
    mutation($receiverId:Int!,$senderId:Int!,$petId:Int!,$state:String!){
        updateReceiveRequest(receiver:$receiverId,sender:$senderId,pet:$petId,state:$state){
            verified
            msg
        }
    }
`