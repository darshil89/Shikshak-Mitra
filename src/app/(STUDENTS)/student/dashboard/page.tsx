 "use client";
import { studentCards } from "@/app/libs/data";
import styles from "../../../../css/dashboard.module.css";
import { FC } from "react";
import "animate.css"
import React from 'react';
import { Line } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data: ChartData<'line'> = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Mathematics',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
    },
    {
      label: 'Computer Science',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: 'rgba(153,102,255,0.4)',
      borderColor: 'rgba(153,102,255,1)',
    },
    {
      label: 'Physics',
      data: [8, 78, 80, 49, 90, 29, 40],
      fill: true,
      backgroundColor: 'rgba(255,100,64,0.4)',
      borderColor: 'rgba(250,159,64,1)',
    },
    {
      label: 'Chemistry',
      data: [18, 48, 77, 9, 100, 27, 40],
      fill: false,
      backgroundColor: 'rgba(255,159,64,0.4)',
      borderColor: 'rgba(255,159,64,1)',
    },
  ],
};

const options: ChartOptions<'line'> = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};


interface PagePros {}
const StudentDashboard: FC<PagePros> = () => {
  const notes = [
   "https://res.cloudinary.com/dptrkbl3o/image/upload/v1717903588/images_upload/dggbj13mecwqsnw4hn1o.pdf",
   "https://res.cloudinary.com/dptrkbl3o/image/upload/v1717904076/images_upload/mdlnq81bdx59d7zhky70.pdf",
   "https://res.cloudinary.com/dptrkbl3o/image/upload/v1717904040/images_upload/mxp3vzhr9rkpfqgrkjj2.pdf"
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg h-96 hover:bg-gray-700 animate__animated animate__fadeInDown">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Marks Analysis</h2>
          <div>
            <button className="bg-teal-500 text-white py-1 px-3 rounded-lg hover:bg-teal-400 transition ease-in-out duration-500">
              Month
            </button>
            <button className="bg-gray-700 text-white py-1 px-3 rounded-lg ml-2 hover:bg-gray-600 transition ease-in-out duration-500">
              Week
            </button>
          </div>
        </div>
        <div className="mt-4 h-72">
          <Line data={data} options={options} />
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg h-96 hover:bg-gray-700 animate__animated animate__fadeInDown">
        <h2 className="text-xl font-bold">Marks History</h2>
        <ul className="mt-4">
          <li className="flex justify-between py-2 hover:text-teal-400 transition ease-in-out duration-500">
            <span>Mathematics</span>
            <span>85%</span>
          </li>
          <li className="flex justify-between py-2 hover:text-teal-400 transition ease-in-out duration-500">
            <span>Science</span>
            <span>75%</span>
          </li>
          <li className="flex justify-between py-2 hover:text-teal-400 transition ease-in-out duration-500">
            <span>English</span>
            <span>65%</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div className="bg-gray-800 p-6 rounded-lg h-40 hover:bg-gray-700 animate__animated animate__fadeInUp">
        <h2 className="text-xl font-bold">Today's Attendance</h2>
        <p className="mt-4">Present: 2</p>
        <p className="mt-2">Absent: 0</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg h-40 hover:bg-gray-700 animate__animated animate__fadeInUp">
        <h2 className="text-xl font-bold">Weekly Attendance</h2>
        <p className="mt-4">Present: 10</p>
        <p className="mt-2">Absent: 3</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg h-40 hover:bg-gray-700 animate__animated animate__fadeInUp">
        <h2 className="text-xl font-bold">Monthly Attendance</h2>
        <p className="mt-4">Present: 45</p>
        <p className="mt-2">Absent: 5</p>
      </div>
    </div>

     {/* Notes Section */}
     <div className="bg-gray-800 p-6 rounded-lg mt-6 hover:bg-gray-700 animate__animated animate__fadeIn">
        <h2 className="text-xl font-bold mb-4">Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note, index) => (
            <div key={index} className="cursor-pointer border border-gray-700 rounded-lg overflow-hidden">
              <a
                href={note}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-gray-700 hover:bg-gray-600 transition duration-300"
              >
                Note {index + 1}
              </a>
            </div>
          ))}
        </div>
      </div>
  </div>

  );
};

export default StudentDashboard;
