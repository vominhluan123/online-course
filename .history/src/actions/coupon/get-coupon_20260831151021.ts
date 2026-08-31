"use server";
import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";

export async function getCoupon(params: any) {
  try {
    await ConnectToDatabase();
    const getAllCoupon = await Coupon.find(params);
    return JSON.parse(JSON.stringify(getAllCoupon));
  } catch (error) {
    console.log(error);
  }
}
