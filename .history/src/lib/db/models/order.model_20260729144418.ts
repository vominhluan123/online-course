import { Status } from "@/types/order";

export interface OrderType {
  _id?: Types.ObjectId;

  code: string;

  user: Types.ObjectId;

  course: Types.ObjectId;

  originalPrice: number;

  salePrice: number;

  discount: number;

  total: number;

  voucher?: Types.ObjectId | null;

  status: Status;

  createdAt?: Date;

  updatedAt?: Date;
}
