import { CourseStatus } from "./course-status.enum";

export type CourseTrashType = {
  _id: string;
  title: string;
  deleted?: boolean;
  image?: string;
  status: CourseStatus;
  createdAt: Date;
};
