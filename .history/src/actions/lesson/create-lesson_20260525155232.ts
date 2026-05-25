"use server";

import { ConnectToDatabase, Course, Lecture, Lesson } from "@/lib/db";
import { AddLessonParams } from "@/types/lesson/lesson-params";
import { revalidatePath } from "next/cache";

export async function createLesson(params: AddLessonParams) {
  const { course, lecture } = params;

  try {
    await ConnectToDatabase();

    const findCourse = await Course.findById(course);

    if (!findCourse) {
      return {
        success: false,
        message: "Không tìm thấy khoá học",
      };
    }

    const findLecture = await Lecture.findById(lecture);

    if (!findLecture) {
      return {
        success: false,
        message: "Không tìm thấy chương học",
      };
    }

    const newLesson = await Lesson.create({
      ...pa
    });

    revalidatePath(`/manage/course/content/${course}`);

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
