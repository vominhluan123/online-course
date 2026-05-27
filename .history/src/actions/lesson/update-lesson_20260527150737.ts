"use server";

import { ConnectToDatabase, Lesson } from "@/lib/db";
import { UpdateLessonParams } from "@/types/lesson/leeson-update";

export async function createLesson(params: UpdateLessonParams) {
  const { id,...updatedata } = params;
  try {
    await ConnectToDatabase();
    const res = await Lesson.findByIdAndUpdate(id,updatedata);
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
