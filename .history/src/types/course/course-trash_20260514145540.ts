import { CourseStatus } from "./course-status.enum";

export type CourseTrashType = {
  _id: string;
  title: string;
  image?: string;
  status: CourseStatus;
  price?: number;
  createdAt: Date;
};
