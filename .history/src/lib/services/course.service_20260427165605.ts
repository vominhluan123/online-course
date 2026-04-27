import { ConnectToDatabase, Course } from "../db";

export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
    await ConnectToDatabase();
    const course = await Course.findOne(slug);
    return course;
  } catch (error) {}
}
