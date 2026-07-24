"use server";

import { auth } from "@clerk/nextjs/server";
import { connectToDatabase } from "@/lib/mongoose";
import User from "@/lib/database/user.model";
import Course from "@/lib/database/course.model";

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
