import mongoose, { Schema, Types } from "mongoose";

export interface CouponType {
  
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
