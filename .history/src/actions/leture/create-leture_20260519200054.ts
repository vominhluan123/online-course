import { ConnectToDatabase, Course, Lecture } from "@/lib/db";
import { AddLectureParams } from "@/types/letute";

export async function addLecture(params: AddLectureParams) {
  const { title, courseId } = params;

  try {
    await ConnectToDatabase();

    const lastLecture = await Lecture.findOne({
      course: courseId,
    }).sort({ order: -1 });

    const nextOrder = lastLecture ? lastLecture.order + 1 : 1;

    const lecture = await Lecture.create({
      title,
      course: courseId,
      order: nextOrder,
    });

    await Course.findByIdAndUpdate(courseId, {
      $push: {
        lectures: lecture._id,
      },
    });

    return {
      success: true,
      lecture,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
    };
  }
}
