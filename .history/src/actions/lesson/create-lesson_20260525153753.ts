"use server";

import { AddLessonParams } from "@/types/lesson/lesson-params";

export function createLesson(params: AddLessonParams) {
  try {
    connect
  } catch (error) {
    console.log(error);
  }
}
