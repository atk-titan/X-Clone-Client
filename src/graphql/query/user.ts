import { graphql } from '../../gql';
import { Tweet } from '@/gql/graphql';

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
            profileImageURL,
            firstname,
            lastname,
            tweets{
                id
                content
                imageURL
                videoURL
                updatedAt
            }
        }
    }
`)