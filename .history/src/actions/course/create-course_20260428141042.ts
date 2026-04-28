"use server";

import { ConnectToDatabase, Course } from "@/lib/db";
import { CreateCourseParams } from "@/types/course";

export async function createCourse(params: CreateCourseParams) {
  try {
    await ConnectToDatabase();
    const user = await getCu
    const course = await Course.create(params);
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
  }
}
