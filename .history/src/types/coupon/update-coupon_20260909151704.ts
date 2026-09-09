export type UpdateCouponParams = {
  code: string;
  title: string;
  startDate: Date;
  endDate: Date;
  type: "percent" | "amount";
  value: number;
  active: boolean;
  maxUses: number;
  courseId: string;
};
