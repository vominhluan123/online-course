import { Course, Lesson } from "@/lib/db";

export async function findAllLessonsByCourse(slug: string) {
  await ConnectToDatabase();

  const course = await Course.findOne({ slug });
  if (!course) return [];

  const lessons = await Lesson.find({
    course: course._id,
  })
    .sort({ order: 1 }) // cực kỳ quan trọng
    .populate("lecture")
    .populate("course");

  return lessons;
}
