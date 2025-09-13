"use client"
import { graphqlClient } from "@/clients/api";
import { getQueryClient } from "@/clients/queryClient";
import { CreateTweetData } from "@/gql/graphql";
import { createTweetMutation } from "@/graphql/mutation/tweet";
import { getAllTweetsQuery } from "@/graphql/query/tweet";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useCreateTweet = () =>{
    const router = useRouter();
    const queryClient = getQueryClient();

    const mutation = useMutation({
        mutationFn : async ( payload:CreateTweetData ) => {
            // console.log(payload);
            await graphqlClient.request(createTweetMutation,{ payload })},
        onMutate : () => toast.loading('Creating Tweet...', { id: 'create-tweet' }),
        onSuccess : async () => {
            await queryClient.invalidateQueries({queryKey:["all-Tweets"]});
            router.refresh();
            toast.success("Tweet Posted",{ id: 'create-tweet' });
            console.log("entered");
        },
    });

    return { mutation };
}

export const useTweet = () =>{

    const query = useQuery({
        queryKey: ["all-Tweets"],
        queryFn: ()=> graphqlClient.request(getAllTweetsQuery)
    });

    return { ...query, tweets: query.data?.getAllTweets };
}