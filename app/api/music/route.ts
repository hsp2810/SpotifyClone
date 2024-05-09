import prisma from "@/prisma/setup";
import { adminAuthenticate, getSerSession } from "../_utils/session";
import { NextRequest, NextResponse } from "next/server";
import { getArtistByUsername } from "../_database/artist";
import { createGenre, getGenreByName } from "../_database/genre";
import { v2 as cloudinary } from "cloudinary";
import { insertMusic } from "../_utils/cloudinary";
import { Artist, Genre } from "@prisma/client";

// Get all the songs
export async function GET(request: Request, response: NextResponse) {
  try {
    const session = getSerSession();
    if (!session)
      return NextResponse.json(
        { type: "error", message: "Session Expired" },
        { status: 401 }
      );

    const songs = await prisma.music.findMany({});
    return NextResponse.json({
      type: "success",
      message: "Fetched all the songs",
      songs,
    });
  } catch (error) {
    return NextResponse.json(
      { type: "error", message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Add a new song
export async function POST(request: Request, response: NextResponse) {
  try {
    // const isAdmin = await adminAuthenticate();
    // if (!isAdmin)
    //   return NextResponse.json(
    //     { type: "error", message: "Authorized Admin Access Required" },
    //     { status: 401 }
    //   );

    const formData = await request.formData();
    const title = formData.get("title") as string;
    const artistsTextFormat = formData.get("artists") as string;
    const genresTextFormat = formData.get("genres") as string;
    const duration = formData.get("duration") as string;
    const company = formData.get("company") as string;
    const country = formData.get("country") as string;

    //Artists
    const artists = await getAndParseArtists(artistsTextFormat);
    if (!artists)
      return NextResponse.json(
        { type: "error", message: "Artists not found" },
        { status: 401 }
      );

    //Genre
    const genres = await getAndParseGenres(genresTextFormat);

    //File
    const music_file = formData.get("musicfile") as File;
    const musicResults: any = await insertMusic(music_file);

    const thumbnail_file = formData.get("thumbnailfile") as File;
    const thumbnailResults: any = await insertMusic(thumbnail_file);
    if (!musicResults)
      return NextResponse.json(
        { type: "error", message: "Error in uploading the file" },
        { status: 401 }
      );
    // console.log("Result after uploading the file: ", results);

    //Music
    const newMusic = await prisma.music.create({
      data: {
        title,
        country: country,
        company: company,
        duration: duration,
        music_secure_url: musicResults.secure_url,
        music_public_id: musicResults.public_id,
        thumbnail_public_id: thumbnailResults.public_id,
        thumbnail_secure_url: thumbnailResults.secure_url,
        artists: {
          connect: artists.map((artist) => ({ username: artist.username })),
        },
      },
    });

    //Music
    return NextResponse.json({
      type: "success",
      message: "Created the music",
      music: newMusic,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { type: "error", message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const getAndParseArtists = async (artistsTextFormat: string) => {
  const artistsTextToValidJson = artistsTextFormat.replace(
    /([{,])(\s*)([A-Za-z0-9_\-]+?)\s*:/g,
    '$1"$3":'
  );
  const parsedArtists: string[] = JSON.parse(artistsTextToValidJson);

  const finalArtists: Artist[] = [];
  await Promise.all(
    parsedArtists.map(async (artist) => {
      let artistVar = await getArtistByUsername(artist);
      artistVar && finalArtists.push(artistVar);
    })
  );

  if (parsedArtists.length !== finalArtists.length) return null;
  return finalArtists;
};

export const getAndParseGenres = async (genresTextFormat: string) => {
  const genresTextToValidJson = genresTextFormat.replace(
    /([{,])(\s*)([A-Za-z0-9_\-]+?)\s*:/g,
    '$1"$3":'
  );
  const parsedGenres: string[] = JSON.parse(genresTextToValidJson);

  const finalGenres: Genre[] = [];
  await Promise.all(
    parsedGenres.map(async (genre) => {
      let genreVar = await getGenreByName(genre);
      // console.log("Found in the DB: ", genreVar);
      if (!genreVar) {
        genreVar = await createGenre({
          name: genre,
        });
        // console.log("Created: ", genreVar);
      }
      genreVar && finalGenres.push(genreVar);
    })
  );

  return finalGenres;
};
