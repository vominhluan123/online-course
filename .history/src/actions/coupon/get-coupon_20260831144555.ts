import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";

export async function createCoupon(params: any) {
  try {
    await ConnectToDatabase();
    const newCoupon = await Coupon.fi(params);
    return JSON.parse(JSON.stringify(newCoupon));
  } catch (error) {
    console.log(error);
  }
}
