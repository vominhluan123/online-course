import { OrderStatus } from "../order/order-status.enum";

export type OrderTableType = {
  _id: string;
  code: string;
  course: string;
  user: string;
  originalPrice: number; //
  salePrice: number;
  discount: number;
  total: number;
  voucherCode?: string;
  status: OrderStatus;
  createdAt: string;
};
