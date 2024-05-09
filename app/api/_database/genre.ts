import prisma from "@/prisma/setup";

export const getGenreByName = async (name: string) => {
  try {
    return await prisma.genre.findUnique({ where: { name } });
  } catch (error) {
    return null;
  }
};

export const createGenre = async (data: { name: string }) => {
  try {
    return await prisma.genre.create({
      data: {
        name: data.name,
      },
    });
  } catch (error) {
    return null;
  }
};
