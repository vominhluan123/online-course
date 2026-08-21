import mongoose, { Schema, Types } from "mongoose";

export interface CouponType {
  
}
const CouponSchema = new Schema<CouponType>(
  
);

export const Coupon =
  mongoose.models.Coupon || mongoose.model<CouponType>("Coupon", CouponSchema);
