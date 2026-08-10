import { OrderStatus } from "@/types/order";

export const OrderStatusConfig = {
  [OrderStatus.APPROVED]: {
    label: "Đã thanh toán",
    className:
      "bg-green-100 text-green-700 border-green-200 hover:bg-green-100",
  },

  [OrderStatus.PENDING]: {
    label: "Chờ thanh toán",
    className:
      "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100",
  },

  [OrderStatus.REJECTED]: {
    label: "Từ chối",
    className: "bg-red-100 text-red-700 border-red-200 hover:bg-red-100",
  },
} as const;
