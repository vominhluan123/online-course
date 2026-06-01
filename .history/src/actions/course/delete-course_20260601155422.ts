"use server";

import { auth } from "@clerk/nextjs/server";

import { revalidatePath } from "next/cache";

import { ConnectToDatabase, Course } from "@/lib/db";

export async function deleteCourse(id: string) {
  try {
    await ConnectToDatabase();

    const { userId } = await auth();

    if (!userId) {
      throw new Error("Không cho phép truy cập");
    }

    if (!id) {
      throw new Error("Thiếu id khóa học");
    }
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      throw new Error("Không tìm thấy khóa học");
    }
    revalidatePath("/");
    revalidatePath("/study");
    revalidatePath("/manage/course");
    revalidatePath("/manage/course/trash");
    return {
      success: true,
      message: "Xóa khóa học thành công",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Xóa khóa học thất bại",
    };
  }
}
