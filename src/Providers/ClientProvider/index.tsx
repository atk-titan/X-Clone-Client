"use client";

import { getQueryClient } from '@/clients/queryClient';
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
    
    const queryClient = getQueryClient();
  
    return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
    </QueryClientProvider>
  );
}