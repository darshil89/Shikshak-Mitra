import { getServerSession } from "next-auth/next";
import { prisma } from "../prisma/index";
import { authOptions } from "@/app/libs/auth";

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