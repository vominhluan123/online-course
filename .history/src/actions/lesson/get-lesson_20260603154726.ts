import { ConnectToDatabase } from "@/lib/db";

export async function getLessonBySlug({
  slug,
  course,
}: {
  slug: string;
  course: string;
}) {
  try {
    ConnectToDatabase()
  } catch (error) {
    
  }
}
