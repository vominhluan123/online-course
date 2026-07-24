"use server";

import { ConnectToDatabase, User } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getMyCourses() {
  await ConnectToDatabase();

  const { userId } = await auth();

  if (!userId) return [];

  const user = await History.find({ user: user._id }).populate("course");

  return JSON.parse(JSON.stringify(user?.courses || []));
}
