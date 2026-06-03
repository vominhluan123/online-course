"use server";
import { ConnectToDatabase, Course, Lesson, LessonTypeModel } from "@/lib/db";
export async function getLessonBySlug({
  slug,
  lessonId,
}: {
  slug: string;
  lessonId: string;
}):Promise<LessonTypeModel | null> {
  await ConnectToDatabase();
  const course = await Course.findOne({
    slug,
  });
  if (!course) return null;
  const lesson = await Lesson.findOne({
    _id: lessonId,
    course: course._id,
  })
    .populate("lecture")
    .populate("course")
    .lean();
  return lesson;
}
