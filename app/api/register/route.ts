import prisma from "@/prisma/setup";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Gender } from "@prisma/client";

export async function POST(request: Request) {
  let { email, password, name, gender, dob, isAdmin } = await request.json();

  console.log("Getting all the data: ", gender, dob);

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

  switch (gender) {
    case "Male":
      gender = Gender.Male.toString();
      break;
    case "Female":
      gender = Gender.Female.toString();
      break;
    case "Other":
      gender = Gender.Other.toString();
      break;
    default:
      return NextResponse.json({ message: "Gender Invalid" });
  }

  const convertDate = new Date(dob);

  const newUser = await prisma.user.create({
    data: {
      email,
      hashedPassword,
      name,
      gender,
      isAdmin: isAdmin || false,
      dob: convertDate,
    },
  });

  return NextResponse.json({
    message: "Registration Successful",
    user: newUser,
  });
}
