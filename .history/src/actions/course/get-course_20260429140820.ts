import { ConnectToDatabase } from "@/lib/db";

export async function getCourse(params: type) {
  try {
    ConnectToDatabase();
    const course = await
  } catch (error) {
    console.log(error);
  }
}
