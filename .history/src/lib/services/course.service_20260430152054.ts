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

export async function getCourseBySlug(slug: string) {
  try {
    await ConnectToDatabase();
    const course = await Course.findOne({ slug }).lean();
    return course;
  } catch (error) {
    console.log(error);
    return null;
  }
}
