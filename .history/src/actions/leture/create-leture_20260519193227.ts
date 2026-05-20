import { ConnectToDatabase } from "@/lib/db";

export async function name(params: any) {
  try {
    ConnectToDatabase()
  } catch (error) {
    
  }
}
