import { ConnectToDatabase, Course, CourseSchemaType } from "@/lib/db";

export async function getCourse(): Promise<CourseSchemaType[] | undefined> {
  try {
    await ConnectToDatabase();
    const course = await Course.find().lean();
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
  }
}
