import { ConnectToDatabase } from "@/lib/db";

export async function getCheckout(code:string) {
  try {
    ConnectToDatabase
  } catch (error) {
    console.log(error);
  }
  
}