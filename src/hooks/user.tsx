"use client"

import { graphqlClient } from '@/clients/api';
import { useQuery } from '@tanstack/react-query';
import { getCurrentUserQuery } from '@/graphql/query/user';
import { useMutation } from '@tanstack/react-query';

export const useCurrentUser = () => {
    const query = useQuery({
        queryKey : ['current-user'],
        queryFn : () => {
            return graphqlClient.request(getCurrentUserQuery);
        }
    });
    console.log(query.data);
    return { ...query , user : query.data?.getCurrentUser };
}