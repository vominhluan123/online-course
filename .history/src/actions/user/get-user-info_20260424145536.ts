import { ConnectToDatabase, User, UserSchemaType } from "@/lib/db";

export default async function name({
  userId,
}: {
  userId: string;
}): Promise<UserSchemaType | null | undefined> {
  try {
    ConnectToDatabase();
    const findUser = await User.findOne({ clerkId: userId });
    if (!findUser) return null;
    return findUser;
  } catch (error) {
    console.log(error);
  }
}
