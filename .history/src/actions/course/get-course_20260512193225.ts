import { ConnectToDatabase, Course, CourseSchemaType } from "@/lib/db";
import { CourseStatus } from "@/types/course";

export async function getCourse(): Promise<CourseSchemaType[]> {
  try {
    await ConnectToDatabase();
      const course = await Course.find({
        status: CourseStatus.APPROVED,
        _destroy: false,
      });
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
    return [];
  }
}
