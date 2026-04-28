import { ConnectToDatabase, Course } from "../db";

export async function getCourseById(id: string) {
  try {
    await ConnectToDatabase();
    const course = await Course.findById(id);
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
    return null;
  }
}
