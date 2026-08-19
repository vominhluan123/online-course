import { ConnectToDatabase, Order } from "@/lib/db";

export async function getCheckout(code: string) {
  try {
    await ConnectToDatabase();
    const checkout = await Order.fin
  } catch (error) {
    console.log(error);
  }
}
