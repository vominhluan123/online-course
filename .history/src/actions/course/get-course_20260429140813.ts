import { ConnectToDatabase } from "@/lib/db";

export async function getCourse(params: type) {
  try {
    ConnectToDatabase();
  } catch (error) {
    console.log(error);
  }
}
