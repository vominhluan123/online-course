"use server";

import { ConnectToDatabase, History, User } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getMyStudyCourses() {
  await ConnectToDatabase();

  const { userId } = await auth();

  if (!userId) return [];

  const user = await User.findOne({
    clerkId: userId,
  }).populate("courses");

  if (!user) return [];

  const histories = await History.find({
    user: user._id,
  });

  return user.courses.map((course:string) => {
    const history = histories.find(
      (item) => item.course.toString() === course._id.toString(),
    );

    return {
      _id: course._id,

      course,

      percent: history?.percent ?? 0,

      completed: history?.completed ?? false,

      currentLesson: history?.currentLesson ?? null,
    };
  });
}
