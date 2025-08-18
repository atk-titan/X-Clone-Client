import { graphql } from "../../gql";

export const getAllTweetsQuery = graphql(`#graphql
    query GetAllTweetsQuery{
        getAllTweets{
            id
            content
            imageURL
            videoURL
            updatedAt
            author{
                id
                firstname
                lastname
                email
                profileImageURL
            }
        }
    }
`)

export const getSignedUrlForTweetsQuery = graphql(`#graphql
    query GetSignedUrlForTweets($imageType: String!){
        getSignedUrlForTweet(imageType:$imageType)
    }
`);