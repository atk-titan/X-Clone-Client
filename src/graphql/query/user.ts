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
            follower{
                id
            },
            following{
                id
            },
            tweets{
                id
                content
                imageURL
                videoURL
                updatedAt
            }
        }
    }
`);

export const getUserByIdQuery = graphql(`#graphql
    query GetUserById($id: ID!){
        getUserById(id: $id){
            id,
            firstname,
            lastname,
            email,
            profileImageURL,
            follower{
                id
                email
            },
            following{
                id
                email
            },
            tweets{
                id,
                content,
                updatedAt,
                imageURL,
                videoURL
            }
        }
    }
`)