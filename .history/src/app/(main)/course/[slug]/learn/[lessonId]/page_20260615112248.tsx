import { findAllLessonsByCourse } from "@/actions/lesson/get-all-lesson";
import { getLessonBySlug } from "@/actions/lesson/get-lesson-slug";
import { EmptyState } from "@/components/course";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { getCourseBySlug } from "@/lib/services/course.service";
import { ChevronLeft, ChevronRight, CirclePlay, CircleX } from "lucide-react";
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
  const course = await getCourseBySlug(slug);
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
  const currentLectureId = lessonDetails.lecture?._id.toString();
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
      <aside className="sticky top-6 flex h-auto max-h-[70vh] flex-col overflow-hidden rounded-xl border border-border bg-card lg:h-[calc(100vh-3rem)] lg:max-h-none">
        <div className="border-b border-border px-4 py-3">
          <Progress value={33} className="mb-5" />
          <h2 className="text-sm font-semibold">Nội dung khóa học</h2>
        </div>
        <div className="flex-1 custom-scrollbar overflow-y-auto">
          <Accordion
            type="single"
            collapsible
            defaultValue={currentLectureId}
            className="w-full"
          >
            {course?.lectures?.map((lecture: any) => (
              <AccordionItem
                key={lecture._id}
                value={lecture._id.toString()}
                className="border-b border-border last:border-b-0"
              >
                {/* HEADER */}
                <AccordionTrigger className="rounded-none px-4 py-3 hover:bg-muted/50 hover:no-underline">
                  <div className="min-w-0 text-left">
                    <h3 className="line-clamp-2 text-sm font-semibold leading-snug">
                      {lecture.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {lecture.lessons?.length || 0} bài học
                    </p>
                  </div>
                </AccordionTrigger>

                {/* CONTENT */}
                <AccordionContent className="pb-2 pt-1">
                  <div className="px-2 space-y-1">
                    {lecture.lessons?.map((lesson: any) => {
                      const isActive = lesson._id.toString() === lessonId;

                      return (
                        <Link
                          key={lesson._id}
                          href={`/course/${slug}/learn/${lesson._id}`}
                          className={`
  group flex items-start gap-3 rounded-md border-l-2 px-3 py-2.5 text-sm transition-colors
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
  ${
    isActive
      ? "border-primary bg-primary/10 text-primary"
      : "border-transparent text-foreground hover:bg-muted/70"
  }
`}
                        >
                          <CirclePlay
                            className={`mt-0.5 size-4 shrink-0 transition-colors
    ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}
  `}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="line-clamp-2 font-medium leading-snug">
                              {lesson.title}
                            </p>

                            <p
                              className={`
      mt-1 text-xs
      ${isActive ? "text-primary/80" : "text-muted-foreground"}
    `}
                            >
                              {lesson.duration} phút
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </aside>
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
