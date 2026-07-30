import { CourseStatus } from "./course-status.enum";

export type OrderTableType = {
  _id: string;
  code: string;
  course: string;
  user: number;
  price: str;
  slug: string;
  createdAt: Date;
};
