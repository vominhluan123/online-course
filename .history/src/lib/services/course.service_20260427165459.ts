import { ConnectToDatabase } from "../db";
import { Course } from "../db/models/course.model";

export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
     await ConnectToDatabase();
     const course = await Course
  } catch (error) {}
}
