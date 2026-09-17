import { getOrCreateHistory } from "@/actions/history/getOrCreateHistory";
import { findAllLessonsByCourse } from "@/actions/lesson/get-all-lesson";
import { getLessonBySlug } from "@/actions/lesson/get-lesson-slug";
import { EmptyState } from "@/components/course";
import LearnLayout from "@/components/lesson/LearnLayout";
import { requireUser } from "@/lib/auth/require-user";
import { getCourseBySlug } from "@/lib/services/course.service";
import { CircleX } from "lucide-react";
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
  const lessonDetails = await getLessonBySlug({ slug, lessonId });
  const lessons = toPlain(await findAllLessonsByCourse(slug));
  const currentIndex = lessons.findIndex((l) => l._id.toString() === lessonId);
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
  const history = await getOrCreateHistory(course._id, lessonId);
  const prevLesson = lessons[currentIndex - 1] || null;
  const nextLesson = lessons[currentIndex + 1] || null;
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
