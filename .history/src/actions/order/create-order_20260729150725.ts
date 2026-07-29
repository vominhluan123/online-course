import { ConnectToDatabase, Order } from "@/lib/db";
import { CreateOrderParams } from "@/types/order";

export async function createOrder(params: CreateOrderParams) {
  try {
    await ConnectToDatabase();
    const newOrder = await Order.create
  } catch (error) {
    console.log(error);
  }
}
