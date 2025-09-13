"use client"
import { graphqlClient } from "@/clients/api";
import { getQueryClient } from "@/clients/queryClient";
import { User } from "@/gql/graphql";
import { followUserMutation, unfollowUserMutation } from "@/graphql/mutation/user";
import { useCurrentUser } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

const FollowButton = ({ id }: { id: string }) => {
    const { isFetched, user } = useCurrentUser();
    const queryClient = getQueryClient();

    const checkFollower = useMemo(()=>{
        if(!user?.following) return false;

        return user.following.some(el => el?.id === id )
    },[ user?.following, id ]);


    const handleFollow = useCallback(async ()=>{
        await graphqlClient.request(followUserMutation,{ to: id });
        await queryClient.invalidateQueries({queryKey:['current-user']});
    },[ id, queryClient ]);

    const handleUnfollow = useCallback(async ()=>{
        await graphqlClient.request(unfollowUserMutation, { to: id });
        await queryClient.invalidateQueries({queryKey:['current-user']});
    },[ id, queryClient ]);
    
  return (
    isFetched && id !== user?.id && (
        <>
            { checkFollower ? (<button onClick={ handleUnfollow } className="px-3 py-2 border-t-3 border-l-3 border-white text-sm font-medium rounded-full bg-gray-300 text-gray-800 hover:cursor-pointer hover:shadow-xs shadow-gray-50 transition-all duration-400">
                Unfollow
            </button>) : (<button onClick={ handleFollow } className="px-3 py-2 border-t-3 border-l-3 border-white text-sm font-medium rounded-full bg-gray-300 text-gray-800 hover:cursor-pointer hover:shadow-xs shadow-gray-50 transition-all duration-400">
                Follow
            </button>) }
        </>)
  );
}

export default FollowButton;