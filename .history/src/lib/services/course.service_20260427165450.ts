import { ConnectToDatabase } from "../db";

export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
     await ConnectToDatabase();
     const course = 
  } catch (error) {}
}
