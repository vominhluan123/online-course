"use server";

import { ConnectToDatabase, Course, Lecture, Lesson } from "@/lib/db";
import { UpdateLessonParams } from "@/types/lesson/leeson-update";
import { revalidatePath } from "next/cache";

export async function createLesson(params: UpdateLessonParams) {
  try {
    await ConnectToDatabase();

    
    return {
      success: true,
      data: JSON.parse(JSON.stringify(newLesson)),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Tạo bài học thất bại",
    };
  }
}
