"use server";

import {
  ConnectToDatabase,
  Course,
  CourseSchemaType,
  Lesson,
  LessonTypeModel,
  User,
} from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getLessonBySlug({
  slug,
  lessonId,
}: {
  slug: string;
  lessonId: string;
}): Promise<LessonTypeModel | null> {
  await ConnectToDatabase();

  const { userId } = await auth();

  if (!userId) return null;

  const user = await User.findOne({
    clerkId: userId,
  });

  if (!user) return null;

  const course = await Course.findOne({
    slug,
  });

  if (!course) return null;

  // Kiểm tra quyền sở hữu khóa học
  const hasCourse = user.courses.some(
    (courseId: CourseSchemaType) =>
      courseId.toString() === course._id.toString(),
  );

  if (!hasCourse) {
    return null;
  }

  const lesson = await Lesson.findOne({
    _id: lessonId,
    course: course._id,
    _destroy: false,
  })
    .populate("lecture")
    .populate("course");

  return lesson;
}
