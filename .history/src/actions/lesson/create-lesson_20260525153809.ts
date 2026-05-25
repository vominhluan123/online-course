"use server";

import { ConnectToDatabase } from "@/lib/db";
import { AddLessonParams } from "@/types/lesson/lesson-params";

export async function createLesson(params: AddLessonParams) {
  try {
    await ConnectToDatabase();
  } catch (error) {
    console.log(error);
  }
}
