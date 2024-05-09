import { NextResponse } from "next/server";
import { insertArtistProfilePic } from "../_utils/cloudinary";
import prisma from "@/prisma/setup";
import { Role } from "@prisma/client";
import { getArtistByUsername } from "../_database/artist";

export async function POST(request: Request) {
  try {
    console.log("In the function");
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const username = formData.get("username") as string;
    const role = formData.get("role") as string;
    const profilePhoto = formData.get("profilePhoto") as File;

    const isArtistExist = await getArtistByUsername(username);
    if (isArtistExist)
      return NextResponse.json(
        {
          type: "error",
          message: "Username already taken by another artist",
        },
        { status: 402 }
      );
    const results: any = await insertArtistProfilePic(profilePhoto);
    if (!results)
      if (!results)
        return NextResponse.json(
          { type: "error", message: "Error in uploading the file" },
          { status: 401 }
        );

    await prisma.artist.create({
      data: {
        name,
        role: role as Role,
        public_id: results.public_id,
        secure_url: results.secure_url,
        username,
      },
    });

    return NextResponse.json(
      {
        type: "success",
        message: "Artist added",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        type: "error",
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
