"use client";
import { updateLessonProgress } from "@/actions/history/Update-Progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { CourseWithLecturesType } from "@/lib/db";
import { HistoryTypeModel } from "@/lib/db/models/history.model";
import { CirclePlay } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LessonSidebar({
  course,
  slug,
  lessonId,
  history,
}: {
  course: CourseWithLecturesType;
  slug: string;
  lessonId: string;
  history: HistoryTypeModel | null;
}) {
  const router = useRouter();
  const handleCompleteLesson = async (
    lessonId: string,
    checked: boolean | string,
  ) => {
    try {
      await updateLessonProgress({
        courseId: course._id.toString(),
        lessonId,
        completed: checked === true,
      });
      router.refresh();
    } catch (error) {}
  };
  const lectures = course.lectures;
  return (
    <aside className="sticky top-6 flex h-auto max-h-[70vh] flex-col overflow-hidden rounded-xl border border-border bg-card lg:h-[calc(100vh-3rem)] lg:max-h-none">
      <div className="border-b border-border px-4 py-3">
        <Progress value={history?.percent ?? 0} className="mb-5" />
        <p className="mb-4 text-xs text-muted-foreground">
          {history?.percent ?? 0}% hoàn thành
        </p>
        <h2 className="text-sm font-semibold">Nội dung khóa học</h2>
      </div>
      <div className="flex-1 custom-scrollbar overflow-y-auto">
        <Accordion
          type="multiple"
          defaultValue={course.lectures?.[0]?._id?.toString()}
          className="w-full"
        >
          {lectures?.map((lecture) => (
            <AccordionItem
              key={lecture._id.toString()}
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
                  {lecture.lessons?.map((lesson) => {
                    const isActive = lesson._id.toString() === lessonId;
                    const href = `/course/${slug}/learn/${lesson._id}`;
                    return (
                      <div
                        key={lesson._id.toString()}
                        className={`
        group flex items-start gap-3 rounded-md border-l-2 px-3 py-2.5 text-sm transition-colors
        ${
          isActive
            ? "border-primary bg-primary/10 text-primary"
            : "border-transparent text-foreground hover:bg-muted/70"
        }
      `}
                      >
                        {/* Checkbox: KHÔNG navigate */}
                        <Checkbox
                          className="mt-1"
                          onCheckedChange={(checked) => {
                            handleCompleteLesson(
                              lesson._id.toString(),
                              checked,
                            );
                          }}
                        />

                        {/* Click vào icon + text mới navigate */}
                        <Link href={href} className="flex gap-3 flex-1">
                          <CirclePlay
                            className={`mt-0.5 size-4 shrink-0 transition-colors
            ${
              isActive
                ? "text-primary"
                : "text-muted-foreground group-hover:text-foreground"
            }
          `}
                          />

                          <div className="min-w-0 flex-1">
                            <p className="line-clamp-2 font-medium leading-snug">
                              {lesson.title}
                            </p>

                            <p
                              className={`mt-1 text-xs ${isActive ? "text-primary/80" : "text-muted-foreground"}`}
                            >
                              {lesson.duration} phút
                            </p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </aside>
  );
}
