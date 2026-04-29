import { ConnectToDatabase, Course, CourseSchemaType } from "@/lib/db";

export async function getCourse(): Promise<CourseSchemaType[] | undefined> {
  try {
    await ConnectToDatabase();
    const course = await Course.find().le;
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
  }
}
