"use server";

import { ConnectToDatabase, User } from "@/lib/db";
import { History, LessonProgressType } from "@/lib/db/models/history.model";
import { auth } from "@clerk/nextjs/server";

type UpdateLessonProgressParams = {
  courseId: string;
  lessonId: string;
  completed: boolean;
};

export async function updateLessonProgress({
  courseId,
  lessonId,
  completed,
}: UpdateLessonProgressParams) {
  try {
    await ConnectToDatabase();

    const { userId } = await auth();

    if (!userId) return null;

    const user = await User.findOne({
      clerkId: userId,
    });

    if (!user) return null;

    const history = await History.findOne({
      user: user._id,
      course: courseId,
    });

    if (!history) {
      throw new Error("History not found");
    }

    // ===== Update progress ở đây =====
    const lessonProgress = history.progress.find(
      (item) => item.lesson.toString() === lessonId,
    );
    if (!lessonProgress) {
      history.progress.push({
        lesson: lessonId,
        completed,
        watchedSeconds: 0,
        completedAt: completed ? new Date() : undefined,
      });
    } else {
      lessonProgress.completed = completed;

      lessonProgress.completedAt = completed ? new Date() : undefined;
    }
    history.completedLessons = history.progress.filter(
      (item: LessonProgressType) => item.completed,
    ).length;
    history.percent = Math.round(
      (history.completedLessons / history.totalLessons) * 100,
    );
    history.completed = history.completedLessons === history.totalLessons;

    if (history.completed) {
      history.completedAt = new Date();
    }
    await history.save();
    return JSON.parse(JSON.stringify(history));
  } catch (error) {
    console.log(error);
    return null;
  }
}
