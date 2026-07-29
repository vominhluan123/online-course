import { ConnectToDatabase } from "@/lib/db";
import { CreateOrderParams } from "@/types/order";

export async function createOrder(params: CreateOrderParams) {
  try {
    ConnectToDatabase()
  } catch (error) {
    console.log(error);
  }
}
