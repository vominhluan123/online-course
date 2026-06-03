import { ConnectToDatabase } from "@/lib/db";

export async function getLessonBySlug({
  slug,
  lessonId,
}: {
  slug: string;
  lessonId: string;
}) {
  try {
    await ConnectToDatabase();
  } catch (error) {}
}
