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
import { toast } from "sonner";

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
    console.log(res);
  };
  return (
    <>
      <Accordion type="single" collapsible className="space-y-4">
        {letures.map((lecture: any, lectureIndex: number) => (
          return()
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
