"use sever";
import { ConnectToDatabase, User, UserSchemaType } from "@/lib/db";
import { History } from "@/lib/db/models/history.model";
export async function createHistory(
  userId: String,
): Promise<UserSchemaType | null> {
  try {
    await ConnectToDatabase();
    const user = await User.findOne({ clerkId: userId });
    return user || null;
    const newHistory = History.create({});
  } catch (error) {
    console.log(error);
    return null;
  }
}
