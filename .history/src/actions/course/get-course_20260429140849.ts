import { ConnectToDatabase, Course } from "@/lib/db";

export async function getCourse(params: type) {
  try {
    await ConnectToDatabase();
    const course = await Course.find();
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
  }
}
