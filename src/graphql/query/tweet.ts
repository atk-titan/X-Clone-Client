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
                firstname
                lastname
                email
                profileImageURL
            }
        }
    }
`)