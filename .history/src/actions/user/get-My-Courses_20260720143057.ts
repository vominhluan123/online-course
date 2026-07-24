"use server";

import { ConnectToDatabase,  User } from "@/lib/db";
import { History } from "@/lib/db/models/history.model";
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
