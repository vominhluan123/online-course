"use server";

import { ConnectToDatabase, Lecture } from "@/lib/db";

import { revalidatePath } from "next/cache";

export async function updateLecture(params: UpdateLectureParams) {
  try {
    await ConnectToDatabase();

    if (!id) {
      throw new Error("Thiếu id");
    }

    const lecture = await Lecture.findByIdAndUpdate(id, data, {
      new: true,
    });

    revalidatePath("/manage/course");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(lecture)),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Cập nhật chương học thất bại",
    };
  }
}
