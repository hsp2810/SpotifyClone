import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { getUserByEmail } from "../_database/user";

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

export const adminAuthenticate = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return null;

    const sessionUser = session.user;
    if (!sessionUser) return null;

    const user = await getUserByEmail(sessionUser.email as string);
    if (!user) return null;

    return user.isAdmin;
  } catch (error) {
    console.log(error);
    return null;
  }
};
