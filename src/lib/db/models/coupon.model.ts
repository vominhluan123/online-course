import mongoose, { Schema, Types } from "mongoose";

export type CouponDiscountType = "percent" | "amount";

export interface CouponType {
  title: string;
  code: string;
  course: Types.ObjectId;

  type: CouponDiscountType;
  value: number;

  startDate: Date;
  endDate: Date;

  active: boolean;

  maxUses: number;
  usedCount: number;

  _destroy: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}

const CouponSchema = new Schema<CouponType>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    type: {
      type: String,
      enum: ["percent", "amount"],
      required: true,
    },

    value: {
      type: Number,
      required: true,
      min: 1,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    active: {
      type: Boolean,
      default: true,
    },

    maxUses: {
      type: Number,
      required: true,
      min: 1,
    },

    usedCount: {
      type: Number,
      default: 0,
    },

    _destroy: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Coupon =
  mongoose.models.Coupon || mongoose.model<CouponType>("Coupon", CouponSchema);
