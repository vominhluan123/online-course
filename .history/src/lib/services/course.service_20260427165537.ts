import { ConnectToDatabase, Course } from "../db";

export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
    await ConnectToDatabase();
    const course = await Course;
  } catch (error) {}
}
