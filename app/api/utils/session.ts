import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const getSerSession = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return null;

    return session.user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
