import React, { FC } from "react";
import "animate.css";
import { api } from "../../../../../trpc-client/server-client";
import Image from "next/image";

interface TeacherDashboard {}

type StudentData =
  | {
      id: string;
      name: string | null;
      email: string | null;
      emailVerified: Date | null;
      image: string | null;
      role: string;
      createdAt: Date;
      updatedAt: Date;
    }[]
  | undefined;

const page: FC<TeacherDashboard> = async () => {
  const students = (await api).TeacherRouter.allStudentData();
  const studentData: StudentData = await students;

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200 animate__animated animate__fadeIn">
      <div className="flex-grow">
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between"></div>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="flex items-center p-8 bg-gray-800 shadow rounded-lg animate__animated animate__fadeInUp ">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-300 bg-purple-700 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">{studentData?.length}</span>
                <span className="block text-gray-400">Students</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-gray-800 shadow rounded-lg animate__animated animate__fadeInUp ">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-300 bg-green-700 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">6.8</span>
                <span className="block text-gray-400">Average mark</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-gray-800 shadow rounded-lg animate__animated animate__fadeInUp ">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-300 bg-red-700 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <div>
                <span className="inline-block text-2xl font-bold">9</span>
                <span className="inline-block text-xl text-gray-400 font-semibold">
                  (14%)
                </span>
                <span className="block text-gray-400">Weak students</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-gray-800 shadow rounded-lg animate__animated animate__fadeInUp ">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-300 bg-blue-700 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">83%</span>
                <span className="block text-gray-400">Finished homeworks</span>
              </div>
            </div>
          </section>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-gray-800 shadow rounded-lg animate__animated animate__fadeInLeft ">
              <div className="px-6 py-5 font-semibold border-b border-gray-700">
                The number of applied and left students per month
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-center justify-center h-full px-4 py-16 text-gray-500 text-3xl font-semibold bg-gray-700 border-2 border-gray-600 border-dashed rounded-md">
                  Chart
                </div>
              </div>
            </div>
            <div className="flex items-center p-8 bg-gray-800 shadow rounded-lg animate__animated animate__fadeInUp animate__delay-6s">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-300 bg-yellow-700 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    fill="#fff"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14v6M12 8v6m0 0l-9-5m9 5l9-5-9 5z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">42</span>
                <span className="block text-gray-400">Months left</span>
              </div>
            </div>
            <div className="row-span-3 bg-gray-800 shadow rounded-lg animate__animated animate__fadeInRight">
              <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-700">
                <span>Students by average mark</span>
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-1 text-sm text-gray-400"
                >
                  <span>Sort by</span>
                  <svg
                    className="hi-solid hi-chevron-down inline-block w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.96l3.71-3.73a.75.75 0 111.08 1.04l-4.24 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
                <ul className="p-6 space-y-6">
                  {studentData?.map((student) => (
                    <li className="flex items-center">
                      <div className=" mr-3 bg-gray-700 rounded-full flex items-center justify-center">
                        <Image
                        className="rounded-full"
                          src={student.image || "/common/noavatar.png"}
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <span className="text-gray-400 text-xs">{student.name}</span>
                      <span className="ml-auto text-sm font-semibold text-gray-300 bg-gray-700 rounded-full py-1 px-2">
                        7.8
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col row-span-3 bg-gray-800 shadow rounded-lg animate__animated animate__fadeInRight ">
              <div className="px-6 py-5 font-semibold border-b border-gray-700">
                Students by type of studying
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-center justify-center h-full px-4 py-16 text-gray-500 text-3xl font-semibold bg-gray-700 border-2 border-gray-600 border-dashed rounded-md">
                  Chart
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default page;
