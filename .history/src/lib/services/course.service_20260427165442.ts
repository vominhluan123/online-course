import { ConnectToDatabase } from "../db";

export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
     awConnectToDatabase();
  } catch (error) {}
}
