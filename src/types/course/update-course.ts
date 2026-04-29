import { CourseStatus } from "./course-status.enum";

export type UpdateCourseParams = {
  id: string;
} & Partial<{
  title: string;
  slug: string;
  image: string;
  intro_url: string;
  desc: string;
  price: number;
  sale_price: number;
  status: CourseStatus;
}>;
