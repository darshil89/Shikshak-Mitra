import { NextResponse } from "next/server";
import {
  router,
  publicProcedure,
  protectedProcedure,
  createCallerFactory,
} from "../index";

import { z } from "zod";
import { AttendanceStatus } from "@prisma/client";

export const TeacherRouter = router({
  allStudentData: protectedProcedure.query(async (opts) => {
    await opts.ctx.prisma.$connect();
    try {
      const students = await opts.ctx.prisma.user.findMany({
        where: { role: "student" },
      });
      return students;
    } catch (error: any) {
      console.log(error.message);
    }
  }),
  getAllClasses: protectedProcedure.query(async (opts) => {
    //get all classes for the teacher
    const teacherEmail = opts.ctx.session.user.email ?? "";
    const course = await opts.ctx.prisma.course.findFirst({
      where: { teacherEmail: teacherEmail },
    });

    const allClasses = await opts.ctx.prisma.class.findMany();
    const classes = await opts.ctx.prisma.class.findMany({
      where: { courseId: course?.id ?? "" },
    });
    return { allClasses, classes };
  }),

  markAttendance: protectedProcedure.input(
    z.object({
      date: z.date(),
      classId: z.string(),
      courseId: z.string(),
      students : z.array(z.string())
    }),
  ).mutation(async (opts) => {
    //fetch all students 
    const allStudents = await opts.ctx.prisma.user.findMany({
      where:{
        role : "student"
      }
    })
    console.log("all students ",allStudents)
    return "hello"
    //mark attendance for the students 
    // Promise.all(opts.input.students.map(async (student) => {
    //   const attendance = await opts.ctx.prisma.attendance.create({
    //     data: {
    //       date: opts.input.date,
    //       status: "absent",
    //       classId: opts.input.classId,
    //       courseId: opts.input.courseId,
    //       studentEmail : student
    //     },
    //   })
    // }))
  }),
});
