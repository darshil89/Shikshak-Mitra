import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/libs/auth";

const prisma = new PrismaClient();

//create a post request handler for the createCourse route
export const POST = async (req: NextRequest) => {
  const { courseName, courseCode, teacherEmail } = await req.json();

  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({
      message: "Unauthorized",
    });
  }

  const adminId = session.user.id;

  try {
    const res = await prisma.course.create({
      data: {
        courseName,
        courseCode,
        teacherEmail,
        admin: {
          connect: {
            id: adminId,
          },
        },
      },
    });

    return NextResponse.json({
      message: "Course created successfully",
    });
  } catch (error: any) {
    console.log("Error while creating course", error.message);
    return NextResponse.json({
      message: "Error while creating course",
      error: error.message,
    });
  }
};
