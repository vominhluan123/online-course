import { LessonType } from "../course";

export type AddLessonParams = {
  title: string;
  lecture: string;
  course: string;

  order?: number;
  duration?: number;

  content?: string;
  video_url?: string;

  preview?: boolean;

  type?: LessonType;
};
