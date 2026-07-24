"use server";

import { auth } from "@clerk/nextjs/server";

export async function getMyCourses() {
  await connectToDatabase();

  const { userId } = await auth();

  if (!userId) return [];

  const user = await User.findOne({ clerkId: userId })
    .populate({
      path: "courses",
      model: Course,
    })
    .lean();

  return JSON.parse(JSON.stringify(user?.courses || []));
}
