"use server";

import { ConnectToDatabase, Course, Lecture, Lesson } from "@/lib/db";
import { AddLessonParams } from "@/types/lesson/lesson-params";

export async function createLesson(params: AddLessonParams) {
  const { course, lecture, title, order, preview, type } = params;
  try {
    await ConnectToDatabase();
    const findCourse = await Course.findById(course);
    if (!findCourse) return;
    const findLecture = await Lecture.findById(lecture);
    if (!findLecture) return;
    const newLesson = await Lesson.create
  } catch (error) {
    console.log(error);
  }
}
