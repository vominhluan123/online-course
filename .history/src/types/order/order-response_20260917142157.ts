import { OrderStatus } from "./order-status.enum";

export type OrderResponse = {
  _id: string;
  code: string;
  course: {
    _id: string;
    title: string;
  } | null;
  user: {
    _id: string;
    email: string;
  } | null;
  originalPrice: number;
  salePrice: number;
  discount: number;
  total: number;
  voucher?: string;
  status: OrderStatus;
  createdAt: string;
};
