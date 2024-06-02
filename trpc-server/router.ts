// trpc-server/router.ts

import { router, publicProcedure, protectedProcedure, createCallerFactory } from "./index";
import { z } from "zod";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        text: opts.input.text,
      };
    }),
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation((opts) => {
      return {
        name : opts.input.name
      };
    }),

    darshil: protectedProcedure
    .query(() => {
     return {
        text: 'This is a secret message!'
     }
    }),
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);

