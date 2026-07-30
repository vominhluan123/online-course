import { ConnectToDatabase, Order } from "@/lib/db";

export async function name() {
  try {
    await ConnectToDatabase();
    const orders = await Order.find();
    return orders;
  } catch (error) {
    console.log(error);
  }
}
