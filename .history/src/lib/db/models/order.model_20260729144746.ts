import { Status } from "@/types/order";
import mongoose, { Schema, Types } from "mongoose";

export interface OrderType {
  _id?: Types.ObjectId;

  code: string;

  user: Types.ObjectId;

  course: Types.ObjectId;

  originalPrice: number; // Giá gốc

  salePrice: number; // Giá giảm

  discount: number; // Voucher giảm

  total: number;

  voucher?: Types.ObjectId | null;

  status: Status;

  createdAt?: Date;

  updatedAt?: Date;
}
const orderSchema = new Schema<OrderType>(
  {
    code: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },

    course: {
      type: Types.ObjectId,
      ref: "Course",
      required: true,
    },

    originalPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    salePrice: {
      type: Number,
      required: true,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
    },

    total: {
      type: Number,
      required: true,
      min: 0,
    },

    voucher: {
      type: Types.ObjectId,
      ref: "Voucher",
      default: null,
    },

    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.PENDING,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Order ||
  mongoose.model<OrderType>("Order", orderSchema);
