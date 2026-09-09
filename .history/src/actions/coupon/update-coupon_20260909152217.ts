import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";
import { UpdateCouponParams } from "@/types/coupon/update-coupon";

export async function updateCoupon(params: UpdateCouponParams) {
  await ConnectToDatabase();
  const coupont = await Coupon.findOne({
    code: pa
  })
}
