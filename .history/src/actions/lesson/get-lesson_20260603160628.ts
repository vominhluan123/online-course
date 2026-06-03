"use server";
import { ConnectToDatabase, Course, Lesson } from "@/lib/db";
export async function getLessonBySlug({
  slug,
  lessonId,
}: {
  slug: string;
  lessonId: string;
}):Promise<Less> {
  await ConnectToDatabase();
  const course = await Course.findOne({
    slug,
  });
  if (!course)
    return {
      success: false,
      message: "Không tìm thấy khoá học",
    };
  const lesson = await Lesson.findOne({
    _id: lessonId,
    course: course._id,
  })
    .populate("lecture")
    .populate("course")
    .lean();
  return lesson;
}
