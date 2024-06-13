"use client";

import { trpc } from "../../trpc-client/client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  // const hi = trpc.hello.useQuery({ text: "From TRPC" });

  // const { data, mutate, isSuccess } = trpc.createUser.useMutation();

  // if (isSuccess) {
  //   console.log(data);
  // }

  return (
    <div className="">
      <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-5xl xl:text-6xl">
                EduGate: Your Ultimate Campus Companion
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                Dive into StudentHub, where your campus life is seamlessly
                streamlined. Access top-notch study resources, connect with
                peers, and stay in the loop with the latest campus buzz. Elevate
                your academic journey with a touch of flair and simplicity.
                Welcome to a smarter way to student life!
              </p>

              <form
                action="#"
                method="POST"
                className="relative mt-8 rounded-full sm:mt-12"
              >
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter Your College Name"
                      className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                  >
                    Find Your College
                  </button>
                </div>
              </form>

              <div className="mt-8 sm:mt-12">
                <p className="text-lg font-normal text-white">
                  Trusted by 10k+ students
                </p>

                <div className="flex items-center pl-32 mt-3">
                  <div>
                    <span className="ml-2 text-base font-normal text-white">
                      {" "}
                      4.1/5{" "}
                    </span>
                    <span className="ml-1 text-base font-normal text-gray-500">
                      {" "}
                      (14k Reviews){" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full opacity-50"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                  alt=""
                />
              </div>

              <img
                className="relative w-full max-w-md mx-auto"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// <main className="flex min-h-screen flex-col items-center p-24">
//   <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
//     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//       Get your life easy&nbsp;
//       <code className="font-mono font-bold">with our platform</code>
//     </p>
//   </div>
//   {hi.isLoading && <div className="mt-5 mb-3 font-bold text-4xl">Loading...</div>}
//   {hi.data && <div className="mt-5 mb-3 font-bold text-4xl">I&apos;m a response {hi.data?.text}</div>}

//   {isSuccess && (
//     <div className="mt-3 text-xl">Hello <span className="font-semibold">{data.name}</span></div>
//   )}
//   {!data && (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         mutate({
//           name: name,
//         });
//       }}
//     >
//       <input
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         id="username"
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Submit
//       </button>
//     </form>
//   )}
// </main>
