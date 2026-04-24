import { ConnectToDatabase, User } from "@/lib/db";

export default async function name({ userId }) {
  try {
    ConnectToDatabase();
    const findUser = await User.findOne({ clerkId: userId });
      return null;
    if (!findUser) return findUser;
  } catch (error) {}
}
