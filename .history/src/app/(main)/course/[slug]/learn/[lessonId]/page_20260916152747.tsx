import { getOrCreateHistory } from "@/actions/history/getOrCreateHistory";
import { findAllLessonsByCourse } from "@/actions/lesson/get-all-lesson";
import { getLessonBySlug } from "@/actions/lesson/get-lesson-slug";
import { EmptyState } from "@/components/course";
import LearnLayout from "@/components/lesson/LearnLayout";
import { requireUser } from "@/lib/auth/require-user";
import { getCourseBySlug } from "@/lib/services/course.service";
import { CourseStatus } from "@/types/course";
import { CircleX, RefreshCw } from "lucide-react";
type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};

const toPlain = <T,>(value: T): T => JSON.parse(JSON.stringify(value));

export default async function LearnPage({ params }: Props) {
  await requireUser();

  const { slug, lessonId } = await params;

  // Lấy khóa học trước
  const course = await getCourseBySlug(slug);
  if (!course) {
    return (
      <EmptyState
        icon={<CircleX className="size-8 text-destructive" />}
        title="Không tìm thấy khoá học"
        description="Khoá học bạn đang tìm có thể đã bị xoá hoặc đường dẫn không tồn tại."
        buttonText="Quay về trang chủ"
        href="/"
        variant="destructive"
      />
    );
  }
  // Khóa học đang được cập nhật → tạm thời không cho học
  if (course.status === CourseStatus.UPDATING) {
    return (
      <EmptyState
        icon={<RefreshCw className="size-8 text-blue-600" />}
        title="Khóa học đang được cập nhật"
        description="Khóa học hiện đang được cập nhật nội dung. Bạn vui lòng quay lại sau khi quá trình cập nhật hoàn tất."
        buttonText="Quay về trang học tập"
        href="/study"
        variant="default"
      />
    );
  }
  const history = await getOrCreateHistory(course._id, lessonId);
  const prevLesson = lessons[currentIndex - 1] || null;
  const nextLesson = lessons[currentIndex + 1] || null;
  // Sau khi chắc chắn khóa học không UPDATING mới lấy bài học
  const lessonDetails = await getLessonBySlug({
    slug,
    lessonId,
  });

  const lessons = toPlain(await findAllLessonsByCourse(slug));

  const currentIndex = lessons.findIndex((l) => l._id.toString() === lessonId);
  if (!lessonDetails) {
    return (
      <EmptyState
        icon={<CircleX className="size-8 text-destructive" />}
        title="Không tìm thấy bài học"
        description="Bài học không tồn tại hoặc đã bị xoá."
        buttonText="Quay về trang chủ"
        href="/"
        variant="destructive"
      />
    );
  }
  const plainLessonDetails = toPlain(lessonDetails);
  // const currentLectureId = lessonDetails.lecture?._id.toString();
  if (!plainLessonDetails.video_url)
    return (
      <EmptyState
        icon={<CircleX className="size-8 text-destructive" />}
        title="Không tìm thấy khoá học"
        description="Khoá học bạn đang tìm có thể đã bị xoá hoặc đường dẫn không tồn tại."
        buttonText="Quay về trang chủ"
        href="/"
        variant="destructive"
      />
    );
  // if (!lessonDetails?.preview) {
  //   return (
  //     <EmptyState
  //       icon={<CircleX className="size-8 text-destructive" />}
  //       title="Bài học bị khóa"
  //       description="Bạn cần mua khóa học để xem bài học này."
  //       buttonText="Quay lại khóa học"
  //       href={`/course/${slug}`}
  //       variant="destructive"
  //     />
  //   );
  // }
  let videoId = "";
  try {
    const url = new URL(plainLessonDetails.video_url);
    videoId =
      url.hostname === "youtu.be"
        ? url.pathname.replace("/", "")
        : (url.searchParams.get("v") ?? "");
  } catch {
    videoId = "";
  }
  if (!videoId) {
    return (
      <EmptyState
        icon={<CircleX className="size-8 text-destructive" />}
        title="Video không hợp lệ"
        description="Đường dẫn video của bài học này chưa đúng định dạng YouTube."
        buttonText="Quay về khoá học"
        href={`/course/${slug}`}
        variant="destructive"
      />
    );
  }
  return (
    <LearnLayout
      course={course}
      slug={slug}
      lessonId={lessonId}
      lessonDetails={plainLessonDetails}
      videoId={videoId}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
      history={history}
    />
  );
}
