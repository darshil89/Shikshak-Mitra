"use client";
import React from "react";
import { FC, useState } from "react";
import { trpc } from "../../../../../../trpc-client/client";

interface PagePros {}

const courses = [
  { name: "Maths", code: "22MATS26" },
  { name: "Physics", code: "22PHY26" },
  { name: "Chemistry", code: "22CHE26" },
  { name: "Computer Science", code: "22COM26" },
];

const Classes: FC<PagePros> = () => {
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [course, setCourse] = useState("");
  const [period, setPeriod] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const { data, mutate, isSuccess } =
    trpc.AdminRouter.createClass.useMutation();
  if (data) console.log(data);

  return (
    <div className="flex justify-center p-6  text-gray-200 animate__animated animate__fadeIn">
      <div className="w-full max-w-md p-8 space-y-6  shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">
          Add Class to Timetable
        </h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            mutate({ day, startTime, endTime, course, period });
          }}
        >
          <div>
            <label className="block text-gray-400">Day</label>
            <select
              className="w-full p-2 mt-1 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="" disabled>
                Select a day
              </option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400">Time Range</label>
            <div className="flex space-x-4 mt-1">
              <input
                type="time"
                className="w-full p-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <input
                type="time"
                className="w-full p-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-400">Course</label>
            <select
              className="w-full p-2 mt-1 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="" disabled>
                Select a course
              </option>
              {courses.map((course) => (
                <option key={course.code} value={course.code}>
                  {course.name} - {course.code}
                </option>
              ))}
            </select>
          </div>

          {/* //period input */}
          <div>
            <label className="block text-gray-400">Period</label>
            <input
              type="number"
              className="w-full p-2 mt-1 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
              value={period}
              onChange={(e) => setPeriod(parseInt(e.target.value))}
              placeholder="Enter period"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Add Class
          </button>
        </form>
        {submitted && (
          <div className="mt-4 text-center text-green-400 animate__animated animate__fadeIn">
            Class added successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Classes;
