"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { CourseTypeModel } from "@/lib/db";

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
  const letures = course.lectures
  return (
   <>
    {letures.map((leture)=>(
      
    ))}
   </>
   
  );
};

export default CourseUpdateContent;
