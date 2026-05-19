"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BookOpen, CirclePlay, Clock3, FileText, Lock } from "lucide-react";

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
          className="overflow-hidden rounded-2xl border bg-card border-border"
        >
          <AccordionTrigger className="px-5 py-4 hover:no-underline">
            <div className="flex flex-1 items-start gap-4 text-left">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="size-5" />
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold">
                  Chương {chapterIndex + 1}: {chapter.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{chapter.lessons.length} bài học</span>
                </div>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="border-t bg-muted/20 border-b">
              {chapter.lessons.map((lesson, lessonIndex) => (
                <div
                  key={lesson.title}
                  className="flex items-center justify-between gap-4 border-b px-5 py-4 last:border-b-0 hover:bg-muted/40"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full border bg-background text-sm font-medium">
                      {lessonIndex + 1}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium">{lesson.title}</h4>

                        {lesson.preview && (
                          <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary">
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

                  {lesson.locked ? (
                    <Lock className="size-4 text-muted-foreground" />
                  ) : (
                    <CirclePlay className="size-5 text-primary" />
                  )}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CourseUpdateContent;
