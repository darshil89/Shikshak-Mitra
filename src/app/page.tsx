"use client";

import { trpc } from "../../trpc-client/client";

export default function Home() {
  const hi = trpc.hello.useQuery({ text: "Darshil Mahraur" });
  if(hi.isLoading) return <div>Loading...</div>
  if(hi.error) return <div>Error: {hi.error.message}</div>
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get your life easy&nbsp;
          <code className="font-mono font-bold">with our platform</code>
        </p>
      </div>
      <div className="mt-5">Hello {hi.data?.text}</div>
    </main>
  );
}
