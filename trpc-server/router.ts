// trpc-server/router.ts

import {
  router,
  publicProcedure,
  protectedProcedure,
  createCallerFactory,
} from "./index";
import { z } from "zod";
import { AdminRouter } from "./routers/admin";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { TeacherRouter } from "./routers/teacher";

const prisma = new PrismaClient();

export const appRouter = router({
  AdminRouter,
  TeacherRouter
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
