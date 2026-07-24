"use server";

import { ConnectToDatabase, History, User } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getMyCourses() {
  await ConnectToDatabase();

  const { userId } = await auth();

  if (!userId) return [];

  const user = await User.findOne({
    clerkId: userId,
  });

  if (!user) return [];

  const histories = await History.find({
    user: user._id,
  })
    .populate("course")
    .sort({
      updatedAt: -1,
    })
    .lean();

  return JSON.parse(JSON.stringify(histories));
}
