"use server";

import { ConnectToDatabase, Lesson } from "@/lib/db";
import { UpdateLessonParams } from "@/types/lesson/leeson-update";
import { revalidatePath } from "next/cache";

export async function updateLesson(
  params: UpdateLessonParams & { courseSlug: string },
) {
  const { id, ...updateData } = params;

  try {
    await ConnectToDatabase();

    const lesson = await Lesson.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!lesson) {
      return {
        success: false,
        message: "Không tìm thấy bài học",
      };
    }
    revalidatePath(`/manage/course/content/${lesson.course}`);
    console.log("lesson.course:", lesson.course);
    console.log("revalidate path:", `/manage/course/content/${lesson.course}`);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(lesson)),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Cập nhật bài học thất bại",
    };
  }
}
