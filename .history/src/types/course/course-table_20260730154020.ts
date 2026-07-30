import { CourseStatus } from "./course-status.enum";

export type CourseTableType = {
  _id: string;
  code: string;
  course: string;
  user: number;
  price: CourseStatus;
  slug: string;
  createdAt: Date;
};
