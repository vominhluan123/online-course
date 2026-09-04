"use server";

import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";

export async function deleteCoupon(code: string) {
  try {
    await ConnectToDatabase();

    const coupon = await Coupon.findOne({ code }).lean();

    if (!coupon) {
      return null;
    }

    return JSON.parse(JSON.stringify(coupon));
  } catch (error) {
    console.log(error);
    return null;
  }
}
