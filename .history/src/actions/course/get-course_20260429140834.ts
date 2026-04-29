import { ConnectToDatabase, Course } from "@/lib/db";

export async function getCourse(params: type) {
  try {
    await ConnectToDatabase();
    const course = await Course.fin
  } catch (error) {
    console.log(error);
  }
}
