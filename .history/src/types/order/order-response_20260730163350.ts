import { OrderStatus } from "./order-status.enum";

export type OrderResponse = {
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
  originalPrice: number;
  salePrice: number;
  discount: number;
  total: number;
  voucher?: string;
  status: OrderStatus;
  createdAt: string;
};
