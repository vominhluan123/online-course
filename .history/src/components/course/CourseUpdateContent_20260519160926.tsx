"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

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
import { Input } from "../ui/input";

const chapters = [
  {
    value: "chapter-1",
    title: "Giới thiệu React.js",
    lessons: [
      {
        title: "React là gì?",
        duration: "5 phút",
        preview: true,
        type: "video",
      },
      {
        title: "JSX cơ bản",
        duration: "10 phút",
        type: "article",
      },
      {
        title: "Props và Component",
        duration: "12 phút",
        locked: true,
        type: "video",
      },
    ],
  },

  {
    value: "chapter-2",
    title: "State và Props",
    lessons: [
      {
        title: "useState cơ bản",
        duration: "8 phút",
        type: "video",
      },
      {
        title: "Truyền props",
        duration: "6 phút",
        type: "article",
      },
    ],
  },
];

const CourseUpdateContent = () => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="chapter-1"
      className="space-y-4"
    >
      {chapters.map((chapter, chapterIndex) => (
        <AccordionItem
          key={chapter.value}
          value={chapter.value}
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
          <AccordionTrigger className="px-5 py-4 hover:no-underline">
            <div className="flex flex-1 items-start justify-between gap-4 text-left">
              {/* LEFT */}
              <div className="flex flex-1 items-start gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="size-5" />
                </div>

                <div className="space-y-1 flex-1 min-w-0">
                  <h3 className="font-semibold">
                    Chương {chapterIndex + 1}: {chapter.title}
                  </h3>
                  <Input
                    className="w-full"
                    onClick={(e) => e.stopPropagation()}
                    placeholder="Tên chương"
                  ></Input>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{chapter.lessons.length} bài học</span>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div
                className="flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="
    flex size-8 items-center justify-center
    rounded-md transition-colors
    hover:bg-muted
  "
                >
                  <Pencil className="size-4" />
                </div>

                <div
                  className="
    flex size-8 items-center justify-center
    rounded-md transition-colors
    hover:bg-muted
  "
                >
                  <Trash2 className="size-4 text-destructive" />
                </div>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="border-t border-border bg-muted/20">
              {chapter.lessons.map((lesson, lessonIndex) => (
                <div
                  key={lesson.title}
                  className="group flex items-center justify-between gap-4 border-b border-border px-5 py-4 transition-colors hover:bg-muted/40 last:border-b-0"
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full border border-border bg-card text-sm font-medium">
                      {lessonIndex + 1}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm font-medium">{lesson.title}</h4>

                        {lesson.preview && (
                          <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                            Preview
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {lesson.type === "article" ? (
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
                    {lesson.locked && (
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
              ))}

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

      {/* ADD CHAPTER */}
      <Button className="h-12 w-full border-dashed" variant="outline">
        <Plus className="mr-2 size-4" />
        Thêm chương học
      </Button>
    </Accordion>
  );
};

export default CourseUpdateContent;
