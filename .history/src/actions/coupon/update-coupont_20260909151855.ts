import { CouponFormData } from "@/types/coupon";
import { UpdateCouponParams } from "@/types/coupon/update-coupon";

export async function upadateCoupont(params: UpdateCouponParams) {}
export type UpdateCouponParams = CouponFormData & {
  code: string;
};