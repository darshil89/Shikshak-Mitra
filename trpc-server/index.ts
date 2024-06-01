// trpc-server/index.ts

import { initTRPC } from "@trpc/server";
import { createContext } from "./context";
import superjson from 'superjson';


const t = initTRPC.context<typeof createContext>().create({
    transformer: superjson,
});

export const createCallerFactory = t.createCallerFactory;
export const router = t.router;
export const publicProcedure = t.procedure;
