import { CourseStatus } from "./course-status.enum";

type UpdateCourseParams = {
  id: string; // 🔥 bắt buộc
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
