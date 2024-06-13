import { adminCards } from "@/app/libs/data";
import styles from "../../../../css/dashboard.module.css";
import Card from "../../adminComponents/card/card";
import { FC } from "react";
import Navbar from "../../adminComponents/navbar/Navbar";
import "animate.css"
import { api } from "../../../../../trpc-client/server-client";

interface PagePros {}

interface Course {
  id: string;
  name: string;
  time: string;
}

const AdminDashboard: FC<PagePros> = async () => {

  const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
  const periods : number[] = [1,2,3,4]; 
  //fetch the courses and classes from the database
  const courseData = (await api).AdminRouter.getAllCourses();
  const classData = (await api).AdminRouter.getAllClasses();

  const courses =await courseData;
  const classes = await classData;

  // Initialize timetable structure
  const timetable: { [day: string]: (Course | null)[] } = {};
  days.forEach((day) => {
    timetable[day] = periods.map(() => null); // Initialize all periods as null
  });

  // Populate timetable with class data
  classes.forEach((classItem) => {
    const { day, period, courseCode, courseId, startTime, endTime } = classItem;
    const course: Course = {
      id: courseId,
      name: courseCode,
      time: `${startTime} - ${endTime}`,
    };
    timetable[day][period - 1] = course;
  });

  

  return (
    <>
      <Navbar />
      <main className="flex-1 p-6 bg-gray-900 text-white animate__animated animate__fadeIn">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-8">Timetable</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-800 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
                <tbody>
                  {days.map((day) => (
                    <tr key={day} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                      <td className="py-4 px-6 border-b border-gray-700">{day}</td>
                      {timetable[day].map((course, index) => (
                        <td key={index} className="py-4 px-6 border-b border-gray-700">
                          {course ? (
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                              <p className="  text-gray-100">{course.name}</p>
                            </div>
                          ) : (
                            <span className="text-gray-500">Free</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className="lg:col-span-1">
            <h2 className="text-4xl font-bold mb-8">Courses</h2>
            <div className="overflow-hidden rounded-lg shadow-lg animate__animated animate__fadeInRight">
              <table className="min-w-full bg-gray-800">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="py-3 px-6 text-left text-gray-300">Course Name</th>
                    <th className="py-3 px-6 text-left text-gray-300">Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                      <td className="py-4 px-6 border-b border-gray-700">{course.courseName}</td>
                      <td className="py-4 px-6 border-b border-gray-700">{course.teacherEmail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
