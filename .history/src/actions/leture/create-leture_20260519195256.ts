import { ConnectToDatabase } from "@/lib/db";

export async function name(params: Add) {
  try {
    await ConnectToDatabase();
  } catch (error) {}
}
