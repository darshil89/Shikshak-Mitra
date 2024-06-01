"use client";

import { trpc } from "../../trpc-client/client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const hi = trpc.hello.useQuery({ text: "From TRPC" });

  const { data, mutate, isSuccess } = trpc.createUser.useMutation();

  if (isSuccess) {
    console.log(data);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get your life easy&nbsp;
          <code className="font-mono font-bold">with our platform</code>
        </p>
      </div>
      {hi.isLoading && <div className="mt-5 mb-3 font-bold text-4xl">Loading...</div>}
      {hi.data && <div className="mt-5 mb-3 font-bold text-4xl">I'm a response {hi.data?.text}</div>}

      {isSuccess && (
        <div className="mt-3 text-xl">Hello <span className="font-semibold">{data.name}</span></div>
      )}
      {!data && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            mutate({
              name: name,
            });
          }}
        >
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
}
