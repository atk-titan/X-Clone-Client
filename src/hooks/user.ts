import { graphqlClient } from '@/clients/api';
import { useQuery } from './../../node_modules/@tanstack/react-query';
import { getCurrentUserQuery } from '@/graphql/query/user';
import { useMutation } from '@tanstack/react-query';

export const useCurrentUser = () => {
    const query = useQuery({
        queryKey : ['current-user'],
        queryFn : () => {
            return graphqlClient.request(getCurrentUserQuery)
        },
        initialData: {

        }
    });
    console.log(query.data);
    return { ...query , user : query.data?.getCurrentUser };
}