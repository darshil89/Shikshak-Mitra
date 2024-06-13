// pages/MarksForm.tsx
"use client";
import React, { useState } from 'react';
import { trpc } from '../../../../../../trpc-client/client';






const MarksForm: React.FC = () => {

  const studentsData = trpc.TeacherRouter.allStudentData.useQuery();
  
const students = studentsData.data || [];
  const [studentId, setStudentId] = useState("");
  const [marks, setMarks] = useState<number>(0);

  const handleStudentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = (e.target.value);
    const student = students.find((student) => student.id === selectedId);
    setStudentId(student?.id || "");
  };

  const handleMarksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMarks(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!studentId) return;
    // Handle form submission logic here
    console.log('Selected Student:', studentId);
    console.log('Marks:', marks);
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-4">Enter Student Marks</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="student">
              Select Student
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
              id="student"
              value={studentId || ''}
              onChange={handleStudentChange}
              required
            >
              <option value="" disabled>
                Choose a student
              </option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="marks">
              Marks
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
              id="marks"
              type="number"
              placeholder="Enter marks"
              value={marks}
              onChange={handleMarksChange}
              required
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarksForm;
