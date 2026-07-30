import { ConnectToDatabase, Order } from "@/lib/db";

export async function name() {
  try {
    await ConnectToDatabase();
    const orders = await Order.find()
  } catch (error) {}
}
