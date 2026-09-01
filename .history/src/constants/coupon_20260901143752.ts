import { CouponStatus, statusLabel } from "@/types/coupon";

export const CouponConfig = {
  [CouponStatus.ACTIVE]: {
    label: statusLabel.ACTIVE,
    className: "bg-green-50 text-green-700 border-green-200 hover:bg-green-50",
    dotClassName: "bg-green-500",
  },

  [CouponStatus.INACTIVE]: {
    label: statusLabel.INACTIVE,
    className: "bg-red-50 text-red-700 border-red-200 hover:bg-red-50",
    dotClassName: "bg-red-500",
  },
} as const;
