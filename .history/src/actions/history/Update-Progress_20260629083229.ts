"use server";

import { ConnectToDatabase, User } from "@/lib/db";
import { History } from "@/lib/db/models/history.model";
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
    return JSON.parse(JSON.stringify(history));
  } catch (error) {
    console.log(error);
    return null;
  }
}
