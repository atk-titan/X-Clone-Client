import { graphql } from '../../gql';

export const verifyUserGoogleTokenQuery = graphql(`#graphql
    query verifyUserGoogleToken($token:String!){
        verifyGoogleToken(token: $token)
    }
`)

export const getCurrentUserQuery = graphql(`#graphql
    query Query{
        getCurrentUser{
            id,
            email,
        }
    }
`)