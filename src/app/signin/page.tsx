"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const handleSignIn = async () => {
    await signIn("google");
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session && session.user.role === "admin") {
      router.push("/admin/dashboard");
    }
    if (session && session.user.role === "student") {
      router.push("/student/dashboard");
    }
  }, [session, router]);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto p-8 bg-white shadow-lg rounded-lg">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={handleSignIn}
        >
          <svg
            className="w-4 h-4 mr-2"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFF"
              d="M41.438 20.024c.287 1.487.438 3.037.438 4.592 0 14.614-9.869 25.03-22.157 25.03-12.444 0-22.469-10.24-22.469-22.834 0-12.594 10.025-22.834 22.469-22.834 6.083 0 11.534 2.547 15.447 6.611l-6.641 6.368c-2.226-2.147-5.163-3.3-8.806-3.3-7.405 0-13.429 6.273-13.429 13.978s6.024 13.978 13.429 13.978c8.637 0 13.254-5.972 13.897-11.677h-13.897v-9.279h24.494z"
            />
          </svg>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default page;
