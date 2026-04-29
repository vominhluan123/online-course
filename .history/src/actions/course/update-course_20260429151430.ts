"use server";

import { ConnectToDatabase, Course } from "@/lib/db";
import { UpdateCourseParams } from "@/types/course";

export async function updateCourse(params: UpdateCourseParams) {
  try {
    await ConnectToDatabase();
    const { id, ...updateData } = params;
    if (!id) throw new Error("Thiếu id");
    const course = await Course.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return JSON.parse(JSON.stringify(course));
    re
  } catch (error) {
    console.log(error);
  }
}
