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
      title: params.title,
      code: params.code,
      startDate: params.startDate,
      endDate: params.endDate,
      type: params.type,
      value: params.value,
      active: params.active,
      maxUses: params.maxUses,

      // Form dùng courseId
      // Model dùng course
      course: params.courseId,
    });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(newCoupon)),
    };
  } catch (error: unknown) {
    console.log(error);

    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === 11000
    ) {
      return {
        success: false,
        message: "Mã giảm giá này đã tồn tại",
      };
    }

    return {
      success: false,
      message: "Có lỗi xảy ra khi tạo mã giảm giá",
    };
  }
}
