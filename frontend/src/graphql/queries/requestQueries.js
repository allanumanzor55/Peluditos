import gql from 'graphql-tag'

export const SEND_REQUEST = gql`
    query($senderId:Int!){
        allUserRequest(senderId:$senderId){
            receiver{
                firstName
                lastName
            },
            sender{
                id
            },
            pet{
                name
                id
            }
            date
            state
            description
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

export const CONFIRM_SENDED_REQUEST = gql`
    query($senderId:Int!,$petId:Int!){
        request(senderId:$senderId,petId:$petId){
            sender{
            id
            }
        }
    }
`

export const CANCEL_REQUEST = gql`
    mutation($senderId:Int!,$petId:Int!){
        cancelRequest(idSender:$senderId,idPet:$petId){
            verified
            msg
        }
    }
`