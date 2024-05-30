import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: any, res: any) {
  const { email, name } = await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
