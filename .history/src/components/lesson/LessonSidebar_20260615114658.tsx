"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { CirclePlay } from "lucide-react";
import Link from "next/link";

export default function LessonSidebar({ course, slug, lessonId, progress }) {
  return (
    <aside className="sticky top-6 flex h-auto max-h-[70vh] flex-col overflow-hidden rounded-xl border border-border bg-card lg:h-[calc(100vh-3rem)] lg:max-h-none">
      {/* PROGRESS (server truyền xuống) */}
      <div className="border-b border-border px-4 py-3">
        <Progress value={progress} className="mb-5" />
        <h2 className="text-sm font-semibold">Nội dung khóa học</h2>
      </div>

      {/* CONTENT */}
      <div className="flex-1 custom-scrollbar overflow-y-auto">
        <Accordion
          type="single"
          collapsible
          defaultValue={course.lectures?.[0]?._id?.toString()}
          className="w-full"
        >
          {course.lectures?.map((lecture) => (
            <AccordionItem key={lecture._id} value={lecture._id.toString()}>
              <AccordionTrigger className="px-4 py-3 hover:bg-muted/50">
                <div className="text-left">
                  <h3 className="text-sm font-semibold">{lecture.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {lecture.lessons?.length || 0} bài học
                  </p>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="px-2 space-y-1">
                  {lecture.lessons?.map((lesson) => {
                    const isActive = lesson._id.toString() === lessonId;
                    return (
                      <div key={lesson._id} className="flex gap-3 px-3 py-2.5">
                        {/* CHECKBOX (CLIENT ONLY) */}
                        <Checkbox
                          checked={lesson.isCompleted}
                          onCheckedChange={(checked) => {
                            console.log(
                              "update progress:",
                              lesson._id,
                              checked,
                            );
                            // TODO API update
                          }}
                        />

                        {/* NAV */}
                        <Link
                          href={`/course/${slug}/learn/${lesson._id}`}
                          className={`flex flex-1 gap-3 ${
                            isActive ? "text-primary" : ""
                          }`}
                        >
                          <CirclePlay className="size-4 mt-0.5" />

                          <div>
                            <p className="text-sm font-medium">
                              {lesson.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
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
