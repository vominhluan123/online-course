import { ConnectToDatabase, Course, CourseSchemaType } from "@/lib/db";

export async function getCourse(): Promise<CourseSchemaType[] | undefined> {
  try {
    await ConnectToDatabase();
    const courses = await Course.find().lean();
   return courses.map((c) => ({
     ...c,
     _id: c._id.toString(),
   }));
  } catch (error) {
    console.log(error);
  }
}
