import { ConnectToDatabase, User, UserSchemaType } from "@/lib/db";

export async function getUserInfo(
  userId: string,
): Promise<UserSchemaType | null> {
  try {
    await ConnectToDatabase();

    const user = await User.findOne({ clerkId: userId });

    return user || null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
