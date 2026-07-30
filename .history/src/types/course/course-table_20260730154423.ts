import { CourseStatus } from "./course-status.enum";

export type OrderTableType = {
  _id: string;
  code: string;
  course: string;
  email: string;
  price: number;
  action: Orde
  salePirce?: number;
  createdAt: Date;
};
