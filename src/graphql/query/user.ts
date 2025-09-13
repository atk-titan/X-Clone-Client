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
                email
                firstname
                lastname
                profileImageURL
            },
            following{
                id
                email
                firstname
                lastname
                profileImageURL
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
                firstname
                lastname
                profileImageURL
            },
            following{
                id
                email
                firstname
                lastname
                profileImageURL
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