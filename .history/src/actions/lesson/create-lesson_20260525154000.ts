"use server";

import { ConnectToDatabase, Course } from "@/lib/db";
import { AddLessonParams } from "@/types/lesson/lesson-params";

export async function createLesson(params: AddLessonParams) {
  const {course,lecture,title,order,preview,type} = params
  try {
    await ConnectToDatabase();
    const findCourse = await Course.fin
  } catch (error) {
    console.log(error);
  }
}
