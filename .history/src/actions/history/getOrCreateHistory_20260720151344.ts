"use server";

import {
  ConnectToDatabase,
  Course,
  LectureWithLessonsType,
  User,
} from "@/lib/db";
import { History } from "@/lib/db/models/history.model";
import { auth } from "@clerk/nextjs/server";

export async function getOrCreateHistory(courseId: string, lessonId) {
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
      match: {
        _destroy: false,
      },
    },
  });

  if (!course) return null;

  let history = await History.findOne({
    user: user._id,
    course: course._id,
  });

  if (!history) {
    const lectures = course.lectures as LectureWithLessonsType[];
    let totalLessons = 0;

    for (const lecture of lectures) {
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
  }

  return JSON.parse(JSON.stringify(history));
}
