import { getOrCreateHistory } from "@/actions/history/getOrCreateHistory";
import { findAllLessonsByCourse } from "@/actions/lesson/get-all-lesson";
import { getLessonBySlug } from "@/actions/lesson/get-lesson-slug";
import { EmptyState } from "@/components/course";
import LessonSidebar from "@/components/lesson/LessonSidebar";
import { getCourseBySlug } from "@/lib/services/course.service";
import { getUserInfo } from "@/lib/services/user.service";
import { RedirectToSignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";
import Link from "next/link";
type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};
export default async function LearnPage({ params }: Props) {
  const { userId } = await auth();
  if (!userId) return RedirectToSignIn();
  const findUser = await getUserInfo()
  if (!findUser) return Re
  const { slug, lessonId } = await params;
  const lessonDetails = await getLessonBySlug({ slug, lessonId });
  const lessons = await findAllLessonsByCourse(slug);
  const currentIndex = lessons.findIndex((l) => l._id.toString() === lessonId);
  const course = await getCourseBySlug(slug);
  const history = await getOrCreateHistory(course._id);
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
  // const currentLectureId = lessonDetails.lecture?._id.toString();
  if (!lessonDetails?.video_url)
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
  const url = new URL(lessonDetails.video_url);
  const videoId = url.searchParams.get("v");
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
      {/* Main content */}
      <div className="space-y-6">
        <div className="group relative overflow-hidden rounded-xl border border-border">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={lessonDetails.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* Prev */}
          {prevLesson && (
            <Link
              href={`/course/${slug}/learn/${prevLesson._id}`}
              className="
        absolute left-4 top-1/2
        -translate-y-1/2
        opacity-0
        transition-all
        duration-300
        group-hover:opacity-100
      "
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm">
                <ChevronLeft className="size-6" />
              </div>
            </Link>
          )}
          {/* Next */}
          {nextLesson && (
            <Link
              href={`/course/${slug}/learn/${nextLesson._id}`}
              className="
        absolute right-4 top-1/2
        -translate-y-1/2
        opacity-0
        transition-all
        duration-300
        group-hover:opacity-100
      "
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm">
                <ChevronRight className="size-6" />
              </div>
            </Link>
          )}
        </div>
        <div className="rounded-xl border border-border p-6">
          <h1>{lessonDetails.title}</h1>
        </div>
      </div>
      {/* Lesson sidebar */}
      <LessonSidebar
        course={course}
        slug={slug}
        lessonId={lessonId}
        history={history}
      />
      {lessonDetails.content && (
        <div className="rounded-xl border border-border p-6">
          <h2 className="mb-4 text-xl font-semibold">Nội dung bài học</h2>
          <article
            className="prose
    dark:prose-invert
    max-w-none
    prose-a:text-primary
    prose-a:no-underline
    hover:prose-a:underline"
            dangerouslySetInnerHTML={{
              __html: lessonDetails.content,
            }}
          />
        </div>
      )}
    </div>
  );
}
