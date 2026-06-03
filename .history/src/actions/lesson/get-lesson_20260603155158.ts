import { EmptyCourse } from "@/components/course";
import { ConnectToDatabase, Course, Lesson } from "@/lib/db";

export async function getLessonBySlug({
  slug,
  lessonId,
}: {
  slug: string;
  lessonId: string;
}) {
  await ConnectToDatabase();

  const course = await Course.findOne({
    slug,
  });
  if (!course) return <Em/>;
  const lesson = await Lesson.findOne({
    _id: lessonId,
    course: course._id,
  })
    .populate("lecture")
    .populate("course")
    .lean();

  return lesson;
}
