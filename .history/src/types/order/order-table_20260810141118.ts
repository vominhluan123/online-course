import { OrderStatus } from "../order/order-status.enum";

export type OrderTableType = {
  _id: string;
  code: string;
  course: string;
  user: string;
  originalPrice: number; // giá gốc,
  salePrice: number; // giá khuyến mãi,
  discount: number; // mức giảm giá,
  total: number; // tổng cộng,
  voucherCode?: string; // mã voucher?
  status: OrderStatus;
  createdAt: string;
};
