"use server";
import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";
type CreateCouponParams = {
  title: string;
  code: string;
  startDate: Date;
  endDate: Date;
  type: "percent" | "amount";
  value: number;
  active: boolean;
  maxUses: number;
  courseId: string;
};
export async function createCoupon(params: CreateCouponParams) {
  try {
    await ConnectToDatabase();
    const newCoupon = await Coupon.create({
      ...params

      // Form dùng courseId
      // Model dùng course
      course: params.courseId,
    });
    return JSON.parse(JSON.stringify(newCoupon));
  } catch (error) {
    console.log(error);
  }
}
