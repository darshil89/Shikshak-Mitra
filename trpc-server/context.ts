import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/libs/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTRPCContext = async (opts: { headers: Headers }) => {
  const session = await getServerSession(authOptions);

  console.log("from trpc (context)", session);

  return {
    prisma,
    session,
    ...opts,
  };
};

export const createTRPCServer = async () => {
  const session = await getServerSession(authOptions);
  console.log("from trpc (context) server ", session);

  return {
    prisma,
    session,
  };
};
