import { ConnectToDatabase } from "@/lib/db";

export async function getCheckout(code: string) {
  try {
    await ConnectToDatabase();
    const checkout = 
  } catch (error) {
    console.log(error);
  }
}
