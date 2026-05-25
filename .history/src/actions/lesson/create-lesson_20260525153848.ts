"use server";

import { ConnectToDatabase } from "@/lib/db";
import { AddLessonParams } from "@/types/lesson/lesson-params";

export async function createLesson(params: AddLessonParams) {
  const {course,lecture,title,order,preview,type} = params
  try {
    await ConnectToDatabase();
  } catch (error) {
    console.log(error);
  }
}
