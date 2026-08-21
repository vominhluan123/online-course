import { CouponStatus } from "@/types/Coupon";
import mongoose, { Schema, Types } from "mongoose";

export interface CouponType {
  _id?: Types.ObjectId;

  code: string;

  user: Types.ObjectId;

  course: Types.ObjectId;

  originalPrice: number; // Giá gốc

  salePrice: number; // Giá giảm

  discount: number; // Voucher giảm

  total: number; // tổng tiền

  voucher?: Types.ObjectId | null; // mã giảm giá

  status: CouponStatus;

  createdAt?: Date;

  updatedAt?: Date;
}
const CouponSchema = new Schema<CouponType>(
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
      enum: Object.values(CouponStatus),
      default: CouponStatus.PENDING,
    },
  },
  {
    timestamps: true,
  },
);

export const Coupon =
  mongoose.models.Coupon || mongoose.model<CouponType>("Coupon", CouponSchema);
