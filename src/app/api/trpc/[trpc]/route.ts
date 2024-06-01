// app/api/trpc/[trpc]/route.ts
 

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../../../../../trpc-server/router';
import { createContext } from '../../../../../trpc-server/context';
 
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: async () => await createContext(),
  });
 
export { handler as GET, handler as POST };