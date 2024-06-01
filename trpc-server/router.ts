// trpc-server/router.ts

import { router, publicProcedure } from "./index";
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
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation((opts) => {
      return {
        name: opts.input.name,
        email: opts.input.email,
        password: opts.input.password,
      };
    }),
});

export type AppRouter = typeof appRouter;
