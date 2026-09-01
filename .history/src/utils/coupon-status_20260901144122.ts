import { CouponStatus } from "@/types/coupon";

export const getCouponStatus = (
  active: boolean,
  startDate: string,
  endDate: string,
): CouponStatus => {
  if (!active) {
    return CouponStatus.INACTIVE;
  }

  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) {
    return CouponStatus.UPCOMING;
  }

  if (now > end) {
    return CouponStatus.EXPIRED;
  }

  return CouponStatus.ACTIVE;
};
