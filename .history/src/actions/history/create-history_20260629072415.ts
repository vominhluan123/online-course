"use sever";
import { ConnectToDatabase, User, UserSchemaType } from "@/lib/db";
import { History } from "@/lib/db/models/history.model";
export async function createHistory(
  userId: String,
): Promise<HistorySchemaType | null> {
  try {
    await ConnectToDatabase();
    const user = await User.findOne({ clerkId: userId });
    const newHistory = History.create({});
    return user || null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
