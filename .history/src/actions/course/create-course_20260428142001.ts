"use server";

import { ConnectToDatabase, Course } from "@/lib/db";
import { getUserInfo } from "@/lib/services/user.service";
import { CreateCourseParams } from "@/types/course";
import { auth } from "@clerk/nextjs/server";

export async function createCourse(params: CreateCourseParams) {
  try {
    await ConnectToDatabase();
    const { userId } = await auth();
    if (!userId) throw new Error("Không cho phép truy cập");
    const user = await getUserInfo(userId);
    if (!user) throw new Error("Không tìm thấy user");
    const course = await Course.create({
      ...params,
      author: user._id,
    });
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
  }
}
