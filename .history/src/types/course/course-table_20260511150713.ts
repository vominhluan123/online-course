import { CourseStatus } from "./course-status.enum";

export type CourseTableType = {
  _id: string;
  image?: string;
  title: string;
  price?: number;
  status: CourseStatuss;
  createdAt: Date;
};
