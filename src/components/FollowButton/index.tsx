"use client"
import { User } from "@/gql/graphql";
import { useCurrentUser } from "@/hooks/user";
import { useMemo } from "react";

const FollowButton = ({ id, followers }: { id: string, followers: User[] }) => {
    const { isFetched, user } = useCurrentUser();

    const checkFollower = useMemo(()=>{
        if(!followers) return false;

        return ( followers.findIndex(el => el.id === user?.id ) ?? -1 ) >= 0
    },[ user?.id, followers ])
    
  return (
    isFetched && id !== user?.id && (
        <>
            { checkFollower ? (<button className="px-3 py-2 border-t-3 border-l-3 border-white text-sm font-medium rounded-full bg-gray-300 text-gray-800 hover:cursor-pointer hover:shadow-sm shadow-gray-50 transition-all duration-400">
                Follow
            </button>) : (<button className="px-3 py-2 border-t-3 border-l-3 border-white text-sm font-medium rounded-full bg-gray-300 text-gray-800 hover:cursor-pointer hover:shadow-sm shadow-gray-50 transition-all duration-400">
                Unfollow
            </button>) }
        </>)
  );
}

export default FollowButton;