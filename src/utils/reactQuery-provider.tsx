// lib/reactQuery-provider.tsx
 
'use client';
 
import React, { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import { trpc } from '../../trpc-client/client';
 
const url = 'http://localhost:3000/api/trpc';
 
export const TrpcProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
 
  const trpcClient = trpc.createClient({
    transformer: superjson,
    links: [
      httpBatchLink({
        url: url,
      }),
    ],
  });
 
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};