"use client";
import React, { FC, useState } from "react";
import { trpc } from "../../../../../../trpc-client/client";
import ModalComponent from "@/app/(TEACHER)/teacherComponents/Model";
import Modal from "@/app/(TEACHER)/teacherComponents/Model";
import { set } from "zod";
import { truncate } from "fs";
import { log } from "console";

interface PagePros {}

interface Course {
  id: string;
  name: string;
  time: string;
  classId: string;
}

const Loader: FC = () => (
  <div className="flex justify-center items-center h-full">
    <div className="w-16 h-16 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
    <p className="text-white ml-4">Loading...</p>
  </div>
);

const Classes: FC<PagePros> = () => {
  const days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const periods: number[] = [1, 2, 3, 4];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [courseId, setCourseId] = useState<string>("");
  const [classId, setClassId] = useState<string>("");

  const handleOpen = async (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
    day: string,
    courseId: string,
    classId: string
  ) => {
    e.preventDefault();
    setIsOpen(true);
    index = index + 1;

    console.log("new course id =", courseId, classId);
    setCourseId(courseId);
    setClassId(classId);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const classData = trpc.TeacherRouter.getAllClasses.useQuery();

  // Check if data is still loading
  if (classData.isLoading) {
    return <Loader />;
  }

  const classes = classData.data?.classes;
  const allClasses = classData.data?.allClasses;

  const timetable: { [day: string]: (Course | null)[] } = {};
  days.forEach((day) => {
    timetable[day] = periods.map(() => null); // Initialize all periods as null
  });

  // Populate timetable with allClasses data
  allClasses?.forEach((classItem) => {
    const { day, period, courseCode, courseId, startTime, endTime } = classItem;
    const course: Course = {
      id: courseId,
      name: courseCode,
      classId: classItem.id,
      time: `${startTime} - ${endTime}`,
    };
    timetable[day][period - 1] = course;
  });

  // console.log("Classes:", classes);
  // console.log("All Classes:", allClasses);

  return (
    <main className="flex-1 p-6 bg-gray-900 text-white animate__animated animate__fadeIn">
      <section className="lg:col-span-2">
        <h2 className="text-4xl font-bold mb-8">Timetable</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <tbody>
              {days.map((day) => (
                <tr
                  key={day}
                  className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="py-4 px-6 border-b border-gray-700">{day}</td>
                  {timetable[day].map((course, index) => {
                    const isInClasses = classes?.some(
                      (classItem) =>
                        classItem.day === day &&
                        classItem.period === index + 1 &&
                        classItem.courseId === course?.id
                    );
                    return (
                      <td
                        key={index}
                        className="py-4 px-6 border-b border-gray-700"
                      >
                        {course ? (
                          <>
                            {isInClasses && (
                              <>
                                <button
                                  className="w-full flex"
                                  onClick={(e) =>
                                    handleOpen(
                                      e,
                                      index,
                                      day,
                                      course.id,
                                      course.classId
                                    )
                                  }
                                >
                                  <div
                                    className={`p-4 rounded-lg shadow-md ${
                                      isInClasses
                                        ? "bg-green-700"
                                        : "bg-gray-700"
                                    }`}
                                  >
                                    <p className="text-gray-100">
                                      {course.name}
                                    </p>
                                  </div>
                                </button>
                              </>
                            )}
                            <div
                              className={`p-4 rounded-lg shadow-md ${
                                isInClasses ? "hidden" : "bg-gray-700"
                              }`}
                            >
                              <p className="text-gray-100">{course.name}</p>
                            </div>
                          </>
                        ) : (
                          <span className="text-gray-500">Free</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {isOpen && (
        <Modal
          handleClose={handleClose}
          courseId={courseId}
          classId={classId}
        />
      )}
    </main>
  );
};

export default Classes;
