import { QueryClient } from "@tanstack/react-query";

function makeQueryClient () {
    const queryClient = new QueryClient({
        defaultOptions:{
            queries:{
                staleTime: 60*1000*5,
            }
        }
    });

    return queryClient;
}

let browserQueryClient: QueryClient | undefined = undefined;

const isServer = typeof window === "undefined";

export function getQueryClient () {
    if(isServer){
        return makeQueryClient();
    } else {
        if(!browserQueryClient) browserQueryClient = makeQueryClient();
        return browserQueryClient;
    }
}