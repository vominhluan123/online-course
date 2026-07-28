"use client";

import type { CourseWithLecturesType, LessonTypeModel } from "@/lib/db";
import type { HistoryTypeModel } from "@/lib/db/models/history.model";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LessonSidebar from "./LessonSidebar";

type LearnLayoutProps = {
  course: CourseWithLecturesType;
  slug: string;
  lessonId: string;
  lessonDetails: LessonTypeModel;
  videoId: string;
  prevLesson: LessonTypeModel | null;
  nextLesson: LessonTypeModel | null;
  history: HistoryTypeModel | null;
};

const LearnLayout = ({
  course,
  slug,
  lessonId,
  lessonDetails,
  videoId,
  prevLesson,
  nextLesson,
  history,
}: LearnLayoutProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={
        isExpanded ? "grid gap-6" : "grid gap-6 lg:grid-cols-[1fr_350px]"
      }
    >
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

          {prevLesson && (
            <Link
              href={`/course/${slug}/learn/${prevLesson._id}`}
              aria-label="Bài trước"
              className="absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-all duration-300 hover:scale-105 active:scale-95 group-hover:opacity-100 md:block"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm">
                <ChevronLeft className="size-6" />
              </div>
            </Link>
          )}

          {nextLesson && (
            <Link
              href={`/course/${slug}/learn/${nextLesson._id}`}
              aria-label="Bài tiếp theo"
              className="absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-all duration-300 hover:scale-105 active:scale-95 group-hover:opacity-100 md:block"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm">
                <ChevronRight className="size-6" />
              </div>
            </Link>
          )}
        </div>

        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium text-card-foreground transition-colors hover:bg-muted active:scale-[0.98]"
          >
            {isExpanded ? (
              <>
                <Minimize2 className="size-4" />
                Thu gọn video
              </>
            ) : (
              <>
                <Maximize2 className="size-4" />
                Mở rộng video
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 md:hidden">
          {prevLesson ? (
            <Link
              href={`/course/${slug}/learn/${prevLesson._id}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium active:scale-[0.98] active:bg-muted"
            >
              <ChevronLeft className="size-4" />
              Bài trước
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/course/${slug}/learn/${nextLesson._id}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground active:scale-[0.98] active:opacity-90"
            >
              Bài tiếp theo
              <ChevronRight className="size-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="rounded-xl border border-border bg-card p-6 text-card-foreground">
          <h1>{lessonDetails.title}</h1>
        </div>

        {lessonDetails.content && (
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold">Nội dung bài học</h2>
            <article
              className="prose max-w-none prose-a:text-primary prose-a:no-underline hover:prose-a:underline dark:prose-invert"
              dangerouslySetInnerHTML={{
                __html: lessonDetails.content,
              }}
            />
          </div>
        )}
      </div>

      {!isExpanded && (
        <LessonSidebar
          course={course}
          slug={slug}
          lessonId={lessonId}
          history={history}
        />
      )}
    </div>
  );
};

export default LearnLayout;
