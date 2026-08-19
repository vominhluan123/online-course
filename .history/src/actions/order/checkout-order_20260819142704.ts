import { ConnectToDatabase } from "@/lib/db";

export async function getCheckout(code: string) {
  try {
    await ConnectToDatabase();
    
  } catch (error) {
    console.log(error);
  }
}
