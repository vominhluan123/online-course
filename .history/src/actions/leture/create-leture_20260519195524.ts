import { ConnectToDatabase, Course, Lecture } from "@/lib/db";
import { AddLectureParams } from "@/types/letute";

export async function name(params: AddLectureParams) {
  try {
    await ConnectToDatabase();
    // tìm số thứ tự cuối
    const lastLecture = await Lecture.findOne({
      course: params.courseId,
    }).sort({ order: -1 });
    const nextOrder = lastLecture ? lastLecture.order + 1 : 1;
    // tạo lecture mới
    const lecture = await Lecture.create({
      title,
      course: params.courseId,
      order: nextOrder,
    });

    // push vào course
    await Course.findByIdAndUpdate(params.courseId,{
      $push: {
        lectures: lecture._id,
      },
    });
  } catch (error) {}
}
