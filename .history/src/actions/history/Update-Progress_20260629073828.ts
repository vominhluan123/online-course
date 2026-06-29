"use server";

import { ConnectToDatabase, Course, User } from "@/lib/db";

import { History, HistorySchemaType } from "@/lib/db/models/history.model";
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

    // 1. Tìm user
     const { userId } = await auth ();

     if (!userId) return null;

     const user = await User.findOne({
       clerkId: userId,
     });

     if (!user) return null;

    // 2. Tìm course
    const course = await Course.findById(courseId);

    if (!course) return null;

    // 3. Kiểm tra đã có history chưa
    const existedHistory = await History.findOne({
      user: user._id,
      course: course._id,
    });

    if (existedHistory) {
      return existedHistory;
    }

    // 4. Đếm tổng số lesson
    await course.populate({
      path: "lectures",
      populate: {
        path: "lessons",
      },
    });

    let totalLessons = 0;

    for (const lecture of course.lectures) {
      totalLessons += lecture.lessons.length;
    }

    // 5. Tạo History
    const history = await History.create({
      user: user._id,

      course: course._id,

      currentLesson: null,

      progress: [],

      completedLessons: 0,

      totalLessons,

      percent: 0,

      completed: false,
    });

    return history;
  } catch (error) {
    console.log(error);
    return null;
  }
}
