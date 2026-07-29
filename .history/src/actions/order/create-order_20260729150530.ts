import { ConnectToDatabase } from "@/lib/db";
import { CreateOrderParams } from "@/types/order";

export async function createOrder(params: CreateOrderParams) {
  try {
    await ConnectToDatabase();
    const newOrder = 
  } catch (error) {
    console.log(error);
  }
}
