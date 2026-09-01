import { CouponStatus, statusLabel } from "@/types/coupon";

export const CouponConfig = {
  [CouponStatus.ACTIVE]: {
    label: statusLabel.ACTIVE,
    className: "bg-green-50 text-green-700 border-green-200 hover:bg-green-50",
    dotClassName: "bg-green-500",
  },

  [CouponStatus.UPCOMING]: {
    label: statusLabel.UPCOMING,
    className:
      "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-50",
    dotClassName: "bg-yellow-500",
  },

  [CouponStatus.EXPIRED]: {
    label: statusLabel.EXPIRED,
    className: "bg-red-50 text-red-700 border-red-200 hover:bg-red-50",
    dotClassName: "bg-red-500",
  },

  [CouponStatus.INACTIVE]: {
    label: statusLabel.INACTIVE,
    className: "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-50",
    dotClassName: "bg-gray-500",
  },
} as const;
