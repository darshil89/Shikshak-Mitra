import { NextResponse } from "next/server";
import {
  router,
  publicProcedure,
  protectedProcedure,
  createCallerFactory,
} from "../index";

import { z } from "zod";

export const AdminRouter = router({
  createClass: protectedProcedure
    .input(
      z.object({
        day: z.string(),
        startTime: z.string(),
        endTime: z.string(),
        course: z.string(),
        period: z.number(),
      })
    )
    .mutation(async (opts) => {
      console.log(opts.input);

      //find the course by course code
      const course = await opts.ctx.prisma.course.findFirst({
        where: {
          courseCode: opts.input.course,
        },
      });

      if (!course) {
        return {
          message: "Course Not Found",
        };
      }

      const courseId = course.id;
      //upload the class data to mongodb by admin
      try {
        const res = await opts.ctx.prisma.class.create({
          data: {
            day: opts.input.day,
            startTime: opts.input.startTime,
            endTime: opts.input.endTime,
            period: opts.input.period,
            courseCode: opts.input.course,
            course: {
              connect: {
                id: courseId,
              },
            },
          },
        });
        return {
          message: "Class added successfully",
        };
      } catch (error) {
        return {
          message: "Error while adding class",
        };
      }
    }),

  createCourse: protectedProcedure
    .input(
      z.object({
        courseName: z.string(),
        courseCode: z.string(),
        teacherEmail: z.string(),
      })
    )
    .mutation(async (opts) => {
      //upload the course data to mongodb by admin
      console.log(opts.input);

      const adminId = opts.ctx.session.user.id; // Assuming this is the admin's email

      console.log("Admin id:", adminId);

      try {
        const res = await opts.ctx.prisma.course.create({
          data: {
            courseName: opts.input.courseName,
            courseCode: opts.input.courseCode,
            teacherEmail: opts.input.teacherEmail,
            admin: {
              connect: {
                id: adminId,
              },
            },
          },
        });

        return {
          message: "Course created successfully",
        };
      } catch (error: any) {
        console.log("Error while creating course", error.message);
        return NextResponse.json({
          message: "Error while creating course",
          error: error.message,
        });
      }
    }),

  getAllClasses: protectedProcedure.query(async (opts) => {
    //get all classes from the database
    const classes = await opts.ctx.prisma.class.findMany();
    return classes;
  }),

  getAllCourses: protectedProcedure.query(async (opts) => {
    //get all courses from the database
    const courses = await opts.ctx.prisma.course.findMany();
    return courses;
  }),
});
