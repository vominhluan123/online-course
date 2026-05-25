import { LessonType } from "../course";

export type AddLessonParams = {
  title: string;
  lecture: string;
  course: string;
  type?: LessonType;
  order?: number;
  preview?: boolean;
  duration?: number;
  content?: string;
  video_url?: string;
};
