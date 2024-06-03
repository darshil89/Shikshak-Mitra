import { headers } from "next/headers";
import { cache } from "react";
import { createCaller } from "../trpc-server/router";
import { createTRPCContext } from "../trpc-server/context";

const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    headers: heads,
  });
});

async function create() {
  const context = await createContext();
  return createCaller(context);
}

 const d = create();

 export const api = d.then()