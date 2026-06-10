import { ConnectToDatabase, Course, Lesson } from "@/lib/db";

export async function findAllLessonsByCourse(slug: string) {
  await ConnectToDatabase();

  const course = await Course.findOne({ slug });
  if (!course) return [];

  const lessons = await Lesson.find({
    course: course._id,
    _destroy: false,
  })
    .sort({ order: 1 })
    .populate("lecture")
    .populate("course");
  return lessons;
}
