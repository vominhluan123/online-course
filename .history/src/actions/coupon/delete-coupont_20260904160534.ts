"use server";
import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";
import { revalidatePath } from "next/cache";

export async function deleteCoupon(code: string) {
  try {
    await ConnectToDatabase();
    const coupon = await Coupon.findOneAndDelete({ code }).lean();
    if (!coupon) {
      return null;
    }
    revalidatePath("/manage/coupon");
    return {
      success: true,
      message: "Xóa khóa học thành công",
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
