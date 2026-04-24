import { ConnectToDatabase, User } from "@/lib/db";

export default async function name({ userId }) {
  try {
    ConnectToDatabase();
    const findUser = await User.find
  } catch (error) {}
}
