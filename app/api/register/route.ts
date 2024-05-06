import prisma from "@/prisma/setup";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Gender } from "@prisma/client";

export async function POST(request: Request) {
  let { email, password, name, gender, dob } = await request.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    return NextResponse.json(
      { message: "Email already taken" },
      { status: 401 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  if (gender == "Male") gender = Gender.Male;
  else if (gender == "Female") gender = Gender.Female;
  else if (gender == "Other") gender = Gender.Other;
  else return NextResponse.json({ message: "Gender Invalid" });

  const convertDate = new Date(dob);

  const newUser = await prisma.user.create({
    data: {
      email,
      hashedPassword,
      name,
      gender: Gender.Other,
      dob: convertDate,
    },
  });

  return NextResponse.json({
    message: "Registration Successful",
    user: newUser,
  });
}
