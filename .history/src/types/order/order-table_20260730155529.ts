import { OrderStatus } from "../order/order-status.enum";

export type OrderTableType = {
  _id: string;
  code: string;
  course: {
    _id: string;
    title: string;
  };
  user: {
    _id: string;
    email: string;
  };
  price: number;
  status: OrderStatus;
  voucherCode?: string;
  createdAt: s;
};
