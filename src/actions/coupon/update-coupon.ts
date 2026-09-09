"use server";

import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";
import { UpdateCouponParams } from "@/types/coupon/update-coupon";
import mongoose from "mongoose";

export async function updateCoupon(params: UpdateCouponParams) {
  try {
    await ConnectToDatabase();

    const { code, courseId, ...updateData } = params;

    const coupon = await Coupon.findOneAndUpdate(
      { code },
      {
        ...updateData,
        course: new mongoose.Types.ObjectId(courseId),
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!coupon) {
      return {
        success: false,
        message: "Không tìm thấy coupon",
      };
    }

    return {
      success: true,
      data: JSON.parse(JSON.stringify(coupon)),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Cập nhật coupon thất bại",
    };
  }
}
