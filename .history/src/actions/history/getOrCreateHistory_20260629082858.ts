"use server";

import { auth } from "@clerk/nextjs/server";
import { ConnectToDatabase, Course, User } from "@/lib/db";
import { History } from "@/lib/db/models/history.model";

export async function getOrCreateHistory(courseId: string) {
  await ConnectToDatabase();

  const { userId } = await auth();

  if (!userId) return null;

  const user = await User.findOne({
    clerkId: userId,
  });

  if (!user) return null;

  const course = await Course.findById(courseId).populate({
    path: "lectures",
    populate: {
      path: "lessons",
    },
  });

  if (!course) return null;

  let history = await History.findOne({
    user: user._id,
    course: course._id,
  });

  if (!history) {
    let totalLessons = 0;

    for (const lecture of course.lectures as any) {
      totalLessons += lecture.lessons.length;
    }

    history = await History.create({
      user: user._id,
      course: course._id,
      currentLesson: null,
      progress: [],
      completedLessons: 0,
      totalLessons,
      percent: 0,
      completed: false,
    });
  } els

  return JSON.parse(JSON.stringify(history));
}
