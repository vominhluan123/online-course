import { ConnectToDatabase, Order } from "@/lib/db";

export async function getAllOrders() {
  try {
    await ConnectToDatabase();
    const orders = await Order.find()
      .populate("course")
      .populate("user")
      .lean();
    return orders;
  } catch (error) {
    console.log(error);
  }
}
