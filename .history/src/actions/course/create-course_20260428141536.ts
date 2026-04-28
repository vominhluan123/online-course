"use server";

import { ConnectToDatabase, Course } from "@/lib/db";
import { getUserInfo } from "@/lib/services/user.service";
import { CreateCourseParams } from "@/types/course";
import { auth } from "@clerk/nextjs/server";

export async function createCourse(params: CreateCourseParams) {
  try {
    await ConnectToDatabase();
    const { userId } = auth();
    const user = await getUserInfo(userId);
     if (!user) throw new Error("Unauthorized");

    const course = await Course.create(params);
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
  }
}
