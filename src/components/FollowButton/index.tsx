"use client";
import { graphqlClient } from "@/clients/api";
import { getQueryClient } from "@/clients/queryClient";
import { User } from "@/gql/graphql";
import {
  followUserMutation,
  unfollowUserMutation,
} from "@/graphql/mutation/user";
import { useCurrentUser } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

const FollowButton = ({ id }: { id: string }) => {
  const { isFetched, user } = useCurrentUser();
  const queryClient = getQueryClient();

  const checkFollower = useMemo(() => {
    if (!user?.following) return false;

    return user.following.some((el) => el?.id === id);
  }, [user?.following, id]);

  const handleFollow = useCallback(async () => {
    await graphqlClient.request(followUserMutation, { to: id });
    await queryClient.invalidateQueries({ queryKey: ["current-user"] });
  }, [id, queryClient]);

  const handleUnfollow = useCallback(async () => {
    await graphqlClient.request(unfollowUserMutation, { to: id });
    await queryClient.invalidateQueries({ queryKey: ["current-user"] });
  }, [id, queryClient]);

  return (
    isFetched &&
    id !== user?.id && (
      <>
        {checkFollower ? (
          <button
            onClick={handleUnfollow}
            className="rounded-full border-t-3 border-l-3 border-white bg-gray-200 px-3 py-2 text-sm font-bold tracking-wide text-gray-800 shadow-gray-50 transition-all duration-400 hover:cursor-pointer hover:shadow-xs"
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={handleFollow}
            className="rounded-full border-t-3 border-l-3 border-white bg-gray-200 px-3 py-2 text-sm font-bold tracking-wide text-gray-800 shadow-gray-50 transition-all duration-400 hover:cursor-pointer hover:shadow-xs"
          >
            Follow
          </button>
        )}
      </>
    )
  );
};

export default FollowButton;
