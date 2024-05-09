import prisma from "@/prisma/setup";
import { Role } from "@prisma/client";

export const getArtistByName = async (name: string) => {
  try {
    return await prisma.artist.findFirst({ where: { name } });
  } catch (error) {
    return null;
  }
};

export const getArtistByUsername = async (username: string) => {
  try {
    return await prisma.artist.findFirst({ where: { username } });
  } catch (error) {
    return null;
  }
};
