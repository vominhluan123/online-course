"use server";

import { auth } from "@clerk/nextjs/server";
import { ConnectToDatabase, User } from "@/lib/db";
import { History } from "@/lib/db/models/history.model";

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
      return null;
    }

    // ===== Update progress ở đây =====

    return JSON.parse(JSON.stringify(history));
  } catch (error) {
    console.log(error);
    return null;
  }
}
