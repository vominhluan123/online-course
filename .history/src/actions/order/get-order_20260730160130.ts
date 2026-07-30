import { ConnectToDatabase, Order } from "@/lib/db";

export async function getAllOrders() {
  try {
    await ConnectToDatabase();
    const orders = await Order.find().po;
    return orders;
  } catch (error) {
    console.log(error);
  }
}
