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
    // ===========================
    // 1. Connect Database
    // ===========================
    await ConnectToDatabase();

    // ===========================
    // 2. Get current user
    // ===========================
    const { userId } = await auth();

    if (!userId) return null;

    const user = await User.findOne({
      clerkId: userId,
    });

    if (!user) return null;

    // ===========================
    // 3. Get History
    // ===========================
    const history = await History.findOne({
      user: user._id,
      course: courseId,
    });

    if (!history) {
      throw new Error("History not found");
    }

    // ===========================
    // 4. Find lesson progress
    // ===========================
    const lessonProgress = history.progress.find(
      (item: LessonProgressType) => item.lesson.toString() === lessonId,
    );

    // ===========================
    // 5. Update / Create progress
    // ===========================
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

    // ===========================
    // 6. Recalculate progress
    // ===========================
    history.completedLessons = history.progress.filter(
      (item: LessonProgressType) => item.completed,
    ).length;

    history.percent = Math.round(
      (history.completedLessons / history.totalLessons) * 100,
    );

    // ===========================
    // 7. Check course completed
    // ===========================
    history.completed = history.completedLessons === history.totalLessons;

    history.completedAt = history.completed ? new Date() : undefined;

    // ===========================
    // 8. Save
    // ===========================
    await history.save();

    return JSON.parse(JSON.stringify(history));
  } catch (error) {
    console.log(error);
    return null;
  }
}
