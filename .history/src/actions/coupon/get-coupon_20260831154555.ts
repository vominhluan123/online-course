"use server";

import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";
import { CouponTableType } from "@/types/coupon";

export async function getCoupon(): Promise<CouponTableType[]> {
  try {
    await ConnectToDatabase();

    const coupons = await Coupon.find({
      _destroy: false,
    })
      .populate("course", "title")
      .sort({ createdAt: -1 })
      .lean();

    return coupons.map((coupon) => ({
      _id: coupon._id.toString(),
      title: coupon.title,
      code: coupon.code,
      startDate: coupon.startDate.toISOString(),
      endDate: coupon.endDate.toISOString(),
      type: coupon.type,
      value: coupon.value,
      active: coupon.active,
      maxUses: coupon.maxUses,
      usedCount: coupon.usedCount,
      courseTitle: coupon.course?.title ?? "Không xác định",
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
}
