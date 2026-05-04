import { CourseStatus } from "./course-status.enum";

export type CourseClient = {
  _id: string;
  title: string;
  slug: string;
  image?: string;
  intro_url?: string;
  desc?: string;
  price?: number;
  sale_price?: number;
  status?: CourseStatus;
  info?: {
    requirements: string[];
    benefits: string[];
  };
};
