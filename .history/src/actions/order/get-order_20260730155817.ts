import { ConnectToDatabase } from "@/lib/db";

export async function name() {
  try {
   await ConnectToDatabase()
  } catch (error) {}
}
