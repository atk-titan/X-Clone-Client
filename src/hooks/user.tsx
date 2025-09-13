"use client"

import { graphqlClient } from '@/clients/api';
import { useQuery } from '@tanstack/react-query';
import { getCurrentUserQuery } from '@/graphql/query/user';

export const useCurrentUser = () => {
    const query = useQuery({
        queryKey : ['current-user'],
        queryFn : async () => {
            return await graphqlClient.request(getCurrentUserQuery);
        }
    });
    // console.log(query.data);
    return { ...query , user : query.data?.getCurrentUser };
}