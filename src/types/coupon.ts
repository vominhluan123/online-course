export type CouponType = "percent" | "amount";

export type CouponTableType = {
  _id: string;
  title: string;
  code: string;
  startDate: string;
  endDate: string;
  type: CouponType;
  value: number;
  active: boolean;
  maxUses: number;
  usedCount: number;
  courseTitle: string;
};
