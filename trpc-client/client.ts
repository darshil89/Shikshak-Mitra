// trpc-client/client.ts
 

import { createTRPCReact } from '@trpc/react-query';
import { AppRouter } from '../trpc-server/router';
 
export const trpc = createTRPCReact<AppRouter>({});