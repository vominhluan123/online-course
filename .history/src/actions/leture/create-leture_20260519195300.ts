import { ConnectToDatabase } from "@/lib/db";
import { AddLectureParams } from "@/types/letute";

export async function name(params: AddLectureParams) {
  try {
    await ConnectToDatabase();
  } catch (error) {}
}
