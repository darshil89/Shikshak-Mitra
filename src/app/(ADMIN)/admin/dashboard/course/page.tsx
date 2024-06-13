"use client";
import { FC, useState } from "react";
import { trpc } from "../../../../../../trpc-client/client";

interface PagePros {}

const CreateCourse: FC<PagePros> = () => {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {data,  mutate, isSuccess } =
    trpc.AdminRouter.createCourse.useMutation();

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch("/api/admin/createCourse", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ courseName, courseCode, teacherEmail }),
  //     });
  //     console.log(await res.json());
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="flex justify-center  text-gray-200 animate__animated animate__fadeIn">
      <div className="w-full max-w-md p-8 space-y-6  shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Create New Course</h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            mutate({ courseName, courseCode, teacherEmail });
          }}
        >
          <div>
            <label className="block text-gray-400">Course Name</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Enter course name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400">Course Code</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              placeholder="Enter course code"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400">Teacher Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
              value={teacherEmail}
              onChange={(e) => setTeacherEmail(e.target.value)}
              placeholder="Enter teacher's email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Create Course
          </button>
        </form>
        {submitted && (
          <div className="mt-4 text-center text-green-400 animate__animated animate__fadeIn">
            Course created successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateCourse;
