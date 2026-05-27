import { LessonType } from "../course";

export type UpdateLessonParams = {
  id: string;
  title?: string;
  order?: number;
  duration?: number;
  content?: string;
  video_url?: string;
  preview?: boolean;
  type?: LessonType;
  _destroy?: boolean;
};
