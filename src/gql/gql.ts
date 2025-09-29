/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "#graphql\n    mutation CreateTweet($payload: CreateTweetData!) {\n        createTweet(payload: $payload) {\n            id\n        }\n    }\n": typeof types.CreateTweetDocument,
    "#graphql\n    mutation FollowUser($to: ID!) {\n        followUser(to: $to)\n    }    \n": typeof types.FollowUserDocument,
    "#graphql\n    mutation UnfollowUser($to: ID!) {\n        unfollowUser(to: $to)\n    }\n": typeof types.UnfollowUserDocument,
    "#graphql\n    query GetAllTweetsQuery{\n        getAllTweets{\n            id\n            content\n            imageURL\n            videoURL\n            updatedAt\n            author{\n                id\n                firstname\n                lastname\n                email\n                profileImageURL\n            }\n        }\n    }\n": typeof types.GetAllTweetsQueryDocument,
    "#graphql\n    query GetSignedUrlForTweets($imageType: String!){\n        getSignedUrlForTweet(imageType:$imageType)\n    }\n": typeof types.GetSignedUrlForTweetsDocument,
    "#graphql\n    query verifyUserGoogleToken($token:String!){\n        verifyGoogleToken(token: $token)\n    }\n": typeof types.VerifyUserGoogleTokenDocument,
    "#graphql\n    query Query{\n        getCurrentUser{\n            id,\n            email,\n            profileImageURL,\n            firstname,\n            lastname,\n            recommendedUsers {\n                id,\n                firstname,\n                lastname,\n                email,\n                profileImageURL\n            },\n            follower{\n                id\n            },\n            following{\n                id\n            },\n            tweets{\n                id\n                content\n                imageURL\n                videoURL\n                updatedAt\n            }\n        }\n    }\n": typeof types.QueryDocument,
    "#graphql\n    query GetUserById($id: ID!){\n        getUserById(id: $id){\n            id,\n            firstname,\n            lastname,\n            email,\n            profileImageURL,\n            follower{\n                id\n                email\n            },\n            following{\n                id\n                email\n            },\n            tweets{\n                id,\n                content,\n                updatedAt,\n                imageURL,\n                videoURL\n            }\n        }\n    }\n": typeof types.GetUserByIdDocument,
};
const documents: Documents = {
    "#graphql\n    mutation CreateTweet($payload: CreateTweetData!) {\n        createTweet(payload: $payload) {\n            id\n        }\n    }\n": types.CreateTweetDocument,
    "#graphql\n    mutation FollowUser($to: ID!) {\n        followUser(to: $to)\n    }    \n": types.FollowUserDocument,
    "#graphql\n    mutation UnfollowUser($to: ID!) {\n        unfollowUser(to: $to)\n    }\n": types.UnfollowUserDocument,
    "#graphql\n    query GetAllTweetsQuery{\n        getAllTweets{\n            id\n            content\n            imageURL\n            videoURL\n            updatedAt\n            author{\n                id\n                firstname\n                lastname\n                email\n                profileImageURL\n            }\n        }\n    }\n": types.GetAllTweetsQueryDocument,
    "#graphql\n    query GetSignedUrlForTweets($imageType: String!){\n        getSignedUrlForTweet(imageType:$imageType)\n    }\n": types.GetSignedUrlForTweetsDocument,
    "#graphql\n    query verifyUserGoogleToken($token:String!){\n        verifyGoogleToken(token: $token)\n    }\n": types.VerifyUserGoogleTokenDocument,
    "#graphql\n    query Query{\n        getCurrentUser{\n            id,\n            email,\n            profileImageURL,\n            firstname,\n            lastname,\n            recommendedUsers {\n                id,\n                firstname,\n                lastname,\n                email,\n                profileImageURL\n            },\n            follower{\n                id\n            },\n            following{\n                id\n            },\n            tweets{\n                id\n                content\n                imageURL\n                videoURL\n                updatedAt\n            }\n        }\n    }\n": types.QueryDocument,
    "#graphql\n    query GetUserById($id: ID!){\n        getUserById(id: $id){\n            id,\n            firstname,\n            lastname,\n            email,\n            profileImageURL,\n            follower{\n                id\n                email\n            },\n            following{\n                id\n                email\n            },\n            tweets{\n                id,\n                content,\n                updatedAt,\n                imageURL,\n                videoURL\n            }\n        }\n    }\n": types.GetUserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation CreateTweet($payload: CreateTweetData!) {\n        createTweet(payload: $payload) {\n            id\n        }\n    }\n"): (typeof documents)["#graphql\n    mutation CreateTweet($payload: CreateTweetData!) {\n        createTweet(payload: $payload) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation FollowUser($to: ID!) {\n        followUser(to: $to)\n    }    \n"): (typeof documents)["#graphql\n    mutation FollowUser($to: ID!) {\n        followUser(to: $to)\n    }    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation UnfollowUser($to: ID!) {\n        unfollowUser(to: $to)\n    }\n"): (typeof documents)["#graphql\n    mutation UnfollowUser($to: ID!) {\n        unfollowUser(to: $to)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query GetAllTweetsQuery{\n        getAllTweets{\n            id\n            content\n            imageURL\n            videoURL\n            updatedAt\n            author{\n                id\n                firstname\n                lastname\n                email\n                profileImageURL\n            }\n        }\n    }\n"): (typeof documents)["#graphql\n    query GetAllTweetsQuery{\n        getAllTweets{\n            id\n            content\n            imageURL\n            videoURL\n            updatedAt\n            author{\n                id\n                firstname\n                lastname\n                email\n                profileImageURL\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query GetSignedUrlForTweets($imageType: String!){\n        getSignedUrlForTweet(imageType:$imageType)\n    }\n"): (typeof documents)["#graphql\n    query GetSignedUrlForTweets($imageType: String!){\n        getSignedUrlForTweet(imageType:$imageType)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query verifyUserGoogleToken($token:String!){\n        verifyGoogleToken(token: $token)\n    }\n"): (typeof documents)["#graphql\n    query verifyUserGoogleToken($token:String!){\n        verifyGoogleToken(token: $token)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query Query{\n        getCurrentUser{\n            id,\n            email,\n            profileImageURL,\n            firstname,\n            lastname,\n            recommendedUsers {\n                id,\n                firstname,\n                lastname,\n                email,\n                profileImageURL\n            },\n            follower{\n                id\n            },\n            following{\n                id\n            },\n            tweets{\n                id\n                content\n                imageURL\n                videoURL\n                updatedAt\n            }\n        }\n    }\n"): (typeof documents)["#graphql\n    query Query{\n        getCurrentUser{\n            id,\n            email,\n            profileImageURL,\n            firstname,\n            lastname,\n            recommendedUsers {\n                id,\n                firstname,\n                lastname,\n                email,\n                profileImageURL\n            },\n            follower{\n                id\n            },\n            following{\n                id\n            },\n            tweets{\n                id\n                content\n                imageURL\n                videoURL\n                updatedAt\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query GetUserById($id: ID!){\n        getUserById(id: $id){\n            id,\n            firstname,\n            lastname,\n            email,\n            profileImageURL,\n            follower{\n                id\n                email\n            },\n            following{\n                id\n                email\n            },\n            tweets{\n                id,\n                content,\n                updatedAt,\n                imageURL,\n                videoURL\n            }\n        }\n    }\n"): (typeof documents)["#graphql\n    query GetUserById($id: ID!){\n        getUserById(id: $id){\n            id,\n            firstname,\n            lastname,\n            email,\n            profileImageURL,\n            follower{\n                id\n                email\n            },\n            following{\n                id\n                email\n            },\n            tweets{\n                id,\n                content,\n                updatedAt,\n                imageURL,\n                videoURL\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;