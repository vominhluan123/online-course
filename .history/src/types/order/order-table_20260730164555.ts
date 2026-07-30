import { OrderStatus } from "../order/order-status.enum";

export type OrderTableType = {
  _id: string;
  code: string;
  course: string;
  user: string;
  total: number;
  status: OrderStatus;
  voucherCode?: string;
  createdAt: string;
};
