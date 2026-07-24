"use server";

import { auth } from "@clerk/nextjs/server";
import { ConnectToDatabase, History, User } from "@/lib/db";

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
