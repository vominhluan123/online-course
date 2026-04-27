import { ConnectToDatabase } from "../db";

export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
     await ConnectToDatabase();
  } catch (error) {}
}
