"use sever";

import { ConnectToDatabase, User, UserSchemaType } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function createHistory(userId: String): Promise<UserSchemaType | null> {
  try {
    await ConnectToDatabase();
    const user = await User.findOne({ clerkId: userId });
    return user || null;
  } catch (error) {
    console.log(error);
  }
}
