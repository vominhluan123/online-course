import { ConnectToDatabase, Order } from "@/lib/db";

export async function getCheckout(code: string) {
  try {
    await ConnectToDatabase();
    const checkout = await Order.findOne({
      code,
    }).populate;
    return JSON.parse(JSON.stringify(checkout));
  } catch (error) {
    console.log(error);
  }
}
