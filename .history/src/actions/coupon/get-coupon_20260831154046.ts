"use server";
import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";
import { CouponTableType } from "@/types/coupon";

export async function getCoupon(params: CouponTableType) {
  try {
    await ConnectToDatabase();
    const getAllCoupon = await Coupon.find(params);
    return JSON.parse(JSON.stringify(getAllCoupon));
  } catch (error) {
    console.log(error);
  }
}
