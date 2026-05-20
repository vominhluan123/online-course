"use client";
import { addLecture } from "@/actions/leture/create-leture";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { CourseTypeModel, LessonTypeModel } from "@/lib/db";
import { LessonType } from "@/types/course";

import {
  BookOpen,
  CirclePlay,
  Clock3,
  FileText,
  Lock,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import { MouseEvent } from "react";
import { toast } from "sonner";

const CourseUpdateContent = ({ course }: { course: CourseTypeModel }) => {
  const letures = course.lectures;
  const handlerAddNewLecture = async () => {
    const res = await addLecture({
      title: "Chương mới",
      courseId: course._id.toString(),
    });
    if (res?.success) {
      toast.success("Thêm chương mới thành công");
    }
  };
  const handlerDeleteLecture = async (
    e: MouseEvent<HTMLDivElement, MouseEvent>,
    courseId: string,
  ) => {
    try {
      
    } catch (error) {
      
    }
  };
  return (
    <>
      <Accordion type="single" collapsible className="space-y-4">
        {letures.map((lecture: any, lectureIndex: number) => (
          <AccordionItem
            key={lecture._id}
            value={lecture._id.toString()}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <AccordionTrigger className="px-5 py-4 hover:no-underline">
              <div className="flex flex-1 items-start justify-between gap-4 text-left">
                {/* LEFT */}
                <div className="flex flex-1 items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BookOpen className="size-5" />
                  </div>

                  <div className="min-w-0 flex-1 space-y-1">
                    <h3 className="font-semibold">
                      Chương {lectureIndex + 1}: {lecture.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{lecture.lessons?.length || 0} bài học</span>
                    </div>
                  </div>
                </div>

                {/* ACTIONS */}
                <div
                  className="flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-muted">
                    <Pencil className="size-4" />
                  </div>

                  <div
                    className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-muted"
                    onClick={handlerDeleteLecture}
                  >
                    <Trash2 className="size-4 text-destructive" />
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="border-t border-border bg-muted/20">
                {/* lessons */}
                {lecture.lessons?.map(
                  (lesson: LessonTypeModel, lessonIndex: number) => {
                    const isPreview = lesson.preview;
                    const isLocked = !isPreview;
                    return (
                      <div
                        key={lesson._id.toString()}
                        className="group flex items-center justify-between gap-4 border-b border-border px-5 py-4 transition-colors hover:bg-muted/40 last:border-b-0"
                      >
                        {/* LEFT */}
                        <div className="flex items-center gap-4">
                          <div className="flex size-8 items-center justify-center rounded-full border border-border bg-card text-sm font-medium">
                            {lessonIndex + 1}
                          </div>

                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-sm font-medium">
                                {lesson.title}
                              </h4>

                              {isPreview && (
                                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                  Preview
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              {lesson.type === LessonType.TEXT ? (
                                <FileText className="size-3.5" />
                              ) : (
                                <CirclePlay className="size-3.5" />
                              )}

                              <Clock3 className="size-3.5" />

                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-2">
                          {isLocked && (
                            <Lock className="size-4 text-muted-foreground" />
                          )}

                          <Button size="icon" variant="ghost">
                            <Pencil className="size-4" />
                          </Button>

                          <Button size="icon" variant="ghost">
                            <Trash2 className="size-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    );
                  },
                )}

                {/* ADD LESSON */}
                <div className="p-4">
                  <Button variant="outline" className="w-full border-dashed">
                    <Plus className="mr-2 size-4" />
                    Thêm bài học
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button
        className="mt-5"
        onClick={handlerAddNewLecture}
        size={"lg"}
        variant={"custom"}
      >
        Thêm chương mới
      </Button>
    </>
  );
};

export default CourseUpdateContent;
