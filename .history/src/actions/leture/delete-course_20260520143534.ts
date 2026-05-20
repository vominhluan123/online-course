"use server";

import { auth } from "@clerk/nextjs/server";

import { revalidatePath } from "next/cache";

import { ConnectToDatabase, Lecture } from "@/lib/db";

export async function deleteLecture(lectureId: string) {
  try {
    await ConnectToDatabase();

    const { userId } = await auth();

    if (!userId) {
      throw new Error("Không cho phép truy cập");
    }

    if (!lectureId) {
      throw new Error("Thiếu id chương học");
    }

    const lecture = await Lecture.findByIdAndUpdate(
      lectureId,
      {
        _destroy: true,
      },
      {
        new: true,
      },
    );

    if (!lecture) {
      throw new Error("Không tìm thấy chương học");
    }

    revalidatePath("/manage/course/cont");

    return {
      success: true,
      message: "Xóa chương học thành công",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Xóa chương học thất bại",
    };
  }
}
