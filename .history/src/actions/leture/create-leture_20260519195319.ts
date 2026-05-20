import { ConnectToDatabase, Lecture } from "@/lib/db";
import { AddLectureParams } from "@/types/letute";

export async function name(params: AddLectureParams) {
  try {
    await ConnectToDatabase();
    // tìm số thứ tự cuối
    const lastLecture = await Lecture.findOne({
      course: courseId,
    }).sort({ order: -1 });
  } catch (error) {}
}
