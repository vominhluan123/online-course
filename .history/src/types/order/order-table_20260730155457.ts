import { OrderStatus } from "../order/order-status.enum";

export type OrderTableType = {
  _id: string;
  code: string;
  course: {
    _id: string;
    title: string;
  };
  email: string;
  price: number;
  status: OrderStatus;
  voucherCode?: string;
  createdAt: Date;
};
