import { ConnectToDatabase } from "@/lib/db";

export async function getCourse(params: type) {
  try {
    await ConnectToDatabase();
    const course = await
  } catch (error) {
    console.log(error);
  }
}
