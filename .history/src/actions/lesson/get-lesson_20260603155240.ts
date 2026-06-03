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
  if (!course) return  (<EmptyState
          icon={<CircleX className="size-8 text-destructive" />}
          title="Không tìm thấy khoá học"
          description="Khoá học bạn đang tìm có thể đã bị xoá hoặc đường dẫn không tồn tại."
          buttonText="Quay về trang chủ"
          href="/"
          variant="destructive"
        />)
  const lesson = await Lesson.findOne({
    _id: lessonId,
    course: course._id,
  })
    .populate("lecture")
    .populate("course")
    .lean();

  return lesson;
}
