import { ConnectToDatabase, Order } from "@/lib/db";

export async function getAllOrders():Promise<Or {
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
