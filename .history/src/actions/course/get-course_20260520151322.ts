import { ConnectToDatabase, Course, CourseSchemaType } from "@/lib/db";
import { CourseStatus } from "@/types/course";

// admin
export async function getAllCourses(): Promise<CourseSchemaType[]> {
  try {
    await ConnectToDatabase();

    const course = await Course.find({
      _destroy: false,
    }).populate({
      path: "lectures",
      match: {
        _destroy: false,
      },
    });

    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
    return [];
  }
}

// public
export async function getPublicCourse(): Promise<CourseSchemaType[]> {
  try {
    await ConnectToDatabase();

    const course = await Course.find({
      status: CourseStatus.APPROVED,
      _destroy: false,
    }).populate({
      path: "lectures",
      match: {
        _destroy: false,
      },
    });

    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
    return [];
  }
}

// trash course
export async function getTrashCourses(): Promise<CourseSchemaType[]> {
  try {
    await ConnectToDatabase();

    const course = await Course.find({
      _destroy: true,
    });

    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
    return [];
  }
}
