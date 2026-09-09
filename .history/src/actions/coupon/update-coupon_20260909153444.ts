"use server";
import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";
import { UpdateCouponParams } from "@/types/coupon/update-coupon";
import mongoose from "mongoose";

export async function updateCoupon(params: UpdateCouponParams) {
  await ConnectToDatabase();
  const coupon = await Coupon.findOne({
    code: params.code,
  });
  if (!coupon) {
    return {
      success: false,
      message: "Không tìm thấy coupon",
    };
  }
  coupon.title = params.title;
  coupon.startDate = params.startDate;
  coupon.endDate = params.endDate;
  coupon.type = params.type;
  coupon.value = params.value;
  coupon.active = params.active;
  coupon.maxUses = params.maxUses;
  coupon.course = new mongoose.Types.ObjectId(params.courseId);
  await coupon.save();
  return {
    success: true,
    data: JSON.parse(JSON.stringify(coupon)),
  };
}
