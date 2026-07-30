import { CourseStatus } from "./course-status.enum";

export type CourseTableType = {
  _id: string;
  code: string;
  title: string;
  price?: number;
  status: CourseStatus;
  slug: string;
  createdAt: Date;
};
