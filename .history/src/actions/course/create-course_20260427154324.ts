"use server";

import { ConnectToDatabase } from "@/lib/db";
import { CreateCourseParams } from "@/types/course";

export async function createCourse(params: CreateCourseParams) {
  try {
    ConnectToDatabase()
    const course = await Cour
  } catch (error) {}
}
