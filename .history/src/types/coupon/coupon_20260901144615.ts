export type CouponDiscountType = "percent" | "amount";

export type CouponTableType = {
  _id: string;
  title: string;
  code: string;
  startDate: string;
  endDate: string;
  type: CouponDiscountType;
  value: number;
  active: boolean;
  maxUses: number;
  usedCount: number;
  courseTitle: string;
};
