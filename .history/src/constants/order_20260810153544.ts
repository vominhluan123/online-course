import { OrderStatus } from "@/types/order";

export const OrderStatusConfig = {
  [OrderStatus.PAID]: {
    label: "Đã thanh toán",
    className: "bg-green-50 text-green-700 border-green-200 hover:bg-green-50",
    dotClassName: "bg-green-500",
  },

  [OrderStatus.PENDING]: {
    label: "Chờ thanh toán",
    className:
      "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-50",
    dotClassName: "bg-yellow-500",
  },

  [OrderStatus.CANCELLED]: {
    label: "Hủy đơn hàng",
    className: "bg-red-50 text-red-700 border-red-200 hover:bg-red-50",
    dotClassName: "bg-red-500",
  },
} as const;
