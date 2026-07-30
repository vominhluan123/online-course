import { ConnectToDatabase, Order } from "@/lib/db";
import { OrderResponse } from "@/types/order";

export async function getAllOrders():Promise<OrderResponse[]> {
  try {
    await ConnectToDatabase();
    const orders = await Order.find()
      .populate("course")
      .populate("user")
      .sort({
        createdAt: -1,
      })
      .lean();
    return JSON.parse(JSON.stringify(orders));
  } catch (error) {
    console.log(error);
    return [];
  }
}
