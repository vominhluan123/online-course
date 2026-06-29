import { findAllLessonsByCourse } from "@/actions/lesson/get-all-lesson";
import { getLessonBySlug } from "@/actions/lesson/get-lesson-slug";
import { EmptyState } from "@/components/course";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";
import Link from "next/link";
type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};
export default async function LearnPage({ params }: Props) {
  const { slug, lessonId } = await params;
  const lessonDetails = await getLessonBySlug({ slug, lessonId });
  const lessons = await findAllLessonsByCourse(slug);
  const currentIndex = lessons.findIndex((l) => l._id.toString() === lessonId);
  const prevLesson = lessons[currentIndex - 1] || null;
  const nextLesson = lessons[currentIndex + 1] || null;
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
      <aside className="rounded-xl border border-border bg-card">
        <div className="border-b border-border p-4">
          <h2 className="font-semibold">Nội dung khóa học</h2>
        </div>
        <div className="max-h-[80vh] overflow-y-auto p-2">
          {lessons.map((lesson, index) => {
            const isActive = lesson._id.toString() === lessonId;
            return (
              <Link
                key={lesson._id.toString()}
                href={`/course/${slug}/learn/${lesson._id}`}
                className={`
            flex items-center gap-3 mb-5 rounded-lg p-3 transition-colors
            ${isActive ? "bg-card text-card-foreground" : "hover:bg-muted"}
          `}
              >
                <div
                  className={`
              flex size-8 items-center justify-center rounded-full border text-sm
              ${isActive ? "border-primary-foreground" : "border-border"}
            `}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{lesson.title}</p>
                  <p className="text-xs opacity-70">{lesson.duration} phút</p>
                </div>
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
