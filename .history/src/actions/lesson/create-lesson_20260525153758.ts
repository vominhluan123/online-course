"use server";

import { ConnectToDatabase } from "@/lib/db";
import { AddLessonParams } from "@/types/lesson/lesson-params";

export function createLesson(params: AddLessonParams) {
  try {
    ConnectToDatabase()
  } catch (error) {
    console.log(error);
  }
}
