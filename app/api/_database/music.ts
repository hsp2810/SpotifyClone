import prisma from "@/prisma/setup";

export const getMusicById = async (id: string) => {
  try {
    return await prisma.music.findUnique({ where: { id } });
  } catch (error) {
    return null;
  }
};

//Music that is uploaded in the last 7 days
export const getLatestMusic = async () => {
  try {
    const today = new Date();
    // 7 days ago
    const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    return await prisma.music.findMany({
      where: {
        releasedDate: {
          gte: lastWeek,
        },
      },
      include: {
        artists: true,
      },
    });
  } catch (error) {
    return null;
  }
};

// export const getMusicByArtistName = async (username: string) => {
//   try {
//     return await prisma.music.findUnique({ where: { artists: [in: {}] } });
//   } catch (error) {
//     return null;
//   }
// };
