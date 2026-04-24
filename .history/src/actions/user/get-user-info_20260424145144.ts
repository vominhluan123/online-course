import { ConnectToDatabase, User } from "@/lib/db";

export default async function name({ userId }) {
  try {
    ConnectToDatabase();
    const findUser = await User.findOne({ clerkId: userId });
    if (!findUser) {
      return null;
    }
    return findUser;
  } catch (error) {}
}
