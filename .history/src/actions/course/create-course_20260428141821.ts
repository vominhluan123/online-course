"use server";

import { ConnectToDatabase, Course } from "@/lib/db";
import { getUserInfo } from "@/lib/services/user.service";
import { CreateCourseParams } from "@/types/course";
import { auth } from "@clerk/nextjs/server";

export async function createCourse(params: CreateCourseParams) {
  try {
    await ConnectToDatabase();
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
    const user = await getUserInfo(userId);

    const course = await Course.create(params);
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
  }
}
