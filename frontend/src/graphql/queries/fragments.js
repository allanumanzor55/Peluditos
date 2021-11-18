import gql from 'graphql-tag';

export const USER_FRAGMENT_FIELDS = gql`
    fragment UserFields on UserNode{
        id
        firstName
        lastName
        email
    }
`;

export const ADDRESS_FRAGMENT_FIELDS = gql`
    fragment AddressFields on AddressNode{
        department
        city
        suburb
        street
        residence
        reference
    }
`;

export const PROFILE_FRAGMENTS_FIELDS = gql`
    fragment ProfileFields on ProfileTypeNode{
        id
        profileName
        description
    }
`