import { LectureSchemaType } from "@/lib/db";

export type StudyCourseType = {
  _id: string;

  course: {
    _id: string;
    title: string;
    image?: string;
    slug: string;
    lectures?: LectureSchemaType;
  };

  percent: number;

  completed: boolean;

  currentLesson: string;
};
