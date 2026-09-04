"use server";

import { ConnectToDatabase } from "@/lib/db";
import { Coupon } from "@/lib/db/models/coupon.model";
import { revalidatePath } from "next/cache";

export async function deleteCoupont(code: string) {
  try {
    await ConnectToDatabase();

    const coupon = await Coupon.findOneAndDelete({ code }).lean();

    if (!coupon) {
      return null;
    }
    revalidatePath("");
    return JSON.parse(JSON.stringify(coupon));
  } catch (error) {
    console.log(error);
    return null;
  }
}
